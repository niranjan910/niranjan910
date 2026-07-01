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
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "Framer Motion"],
  },
  {
    label: "Backend",
    items: ["Node.js", "FastAPI", "PHP", "PostgreSQL", "MySQL"],
  },
  {
    label: "AI",
    items: ["OpenAI APIs", "Claude", "Google AI Studio", "Prompt Engineering", "LLM Integration"],
  },
  {
    label: "Tooling & Deployment",
    items: ["Git", "GitHub", "Vercel", "Figma", "CI/CD"],
  },
];
