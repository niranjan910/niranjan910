"use client";
import Link from "next/link";
import Image from "next/image";
import { GitBranch, Link2, Mail, ArrowUpRight } from "lucide-react";

const LINKS = [
  { label:"Home",           href:"/" },
  { label:"Projects",       href:"/projects" },
  { label:"Experience",     href:"/experience" },
  { label:"Certifications", href:"/certifications" },
];

const SOCIAL = [
  { label:"GitHub",   href:"https://github.com/niranjan910",                    Icon:GitBranch },
  { label:"LinkedIn", href:"https://www.linkedin.com/in/niranjan-k-a83517229/", Icon:Link2    },
  { label:"Email",    href:"mailto:niranjan991100@gmail.com",                   Icon:Mail     },
];

const SERVICES = [
  "AI Product Development",
  "UI/UX Design",
  "Front-End Development",
  "Data Analysis",
  "Automation Workflows",
];

export default function Footer() {
  return (
    <footer style={{background:"#04040a",borderTop:"1px solid rgba(255,255,255,0.06)",position:"relative",zIndex:10,overflow:"hidden"}}>

      {/* Ambient glow */}
      <div style={{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)",width:"600px",height:"1px",background:"linear-gradient(90deg,transparent,rgba(200,92,255,0.5),rgba(255,138,61,0.5),transparent)",pointerEvents:"none"}}/>
      <div style={{position:"absolute",top:"-80px",left:"50%",transform:"translateX(-50%)",width:"500px",height:"200px",background:"radial-gradient(ellipse,rgba(200,92,255,0.06) 0%,transparent 70%)",pointerEvents:"none"}}/>

      {/* Main grid */}
      <div style={{maxWidth:"1400px",margin:"0 auto",padding:"72px 40px 48px",display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:"48px"}}>

        {/* Brand column */}
        <div>
          <Link href="/" style={{display:"inline-flex",marginBottom:"20px",textDecoration:"none"}}>
            <Image src="/images/Logo/Niranjan.png" alt="Niranjan Kumar" width={120} height={36} style={{objectFit:"contain",height:"34px",width:"auto"}}/>
          </Link>
          <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.88rem",color:"rgba(255,255,255,0.4)",lineHeight:1.75,maxWidth:"28ch",marginBottom:"28px"}}>
            AI Product Builder, UI/UX Designer & Front-End Developer building intelligent digital experiences.
          </p>
          <div style={{display:"flex",gap:"10px"}}>
            {SOCIAL.map(({label,href,Icon})=>(
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                style={{
                  width:"38px",height:"38px",borderRadius:"10px",
                  display:"flex",alignItems:"center",justifyContent:"center",
                  background:"rgba(255,255,255,0.04)",
                  border:"1px solid rgba(255,255,255,0.08)",
                  transition:"all 0.25s",
                }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(200,92,255,0.4)";e.currentTarget.style.background="rgba(200,92,255,0.08)";}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.08)";e.currentTarget.style.background="rgba(255,255,255,0.04)";}}>
                <Icon size={16} color="rgba(255,255,255,0.5)"/>
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.65rem",fontWeight:700,letterSpacing:"3px",textTransform:"uppercase",color:"rgba(255,255,255,0.25)",marginBottom:"20px"}}>Navigation</p>
          <div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
            {LINKS.map(({label,href})=>(
              <Link key={href} href={href}
                style={{fontFamily:"Inter,sans-serif",fontSize:"0.88rem",color:"rgba(255,255,255,0.45)",textDecoration:"none",transition:"color 0.2s",display:"inline-flex",alignItems:"center",gap:"6px"}}
                onMouseEnter={e=>(e.currentTarget.style.color="#fff")}
                onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.45)")}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.65rem",fontWeight:700,letterSpacing:"3px",textTransform:"uppercase",color:"rgba(255,255,255,0.25)",marginBottom:"20px"}}>Services</p>
          <div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
            {SERVICES.map(s=>(
              <span key={s} style={{fontFamily:"Inter,sans-serif",fontSize:"0.88rem",color:"rgba(255,255,255,0.45)"}}>{s}</span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.65rem",fontWeight:700,letterSpacing:"3px",textTransform:"uppercase",color:"rgba(255,255,255,0.25)",marginBottom:"20px"}}>Get In Touch</p>
          <div style={{display:"flex",flexDirection:"column",gap:"14px",marginBottom:"28px"}}>
            <a href="mailto:niranjan991100@gmail.com"
              style={{fontFamily:"Inter,sans-serif",fontSize:"0.82rem",color:"rgba(255,255,255,0.45)",textDecoration:"none",transition:"color 0.2s"}}
              onMouseEnter={e=>(e.currentTarget.style.color="#FF8A3D")}
              onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.45)")}>
              niranjan991100@gmail.com
            </a>
            <span style={{fontFamily:"Inter,sans-serif",fontSize:"0.82rem",color:"rgba(255,255,255,0.3)"}}>Hyderabad, India</span>
          </div>
          <a href="mailto:niranjan991100@gmail.com"
            style={{
              display:"inline-flex",alignItems:"center",gap:"6px",
              padding:"9px 18px",borderRadius:"99px",
              fontFamily:"Inter,sans-serif",fontSize:"0.78rem",fontWeight:600,
              color:"#C85CFF",textDecoration:"none",
              border:"1px solid rgba(200,92,255,0.35)",
              background:"rgba(200,92,255,0.06)",
              transition:"all 0.25s",
            }}
            onMouseEnter={e=>{e.currentTarget.style.background="rgba(200,92,255,0.12)";e.currentTarget.style.borderColor="rgba(200,92,255,0.6)";}}
            onMouseLeave={e=>{e.currentTarget.style.background="rgba(200,92,255,0.06)";e.currentTarget.style.borderColor="rgba(200,92,255,0.35)";}}>
            Hire Me <ArrowUpRight size={13}/>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{borderTop:"1px solid rgba(255,255,255,0.05)",padding:"20px 40px",maxWidth:"1400px",margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"12px"}}>
        <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.72rem",color:"rgba(255,255,255,0.18)",margin:0}}>
          &copy; {new Date().getFullYear()} Niranjan Kumar. All rights reserved.
        </p>
        <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.72rem",color:"rgba(255,255,255,0.18)",margin:0}}>
          Built with <span style={{color:"#C85CFF"}}>Next.js</span> &amp; <span style={{color:"#FF8A3D"}}>Claude</span>
        </p>
      </div>
    </footer>
  );
}
