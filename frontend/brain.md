# 🧠 Niranjan Kumar — Portfolio — Project Brain

> **Single source of truth for this project.** Read this first before making
> structural changes (content model, routing, design system).

- **Site:** Personal portfolio for Niranjan Kumar — Frontend Developer
- **Live:** https://niranjan910-ks6x.vercel.app *(unconfirmed for the current redesign — verify the Vercel project is actually pointed at this codebase before treating this URL as authoritative)*
- **This repo's home:** lives at `frontend/` inside https://github.com/niranjan910/niranjan910 (the GitHub profile repo) — the profile's root `README.md`, `brain.md`, `.claude/`, `.github/` are a **separate, unrelated system** (profile-automation tooling); don't confuse the two.
- **Local dev root:** `d:\portfolio_pkg` (not itself a git repo — it's a working copy synced into the GitHub repo above)
- **Stack:** Next.js 14.2.5 (App Router) · TypeScript · Tailwind CSS 3 · `motion` (the framer-motion successor) · next/font (Inter, Space Grotesk, JetBrains Mono)
- **Contact:** niranjan991100@gmail.com · +91 96411 43646

---

## 🚦 STATUS — how far the code is live

**Last updated: 2026-07-03**

| Layer | State |
|-------|-------|
| Local (`npm run dev`) | ✅ All changes present & tested |
| GitHub (`niranjan910/niranjan910`, `frontend/`) | ⏳ Synced via manual copy + push per session — no CI/CD from this local folder, but see below |
| Live (Vercel) | ✅ Confirmed — the `niranjan910` Vercel project (aliased at **niranjan910.vercel.app**, not the `-ks6x` URL in `data/site.ts`) is Git-connected to this repo and auto-deploys on every push to `main`. `data/site.ts`'s `site.url` is still the stale `-ks6x` value — hasn't been asked to fix it yet, but the correct one is confirmed. |

**How changes ship:** this local folder is a plain working copy, not a git repo. Each session's changes are copied into a fresh clone of `niranjan910/niranjan910` (excluding `node_modules`, `.next`, build artifacts), committed under `frontend/`, and pushed — either directly to `main` or via a feature branch + PR depending on what was asked. Since the connected Vercel project auto-deploys on push to `main`, **any push actually ships to production** — this is no longer just a GitHub-only sync step.

---

## 🎨 Design System

Everything lives in `tailwind.config.ts` + `app/globals.css` — never hardcode colors/fonts outside these.

```css
--base:          #0A0A0A   /* page background */
--surface:       #121212   /* card/elevated background */
--foreground:    #EDEDED   /* primary text (soft off-white, not pure white) */
--muted:         #8A8A8A   /* secondary text */
--accent:        #A3E635   /* lime-green accent */
--accent-hover:  #BEF264
```

- **Fonts:** `--font-space-grotesk` (display/headings), `--font-inter` (body), `--font-jetbrains-mono` (mono/labels) — wired via `next/font` in `app/layout.tsx`, referenced through Tailwind's `font-display` / `font-sans` / `font-mono`.
- **Type scale:** `text-display-lg` / `text-display-md` use `clamp()` for fluid responsive sizing — don't hardcode `text-6xl` etc. for hero/section headings.
- **Shadows:** `shadow-glow`, `shadow-glow-soft`, `shadow-card` — reuse these for anything that should carry the lime accent glow.
- **Motion:** shared variants in `lib/motion.ts` (`fadeUp`, `staggerContainer`, `viewportOnce`) — reuse rather than inlining new transition configs, so every section reveals consistently.
- **Reduced motion:** `app/globals.css` globally kills animation/transition duration under `prefers-reduced-motion: reduce`. Any *new* JS-driven animation (e.g. pointer-tracked tilt) must separately check `useReducedMotion()` from `motion/react` — the global CSS rule doesn't stop JS-computed transforms.
- **Container rhythm:** `.container-page` (max-w-6xl, responsive padding) wraps every section — don't introduce a second max-width convention.

---

## 🗂️ Structure

```
portfolio_pkg/
├── app/
│   ├── page.tsx                  ← home ("one-pager": Hero → About → Projects → Experience → Certifications → Contact)
│   ├── layout.tsx                ← fonts, metadata, noise/grid background
│   ├── sitemap.ts                ← home + every project's /projects/[slug]
│   ├── robots.ts
│   └── projects/[slug]/page.tsx  ← per-project case-study page (generateStaticParams from data/projects.ts)
├── components/
│   ├── sections/                 ← one component per home-page section (Hero, About, Projects, Experience, Certifications, Contact, Navbar, Footer)
│   ├── projects/ProjectHero.tsx  ← 3D pointer-tilt hero used on case-study pages
│   └── ui/                       ← Reveal, SectionHeading, icons.tsx (inline SVGs, no icon-library dependency)
├── data/
│   ├── site.ts                   ← identity: name, title, tagline, email, phone, socials, SEO url/ogImage
│   ├── projects.ts               ← project list + case-study content (see below)
│   ├── experience.ts / certifications.ts / skills.ts
└── lib/motion.ts                 ← shared animation variants
```

### Routing model — one-pager + case studies

The home page (`/`) stays a single scrolling page (anchor-linked sections via the navbar). **Projects break out into their own pages**: `data/projects.ts` is the single list; every entry needs a unique `slug`, and `app/projects/[slug]/page.tsx` statically generates one page per entry (`generateStaticParams`), with per-project `<title>`/OG metadata and a `notFound()` for unknown slugs. To add a project:

1. Add an entry to `projects` in `data/projects.ts` (slug, tech, links, and optionally `overview` / `highlights` / `stats` / `eventDate` / `location` for the case-study page — these are all optional, the page degrades gracefully without them).
2. That's it — the home grid card and the `/projects/[slug]` page both read from the same array; no other file needs touching.

### `ProjectHero` (3D case-study hero)

Pointer-driven tilt via `motion`'s `useMotionValue` + `useSpring` + `useTransform` (real `perspective` + `rotateX`/`rotateY`, layered `translateZ` for the chrome-bar/body/stats depth) — no three.js/WebGL dependency. Mouse-only (`pointerType !== "mouse"` bails out on touch), fully static under `useReducedMotion()`. Renders a stylized "browser card" (fake chrome bar with the live URL, monogram, stat chips) so it looks premium without needing a real product screenshot — pass a real `image` on the project entry later if/when screenshots exist.

---

## 📄 Content model — `data/site.ts`

Known placeholders still unfilled:
- `resumeUrl: "/resume.pdf"` — file doesn't exist in `/public` yet; the Navbar/mobile-menu "Resume" button will 404 until it's added.
- `ogImage: "/og.png"` — same, doesn't exist yet; social share previews will show a broken image until added.
- `site.url` — set to `https://niranjan910-ks6x.vercel.app`, carried over from the old design's deploy. Reconfirm this is still the correct production URL for the redesigned multi-page site before relying on it for canonical/OG tags.

---

**2026-07-03 — NEXUS goes live, real LinkedIn experience data, certification badges/links, UI polish**
- `data/projects.ts`: NEXUS now has real `liveUrl` (https://personal-life-assistant.vercel.app) and `githubUrl` (https://github.com/niranjan910/Personal_life_assistant) — confirmed both are real/public/responding before wiring them in. `status: "In Development"` removed, so it now falls back to "Live in Production" everywhere (case-study hero badge, card pill) and shows "Visit Live Site"/"View Code" buttons that previously didn't exist. Deliberately **not** added to the home page's 3-slot "Live in production" preview (still EGN ConnectX, StudynLearn, Altus) — only appears on the full `/projects` page unless asked to bump one of the existing three.
- `data/experience.ts`: replaced with exact data transcribed from his LinkedIn experience section (a screenshot he shared directly) — corrected SmartSchool's title (was an embellished "Marketing Executive — Product & AI Initiatives", real LinkedIn title is just "Marketing Executive") and company name ("SmartSchool Education Ltd"), filled in Naresh i Technologies' real dates (Feb–Jul 2025, previously bracketed placeholders), added precise locations, and added a new `type` field (Full-time/Internship/Apprenticeship). **Added a third entry, TechieNest** (Data Science with ML apprenticeship, Aug 2024–Jan 2025, Jaipur) — this directly supersedes the 2026-07-02 entry below, which had classified TechieNest as "client, not a job" per his answer at the time; the LinkedIn screenshot showed it actually was a formal apprenticeship.
- `data/certifications.ts` + `components/ui/icons.tsx`: added 3 real LinkedIn Learning `credentialUrl` links he provided (Business Analysis, Public Speaking, Data Analysis — confirmed they match the Certificate IDs already visible on each cert image) and a new 8th certification, **"Introduction to Image Generation"** (Google Cloud Skills Boost) — fetched the live badge page via WebFetch + a Playwright screenshot to read the real title/date (Jun 30, 2026) since no date was available from a static fetch, then cropped the screenshot into a proper certificate thumbnail. Added colored issuer badge icons rendered as a circular chip on each cert thumbnail: hand-built Microsoft's official four-square mark and Google's four-color "G" (both well past what `simple-icons` offers — neither Microsoft nor LinkedIn exist in that package, confirmed by inspecting `Object.keys()`, likely the same trademark-policy removal noted below), plus `simple-icons`-sourced Anthropic/Wolfram paths in their real brand colors (temp-installed and uninstalled again, same pattern as the 2026-07-02 social icons work). `Certifications.tsx` also dropped the whole-card-as-link pattern in favor of an explicit **"Show Credentials"** button, only rendered when a `credentialUrl` exists.
- `components/sections/Companies.tsx`: two real layout bugs fixed after live/mobile testing — (1) on mobile the 7 logos were in a `flex-nowrap overflow-x-auto` row, so only 1–2 were visible without a non-obvious horizontal scroll; now a `grid-cols-2` grid below the heading on mobile. (2) On desktop, `flex-nowrap` with no shrink meant the heading text and logos literally overlapped once the row's natural width exceeded the ~1104px content area — a Playwright verification pass caught this after the mobile fix looked fine in isolation. Now `flex-wrap` on desktop so it wraps to a second line instead of overlapping. Also dropped the white `bg-white/95` pill wrapper per his request — logos render directly (each image already has its own baked-in background, black or white).
- `components/sections/Hero.tsx`: removed the socials-row + email line and the "Scroll" cue per his request — home page nav/footer already carry the social links, so this wasn't the only place to find them.
- Also fixed: a `.next` cache corruption after running `next build` while the dev server was still running against the same folder caused a `Cannot find module './vendor-chunks/@swc.js'` 500 on `/projects/nexus` — same root cause pattern as a prior session's "nav bar broken" report. Fix is always `rm -rf .next` + restart, not a code bug.
- Deploy note: confirmed via `vercel inspect` that `niranjan910.vercel.app` (not the `-ks6x` URL in `data/site.ts`) is the real production alias, auto-deploying on every push to `main` — this had been flagged as "unconfirmed" since the redesign; it's now confirmed working.

---

**2026-07-02 — Wired up real profile photo, logo mark, company logos, and certifications**
- New asset folders added to `/public`: `Profile_Image/`, `Logo/`, `companies/`, `certifications/`.
- `data/certifications.ts`: replaced the single bracketed placeholder with all 7 real certifications, transcribed directly from the certificate screenshots in `/public/certifications` (name/issuer/date read off each image, not invented). `credentialUrl` is only set for **Claude Code in Action** (Anthropic), since that's the only one with a verify link actually printed on the certificate — the LinkedIn Learning ones show a Certificate ID but no shareable URL on the image itself, so those are left unlinked rather than guessing a URL pattern.
- `components/sections/Certifications.tsx`: cards now show the certificate image as a thumbnail (was text-only before); grid widened to 3 columns on large screens.
- New `data/companies.ts` + rewritten `components/sections/Companies.tsx`: the trust-strip now renders real logo images instead of text pills, and intentionally pulls from a **separate list from `data/experience.ts`** — per his direction, it's a broader "companies & clients" strip (7 logos: Smartschool, StudynLearn, EGN India, EGN ConnectX, Naresh i Technologies, SNL, TechieNest) rather than strictly formal employers. **SNL and TechieNest are logo-only** — he confirmed they're clients/projects, not jobs, so they were deliberately *not* added to `data/experience.ts`.
- `components/sections/About.tsx`: avatar placeholder (monogram-in-a-box) replaced with the real photo at `/Profile_Image/About_1.png`, object-positioned to keep him in frame since the source photo is a wide whiteboard shot, not a tight headshot.
- `components/sections/Navbar.tsx` / `Footer.tsx`: the "NK" text monogram badge replaced with his real logo mark. The source file (`Logo/Niranjan.png`, 1536×1024) was a very soft/blurry glow-style "n" with a lot of empty transparent margin — auto-cropped to its content bounding box and re-centered on a padded square canvas (`Logo/Niranjan-mark.png`, 512×512) so it reads clearly at small navbar/footer sizes. `site.monogram` ("NK") is no longer referenced anywhere but was left in `data/site.ts` since it's harmless data.
- New `app/icon.png` (same cropped square mark) — Next.js App Router auto-picks this up as the favicon, no code change needed; confirmed via `next build` that `/icon.png` is generated as a route.
- Verified with `next build` (clean) and a Playwright screenshot pass across Navbar, Companies, About, Certifications, and Footer — no broken images, logo mark renders crisp (not blurry) at navbar size.

---

**2026-07-02 — Replaced hand-drawn Behance/Dribbble/Kaggle icons with accurate brand marks**
- The first pass at `BehanceIcon`/`DribbbleIcon`/`KaggleIcon` (hand-drawn approximations) looked wrong at render size — flagged directly by him. Replaced with the official path data from each brand's real logo, sourced by temporarily installing the `simple-icons` npm package (`npm view`/inspect only, then `npm uninstall`'d — it's a reference source, not a runtime dependency, keeping the project's "no icon-library dependency" architecture intact). `GithubIcon`/`XIcon` were also swapped to the exact official paths while at it (were close-but-approximate hand recollections before).
- Note: Kaggle's and Behance's real brand marks are lowercase wordmark logotypes ("kaggle", "Bē"), not abstract letter monograms — that's correct/intentional, not a bug, even though it reads as literal text at a glance.
- LinkedIn has no official icon in the `simple-icons` package (removed at some point, likely a trademark-policy reason) — its hand-authored path was left as-is since it wasn't flagged as inaccurate.

**2026-07-02 — Added Behance, Dribbble, Kaggle socials**
- `data/site.ts`: added `behance`, `dribbble`, `kaggle` to `socials` (real URLs — behance.net/niranjandesign, dribbble.com/niranjan2000, kaggle.com/deadsoul66).
- `components/ui/icons.tsx`: added `BehanceIcon`, `DribbbleIcon`, `KaggleIcon` and registered them in `socialIcons`. Hero, Contact, and Footer all iterate `Object.entries(site.socials)` already, so no changes were needed there — the new icons just appeared.

**2026-07-02 — Home shows only live projects, Resume button removed, real experience data, Companies strip**
- `components/sections/Projects.tsx` (home preview): now filters to only projects that are actually live (`!status || status === "Live in Production"`), capped at 3 — currently EGN ConnectX, StudynLearn, Altus. NEXUS ("In Development") only shows on the full `/projects` page. Heading changed from "Selected work" to **"Live in production"** to match — an inaccurate claim otherwise, since not everything in `data/projects.ts` is actually live. The bottom link was upgraded from a small text link to a real bordered CTA button, "View All Projects" → `/projects`.
- Removed the Resume button (desktop + mobile nav) and the now-unused `resumeUrl` field from `data/site.ts` — it pointed at a `/resume.pdf` that was never added to `/public`.
- `data/experience.ts`: filled in the real start date for Smartschool Limited (Oct 2025, was a `[START DATE]` placeholder) and added a second real entry — Data Analytics Intern at Naresh i Technologies, before Smartschool. Its exact start/end months are still bracketed placeholders (only known to be "before Oct 2025") — needs his input.
- New `components/sections/Companies.tsx`: a slim "Companies I've worked with" trust-strip between Hero and About, showing pill badges for each unique `company` in `data/experience.ts` (deliberately reads from there rather than a separate list, so there's one source of truth). No logos yet — text badges only, since no logo assets exist locally for these companies.

**2026-07-02 — Dedicated /projects page with category filters, NEXUS added, real nav bug fixed**
- New `app/projects/page.tsx`: a full projects index (separate from the home page's "Selected work" preview), with client-side category filter chips driven by `components/projects/ProjectsExplorer.tsx`. Categories aren't hardcoded — they're derived from whatever `category` values actually appear in `data/projects.ts`.
- `data/projects.ts`: added `category: ProjectCategory[]` to every project (`"Full-Stack" | "Frontend" | "AI & Automation" | "UI/UX"` — extend this union as new kinds of work show up) and an optional `status` field for projects that aren't deployed yet.
- Extracted `ProjectCard` out of `components/sections/Projects.tsx` into `components/projects/ProjectCard.tsx` so the home preview and the new `/projects` page share one implementation. Home section now also has a "View all projects" link to `/projects`.
- **Added NEXUS** (Next.js 14 + Supabase + Telegram bot personal life OS) as project #4, tagged `["Full-Stack", "AI & Automation"]`. Its brief still has unfilled template placeholders for the live URL/GitHub repo/bot username — rather than inventing fake links, `liveUrl`/`githubUrl` are left unset and `status: "In Development"` is shown instead. `ProjectHero`'s floating badge and CTA row now render dynamically from `project.status` (falls back to "Live in Production" when unset) instead of a hardcoded label, and shows a neutral "not yet public" pill when there's no live/GitHub link at all.
- **Found and fixed the actual root cause of the earlier "nav bar not working" report**: `Navbar.tsx` and `Footer.tsx` used bare hash anchors (`#about`, `#projects`, etc.) that only exist as elements on the home page. Clicking them from any `/projects/[slug]` case-study page (or now `/projects`) did nothing, since there was no matching anchor on that page to scroll to. Fixed by prefixing every anchor with `/` (e.g. `/#about`) and switching all internal links to `next/link` for proper client-side routing; the navbar's "Projects" link and the logo now point at `/projects` and `/` respectively instead of anchors. The previous session's diagnosis (stale port/`.next` corruption) was real but was masking this second, actual bug underneath.

**2026-07-01 — Repositioned as "AI Product Engineer," removed fabricated content**
- `data/site.ts`: `title` changed from "Frontend Developer" to "AI Product Engineer"; tagline rewritten to reflect full-stack + AI integration identity (per his stated career/portfolio strategy — see memory).
- `app/layout.tsx`: SEO keywords now lead with "AI Product Engineer" / "AI Integration" instead of generic "Full-Stack Developer" / "Web Developer".
- `data/skills.ts`: replaced the generic template stack (which included unused tech like Prisma/GraphQL/Docker/AWS/Vitest) with his real, evidenced stack — added a dedicated **AI** group (OpenAI APIs, Claude, Google AI Studio, Prompt Engineering, LLM Integration); `About.tsx`'s skills grid changed from 3 to 4 columns (`sm:grid-cols-2 lg:grid-cols-4`) to fit it.
- `components/sections/About.tsx`: the bio was the **Next.js template's fabricated placeholder copy** (fake "shipped dashboards, payment flows" narrative) — rewritten to reference only real, already-verified work (EGN ConnectX, StudynLearn, Altus).
- `data/experience.ts`: was **entirely fabricated placeholder data** (fake companies "[PREVIOUS COMPANY]"/"[EARLIER COMPANY]" with invented metrics like "40k+ monthly users", "$2M+ payments volume"). Replaced with his one real, confirmed role: Marketing Executive — Product & AI Initiatives, Smartschool Limited, Present. **`start` date is still a `[START DATE]` placeholder** — needs his real start date before this ships.
- `data/certifications.ts`: also **entirely fabricated** ("AWS Certified Solutions Architect," "Professional Full-Stack Engineer" from Meta, "PostgreSQL for Developers" — none real, all with a fake `example.com/credential` link). Replaced with a single clearly-bracketed placeholder. He does hold real Data Analytics / Business Analytics / Statistics certifications per his career notes, but no exact name/issuer/date was given — needs his input. Separately: his stated ideal home-page structure (Hero, Featured Projects, What I Build, Workflow, Skills Snapshot, Experience, GitHub Activity, CTA) doesn't include a Certifications section at all — worth asking him whether to keep this section (filled with real data) or drop it in a future IA pass.
- Rationale: his own stated standard (see StudynLearn brain.md) is "never invent job titles/bios, certification numbers, or dates" — the template's fabricated content violated that once real info was available.

**2026-07-01 — StudynLearn + Altus added**
- Added StudynLearn (`SmartSchool Education Pvt. Ltd.` — PHP/vanilla-JS smart classroom platform, `studynlearn.com`) and Altus (Next.js 15 + FastAPI EdTech platform, `altuseducation.in`) as the 2nd and 3rd real projects in `data/projects.ts`, each with full case-study content. No component changes needed — the existing `ProjectHero` / `app/projects/[slug]` route and the Projects grid card already generalize to any number of projects.
- Diagnosed a "nav bar / projects page broken" report: reproduced no issue on the then-current dev server (localhost:3002) — root cause was the earlier `.next` cache corruption + orphaned stale process on port 3001 from the prior session, both already fixed. Confirmed via Playwright: desktop nav clicks, mobile hamburger drawer, and the Projects-card → case-study navigation all work.
- A third project brief ("NEXUS") was also shared but still has unfilled template placeholders (`your-app.vercel.app`, `your-username`, `@your_bot_username`) — intentionally **not** added until real URLs are provided, to avoid shipping fake links to the live portfolio.

**2026-07-01 — EGN ConnectX project + multi-page conversion**
- Filled `data/site.ts` placeholders with real identity (name, monogram, title, tagline, email, phone, github/linkedin).
- Added EGN ConnectX as the first real project in `data/projects.ts` (replacing the four scaffold/demo placeholder projects), with full case-study content (overview, highlights, stats, event date/location).
- Converted the site from projects-as-cards-only to **one-pager + per-project pages**: new `app/projects/[slug]/page.tsx` dynamic route, `generateStaticParams`/`generateMetadata`, linked from the home Projects grid ("Case Study" CTA + clickable title/thumbnail).
- Built `components/projects/ProjectHero.tsx` — a premium 3D, pointer-tilt case-study hero (perspective/rotateX/rotateY via `motion`, layered depth, floating "Live in Production" badge, stat chips), responsive and reduced-motion-safe.
- Added a direct-call CTA: "Contact Me" in the Hero and a matching button in the Contact section now link `tel:+919641143646` with a phone icon (`CallIcon` added to `components/ui/icons.tsx`), instead of just anchor-scrolling to the contact section.
- Updated `app/sitemap.ts` to include every project's case-study URL.

**2026-07-01 — Frontend redesign deployed, README restyled**
- Replaced the old `frontend/src/*` implementation (in the `niranjan910/niranjan910` repo) with this App Router redesign.
- Restyled the GitHub profile `README.md` from the old cyan theme to this project's matte-black + lime-green palette; fixed a corrupted duplicate block in the process.
- Fixed broken `github-readme-stats` cards on the profile README by forking + self-hosting the stats service (the shared public instance was `DEPLOYMENT_PAUSED`).

---

## ⚠️ Known gaps / next steps

- Add a real `/public/resume.pdf` and `/public/og.png`, or update `data/site.ts` to stop pointing at them.
- Reconfirm `site.url` against the actual Vercel project for this codebase.
- Only one real project (EGN ConnectX) exists so far — the rest of the portfolio's "Selected work" section will look sparse until more are added via `data/projects.ts`.
- No CI/CD: every deploy to `niranjan910/niranjan910` is a manual copy + commit + push from this local folder. Consider wiring this folder up as its own git repo (or a real Vercel Git integration) if that manual step becomes a bottleneck.
