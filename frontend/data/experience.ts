/**
 * ─────────────────────────────────────────────
 *  EXPERIENCE  →  vertical timeline entries.
 * ─────────────────────────────────────────────
 *  List most-recent first. Set `end: "Present"` for your
 *  current role — it gets a subtle "current" accent dot.
 */

export interface ExperienceItem {
  role: string;
  company: string;
  start: string;
  end: string; // "Present" for current role
  location?: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Marketing Executive — Product & AI Initiatives",
    company: "Smartschool Limited",
    start: "Oct 2025",
    end: "Present",
    location: "India",
    bullets: [
      "Lead product development, UI/UX, and AI integration across the company's education products, including the AI smart-classroom platform StudynLearn.",
      "Design and ship AI-assisted workflows to improve internal product and marketing operations.",
      "Working toward a formal Product/AI Engineer title as scope has grown well beyond the original marketing role.",
    ],
  },
  {
    role: "Data Analytics Intern",
    company: "Naresh i Technologies",
    start: "[START DATE]",
    end: "[END DATE — before Oct 2025]",
    location: "India",
    bullets: [
      "Completed hands-on training in data analytics, SQL, and business analytics fundamentals — now a complementary skill set alongside full-stack and AI product work.",
    ],
  },
];
