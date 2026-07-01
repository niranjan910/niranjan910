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
    name: "[CERTIFICATION NAME — e.g. your Data Analytics / Business Analytics / Statistics cert]",
    issuer: "[ISSUER]",
    date: "[DATE]",
  },
];
