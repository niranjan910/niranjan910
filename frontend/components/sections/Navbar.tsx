"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/data/site";
import { MenuIcon, CloseIcon } from "@/components/ui/icons";

// Prefixed with "/" so these resolve correctly from any page, not just
// the home one-pager — a bare "#about" does nothing on e.g. /projects/[slug].
const links = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Add a blurred background once the user scrolls past the hero fold.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/[0.08] bg-base/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="container-page flex h-16 items-center justify-between"
        aria-label="Primary"
      >
        {/* Logo / name */}
        <Link
          href="/"
          className="group flex items-center gap-2 font-display text-sm font-semibold tracking-tight text-foreground"
        >
          <span className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-md border border-white/[0.08] bg-surface transition-colors group-hover:border-accent/40">
            <Image
              src="/Logo/Niranjan-mark.png"
              alt={`${site.name} logo`}
              fill
              sizes="32px"
              className="object-contain p-1"
            />
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md border border-white/[0.08] bg-surface text-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-white/[0.08] bg-base/95 backdrop-blur-xl md:hidden"
          >
            <ul className="container-page flex flex-col py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-3 text-base text-muted transition-colors hover:bg-white/[0.03] hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
