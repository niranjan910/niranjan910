import type { IssuerBadge } from "@/components/ui/icons";

/**
 * ─────────────────────────────────────────────
 *  CERTIFICATIONS  →  name, issuer, date, credential link.
 * ─────────────────────────────────────────────
 *  Every field here is transcribed directly from the certificate
 *  image in /public/certifications — see `image` for the source.
 *  `credentialUrl` is only set where a verify/license link was
 *  actually provided (no invented/guessed URLs). `badge` maps to
 *  a colored brand icon in components/ui/icons.tsx — omit it for
 *  issuers without a reproducible official mark.
 */

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image: string;
  badge?: IssuerBadge;
}

export const certifications: Certification[] = [
  {
    name: "Introduction to Image Generation",
    issuer: "Google Cloud Skills Boost",
    date: "Jun 30, 2026",
    credentialUrl:
      "https://www.skills.google/public_profiles/785fde28-470d-4d58-b196-7a4a11d49436/badges/25241485",
    image: "/certifications/Image_Generation.png",
    badge: "google",
  },
  {
    name: "Claude Code in Action",
    issuer: "Anthropic",
    date: "May 5, 2026",
    credentialUrl: "https://verify.skilljar.com/c/yvxh3x7d7w45",
    image: "/certifications/Claude_Code_in_action.png",
    badge: "anthropic",
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
    badge: "anthropic",
  },
  {
    name: "Career Essentials in Business Analysis",
    issuer: "Microsoft and LinkedIn",
    date: "Jul 4, 2025",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/586492be7f0a6e80a1631e815a9aef7d817cf1992070dec8d3ec6545d78b9475",
    image: "/certifications/Business_Analysis.png",
    badge: "microsoft",
  },
  {
    name: "Public Speaking Skills Professional Certificate",
    issuer: "Toastmasters International · LinkedIn Learning",
    date: "Jul 1, 2025",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/6ca63ec9e3c249b4adf33d41b776f77e8824452de8dfc5422207dccb23facfaa",
    image: "/certifications/Public_Speaking.png",
    badge: "linkedin",
  },
  {
    name: "Career Essentials in Data Analysis",
    issuer: "Microsoft and LinkedIn",
    date: "Jul 1, 2025",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/c943995aeed596ce8c73617cf021265b7a6e18c9b4ed48119ac4e976e0882c72",
    image: "/certifications/Data_Analysis.png",
    badge: "microsoft",
  },
  {
    name: "Statistics Foundations Professional Certificate",
    issuer: "Wolfram Research · LinkedIn Learning",
    date: "Jun 29, 2025",
    image: "/certifications/Statistics_Foundations.png",
    badge: "wolfram",
  },
];
