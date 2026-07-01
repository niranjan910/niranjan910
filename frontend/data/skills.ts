/**
 * ─────────────────────────────────────────────
 *  SKILLS  →  your tech-stack chips (About section)
 * ─────────────────────────────────────────────
 *  Grouped so the grid reads cleanly. Add/remove freely.
 */

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Motion"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "Prisma", "REST", "GraphQL"],
  },
  {
    label: "Tooling & Infra",
    items: ["Git", "Docker", "Vercel", "AWS", "CI/CD", "Vitest"],
  },
];
