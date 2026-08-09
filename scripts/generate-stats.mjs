#!/usr/bin/env node
// Regenerates stats/dark.svg and stats/light.svg from live GitHub data
// (contributions, streaks, commits, top languages) using the same
// hand-built card design the repo already uses — just with real numbers
// instead of numbers baked in by hand.
//
// Requires a GitHub token with `repo` + `read:user` scope (to see private
// contributions/languages) passed as GH_STATS_TOKEN or GITHUB_TOKEN.

const TOKEN = process.env.GH_STATS_TOKEN || process.env.GITHUB_TOKEN;
const LOGIN = process.env.STATS_LOGIN || 'niranjan910';
const MAX_LANGUAGES = 12;

if (!TOKEN) {
  console.error('Missing GH_STATS_TOKEN (or GITHUB_TOKEN) env var with repo + read:user scope.');
  process.exit(1);
}

async function ghGraphQL(query, variables) {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  if (json.errors) {
    throw new Error(`GitHub GraphQL error: ${JSON.stringify(json.errors)}`);
  }
  return json.data;
}

async function getContributionYears() {
  const data = await ghGraphQL(
    `query { viewer { contributionsCollection { contributionYears } } }`,
    {}
  );
  return data.viewer.contributionsCollection.contributionYears;
}

async function getYearCalendar(year, now) {
  const yearEnd = new Date(Date.UTC(year, 11, 31, 23, 59, 59));
  const to = yearEnd < now ? yearEnd : now;
  const from = new Date(Date.UTC(year, 0, 1, 0, 0, 0));
  const data = await ghGraphQL(
    `query($from: DateTime!, $to: DateTime!) {
      viewer {
        contributionsCollection(from: $from, to: $to) {
          totalCommitContributions
          contributionCalendar {
            totalContributions
            weeks { contributionDays { date contributionCount } }
          }
        }
      }
    }`,
    { from: from.toISOString(), to: to.toISOString() }
  );
  return data.viewer.contributionsCollection;
}

async function getAllLanguages() {
  const sizes = new Map(); // name -> { size, color }
  let cursor = null;
  let hasNextPage = true;
  while (hasNextPage) {
    const data = await ghGraphQL(
      `query($cursor: String) {
        viewer {
          repositories(first: 100, after: $cursor, ownerAffiliations: [OWNER], isFork: false) {
            pageInfo { hasNextPage endCursor }
            nodes {
              languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
                edges { size node { name color } }
              }
            }
          }
        }
      }`,
      { cursor }
    );
    const repos = data.viewer.repositories;
    for (const repo of repos.nodes) {
      for (const edge of repo.languages.edges) {
        const prev = sizes.get(edge.node.name);
        const size = (prev?.size || 0) + edge.size;
        sizes.set(edge.node.name, { size, color: edge.node.color || '#8a8a8a' });
      }
    }
    hasNextPage = repos.pageInfo.hasNextPage;
    cursor = repos.pageInfo.endCursor;
  }
  return sizes;
}

function computeStreaks(days, todayISO) {
  let longestLen = 0, longestStart = null, longestEnd = null;
  let runLen = 0, runStart = null;
  for (const d of days) {
    if (d.count > 0) {
      if (runLen === 0) runStart = d.date;
      runLen++;
      if (runLen > longestLen) {
        longestLen = runLen;
        longestStart = runStart;
        longestEnd = d.date;
      }
    } else {
      runLen = 0;
      runStart = null;
    }
  }

  let idx = days.length - 1;
  while (idx >= 0 && days[idx].date > todayISO) idx--;
  if (idx >= 0 && days[idx].date === todayISO && days[idx].count === 0) idx--;

  let curLen = 0, curStart = null, curEnd = null;
  while (idx >= 0 && days[idx].count > 0) {
    if (curEnd === null) curEnd = days[idx].date;
    curStart = days[idx].date;
    curLen++;
    idx--;
  }

  return {
    current: { len: curLen, start: curStart, end: curEnd },
    longest: { len: longestLen, start: longestStart, end: longestEnd },
  };
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function fmtDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return { y, label: `${MONTHS[m - 1]} ${d}` };
}

function formatDateRange(startISO, endISO) {
  if (!startISO || !endISO) return '—';
  const s = fmtDate(startISO), e = fmtDate(endISO);
  if (s.y === e.y) return `${s.label} – ${e.label}, ${e.y}`;
  return `${s.label}, ${s.y} – ${e.label}, ${e.y}`;
}

function formatPercent(p) {
  if (p < 0.05) return '<0.1%';
  return `${p.toFixed(1)}%`;
}

function odometerSteps(final) {
  return [0, Math.round(final / 3), Math.round((final * 2) / 3), final];
}

const THEMES = {
  dark: {
    cardFill: '#0A0A0A', cardStroke: '#242424', shadowColor: '#000000', shadowOpacity: '0.5',
    accent: '#A3E635', text: '#EDEDED', subtext: '#8A8A8A', barTrack: '#1C1C1C',
  },
  light: {
    cardFill: '#FFFFFF', cardStroke: '#E2E2E2', shadowColor: '#0A0A0A', shadowOpacity: '0.12',
    accent: '#4D7C0F', text: '#14171A', subtext: '#6B7280', barTrack: '#EFEFEF',
  },
};

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

const GRID_ICON = (accent) => `<rect x="-6.0" y="-6.0" width="2.6" height="2.6" rx="0.6" fill="${accent}" opacity="0.25"/><rect x="-1.8" y="-6.0" width="2.6" height="2.6" rx="0.6" fill="${accent}" opacity="0.5"/><rect x="2.4" y="-6.0" width="2.6" height="2.6" rx="0.6" fill="${accent}" opacity="0.9"/><rect x="-6.0" y="-1.8" width="2.6" height="2.6" rx="0.6" fill="${accent}" opacity="0.5"/><rect x="-1.8" y="-1.8" width="2.6" height="2.6" rx="0.6" fill="${accent}" opacity="0.9"/><rect x="2.4" y="-1.8" width="2.6" height="2.6" rx="0.6" fill="${accent}" opacity="0.25"/><rect x="-6.0" y="2.4" width="2.6" height="2.6" rx="0.6" fill="${accent}" opacity="0.9"/><rect x="-1.8" y="2.4" width="2.6" height="2.6" rx="0.6" fill="${accent}" opacity="0.25"/><rect x="2.4" y="2.4" width="2.6" height="2.6" rx="0.6" fill="${accent}" opacity="0.5"/>`;
const FLAME_ICON = (accent) => `<path d="M0,-8 C3.2,-4.8 4.6,-1.8 3.4,1 C5.4,-0.4 6,1.6 5,3.4 C3.6,6 0.6,7.6 -1.4,7 C-4.6,6 -6,3 -4.8,0.4 C-5.6,1 -6,-0.6 -4.8,-2 C-4,-3 -2.8,-3 -2.6,-4.2 C-2.4,-5.4 -1.6,-7 0,-8 Z" fill="${accent}"/>`;
const COMMIT_ICON = (accent) => `<line x1="0" y1="-8" x2="0" y2="-3.4" stroke="${accent}" stroke-width="1.6"/><circle cx="0" cy="0" r="3.2" fill="none" stroke="${accent}" stroke-width="1.6"/><line x1="0" y1="3.4" x2="0" y2="8" stroke="${accent}" stroke-width="1.6"/>`;

function renderStatBlock({ x, textX, iconBegin, icon, accent, subtext, valueSteps, label, dateRange }) {
  const stepDur = 0.2667;
  const finalBegin = iconBegin + stepDur * 2 + 0.2666;
  const labelBegin = finalBegin + 0.05;
  let valueSvg = '';
  valueSteps.slice(0, -1).forEach((v, i) => {
    const begin = iconBegin + stepDur * i;
    valueSvg += `<text x="${textX}" y="274" font-size="32" font-weight="700" fill="${accent}" text-anchor="start" opacity="0">${v}<animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.95;1" begin="${begin.toFixed(3)}s" dur="0.267s" fill="freeze"/></text>\n`;
  });
  valueSvg += `<text x="${textX}" y="274" font-size="32" font-weight="700" fill="${accent}" text-anchor="start" opacity="0">${valueSteps.at(-1)}<animate attributeName="opacity" values="0;1" keyTimes="0;1" begin="${finalBegin.toFixed(3)}s" dur="0.15s" fill="freeze"/></text>\n`;

  let dateRangeSvg = '';
  if (dateRange !== undefined) {
    const dateBegin = labelBegin + 0.35;
    dateRangeSvg = `<text x="${textX}" y="312" font-size="10" letter-spacing="0.2" fill="${subtext}" opacity="0">${esc(dateRange)}<animate attributeName="opacity" values="0;1" keyTimes="0;1" begin="${dateBegin.toFixed(3)}s" dur="0.25s" fill="freeze"/></text>\n`;
  }

  return `    <g transform="translate(${x},232)">
      <circle r="16" fill="${accent}" opacity="0.12"/>
      <g>
        ${icon(accent)}
        <animateTransform attributeName="transform" type="scale" values="0;1.18;1" keyTimes="0;0.65;1" begin="${iconBegin.toFixed(3)}s" dur="0.5s" fill="freeze"/>
        <animateTransform attributeName="transform" type="scale" values="1;1.07;1" keyTimes="0;0.5;1" begin="${(iconBegin + 0.5).toFixed(3)}s" dur="2.6s" repeatCount="indefinite"/>
      </g>
    </g>
${valueSvg}<text x="${textX}" y="296" font-size="12" letter-spacing="0.4" fill="${subtext}" opacity="0">${esc(label)}<animate attributeName="opacity" values="0;1" keyTimes="0;1" begin="${labelBegin.toFixed(3)}s" dur="0.25s" fill="freeze"/></text>
${dateRangeSvg}`;
}

function renderLanguageRow({ x, pctX, rowIndex, lang, text, subtext, barTrack }) {
  const nameBegin = 2.9 + rowIndex * 0.15;
  const barBegin = nameBegin + 0.1;
  const pctBegin = nameBegin + 0.85;
  const y = 356 + rowIndex * 34;
  return `        <text x="${x}" y="${y}" font-size="12" fill="${text}" opacity="0">${esc(lang.name)}
          <animate attributeName="opacity" values="0;1" keyTimes="0;1" begin="${nameBegin.toFixed(3)}s" dur="0.3s" fill="freeze"/>
        </text>
        <rect x="${x}" y="${y + 8}" width="388" height="8" rx="4" fill="${barTrack}"/>
        <rect x="${x}" y="${y + 8}" width="0" height="8" rx="4" fill="${lang.color}">
          <animate attributeName="width" from="0" to="${lang.barWidth}" begin="${barBegin.toFixed(3)}s" dur="0.9s" calcMode="spline" keySplines="0.25 0.1 0.25 1" fill="freeze"/>
        </rect>
        <text x="${pctX}" y="${y}" font-size="12" text-anchor="end" fill="${subtext}" opacity="0">${esc(lang.percentLabel)}
          <animate attributeName="opacity" values="0;1" keyTimes="0;1" begin="${pctBegin.toFixed(3)}s" dur="0.3s" fill="freeze"/>
        </text>
`;
}

function renderCard(theme, data) {
  const t = THEMES[theme];
  const left = data.languages.slice(0, 6);
  const right = data.languages.slice(6, 12);
  let languageRows = '';
  left.forEach((lang, i) => {
    languageRows += renderLanguageRow({ x: 32, pctX: 420, rowIndex: i, lang, text: t.text, subtext: t.subtext, barTrack: t.barTrack });
  });
  right.forEach((lang, i) => {
    languageRows += renderLanguageRow({ x: 460, pctX: 848, rowIndex: i, lang, text: t.text, subtext: t.subtext, barTrack: t.barTrack });
  });

  const statsBlock = [
    renderStatBlock({
      x: 58, textX: 40, iconBegin: 1.4, icon: GRID_ICON, accent: t.accent, subtext: t.subtext,
      valueSteps: odometerSteps(data.totalContributions), label: 'Total Contributions',
    }),
    renderStatBlock({
      x: 268, textX: 250, iconBegin: 1.5, icon: FLAME_ICON, accent: t.accent, subtext: t.subtext,
      valueSteps: odometerSteps(data.currentStreak.len), label: 'Current Streak', dateRange: data.currentStreak.range,
    }),
    renderStatBlock({
      x: 478, textX: 460, iconBegin: 1.6, icon: FLAME_ICON, accent: t.accent, subtext: t.subtext,
      valueSteps: odometerSteps(data.longestStreak.len), label: 'Longest Streak', dateRange: data.longestStreak.range,
    }),
    renderStatBlock({
      x: 688, textX: 670, iconBegin: 1.7, icon: COMMIT_ICON, accent: t.accent, subtext: t.subtext,
      valueSteps: odometerSteps(data.totalCommits), label: 'Total Commits',
    }),
  ].join('\n');

  return `<svg width="880" height="406" viewBox="0 0 880 406" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="GitHub stats for ${esc(data.login)}">
  <title>GitHub stats for ${esc(data.login)}</title>
  <defs>
    <filter id="shadow-${theme}" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="6" stdDeviation="14" flood-color="${t.shadowColor}" flood-opacity="${t.shadowOpacity}"/>
    </filter>
    <filter id="glow-${theme}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="30"/>
    </filter>
    <clipPath id="cardClip-${theme}">
      <rect x="1" y="1" width="878" height="404" rx="18"/>
    </clipPath>
  </defs>

  <g filter="url(#shadow-${theme})">
    <rect x="1" y="1" width="878" height="404" rx="18" fill="${t.cardFill}" stroke="${t.cardStroke}" stroke-width="1"/>
  </g>

  <g clip-path="url(#cardClip-${theme})">
    <circle cx="820" cy="20" r="120" fill="${t.accent}" opacity="0.08" filter="url(#glow-${theme})">
      <animate attributeName="opacity" values="0.05;0.11;0.05" keyTimes="0;0.5;1" dur="6s" repeatCount="indefinite"/>
    </circle>

    <circle cx="760" cy="40" r="2.0" fill="${t.accent}" opacity="0.08"><animate attributeName="opacity" values="0.06;0.55;0.06" keyTimes="0;0.5;1" begin="0.0s" dur="3.2s" repeatCount="indefinite"/></circle>
    <circle cx="800" cy="90" r="1.4" fill="${t.accent}" opacity="0.08"><animate attributeName="opacity" values="0.06;0.4;0.06" keyTimes="0;0.5;1" begin="0.6s" dur="2.6s" repeatCount="indefinite"/></circle>
    <circle cx="820" cy="55" r="1.8" fill="${t.accent}" opacity="0.08"><animate attributeName="opacity" values="0.06;0.5;0.06" keyTimes="0;0.5;1" begin="1.2s" dur="3.8s" repeatCount="indefinite"/></circle>
    <circle cx="700" cy="130" r="1.3" fill="${t.accent}" opacity="0.08"><animate attributeName="opacity" values="0.06;0.35;0.06" keyTimes="0;0.5;1" begin="0.3s" dur="2.9s" repeatCount="indefinite"/></circle>
    <circle cx="60" cy="320" r="1.6" fill="${t.accent}" opacity="0.08"><animate attributeName="opacity" values="0.06;0.4;0.06" keyTimes="0;0.5;1" begin="0.9s" dur="3.4s" repeatCount="indefinite"/></circle>
    <circle cx="830" cy="320" r="1.4" fill="${t.accent}" opacity="0.08"><animate attributeName="opacity" values="0.06;0.45;0.06" keyTimes="0;0.5;1" begin="1.6s" dur="3.0s" repeatCount="indefinite"/></circle>
    <circle cx="140" cy="30" r="1.5" fill="${t.accent}" opacity="0.08"><animate attributeName="opacity" values="0.06;0.35;0.06" keyTimes="0;0.5;1" begin="2.0s" dur="3.6s" repeatCount="indefinite"/></circle>

    <g transform="translate(0,-174)">
    <g font-family="ui-monospace, 'JetBrains Mono', 'SFMono-Regular', Menlo, Consolas, monospace">

${statsBlock}
    </g>

    <text x="32" y="338" font-size="13" letter-spacing="0.6" fill="${t.subtext}"
      font-family="ui-monospace, 'JetBrains Mono', 'SFMono-Regular', Menlo, Consolas, monospace" opacity="0">TOP LANGUAGES
      <animate attributeName="opacity" values="0;1" keyTimes="0;1" begin="2.7s" dur="0.3s" fill="freeze"/>
    </text>

    <g font-family="ui-monospace, 'JetBrains Mono', 'SFMono-Regular', Menlo, Consolas, monospace">
${languageRows}    </g>
  </g>
  </g>
</svg>
`;
}

async function main() {
  const now = new Date();
  const todayISO = now.toISOString().slice(0, 10);

  console.error('Fetching contribution years...');
  const years = await getContributionYears();

  console.error(`Fetching calendars for ${years.length} year(s)...`);
  let totalContributions = 0;
  let totalCommits = 0;
  const dayMap = new Map();
  for (const year of years) {
    const collection = await getYearCalendar(year, now);
    totalContributions += collection.contributionCalendar.totalContributions;
    totalCommits += collection.totalCommitContributions;
    for (const week of collection.contributionCalendar.weeks) {
      for (const day of week.contributionDays) {
        dayMap.set(day.date, day.contributionCount);
      }
    }
  }
  const days = [...dayMap.entries()]
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => (a.date < b.date ? -1 : 1));

  const streaks = computeStreaks(days, todayISO);

  console.error('Fetching language breakdown...');
  const languageSizes = await getAllLanguages();
  const totalLanguageSize = [...languageSizes.values()].reduce((sum, l) => sum + l.size, 0) || 1;
  const languages = [...languageSizes.entries()]
    .sort((a, b) => b[1].size - a[1].size)
    .slice(0, MAX_LANGUAGES)
    .map(([name, { size, color }]) => {
      const percent = (size / totalLanguageSize) * 100;
      return {
        name,
        color,
        percentLabel: formatPercent(percent),
        barWidth: Math.round((percent / 100) * 388),
      };
    });

  const data = {
    login: LOGIN,
    totalContributions,
    totalCommits,
    currentStreak: { len: streaks.current.len, range: formatDateRange(streaks.current.start, streaks.current.end) },
    longestStreak: { len: streaks.longest.len, range: formatDateRange(streaks.longest.start, streaks.longest.end) },
    languages,
  };

  console.error(
    `Total contributions: ${totalContributions}, current streak: ${data.currentStreak.len}, ` +
    `longest streak: ${data.longestStreak.len}, total commits: ${totalCommits}, languages: ${languages.length}`
  );

  const fs = await import('node:fs/promises');
  await fs.mkdir('stats', { recursive: true });
  await fs.writeFile('stats/dark.svg', renderCard('dark', data));
  await fs.writeFile('stats/light.svg', renderCard('light', data));
  console.error('Wrote stats/dark.svg and stats/light.svg');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
