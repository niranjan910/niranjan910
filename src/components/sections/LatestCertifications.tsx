"use client";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Certification } from "@/types";

export default function LatestCertifications({certifications}:{certifications:Certification[]}) {
  return (
    <section style={{padding:"96px 40px",background:"#04040a"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}}>
        <SectionHeading eyebrow="CERTIFICATIONS" title="Latest Certifications"
          subtitle="A snapshot of my most recent learning achievements and professional development." />
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"20px"}}>
          {certifications.map(c=>(
            <article key={c.id} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.09)",borderRadius:"20px",overflow:"hidden",display:"flex",flexDirection:"column",backdropFilter:"blur(14px)",transition:"border-color 0.3s,transform 0.3s"}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(200,92,255,0.3)";e.currentTarget.style.transform="translateY(-4px)";}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.09)";e.currentTarget.style.transform="translateY(0)";}}>
              {c.imageUrl && (
                <div style={{position:"relative",height:"180px",overflow:"hidden",borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
                  <Image src={c.imageUrl} alt={c.title} fill style={{objectFit:"cover"}} sizes="(max-width:768px) 100vw,33vw"/>
                </div>
              )}
              <div style={{padding:"20px",flex:1,display:"flex",flexDirection:"column"}}>
                <span style={{display:"inline-flex",padding:"3px 10px",borderRadius:"99px",fontSize:"0.6rem",fontWeight:700,textTransform:"uppercase",color:"#C85CFF",background:"rgba(200,92,255,0.1)",border:"1px solid rgba(200,92,255,0.2)",marginBottom:"10px",width:"fit-content"}}>{c.category}</span>
                <h3 style={{fontFamily:"Satoshi,sans-serif",fontWeight:700,color:"#fff",fontSize:"0.95rem",lineHeight:1.3,marginBottom:"6px",flex:1}}>{c.title}</h3>
                {c.subtitle && <p style={{color:"#C85CFF",fontSize:"0.75rem",marginBottom:"8px"}}>{c.subtitle}</p>}
                <p style={{color:"rgba(255,255,255,0.35)",fontSize:"0.72rem",marginTop:"auto"}}>{c.issuer} · {c.dateDisplay}</p>
              </div>
            </article>
          ))}
        </div>
        <div style={{display:"flex",justifyContent:"center",marginTop:"48px"}}>
          <Link href="/certifications" style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"14px 28px",borderRadius:"99px",fontSize:"0.9rem",fontWeight:700,color:"#C85CFF",border:"1px solid rgba(200,92,255,0.4)",background:"rgba(200,92,255,0.08)",textDecoration:"none"}}>
            View All Certifications →
          </Link>
        </div>
      </div>
    </section>
  );
}