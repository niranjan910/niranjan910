import { site } from "@/data/site";
import { socialIcons } from "@/components/ui/icons";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08]">
      <div className="container-page flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        {/* Identity */}
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-white/[0.08] bg-surface font-mono text-xs text-accent">
            {site.monogram}
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
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {l.label}
            </a>
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
