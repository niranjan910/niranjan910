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
 */

export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Nimbus Analytics",
    description:
      "A real-time analytics dashboard with sub-second query latency, custom charting, and role-based team workspaces.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "WebSockets"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-handle/nimbus",
    image: undefined, // → "/projects/nimbus.png"
    featured: true,
  },
  {
    title: "Ledger",
    description:
      "A personal-finance app that categorizes transactions automatically and forecasts monthly cash flow.",
    tech: ["React", "Node.js", "Prisma", "Chart.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-handle/ledger",
    image: undefined,
  },
  {
    title: "Cohort",
    description:
      "An open-source scheduling tool for study groups, with calendar sync and timezone-aware availability.",
    tech: ["Next.js", "tRPC", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-handle/cohort",
    image: undefined,
  },
  {
    title: "Pixel Press",
    description:
      "A headless CMS starter kit that ships with image optimization, MDX authoring, and one-click Vercel deploys.",
    tech: ["Next.js", "MDX", "Sanity", "Vercel"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-handle/pixel-press",
  },
];
