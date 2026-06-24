"use client";
import Link from "next/link";
import { Briefcase, Zap, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ExperienceItem } from "@/types";

export default function ExperiencePreview({currentRole}:{currentRole:ExperienceItem|null}) {
  if (!currentRole) return null;
  return (
    <section style={{padding:"96px 40px",background:"#090414"}}>
      <div style={{maxWidth:"900px",margin:"0 auto"}}>
        <SectionHeading eyebrow="EXPERIENCE" title="My Journey of Growth" subtitle="From learning to leading impact." />
        <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.09)",borderRadius:"20px",padding:"28px"}}>
          <div style={{display:"flex",gap:"20px",alignItems:"flex-start"}}>
            <div style={{width:"48px",height:"48px",borderRadius:"50%",background:"rgba(200,92,255,0.15)",border:"2px solid rgba(200,92,255,0.4)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
              <Briefcase size={20} strokeWidth={1.5} color="rgba(200,92,255,0.85)" />
            </div>
            <div style={{flex:1}}>
              <div style={{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap",marginBottom:"4px"}}>
                <h3 style={{fontFamily:"Satoshi,sans-serif",fontWeight:700,color:"#fff",fontSize:"1.1rem"}}>{currentRole.role}</h3>
                <span style={{fontSize:"0.65rem",fontWeight:700,textTransform:"uppercase",color:"#34d399",background:"rgba(16,185,129,0.1)",border:"1px solid rgba(16,185,129,0.3)",padding:"2px 8px",borderRadius:"99px"}}>Current Role</span>
              </div>
              <p style={{color:"#C85CFF",fontSize:"0.88rem",fontWeight:600,marginBottom:"6px"}}>{currentRole.company}</p>
              <p style={{color:"rgba(255,255,255,0.35)",fontSize:"0.78rem",marginBottom:"12px"}}>Oct 2025 – Present</p>
              {currentRole.promotion && (
                <p style={{color:"rgba(255,179,102,0.85)",fontSize:"0.78rem",background:"rgba(255,138,61,0.06)",border:"1px solid rgba(255,138,61,0.2)",borderRadius:"10px",padding:"8px 12px",marginBottom:"12px",display:"flex",alignItems:"center",gap:"6px"}}><Zap size={12} strokeWidth={2} style={{flexShrink:0,color:"rgba(255,179,102,0.85)"}} />{currentRole.promotion}</p>
              )}
              <p style={{color:"rgba(255,255,255,0.5)",fontSize:"0.88rem",lineHeight:1.65,marginBottom:"16px"}}>{currentRole.description}</p>
              <div style={{display:"flex",flexWrap:"wrap",gap:"8px"}}>
                {currentRole.tags.map(t=>(
                  <span key={t} style={{fontSize:"0.7rem",color:"rgba(255,255,255,0.45)",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.09)",padding:"3px 10px",borderRadius:"99px"}}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div style={{display:"flex",justifyContent:"center",marginTop:"40px"}}>
          <Link href="/experience" style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"14px 28px",borderRadius:"99px",fontSize:"0.9rem",fontWeight:700,color:"#FF8A3D",border:"1px solid rgba(255,138,61,0.4)",background:"rgba(255,138,61,0.08)",textDecoration:"none"}}>
            View Full Experience <ArrowRight size={16} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}