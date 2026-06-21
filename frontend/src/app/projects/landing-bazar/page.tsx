import type { Metadata } from "next";
import { TrendingDown, ShieldOff, Calculator } from "lucide-react";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { getProjectBySlug } from "@/data/projects";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Landing Bazar — Case Study",
  description: "Case study: Landing Bazar loan and EMI platform — complete UX design and front-end by Niranjan Kumar.",
  openGraph: { title: "Landing Bazar Case Study | Niranjan Kumar", type: "article" },
};

export default function LandingBazarPage() {
  const project = getProjectBySlug("landing-bazar");
  if (!project) notFound();

  return (
    <CaseStudyLayout
      project={project}
      overview="Landing Bazar is a financial services platform focused on simplifying loan applications and EMI management. The project required building trust through design while delivering a seamless, conversion-optimised application experience."
      goals={["Simplify loan application flow","Build trust through professional design language","Implement an interactive EMI calculator","Deliver a responsive, fast-loading platform"]}
      problem="Financial platforms are often intimidating. Users abandoned loan applications due to complex flows, unclear information architecture, and lack of trust signals — resulting in low conversion rates."
      painPoints={[
        { icon: <TrendingDown size={16} strokeWidth={1.5} />, title: "High Abandonment", text: "Complex application forms caused users to abandon mid-process." },
        { icon: <ShieldOff size={16} strokeWidth={1.5} />, title: "Lack of Trust", text: "No clear trust signals led to hesitation on financial decisions." },
        { icon: <Calculator size={16} strokeWidth={1.5} />, title: "No EMI Calculator", text: "Users could not understand repayment commitments before applying." },
      ]}
      research={[
        { title: "User Research", description: "Interviewed loan applicants to understand barriers, fears, and decision-making processes." },
        { title: "Competitive Analysis", description: "Analysed leading FinTech platforms for trust-building patterns and conversion optimisation." },
        { title: "Information Architecture", description: "Mapped the ideal application flow reducing cognitive load at each step." },
        { title: "Trust Pattern Research", description: "Researched visual trust signals used in high-converting financial platforms." },
      ]}
      designSteps={[
        { title: "Wireframing", description: "Low-fidelity wireframes for the application flow, focusing on step-by-step simplification." },
        { title: "Trust-Building Design", description: "Professional visual language, security badges, testimonials, and clear value propositions." },
        { title: "EMI Calculator Widget", description: "Interactive calculator allowing users to understand commitments before applying." },
        { title: "High-Fidelity Prototype", description: "Complete Figma prototype reviewed by stakeholders before development." },
      ]}
      devSteps={[
        { title: "Semantic Structure", description: "Clean, semantic HTML5 structure optimised for accessibility and SEO." },
        { title: "Responsive Layout", description: "Mobile-first CSS ensuring flawless experience from 320px to 4K." },
        { title: "Calculator Implementation", description: "Vanilla JavaScript EMI calculator with real-time feedback." },
        { title: "Performance Optimisation", description: "Minimal dependencies, optimised assets, targeting sub-2s load time." },
      ]}
      challenges={[
        { title: "Building Trust in Finance", description: "Financial decisions require maximum trust. Solved through professional visual language, security indicators, and clear transparent information." },
        { title: "Complex Data Entry Simplification", description: "Loan applications involve lots of data. Solved via progressive multi-step forms with clear progress indicators." },
        { title: "Mobile Form Experience", description: "Financial forms are notoriously bad on mobile. Solved with input type optimisation, auto-formatting, and smart keyboard triggers." },
      ]}
      features={project.keyFeatures}
      learnings={[
        "Trust is a design asset — investing in it directly improves conversion.",
        "Financial UX is human-centred — reducing anxiety drives completions.",
        "Progressive forms outperform long single-page forms every time.",
        "Mobile financial UX requires special input handling not needed elsewhere.",
        "Performance directly correlates with conversion in financial services.",
      ]}
    />
  );
}