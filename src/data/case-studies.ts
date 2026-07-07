import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "offline-media-streaming",
    title: "Offline Media Streaming System",
    category: "IoT & Entertainment",
    visual: "iot",
    summary:
      "Passenger entertainment for public transport — without relying on mobile internet.",
    problem:
      "A transport operator needed to offer media to passengers in areas with no reliable connectivity. Streaming from the cloud was not an option.",
    approach:
      "Designed an edge delivery system: local Wi-Fi on each vehicle, content pre-loaded to devices, and a lightweight server handling playback and updates when vehicles return to depot.",
    outcomes: [
      "Passengers access entertainment offline via onboard Wi-Fi",
      "Low-cost hardware footprint suitable for fleet-wide rollout",
      "Content updates managed without disrupting daily operations",
    ],
    context:
      "Built for reliability in constrained environments — prioritising uptime and simple field maintenance over complexity.",
    capabilities: ["Edge computing", "IoT", "System design", "Node.js"],
    featured: true,
  },
  {
    slug: "device-media-management-portal",
    title: "Device & Media Management Portal",
    category: "Operations Platform",
    visual: "portal",
    summary:
      "One control centre for a distributed fleet of streaming devices and their content libraries.",
    problem:
      "As the device fleet grew, the team needed a single place to upload media, monitor device health, push updates, and understand usage — without logging into individual units.",
    approach:
      "Built a centralized admin portal with role-based access, device dashboards, media management, and over-the-air update workflows tied to real operational needs.",
    outcomes: [
      "Operations team manages entire fleet from one dashboard",
      "Role-based access for admins, operators, and viewers",
      "OTA updates and usage analytics reduce manual intervention",
    ],
    context:
      "Focused on operational clarity for non-technical staff — the interface had to be dependable, not impressive.",
    capabilities: ["Admin systems", "RBAC", "Real-time monitoring", "Node.js"],
    featured: true,
  },
  {
    slug: "web-design-tool",
    title: "Web-based Design Tool",
    category: "SaaS Product",
    visual: "design",
    summary:
      "A browser-based design platform that lets non-designers create and export marketing assets.",
    problem:
      "A business needed an in-house design workflow without licensing expensive desktop tools or hiring a full design team for routine asset production.",
    approach:
      "Delivered a canvas-based editor with templates, layers, custom fonts, and export — scoped to the workflows the team actually used daily.",
    outcomes: [
      "Teams produce branded assets without leaving the browser",
      "Template library accelerates repetitive design tasks",
      "PNG and JPEG export integrated into existing workflows",
    ],
    context:
      "Product decisions favoured speed-to-asset over feature parity with enterprise design tools.",
    capabilities: [
      "Canvas editing",
      "Asset management",
      "Cloud storage",
      "Web application",
    ],
    featured: true,
  },
  {
    slug: "community-mobile-app",
    title: "Community Mobile App",
    category: "Mobile Product",
    visual: "mobile",
    summary:
      "A single app serving matrimony, jobs, and business listings for a large community.",
    problem:
      "A community organisation needed one mobile presence for multiple services — each with different data models and update patterns — without fragmenting the user experience.",
    approach:
      "Architected a modular React Native app with shared navigation and real-time sync, allowing each service to evolve independently while feeling like one product.",
    outcomes: [
      "One app replaces three separate service touchpoints",
      "Real-time updates across listings and user-generated content",
      "Modular architecture supports adding services without rewrites",
    ],
    context:
      "Cross-platform delivery kept maintenance costs manageable for a lean team.",
    capabilities: ["Mobile product", "Real-time sync", "Modular architecture"],
    featured: false,
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Commerce",
    visual: "commerce",
    summary:
      "Multi-vendor marketplace with cart, checkout, and order operations built for real transactions.",
    problem:
      "A business wanted to launch a marketplace where multiple vendors sell through one storefront — with secure checkout and manageable order operations from day one.",
    approach:
      "Built vendor onboarding, product catalog, cart and checkout flows, and an admin layer for order management — mobile-first, with payments integrated into the purchase path.",
    outcomes: [
      "Multiple vendors operate through a unified storefront",
      "End-to-end checkout with coupon and order management",
      "Mobile-first experience for buyers in growth markets",
    ],
    context:
      "Commerce flows were tested against real payment scenarios before launch, not mocked.",
    capabilities: ["Marketplace", "Payments", "Order management", "Mobile-first"],
    featured: false,
  },
  {
    slug: "whatsapp-price-bot",
    title: "What's Cheaper Near Me",
    category: "AI Prototype",
    visual: "ai",
    summary:
      "A WhatsApp bot MVP that helps shoppers find cheaper local alternatives — shipped in hours, not weeks.",
    problem:
      "Validate whether users would engage with price-comparison via WhatsApp before investing in a full product — with almost no time budget.",
    approach:
      "Scoped to a single conversational flow, integrated WhatsApp Cloud API and AI-assisted parsing, containerised for repeatable deployment, and shipped within one working session.",
    outcomes: [
      "Working prototype deployed and testable same day",
      "Conversational flow validated with real users on WhatsApp",
      "CI/CD pipeline in place for rapid follow-up iterations",
    ],
    context:
      "A deliberate speed exercise — proving feasibility before committing to full product build.",
    capabilities: ["Rapid prototyping", "Conversational AI", "WhatsApp API", "CI/CD"],
    featured: false,
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((study) => study.featured);
}
