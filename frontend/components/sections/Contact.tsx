"use client";

import { motion } from "motion/react";
import { site } from "@/data/site";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";
import { socialIcons, ArrowUpRightIcon, CallIcon } from "@/components/ui/icons";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-surface px-6 py-16 text-center sm:px-16"
        >
          {/* soft glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
            aria-hidden
          />

          <motion.p variants={fadeUp} className="mono-label text-muted">
            Contact
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl font-display text-display-md font-medium text-foreground"
          >
            Let&apos;s build something great together.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-lg text-lg text-muted"
          >
            I&apos;m open to full-time roles, freelance projects, and
            interesting collaborations. Drop me a line.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-base transition-all duration-300 hover:bg-accent-hover hover:shadow-glow-soft"
            >
              {site.email}
              <ArrowUpRightIcon className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={site.phoneHref}
              aria-label={`Call ${site.name} at ${site.phone}`}
              className="inline-flex items-center gap-2 rounded-lg border border-white/[0.12] bg-surface/60 px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent/40 hover:text-accent"
            >
              <CallIcon width={16} height={16} />
              {site.phone}
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex items-center justify-center gap-5"
          >
            {Object.entries(site.socials).map(([key, url]) => {
              const Icon = socialIcons[key as keyof typeof socialIcons];
              if (!Icon) return null;
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={key}
                  className="text-muted transition-colors hover:text-accent"
                >
                  <Icon width={20} height={20} />
                </a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
