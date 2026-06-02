"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

const NAV_LINKS = [
  { label:"Home",           href:"/" },
  { label:"Projects",       href:"/projects" },
  { label:"Experience",     href:"/experience" },
  { label:"Certifications", href:"/certifications" },
];

const SERVICES = [
  "AI Product Development",
  "UI/UX Design",
  "Frontend Development",
  "Data Analysis",
  "Automation Workflows",
];

/* Brand-coloured social links — text-based to avoid icon library limits */
const SOCIAL = [
  { label:"LinkedIn", short:"in",  href:"https://www.linkedin.com/in/niranjan-k-a83517229/", color:"#0077B5", bg:"rgba(0,119,181,0.12)", border:"rgba(0,119,181,0.3)"  },
  { label:"GitHub",   short:"GH",  href:"https://github.com/niranjan910",                    color:"#e6e6e6", bg:"rgba(255,255,255,0.08)", border:"rgba(255,255,255,0.18)" },
  { label:"Behance",  short:"Be",  href:"https://www.behance.net/niranjandesign",             color:"#1769FF", bg:"rgba(23,105,255,0.12)", border:"rgba(23,105,255,0.3)"  },
  { label:"Dribbble", short:"Dr",  href:"https://dribbble.com/niranjan2000",                 color:"#EA4C89", bg:"rgba(234,76,137,0.12)", border:"rgba(234,76,137,0.3)"  },
];

export default function Footer() {
  return (
    <footer style={{background:"#04040a",borderTop:"1px solid rgba(255,255,255,0.06)",position:"relative",zIndex:10,overflow:"hidden"}}>

      {/* Top glow line */}
      <div style={{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)",width:"700px",height:"1px",background:"linear-gradient(90deg,transparent,rgba(200,92,255,0.5),rgba(255,138,61,0.45),transparent)",pointerEvents:"none"}}/>
      <div style={{position:"absolute",top:"-60px",left:"50%",transform:"translateX(-50%)",width:"500px",height:"160px",background:"radial-gradient(ellipse,rgba(200,92,255,0.055) 0%,transparent 70%)",pointerEvents:"none"}}/>

      {/* Main 4-column grid */}
      <div style={{maxWidth:"1400px",margin:"0 auto",padding:"72px 40px 48px",display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:"48px"}}>

        {/* Brand */}
        <div>
          <Link href="/" style={{display:"inline-flex",marginBottom:"18px",textDecoration:"none"}}>
            <Image src="/images/Logo/Niranjan.png" alt="Niranjan Kumar" width={120} height={34} style={{objectFit:"contain",height:"32px",width:"auto"}}/>
          </Link>
          <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.86rem",color:"rgba(255,255,255,0.38)",lineHeight:1.8,maxWidth:"26ch",marginBottom:"24px"}}>
            AI Product Builder, UI/UX Designer &amp; Frontend Developer building intelligent digital experiences.
          </p>

          {/* Social icons */}
          <div style={{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"20px"}}>
            {SOCIAL.map(({label,short,href,color,bg,border})=>(
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                title={label}
                style={{
                  width:"38px",height:"38px",borderRadius:"10px",
                  display:"flex",alignItems:"center",justifyContent:"center",
                  background:bg, border:`1px solid ${border}`,
                  fontSize:"0.6rem",fontWeight:800,color,fontFamily:"Inter,sans-serif",
                  letterSpacing:"0.5px",textDecoration:"none",
                  transition:"all 0.25s",
                }}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow=`0 6px 20px ${color}30`;}}
                onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none";}}>
                {short}
              </a>
            ))}
          </div>

          {/* Contact quick links */}
          <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
            <a href="mailto:niranjan991100@gmail.com" style={{display:"inline-flex",alignItems:"center",gap:"8px",fontFamily:"Inter,sans-serif",fontSize:"0.78rem",color:"rgba(255,255,255,0.38)",textDecoration:"none",transition:"color 0.2s"}}
              onMouseEnter={e=>(e.currentTarget.style.color="#FF8A3D")}
              onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.38)")}>
              <Mail size={13} strokeWidth={1.5}/> niranjan991100@gmail.com
            </a>
            <a href="tel:+919641143646" style={{display:"inline-flex",alignItems:"center",gap:"8px",fontFamily:"Inter,sans-serif",fontSize:"0.78rem",color:"rgba(255,255,255,0.38)",textDecoration:"none",transition:"color 0.2s"}}
              onMouseEnter={e=>(e.currentTarget.style.color="#00E5FF")}
              onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.38)")}>
              <Phone size={13} strokeWidth={1.5}/> +91 9641143646
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.62rem",fontWeight:700,letterSpacing:"3px",textTransform:"uppercase",color:"rgba(255,255,255,0.22)",marginBottom:"20px"}}>Navigation</p>
          <div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
            {NAV_LINKS.map(({label,href})=>(
              <Link key={href} href={href}
                style={{fontFamily:"Inter,sans-serif",fontSize:"0.86rem",color:"rgba(255,255,255,0.42)",textDecoration:"none",transition:"color 0.2s"}}
                onMouseEnter={e=>(e.currentTarget.style.color="#fff")}
                onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.42)")}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.62rem",fontWeight:700,letterSpacing:"3px",textTransform:"uppercase",color:"rgba(255,255,255,0.22)",marginBottom:"20px"}}>Services</p>
          <div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
            {SERVICES.map(s=>(
              <span key={s} style={{fontFamily:"Inter,sans-serif",fontSize:"0.86rem",color:"rgba(255,255,255,0.38)"}}>{s}</span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.62rem",fontWeight:700,letterSpacing:"3px",textTransform:"uppercase",color:"rgba(255,255,255,0.22)",marginBottom:"20px"}}>Location</p>
          <div style={{display:"flex",flexDirection:"column",gap:"10px",marginBottom:"28px"}}>
            <span style={{fontFamily:"Inter,sans-serif",fontSize:"0.86rem",color:"rgba(255,255,255,0.38)"}}>Hyderabad, India</span>
            <span style={{fontFamily:"Inter,sans-serif",fontSize:"0.78rem",color:"rgba(255,255,255,0.22)"}}>Open to Remote Work</span>
          </div>
          <a href="mailto:niranjan991100@gmail.com"
            style={{
              display:"inline-flex",alignItems:"center",gap:"6px",
              padding:"9px 18px",borderRadius:"99px",
              fontFamily:"Inter,sans-serif",fontSize:"0.78rem",fontWeight:600,
              color:"#C85CFF",textDecoration:"none",
              border:"1px solid rgba(200,92,255,0.3)",
              background:"rgba(200,92,255,0.06)",
              transition:"all 0.25s",
            }}
            onMouseEnter={e=>{e.currentTarget.style.background="rgba(200,92,255,0.12)";e.currentTarget.style.borderColor="rgba(200,92,255,0.55)";}}
            onMouseLeave={e=>{e.currentTarget.style.background="rgba(200,92,255,0.06)";e.currentTarget.style.borderColor="rgba(200,92,255,0.3)";}}>
            Hire Me <ArrowUpRight size={13}/>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{borderTop:"1px solid rgba(255,255,255,0.05)",maxWidth:"1400px",margin:"0 auto",padding:"20px 40px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"12px"}}>
        <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.7rem",color:"rgba(255,255,255,0.18)",margin:0}}>
          &copy; {new Date().getFullYear()} Niranjan Kumar. All rights reserved.
        </p>
        <div style={{display:"flex",gap:"16px",flexWrap:"wrap"}}>
          {SOCIAL.map(({label,href,color})=>(
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              style={{fontFamily:"Inter,sans-serif",fontSize:"0.7rem",color:"rgba(255,255,255,0.22)",textDecoration:"none",transition:"color 0.2s"}}
              onMouseEnter={e=>(e.currentTarget.style.color=color)}
              onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.22)")}>
              {label}
            </a>
          ))}
        </div>
        <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.7rem",color:"rgba(255,255,255,0.18)",margin:0}}>
          Built with <span style={{color:"#C85CFF"}}>Next.js</span> &amp; <span style={{color:"#FF8A3D"}}>Claude</span>
        </p>
      </div>
    </footer>
  );
}
