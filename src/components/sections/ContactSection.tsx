"use client";
import { motion } from "framer-motion";
import { Mail, Phone, Link2, Code2, ArrowRight, Send } from "lucide-react";

const CONTACTS = [
  {
    Icon: Phone, label:"Phone", value:"+91 9641143646",
    href:"tel:+919641143646",
    color:"#00E5FF", desc:"Call me directly",
    action:"Call Now",
  },
  {
    Icon: Mail, label:"Email", value:"niranjan991100@gmail.com",
    href:"mailto:niranjan991100@gmail.com",
    color:"#FF8A3D", desc:"Drop me a message",
    action:"Send Email",
  },
  {
    Icon: Link2, label:"LinkedIn", value:"linkedin.com/in/niranjan-k",
    href:"https://www.linkedin.com/in/niranjan-k-a83517229/",
    color:"#C85CFF", desc:"Connect professionally",
    action:"Let's Connect",
  },
  {
    Icon: Code2, label:"GitHub", value:"github.com/niranjan910",
    href:"https://github.com/niranjan910",
    color:"#FF5FD2", desc:"See my code",
    action:"View GitHub",
  },
];

const fadeUp = (d=0) => ({
  initial:{opacity:0,y:24}, whileInView:{opacity:1,y:0},
  viewport:{once:true,amount:0.2},
  transition:{duration:0.7,delay:d,ease:[0.22,1,0.36,1] as [number,number,number,number]},
});

export default function ContactSection() {
  return (
    <section style={{padding:"96px 40px",background:"#04040a"}}>
      <div style={{maxWidth:"900px",margin:"0 auto",textAlign:"center"}}>

        <motion.p {...fadeUp(0)} style={{fontFamily:"Inter,sans-serif",fontSize:"0.7rem",fontWeight:700,letterSpacing:"4px",textTransform:"uppercase",color:"#C85CFF",marginBottom:"12px"}}>GET IN TOUCH</motion.p>

        <motion.h2 {...fadeUp(0.08)} style={{fontFamily:"Satoshi,sans-serif",fontWeight:900,color:"#fff",fontSize:"clamp(2rem,5vw,3rem)",marginBottom:"16px"}}>
          Let&apos;s Build Something Amazing Together
        </motion.h2>

        <motion.p {...fadeUp(0.12)} style={{color:"rgba(255,255,255,0.45)",fontSize:"1rem",lineHeight:1.75,maxWidth:"560px",margin:"0 auto 52px"}}>
          Whether you need an AI-powered solution, a modern web experience, or a UI/UX design partner — I&apos;d love to connect.
        </motion.p>

        {/* Contact Cards */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:"16px",marginBottom:"52px"}}>
          {CONTACTS.map(({Icon,label,value,href,color,desc,action},i)=>(
            <motion.a
              key={label} href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}}
              viewport={{once:true}} transition={{duration:0.6,delay:0.16+i*0.08}}
              whileHover={{y:-5,transition:{duration:0.2}}}
              style={{
                display:"flex",flexDirection:"column",alignItems:"flex-start",
                padding:"22px",
                background:"rgba(255,255,255,0.03)",
                border:"1px solid rgba(255,255,255,0.08)",
                borderRadius:"20px",textDecoration:"none",textAlign:"left",
                backdropFilter:"blur(16px)",transition:"border-color 0.3s, box-shadow 0.3s",
                position:"relative",overflow:"hidden",
              }}
              onMouseEnter={e=>{
                const el = e.currentTarget;
                el.style.borderColor=`${color}40`;
                el.style.boxShadow=`0 0 32px ${color}15`;
              }}
              onMouseLeave={e=>{
                const el = e.currentTarget;
                el.style.borderColor="rgba(255,255,255,0.08)";
                el.style.boxShadow="none";
              }}>
              {/* Top accent line */}
              <div style={{position:"absolute",top:0,left:0,right:0,height:"2px",background:`linear-gradient(90deg,${color},transparent)`,borderRadius:"20px 20px 0 0"}}/>

              {/* Icon */}
              <div style={{
                width:"42px",height:"42px",borderRadius:"12px",
                background:`${color}12`,border:`1px solid ${color}30`,
                display:"flex",alignItems:"center",justifyContent:"center",
                marginBottom:"14px",flexShrink:0,
                boxShadow:`0 0 16px ${color}20`,
              }}>
                <Icon size={18} strokeWidth={1.5} color={color}/>
              </div>

              <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.62rem",textTransform:"uppercase",letterSpacing:"2px",color:"rgba(255,255,255,0.3)",marginBottom:"4px"}}>{label}</p>
              <p style={{fontFamily:"Inter,sans-serif",color:"#fff",fontSize:"0.82rem",fontWeight:600,marginBottom:"4px",wordBreak:"break-all"}}>{value}</p>
              <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.7rem",color:"rgba(255,255,255,0.35)",marginBottom:"16px",flex:1}}>{desc}</p>

              <span style={{
                display:"inline-flex",alignItems:"center",gap:"5px",
                fontSize:"0.72rem",fontWeight:600,color:color,
                transition:"gap 0.2s",
              }}>
                {action} <ArrowRight size={12}/>
              </span>
            </motion.a>
          ))}
        </div>

        {/* Main CTA */}
        <motion.div {...fadeUp(0.5)}>
          <a href="mailto:niranjan991100@gmail.com" className="btn-primary">
            <Send size={15} strokeWidth={1.5}/> Send a Message <ArrowRight size={14}/>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
