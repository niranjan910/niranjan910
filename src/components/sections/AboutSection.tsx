"use client";
import Link from "next/link";

const skills = [
  { heading:"AI & Automation", items:["ChatGPT","Claude","Google AI Studio","AI Workflow Design"] },
  { heading:"Design",           items:["Figma","UI/UX Design","Wireframing","Prototyping"] },
  { heading:"Development",      items:["HTML","CSS","JavaScript","GitHub"] },
  { heading:"Data & Analytics", items:["Python","SQL","Power BI","Tableau"] },
];

export default function AboutSection() {
  return (
    <section id="about" style={{background:"#04040a",padding:"100px 0",position:"relative",zIndex:10}}>
      <div style={{maxWidth:"1500px",margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"5rem",alignItems:"start",padding:"0 24px"}}>

        {/* ── Left: text ── */}
        <div>
          <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.72rem",fontWeight:700,letterSpacing:"5px",color:"#C85CFF",marginBottom:"16px",textTransform:"uppercase"}}>ABOUT ME</p>
          <h2 style={{fontFamily:"Satoshi,sans-serif",fontWeight:800,color:"#fff",fontSize:"clamp(2rem,3.5vw,3rem)",lineHeight:1.15,marginBottom:"24px"}}>
            Hi, I&apos;m Niranjan Kumar.
          </h2>
          <p style={{fontFamily:"Inter,sans-serif",fontSize:"1rem",lineHeight:1.8,color:"rgba(255,255,255,0.55)",marginBottom:"18px"}}>
            I&apos;m a Marketing Executive at Smartschool Limited with a passion for AI Product Building, UI/UX Design, Automation, and Modern Web Development. I enjoy transforming ideas into practical digital products by combining design thinking, AI-powered tools, and technology.
          </p>
          <p style={{fontFamily:"Inter,sans-serif",fontSize:"1rem",lineHeight:1.8,color:"rgba(255,255,255,0.55)",marginBottom:"18px"}}>
            My work focuses on building user-centric experiences, developing AI-assisted solutions, creating intuitive interfaces, and streamlining workflows through automation. I actively leverage tools such as ChatGPT, Claude, Google AI Studio, and Figma to accelerate product development and bring ideas to life.
          </p>
          <p style={{fontFamily:"Inter,sans-serif",fontSize:"1rem",lineHeight:1.8,color:"rgba(255,255,255,0.55)",marginBottom:"32px"}}>
            Currently, I&apos;m focused on building AI-powered products, exploring automation opportunities, and creating digital experiences that solve real-world problems.
          </p>

          {/* CTA buttons */}
          <div style={{display:"flex",gap:"12px",flexWrap:"wrap",marginBottom:"40px"}}>
            <Link href="/projects" className="btn-primary" style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"0.65rem 1.3rem",borderRadius:"99px",fontSize:"0.82rem",fontWeight:600,textDecoration:"none"}}>
              👁 View Projects
            </Link>
            <a href="/resume.pdf" download className="btn-ghost" style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"0.65rem 1.3rem",borderRadius:"99px",fontSize:"0.82rem",fontWeight:600,textDecoration:"none"}}>
              ⬇ Download CV
            </a>
          </div>

          {/* Skills grid */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1.5rem 2rem"}}>
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
          </div>
        </div>

        {/* ── Right: image ── */}
        <div style={{position:"sticky",top:"100px",display:"flex",flexDirection:"column",alignItems:"center",gap:"20px"}}>
          <div style={{
            width:"80%",aspectRatio:"3/4",borderRadius:"24px",overflow:"hidden",position:"relative",
            boxShadow:"0 0 40px rgba(168,85,247,0.3),0 20px 60px rgba(0,0,0,0.5)",
            border:"1px solid rgba(168,85,247,0.2)",
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/Home_page_01.png" alt="Niranjan Kumar" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}}/>
          </div>
        </div>

      </div>
    </section>
  );
}