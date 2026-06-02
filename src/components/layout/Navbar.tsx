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
        .nav-burger { display: none; }
        @media (max-width: 768px) {
          .nav-links  { display: none; }
          .nav-burger { display: flex; }
          .nav-pill   { width: calc(100% - 32px) !important; border-radius: 16px !important; }
        }
      `}</style>

      {/* ── Centred pill ── */}
      <header style={{position:"fixed",top:"16px",left:"50%",transform:"translateX(-50%)",zIndex:100,width:"auto"}}>
        <nav className="nav-pill" style={{
          display:"flex", alignItems:"center", gap:"4px",
          height:"52px", padding:"0 8px",
          borderRadius:"99px",
          background: scrolled ? "rgba(6,3,18,0.92)" : "rgba(255,255,255,0.04)",
          backdropFilter:"blur(28px)", WebkitBackdropFilter:"blur(28px)",
          border:"1px solid rgba(255,255,255,0.09)",
          boxShadow: scrolled
            ? "0 8px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)"
            : "0 4px 24px rgba(0,0,0,0.3)",
          transition:"all 0.3s ease",
        }}>

          {/* Logo */}
          <Link href="/" style={{display:"flex",alignItems:"center",textDecoration:"none",padding:"0 10px 0 6px",borderRight:"1px solid rgba(255,255,255,0.08)",marginRight:"4px",flexShrink:0}}>
            <Image
              src="/images/Logo/Niranjan.png"
              alt="Niranjan Kumar"
              width={100} height={30}
              style={{objectFit:"contain",height:"28px",width:"auto"}}
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div className="nav-links" style={{alignItems:"center",gap:"2px"}}>
            {NAV.map(({href,label}) => {
              const active = pathname === href;
              return (
                <Link key={href} href={href} style={{
                  padding:"6px 16px", borderRadius:"99px", fontSize:"0.88rem",
                  fontWeight: active ? 700 : 500,
                  color: active ? "#FF8A3D" : "rgba(255,255,255,0.72)",
                  background: active ? "rgba(255,138,61,0.1)" : "transparent",
                  border: active ? "1px solid rgba(255,138,61,0.22)" : "1px solid transparent",
                  boxShadow: active ? "0 0 10px rgba(255,138,61,0.15)" : "none",
                  transition:"all 0.25s ease", textDecoration:"none",
                }}>{label}</Link>
              );
            })}
          </div>

          {/* Hamburger (mobile only) */}
          <button
            className="nav-burger"
            onClick={()=>setOpen(o=>!o)}
            aria-label="Toggle menu"
            style={{
              background:"transparent", border:"none",
              padding:"6px 8px", cursor:"pointer",
              alignItems:"center", justifyContent:"center",
              marginLeft:"4px",
            }}>
            {open ? <X size={20} color="#fff"/> : <Menu size={20} color="#fff"/>}
          </button>
        </nav>
      </header>

      {/* ── Mobile dropdown ── */}
      <div style={{
        position:"fixed", top:"76px", left:"50%", transform:"translateX(-50%)",
        width:"calc(100% - 32px)", maxWidth:"420px",
        zIndex:99,
        background:"rgba(5,2,16,0.97)",
        backdropFilter:"blur(28px)", WebkitBackdropFilter:"blur(28px)",
        border:"1px solid rgba(255,255,255,0.09)",
        borderRadius:"16px",
        padding: open ? "12px" : "0 12px",
        maxHeight: open ? "320px" : "0",
        overflow:"hidden",
        transition:"all 0.35s cubic-bezier(0.22,1,0.36,1)",
        display:"flex", flexDirection:"column", gap:"4px",
      }}>
        {NAV.map(({href,label}) => {
          const active = pathname === href;
          return (
            <Link key={href} href={href} style={{
              padding:"12px 16px", borderRadius:"10px", fontSize:"0.95rem",
              fontWeight: active ? 700 : 500,
              color: active ? "#FF8A3D" : "rgba(255,255,255,0.75)",
              background: active ? "rgba(255,138,61,0.08)" : "transparent",
              textDecoration:"none", transition:"all 0.2s",
            }}>{label}</Link>
          );
        })}
      </div>
    </>
  );
}
