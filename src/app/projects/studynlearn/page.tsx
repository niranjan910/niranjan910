import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { getProjectBySlug } from "@/data/projects";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "StudyNLearn — Case Study",
  description: "Case study: StudyNLearn EdTech platform redesigned by Niranjan Kumar to improve learning accessibility.",
  openGraph: { title: "StudyNLearn Case Study | Niranjan Kumar", type: "article" },
};

export default function StudyNLearnPage() {
  const project = getProjectBySlug("studynlearn");
  if (!project) notFound();

  return (
    <CaseStudyLayout
      project={project}
      overview="StudyNLearn is a comprehensive EdTech platform designed to make quality education accessible to everyone. The project focused on creating intuitive digital experiences that improve learning outcomes and student engagement."
      goals={["Reduce course drop-off rates through better UX","Implement visible progress tracking","Deliver a mobile-optimised learning interface","Build an accessible, inclusive design system"]}
      problem="Students found the existing platform overwhelming — cluttered interfaces, unclear navigation, and no progress visibility led to high abandonment rates mid-course."
      painPoints={[
        { icon: "😵", title: "Cognitive Overload", text: "Too many options presented simultaneously causing decision paralysis." },
        { icon: "📊", title: "No Progress Tracking", text: "Students had no visibility into their learning journey, reducing motivation." },
        { icon: "📱", title: "Poor Mobile UX", text: "80% of users were on mobile but the platform was not optimised." },
      ]}
      research={[
        { title: "Usability Testing", description: "Conducted sessions with 12 students to identify friction points in the current interface." },
        { title: "Analytics Review", description: "Analysed drop-off points, session recordings, and heatmaps to identify problem areas." },
        { title: "Competitor Benchmarking", description: "Benchmarked against Coursera, Udemy, and Khan Academy for UX best practices." },
        { title: "Student Surveys", description: "Collected quantitative data from 50+ students on pain points and expectations." },
      ]}
      designSteps={[
        { title: "Information Architecture", description: "Reorganised content hierarchy based on student mental models, not business logic." },
        { title: "Component Design", description: "Built a modular component library ensuring visual consistency at scale." },
        { title: "Progress Visualisation", description: "Designed clear progress indicators and learning dashboards to boost motivation." },
        { title: "Accessibility Audit", description: "Implemented WCAG 2.1 AA compliance throughout the entire design system." },
      ]}
      devSteps={[
        { title: "Mobile-First Development", description: "Built from mobile viewport first, progressively enhancing for larger screens." },
        { title: "Component Architecture", description: "Modular, reusable components for maintainability and consistency." },
        { title: "Performance Budget", description: "Set strict performance budgets; optimised all assets aggressively." },
        { title: "Accessibility Implementation", description: "Semantic HTML, ARIA attributes, keyboard navigation, and screen reader support." },
      ]}
      challenges={[
        { title: "Simplicity vs Feature Depth", description: "Advanced features needed but complexity overwhelmed users. Solved through progressive disclosure." },
        { title: "Accessibility Compliance", description: "Platform needed to serve diverse accessibility needs. Implemented WCAG 2.1 AA throughout." },
        { title: "Performance on Low-End Devices", description: "Many students used budget phones. Optimised aggressively — reduced bundle size and lazy-loaded media." },
      ]}
      features={project.keyFeatures}
      learnings={[
        "Usability testing reveals problems that analytics alone cannot explain.",
        "Simplicity is a design decision — removing features often improves outcomes.",
        "Accessibility expands your audience and improves UX for everyone.",
        "Mobile-first is non-negotiable for EdTech platforms.",
        "Progress visualisation is one of the most impactful tools for motivation design.",
      ]}
    />
  );
}