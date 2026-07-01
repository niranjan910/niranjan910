"use client";

import { motion } from "motion/react";
import { site } from "@/data/site";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { socialIcons } from "@/components/ui/icons";
import { ArrowUpRightIcon, CallIcon } from "@/components/ui/icons";

export function Hero() {
  return (
    <section
      id="top"
      className="hero-glow relative flex min-h-[92vh] items-center overflow-hidden pt-16"
    >
      <div className="container-page relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Availability pill */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-surface/60 px-3 py-1.5 font-mono text-xs text-muted backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for work
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-display-lg font-medium text-foreground"
          >
            {site.name}
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={fadeUp}
            className="mt-3 font-display text-2xl font-medium text-accent sm:text-3xl"
          >
            {site.title}
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            {site.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-base transition-all hover:bg-accent-hover hover:shadow-glow-soft"
            >
              View Projects
              <ArrowUpRightIcon className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={site.phoneHref}
              aria-label={`Call ${site.name} at ${site.phone}`}
              className="inline-flex items-center gap-2 rounded-lg border border-white/[0.12] bg-surface/60 px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-accent/40 hover:text-accent"
            >
              <CallIcon width={16} height={16} />
              Contact Me
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex items-center gap-4"
          >
            {Object.entries(site.socials).map(([key, url]) => {
              const Icon = socialIcons[key as keyof typeof socialIcons];
              if (!Icon) return null;
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={key}
                  className="text-muted transition-colors hover:text-accent"
                >
                  <Icon width={20} height={20} />
                </a>
              );
            })}
            <span className="h-4 w-px bg-white/[0.12]" aria-hidden />
            <a
              href={`mailto:${site.email}`}
              className="font-mono text-xs text-muted transition-colors hover:text-accent"
            >
              {site.email}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block">
        <div className="flex flex-col items-center gap-2 text-muted">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
            Scroll
          </span>
          <span className="h-8 w-px bg-gradient-to-b from-accent/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
