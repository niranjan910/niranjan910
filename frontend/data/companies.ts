/**
 * ─────────────────────────────────────────────
 *  COMPANIES / CLIENTS  →  logo trust-strip.
 * ─────────────────────────────────────────────
 *  Broader than data/experience.ts on purpose — this includes both
 *  direct employers and client/project organizations he's built for
 *  (e.g. EGN, whose ConnectX platform is in data/projects.ts). Add
 *  a real logo to /public/companies and an entry here to extend it.
 */

export interface CompanyLogo {
  name: string;
  logo: string;
}

export const companyLogos: CompanyLogo[] = [
  { name: "Smartschool Limited", logo: "/companies/SmartSchool.jpg" },
  { name: "StudynLearn", logo: "/companies/StudynLearn.jpg" },
  { name: "EGN India", logo: "/companies/EGN_India.jpg" },
  { name: "EGN ConnectX", logo: "/companies/EGN_ConnectX.jpg" },
  { name: "Naresh i Technologies", logo: "/companies/Naresh_i_technology.jpg" },
  { name: "SNL", logo: "/companies/SNL.jpg" },
  { name: "TechieNest", logo: "/companies/Techinest.jpg" },
];
