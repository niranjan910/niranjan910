import React from "react";
import Link from "next/link";
import { ExternalLink, Code2, ArrowRight, ArrowLeft } from "lucide-react";
import Badge from "@/components/ui/Badge";
import type { Project } from "@/types";
import { getProjectBySlug } from "@/data/projects";

interface Section { label: string; heading: string; body: string }
interface Challenge { title: string; description: string }
interface Step { title: string; description: string }

interface Props {
  project:    Project;
  overview:   string;
  goals:      string[];
  problem:    string;
  painPoints: { icon: React.ReactNode; title: string; text: string }[];
  research:   Step[];
  designSteps: Step[];
  devSteps:   Step[];
  challenges: Challenge[];
  features:   string[];
  learnings:  string[];
}

function StepCard({ num, title, description }: { num: number; title: string; description: string }) {
  return (
    <div className="flex gap-4 glass-card rounded-xl p-4">
      <span className="font-heading font-black text-2xl text-purple/25 leading-none flex-shrink-0">{String(num).padStart(2,"0")}</span>
      <div>
        <h4 className="font-heading font-bold text-white text-sm mb-1">{title}</h4>
        <p className="text-text-muted text-xs leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function CaseStudyLayout({
  project, overview, goals, problem, painPoints,
  research, designSteps, devSteps, challenges, features, learnings,
}: Props) {
  const prevProject = project.prevSlug ? getProjectBySlug(project.prevSlug) : null;
  const nextProject = project.nextSlug ? getProjectBySlug(project.nextSlug) : null;

  return (
    <article>
      {/* ── Hero ── */}
      <header
        className="relative min-h-[60vh] flex items-end pb-14 px-6 pt-32 overflow-hidden border-b border-white/6"
        style={{
          background: `radial-gradient(ellipse at 20% 80%, ${project.glowColor}30 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(200,92,255,0.12) 0%, transparent 55%), #04040a`,
        }}
      >
        <div className="max-w-5xl mx-auto w-full">
          <Link href="/projects" className="inline-flex items-center gap-2 text-white/40 hover:text-purple text-sm mb-6 transition-colors">
            <ArrowLeft size={14} /> Back to Projects
          </Link>
          <Badge className="mb-4">{project.badge}</Badge>
          <h1 className="font-heading font-black text-5xl md:text-6xl text-white leading-none mb-6">{project.title}</h1>
          <div className="flex flex-wrap gap-6 mb-8 text-sm">
            {[
              ["Role",     project.role.split("&")[0].trim()],
              ["Duration", project.duration],
              ["Status",   project.liveUrl ? "Live" : "In Development"],
            ].map(([k,v]) => (
              <div key={k}>
                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-0.5">{k}</p>
                <p className="text-white/80 font-semibold">{v}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-3 flex-wrap">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <ExternalLink size={14} /> View Live Site
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <Code2 size={14} /> GitHub
              </a>
            )}
            <Link href="/projects" className="btn-ghost">All Projects</Link>
          </div>
        </div>
      </header>

      {/* ── Sections ── */}
      <div className="max-w-5xl mx-auto px-6">

        {/* Overview */}
        <section className="py-16 border-b border-white/4">
          <p className="text-purple text-[10px] font-bold tracking-[3px] uppercase mb-2">Project Overview</p>
          <h2 className="font-heading font-bold text-white text-2xl md:text-3xl mb-4">{project.title} — Overview</h2>
          <p className="text-text-secondary text-base leading-relaxed max-w-2xl mb-6">{overview}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {goals.map(g => (
              <div key={g} className="flex items-center gap-2 glass-card rounded-xl px-4 py-3 text-sm text-text-secondary">
                <span className="text-purple font-bold">→</span>{g}
              </div>
            ))}
          </div>
        </section>

        {/* Problem */}
        <section className="py-16 border-b border-white/4">
          <p className="text-orange text-[10px] font-bold tracking-[3px] uppercase mb-2">Problem Statement</p>
          <h2 className="font-heading font-bold text-white text-2xl md:text-3xl mb-4">The Problem</h2>
          <p className="text-text-secondary text-base leading-relaxed max-w-2xl mb-6">{problem}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {painPoints.map(pp => (
              <div key={pp.title} className="glass-card rounded-xl p-4 hover:border-purple/25 transition-all">
                <div className="w-9 h-9 rounded-lg bg-purple/10 border border-purple/20 flex items-center justify-center text-purple text-base mb-3">{pp.icon}</div>
                <h4 className="font-heading font-bold text-white text-sm mb-1">{pp.title}</h4>
                <p className="text-text-muted text-xs leading-relaxed">{pp.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Research */}
        <section className="py-16 border-b border-white/4">
          <p className="text-purple text-[10px] font-bold tracking-[3px] uppercase mb-2">Research & Discovery</p>
          <h2 className="font-heading font-bold text-white text-2xl md:text-3xl mb-6">Understanding Users First</h2>
          <div className="space-y-3">
            {research.map((s, i) => <StepCard key={s.title} num={i+1} title={s.title} description={s.description} />)}
          </div>
        </section>

        {/* Design */}
        <section className="py-16 border-b border-white/4">
          <p className="text-purple text-[10px] font-bold tracking-[3px] uppercase mb-2">Design Process</p>
          <h2 className="font-heading font-bold text-white text-2xl md:text-3xl mb-6">From Wireframes to Production</h2>
          <div className="space-y-3">
            {designSteps.map((s, i) => <StepCard key={s.title} num={i+1} title={s.title} description={s.description} />)}
          </div>
        </section>

        {/* Development */}
        <section className="py-16 border-b border-white/4">
          <p className="text-orange text-[10px] font-bold tracking-[3px] uppercase mb-2">Development Process</p>
          <h2 className="font-heading font-bold text-white text-2xl md:text-3xl mb-6">Building the Product</h2>
          <div className="space-y-3">
            {devSteps.map((s, i) => <StepCard key={s.title} num={i+1} title={s.title} description={s.description} />)}
          </div>
        </section>

        {/* Challenges */}
        <section className="py-16 border-b border-white/4">
          <p className="text-orange text-[10px] font-bold tracking-[3px] uppercase mb-2">Challenges Faced</p>
          <h2 className="font-heading font-bold text-white text-2xl md:text-3xl mb-6">Problems Solved</h2>
          <div className="space-y-4">
            {challenges.map((c, i) => (
              <div key={c.title} className="glass-card rounded-xl p-5 flex gap-4">
                <span className="font-heading font-black text-3xl text-purple/20 leading-none flex-shrink-0">{String(i+1).padStart(2,"0")}</span>
                <div>
                  <h4 className="font-heading font-bold text-white text-sm mb-2">{c.title}</h4>
                  <p className="text-text-muted text-xs leading-relaxed">{c.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 border-b border-white/4">
          <p className="text-purple text-[10px] font-bold tracking-[3px] uppercase mb-2">Technology Stack</p>
          <h2 className="font-heading font-bold text-white text-2xl md:text-3xl mb-6">Tools & Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map(t => (
              <span key={t} className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm font-semibold text-text-secondary hover:border-purple/30 hover:text-white transition-all">{t}</span>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 border-b border-white/4">
          <p className="text-purple text-[10px] font-bold tracking-[3px] uppercase mb-2">Final Solution</p>
          <h2 className="font-heading font-bold text-white text-2xl md:text-3xl mb-6">Key Features</h2>
          <ul className="space-y-2">
            {features.map(f => (
              <li key={f} className="flex items-center gap-3 text-text-secondary text-sm py-2 border-b border-white/4">
                <span className="text-purple font-bold">→</span>{f}
              </li>
            ))}
          </ul>
        </section>

        {/* Results */}
        <section className="py-16 border-b border-white/4">
          <p className="text-orange text-[10px] font-bold tracking-[3px] uppercase mb-2">Results & Impact</p>
          <h2 className="font-heading font-bold text-white text-2xl md:text-3xl mb-6">Measurable Outcomes</h2>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {project.stats.map(s => (
              <div key={s.label} className="glass-card rounded-2xl p-5 text-center">
                <p className="font-heading font-black text-3xl gradient-text mb-1">{s.value}</p>
                <p className="text-text-muted text-[10px] uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">{project.outcome}</p>
        </section>

        {/* Learnings */}
        <section className="py-16">
          <p className="text-purple text-[10px] font-bold tracking-[3px] uppercase mb-2">Key Learnings</p>
          <h2 className="font-heading font-bold text-white text-2xl md:text-3xl mb-6">What I Took Away</h2>
          <ul className="space-y-2">
            {learnings.map(l => (
              <li key={l} className="flex items-start gap-3 text-text-secondary text-sm py-2 border-b border-white/4">
                <span className="text-purple font-bold mt-0.5">→</span>{l}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* ── Next Project Navigation ── */}
      <nav className="border-t border-white/6 bg-white/[0.01] py-10 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-4">
          {prevProject ? (
            <Link href={`/projects/${prevProject.slug}`} className="glass-card rounded-xl px-5 py-3 flex flex-col hover:border-purple/30 transition-all min-w-[160px]">
              <span className="text-[9px] text-white/30 uppercase tracking-widest mb-0.5">← Previous</span>
              <span className="font-heading font-bold text-white text-sm">{prevProject.title}</span>
            </Link>
          ) : <div />}
          <Link href="/projects" className="text-text-muted hover:text-purple text-sm transition-colors">All Projects</Link>
          {nextProject ? (
            <Link href={`/projects/${nextProject.slug}`} className="glass-card rounded-xl px-5 py-3 flex flex-col items-end hover:border-purple/30 transition-all min-w-[160px]">
              <span className="text-[9px] text-white/30 uppercase tracking-widest mb-0.5">Next →</span>
              <span className="font-heading font-bold text-white text-sm">{nextProject.title}</span>
            </Link>
          ) : <div />}
        </div>
      </nav>
    </article>
  );
}
