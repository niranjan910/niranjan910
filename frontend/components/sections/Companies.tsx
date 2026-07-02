"use client";

import { motion } from "motion/react";
import { experience } from "@/data/experience";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

/**
 * Slim trust-strip listing the real companies from data/experience.ts —
 * deliberately reuses that data instead of a separate list so there's
 * only one place to update a company name.
 */
export function Companies() {
  const companies = Array.from(new Set(experience.map((e) => e.company)));
  if (companies.length === 0) return null;

  return (
    <section className="container-page py-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="flex flex-col items-center gap-5 border-y border-white/[0.08] py-8 text-center sm:flex-row sm:justify-between sm:text-left"
      >
        <motion.p variants={fadeUp} className="mono-label shrink-0 text-muted">
          Companies I&apos;ve worked with
        </motion.p>
        <motion.ul
          variants={staggerContainer}
          className="flex flex-wrap items-center justify-center gap-3 sm:justify-end"
        >
          {companies.map((c) => (
            <motion.li
              key={c}
              variants={fadeUp}
              className="rounded-full border border-white/[0.08] bg-surface px-4 py-2 font-display text-sm font-medium text-foreground"
            >
              {c}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
