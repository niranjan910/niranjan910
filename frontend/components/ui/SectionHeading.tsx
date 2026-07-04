"use client";

import { motion } from "motion/react";
import { fadeUp, viewportOnce } from "@/lib/motion";

/**
 * Consistent section header: an eyebrow label + title.
 */
export function SectionHeading({
  eyebrow,
  title,
}: {
  /** Kept optional for backwards-compat; no longer rendered. */
  index?: string;
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
      <span className="mono-label text-muted">{eyebrow}</span>
      <h2 className="font-display text-display-md font-medium text-foreground">
        {title}
      </h2>
    </motion.div>
  );
}
