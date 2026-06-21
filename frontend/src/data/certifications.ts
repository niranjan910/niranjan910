import type { Certification } from "@/types";

export const CERTIFICATIONS: Certification[] = [
  { id:1, title:"SEO Mastery", subtitle:"Search Engine Optimisation — Strategy & Implementation", issuer:"SEO Mastery", dateEarned:"2025-07-01", dateDisplay:"Jul 2025", logoUrl:null, imageUrl:"/images/certifications/SEO_mastery.png", verifyUrl:null, category:"SEO & Marketing" },
  { id:2, title:"Claude Code 101", subtitle:"Fundamentals of AI-Assisted Development", issuer:"Anthropic", dateEarned:"2025-06-01", dateDisplay:"Jun 2025", logoUrl:null, imageUrl:"/images/certifications/Claude_Code_101.png", verifyUrl:null, category:"AI & Automation" },
  { id:3, title:"Claude Code in Action", subtitle:"Hands-On AI-Powered Development Workflows", issuer:"Anthropic", dateEarned:"2025-05-01", dateDisplay:"May 2025", logoUrl:null, imageUrl:"/images/certifications/Claude_Code_in_action.png", verifyUrl:null, category:"AI & Automation" },
  { id:4, title:"Career Essentials in Business Analysis by Microsoft and LinkedIn", issuer:"Microsoft & LinkedIn", dateEarned:"2025-04-01", dateDisplay:"Apr 2025", logoUrl:null, imageUrl:"/images/certifications/Business_Analysis.png", verifyUrl:null, category:"Business & Analytics" },
  { id:5, title:"Career Essentials in Data Analysis by Microsoft and LinkedIn", issuer:"Microsoft & LinkedIn", dateEarned:"2025-04-01", dateDisplay:"Apr 2025", logoUrl:null, imageUrl:"/images/certifications/Data_Analysis.png", verifyUrl:null, category:"Data Analytics" },
  { id:6, title:"Statistics Foundations Professional Certificate", issuer:"Wolfram Research", dateEarned:"2025-03-01", dateDisplay:"Mar 2025", logoUrl:null, imageUrl:"/images/certifications/Statistics_Foundations.png", verifyUrl:null, category:"Statistics & Data Science" },
  { id:7, title:"Public Speaking Skills Professional Certificate", issuer:"Toastmasters International", dateEarned:"2025-02-01", dateDisplay:"Feb 2025", logoUrl:null, imageUrl:"/images/certifications/Public_Speaking.png", verifyUrl:null, category:"Communication & Leadership" },
];

export const CERTIFICATIONS_SORTED = [...CERTIFICATIONS].sort((a,b) => new Date(b.dateEarned).getTime() - new Date(a.dateEarned).getTime());
export const getLatestCertifications = (count=3) => CERTIFICATIONS_SORTED.slice(0,count);