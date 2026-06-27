# 🧠 brain.md — Architecture Map

> **Read this first.** It's the orientation map for the whole site so you don't have to re-read every file. When you change structure, routing, data shape, or the styling system, **update this file** in the same change.

App lives in **`frontend/`**. Run all `npm` commands from there (not the repo root).

> ⚠️ **This is NOT the Next.js you know.** Next.js 16 (App Router + Turbopack) has breaking changes vs. older versions — APIs, conventions, and file structure may differ from training data. Read the relevant guide in `frontend/node_modules/next/dist/docs/` before writing Next.js code, and heed deprecation notices. *(This file is the single source of project docs — `CLAUDE.md` just `@`-imports it; `AGENTS.md` was folded in here.)*

---

## 1. Stack & commands

| | |
|---|---|
| Framework | Next.js **16.2.6** (App Router, Turbopack) |
| UI | React **19.2**, framer-motion **12**, lucide-react (icons) |
| Styling | **Tailwind CSS v4** (inner pages) + **inline styles** (homepage) + `globals.css` media queries |
| Lang | TypeScript |
| Deploy | Vercel project `niranjan910`, git-connected (push `main` → prod) |

```bash
cd frontend
npm run dev     # dev server (Turbopack)
npm run build   # production build (use to verify before pushing)
npm run lint
```

---

## 2. Routes → files (all static)

| Route | File | Renders |
|---|---|---|
| `/` | `src/app/page.tsx` | Homepage — 8 stacked sections (see §4) |
| `/projects` | `src/app/projects/page.tsx` | Project listing, **client**, category filters + expandable details |
| `/projects/egn-connect-x` | `src/app/projects/egn-connect-x/page.tsx` | Case study → `CaseStudyLayout` |
| `/projects/landing-bazar` | `src/app/projects/landing-bazar/page.tsx` | Case study → `CaseStudyLayout` |
| `/projects/studynlearn` | `src/app/projects/studynlearn/page.tsx` | Case study → `CaseStudyLayout` |
| `/experience` | `src/app/experience/page.tsx` | Timeline (work/education/training) |
| `/certifications` | `src/app/certifications/page.tsx` | Cert cards grid |
| `/robots.txt` `/sitemap.xml` | `src/app/robots.ts` `sitemap.ts` | SEO |

> Case-study pages are **hardcoded one-per-slug** (no dynamic `[slug]` route). To add a project case study: add a `page.tsx` under `src/app/projects/<slug>/` that calls `<CaseStudyLayout project={getProjectBySlug("<slug>")} ... />`.

**Root layout** `src/app/layout.tsx`: `<html><body>` → `<LoadingOverlay/>` + `<Navbar/>` + `<main style="padding:0 40px">{children}</main>` + `<Footer/>`. Inter font via `next/font`; Satoshi via fontshare `<link>`. Sets `metadata` + OG.

---

## 3. Navigation graph (who links where)

- **Navbar** (fixed pill, all pages): `/` `/projects` `/experience` `/certifications` + logo→`/`. Mobile = hamburger dropdown.
- **Hero** → `/projects`, GitHub (ext).
- **FeaturedProjects** cards → `/projects/<slug>` + live URL (ext); "View All" → `/projects`.
- **ExperiencePreview** → `/experience`. **LatestCertifications** → `/certifications`.
- **ContactSection / Footer** → mailto, tel, social (ext).
- **CTAStrip** → `/resume.pdf`, `/projects`.
- **/projects** cards → `/projects/<slug>` (Case Study) + live (ext).
- **CaseStudyLayout** → back to `/projects`, prev/next project (`prevSlug`/`nextSlug`), live/github (ext).

---

## 4. Homepage composition (`src/app/page.tsx`)

Wrapped in `.page-wrapper` with `margin-left/right:-40px` to break out of `<main>`'s padding (full-bleed). Section order:

1. `Hero` — animated hero; 4 neon skill cards + person image (`/images/Home_page_01.png`)
2. `CompaniesStrip` — 7 company logos (`.companies-grid`)
3. `AboutSection` (`#about`) — bio + tools grid + profile carousel
4. `FeaturedProjects` — `getFeaturedProjects(3)`
5. `ExperiencePreview` — `getCurrentRole()`
6. `LatestCertifications` — `getLatestCertifications(3)`
7. `ContactSection` — contact cards
8. `CTAStrip`

---

## 5. Components

**`src/components/layout/`**
- `Navbar.tsx` — client; fixed centered pill, `scrolled` state on scroll>60, mobile hamburger dropdown. Classes: `.nav-header`, `.nav-pill`, `.nav-logo`, `.nav-links`, `.nav-burger`.
- `Footer.tsx` — 4-col `.footer-grid` (brand/nav/services/location) + `.footer-bottom`; inline social SVGs.
- `LoadingOverlay.tsx` — client; full-screen intro animating **"Niranjan"** (letter stagger + underline sweep), scroll-lock, fades out ~1.85s, reduced-motion aware. **Hydration-safe** (same markup server + first client paint; dismiss via effect only).

**`src/components/sections/`** — `Hero`, `CompaniesStrip`, `AboutSection`, `FeaturedProjects`, `ExperiencePreview`, `LatestCertifications`, `ContactSection`, `CTAStrip`. All inline-styled; mostly `"use client"` (framer-motion).

**`src/components/ui/`**
- `Badge.tsx` — inline styles, `variant="purple"|"glass"`.
- `Button.tsx` — Tailwind + `cn()`, `variant="primary"|"ghost"|"outline"`, `size`.
- `SectionHeading.tsx` — eyebrow + title + optional subtitle; `clamp()` fonts; `align`.

**`src/components/CaseStudyLayout.tsx`** — Tailwind; full case-study scaffold (hero, overview, problem, research, design, dev, challenges, tech, features, results, learnings, prev/next nav). Fed by per-slug page.

---

## 6. Data layer (`src/data/`, types in `src/types/index.ts`)

| File | Exports |
|---|---|
| `projects.ts` | `PROJECTS[]`, `PROJECTS_SORTED` (dateAdded desc), `getFeaturedProjects(n=3)`, `getProjectBySlug(slug)` |
| `certifications.ts` | `CERTIFICATIONS[]`, `CERTIFICATIONS_SORTED` (dateEarned desc), `getLatestCertifications(n=3)` |
| `experience.ts` | `EXPERIENCE[]`, `EXPERIENCE_SORTED`, `getCurrentRole()` |

Types: `Project`, `Certification`, `ExperienceItem`, `FilterOption`.
`src/lib/utils.ts`: `cn()` (clsx + tailwind-merge), `formatDate(iso)`.

---

## 7. ⚠️ Styling architecture (the important part)

**There are TWO parallel styling systems — know which one a file uses before editing:**

### A. Homepage sections + Navbar/Footer/Hero/Badge → **inline `style={{}}`**
Responsiveness is bolted on via **`globals.css` `@media` blocks that target classNames** with `!important` (e.g. `.hero-text-block`, `.footer-grid`, `.companies-grid`, `.about-tools-grid`, `.nav-pill`). To make an inline-styled element responsive: give it a `className`, then add a media-query rule in `globals.css` (or, for the hero, in Hero's own `<style>` — see below).

### B. Inner pages (`/projects`, `/experience`, `/certifications`, case studies) + `Button` + `CaseStudyLayout` → **Tailwind utilities**
e.g. `grid grid-cols-1 lg:grid-cols-2`, `px-6`, `flex-wrap`. Core layout/responsive utilities work regardless of config.

### `src/app/globals.css`
- `@import` fontshare (Satoshi) + `@import "tailwindcss"` (must be first).
- `:root` CSS vars: `--bg #090414 --purple #C85CFF --orange #FF8A3D --pink #FF5FD2 --blue #4D7CFF --cyan #00E5FF`.
- Global classes: `.gradient-text`, `.glass-card`, `.hero-bg`, `.btn-primary` / `.btn-ghost`, `.eyebrow`, `.reveal` (fadeUp).
- **Responsive breakpoints:** `1024` tablet, `768` mobile, `480` small. Mobile zeros section side-padding, collapses About grid, footer grid, companies grid → 2-col, etc.

### `src/components/sections/Hero.tsx` `<style>` block
**The mobile hero layout is a single source of truth here, NOT in globals.css** (the two stylesheets used to fight over `!important`). Contains: `@property` conic-spin keyframes, particle/shimmer/halo animations, and the `@media (max-width:768px)` hero layout.

### `frontend/tailwind.config.ts`
`theme.extend`: colors `background/purple/orange/pink/cyan/blue`, `fontFamily.heading=Satoshi` / `body=Inter`, `animation.spin-slow`.
⚠️ **`text-secondary` / `text-muted` are NOT defined** — so `text-text-secondary` / `text-text-muted` used on inner pages are no-ops (inherit white). Layout utilities still work.

**Palette:** section bg `#090414` / `#04040a`; accents purple `#C85CFF`, orange `#FF8A3D`, pink `#FF5FD2`, blue `#4D7CFF`, cyan `#00E5FF`. Fonts: Satoshi (headings), Inter (body).

---

## 8. Conventions & gotchas

- **Run npm from `frontend/`.**
- **Mobile hero subject** = `position:fixed; bottom:0` (pinned to viewport from first paint — `sticky` can't pin a below-the-fold element). An `IntersectionObserver` in `Hero.tsx` toggles a `.hero-out` class to release it once the hero scrolls away so it never overlaps later sections. Cards scroll up past it. **Desktop hero = `position:absolute` (unchanged).**
- **Don't add `backdrop-filter: blur()` to cards over solid backgrounds** — it's invisible there but repaints every scroll frame → lag. Only the Navbar keeps blur (it's over scrolling content).
- **Card grids** use `repeat(auto-fit, minmax(min(100%, Npx), 1fr))` so they never overflow on <320px screens.
- `<body>` has `overflowX:hidden`; favicon `/Logo/favicon.png` is referenced in layout but may 404.
- **Never commit the stray `~/` directory** at the repo root (junk from a mis-expanded path).

---

## 9. GitHub Actions & README (this is the GitHub **profile** repo: `niranjan910/niranjan910`)

- `.github/workflows/`: `3d-contrib.yml`, `profile-summary-cards.yml`, `snake.yml` — **daily cron**, the bot commits generated SVGs to `profile-summary-card-output/**` (and the `output` branch for the snake) and may update `README.md`.
- ⚠️ **Branch carefully:** the bot advances `main` daily. Cut PR branches from the **latest `origin/main`** and include only your code files, or you'll revert the bot's README + ~320 card SVGs.
- `README.md` = profile widgets (capsule-render, typing-svg, shields, skillicons, github-readme-stats, **streak-stats.demolab.com** ← migrated off dead heroku, activity-graph, ghchart). Theme `#00D9FF`.

---

## 10. Deployment

- Vercel project **`niranjan910`** → **https://niranjan910.vercel.app** (also `niranjan910-ks6x.vercel.app`).
- **Git-connected:** push to `main` = production deploy; PR branches = preview deploys.
- Default branch `main`. Merging a PR to `main` triggers the prod build.
