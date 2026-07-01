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

**Last updated: 2026-07-01**

| Layer | State |
|-------|-------|
| Local (`npm run dev`) | ✅ All changes present & tested |
| GitHub (`niranjan910/niranjan910`, `frontend/`) | ⏳ Synced via manual copy + push per session — no CI/CD yet |
| Live (Vercel) | ⚠️ Not reconfirmed since the one-pager → multi-page redesign — check the Vercel project's connected branch/root directory before assuming `site.url` is current |

**How changes ship:** this is a plain local folder, not a git repo. Each session's changes are copied into a clone of `niranjan910/niranjan910` (excluding `node_modules`, `.next`, build artifacts), committed under `frontend/`, and pushed — either directly to `main` or via a feature branch + PR depending on what was asked that session. There is no automated deploy hook from this local folder.

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

## 📜 Change History (newest first)

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
