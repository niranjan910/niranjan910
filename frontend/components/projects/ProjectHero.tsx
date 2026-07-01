"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "motion/react";
import type { Project } from "@/data/projects";
import { ArrowUpRightIcon, GithubIcon } from "@/components/ui/icons";

/**
 * Premium 3D case-study hero.
 *
 * The right-hand "browser card" tilts in real 3D (perspective + rotateX/
 * rotateY) driven by pointer position, with layered translateZ depth for
 * the chrome bar, glow, monogram, and stats row. Mouse-only (touch bails
 * out) and fully disabled under prefers-reduced-motion.
 */
export function ProjectHero({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20, mass: 0.5 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const glowLeft = useTransform(springX, [-0.5, 0.5], ["15%", "85%"]);
  const glowTop = useTransform(springY, [-0.5, 0.5], ["15%", "85%"]);

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion || e.pointerType !== "mouse" || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handlePointerLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const monogram = project.title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3);

  return (
    <section className="hero-glow relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        {/* ── Copy ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/#projects"
            className="mono-label inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
          >
            ← Back to projects
          </Link>

          <p className="mono-label mt-6">
            Case Study{project.org ? ` · ${project.org}` : ""}
          </p>
          <h1 className="mt-4 font-display text-display-lg font-medium text-foreground">
            {project.title}
          </h1>
          {project.role && (
            <p className="mt-3 font-display text-xl font-medium text-accent sm:text-2xl">
              {project.role}
              {project.period ? ` · ${project.period}` : ""}
            </p>
          )}

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {project.overview ?? project.description}
          </p>

          {(project.eventDate || project.location) && (
            <div className="mt-6 flex flex-wrap gap-2.5">
              {project.eventDate && (
                <span className="rounded-full border border-white/[0.08] bg-surface/60 px-3 py-1.5 font-mono text-xs text-muted backdrop-blur">
                  {project.eventDate}
                </span>
              )}
              {project.location && (
                <span className="rounded-full border border-white/[0.08] bg-surface/60 px-3 py-1.5 font-mono text-xs text-muted backdrop-blur">
                  {project.location}
                </span>
              )}
            </div>
          )}

          <div className="mt-9 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-base transition-all hover:bg-accent-hover hover:shadow-glow-soft"
              >
                Visit Live Site
                <ArrowUpRightIcon className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.12] bg-surface/60 px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-accent/40 hover:text-accent"
              >
                <GithubIcon width={16} height={16} />
                View Code
              </a>
            )}
          </div>
        </motion.div>

        {/* ── 3D card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
          style={{ perspective: 1600 }}
        >
          <div
            ref={cardRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            className="relative"
          >
            <motion.div
              style={
                reduceMotion
                  ? undefined
                  : { rotateX, rotateY, transformStyle: "preserve-3d" }
              }
              className="relative rounded-2xl border border-white/[0.08] bg-surface/80 shadow-card backdrop-blur-xl will-change-transform"
            >
              {/* fake browser chrome */}
              <div
                style={
                  reduceMotion ? undefined : { transform: "translateZ(40px)" }
                }
                className="flex items-center gap-1.5 border-b border-white/[0.08] px-4 py-3"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="ml-3 truncate rounded bg-base px-2.5 py-1 font-mono text-[11px] text-muted">
                  {project.liveUrl
                    ? project.liveUrl.replace(/^https?:\/\//, "")
                    : project.title}
                </span>
              </div>

              {/* body */}
              <div
                style={
                  reduceMotion ? undefined : { transform: "translateZ(60px)" }
                }
                className="relative grid place-items-center overflow-hidden px-6 py-14"
              >
                <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
                <motion.div
                  style={
                    reduceMotion
                      ? undefined
                      : { left: glowLeft, top: glowTop }
                  }
                  className="pointer-events-none absolute h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-3xl"
                />
                <span className="relative select-none font-display text-5xl font-semibold text-foreground/90">
                  {monogram}
                </span>
              </div>

              {/* stats row */}
              {project.stats && (
                <div
                  style={
                    reduceMotion
                      ? undefined
                      : { transform: "translateZ(50px)" }
                  }
                  className="grid grid-cols-3 divide-x divide-white/[0.06] border-t border-white/[0.08]"
                >
                  {project.stats.map((s) => (
                    <div key={s.label} className="px-3 py-4 text-center">
                      <div className="font-display text-lg font-semibold text-accent">
                        {s.value}
                      </div>
                      <div className="mt-1 text-[10px] uppercase tracking-wide text-muted">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* floating "live" badge */}
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={
                reduceMotion ? undefined : { transform: "translateZ(90px)" }
              }
              className="absolute -left-4 -top-5 hidden rounded-xl border border-accent/30 bg-base/90 px-4 py-2 font-mono text-xs text-accent shadow-glow-soft backdrop-blur sm:block"
            >
              ● Live in Production
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
