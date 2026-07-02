import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Projects — ${site.name}`,
  description: `A filterable index of everything ${site.name} has built — full-stack products, AI & automation tooling, and more.`,
  alternates: { canonical: `${site.url}/projects` },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero-glow relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="container-page relative z-10">
            <p className="mono-label">Projects</p>
            <h1 className="mt-4 font-display text-display-lg font-medium text-foreground">
              Everything I&apos;ve built
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
              Filter by category to see the full picture — full-stack
              products, AI &amp; automation tooling, and everything in
              between.
            </p>
          </div>
        </section>

        <section className="container-page pb-24 sm:pb-32">
          <ProjectsExplorer projects={projects} />
        </section>
      </main>
      <Footer />
    </>
  );
}
