"use client";

import { motion } from "motion/react";
import type { Certification } from "@/data/certifications";
import { CertificationCard } from "@/components/certifications/CertificationCard";
import { staggerContainer, viewportOnce } from "@/lib/motion";

export function CertificationsGrid({ items }: { items: Certification[] }) {
  return (
    <motion.ul
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {items.map((cert) => (
        <CertificationCard key={cert.name} cert={cert} />
      ))}
    </motion.ul>
  );
}
