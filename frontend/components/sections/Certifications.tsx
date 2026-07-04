"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { certifications } from "@/data/certifications";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CertificationsGrid } from "@/components/certifications/CertificationsGrid";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { ArrowUpRightIcon } from "@/components/ui/icons";

// The home page teases only the 3 most recent credentials — the full set
// lives on the dedicated /certifications page.
const featuredCertifications = certifications.slice(0, 3);

export function Certifications() {
  return (
    <section
      id="certifications"
      className="container-page scroll-mt-24 py-24 sm:py-32"
    >
      <SectionHeading
        index="04"
        eyebrow="Certifications"
        title="Credentials & training"
      />

      <CertificationsGrid items={featuredCertifications} />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-12 flex justify-center"
      >
        <Link
          href="/certifications"
          className="group inline-flex items-center gap-2 rounded-lg border border-white/[0.12] bg-surface/60 px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent/40 hover:text-accent"
        >
          View All Certifications
          <ArrowUpRightIcon className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </motion.div>
    </section>
  );
}
