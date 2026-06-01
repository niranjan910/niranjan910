"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const skills = [
  { heading:"AI & Automation", items:["ChatGPT","Claude","Google AI Studio","AI Workflow Design"] },
  { heading:"Design",           items:["Figma","UI/UX Design","Wireframing","Prototyping"] },
  { heading:"Development",      items:["HTML","CSS","JavaScript","GitHub"] },
  { heading:"Data & Analytics", items:["Python","SQL","Power BI","Tableau"] },
];

const fade  = (delay=0) => ({ initial:{opacity:0,y:28}, whileInView:{opacity:1,y:0}, viewport:{once:true,amount:0.2}, transition:{duration:0.7,delay,ease:[0.22,1,0.36,1] as [number,number,number,number]} });
const slideL = (delay=0) => ({ initial:{opacity:0,x:-40}, whileInView:{opacity:1,x:0}, viewport:{once:true,amount:0.2}, transition:{duration:0.8,delay,ease:[0.22,1,0.36,1] as [number,number,number,number]} });
const slideR = (delay=0) => ({ initial:{opacity:0,x:40,scale:0.96}, whileInView:{opacity:1,x:0,scale:1}, viewport:{once:true,amount:0.2}, transition:{duration:0.9,delay,ease:[0.22,1,0.36,1] as [number,number,number,number]} });

export default function AboutSection() {
  return (
    <section id="about" style={{background:"#04040a",padding:"100px 0",position:"relative",zIndex:10}}>
      <div style={{maxWidth:"1500px",margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"5rem",alignItems:"start",padding:"0 24px"}}>

        {/* ── Left: text scrolls ── */}
        <div>
          <motion.p {...fade(0)} style={{fontFamily:"Inter,sans-serif",fontSize:"0.72rem",fontWeight:700,letterSpacing:"5px",color:"#C85CFF",marginBottom:"16px",textTransform:"uppercase"}}>ABOUT ME</motion.p>

          <motion.h2 {...slideL(0.1)} style={{fontFamily:"Satoshi,sans-serif",fontWeight:800,color:"#fff",fontSize:"clamp(2rem,3.5vw,3rem)",lineHeight:1.15,marginBottom:"24px"}}>
            Hi, I&apos;m Niranjan Kumar.
          </motion.h2>

          <motion.p {...fade(0.15)} style={{fontFamily:"Inter,sans-serif",fontSize:"1rem",lineHeight:1.8,color:"rgba(255,255,255,0.55)",marginBottom:"18px"}}>
            I&apos;m a Marketing Executive at Smartschool Limited with a passion for AI Product Building, UI/UX Design, Automation, and Modern Web Development. I enjoy transforming ideas into practical digital products by combining design thinking, AI-powered tools, and technology.
          </motion.p>

          <motion.p {...fade(0.2)} style={{fontFamily:"Inter,sans-serif",fontSize:"1rem",lineHeight:1.8,color:"rgba(255,255,255,0.55)",marginBottom:"18px"}}>
            My work focuses on building user-centric experiences, developing AI-assisted solutions, creating intuitive interfaces, and streamlining workflows through automation. I actively leverage tools such as ChatGPT, Claude, Google AI Studio, and Figma to accelerate product development and bring ideas to life.
          </motion.p>

          <motion.p {...fade(0.25)} style={{fontFamily:"Inter,sans-serif",fontSize:"1rem",lineHeight:1.8,color:"rgba(255,255,255,0.55)",marginBottom:"32px"}}>
            Currently, I&apos;m focused on building AI-powered products, exploring automation opportunities, and creating digital experiences that solve real-world problems.
          </motion.p>

          <motion.div {...fade(0.3)} style={{display:"flex",gap:"12px",flexWrap:"wrap",marginBottom:"40px"}}>
            <Link href="/projects" className="btn-primary">View Projects</Link>
            <a href="/resume.pdf" download className="btn-ghost">Download CV</a>
          </motion.div>

          <motion.div {...fade(0.35)} style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1.5rem 2rem"}}>
            {skills.map(g=>(
              <div key={g.heading}>
                <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.7rem",fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:"#C85CFF",marginBottom:"10px"}}>{g.heading}</p>
                <div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}>
                  {g.items.map(s=>(
                    <span key={s} style={{fontFamily:"Inter,sans-serif",fontSize:"0.75rem",fontWeight:500,color:"rgba(255,255,255,0.65)",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",padding:"4px 12px",borderRadius:"99px"}}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: image stays sticky ── */}
        <div style={{position:"sticky",top:"100px",display:"flex",flexDirection:"column",alignItems:"center"}}>
          <motion.div {...slideR(0.2)} style={{
            width:"62%",aspectRatio:"3/4",borderRadius:"24px",overflow:"hidden",position:"relative",
            boxShadow:"0 0 40px rgba(168,85,247,0.3),0 20px 60px rgba(0,0,0,0.5)",
            border:"1px solid rgba(168,85,247,0.2)",
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/Home_page_01.png" alt="Niranjan Kumar" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}}/>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
