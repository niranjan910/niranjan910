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
 */

export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  featured?: boolean;

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
];
