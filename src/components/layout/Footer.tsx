"use client";
import Link from "next/link";

const SOCIAL = [
  { href:"https://github.com/niranjan910",                    label:"GitHub" },
  { href:"https://www.linkedin.com/in/niranjan-k-a83517229/", label:"LinkedIn" },
  { href:"https://dribbble.com/niranjan2000",                  label:"Dribbble" },
  { href:"https://www.behance.net/niranjandesign",             label:"Behance" },
];
const NAV = [
  { href:"/", label:"Home"}, { href:"/projects", label:"Projects"},
  { href:"/experience", label:"Experience"}, { href:"/certifications", label:"Certifications"},
];

export default function Footer() {
  return (
    <footer style={{background:"#000000",borderTop:"1px solid rgba(255,255,255,0.06)",padding:"40px 24px",position:"relative",zIndex:10}}>
      <div style={{maxWidth:"1100px",margin:"0 auto",display:"flex",flexDirection:"column",alignItems:"center",gap:"20px",textAlign:"center"}}>
        <p style={{fontFamily:"Satoshi,sans-serif",fontWeight:900,color:"#fff",fontSize:"1.4rem",margin:0}}>Niranjan Kumar</p>
        <p style={{color:"rgba(255,255,255,0.3)",fontSize:"0.7rem",letterSpacing:"3px",textTransform:"uppercase",margin:0}}>
          AI Product Builder · UI/UX Designer · Front-End Developer
        </p>
        <div style={{display:"flex",gap:"20px",flexWrap:"wrap",justifyContent:"center"}}>
          {SOCIAL.map(({href,label})=>(
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              style={{color:"rgba(255,255,255,0.35)",fontSize:"0.82rem",fontWeight:500,textDecoration:"none",transition:"color 0.25s"}}
              onMouseEnter={e=>(e.currentTarget.style.color="#C85CFF")}
              onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.35)")}>
              {label}
            </a>
          ))}
        </div>
        <nav style={{display:"flex",gap:"16px",flexWrap:"wrap",justifyContent:"center"}}>
          {NAV.map(({href,label})=>(
            <Link key={href} href={href} style={{color:"rgba(255,255,255,0.3)",fontSize:"0.75rem",textDecoration:"none",transition:"color 0.25s"}}
              onMouseEnter={e=>(e.currentTarget.style.color="#fff")}
              onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.3)")}>
              {label}
            </Link>
          ))}
        </nav>
        <p style={{color:"rgba(255,255,255,0.15)",fontSize:"0.68rem",letterSpacing:"1px",margin:0}}>
          &copy; 2025 Niranjan Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}