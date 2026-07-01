"use client";

import { motion } from "motion/react";
import { site } from "@/data/site";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

export function About() {
  return (
    <section id="about" className="container-page scroll-mt-24 py-24 sm:py-32">
      <SectionHeading index="01" eyebrow="About" title="A bit about me" />

      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        {/* Bio */}
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          <p>
            I&apos;m a full-stack developer who cares about the whole stack —
            from schema design and API performance down to the last pixel of a
            hover state. I like building products that feel fast, look
            considered, and hold up under real use.
          </p>
          <p>
            Over the past few years I&apos;ve shipped dashboards, payment flows,
            and developer tooling, mostly with{" "}
            <span className="text-foreground">React, Next.js, and Node.js</span>.
            Outside of work you&apos;ll find me contributing to open source and
            tinkering with side projects.
          </p>
        </Reveal>

        {/* Avatar placeholder — replace with next/image when you add a photo */}
        <Reveal delay={0.1} className="order-first md:order-last">
          <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-2xl border border-white/[0.08] bg-surface sm:w-48 md:mx-0 md:w-full md:max-w-[240px]">
            <div className="absolute inset-0 grid place-items-center">
              <span className="font-display text-5xl font-medium text-muted/40">
                {site.monogram}
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent" />
          </div>
        </Reveal>
      </div>

      {/* Skills */}
      <div className="mt-16">
        <p className="mono-label mb-6 text-muted">Tech Stack</p>
        <div className="grid gap-8 sm:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.h3
                variants={fadeUp}
                className="mb-3 font-display text-sm font-medium text-foreground"
              >
                {group.label}
              </motion.h3>
              <motion.ul variants={staggerContainer} className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <motion.li key={item} variants={fadeUp}>
                    <span className="inline-block rounded-md border border-white/[0.08] bg-surface px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent/30 hover:text-accent">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
