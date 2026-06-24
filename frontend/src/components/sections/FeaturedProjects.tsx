"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Project } from "@/types";

const card: React.CSSProperties = {
  background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.09)",
  borderRadius:"20px",overflow:"hidden",display:"flex",flexDirection:"column",
  transition:"border-color 0.3s ease,box-shadow 0.3s ease,transform 0.3s ease",
};

export default function FeaturedProjects({projects}:{projects:Project[]}) {
  return (
    <section style={{padding:"96px 40px",background:"#04040a"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}}>
        <SectionHeading eyebrow="FEATURED PROJECTS" title="Featured Projects"
          subtitle="Real-world products and digital experiences built across AI, web development, UI/UX design, and business solutions." />
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,320px),1fr))",gap:"20px"}}>
          {projects.map(p=>(
            <article key={p.id} style={card}
              onMouseEnter={e=>{const el=e.currentTarget;el.style.borderColor="rgba(200,92,255,0.3)";el.style.boxShadow="0 20px 50px rgba(0,0,0,0.3)";el.style.transform="translateY(-4px)";}}
              onMouseLeave={e=>{const el=e.currentTarget;el.style.borderColor="rgba(255,255,255,0.09)";el.style.boxShadow="none";el.style.transform="translateY(0)";}}>
              {/* Thumb */}
              <div style={{height:"200px",position:"relative",background:`${p.glowColor}18`,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}}>
                {p.image
                  ? <Image src={p.image} alt={p.title} fill style={{objectFit:"cover"}} sizes="(max-width:768px) 100vw,33vw"/>
                  : <span style={{fontSize:"2rem",opacity:0.12}}>&#128193;</span>}
                <div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 50% 100%,${p.glowColor}22 0%,transparent 65%)`}}/>
              </div>
              {/* Body */}
              <div style={{padding:"20px",display:"flex",flexDirection:"column",flex:1}}>
                <span style={{display:"inline-flex",alignItems:"center",padding:"3px 10px",borderRadius:"99px",fontSize:"0.6rem",fontWeight:700,letterSpacing:"0.5px",textTransform:"uppercase",color:"#C85CFF",background:"rgba(200,92,255,0.1)",border:"1px solid rgba(200,92,255,0.2)",marginBottom:"12px",width:"fit-content"}}>{p.badge}</span>
                <h3 style={{fontFamily:"Satoshi,sans-serif",fontWeight:700,color:"#fff",fontSize:"1.15rem",marginBottom:"8px"}}>{p.title}</h3>
                <p style={{fontFamily:"Inter,sans-serif",color:"rgba(255,255,255,0.45)",fontSize:"0.84rem",lineHeight:1.65,flex:1,marginBottom:"16px"}}>{p.description}</p>
                <div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>
                  <Link href={`/projects/${p.slug}`} style={{flex:1,display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"6px",padding:"8px 14px",borderRadius:"99px",fontSize:"0.75rem",fontWeight:600,color:"rgba(255,255,255,0.7)",border:"1px solid rgba(255,255,255,0.1)",textDecoration:"none",transition:"all 0.25s",background:"rgba(255,255,255,0.03)"}}>
                    View Case Study <ArrowRight size={13}/>
                  </Link>
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                      style={{flex:1,display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"6px",padding:"8px 14px",borderRadius:"99px",fontSize:"0.75rem",fontWeight:600,color:"#fff",border:"1px solid rgba(255,138,61,0.85)",background:"rgba(8,5,20,0.75)",textDecoration:"none",boxShadow:"0 0 8px rgba(255,138,61,0.35)",transition:"all 0.25s"}}>
                      View Live Site <ArrowRight size={13}/>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div style={{display:"flex",justifyContent:"center",marginTop:"48px"}}>
          <Link href="/projects" style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"14px 28px",borderRadius:"99px",fontSize:"0.9rem",fontWeight:700,color:"#C85CFF",border:"1px solid rgba(200,92,255,0.4)",background:"rgba(200,92,255,0.08)",textDecoration:"none",transition:"all 0.3s"}}>
            View All Projects <ArrowRight size={16} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}