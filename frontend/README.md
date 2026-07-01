# Portfolio

A premium, dark-themed personal portfolio for a full-stack developer. Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Motion**.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

Build for production:

```bash
npm run build && npm start
```

## Editing your content

All content lives in `/data` — you never need to touch the layout code.

| File | What it controls |
|------|------------------|
| `data/site.ts` | Your name, monogram, title, tagline, email, resume link, social URLs, and SEO/OG settings |
| `data/projects.ts` | The project showcase cards (title, description, tech, live/GitHub links, thumbnail) |
| `data/experience.ts` | The work-history timeline (most recent first; use `end: "Present"` for your current role) |
| `data/certifications.ts` | Certification cards (name, issuer, date, credential link) |
| `data/skills.ts` | The tech-stack chips in the About section |

Placeholders are wrapped in `[BRACKETS]` — search for them and replace.

### Adding project screenshots
Drop images into `/public/projects/` and set `image: "/projects/your-shot.png"` in `data/projects.ts`. Leaving `image` undefined renders a clean typographic placeholder. Remote image URLs also work (allowed in `next.config.mjs`).

### Assets to add to `/public`
- `resume.pdf` — linked by the Resume button
- `og.png` — 1200×630 social-share image
- optional avatar photo for the About section

## Design system

Tokens live in `tailwind.config.ts` and `app/globals.css`:

- **Background** `#0A0A0A` · **Surface** `#121212` · **Border** `rgba(255,255,255,0.08)`
- **Text** `#EDEDED` · **Muted** `#8A8A8A`
- **Accent** `#A3E635` (hover `#BEF264`)
- **Fonts** — Space Grotesk (display), Inter (body), JetBrains Mono (labels), all via `next/font`

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects Next.js.
3. Set `site.url` in `data/site.ts` to your production domain for correct OG tags.

## Accessibility & performance
Semantic HTML, keyboard-navigable, accent-colored focus rings, `prefers-reduced-motion` respected, self-hosted fonts with zero layout shift, and `next/image` optimization.
