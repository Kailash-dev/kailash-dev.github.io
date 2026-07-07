export type NavItem = {
  label: string;
  href: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  highlights: string[];
  description: string;
  capabilities: string[];
  featured: boolean;
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
  twitter?: string;
  linkedin?: string;
  github?: string;
};
