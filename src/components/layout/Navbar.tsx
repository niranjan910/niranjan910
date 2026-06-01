"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { href:"/", label:"Home" },
  { href:"/projects", label:"Projects" },
  { href:"/experience", label:"Experience" },
  { href:"/certifications", label:"Certifications" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const headerStyle: React.CSSProperties = {
    position:"fixed", top:"16px", left:"50%", transform:"translateX(-50%)", zIndex:100,
    borderRadius:"99px",
    background: scrolled ? "rgba(6,6,24,0.92)" : "rgba(255,255,255,0.03)",
    border:"1px solid rgba(255,255,255,0.08)",
    backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)",
    boxShadow:"0 8px 32px rgba(0,0,0,0.4)",
    transition:"all 0.3s ease",
  };

  return (
    <header style={headerStyle}>
      <nav style={{display:"flex",alignItems:"center",height:"52px",padding:"0 1.5rem",gap:"4px"}}>
        {NAV.map(({href,label}) => {
          const active = pathname === href;
          return (
            <Link key={href} href={href} style={{
              padding:"6px 16px", borderRadius:"99px", fontSize:"0.9rem",
              fontWeight: active ? 700 : 500,
              color: active ? "#FF8A3D" : "rgba(255,255,255,0.75)",
              transition:"color 0.25s ease", textDecoration:"none",
            }}>
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}