"use client";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, BarChart3, Layers, Code2, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const up = (d=0) => ({initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:0.7,delay:d,ease:[0.22,1,0.36,1] as [number,number,number,number]}});

type CardDef = { pos:React.CSSProperties; n1:string; n2:string; tag:string; num:string; Icon:LucideIcon; title:string; desc:string; skills:string[]; side:"left"|"right" };

const CARDS: CardDef[] = [
  { pos:{left:"4%"},     n1:"#ff8a3d", n2:"#ff5fd2", tag:"CREATIVE",    num:"01", Icon:Sparkles, title:"AI Product Builder", desc:"Building smart, scalable AI products that solve real world problems.", skills:["SaaS Product Development","AI Workflow Architecture","Claude & GPT Integration"], side:"left"  },
  { pos:{left:"22%"},    n1:"#a855f7", n2:"#00c6ff", tag:"STRATEGY",    num:"02", Icon:BarChart3, title:"Data Analysis",      desc:"Turning raw data into meaningful insights that drive decisions.",        skills:["Data Visualization","Business Intelligence","User Research"],               side:"left"  },
  { pos:{right:"22%"},   n1:"#ff5fd2", n2:"#a855f7", tag:"DESIGN",      num:"03", Icon:Layers,   title:"UI/UX Design",        desc:"Designing intuitive, modern and user-centric digital experiences.",      skills:["Wireframing","Design Systems","Figma Prototyping"],                          side:"right" },
  { pos:{right:"4%"},    n1:"#4d7cff", n2:"#00e5ff", tag:"DEVELOPMENT", num:"04", Icon:Code2,    title:"Full Stack Skills",   desc:"Proficient in modern tools and frameworks to build powerful solutions.", skills:["React & Next.js","Node.js Development","API Architecture"],                  side:"right" },
];

const SPEEDS = ["4s","5s","3.5s","4.5s"];
const PARTICLES = [
  { l:"18%", delay:"0s",   dur:"2.4s", sz:2 },
  { l:"36%", delay:"0.7s", dur:"3.1s", sz:3 },
  { l:"55%", delay:"1.2s", dur:"2.6s", sz:2 },
  { l:"72%", delay:"0.4s", dur:"2.9s", sz:2 },
  { l:"88%", delay:"1.6s", dur:"2.2s", sz:3 },
];


function NeonCard({ c, i, scrollX }: { c:CardDef; i:number; scrollX:any }) {
  return (
    <motion.div
      className="neon-card-wrapper"
      style={{position:"absolute",bottom:0,...c.pos as React.CSSProperties,width:"210px",perspective:"900px",x:scrollX}}
      initial={{opacity:0, x:c.side==="left"?-90:90, y:40}}
      animate={{opacity:1, x:0, y:0}}
      transition={{duration:1, delay:i*0.15, ease:[0.22,1,0.36,1]}}
    >
      <div>
        {/* Outer ambient halo */}
        <div className={`halo-c${c.num}`} style={{
          position:"absolute",inset:"-16px",borderRadius:"36px",
          background:`radial-gradient(ellipse at 50% 80%, ${c.n1}45 0%, ${c.n2}20 40%, transparent 70%)`,
          filter:"blur(14px)",zIndex:0,pointerEvents:"none",
        }}/>

        {/* Traveling neon comet border */}
        <div className={`neon-ring-c${c.num}`} style={{
          position:"absolute",inset:"-2px",borderRadius:"26px",
          WebkitMask:"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite:"xor",
          maskComposite:"exclude",
          padding:"2.5px",zIndex:2,pointerEvents:"none",
        }}/>

        {/* Secondary soft glow ring */}
        <div className={`soft-ring-c${c.num}`} style={{
          position:"absolute",inset:"-4px",borderRadius:"28px",
          zIndex:1,pointerEvents:"none",opacity:0.5,
          filter:"blur(4px)",
          WebkitMask:"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite:"xor",
          maskComposite:"exclude",
          padding:"4px",
        }}/>

        {/* Glass body */}
        <div style={{
          position:"relative",zIndex:3,borderRadius:"22px",
          padding:"1.25rem 1.1rem",display:"flex",flexDirection:"column",overflow:"hidden",
          background:"linear-gradient(145deg,rgba(24,11,52,0.96) 0%,rgba(8,4,20,0.94) 55%,rgba(20,8,44,0.97) 100%)",
          border:"1px solid rgba(255,255,255,0.055)",
          boxShadow:`0 28px 72px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.02), inset 0 1.5px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.5)`,
        }}>
          {/* Top edge light bar */}
          <div style={{
            position:"absolute",top:0,left:"6%",right:"6%",height:"1px",
            background:`linear-gradient(90deg,transparent,${c.n1}cc,${c.n2}cc,transparent)`,
            zIndex:10,
          }}/>

          {/* Holographic shimmer */}
          <div className="holo-shimmer" style={{
            position:"absolute",inset:0,borderRadius:"22px",
            pointerEvents:"none",zIndex:9,overflow:"hidden",
          }}/>

          {/* Depth reflection at bottom */}
          <div style={{
            position:"absolute",bottom:0,left:0,right:0,height:"40%",
            background:"linear-gradient(to top,rgba(0,0,0,0.4),transparent)",
            zIndex:8,pointerEvents:"none",borderRadius:"0 0 22px 22px",
          }}/>

          {/* Floating particles */}
          {PARTICLES.map((p,pi)=>(
            <div key={pi} style={{
              position:"absolute",left:p.l,bottom:"6%",
              width:`${p.sz}px`,height:`${p.sz}px`,borderRadius:"50%",
              background:pi%2===0?c.n1:c.n2,
              boxShadow:`0 0 ${p.sz*4}px ${pi%2===0?c.n1:c.n2}`,
              animationName:"particleRise",
              animationDuration:p.dur,
              animationDelay:p.delay,
              animationIterationCount:"infinite",
              animationTimingFunction:"ease-out",
              pointerEvents:"none",zIndex:4,
            } as React.CSSProperties}/>
          ))}

          {/* Header */}
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"0.7rem",position:"relative",zIndex:5}}>
            <div>
              <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.55rem",letterSpacing:"2.5px",color:"rgba(255,255,255,0.38)",fontWeight:700,textTransform:"uppercase",marginBottom:"4px"}}>{c.tag}</p>
              <p className="card-num" style={{fontFamily:"Satoshi,sans-serif",fontWeight:800,fontSize:"1.6rem",lineHeight:1,background:`linear-gradient(135deg,${c.n1},${c.n2})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>{c.num}</p>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(2,4px)",gap:"3px",marginTop:"4px"}}>
              {[...Array(6)].map((_,j)=><span key={j} style={{width:"4px",height:"4px",borderRadius:"50%",background:`${c.n1}55`,display:"block"}}/>)}
            </div>
          </div>

          {/* Icon box */}
          <div style={{
            width:"38px",height:"38px",borderRadius:"10px",
            background:`linear-gradient(135deg,${c.n1}1a,${c.n2}12)`,
            border:`1px solid ${c.n1}40`,
            display:"flex",alignItems:"center",justifyContent:"center",
            marginBottom:"0.6rem",flexShrink:0,
            boxShadow:`0 0 18px ${c.n1}35, inset 0 1px 0 ${c.n1}25`,
            position:"relative",zIndex:5,
          }}>
            <c.Icon size={18} strokeWidth={1.5} color={c.n1}/>
          </div>

          <h3 style={{fontFamily:"Satoshi,sans-serif",fontSize:"0.95rem",fontWeight:800,color:"#fff",marginBottom:"0.3rem",textShadow:`0 0 20px ${c.n1}55`,position:"relative",zIndex:5}}>{c.title}</h3>
          <div style={{height:"1.5px",width:"40px",background:`linear-gradient(90deg,${c.n1},${c.n2})`,borderRadius:"2px",marginBottom:"0.5rem",flexShrink:0,boxShadow:`0 0 10px ${c.n1}80`,position:"relative",zIndex:5}}/>
          <p className="card-desc" style={{fontFamily:"Inter,sans-serif",fontSize:"0.72rem",color:"rgba(255,255,255,0.4)",lineHeight:1.6,marginBottom:"0.6rem",position:"relative",zIndex:5}}>{c.desc}</p>

          <div className="card-skills" style={{background:"rgba(0,0,0,0.45)",borderRadius:"8px",overflow:"hidden",flexShrink:0,border:"1px solid rgba(255,255,255,0.05)",position:"relative",zIndex:5}}>
            {c.skills.map(s=>(
              <p key={s} style={{fontFamily:"Inter,sans-serif",fontSize:"0.68rem",color:"rgba(255,255,255,0.6)",padding:"4px 10px",borderBottom:"1px solid rgba(255,255,255,0.04)",margin:0,lineHeight:1.5}}>{s}</p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target:sectionRef, offset:["start start","end start"] });
  const textY    = useTransform(scrollYProgress,[0,1],["0%","-20%"]);
  const leftX    = useTransform(scrollYProgress,[0,1],["0px","-70px"]);
  const rightX   = useTransform(scrollYProgress,[0,1],["0px","70px"]);
  const subjectY = useTransform(scrollYProgress,[0,1],["0px","-35px"]);

  return (
    <>
      <style>{`
        /* ─── @property for smooth conic angle interpolation ─── */
        @property --a-c01 { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
        @property --a-c02 { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
        @property --a-c03 { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
        @property --a-c04 { syntax: '<angle>'; initial-value: 0deg; inherits: false; }

        @keyframes spin-c01 { to { --a-c01: 360deg; } }
        @keyframes spin-c02 { to { --a-c02: 360deg; } }
        @keyframes spin-c03 { to { --a-c03: 360deg; } }
        @keyframes spin-c04 { to { --a-c04: 360deg; } }

        /* Traveling comet — primary ring */
        .neon-ring-c01 { --a-c01:0deg; animation: spin-c01 ${SPEEDS[0]} linear infinite;
          background: conic-gradient(from var(--a-c01), rgba(255,138,61,0) 0%, #ff8a3d 10%, #ffdd88 14%, #ff5fd2 22%, rgba(255,95,210,0) 36%, rgba(255,138,61,0) 100%); }
        .neon-ring-c02 { --a-c02:0deg; animation: spin-c02 ${SPEEDS[1]} linear infinite;
          background: conic-gradient(from var(--a-c02), rgba(168,85,247,0) 0%, #a855f7 10%, #d8a4ff 14%, #00c6ff 22%, rgba(0,198,255,0) 36%, rgba(168,85,247,0) 100%); }
        .neon-ring-c03 { --a-c03:0deg; animation: spin-c03 ${SPEEDS[2]} linear infinite;
          background: conic-gradient(from var(--a-c03), rgba(255,95,210,0) 0%, #ff5fd2 10%, #ffaaee 14%, #a855f7 22%, rgba(168,85,247,0) 36%, rgba(255,95,210,0) 100%); }
        .neon-ring-c04 { --a-c04:0deg; animation: spin-c04 ${SPEEDS[3]} linear infinite;
          background: conic-gradient(from var(--a-c04), rgba(77,124,255,0) 0%, #4d7cff 10%, #aac4ff 14%, #00e5ff 22%, rgba(0,229,255,0) 36%, rgba(77,124,255,0) 100%); }

        /* Soft secondary ring (same spin but bigger, more diffuse) */
        .soft-ring-c01 { animation: spin-c01 ${SPEEDS[0]} linear infinite;
          background: conic-gradient(from var(--a-c01), rgba(255,138,61,0) 0%, rgba(255,138,61,0.5) 12%, rgba(255,95,210,0.4) 24%, rgba(255,138,61,0) 40%, rgba(255,138,61,0) 100%); }
        .soft-ring-c02 { animation: spin-c02 ${SPEEDS[1]} linear infinite;
          background: conic-gradient(from var(--a-c02), rgba(168,85,247,0) 0%, rgba(168,85,247,0.5) 12%, rgba(0,198,255,0.4) 24%, rgba(168,85,247,0) 40%, rgba(168,85,247,0) 100%); }
        .soft-ring-c03 { animation: spin-c03 ${SPEEDS[2]} linear infinite;
          background: conic-gradient(from var(--a-c03), rgba(255,95,210,0) 0%, rgba(255,95,210,0.5) 12%, rgba(168,85,247,0.4) 24%, rgba(255,95,210,0) 40%, rgba(255,95,210,0) 100%); }
        .soft-ring-c04 { animation: spin-c04 ${SPEEDS[3]} linear infinite;
          background: conic-gradient(from var(--a-c04), rgba(77,124,255,0) 0%, rgba(77,124,255,0.5) 12%, rgba(0,229,255,0.4) 24%, rgba(77,124,255,0) 40%, rgba(77,124,255,0) 100%); }

        /* Halo pulse */
        .halo-c01 { animation: halo-pulse 3s ease-in-out infinite; }
        .halo-c02 { animation: halo-pulse 4s ease-in-out infinite 0.8s; }
        .halo-c03 { animation: halo-pulse 3.5s ease-in-out infinite 0.4s; }
        .halo-c04 { animation: halo-pulse 4.5s ease-in-out infinite 1.2s; }
        @keyframes halo-pulse { 0%,100%{opacity:0.3} 50%{opacity:0.8} }

        /* Holographic shimmer sweep */
        .holo-shimmer::before {
          content: '';
          position: absolute;
          width: 55%;
          height: 200%;
          top: -50%;
          left: -80%;
          background: linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.055) 50%, transparent 100%);
          animation: shimmerSweep 5s ease-in-out infinite;
          border-radius: inherit;
          pointer-events: none;
        }
        @keyframes shimmerSweep {
          0%   { left: -80%;  top: -50%; opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { left: 180%;  top: 100%; opacity: 0; }
        }

        /* Floating particles */
        @keyframes particleRise {
          0%   { transform: translateY(0px)   scale(1);   opacity: 0.85; }
          75%  { transform: translateY(-65px) scale(0.3); opacity: 0.2;  }
          100% { transform: translateY(-85px) scale(0.1); opacity: 0;    }
        }

        /* Spiral + scroll */
        @keyframes scw   { to { transform: rotate(360deg);  } }
        @keyframes sccw  { to { transform: rotate(-360deg); } }
        @keyframes scrollRun { 0%{top:-100%} 100%{top:200%} }

        /* ─────────── Mobile hero (single source of truth) ─────────── */
        @media (max-width:768px) {
          /* Section flows: heading row on top, then [cards | image] below */
          .hero-root {
            display: flex !important;
            flex-wrap: wrap !important;
            align-items: flex-start !important;
            column-gap: 12px !important;
            row-gap: 0 !important;
            min-height: auto !important;
            padding: 0 0 40px !important;
            overflow: visible !important;   /* let the sticky image escape the section */
          }

          /* Heading + subheading + CTA — full-width row at the top */
          .hero-text-block {
            position: static !important;
            flex: 1 1 100% !important;
            height: auto !important;
            transform: none !important;            /* kill parallax drift */
            padding: 108px 16px 22px !important;
            justify-content: center !important;
          }

          /* Skill cards — small, stacked on the LEFT */
          .hero-cards-scene {
            position: static !important;
            transform: none !important;
            top: auto !important; left: auto !important; right: auto !important;
            flex: 1 1 0 !important;
            min-width: 0 !important;
            width: auto !important;
            height: auto !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 8px !important;
            padding: 0 0 0 16px !important;
            overflow: visible !important;
          }
          /* Drop the floor-glow blobs on mobile (they leak in the column) */
          .hero-cards-scene > div:not(.neon-card-wrapper) { display: none !important; }
          .neon-card-wrapper {
            position: static !important;
            transform: none !important;            /* kill parallax x */
            inset: auto !important;
            width: 100% !important;
            flex-shrink: 1 !important;
          }
          /* Heavier card content shows on desktop, hidden on mobile */
          .card-num, .card-desc, .card-skills { display: none !important; }

          /* Profile image — on the RIGHT, vertically centred */
          .hero-subject {
            display: block !important;
            position: sticky !important;
            transform: none !important;
            top: 80px !important; bottom: auto !important; left: auto !important;
            flex: 0 0 50% !important;
            width: 50% !important;
            max-width: 50% !important;
            align-self: flex-start !important;   /* sit near the top of the row */
            margin-top: -8px !important;          /* nudge the person up a little */
            padding-right: 12px !important;
          }

          .hero-scroll-indicator { display: none !important; }
        }
      `}</style>

      <section ref={sectionRef} className="hero-root" style={{position:"relative",minHeight:"145vh",background:"#090414",overflow:"hidden",display:"block"}}>

        {/* Gradient bg */}
        <div style={{position:"absolute",inset:0,zIndex:0,background:"radial-gradient(ellipse 70% 80% at 50% 72%,#D96652 0%,#4A142E 30%,#10051D 62%,#090414 100%)"}}/>

        {/* Grain */}
        <div aria-hidden="true" style={{position:"absolute",inset:0,zIndex:1,opacity:0.038,pointerEvents:"none",
          backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize:"160px"}}/>

        {/* Spiral */}
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
          <motion.p {...up(0)} style={{fontFamily:"Inter,sans-serif",fontSize:"0.72rem",fontWeight:700,letterSpacing:"5px",color:"#f97316",marginBottom:"10px",textTransform:"uppercase"}}>HELLO, I&apos;M &#10022;</motion.p>
          <motion.h1 {...up(0.1)} style={{fontFamily:"Satoshi,sans-serif",fontWeight:900,fontSize:"clamp(2.2rem,5vw,3.8rem)",lineHeight:1.1,letterSpacing:"-1px",marginBottom:"14px",background:"linear-gradient(90deg,#FFFFFF,#D96BFF)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>Niranjan Kumar</motion.h1>
          <motion.p {...up(0.15)} style={{fontFamily:"Satoshi,sans-serif",fontWeight:700,fontSize:"clamp(0.95rem,1.8vw,1.3rem)",marginBottom:"14px",background:"linear-gradient(90deg,#FF8A3D 0%,#C85CFF 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>AI Product Builder &amp; UI/UX Designer</motion.p>
          <motion.p {...up(0.2)} style={{fontFamily:"Inter,sans-serif",fontSize:"clamp(0.88rem,1.5vw,1rem)",color:"rgba(255,255,255,0.55)",lineHeight:1.7,maxWidth:"52ch",marginBottom:"28px"}}>
            I design and build intelligent digital products<br/>that solve real problems using{" "}
            <span style={{color:"#C85CFF",fontWeight:600}}>AI</span> and{" "}
            <span style={{color:"#FF8A3D",fontWeight:600}}>Automation</span>.
          </motion.p>
          <motion.div {...up(0.25)} style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"14px",flexWrap:"wrap"}}>
            <Link href="/projects" className="btn-primary"><ArrowRight size={15} strokeWidth={2}/> View My Work</Link>
            <a href="https://github.com/niranjan910" target="_blank" rel="noopener noreferrer" className="btn-ghost"><Code2 size={15} strokeWidth={1.5}/> GitHub</a>
          </motion.div>
        </motion.div>

        {/* ── Cards scene — parallax X ── */}
        <div className="hero-cards-scene" style={{position:"absolute",top:"72vh",left:"50%",transform:"translateX(-50%)",width:"min(1400px,98vw)",height:"70vh",zIndex:2}}>
          {/* Ambient floor glows */}
          <div style={{position:"absolute",width:"350px",height:"200px",background:"rgba(200,50,150,0.35)",bottom:"-30px",left:"6%",borderRadius:"50%",filter:"blur(65px)",pointerEvents:"none"}}/>
          <div style={{position:"absolute",width:"480px",height:"280px",background:"rgba(160,70,10,0.4)",bottom:"-50px",left:"50%",transform:"translateX(-50%)",borderRadius:"50%",filter:"blur(70px)",pointerEvents:"none"}}/>
          <div style={{position:"absolute",width:"350px",height:"180px",background:"rgba(40,80,240,0.28)",bottom:"-30px",right:"5%",borderRadius:"50%",filter:"blur(65px)",pointerEvents:"none"}}/>

          {CARDS.map((c,i)=>(
            <NeonCard key={c.num} c={c} i={i} scrollX={c.side==="left"?leftX:rightX}/>
          ))}
        </div>

        {/* ── Subject image — parallax Y ── */}
        <motion.div className="hero-subject" style={{position:"absolute",bottom:0,left:"50%",translateX:"-50%",width:"clamp(240px,24vw,360px)",zIndex:5,pointerEvents:"none",y:subjectY}}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/Home_page_01.png" alt="" role="presentation" style={{width:"100%",height:"auto",display:"block",WebkitMaskImage:"linear-gradient(to top,transparent 0%,rgba(0,0,0,0.6) 5%,black 15%)",maskImage:"linear-gradient(to top,transparent 0%,rgba(0,0,0,0.6) 5%,black 15%)"}}/>
        </motion.div>

        {/* ── Scroll indicator ── */}
        <div className="hero-scroll-indicator" style={{position:"absolute",bottom:"4.5rem",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",zIndex:6}}>
          <span style={{fontFamily:"Inter,sans-serif",fontSize:"0.62rem",letterSpacing:"3px",textTransform:"uppercase",color:"rgba(255,255,255,0.28)"}}>Scroll</span>
          <div style={{width:"1px",height:"48px",background:"rgba(255,255,255,0.15)",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:"-100%",left:0,width:"100%",height:"100%",background:"linear-gradient(to bottom,transparent,#a855f7,transparent)",animation:"scrollRun 2s ease-in-out infinite"}}/>
          </div>
        </div>
      </section>
    </>
  );
}
