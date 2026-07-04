"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Services — intro + large image (with a scroll-triggered popup on the
 * left), a 2×2 grid of service cards, and a marquee of service tags.
 */
const serviceTags = [
  "Full-Stack Apps",
  "AI Integration",
  "Landing Pages",
  "Dashboards",
  "REST APIs",
  "Automation",
  "SEO & GEO",
  "Design Systems",
  "Web Performance",
  "Prompt Engineering",
];

const services = [
  {
    title: "Full-Stack Development",
    desc: "End-to-end products — schema design, APIs, and pixel-perfect front-ends wired together and shipped to production.",
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </svg>
    ),
  },
  {
    title: "AI Integration",
    desc: "LLM-powered features, agent workflows, and AI-assisted automation built into real products — not just demos.",
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
      </svg>
    ),
  },
  {
    title: "Frontend Engineering",
    desc: "Fast, accessible, responsive interfaces in React & Next.js with motion and design systems that scale cleanly.",
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: "SEO & Performance",
    desc: "Technical SEO, Core Web Vitals, and structured data that make products legible to search and AI answer engines.",
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="container-page scroll-mt-24 py-24 sm:py-32">
      {/* Intro + image */}
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Left */}
        <div className="relative">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-surface/60 px-3 py-1.5 font-mono text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Services
            </span>

            <h2 className="mt-5 font-display text-5xl font-medium tracking-tight text-foreground sm:text-6xl">
              Services
            </h2>

            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
              Helping businesses ship standout products — from full-stack builds
              to AI integration that captivates and converts.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {["Full-Stack", "AI Integration", "Frontend", "SEO & Performance"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="inline-block rounded-[4px] border border-white/[0.08] bg-surface px-3.5 py-2 font-mono text-xs text-muted"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center rounded-[4px] border border-white/[0.15] bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:border-accent/40 hover:text-accent"
              >
                Book a Free Call
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center rounded-[4px] border border-white/[0.15] bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:border-accent/40 hover:text-accent"
              >
                See Projects
              </Link>
            </div>
          </Reveal>

          {/* Scroll-triggered popup */}
          <motion.div
            initial={{ opacity: 0, x: -24, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute -bottom-6 left-0 z-10 flex items-center gap-3 rounded-[4px] border border-white/[0.1] bg-base/90 px-4 py-3 shadow-card backdrop-blur sm:-bottom-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            <span className="text-sm font-medium text-foreground">
              Available for new projects
            </span>
          </motion.div>
        </div>

        {/* Right image */}
        <Reveal delay={0.1}>
          <div className="relative aspect-square overflow-hidden rounded-[4px] border border-white/[0.08] bg-surface">
            <Image
              src="/Profile_Image/About_1.png"
              alt="Services"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover grayscale"
            />
          </div>
        </Reveal>
      </div>

      {/* Service cards grid */}
      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={0.05 * i}>
            <div className="h-full rounded-[4px] border border-white/[0.08] bg-surface p-7 sm:p-8">
              <div className="flex items-center gap-3 text-foreground">
                {service.icon}
                <h3 className="font-display text-xl font-medium sm:text-2xl">
                  {service.title}
                </h3>
              </div>
              <div className="my-5 border-t border-white/[0.06]" />
              <p className="text-sm leading-relaxed text-muted">{service.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Marquee of service tags */}
      <div className="rb-marquee-mask mt-10">
        <div className="rb-marquee-track">
          {[...serviceTags, ...serviceTags].map((tag, i) => (
            <span
              key={i}
              className="mx-1.5 inline-flex shrink-0 items-center rounded-[4px] border border-white/[0.08] bg-surface px-4 py-2 font-mono text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
