interface Props { eyebrow:string; title:string; subtitle?:string; align?:"left"|"center" }
export default function SectionHeading({eyebrow,title,subtitle,align="center"}:Props) {
  return (
    <div style={{textAlign:align,marginBottom:"3rem"}}>
      <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.7rem",fontWeight:700,letterSpacing:"4px",textTransform:"uppercase",color:"#C85CFF",marginBottom:"0.75rem"}}>{eyebrow}</p>
      <h2 style={{fontFamily:"Satoshi,sans-serif",fontWeight:800,color:"#fff",fontSize:"clamp(1.8rem,4vw,2.8rem)",lineHeight:1.15,marginBottom:subtitle?"1rem":"0"}}>{title}</h2>
      {subtitle && <p style={{fontFamily:"Inter,sans-serif",color:"rgba(255,255,255,0.45)",fontSize:"1rem",lineHeight:1.75,maxWidth:"600px",margin:"0 auto"}}>{subtitle}</p>}
    </div>
  );
}