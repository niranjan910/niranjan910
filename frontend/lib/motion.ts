import type { Variants } from "motion/react";

/**
 * Shared animation variants so every section reveals consistently.
 * Kept subtle and short — polish over flash.
 */

// Fade + slight rise for a single element.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Container that staggers its children (lists, grids).
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

// Shared viewport config: animate once, when ~20% is on screen.
export const viewportOnce = { once: true, amount: 0.2 } as const;
