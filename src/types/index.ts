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
  solution: string;
  outcomes: string[];
  context: string;
  capabilities: string[];
  tech: string[];
  architecture: string;
  challenges: string[];
  contributions: string[];
  lessons: string[];
  featured: boolean;
  visual: CaseStudyVisual;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  client?: string;
  /** client = built for a client; founder = own product/idea */
  engagement?: "client" | "founder" | "employment";
  year?: string;
};

export type ExperienceRole = {
  id: string;
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  highlights: string[];
  projects: string[];
};

export type CapabilityDomain = {
  title: string;
  description: string;
  items: string[];
};

export type ProofSignal = {
  value: string;
  label: string;
  detail: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  projectSlug?: string;
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
  headshot?: string;
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

export type WritingPost = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  readingTime: string;
};
