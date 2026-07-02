"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { staggerContainer, viewportOnce, fadeUp } from "@/lib/motion";
import { ArrowUpRightIcon } from "@/components/ui/icons";

// Home page only ever shows live, shipped work — anything still
// "In Development" (e.g. NEXUS) only appears on the full /projects page.
const isLive = (status?: string) => !status || status === "Live in Production";
const liveProjects = projects.filter((p) => isLive(p.status)).slice(0, 3);

export function Projects() {
  return (
    <section id="projects" className="container-page scroll-mt-24 py-24 sm:py-32">
      <SectionHeading
        index="02"
        eyebrow="Projects"
        title="Live in production"
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-6 sm:grid-cols-2"
      >
        {liveProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-12 flex justify-center"
      >
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 rounded-lg border border-white/[0.12] bg-surface/60 px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-accent/40 hover:text-accent"
        >
          View All Projects
          <ArrowUpRightIcon className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </motion.div>
    </section>
  );
}
