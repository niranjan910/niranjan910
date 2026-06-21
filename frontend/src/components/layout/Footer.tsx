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

/* ── Inline SVG brand icons ── */
function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="#0A66C2">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="#ffffff">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}
function IconBehance() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="#1769FF">
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
    </svg>
  );
}
function IconDribbble() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="#EA4C89">
      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.392-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.045 2.634 6.87zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.176zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.386z"/>
    </svg>
  );
}

const SOCIAL = [
  { label:"LinkedIn", Icon:IconLinkedIn, href:"https://www.linkedin.com/in/niranjan-k-a83517229/", color:"#0A66C2", bg:"rgba(10,102,194,0.1)",  border:"rgba(10,102,194,0.25)"  },
  { label:"GitHub",   Icon:IconGitHub,   href:"https://github.com/niranjan910",                    color:"#e6e6e6", bg:"rgba(255,255,255,0.07)", border:"rgba(255,255,255,0.15)" },
  { label:"Behance",  Icon:IconBehance,  href:"https://www.behance.net/niranjandesign",             color:"#1769FF", bg:"rgba(23,105,255,0.1)",  border:"rgba(23,105,255,0.25)"  },
  { label:"Dribbble", Icon:IconDribbble, href:"https://dribbble.com/niranjan2000",                 color:"#EA4C89", bg:"rgba(234,76,137,0.1)",  border:"rgba(234,76,137,0.25)"  },
];

export default function Footer() {
  return (
    <footer style={{background:"#04040a",borderTop:"1px solid rgba(255,255,255,0.06)",position:"relative",zIndex:10,overflow:"hidden"}}>

      {/* Top glow line */}
      <div style={{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)",width:"700px",height:"1px",background:"linear-gradient(90deg,transparent,rgba(200,92,255,0.5),rgba(255,138,61,0.45),transparent)",pointerEvents:"none"}}/>
      <div style={{position:"absolute",top:"-60px",left:"50%",transform:"translateX(-50%)",width:"500px",height:"160px",background:"radial-gradient(ellipse,rgba(200,92,255,0.055) 0%,transparent 70%)",pointerEvents:"none"}}/>

      {/* Main 4-column grid */}
      <div className="footer-grid" style={{maxWidth:"1400px",margin:"0 auto",padding:"72px 40px 48px",display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:"48px"}}>

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
            {SOCIAL.map(({label,Icon,href,color,bg,border})=>(
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                title={label}
                style={{
                  width:"42px",height:"42px",borderRadius:"12px",
                  display:"flex",alignItems:"center",justifyContent:"center",
                  background:bg, border:`1px solid ${border}`,
                  textDecoration:"none", transition:"all 0.25s",
                }}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow=`0 8px 24px ${color}35`;e.currentTarget.style.borderColor=`${color}60`;}}
                onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none";e.currentTarget.style.borderColor=border;}}>
                <Icon/>
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
      <div className="footer-bottom" style={{borderTop:"1px solid rgba(255,255,255,0.05)",maxWidth:"1400px",margin:"0 auto",padding:"20px 40px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"12px"}}>
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
