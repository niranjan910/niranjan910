/**
 * ─────────────────────────────────────────────
 *  PROJECTS  →  the showcase grid.
 * ─────────────────────────────────────────────
 *  Add an object per project. `featured: true` gives the card
 *  extra width on large screens (nice for a flagship project).
 *
 *  `image` can be:
 *    - a local path in /public  (e.g. "/projects/my-app.png"), or
 *    - a remote URL (allowed via next.config.mjs).
 *  Leave it undefined to render a clean typographic placeholder.
 *
 *  Every project gets its own case-study page at /projects/[slug].
 *  The extra fields below (org, role, overview, highlights, stats,
 *  eventDate, location) are optional and only render on that page.
 *
 *  `category` drives the filter chips on /projects — a project can
 *  belong to more than one. Add new category strings freely; the
 *  filter UI picks up whatever's actually used across `projects`.
 *
 *  `liveUrl`/`githubUrl` — only set these to real, working links.
 *  Leave undefined (not a fake/placeholder URL) for projects that
 *  aren't deployed/public yet; the UI hides those buttons cleanly.
 */

export type ProjectCategory =
  | "Full-Stack"
  | "Frontend"
  | "AI & Automation"
  | "UI/UX";

export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  category: ProjectCategory[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  featured?: boolean;
  status?: string; // defaults to "Live in Production" on the case-study page

  // Case-study page fields
  org?: string;
  role?: string;
  period?: string;
  eventDate?: string;
  location?: string;
  overview?: string;
  highlights?: string[];
  stats?: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    slug: "egn-connectx",
    title: "EGN ConnectX",
    description:
      "The official platform for India's premier education leadership & innovation summit — delegate registration, exhibitor booking, and a full awards-nomination system serving 20,000+ expected attendees.",
    tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "jQuery"],
    category: ["Full-Stack"],
    liveUrl: "https://egnconnectx.com",
    githubUrl: "https://github.com/niranjan910/EGN_X_live",
    featured: true,
    org: "EGN EDU INDIA PRIVATE LIMITED",
    role: "Frontend Developer",
    period: "2026",
    eventDate: "3–4 November 2026",
    location: "Bombay Exhibition Centre, NESCO, Goregaon, Mumbai",
    overview:
      "EGN ConnectX is the web platform behind a national education leadership and innovation summit — built end-to-end on PHP, MySQL, and vanilla JS across 12+ pages, including delegate registration, exhibitor stall booking, partner forms, and a self-contained Education & Corporate Awards nomination system with AJAX submission, tiered GST pricing, and auto-generated nomination IDs.",
    highlights: [
      "Shipped 12+ production pages — homepage, About Summit, Education & Corporate Awards, stall booking, delegate registration, contact, and legal pages — all sharing one design system and CSS architecture.",
      "Built a self-contained Awards Nomination flow: dynamic modal, AJAX backend handler, multi-file upload, tiered pricing with GST, and auto-generated nomination IDs.",
      "Integrated GA4 analytics and Google Search Console (sitemap, robots.txt, host-guarded tracking) across every page.",
      "Wrote a 150+ test Selenium automation suite in Java (TestNG, Page Object Model) covering every page, form, and responsive breakpoint.",
      "Established the brand's full frontend standard — color tokens, typography scale, responsive breakpoints, and Core Web Vitals targets — as living documentation for the team.",
    ],
    stats: [
      { label: "Expected Attendees", value: "20,000+" },
      { label: "Pages Shipped", value: "12+" },
      { label: "Automated Tests", value: "150+" },
    ],
  },
  {
    slug: "studynlearn",
    title: "StudynLearn",
    description:
      "An AI-powered smart classroom platform — interactive flat panels, teaching software, and a national Olympiad program, backed by pan-India installation and support for 700+ schools and institutes.",
    tech: ["PHP", "Vanilla JS", "Bootstrap 5", "Vercel Serverless", "Git LFS"],
    category: ["Full-Stack"],
    liveUrl: "https://studynlearn.com",
    githubUrl: "https://github.com/niranjan910/StudynLearn_live",
    org: "SmartSchool Education Pvt. Ltd.",
    role: "Frontend Developer",
    period: "2026",
    overview:
      "StudynLearn equips schools, colleges, and coaching institutes across India with AI-powered smart classrooms — interactive flat panels (55\"–98\"), AI teaching software, and the SNOT national Olympiad program — backed by pan-India installation, training, and support. Built as a PHP + vanilla JS site deployed serverlessly on Vercel, with a custom design system and a full GEO/AEO/SEO program to make the brand legible to both search engines and AI answer engines.",
    highlights: [
      "Built and maintain 15+ production pages — homepage, Smart Classroom (IFP) product page, SNOT Olympiad program, careers, blogs, certifications, and legal pages — all sharing one custom design system (`css/global.css`).",
      "Engineered the Vercel serverless deployment: thin `api/*.php` wrappers plus `vercel.json` routing so a traditional PHP codebase runs entirely on Vercel's serverless PHP runtime, with Git LFS for 190MB+ product videos.",
      "Built a vanilla-JS animation system from scratch — a single shared `requestAnimationFrame` loop driving neural-network canvas backgrounds, scroll-reveal, and stat counters site-wide, with automatic pause on tab-hidden and skip on reduced-motion/mobile.",
      "Led a full GEO/AEO/SEO sprint: fixed a broken animated H1, unified brand-entity naming, added FAQPage/Organization/Product/SpeakableSpecification/VideoObject JSON-LD, an audience-segmented section, and a 10-row spec comparison table.",
      "Directed a competitive SEO/CRO/GEO audit against BenQ, ViewSonic, Teachmint, and Extramarks, and authored the prioritized content roadmap still driving the backlog.",
    ],
    stats: [
      { label: "Schools Served", value: "700+" },
      { label: "Pages Shipped", value: "15+" },
      { label: "Certifications Held", value: "19+" },
    ],
  },
  {
    slug: "altus",
    title: "Altus",
    description:
      "A career-focused EdTech marketing and learning platform — 50+ rendered pages, a full admin panel, and a from-scratch FastAPI + PostgreSQL backend replacing the original static data layer.",
    tech: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "Framer Motion",
      "FastAPI",
      "PostgreSQL",
    ],
    category: ["Full-Stack"],
    liveUrl: "https://altuseducation.in",
    githubUrl: "https://github.com/niranjan910/Altus",
    role: "Full-Stack Developer",
    period: "2026",
    overview:
      "Altus is a career-focused EdTech marketing and learning platform for the Indian market — 27+ Next.js App Router page templates rendering 50+ pages once dynamic course, mentor, bootcamp, and article routes are counted, a full internal admin panel, and a from-scratch FastAPI + PostgreSQL backend replacing the site's original static data layer. Course delivery itself runs through a third-party LMS; this platform owns marketing, catalog, and admin operations end-to-end.",
    highlights: [
      "Shipped 27+ page templates (50+ rendered pages via static generation) — a filterable course explorer plus individual course/bootcamp/mentor/article detail pages, all statically generated for fast, fully-crawlable HTML.",
      "Built a complete internal admin panel from scratch: course and module CRUD, inline price editing, a user manager with per-course access blocking and password resets, and a live-editable GST rate that flows straight into checkout.",
      "Designed and built the FastAPI + SQLAlchemy + PostgreSQL backend — 11 database tables, JWT admin auth, Alembic migrations, and 18+ REST endpoints — replacing the static data layer, with the frontend hitting the API first and gracefully falling back to static data.",
      "Implemented full technical SEO: per-page JSON-LD (Course/Person/Article schema), a dynamic sitemap covering every course/mentor/bootcamp/article, and static generation on every detail page.",
      "Tracked down and fixed a table-cell rendering bug affecting every publish/active toggle in the admin panel, establishing the toggle-switch and overlay-link patterns now used site-wide.",
    ],
    stats: [
      { label: "Pages Rendered", value: "50+" },
      { label: "REST Endpoints", value: "18+" },
      { label: "Database Tables", value: "11" },
    ],
  },
  {
    slug: "nexus",
    title: "NEXUS",
    description:
      "A personal life operating system that replaces five separate apps — tasks, calories, gym, finance, sleep — with one dashboard you can update by typing or speaking into Telegram.",
    tech: [
      "Next.js 14",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Telegram Bot API",
      "Groq Whisper",
    ],
    category: ["Full-Stack", "AI & Automation"],
    // No liveUrl/githubUrl — not deployed publicly yet, so no link is shown
    // rather than a placeholder one.
    status: "In Development",
    role: "Full-Stack Developer",
    period: "2026",
    overview:
      'NEXUS unifies five different life-tracking apps — a todo list, calorie counter, gym log, finance tracker, and sleep tracker — into a single dashboard accessible from a browser or Telegram. The core idea is zero-friction logging: open Telegram, type or say "I went to gym," and it\'s logged — no menus, no forms. A Groq Whisper pipeline transcribes voice notes, a lightweight NLP layer detects intent (task, meal, workout, spend, sleep), and Vercel cron jobs deliver personalized morning, meal, gym, and night summaries via Telegram.',
    highlights: [
      "Built a Telegram-first logging pipeline: voice notes are transcribed via Groq's free Whisper API, parsed by a priority-ordered NLP layer, and written straight into Supabase — no app-switching required.",
      "Designed an 8-table PostgreSQL schema on Supabase (tasks, meals, gym, weight, sleep, expenses, people, profiles) with Row Level Security so every user's data stays isolated.",
      "Implemented 4 scheduled Vercel cron jobs (morning summary, meal reminder, gym reminder, night recap) with per-user, per-reminder enable/disable toggles stored on the profile.",
      "Wired up both email/password and Google OAuth via Supabase Auth, including a dedicated server route to exchange the OAuth code for a session, with middleware guarding every dashboard route.",
      "Split the dashboard into a server component for data fetching and an isolated client-only live clock — the greeting reads real IST time via `Intl.DateTimeFormat` rather than the server's UTC clock.",
    ],
    stats: [
      { label: "Apps Replaced", value: "5" },
      { label: "Database Tables", value: "8" },
      { label: "Cron Jobs", value: "4" },
    ],
  },
];
