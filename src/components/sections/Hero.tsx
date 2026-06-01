"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const up = (d=0) => ({initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:0.7,delay:d,ease:[0.22,1,0.36,1] as [number,number,number,number]}});

const CARDS = [
  { pos:{left:0,height:"82%"}, border:"rgba(255,138,61,0.6)", tag:"CREATIVE", num:"01", icon:"🚀", title:"AI Product Builder", desc:"Building smart, scalable AI products that solve real world problems.", skills:["SaaS Product Development","AI Workflow Architecture","Claude & GPT Integration"] },
  { pos:{left:"19.2%",height:"92%"}, border:"rgba(168,85,247,0.6)", tag:"STRATEGY", num:"02", icon:"📊", title:"Data Analysis", desc:"Turning raw data into meaningful insights that drive decisions.", skills:["Data Visualization","Business Intelligence","User Research"] },
  { pos:{right:"19.2%",height:"92%"}, border:"rgba(255,95,210,0.6)", tag:"DESIGN", num:"03", icon:"✏️", title:"UI/UX Design", desc:"Designing intuitive, modern and user-centric digital experiences.", skills:["Wireframing","Design Systems","Figma Prototyping"] },
  { pos:{right:0,height:"82%"}, border:"rgba(77,124,255,0.6)", tag:"DEVELOPMENT", num:"04", icon:"💻", title:"Full Stack Skills", desc:"Proficient in modern tools and frameworks to build powerful solutions.", skills:["React & Next.js","Node.js Development","API Architecture"] },
];

const btnPrimary: React.CSSProperties = {
  display:"inline-flex",alignItems:"center",gap:"8px",
  padding:"0.85rem 2rem",borderRadius:"99px",
  fontFamily:"Inter,sans-serif",fontSize:"0.88rem",fontWeight:600,
  textDecoration:"none",color:"#ffffff",cursor:"pointer",
  background:"rgba(8,5,20,0.75)",
  border:"1px solid rgba(255,138,61,0.85)",
  boxShadow:"0 0 10px rgba(255,138,61,0.45),0 0 28px rgba(255,138,61,0.18),inset 0 0 16px rgba(255,138,61,0.04)",
  transition:"all 0.3s ease",
};
const btnGhost: React.CSSProperties = {
  display:"inline-flex",alignItems:"center",gap:"8px",
  padding:"0.85rem 2rem",borderRadius:"99px",
  fontFamily:"Inter,sans-serif",fontSize:"0.88rem",fontWeight:600,
  textDecoration:"none",color:"#ffffff",cursor:"pointer",
  background:"rgba(8,5,20,0.75)",
  border:"1px solid rgba(200,92,255,0.8)",
  boxShadow:"0 0 10px rgba(200,92,255,0.4),0 0 28px rgba(200,92,255,0.16),inset 0 0 16px rgba(200,92,255,0.04)",
  transition:"all 0.3s ease",
};

export default function Hero() {
  return (
    <>
      {/* ── Mobile styles ── */}
      <style>{`
        @keyframes scw  { to { transform: rotate(360deg);  } }
        @keyframes sccw { to { transform: rotate(-360deg); } }
        @keyframes scrollRun { 0%{top:-100%} 100%{top:200%} }
        @media (max-width:768px) {
          .hero-cards-scene { display:none !important; }
          .hero-subject     { display:none !important; }
          .hero-text-block  { height:100vh !important; padding-top:0 !important; justify-content:center !important; }
          .hero-root        { min-height:100vh !important; }
        }
      `}</style>

      <section className="hero-root" style={{position:"relative",minHeight:"145vh",background:"#090414",overflow:"hidden",display:"block",margin:"0 -40px"}}>

        {/* Gradient bg */}
        <div style={{position:"absolute",inset:0,zIndex:0,background:"radial-gradient(ellipse 70% 80% at 50% 72%,#D96652 0%,#4A142E 30%,#10051D 62%,#090414 100%)"}}/>

        {/* Grain */}
        <div aria-hidden="true" style={{position:"absolute",inset:0,zIndex:1,opacity:0.038,pointerEvents:"none",
          backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize:"160px"}}/>

        {/* Spiral SVG */}
        <div aria-hidden="true" style={{position:"absolute",inset:0,zIndex:1,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}}>
          <svg viewBox="0 0 900 900" style={{width:"130%",height:"130%",flexShrink:0}}>
            <style>{`.scw{transform-origin:450px 450px;animation:scw 28s linear infinite}.sccw{transform-origin:450px 450px;animation:sccw 20s linear infinite}.scwf{transform-origin:450px 450px;animation:scw 14s linear infinite}circle{fill:none;stroke:rgba(255,255,255,0.12);stroke-width:1.2}`}</style>
            <g className="scw"><circle cx="450" cy="450" r="420" strokeDasharray="6 28"/><circle cx="450" cy="450" r="370" strokeDasharray="4 22"/><circle cx="450" cy="450" r="320" strokeDasharray="3 18"/></g>
            <g className="sccw"><circle cx="450" cy="450" r="265" strokeDasharray="5 20"/><circle cx="450" cy="450" r="215" strokeDasharray="3 16"/></g>
            <g className="scwf"><circle cx="450" cy="450" r="160" strokeDasharray="4 14"/><circle cx="450" cy="450" r="110" strokeDasharray="3 10"/></g>
            <g className="sccw" opacity={0.5}><circle cx="450" cy="450" r="450" strokeDasharray="1 31.4"/><circle cx="450" cy="450" r="440" strokeDasharray="1 31.4" strokeDashoffset="15"/></g>
            <circle cx="450" cy="450" r="3" fill="rgba(10,5,20,0.6)" stroke="none"/>
          </svg>
        </div>

        {/* ── Hero text ── */}
        <div className="hero-text-block" style={{position:"absolute",top:0,left:0,right:0,height:"76vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end",paddingBottom:"8vh",zIndex:10,padding:"0 40px 8vh",textAlign:"center"}}>
          <motion.p {...up(0)} style={{fontFamily:"Inter,sans-serif",fontSize:"0.72rem",fontWeight:700,letterSpacing:"5px",color:"#f97316",marginBottom:"10px",textTransform:"uppercase"}}>
            HELLO, I&apos;M &#10022;
          </motion.p>
          <motion.h1 {...up(0.1)} style={{fontFamily:"Satoshi,sans-serif",fontWeight:900,fontSize:"clamp(2.2rem,5vw,3.8rem)",lineHeight:1.1,letterSpacing:"-1px",marginBottom:"14px",background:"linear-gradient(90deg,#FFFFFF,#D96BFF)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
            Niranjan Kumar
          </motion.h1>
          <motion.p {...up(0.15)} style={{fontFamily:"Satoshi,sans-serif",fontWeight:700,fontSize:"clamp(0.95rem,1.8vw,1.3rem)",marginBottom:"14px",background:"linear-gradient(90deg,#FF8A3D 0%,#C85CFF 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
            AI Product Builder &amp; UI/UX Designer
          </motion.p>
          <motion.p {...up(0.2)} style={{fontFamily:"Inter,sans-serif",fontSize:"clamp(0.88rem,1.5vw,1rem)",color:"rgba(255,255,255,0.55)",lineHeight:1.7,maxWidth:"52ch",marginBottom:"28px"}}>
            I design and build intelligent digital products<br/>that solve real problems using{" "}
            <span style={{color:"#C85CFF",fontWeight:600}}>AI</span> and{" "}
            <span style={{color:"#FF8A3D",fontWeight:600}}>Automation</span>.
          </motion.p>
          <motion.div {...up(0.25)} style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"14px",flexWrap:"wrap"}}>
            <Link href="/projects" style={btnPrimary}>🚀 View My Work</Link>
            <a href="https://github.com/niranjan910" target="_blank" rel="noopener noreferrer" style={btnGhost}>💻 GitHub</a>
          </motion.div>
        </div>

        {/* ── Cards scene (desktop only) ── */}
        <div className="hero-cards-scene" style={{position:"absolute",top:"72vh",left:"50%",transform:"translateX(-50%)",width:"min(1300px,98vw)",height:"70vh",zIndex:2}}>
          <div style={{position:"absolute",width:"300px",height:"220px",background:"rgba(200,50,150,0.38)",bottom:"-20px",left:"8%",borderRadius:"50%",filter:"blur(55px)",pointerEvents:"none"}}/>
          <div style={{position:"absolute",width:"420px",height:"320px",background:"rgba(180,80,15,0.45)",bottom:"-40px",left:"50%",transform:"translateX(-50%)",borderRadius:"50%",filter:"blur(60px)",pointerEvents:"none"}}/>
          <div style={{position:"absolute",width:"300px",height:"200px",background:"rgba(40,80,220,0.32)",bottom:"-20px",right:"6%",borderRadius:"50%",filter:"blur(55px)",pointerEvents:"none"}}/>
          {CARDS.map(c=>(
            <div key={c.num} style={{
              position:"absolute",bottom:0,...c.pos as React.CSSProperties,width:"140px",
              borderRadius:"20px",padding:"1rem 0.85rem",display:"flex",flexDirection:"column",gap:0,
              overflow:"hidden",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",
              border:"1.5px solid transparent",
              backgroundImage:`linear-gradient(#13091f,#1d0b18) padding-box, linear-gradient(145deg,${c.border},rgba(255,100,50,0.75)) border-box`,
            }}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"0.6rem"}}>
                <div>
                  <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.46rem",letterSpacing:"2.5px",color:"rgba(255,255,255,0.38)",fontWeight:700,textTransform:"uppercase",marginBottom:"4px"}}>{c.tag}</p>
                  <p style={{fontFamily:"Satoshi,sans-serif",fontWeight:800,fontSize:"1.4rem",lineHeight:1,background:"linear-gradient(135deg,#FF5FD2,#FF8A3D)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>{c.num}</p>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(2,4px)",gap:"3px",marginTop:"2px"}}>
                  {[...Array(6)].map((_,j)=><span key={j} style={{width:"4px",height:"4px",borderRadius:"50%",background:"rgba(200,92,255,0.45)",display:"block"}}/>)}
                </div>
              </div>
              <div style={{width:"34px",height:"34px",borderRadius:"10px",background:"rgba(0,0,0,0.4)",border:"1px solid rgba(255,255,255,0.08)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.9rem",marginBottom:"0.5rem",flexShrink:0}}>{c.icon}</div>
              <h3 style={{fontFamily:"Satoshi,sans-serif",fontSize:"0.78rem",fontWeight:800,color:"#fff",marginBottom:"0.25rem"}}>{c.title}</h3>
              <div style={{height:"1.5px",width:"36px",background:"linear-gradient(90deg,#FF5FD2,#FF8A3D)",borderRadius:"2px",marginBottom:"0.4rem",flexShrink:0}}/>
              <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.6rem",color:"rgba(255,255,255,0.42)",lineHeight:1.55,marginBottom:"0.5rem"}}>{c.desc}</p>
              <div style={{background:"rgba(0,0,0,0.3)",borderRadius:"8px",overflow:"hidden",flexShrink:0}}>
                {c.skills.map(s=><p key={s} style={{fontFamily:"Inter,sans-serif",fontSize:"0.56rem",color:"rgba(255,255,255,0.65)",padding:"3px 8px",borderBottom:"1px solid rgba(255,255,255,0.04)",margin:0,lineHeight:1.4}}>{s}</p>)}
              </div>
            </div>
          ))}
        </div>

        {/* ── Subject image ── */}
        <div className="hero-subject" style={{position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%)",width:"clamp(240px,24vw,360px)",zIndex:5,pointerEvents:"none"}}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/Home_page_01.png" alt="" role="presentation" style={{width:"100%",height:"auto",display:"block",WebkitMaskImage:"linear-gradient(to top,transparent 0%,rgba(0,0,0,0.6) 5%,black 15%)",maskImage:"linear-gradient(to top,transparent 0%,rgba(0,0,0,0.6) 5%,black 15%)"}}/>
        </div>

        {/* ── Scroll indicator ── */}
        <div style={{position:"absolute",bottom:"4.5rem",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",zIndex:6}}>
          <span style={{fontFamily:"Inter,sans-serif",fontSize:"0.62rem",letterSpacing:"3px",textTransform:"uppercase",color:"rgba(255,255,255,0.28)"}}>Scroll</span>
          <div style={{width:"1px",height:"48px",background:"rgba(255,255,255,0.15)",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:"-100%",left:0,width:"100%",height:"100%",background:"linear-gradient(to bottom,transparent,#a855f7,transparent)",animation:"scrollRun 2s ease-in-out infinite"}}/>
          </div>
        </div>
      </section>
    </>
  );
}