import type { ExperienceItem } from "@/types";

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 6, role: "Marketing Executive", company: "SmartSchool Education Ltd",
    companyUrl: "https://smartschoolonline.in/", type: "work",
    location: "Noida, India (Hybrid)", startDate: "2025-10-01", endDate: null,
    isCurrent: true,
    description: "Leading strategic marketing initiatives and analysing customer engagement data to optimise outreach campaigns.",
    tags: ["#MarketingAnalytics", "#Growth", "#CRM"],
    logoUrl: "/images/companies/SmartSchool.jpg",
    promotion: "Promoted from Presales Executive within 1 month due to exceptional client acquisition performance.",
  },
  {
    id: 5, role: "Data Analyst Trainee", company: "Naresh i Technologies",
    companyUrl: "https://nareshit.in/", type: "training",
    location: "Hyderabad, India", startDate: "2025-02-01", endDate: "2025-07-31",
    isCurrent: false,
    description: "Intensive programme covering end-to-end data analysis, statistical analysis, and advanced visualisation.",
    tags: ["#SQL", "#PowerBI", "#Tableau", "#Excel"],
    logoUrl: "/images/companies/Naresh_i_technology.jpg",
  },
  {
    id: 4, role: "Data Science with ML", company: "TechieNest",
    companyUrl: "https://internship.learnandbuild.in/", type: "training",
    location: "Jaipur, India", startDate: "2024-08-01", endDate: "2025-01-31",
    isCurrent: false,
    description: "Hands-on ML experience applying algorithms to real-world datasets to build and evaluate predictive models.",
    tags: ["#MachineLearning", "#PredictiveModeling", "#Python"],
    logoUrl: "/images/companies/Naresh_i_technology.jpg",
  },
  {
    id: 3, role: "B.Tech, Computer Science", company: "IPS College of Technology & Management",
    companyUrl: null, type: "education",
    location: "Madhya Pradesh, India", startDate: "2019-08-01", endDate: "2023-05-31",
    isCurrent: false, grade: "8.9 GPA",
    description: "Strong foundation in software engineering, data structures, and algorithms.",
    tags: ["#DataStructures", "#Algorithms", "#Python"],
    logoUrl: null,
  },
  {
    id: 2, role: "Senior Secondary (XII) — Computer Science", company: "DAV Public School",
    companyUrl: null, type: "education",
    location: "West Bengal, India", startDate: "2017-08-01", endDate: "2018-05-31",
    isCurrent: false, grade: "8.7 GPA",
    description: "Specialised in Computer Science, excelling in analytical and quantitative subjects.",
    tags: ["#ProblemSolving", "#AnalyticalReasoning"],
    logoUrl: null,
  },
  {
    id: 1, role: "Secondary Education (X)", company: "DAV Public School",
    companyUrl: null, type: "education",
    location: "West Bengal, India", startDate: "2015-04-01", endDate: "2016-07-31",
    isCurrent: false, grade: "9.2 GPA",
    description: "Strong academic foundation across all general studies.",
    tags: ["#Academics", "#Foundation"],
    logoUrl: null,
  },
];

export const EXPERIENCE_SORTED = [...EXPERIENCE].sort(
  (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
);

export const getCurrentRole = () => EXPERIENCE.find((e) => e.isCurrent) ?? null;
