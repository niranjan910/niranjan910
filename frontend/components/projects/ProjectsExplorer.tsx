"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import type { Project, ProjectCategory } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

/**
 * Client-side category filter over the full project list.
 * Categories are derived from whatever's actually used in
 * data/projects.ts — no hardcoded list to keep in sync.
 */
export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const categories = useMemo(() => {
    const set = new Set<ProjectCategory>();
    projects.forEach((p) => p.category.forEach((c) => set.add(c)));
    return Array.from(set).sort();
  }, [projects]);

  const [active, setActive] = useState<ProjectCategory | "All">("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category.includes(active));

  return (
    <div>
      {/* Filter chips */}
      <div className="mb-10 flex flex-wrap gap-2">
        {(["All", ...categories] as const).map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors ${
                isActive
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-white/[0.08] bg-surface/60 text-muted hover:border-accent/30 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <motion.div
          key={active}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={viewportOnce}
          className="grid gap-6 sm:grid-cols-2"
        >
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      ) : (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="rounded-xl border border-white/[0.08] bg-surface px-6 py-16 text-center text-muted"
        >
          No projects in this category yet.
        </motion.p>
      )}
    </div>
  );
}
