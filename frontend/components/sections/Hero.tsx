"use client";

import { motion } from "motion/react";
import { site } from "@/data/site";
import { staggerContainer, fadeUp } from "@/lib/motion";
import DecryptedText from "@/components/ui/DecryptedText";

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
          className="mx-auto max-w-3xl text-center"
        >
          {/* Availability badge */}
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

          {/* Title — decrypt effect */}
          <motion.p
            variants={fadeUp}
            className="mt-3 font-display text-2xl font-medium text-accent sm:text-3xl"
          >
            <DecryptedText
              text={site.title}
              animateOn="view"
              sequential
              speed={55}
              revealDirection="start"
              encryptedClassName="opacity-60"
            />
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            {site.tagline}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
