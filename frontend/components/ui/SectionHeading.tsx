"use client";

import { motion } from "motion/react";
import { fadeUp, viewportOnce } from "@/lib/motion";

/**
 * Consistent section header: a monospace index (01 / 02…) + title.
 * The numbering encodes reading order through the page, matching a
 * real top-to-bottom sequence.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
}: {
  index: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="mb-12 flex flex-col gap-3"
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm text-accent">{index}</span>
        <span className="h-px w-8 bg-accent/40" aria-hidden />
        <span className="mono-label text-muted">{eyebrow}</span>
      </div>
      <h2 className="font-display text-display-md font-medium text-foreground">
        {title}
      </h2>
    </motion.div>
  );
}
