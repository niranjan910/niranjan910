/**
 * ─────────────────────────────────────────────
 *  CERTIFICATIONS  →  name, issuer, date, credential link.
 * ─────────────────────────────────────────────
 *  Every field here is transcribed directly from the certificate
 *  image in /public/certifications — see `image` for the source.
 *  `credentialUrl` is only set where a verify link is printed on
 *  the certificate itself (no invented/guessed URLs).
 */

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image: string;
}

export const certifications: Certification[] = [
  {
    name: "Claude Code in Action",
    issuer: "Anthropic",
    date: "May 5, 2026",
    credentialUrl: "https://verify.skilljar.com/c/yvxh3x7d7w45",
    image: "/certifications/Claude_Code_in_action.png",
  },
  {
    name: "SEO Mastery Course",
    issuer: "UT Digital Media",
    date: "May 2, 2026",
    image: "/certifications/SEO_mastery.png",
  },
  {
    name: "Claude Code 101",
    issuer: "Anthropic",
    date: "April 28, 2026",
    image: "/certifications/Claude_Code_101.png",
  },
  {
    name: "Career Essentials in Business Analysis",
    issuer: "Microsoft and LinkedIn",
    date: "Jul 4, 2025",
    image: "/certifications/Business_Analysis.png",
  },
  {
    name: "Public Speaking Skills Professional Certificate",
    issuer: "Toastmasters International · LinkedIn Learning",
    date: "Jul 1, 2025",
    image: "/certifications/Public_Speaking.png",
  },
  {
    name: "Career Essentials in Data Analysis",
    issuer: "Microsoft and LinkedIn",
    date: "Jul 1, 2025",
    image: "/certifications/Data_Analysis.png",
  },
  {
    name: "Statistics Foundations Professional Certificate",
    issuer: "Wolfram Research · LinkedIn Learning",
    date: "Jun 29, 2025",
    image: "/certifications/Statistics_Foundations.png",
  },
];
