/**
 * ─────────────────────────────────────────────
 *  EXPERIENCE  →  vertical timeline entries.
 * ─────────────────────────────────────────────
 *  List most-recent first. Set `end: "Present"` for your
 *  current role — it gets a subtle "current" accent dot.
 *  Transcribed directly from his LinkedIn experience section.
 */

export interface ExperienceItem {
  role: string;
  company: string;
  type?: string; // e.g. "Full-time", "Internship", "Apprenticeship"
  start: string;
  end: string; // "Present" for current role
  location?: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Marketing Executive",
    company: "SmartSchool Education Ltd",
    type: "Full-time",
    start: "Oct 2025",
    end: "Present",
    location: "Noida, Uttar Pradesh, India",
    bullets: [
      "Working at the intersection of marketing, product development, and technology, contributing to the design and delivery of digital products and educational platforms.",
      "Lead product development and UI/UX work across the company's education products, including the AI smart-classroom platform StudynLearn.",
    ],
  },
  {
    role: "Data Analyst",
    company: "Naresh i Technologies",
    type: "Internship",
    start: "Feb 2025",
    end: "Jul 2025",
    location: "Hyderabad, Telangana, India",
    bullets: [
      "Completed hands-on training in data analytics, SQL, and business analytics fundamentals — now a complementary skill set alongside full-stack and AI product work.",
    ],
  },
  {
    role: "Data Science with ML",
    company: "TechieNest",
    type: "Apprenticeship",
    start: "Aug 2024",
    end: "Jan 2025",
    location: "Jaipur, Rajasthan, India",
    bullets: [
      "Completed a data science apprenticeship covering machine learning fundamentals.",
    ],
  },
];
