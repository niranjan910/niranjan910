import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};

  const title = `${project.title} — Case Study | ${site.name}`;
  const url = `${site.url}/projects/${project.slug}`;

  return {
    title,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description: project.description,
      url,
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.description,
    },
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main>
        <ProjectHero project={project} />

        <section className="container-page py-4 sm:py-8">
          <SectionHeading index="01" eyebrow="Overview" title="What I built" />
          <Reveal className="max-w-3xl text-lg leading-relaxed text-muted">
            <p>{project.overview ?? project.description}</p>
          </Reveal>
        </section>

        {project.highlights && project.highlights.length > 0 && (
          <section className="container-page py-20 sm:py-28">
            <SectionHeading
              index="02"
              eyebrow="Highlights"
              title="Key contributions"
            />
            <ul className="grid gap-4 sm:grid-cols-2">
              {project.highlights.map((highlight, i) => (
                <Reveal
                  as="li"
                  key={highlight}
                  delay={i * 0.05}
                  className="rounded-xl border border-white/[0.08] bg-surface p-5 text-sm leading-relaxed text-muted"
                >
                  {highlight}
                </Reveal>
              ))}
            </ul>
          </section>
        )}

        <section className="container-page py-4 pb-24 sm:pb-32">
          <SectionHeading index="03" eyebrow="Stack" title="Built with" />
          <Reveal className="flex flex-wrap gap-3">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-white/[0.08] bg-surface px-4 py-2 font-mono text-sm text-muted"
              >
                {t}
              </span>
            ))}
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
