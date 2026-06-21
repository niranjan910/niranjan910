import type { Metadata } from "next";
import { Search, Users, Smartphone } from "lucide-react";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { getProjectBySlug } from "@/data/projects";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "EGN Connect X — Case Study",
  description: "Full case study: EGN Connect X EdTech event platform — UI/UX design and front-end development by Niranjan Kumar.",
  openGraph: { title: "EGN Connect X Case Study | Niranjan Kumar", type: "article" },
};

export default function EGNConnectXPage() {
  const project = getProjectBySlug("egn-connect-x");
  if (!project) notFound();

  return (
    <CaseStudyLayout
      project={project}
      overview="EGN Connect X is a comprehensive EdTech event platform that connects learners, educators, and institutions through curated educational events, live sessions, and digital networking experiences."
      goals={["Simplify event discovery and registration","Build networking features for post-event engagement","Deliver a mobile-first responsive experience","Improve event visibility for institutions"]}
      problem="The education sector lacked a dedicated platform for managing academic events. Institutions struggled to reach students effectively, and students had no single trusted hub to discover learning opportunities."
      painPoints={[
        { icon: <Search size={16} strokeWidth={1.5} />, title: "Discovery Gap", text: "Events scattered across emails and social media — impossible to find reliably." },
        { icon: <Users size={16} strokeWidth={1.5} />, title: "Low Engagement", text: "Poor post-event follow-up meant networking opportunities were lost." },
        { icon: <Smartphone size={16} strokeWidth={1.5} />, title: "No Mobile UX", text: "Existing solutions were not optimised for mobile, causing friction." },
      ]}
      research={[
        { title: "User Interviews", description: "Conducted interviews with students and educators to understand pain points in discovering and attending academic events." },
        { title: "Competitive Analysis", description: "Analysed Eventbrite, Meetup, and academic platforms to identify gaps and design opportunities." },
        { title: "User Personas", description: "Created 3 personas: the active student, academic professional, and institution coordinator." },
        { title: "Journey Mapping", description: "Mapped the end-to-end user journey from event discovery to post-event follow-up." },
      ]}
      designSteps={[
        { title: "Sketching & Ideation", description: "Low-fidelity sketches to explore multiple layout directions quickly without commitment." },
        { title: "Wireframing", description: "Mid-fidelity wireframes in Figma to validate information architecture with stakeholders." },
        { title: "Design System", description: "Built a component library with typography, colours, spacing, and reusable UI components." },
        { title: "High-Fidelity Prototype", description: "Pixel-perfect Figma prototype with interactions for stakeholder review and sign-off." },
      ]}
      devSteps={[
        { title: "Semantic HTML Structure", description: "Accessible, SEO-friendly HTML5 structure following modern best practices." },
        { title: "CSS Architecture", description: "Custom CSS with design tokens for consistency, animations for polish, mobile-first layout." },
        { title: "JavaScript Interactions", description: "Vanilla JS for smooth interactions, form validation, and dynamic content." },
        { title: "Performance Optimisation", description: "Image optimisation, lazy loading, and performance auditing for fast load times." },
      ]}
      challenges={[
        { title: "Complex Registration Flow", description: "Simplified multi-step registration through progressive disclosure and smart defaults, reducing steps by 40%." },
        { title: "Mobile Performance", description: "Heavy event images slowed mobile. Solved via responsive images, lazy loading, and WebP conversion." },
        { title: "Trust & Credibility Design", description: "New platform needed immediate user trust. Solved with professional visual language and clear value propositions." },
      ]}
      features={project.keyFeatures}
      learnings={[
        "User research upfront saves design rework — assumptions are costly.",
        "Progressive disclosure is powerful for complex registration flows.",
        "Mobile-first development leads to cleaner, faster desktop experiences.",
        "Design systems accelerate development and ensure visual consistency.",
        "AI tools like Claude significantly speed up ideation and content refinement.",
      ]}
    />
  );
}