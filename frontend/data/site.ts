/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONFIG  →  edit your identity, links, and socials here.
 * ─────────────────────────────────────────────────────────────
 *  Placeholder values are wrapped in [BRACKETS] — swap them out.
 */

export const site = {
  name: "Niranjan Kumar",
  // Used as the small logo/monogram in the navbar + footer.
  monogram: "NK",
  title: "Frontend Developer",
  tagline:
    "I build fast, accessible web products — from PHP-driven event platforms to modern Next.js apps — with an eye for AI-powered workflows and premium UI/UX.",
  email: "niranjan991100@gmail.com",
  phone: "+91 96411 43646",
  phoneHref: "tel:+919641143646",
  resumeUrl: "/resume.pdf", // drop your resume PDF into /public

  // Open Graph / SEO
  url: "https://niranjan910-ks6x.vercel.app",
  ogImage: "/og.png", // 1200×630 image in /public

  socials: {
    github: "https://github.com/niranjan910",
    linkedin: "https://www.linkedin.com/in/niranjan-k-a83517229/",
  },
} as const;

export type Site = typeof site;
