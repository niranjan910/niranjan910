"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, FolderOpen, ChevronDown, ChevronUp } from "lucide-react";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROJECTS_SORTED } from "@/data/projects";

const FILTERS = [
  { label: "All Projects",          value: "all" },
  { label: "Front-End Development", value: "Front-End Development" },
  { label: "UI/UX Design",          value: "UI/UX Design" },
  { label: "EdTech",                value: "EdTech" },
  { label: "Financial Services",    value: "Financial Services" },
];

export default function ProjectsPage() {
  const [active,   setActive]   = useState("all");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = active === "all"
    ? PROJECTS_SORTED
    : PROJECTS_SORTED.filter(p => p.categories.includes(active));

  return (
    <div className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="PORTFOLIO" title="Projects"
          subtitle="Click View Details to explore each project, or open the full case study for a deep dive." />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {FILTERS.map(f => {
            const count = f.value === "all" ? PROJECTS_SORTED.length
              : PROJECTS_SORTED.filter(p => p.categories.includes(f.value)).length;
            return (
              <button key={f.value} onClick={() => setActive(f.value)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 ${
                  active === f.value
                    ? "bg-purple/15 border-purple/50 text-purple"
                    : "glass-card text-text-secondary hover:border-purple/25 hover:text-purple"
                }`}>
                {f.label}
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${active === f.value ? "bg-purple/25 text-purple" : "bg-white/6 text-text-muted"}`}>{count}</span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {filtered.map(p => (
            <article key={p.id} className="glass-card rounded-2xl overflow-hidden hover:border-purple/30 transition-all duration-300">
              {/* Thumbnail */}
              <div className="relative h-48 flex items-center justify-center" style={{ background: `${p.glowColor}18` }}>
                {p.image ? (
                  <Image src={p.image} alt={p.title} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
                ) : (
                  <FolderOpen size={36} className="text-white/15" />
                )}
              </div>

              {/* Card body */}
              <div className="p-5">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.categories.map(c => <Badge key={c} variant="glass">{c}</Badge>)}
                </div>
                <h2 className="font-heading font-bold text-white text-xl mb-2">{p.title}</h2>
                <p className="text-text-muted text-sm leading-relaxed mb-4">{p.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.technologies.map(t => (
                    <span key={t} className="text-[10px] font-medium text-text-muted bg-white/5 border border-white/8 px-2 py-0.5 rounded">{t}</span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2 flex-wrap">
                  <button onClick={() => setExpanded(expanded === p.id ? null : p.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-purple border border-purple/30 bg-purple/8 hover:bg-purple/14 transition-all">
                    {expanded === p.id ? <><ChevronUp size={12}/> Hide Details</> : <><ChevronDown size={12}/> View Details</>}
                  </button>
                  {(
                    <Link href={`/projects/${p.slug}`} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white border border-orange/80 bg-[rgba(8,5,20,0.75)] shadow-[0_0_8px_rgba(255,138,61,0.3)] hover:shadow-[0_0_14px_rgba(255,138,61,0.5)] transition-all">
                      <FolderOpen size={12}/> Case Study
                    </Link>
                  )}
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white/70 border border-white/10 hover:border-white/25 transition-all">
                      <ExternalLink size={12}/> Live
                    </a>
                  )}
                </div>

                {/* Expanded details */}
                {expanded === p.id && (
                  <div className="mt-5 border-t border-white/6 pt-5 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[["Overview", p.overview],["Problem", p.problem],["Solution", p.solution],["My Role", p.role]].map(([k,v]) => (
                        <div key={k}>
                          <p className="text-orange text-[9px] font-bold tracking-[2px] uppercase mb-1">{k}</p>
                          <p className="text-text-secondary text-xs leading-relaxed">{v}</p>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-orange text-[9px] font-bold tracking-[2px] uppercase mb-2">Key Features</p>
                      <ul className="space-y-1">
                        {p.keyFeatures.map(f => (
                          <li key={f} className="flex items-center gap-2 text-text-secondary text-xs">
                            <span className="text-purple font-bold">→</span>{f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-6">
                      {p.stats.map(s => (
                        <div key={s.label} className="text-center">
                          <p className="font-heading font-black text-xl gradient-text">{s.value}</p>
                          <p className="text-text-muted text-[10px] uppercase tracking-wide">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}