"use client";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const CONTACTS: { Icon: LucideIcon; label: string; value: string; href: string }[] = [
  { Icon: Mail,     label: "Email",    value: "niranjan991100@gmail.com",           href: "mailto:niranjan991100@gmail.com" },
  { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/niranjan-k",         href: "https://www.linkedin.com/in/niranjan-k-a83517229/" },
  { Icon: Github,   label: "GitHub",   value: "github.com/niranjan910",             href: "https://github.com/niranjan910" },
];

export default function ContactSection() {
  return (
    <section style={{padding:"96px 40px",background:"#04040a"}}>
      <div style={{maxWidth:"900px",margin:"0 auto",textAlign:"center"}}>
        <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.7rem",fontWeight:700,letterSpacing:"4px",textTransform:"uppercase",color:"#C85CFF",marginBottom:"12px"}}>GET IN TOUCH</p>
        <h2 style={{fontFamily:"Satoshi,sans-serif",fontWeight:900,color:"#fff",fontSize:"clamp(2rem,5vw,3rem)",marginBottom:"16px"}}>Let&apos;s Build Something Amazing Together</h2>
        <p style={{color:"rgba(255,255,255,0.45)",fontSize:"1rem",lineHeight:1.75,maxWidth:"560px",margin:"0 auto 48px"}}>
          Whether you need an AI-powered solution, a modern web experience, or a UI/UX design partner — I&apos;d love to connect.
        </p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:"16px",marginBottom:"48px"}}>
          {CONTACTS.map(({Icon,label,value,href})=>(
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              style={{display:"flex",alignItems:"center",gap:"16px",padding:"20px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.09)",borderRadius:"18px",textDecoration:"none",textAlign:"left",backdropFilter:"blur(14px)",transition:"all 0.3s"}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(200,92,255,0.3)";e.currentTarget.style.transform="translateY(-3px)";}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.09)";e.currentTarget.style.transform="translateY(0)";}}>
              <div style={{width:"40px",height:"40px",borderRadius:"12px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.08)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                <Icon size={18} strokeWidth={1.5} color="rgba(255,255,255,0.6)" />
              </div>
              <div>
                <p style={{color:"rgba(255,255,255,0.3)",fontSize:"0.62rem",textTransform:"uppercase",letterSpacing:"2px",marginBottom:"2px"}}>{label}</p>
                <p style={{color:"#fff",fontSize:"0.78rem",fontWeight:600}}>{value}</p>
              </div>
            </a>
          ))}
        </div>
        <a href="mailto:niranjan991100@gmail.com"
          className="btn-primary"
          style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"16px 32px",borderRadius:"99px",fontSize:"0.95rem",fontWeight:700,textDecoration:"none"}}>
          <Send size={16} strokeWidth={1.5} /> Send a Message
        </a>
      </div>
    </section>
  );
}
