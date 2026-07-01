/**
 * ─────────────────────────────────────────────
 *  CERTIFICATIONS  →  name, issuer, date, credential link.
 * ─────────────────────────────────────────────
 */

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "Mar 2024",
    credentialUrl: "https://example.com/credential",
  },
  {
    name: "Professional Full-Stack Engineer",
    issuer: "Meta",
    date: "Sep 2023",
    credentialUrl: "https://example.com/credential",
  },
  {
    name: "PostgreSQL for Developers",
    issuer: "Coursera",
    date: "Feb 2023",
    credentialUrl: "https://example.com/credential",
  },
];
