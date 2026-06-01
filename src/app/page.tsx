import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CompaniesStrip from "@/components/sections/CompaniesStrip";
import AboutSection from "@/components/sections/AboutSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ExperiencePreview from "@/components/sections/ExperiencePreview";
import LatestCertifications from "@/components/sections/LatestCertifications";
import ContactSection from "@/components/sections/ContactSection";
import CTAStrip from "@/components/sections/CTAStrip";
import { getFeaturedProjects } from "@/data/projects";
import { getLatestCertifications } from "@/data/certifications";
import { getCurrentRole } from "@/data/experience";

export const metadata: Metadata = {
  title: "Niranjan Kumar | AI Product Builder & UI/UX Designer",
  description: "AI Product Builder, UI/UX Designer and Front-End Developer from Hyderabad building intelligent digital products.",
};

export default function HomePage() {
  const featured    = getFeaturedProjects(3);
  const latestCerts = getLatestCertifications(3);
  const currentRole = getCurrentRole();
  return (
    <div style={{marginLeft:"-40px",marginRight:"-40px"}}>
      <Hero />
      <CompaniesStrip />
      <AboutSection />
      <FeaturedProjects projects={featured} />
      <ExperiencePreview currentRole={currentRole} />
      <LatestCertifications certifications={latestCerts} />
      <ContactSection />
      <CTAStrip />
    </div>
  );
}