"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { certifications } from "@/data/certifications";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";
import { ArrowUpRightIcon } from "@/components/ui/icons";

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

      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {certifications.map((cert) => {
          const Wrapper = cert.credentialUrl ? "a" : "div";
          return (
            <motion.li key={cert.name} variants={fadeUp}>
              <Wrapper
                {...(cert.credentialUrl
                  ? {
                      href: cert.credentialUrl,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-surface transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-glow-soft"
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b border-white/[0.08] bg-base">
                  <Image
                    src={cert.image}
                    alt={`${cert.name} certificate`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 items-start justify-between gap-4 p-6">
                  <div>
                    <h3 className="font-display text-base font-medium text-foreground">
                      {cert.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted">{cert.issuer}</p>
                    <p className="mt-3 font-mono text-xs text-accent">
                      {cert.date}
                    </p>
                  </div>
                  {cert.credentialUrl && (
                    <span className="mt-1 shrink-0 text-muted transition-colors group-hover:text-accent">
                      <ArrowUpRightIcon />
                    </span>
                  )}
                </div>
              </Wrapper>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}
