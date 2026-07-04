"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import { GithubIcon } from "@/components/ui/icons";

// Prefixed with "/" so these resolve from any page, not just the home
// one-pager — a bare "#about" does nothing on e.g. /projects/[slug].
const NAV_LINKS = [
  { label: "About", href: "/#about", match: "" },
  { label: "Projects", href: "/projects", match: "/projects" },
  { label: "Certifications", href: "/certifications", match: "/certifications" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const linksRef = useRef<HTMLElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isActive = (match: string) => match !== "" && pathname.startsWith(match);

  // Glassy background kicks in once scrolled past the hero fold.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Slide the glass highlight to a given link element.
  const positionHighlight = useCallback((el: HTMLElement | null) => {
    const highlight = highlightRef.current;
    const container = linksRef.current;
    if (!highlight || !container || !el) return;
    const linkRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    highlight.style.width = `${linkRect.width}px`;
    highlight.style.height = `${linkRect.height}px`;
    highlight.style.transform = `translateX(${linkRect.left - containerRect.left}px)`;
    highlight.style.opacity = "1";
  }, []);

  const getActiveEl = useCallback(
    () => linksRef.current?.querySelector<HTMLElement>(".rb-nav-link-active") ?? null,
    []
  );

  const handleLinkHover = useCallback(
    (e: React.MouseEvent<HTMLElement>) => positionHighlight(e.currentTarget),
    [positionHighlight]
  );

  const handleLinksLeave = useCallback(() => {
    const activeEl = getActiveEl();
    if (activeEl) positionHighlight(activeEl);
    else if (highlightRef.current) highlightRef.current.style.opacity = "0";
  }, [getActiveEl, positionHighlight]);

  // Snap the highlight to the active link on mount / route change / resize.
  useEffect(() => {
    const settle = () => {
      const activeEl = getActiveEl();
      if (activeEl) positionHighlight(activeEl);
      else if (highlightRef.current) highlightRef.current.style.opacity = "0";
    };
    const id = requestAnimationFrame(settle);
    window.addEventListener("resize", settle);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", settle);
    };
  }, [pathname, getActiveEl, positionHighlight]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`rb-nav${scrolled ? " rb-nav-scrolled" : ""}`}>
      <div className="rb-nav-inner">
        <div className="rb-nav-left">
          <Link href="/" aria-label={site.name}>
            <span className="rb-nav-logo-mark">
              <Image
                src="/Logo/Niranjan-mark.png"
                alt={`${site.name} logo`}
                fill
                sizes="26px"
                className="object-contain"
              />
            </span>
          </Link>

          <span className="rb-nav-divider">/</span>

          <nav
            className="rb-nav-links"
            ref={linksRef}
            onMouseLeave={handleLinksLeave}
            aria-label="Primary"
          >
            <div className="rb-nav-link-highlight" ref={highlightRef} />
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rb-nav-link${isActive(link.match) ? " rb-nav-link-active" : ""}`}
                onMouseEnter={handleLinkHover}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="rb-nav-right">
          {/* GitHub CTA */}
          <a
            className="rb-nav-cta"
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon width={16} height={16} />
            GitHub
          </a>

          <button
            className={`rb-nav-hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {menuOpen && (
          <div className="rb-nav-mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rb-nav-mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rb-nav-mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              GitHub
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
