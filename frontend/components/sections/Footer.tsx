import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import { socialIcons } from "@/components/ui/icons";

// Prefixed with "/" so these resolve correctly from any page, not just
// the home one-pager — a bare "#about" does nothing on e.g. /projects/[slug].
const quickLinks = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Certifications", href: "/certifications" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08]">
      <div className="container-page flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        {/* Identity */}
        <div className="flex items-center gap-3">
          <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-md border border-white/[0.08] bg-surface">
            <Image
              src="/Logo/Niranjan-mark.png"
              alt={`${site.name} logo`}
              fill
              sizes="36px"
              className="object-contain p-1"
            />
          </span>
          <div>
            <p className="font-display text-sm font-medium text-foreground">
              {site.name}
            </p>
            <p className="text-xs text-muted">{site.title}</p>
          </div>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {quickLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-4">
          {Object.entries(site.socials).map(([key, url]) => {
            const Icon = socialIcons[key as keyof typeof socialIcons];
            if (!Icon) return null;
            return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={key}
                className="text-muted transition-colors hover:text-accent"
              >
                <Icon width={18} height={18} />
              </a>
            );
          })}
        </div>
      </div>

      <div className="border-t border-white/[0.08]">
        <div className="container-page flex items-center justify-between py-5">
          <p className="font-mono text-xs text-muted">
            © {year} {site.name}
          </p>
          <p className="font-mono text-xs text-muted">
            Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
