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
    role: "[ROLE — e.g. Senior Full-Stack Engineer]",
    company: "[COMPANY]",
    start: "Jan 2024",
    end: "Present",
    location: "Remote",
    bullets: [
      "Led development of a customer-facing dashboard used by 40k+ monthly users.",
      "Cut initial page-load time by 55% through code-splitting and image optimization.",
      "Mentored two junior engineers and introduced a component testing culture.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "[PREVIOUS COMPANY]",
    start: "Jun 2021",
    end: "Dec 2023",
    location: "Bengaluru, IN",
    bullets: [
      "Built and shipped a payments integration handling $2M+ in monthly volume.",
      "Migrated a legacy monolith to a modular Next.js + Node.js architecture.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "[EARLIER COMPANY]",
    start: "Aug 2019",
    end: "May 2021",
    location: "Bengaluru, IN",
    bullets: [
      "Delivered responsive marketing sites and internal tools for 10+ clients.",
      "Established the team's first shared design-system and component library.",
    ],
  },
];
