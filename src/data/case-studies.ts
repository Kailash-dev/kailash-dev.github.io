import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "safework-global",
    title: "SafeWork Global",
    category: "Compliance Marketplace",
    visual: "portal",
    image: "/images/projects/safework-global.jpg",
    client: "SafeWork Global",
    liveUrl: "https://safeworkglobal.com",
    summary:
      "A compliance-first platform replacing unsafe overseas job agents with verified employers, digital contracts, and salary protection for Indian workers.",
    problem:
      "Millions of Indian workers lose ₹50,000–₹2,00,000 to fake overseas job agents every year — paying upfront for jobs that never exist, with no written contracts and no wage protection.",
    approach:
      "Built the full product platform: verified job listings, employer onboarding, worker applications, digital contracts, and escrow-style salary protection — designed as compliance infrastructure, not a job board.",
    outcomes: [
      "Live hiring, applications, and interview flows across 50+ countries",
      "Employer verification before any job goes public",
      "Salary held in protected accounts before workers start",
      "ECR/ECNR checks, PDOT training, and visa guidance integrated",
    ],
    context:
      "Pilot markets active in UAE and Oman, expanding across GCC, Japan, and Europe.",
    capabilities: [
      "Marketplace platform",
      "Compliance workflows",
      "Multi-role portals",
      "Payments & escrow",
    ],
    engagement: "client",
    featured: true,
  },
  {
    slug: "vyaparpost",
    title: "VyaparPost",
    category: "Founder Product · SaaS",
    visual: "design",
    image: "/images/projects/vyaparpost.jpg",
    liveUrl: "https://vyaparpost.in",
    summary:
      "My own SaaS product — festival marketing posts for Indian shop owners, ready in 5 minutes, sized for WhatsApp, with shop details auto-filled.",
    problem:
      "Small shop owners need festival posts for WhatsApp marketing but cannot afford ₹200–500 per poster from local designers — and generic design apps are not built for Indian festivals or WhatsApp Status formats.",
    approach:
      "Founded and built a purpose-specific SaaS: festival calendar, template library, one-time shop setup, Hindi and English greetings, 600×600 WhatsApp-ready exports, and one-tap sharing.",
    outcomes: [
      "Shop owners create festival posts in under 5 minutes",
      "40+ Indian festivals with built-in Hindi greetings",
      "Freemium model at ₹365/year — positioned as ₹1/day",
      "Archive and re-use posts across festivals and weekly offers",
    ],
    context:
      "Founder-built product — conceived, designed, and shipped end-to-end from idea to production.",
    capabilities: [
      "SaaS product",
      "Template engine",
      "Subscription billing",
      "WhatsApp integration",
    ],
    engagement: "founder",
    featured: true,
  },
  {
    slug: "vendor-infra",
    title: "Vendor Infra",
    category: "B2B Industry Platform",
    visual: "portal",
    image: "/images/projects/vendor-infra.jpg",
    client: "Vendor Infra",
    liveUrl: "https://vendorinfra.com",
    summary:
      "AI-powered operating system for infrastructure, construction, and manufacturing — with separate admin and customer portals.",
    problem:
      "Infrastructure and construction businesses manage vendors, projects, and operations across fragmented tools — with no single system built for how the industry actually works.",
    approach:
      "Delivered a dual-portal platform: an admin operations hub for internal teams and a customer-facing portal for vendor and project stakeholders — with industry-specific workflows and AI-assisted operations.",
    outcomes: [
      "Admin portal for internal operations and vendor management",
      "Customer portal for external stakeholder access",
      "Unified platform replacing fragmented industry tooling",
      "AI-assisted workflows for construction and manufacturing ops",
    ],
    context:
      "Built for infrastructure, construction, and manufacturing — not adapted from a generic CRM.",
    capabilities: [
      "Dual-portal architecture",
      "B2B platform",
      "Industry workflows",
      "AI integration",
    ],
    engagement: "client",
    featured: true,
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((study) => study.featured);
}
