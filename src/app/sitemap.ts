import type { MetadataRoute } from "next";
import { PROJECTS } from "@/data/projects";

const BASE = "https://niranjankumar.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = PROJECTS.map((p) => ({
    url:          `${BASE}/projects/${p.slug}`,
    lastModified: new Date(p.dateAdded),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: BASE,                          lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/projects`,            lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/experience`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/certifications`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...projectPages,
  ];
}
