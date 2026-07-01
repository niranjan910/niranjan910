/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONFIG  →  edit your identity, links, and socials here.
 * ─────────────────────────────────────────────────────────────
 *  Placeholder values are wrapped in [BRACKETS] — swap them out.
 */

export const site = {
  name: "[YOUR NAME]",
  // Used as the small logo/monogram in the navbar + footer.
  monogram: "[YN]",
  title: "Full-Stack Web Developer",
  tagline:
    "[ONE-LINE TAGLINE — e.g. I build fast, accessible web products from database to pixel.]",
  email: "hello@example.com",
  resumeUrl: "/resume.pdf", // drop your resume PDF into /public

  // Open Graph / SEO
  url: "https://your-domain.com",
  ogImage: "/og.png", // 1200×630 image in /public

  socials: {
    github: "https://github.com/your-handle",
    linkedin: "https://linkedin.com/in/your-handle",
    // Add more as needed — they’re rendered from this object.
    x: "https://x.com/your-handle",
  },
} as const;

export type Site = typeof site;
