import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Design/build process — sticky image on the left, numbered step cards
 * on the right (icon top-left, number top-right, title, divider, copy).
 */
const steps = [
  {
    n: "1",
    title: "Define Your Vision",
    desc: "We start with a deep dive into your goals, users, and constraints — turning a rough idea into a clear, actionable brief before a single line of code.",
    icon: (
      <svg
        width={26}
        height={26}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5" />
      </svg>
    ),
  },
  {
    n: "2",
    title: "Design & Build",
    desc: "I translate the brief into designs and a working product — pixel-perfect, accessible front-ends wired to a real backend and AI workflows, iterating on clickable prototypes.",
    icon: (
      <svg
        width={26}
        height={26}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m3 17 2 2 4-4" />
        <path d="m3 7 2 2 4-4" />
        <path d="M13 6h8" />
        <path d="M13 12h8" />
        <path d="M13 18h8" />
      </svg>
    ),
  },
  {
    n: "3",
    title: "Ship & Iterate",
    desc: "Deployed and production-ready, then measured and refined — performance, SEO, and UX improvements that keep compounding well after launch.",
    icon: (
      <svg
        width={26}
        height={26}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
];

export function Process() {
  return (
    <section id="process" className="container-page scroll-mt-24 py-24 sm:py-32">
      <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left — sticky image */}
        <Reveal className="lg:sticky lg:top-24">
          <div className="relative aspect-square overflow-hidden rounded-[4px] border border-white/[0.08] bg-surface">
            <Image
              src="/Profile_Image/About_1.png"
              alt="Working on a design"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover grayscale"
            />
            <span className="absolute left-1/2 top-1/2 flex h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
            </span>
          </div>
        </Reveal>

        {/* Right — copy + steps */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-surface/60 px-3 py-1.5 font-mono text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Process
            </span>

            <h2 className="mt-5 font-display text-4xl font-medium tracking-tight text-foreground sm:text-6xl">
              How I work
            </h2>

            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
              Crafting products that inspire and hold up under real use — from
              the first idea to production.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
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

          <div className="mt-8 flex flex-col gap-5">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={0.05 * i}>
                <div className="relative rounded-[4px] border border-white/[0.08] bg-surface p-7 sm:p-8">
                  <span className="absolute right-6 top-6 font-mono text-sm text-muted">
                    {step.n}
                  </span>
                  <div className="text-foreground">{step.icon}</div>
                  <h3 className="mt-5 font-display text-2xl font-medium text-foreground sm:text-3xl">
                    {step.title}
                  </h3>
                  <div className="my-5 border-t border-white/[0.06]" />
                  <p className="text-sm leading-relaxed text-muted">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
