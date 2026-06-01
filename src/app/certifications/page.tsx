import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { CERTIFICATIONS_SORTED } from "@/data/certifications";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Industry-recognized certifications and professional development achievements by Niranjan Kumar.",
};

export default function CertificationsPage() {
  return (
    <div className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="LEARNING & GROWTH" title="Certifications & Learning"
          subtitle={`Continuous learning through industry-recognized certifications. ${CERTIFICATIONS_SORTED.length} certifications earned.`} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS_SORTED.map(c => (
            <article key={c.id} className="glass-card rounded-2xl overflow-hidden flex flex-col hover:border-purple/30 transition-all duration-300 group">
              {c.imageUrl && (
                <div className="relative h-44 overflow-hidden border-b border-white/6">
                  <Image src={c.imageUrl} alt={c.title} fill className="object-cover group-hover:scale-[1.02] transition-transform duration-500" sizes="(max-width:640px) 100vw, 33vw" />
                </div>
              )}
              <div className="p-5 flex flex-col flex-1">
                <Badge className="w-fit mb-3">{c.category}</Badge>
                <h3 className="font-heading font-bold text-white text-sm leading-snug mb-1 flex-1">{c.title}</h3>
                {c.subtitle && <p className="text-purple text-xs mb-2">{c.subtitle}</p>}
                <p className="text-text-muted text-xs mt-2">{c.issuer} · {c.dateDisplay}</p>
                {c.verifyUrl && (
                  <a href={c.verifyUrl} target="_blank" rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-purple transition-colors">
                    <ExternalLink size={11} /> Verify Credential
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}