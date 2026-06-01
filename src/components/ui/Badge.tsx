interface Props { children:React.ReactNode; className?:string; variant?:"purple"|"glass" }
export default function Badge({children,className="",variant="purple"}:Props) {
  const styles = variant==="glass"
    ? {color:"rgba(255,255,255,0.5)",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)"}
    : {color:"#C85CFF",background:"rgba(200,92,255,0.1)",border:"1px solid rgba(200,92,255,0.2)"};
  return (
    <span style={{display:"inline-flex",alignItems:"center",padding:"3px 10px",borderRadius:"99px",fontSize:"0.6rem",fontWeight:700,letterSpacing:"0.5px",textTransform:"uppercase",...styles}} className={className}>
      {children}
    </span>
  );
}