export type NavItem = {
  label: string;
  href: string;
};

export type CaseStudyVisual =
  | "iot"
  | "portal"
  | "design"
  | "mobile"
  | "commerce"
  | "ai";

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  approach: string;
  outcomes: string[];
  context: string;
  capabilities: string[];
  featured: boolean;
  visual: CaseStudyVisual;
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  audience: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type SiteAuthor = {
  name: string;
  email: string;
  initials?: string;
  role?: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
};

export type ContactFormPayload = {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  timeline?: string;
  message: string;
};
