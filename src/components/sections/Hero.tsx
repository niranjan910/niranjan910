"use client";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, BarChart3, Layers, Code2, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const up = (d=0) => ({initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:0.7,delay:d,ease:[0.22,1,0.36,1] as [number,number,number,number]}});

const CARDS: { pos: React.CSSProperties; border: string; tag: string; num: string; Icon: LucideIcon; title: string; desc: string; skills: string[]; side:"left"|"right" }[] = [
  { pos:{left:0},        border:"rgba(255,138,61,0.6)",  tag:"CREATIVE",    num:"01", Icon:Sparkles, title:"AI Product Builder", desc:"Building smart, scalable AI products that solve real world problems.", skills:["SaaS Product Development","AI Workflow Architecture","Claude & GPT Integration"], side:"left"  },
  { pos:{left:"19.2%"},  border:"rgba(168,85,247,0.6)",  tag:"STRATEGY",    num:"02", Icon:BarChart3, title:"Data Analysis",      desc:"Turning raw data into meaningful insights that drive decisions.",        skills:["Data Visualization","Business Intelligence","User Research"],               side:"left"  },
  { pos:{right:"19.2%"}, border:"rgba(255,95,210,0.6)",  tag:"DESIGN",      num:"03", Icon:Layers,   title:"UI/UX Design",        desc:"Designing intuitive, modern and user-centric digital experiences.",      skills:["Wireframing","Design Systems","Figma Prototyping"],                          side:"right" },
  { pos:{right:0},       border:"rgba(77,124,255,0.6)",  tag:"DEVELOPMENT", num:"04", Icon:Code2,    title:"Full Stack Skills",   desc:"Proficient in modern tools and frameworks to build powerful solutions.", skills:["React & Next.js","Node.js Development","API Architecture"],                  side:"right" },
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
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });

  const textY    = useTransform(scrollYProgress, [0,1], ["0%",  "-20%"]);
  const leftX    = useTransform(scrollYProgress, [0,1], ["0px", "-70px"]);
  const rightX   = useTransform(scrollYProgress, [0,1], ["0px",  "70px"]);
  const subjectY = useTransform(scrollYProgress, [0,1], ["0px", "-35px"]);

  return (
    <>
      <style>{`
        @keyframes scw   { to { transform: rotate(360deg);  } }
        @keyframes sccw  { to { transform: rotate(-360deg); } }
        @keyframes scrollRun { 0%{top:-100%} 100%{top:200%} }
        @media (max-width:768px) {
          .hero-cards-scene { display:none !important; }
          .hero-subject     { display:none !important; }
          .hero-text-block  { height:100vh !important; padding-top:0 !important; justify-content:center !important; }
          .hero-root        { min-height:100vh !important; }
        }
      `}</style>

      <section ref={sectionRef} className="hero-root" style={{position:"relative",minHeight:"145vh",background:"#090414",overflow:"hidden",display:"block",margin:"0 -40px"}}>

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

        {/* ── Hero text — parallax Y ── */}
        <motion.div className="hero-text-block" style={{position:"absolute",top:0,left:0,right:0,height:"76vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end",zIndex:10,padding:"0 40px 8vh",textAlign:"center",y:textY}}>
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
            <Link href="/projects" style={btnPrimary}><ArrowRight size={15} strokeWidth={2}/> View My Work</Link>
            <a href="https://github.com/niranjan910" target="_blank" rel="noopener noreferrer" style={btnGhost}><Code2 size={15} strokeWidth={1.5}/> GitHub</a>
          </motion.div>
        </motion.div>

        {/* ── Cards scene — parallax X ── */}
        <div className="hero-cards-scene" style={{position:"absolute",top:"72vh",left:"50%",transform:"translateX(-50%)",width:"min(1300px,98vw)",height:"70vh",zIndex:2}}>
          {/* Ambient glows */}
          <div style={{position:"absolute",width:"300px",height:"220px",background:"rgba(200,50,150,0.38)",bottom:"-20px",left:"8%",borderRadius:"50%",filter:"blur(55px)",pointerEvents:"none"}}/>
          <div style={{position:"absolute",width:"420px",height:"320px",background:"rgba(180,80,15,0.45)",bottom:"-40px",left:"50%",transform:"translateX(-50%)",borderRadius:"50%",filter:"blur(60px)",pointerEvents:"none"}}/>
          <div style={{position:"absolute",width:"300px",height:"200px",background:"rgba(40,80,220,0.32)",bottom:"-20px",right:"6%",borderRadius:"50%",filter:"blur(55px)",pointerEvents:"none"}}/>

          {CARDS.map((c, i) => (
            <motion.div
              key={c.num}
              style={{
                position:"absolute",
                bottom:0,
                ...c.pos as React.CSSProperties,
                width:"210px",
                x: c.side === "left" ? leftX : rightX,
              }}
              initial={{ opacity:0, x: c.side === "left" ? -80 : 80 }}
              animate={{ opacity:1, x:0 }}
              transition={{ duration:0.8, delay: i * 0.12, ease:[0.22,1,0.36,1] }}
            >
              {/* Neon glow pulse on border */}
              <motion.div
                animate={{
                  boxShadow:[
                    `0 8px 40px rgba(0,0,0,0.5), 0 0 10px ${c.border.replace("0.6","0.25")}, inset 0 1px 0 rgba(255,255,255,0.07)`,
                    `0 8px 40px rgba(0,0,0,0.5), 0 0 28px ${c.border.replace("0.6","0.6")}, 0 0 55px ${c.border.replace("0.6","0.18")}, inset 0 1px 0 rgba(255,255,255,0.07)`,
                    `0 8px 40px rgba(0,0,0,0.5), 0 0 10px ${c.border.replace("0.6","0.25")}, inset 0 1px 0 rgba(255,255,255,0.07)`,
                  ]
                }}
                transition={{ duration:2.8, repeat:Infinity, ease:"easeInOut", delay: i * 0.6 }}
                style={{
                  borderRadius:"22px",
                  padding:"1.25rem 1.1rem",
                  display:"flex",
                  flexDirection:"column",
                  gap:0,
                  overflow:"hidden",
                  backdropFilter:"blur(32px)",
                  WebkitBackdropFilter:"blur(32px)",
                  border:"1.5px solid transparent",
                  backgroundImage:`linear-gradient(135deg,rgba(20,10,38,0.72) 0%,rgba(10,5,22,0.55) 100%) padding-box, linear-gradient(145deg,${c.border},rgba(255,100,50,0.6)) border-box`,
                }}
              >
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"0.7rem"}}>
                  <div>
                    <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.55rem",letterSpacing:"2.5px",color:"rgba(255,255,255,0.45)",fontWeight:700,textTransform:"uppercase",marginBottom:"4px"}}>{c.tag}</p>
                    <p style={{fontFamily:"Satoshi,sans-serif",fontWeight:800,fontSize:"1.6rem",lineHeight:1,background:"linear-gradient(135deg,#FF5FD2,#FF8A3D)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>{c.num}</p>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"repeat(2,4px)",gap:"3px",marginTop:"2px"}}>
                    {[...Array(6)].map((_,j)=><span key={j} style={{width:"4px",height:"4px",borderRadius:"50%",background:"rgba(200,92,255,0.45)",display:"block"}}/>)}
                  </div>
                </div>
                <div style={{width:"38px",height:"38px",borderRadius:"10px",background:"rgba(0,0,0,0.4)",border:"1px solid rgba(255,255,255,0.08)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"0.6rem",flexShrink:0}}>
                  <c.Icon size={18} strokeWidth={1.5} color="rgba(255,255,255,0.75)"/>
                </div>
                <h3 style={{fontFamily:"Satoshi,sans-serif",fontSize:"0.95rem",fontWeight:800,color:"#fff",marginBottom:"0.3rem"}}>{c.title}</h3>
                <div style={{height:"1.5px",width:"36px",background:"linear-gradient(90deg,#FF5FD2,#FF8A3D)",borderRadius:"2px",marginBottom:"0.5rem",flexShrink:0}}/>
                <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.72rem",color:"rgba(255,255,255,0.5)",lineHeight:1.6,marginBottom:"0.6rem"}}>{c.desc}</p>
                <div style={{background:"rgba(0,0,0,0.3)",borderRadius:"8px",overflow:"hidden",flexShrink:0}}>
                  {c.skills.map(s=>(
                    <p key={s} style={{fontFamily:"Inter,sans-serif",fontSize:"0.68rem",color:"rgba(255,255,255,0.7)",padding:"4px 10px",borderBottom:"1px solid rgba(255,255,255,0.04)",margin:0,lineHeight:1.5}}>{s}</p>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* ── Subject image — parallax Y ── */}
        <motion.div className="hero-subject" style={{position:"absolute",bottom:0,left:"50%",translateX:"-50%",width:"clamp(240px,24vw,360px)",zIndex:5,pointerEvents:"none",y:subjectY}}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/Home_page_01.png" alt="" role="presentation" style={{width:"100%",height:"auto",display:"block",WebkitMaskImage:"linear-gradient(to top,transparent 0%,rgba(0,0,0,0.6) 5%,black 15%)",maskImage:"linear-gradient(to top,transparent 0%,rgba(0,0,0,0.6) 5%,black 15%)"}}/>
        </motion.div>

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
