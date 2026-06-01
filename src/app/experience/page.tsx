import type { Metadata } from "next";
import { Briefcase, GraduationCap, BookOpen } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { EXPERIENCE_SORTED } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Niranjan Kumar professional journey — work experience, education, and training.",
};

const iconMap = { work: Briefcase, education: GraduationCap, training: BookOpen };
const colorMap = {
  work:      { bg: "bg-purple/15",  border: "border-purple/40",  text: "text-purple" },
  education: { bg: "bg-[#34d399]/10", border: "border-[#34d399]/40", text: "text-[#34d399]" },
  training:  { bg: "bg-cyan/10",    border: "border-cyan/40",    text: "text-cyan" },
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="EXPERIENCE" title="My Journey of Growth" subtitle="From learning to leading impact." />

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">
          {/* Left sticky heading */}
          <div className="lg:sticky lg:top-28">
            <p className="text-text-muted text-sm leading-relaxed">
              A timeline of professional work, training programmes, and formal education that shaped my expertise in AI, design, and technology.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-5">
            {EXPERIENCE_SORTED.map((item, idx) => {
              const Icon  = iconMap[item.type];
              const color = colorMap[item.type];
              return (
                <div key={item.id} className="relative">
                  {/* Connector */}
                  {idx < EXPERIENCE_SORTED.length - 1 && (
                    <div className="absolute left-6 top-14 bottom-0 w-px bg-white/6" />
                  )}

                  <div className="glass-card rounded-2xl p-5 hover:border-purple/25 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-full ${color.bg} border ${color.border} flex items-center justify-center flex-shrink-0`}>
                        <Icon size={18} className={color.text} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="font-heading font-bold text-white text-base">{item.role}</h3>
                          {item.isCurrent && (
                            <span className="text-[9px] font-bold tracking-wider uppercase text-[#34d399] bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.3)] px-2 py-0.5 rounded-full">Current</span>
                          )}
                          {item.grade && (
                            <span className="text-[9px] font-bold text-orange bg-orange/10 border border-orange/25 px-2 py-0.5 rounded-full">{item.grade}</span>
                          )}
                        </div>
                        <p className={`${color.text} text-sm font-semibold mb-0.5`}>{item.company}</p>
                        <p className="text-text-muted text-xs mb-3">
                          {new Date(item.startDate).toLocaleDateString("en-IN",{month:"short",year:"numeric"})} –{" "}
                          {item.endDate ? new Date(item.endDate).toLocaleDateString("en-IN",{month:"short",year:"numeric"}) : "Present"}
                          {item.location && <> · {item.location}</>}
                        </p>
                        {item.promotion && (
                          <p className="text-orange/80 text-xs bg-orange/6 border border-orange/20 rounded-lg px-3 py-2 mb-3">⚡ {item.promotion}</p>
                        )}
                        <p className="text-text-secondary text-sm leading-relaxed mb-3">{item.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map(t => (
                            <span key={t} className="text-[10px] text-text-muted bg-white/5 border border-white/8 px-2 py-0.5 rounded-full">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}