"use client";

import Image from "next/image";
import { skillGroups } from "@/data/skills";
import { Reveal } from "@/components/ui/Reveal";
import ScrollFloat from "@/components/ui/ScrollFloat";

export function About() {
  return (
    <section id="about" className="container-page scroll-mt-24 py-24 sm:py-32">
      <div className="grid items-stretch gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        {/* Left — copy */}
        <Reveal>
          <p className="mono-label mb-4 text-accent">About</p>
          <ScrollFloat
            containerClassName="my-0"
            textClassName="font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl"
            stagger={0.04}
          >
            A bit about me
          </ScrollFloat>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I&apos;m an AI Product Engineer based in India. I care about the
            whole product — from schema design and AI workflow integration down
            to the last pixel of a hover state — building things that solve real
            problems and hold up under real use.
          </p>

          {/* Skills — grouped by category, each in a card */}
          <div className="mt-8 grid gap-3 border-t border-white/[0.08] pt-8 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.label}
                className="rounded-[4px] border border-white/[0.08] bg-surface p-5"
              >
                <h3 className="mb-3 font-mono text-xs uppercase tracking-wide text-accent">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="inline-block rounded-[4px] border border-white/[0.08] bg-base px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent/30 hover:text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </Reveal>

        {/* Right — large image */}
        <Reveal delay={0.1} className="order-first lg:order-last">
          <div className="group relative aspect-square w-full overflow-hidden rounded-[4px] border border-white/[0.08] bg-surface">
            <Image
              src="/Profile_Image/About_1.png"
              alt="Niranjan Kumar"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-[25%_20%] transition-transform duration-500 group-hover:scale-[1.03]"
              priority
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
