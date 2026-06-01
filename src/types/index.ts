// ── Project ──────────────────────────────────────────────────
export interface Project {
  id:           number;
  slug:         string;
  title:        string;
  badge:        string;
  categories:   string[];
  dateAdded:    string;          // ISO "YYYY-MM-DD"
  duration:     string;
  image:        string | null;
  description:  string;
  technologies: string[];
  overview:     string;
  problem:      string;
  solution:     string;
  role:         string;
  keyFeatures:  string[];
  outcome:      string;
  stats:        { value: string; label: string }[];
  liveUrl:      string | null;
  githubUrl:    string | null;
  glowColor:    string;
  prevSlug:     string | null;
  nextSlug:     string | null;
}

// ── Certification ─────────────────────────────────────────────
export interface Certification {
  id:          number;
  title:       string;
  subtitle?:   string;
  issuer:      string;
  dateEarned:  string;          // ISO "YYYY-MM-DD"
  dateDisplay: string;
  logoUrl:     string | null;
  imageUrl:    string | null;
  verifyUrl:   string | null;
  category:    string;
}

// ── Experience ────────────────────────────────────────────────
export interface ExperienceItem {
  id:          number;
  role:        string;
  company:     string;
  companyUrl:  string | null;
  type:        "work" | "education" | "training";
  location:    string;
  startDate:   string;
  endDate:     string | null;   // null = "Present"
  isCurrent:   boolean;
  grade?:      string;
  description: string;
  tags:        string[];
  logoUrl:     string | null;
  promotion?:  string;
}

// ── Filter ────────────────────────────────────────────────────
export interface FilterOption {
  label: string;
  value: string;
  icon:  string;
}
