import Link from "next/link";
export default function CTAStrip() {
  return (
    <section style={{background:"linear-gradient(135deg,rgba(200,92,255,0.06) 0%,rgba(77,124,255,0.04) 100%)",borderTop:"1px solid rgba(255,255,255,0.07)",borderBottom:"1px solid rgba(255,255,255,0.07)",padding:"48px 40px"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"24px",flexWrap:"wrap"}}>
        <p style={{fontFamily:"Satoshi,sans-serif",fontWeight:700,color:"rgba(255,255,255,0.75)",fontSize:"clamp(1rem,2.5vw,1.35rem)",maxWidth:"55ch",lineHeight:1.4,margin:0}}>
          Currently open to exciting opportunities, collaborations, and innovative product ideas.
        </p>
        <div style={{display:"flex",gap:"12px",flexShrink:0,flexWrap:"wrap"}}>
          <a href="/resume.pdf" download className="btn-primary">View Resume</a>
          <Link href="/projects" className="btn-ghost">View Projects</Link>
        </div>
      </div>
    </section>
  );
}