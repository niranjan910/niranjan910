"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { projects, type Project } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";
import { GithubIcon, ExternalIcon, ArrowUpRightIcon } from "@/components/ui/icons";

function ProjectCard({ project }: { project: Project }) {
  const caseStudyHref = `/projects/${project.slug}`;

  return (
    <motion.article
      variants={fadeUp}
      className={`group relative flex flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow ${
        project.featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Thumbnail */}
      <Link
        href={caseStudyHref}
        aria-label={`View ${project.title} case study`}
        className="relative aspect-[16/9] overflow-hidden border-b border-white/[0.08] bg-base"
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          // Clean typographic placeholder when no screenshot is set.
          <div className="bg-grid absolute inset-0 grid place-items-center">
            <span className="font-display text-2xl font-medium text-muted/30">
              {project.title}
            </span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <Link href={caseStudyHref} className="group/title">
            <h3 className="font-display text-xl font-medium text-foreground transition-colors group-hover/title:text-accent">
              {project.title}
            </h3>
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live demo`}
              className="text-muted transition-colors hover:text-accent"
            >
              <ArrowUpRightIcon />
            </a>
          )}
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        {/* Tech tags */}
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded border border-white/[0.06] bg-base px-2 py-1 font-mono text-[11px] text-muted"
            >
              {t}
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="mt-6 flex items-center gap-4 border-t border-white/[0.06] pt-4">
          <Link
            href={caseStudyHref}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            Case Study
            <ArrowUpRightIcon width={15} height={15} />
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-foreground transition-colors hover:text-accent"
            >
              <ExternalIcon width={15} height={15} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
            >
              <GithubIcon width={15} height={15} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

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
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
