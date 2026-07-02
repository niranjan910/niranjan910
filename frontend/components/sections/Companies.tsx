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
    <section className="container-page py-10">
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
          className="flex flex-wrap items-center justify-center gap-3 sm:justify-end"
        >
          {companyLogos.map((c) => (
            <motion.li
              key={c.name}
              variants={fadeUp}
              className="flex h-11 items-center rounded-lg bg-white/95 px-4 py-2"
            >
              <Image
                src={c.logo}
                alt={c.name}
                width={120}
                height={28}
                className="h-6 w-auto object-contain"
              />
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
