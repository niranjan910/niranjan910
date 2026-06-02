"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

/* ── Carousel images — add more to public/images/about/ ── */
const CAROUSEL_IMAGES = [
  { src:"/images/Home_page_01.png", alt:"Niranjan Kumar" },
  { src:"/images/Home_page_01.png", alt:"Niranjan Kumar" },
  { src:"/images/Home_page_01.png", alt:"Niranjan Kumar" },
  { src:"/images/Home_page_01.png", alt:"Niranjan Kumar" },
];

/* ── Achievements ── */
const ACHIEVEMENTS = [
  { value:"2+",  label:"Live Websites",       sub:"Developed" },
  { value:"AI",  label:"Product Builder",     sub:"& Innovator" },
  { value:"FE",  label:"Frontend Developer",  sub:"React & Next.js" },
  { value:"UX",  label:"UI/UX Designer",      sub:"Figma Expert" },
];

/* ── Tools ── */
const TOOLS = [
  {
    category:"AI & Product Building", color:"#C85CFF",
    items:["ChatGPT","Claude","Claude Code","Google AI Studio","Antigravity"],
  },
  {
    category:"Frontend Development", color:"#FF8A3D",
    items:["HTML5","CSS3","JavaScript","React","Next.js"],
  },
  {
    category:"Data & Analytics", color:"#00E5FF",
    items:["Python","MySQL","Power BI","Tableau","Excel","Jupyter Notebook"],
  },
  {
    category:"Design & Collaboration", color:"#FF5FD2",
    items:["Figma","Git","GitHub","VS Code"],
  },
];

/* ── Animation helpers ── */
const fadeUp  = (d=0) => ({ initial:{opacity:0,y:28}, whileInView:{opacity:1,y:0}, viewport:{once:true,amount:0.15}, transition:{duration:0.7,delay:d,ease:[0.22,1,0.36,1] as [number,number,number,number]} });
const slideL  = (d=0) => ({ initial:{opacity:0,x:-36}, whileInView:{opacity:1,x:0}, viewport:{once:true,amount:0.15}, transition:{duration:0.8,delay:d,ease:[0.22,1,0.36,1] as [number,number,number,number]} });
const slideR  = (d=0) => ({ initial:{opacity:0,x:36},  whileInView:{opacity:1,x:0}, viewport:{once:true,amount:0.15}, transition:{duration:0.8,delay:d,ease:[0.22,1,0.36,1] as [number,number,number,number]} });

/* ── Image Carousel ── */
function ProfileCarousel() {
  const [idx, setIdx]   = useState(0);
  const [dir, setDir]   = useState(1);

  const go = useCallback((next: number) => {
    setDir(next > idx ? 1 : -1);
    setIdx(next);
  }, [idx]);

  const prev = () => go((idx - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  const next = () => go((idx + 1) % CAROUSEL_IMAGES.length);

  useEffect(() => {
    const t = setInterval(() => { setDir(1); setIdx(i => (i + 1) % CAROUSEL_IMAGES.length); }, 4500);
    return () => clearInterval(t);
  }, []);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60  : -60, opacity: 0, scale: 0.97 }),
    center:             () => ({ x: 0, opacity: 1, scale: 1 }),
    exit:  (d: number) => ({ x: d > 0 ? -60 : 60,  opacity: 0, scale: 0.97 }),
  };

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"16px"}}>
      {/* Container */}
      <div style={{
        position:"relative", width:"72%", aspectRatio:"3/4",
        borderRadius:"24px", overflow:"hidden",
        border:"1px solid rgba(200,92,255,0.25)",
        boxShadow:"0 0 48px rgba(168,85,247,0.2), 0 24px 64px rgba(0,0,0,0.55)",
        background:"rgba(10,5,25,0.6)",
        backdropFilter:"blur(8px)",
      }}>
        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          <motion.div
            key={idx}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration:0.55, ease:[0.22,1,0.36,1] }}
            style={{position:"absolute",inset:0}}
          >
            <Image
              src={CAROUSEL_IMAGES[idx].src}
              alt={CAROUSEL_IMAGES[idx].alt}
              fill
              style={{objectFit:"cover",objectPosition:"center"}}
              sizes="(max-width:768px) 90vw, 30vw"
              priority={idx===0}
            />
            {/* Subtle gradient overlay */}
            <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(4,4,10,0.5) 0%,transparent 50%)"}}/>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        {[{fn:prev,side:"left"},{fn:next,side:"right"}].map(({fn,side})=>(
          <button key={side} onClick={fn} aria-label={side==="left"?"Previous":"Next"}
            style={{
              position:"absolute", top:"50%", [side]:"10px", transform:"translateY(-50%)",
              width:"32px", height:"32px", borderRadius:"50%",
              background:"rgba(5,2,18,0.75)", border:"1px solid rgba(255,255,255,0.12)",
              backdropFilter:"blur(8px)", cursor:"pointer",
              display:"flex", alignItems:"center", justifyContent:"center",
              zIndex:5, transition:"all 0.2s",
            }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(200,92,255,0.5)";e.currentTarget.style.background="rgba(200,92,255,0.12)";}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.12)";e.currentTarget.style.background="rgba(5,2,18,0.75)";}}>
            {side==="left"
              ? <ChevronLeft  size={16} color="rgba(255,255,255,0.8)"/>
              : <ChevronRight size={16} color="rgba(255,255,255,0.8)"/>}
          </button>
        ))}

        {/* Slide counter */}
        <div style={{position:"absolute",bottom:"12px",right:"12px",fontSize:"0.6rem",fontFamily:"Inter,sans-serif",color:"rgba(255,255,255,0.4)",background:"rgba(0,0,0,0.5)",padding:"2px 8px",borderRadius:"99px",zIndex:5}}>
          {idx+1} / {CAROUSEL_IMAGES.length}
        </div>
      </div>

      {/* Dot pagination */}
      <div style={{display:"flex",gap:"8px",alignItems:"center"}}>
        {CAROUSEL_IMAGES.map((_,i)=>(
          <button key={i} onClick={()=>go(i)} aria-label={`Slide ${i+1}`}
            style={{
              width: i===idx ? "20px" : "7px",
              height:"7px", borderRadius:"99px", border:"none", cursor:"pointer",
              background: i===idx ? "#C85CFF" : "rgba(255,255,255,0.2)",
              transition:"all 0.35s ease", padding:0,
            }}/>
        ))}
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" style={{background:"#04040a",padding:"100px 0",position:"relative",zIndex:10}}>
      <div style={{maxWidth:"1500px",margin:"0 auto",padding:"0 24px"}}>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"5rem",alignItems:"start"}}>

          {/* ── LEFT: text ── */}
          <div>
            <motion.p {...fadeUp(0)} style={{fontFamily:"Inter,sans-serif",fontSize:"0.72rem",fontWeight:700,letterSpacing:"5px",color:"#C85CFF",marginBottom:"16px",textTransform:"uppercase"}}>ABOUT ME</motion.p>

            <motion.h2 {...slideL(0.08)} style={{fontFamily:"Satoshi,sans-serif",fontWeight:800,color:"#fff",fontSize:"clamp(2rem,3.5vw,3rem)",lineHeight:1.15,marginBottom:"24px"}}>
              Hi, I&apos;m Niranjan Kumar.
            </motion.h2>

            <motion.p {...fadeUp(0.12)} style={{fontFamily:"Inter,sans-serif",fontSize:"0.97rem",lineHeight:1.82,color:"rgba(255,255,255,0.52)",marginBottom:"16px"}}>
              I&apos;m a Marketing Executive at Smartschool Limited with a strong passion for <span style={{color:"#C85CFF",fontWeight:600}}>AI Product Building</span>, Frontend Development, UI/UX Design, Automation, and emerging technologies. I enjoy transforming ideas into real digital products by combining design thinking, AI-powered workflows, and modern web technologies.
            </motion.p>

            <motion.p {...fadeUp(0.16)} style={{fontFamily:"Inter,sans-serif",fontSize:"0.97rem",lineHeight:1.82,color:"rgba(255,255,255,0.52)",marginBottom:"16px"}}>
              My journey goes beyond traditional marketing. I actively build products, experiment with new technologies, and continuously explore better ways to solve real-world problems through software and automation. From designing intuitive user experiences to developing responsive web applications, I enjoy every stage of the product creation process.
            </motion.p>

            <motion.p {...fadeUp(0.20)} style={{fontFamily:"Inter,sans-serif",fontSize:"0.97rem",lineHeight:1.82,color:"rgba(255,255,255,0.52)",marginBottom:"16px"}}>
              I have successfully designed and developed <span style={{color:"#FF8A3D",fontWeight:600}}>live production websites</span>, turning concepts into fully functional digital experiences. I actively leverage tools such as <span style={{color:"rgba(255,255,255,0.75)"}}>ChatGPT, Claude, Claude Code, Google AI Studio, Figma, React, and Next.js</span> to accelerate development and build modern products faster.
            </motion.p>

            <motion.p {...fadeUp(0.24)} style={{fontFamily:"Inter,sans-serif",fontSize:"0.97rem",lineHeight:1.82,color:"rgba(255,255,255,0.52)",marginBottom:"32px"}}>
              Currently focused on building <span style={{color:"#C85CFF",fontWeight:600}}>AI-powered solutions</span>, mastering modern frontend technologies, and creating digital experiences that deliver measurable impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.28)} style={{display:"flex",gap:"12px",flexWrap:"wrap",marginBottom:"48px"}}>
              <Link href="/projects" className="btn-primary">View Projects <ArrowRight size={15}/></Link>
              <a href="/resume.pdf" download className="btn-ghost">Download CV <ArrowRight size={15}/></a>
            </motion.div>

            {/* ── Quote ── */}
            <motion.div {...fadeUp(0.32)} style={{
              position:"relative",padding:"28px 28px 28px 36px",marginBottom:"40px",
              background:"linear-gradient(135deg,rgba(200,92,255,0.06) 0%,rgba(255,138,61,0.04) 100%)",
              border:"1px solid rgba(200,92,255,0.18)",
              borderLeft:"3px solid #C85CFF",
              borderRadius:"0 16px 16px 0",
              backdropFilter:"blur(12px)",
            }}>
              <span style={{position:"absolute",top:"-8px",left:"16px",fontSize:"4rem",lineHeight:1,color:"#C85CFF",opacity:0.25,fontFamily:"Georgia,serif",pointerEvents:"none"}}>&ldquo;</span>
              <p style={{fontFamily:"Satoshi,sans-serif",fontSize:"1.05rem",fontWeight:600,lineHeight:1.75,color:"rgba(255,255,255,0.78)",margin:0,fontStyle:"italic"}}>
                Technology evolves every day, and so do I. I enjoy turning ideas into real products, building modern web experiences, and continuously learning new technologies that help solve real-world problems.
              </p>
              <span style={{display:"block",marginTop:"12px",fontSize:"0.72rem",color:"#FF8A3D",fontWeight:700,letterSpacing:"2px",textTransform:"uppercase"}}>— Niranjan Kumar</span>
            </motion.div>

            {/* ── Achievement cards ── */}
            <motion.div {...fadeUp(0.36)}>
              <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.65rem",fontWeight:700,letterSpacing:"3px",textTransform:"uppercase",color:"rgba(255,255,255,0.25)",marginBottom:"16px"}}>Highlights</p>
              <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"12px"}}>
                {ACHIEVEMENTS.map((a,i)=>(
                  <motion.div key={a.label}
                    initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}}
                    viewport={{once:true}} transition={{duration:0.5,delay:0.4+i*0.08}}
                    whileHover={{y:-4,transition:{duration:0.2}}}
                    style={{
                      padding:"16px 12px",textAlign:"center",
                      background:"rgba(255,255,255,0.03)",
                      border:"1px solid rgba(255,255,255,0.07)",
                      borderRadius:"14px",backdropFilter:"blur(12px)",
                      cursor:"default",
                    }}>
                    <p style={{fontFamily:"Satoshi,sans-serif",fontWeight:900,fontSize:"1.3rem",background:"linear-gradient(135deg,#FF8A3D,#C85CFF)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",marginBottom:"4px"}}>{a.value}</p>
                    <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.65rem",fontWeight:700,color:"rgba(255,255,255,0.7)",marginBottom:"2px"}}>{a.label}</p>
                    <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.58rem",color:"rgba(255,255,255,0.3)"}}>{a.sub}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Tools & Technologies ── */}
            <motion.div {...fadeUp(0.44)} style={{marginTop:"48px"}}>
              <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.65rem",fontWeight:700,letterSpacing:"3px",textTransform:"uppercase",color:"rgba(255,255,255,0.25)",marginBottom:"24px"}}>Tools &amp; Technologies</p>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px"}}>
                {TOOLS.map((group,gi)=>(
                  <motion.div key={group.category}
                    initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}}
                    viewport={{once:true}} transition={{duration:0.6,delay:0.5+gi*0.1}}>
                    <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.62rem",fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",color:group.color,marginBottom:"10px",opacity:0.85}}>{group.category}</p>
                    <div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}>
                      {group.items.map(tool=>(
                        <motion.span key={tool}
                          whileHover={{scale:1.06,transition:{duration:0.15}}}
                          style={{
                            fontFamily:"Inter,sans-serif",fontSize:"0.72rem",fontWeight:500,
                            color:"rgba(255,255,255,0.7)",
                            background:`${group.color}10`,
                            border:`1px solid ${group.color}25`,
                            padding:"4px 11px",borderRadius:"99px",
                            cursor:"default",display:"inline-block",
                            transition:"border-color 0.2s",
                          }}
                          onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor=`${group.color}60`;(e.currentTarget as HTMLElement).style.color="#fff";}}
                          onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor=`${group.color}25`;(e.currentTarget as HTMLElement).style.color="rgba(255,255,255,0.7)";}}>
                          {tool}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: sticky carousel ── */}
          <motion.div {...slideR(0.15)} style={{position:"sticky",top:"88px"}}>
            <ProfileCarousel/>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
