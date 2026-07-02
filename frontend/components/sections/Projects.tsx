"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { staggerContainer, viewportOnce, fadeUp } from "@/lib/motion";
import { ArrowUpRightIcon } from "@/components/ui/icons";

export function Projects() {
  return (
    <section id="projects" className="container-page scroll-mt-24 py-24 sm:py-32">
      <SectionHeading
        index="02"
        eyebrow="Projects"
        title="Selected work"
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-6 sm:grid-cols-2"
      >
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        <Link
          href="/projects"
          className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
        >
          View all projects
          <ArrowUpRightIcon className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </motion.div>
    </section>
  );
}
