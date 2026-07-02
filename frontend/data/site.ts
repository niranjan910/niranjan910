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
  title: "AI Product Engineer",
  tagline:
    "I build complete products end-to-end — frontend, backend, and AI integration — from a national summit platform to a full-stack EdTech app with my own AI-assisted workflows baked in.",
  email: "niranjan991100@gmail.com",
  phone: "+91 96411 43646",
  phoneHref: "tel:+919641143646",

  // Open Graph / SEO
  url: "https://niranjan910-ks6x.vercel.app",
  ogImage: "/og.png", // 1200×630 image in /public

  socials: {
    github: "https://github.com/niranjan910",
    linkedin: "https://www.linkedin.com/in/niranjan-k-a83517229/",
    behance: "https://www.behance.net/niranjandesign",
    dribbble: "https://dribbble.com/niranjan2000",
    kaggle: "https://www.kaggle.com/deadsoul66",
  },
} as const;

export type Site = typeof site;
