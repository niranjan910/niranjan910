"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import type { Project } from "@/data/projects";
import { fadeUp } from "@/lib/motion";
import { GithubIcon, ArrowUpRightIcon } from "@/components/ui/icons";

/**
 * Shared project card — used by the home "Selected work" preview
 * and the full /projects listing. Keep both in sync by editing here.
 */
export function ProjectCard({
  project,
  className = "",
  // On listing grids a `featured` project gets extra width automatically.
  // Bento layouts control spans themselves, so they pass spanFeatured={false}.
  spanFeatured = true,
}: {
  project: Project;
  className?: string;
  spanFeatured?: boolean;
}) {
  const caseStudyHref = `/projects/${project.slug}`;

  return (
    <motion.article
      variants={fadeUp}
      className={`group relative flex h-full flex-col overflow-hidden rounded-[4px] border border-white/[0.08] bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow ${
        spanFeatured && project.featured ? "lg:col-span-2" : ""
      } ${className}`}
    >
      {/* Thumbnail */}
      <Link
        href={caseStudyHref}
        aria-label={`View ${project.title} case study`}
        className="relative aspect-[16/9] overflow-hidden border-b border-white/[0.08] bg-base"
      >
        {project.livePreviewUrl ? (
          // Always-current live embed of the real site. Rendered at 1.5×
          // the card size then scaled down so it reads like a desktop
          // thumbnail; pointer-events-none keeps the whole tile a link.
          <>
            <div className="bg-grid absolute inset-0" />
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <iframe
                src={project.livePreviewUrl}
                title={`${project.title} live preview`}
                loading="lazy"
                tabIndex={-1}
                scrolling="no"
                aria-hidden="true"
                className="absolute left-0 top-0 h-[150%] w-[150%] origin-top-left scale-[.6667] border-0 transition-transform duration-500 group-hover:scale-[.68]"
              />
            </div>
            <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-base/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Live
            </span>
          </>
        ) : project.image ? (
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
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live demo`}
              className="text-muted transition-colors hover:text-accent"
            >
              <ArrowUpRightIcon />
            </a>
          ) : (
            project.status && (
              <span className="shrink-0 rounded-full border border-white/[0.08] bg-base px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted">
                {project.status}
              </span>
            )
          )}
        </div>

        {/* Category chips */}
        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.category.map((c) => (
            <span key={c} className="font-mono text-[10px] uppercase tracking-wide text-accent/80">
              {c}
            </span>
          ))}
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
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-sm font-semibold text-base transition-colors hover:bg-accent-hover"
          >
            Case Study
            <ArrowUpRightIcon width={15} height={15} />
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-accent"
            >
              {/* Radiating "live" dot */}
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-foreground transition-colors hover:text-accent"
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
