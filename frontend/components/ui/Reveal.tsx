"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { fadeUp, viewportOnce } from "@/lib/motion";

// Motion components for the element types we allow.
const tags = {
  div: motion.div,
  section: motion.section,
  li: motion.li,
  article: motion.article,
} as const;

/**
 * Wraps children in a fade-up reveal that triggers once on scroll.
 * `delay` lets you offset individual elements when needed.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof typeof tags;
}) {
  const MotionTag = tags[as];
  return (
    <MotionTag
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
