"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { companyLogos } from "@/data/companies";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

/**
 * Slim trust-strip of company/client logos — see data/companies.ts,
 * which is intentionally broader than data/experience.ts (employers +
 * project clients like EGN).
 */
export function Companies() {
  if (companyLogos.length === 0) return null;

  return (
    <section className="w-full px-6 py-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="flex flex-col items-center gap-5 border-y border-white/[0.08] py-8 text-center sm:flex-row sm:justify-between sm:text-left"
      >
        <motion.p variants={fadeUp} className="mono-label shrink-0 text-muted">
          Companies &amp; clients I&apos;ve worked with
        </motion.p>
        <motion.ul
          variants={staggerContainer}
          className="grid w-full grid-cols-2 gap-x-6 gap-y-4 sm:flex sm:w-auto sm:flex-wrap sm:items-center sm:justify-end sm:gap-x-6 sm:gap-y-3"
        >
          {companyLogos.map((c) => (
            <motion.li
              key={c.name}
              variants={fadeUp}
              className="flex items-center justify-center sm:shrink-0 sm:justify-start"
            >
              <Image
                src={c.logo}
                alt={c.name}
                width={120}
                height={28}
                className="h-7 w-auto rounded-md object-contain"
              />
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
