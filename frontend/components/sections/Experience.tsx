"use client";

import { motion } from "motion/react";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

export function Experience() {
  return (
    <section
      id="experience"
      className="container-page scroll-mt-24 py-24 sm:py-32"
    >
      <SectionHeading index="03" eyebrow="Experience" title="Where I've worked" />

      <motion.ol
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative ml-2 border-l border-white/[0.08] pl-8 sm:ml-3 sm:pl-10"
      >
        {experience.map((item) => {
          const current = item.end.toLowerCase() === "present";
          return (
            <motion.li
              key={`${item.company}-${item.start}`}
              variants={fadeUp}
              className="relative pb-12 last:pb-0"
            >
              {/* Node dot */}
              <span
                className={`absolute -left-[41px] top-1.5 grid h-4 w-4 place-items-center rounded-full border sm:-left-[49px] ${
                  current
                    ? "border-accent bg-accent/20"
                    : "border-white/20 bg-surface"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    current ? "bg-accent" : "bg-muted"
                  }`}
                />
                {current && (
                  <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-accent/40" />
                )}
              </span>

              {/* Dates */}
              <p className="font-mono text-xs text-accent">
                {item.start} — {item.end}
                {item.location && (
                  <span className="text-muted"> · {item.location}</span>
                )}
              </p>

              {/* Role + company */}
              <h3 className="mt-2 font-display text-lg font-medium text-foreground">
                {item.role}
              </h3>
              <p className="text-sm text-muted">
                {item.company}
                {item.type && ` · ${item.type}`}
              </p>

              {/* Bullets */}
              <ul className="mt-4 space-y-2">
                {item.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.li>
          );
        })}
      </motion.ol>
    </section>
  );
}
