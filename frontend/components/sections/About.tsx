"use client";

import { motion } from "motion/react";
import Image from "next/image";
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
            I&apos;m an AI Product Engineer — I care about the whole product,
            not just one layer of the stack. From schema design and AI
            workflow integration down to the last pixel of a hover state, I
            like building things that solve real problems and hold up under
            real use.
          </p>
          <p>
            I&apos;ve shipped a national summit platform used by thousands of
            attendees, an AI-powered smart-classroom product, and a full-stack
            EdTech platform with my own{" "}
            <span className="text-foreground">FastAPI backend</span>, mostly
            with{" "}
            <span className="text-foreground">
              React, Next.js, and AI-assisted workflows
            </span>
            . My long-term goal is building and shipping my own AI SaaS
            products.
          </p>
        </Reveal>

        {/* Avatar */}
        <Reveal delay={0.1} className="order-first md:order-last">
          <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-2xl border border-white/[0.08] bg-surface sm:w-48 md:mx-0 md:w-full md:max-w-[240px]">
            <Image
              src="/Profile_Image/About_1.png"
              alt="Niranjan Kumar"
              fill
              sizes="(max-width: 768px) 192px, 240px"
              className="object-cover object-[25%_20%]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent" />
          </div>
        </Reveal>
      </div>

      {/* Skills */}
      <div className="mt-16">
        <p className="mono-label mb-6 text-muted">Tech Stack</p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
