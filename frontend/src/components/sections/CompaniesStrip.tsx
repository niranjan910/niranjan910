import Image from "next/image";

const COMPANIES = [
  { src:"/images/companies/StudynLearn.jpg",  alt:"StudynLearn",   href:"https://studynlearn.com/" },
  { src:"/images/companies/SmartSchool.jpg",  alt:"SmartSchool",   href:"https://smartschoolonline.in/" },
  { src:"/images/companies/SNL.jpg",          alt:"SNL",           href:"https://snlsolution.com/" },
  { src:"/images/companies/EGN_India.jpg",    alt:"EGN India",     href:"https://egnindia.com/" },
  { src:"/images/companies/EGN_ConnectX.jpg", alt:"EGN ConnectX",  href:"https://egnconnectx.com/" },
  { src:"/images/companies/Naresh_i_technology.jpg", alt:"Naresh i Technology", href:"https://nareshit.in/" },
  { src:"/images/companies/Techinest.jpg",    alt:"Techinest",     href:"https://internship.learnandbuild.in/" },
];

export default function CompaniesStrip() {
  return (
    <section style={{background:"#000",padding:"16px 0",borderTop:"1px solid rgba(255,255,255,0.06)",borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
      <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.65rem",fontWeight:600,letterSpacing:"4px",textTransform:"uppercase",color:"rgba(255,255,255,0.25)",textAlign:"center",marginBottom:"14px"}}>COMPANIES I HAVE WORKED WITH</p>
      <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",padding:"0 24px",flexWrap:"wrap",gap:"12px"}}>
        {COMPANIES.map(c=>(
          <a key={c.alt} href={c.href} target="_blank" rel="noopener noreferrer"
            style={{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:"6px 8px",borderRadius:"8px",transition:"all 0.3s",flex:1,maxWidth:"130px"}}>
            <Image src={c.src} alt={c.alt} width={100} height={34} style={{objectFit:"contain",filter:"brightness(0.88) saturate(0.8)",transition:"filter 0.3s"}}/>
          </a>
        ))}
      </div>
    </section>
  );
}