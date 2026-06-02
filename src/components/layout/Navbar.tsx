"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { href:"/",               label:"Home"           },
  { href:"/projects",       label:"Projects"       },
  { href:"/experience",     label:"Experience"     },
  { href:"/certifications", label:"Certifications" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive:true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <style>{`
        .nav-links  { display: flex; }
        .nav-cta    { display: inline-flex; }
        .nav-burger { display: none; }

        @media (max-width: 768px) {
          .nav-links  { display: none; }
          .nav-cta    { display: none; }
          .nav-burger { display: flex; }
        }
      `}</style>

      {/* ── Bar ── */}
      <header style={{
        position:"fixed", top:0, left:0, right:0, zIndex:100,
        background: scrolled
          ? "rgba(6,3,18,0.88)"
          : "rgba(6,3,18,0.45)",
        backdropFilter:"blur(28px)", WebkitBackdropFilter:"blur(28px)",
        borderBottom:"1px solid rgba(255,255,255,0.07)",
        boxShadow: scrolled
          ? "0 4px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.05)"
          : "none",
        transition:"all 0.35s ease",
      }}>
        <nav style={{
          maxWidth:"1500px", margin:"0 auto",
          display:"flex", alignItems:"center", justifyContent:"space-between",
          height:"64px", padding:"0 28px",
        }}>

          {/* Logo */}
          <Link href="/" style={{display:"flex",alignItems:"center",textDecoration:"none",flexShrink:0}}>
            <Image
              src="/images/Logo/Niranjan.png"
              alt="Niranjan Kumar"
              width={130} height={38}
              style={{objectFit:"contain",height:"38px",width:"auto"}}
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="nav-links" style={{alignItems:"center",gap:"2px"}}>
            {NAV.map(({href,label}) => {
              const active = pathname === href;
              return (
                <Link key={href} href={href} style={{
                  padding:"7px 18px", borderRadius:"99px", fontSize:"0.88rem",
                  fontWeight: active ? 700 : 500,
                  color: active ? "#FF8A3D" : "rgba(255,255,255,0.72)",
                  background: active ? "rgba(255,138,61,0.1)" : "transparent",
                  border: active ? "1px solid rgba(255,138,61,0.25)" : "1px solid transparent",
                  transition:"all 0.25s ease", textDecoration:"none",
                  boxShadow: active ? "0 0 12px rgba(255,138,61,0.15)" : "none",
                }}>{label}</Link>
              );
            })}
          </div>

          {/* Right side */}
          <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
            <Link href="/projects" className="nav-cta btn-primary" style={{padding:"0.5rem 1.4rem",fontSize:"0.82rem"}}>
              View Work
            </Link>
            <button
              className="nav-burger"
              onClick={()=>setOpen(o=>!o)}
              aria-label="Toggle menu"
              style={{
                background:"rgba(255,255,255,0.05)",
                border:"1px solid rgba(255,255,255,0.12)",
                borderRadius:"10px", padding:"7px",
                cursor:"pointer", alignItems:"center", justifyContent:"center",
                backdropFilter:"blur(10px)",
                transition:"all 0.2s",
              }}>
              {open ? <X size={20} color="#fff"/> : <Menu size={20} color="#fff"/>}
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile menu ── */}
      <div style={{
        position:"fixed", top:"64px", left:0, right:0, zIndex:99,
        background:"rgba(5,2,16,0.97)",
        backdropFilter:"blur(28px)", WebkitBackdropFilter:"blur(28px)",
        borderBottom:"1px solid rgba(255,255,255,0.07)",
        padding: open ? "16px 24px 28px" : "0 24px",
        maxHeight: open ? "400px" : "0",
        overflow:"hidden",
        transition:"all 0.35s cubic-bezier(0.22,1,0.36,1)",
        display:"flex", flexDirection:"column", gap:"4px",
      }}>
        {NAV.map(({href,label}) => {
          const active = pathname === href;
          return (
            <Link key={href} href={href} style={{
              padding:"13px 16px", borderRadius:"12px", fontSize:"1rem",
              fontWeight: active ? 700 : 500,
              color: active ? "#FF8A3D" : "rgba(255,255,255,0.75)",
              background: active ? "rgba(255,138,61,0.08)" : "transparent",
              border: active ? "1px solid rgba(255,138,61,0.15)" : "1px solid transparent",
              textDecoration:"none", transition:"all 0.2s",
            }}>{label}</Link>
          );
        })}
        <div style={{marginTop:"12px",paddingTop:"16px",borderTop:"1px solid rgba(255,255,255,0.07)"}}>
          <Link href="/projects" className="btn-primary" style={{width:"100%",justifyContent:"center"}}>
            View Work
          </Link>
        </div>
      </div>
    </>
  );
}
