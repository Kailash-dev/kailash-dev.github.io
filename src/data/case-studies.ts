import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "offline-media-streaming",
    title: "Offline Media Streaming System",
    category: "IoT & Entertainment",
    summary:
      "Edge-computing media delivery for public transport without internet connectivity.",
    highlights: [
      "Offline streaming for transport systems",
      "Local Wi-Fi powered by Raspberry Pi",
      "SD card-based media delivery",
    ],
    description:
      "An edge-computing media streaming solution for buses, trains, and other public transport. Passengers connect to a local Wi-Fi network to access pre-loaded multimedia content without internet access. Built with Raspberry Pi for low-cost deployment and Node.js for content delivery.",
    capabilities: ["Raspberry Pi", "Node.js", "Express", "System Design"],
    featured: true,
  },
  {
    slug: "device-media-management-portal",
    title: "Device & Media Management Portal",
    category: "Web Admin Panel",
    summary:
      "Centralized portal for managing IoT streaming devices, content, and analytics.",
    highlights: [
      "Manage devices and media content",
      "OTA updates and analytics dashboard",
      "Role-based access control",
    ],
    description:
      "Centralized web portal to manage IoT streaming devices and their content. Allows media uploads, device monitoring, over-the-air updates, and real-time usage analytics with role-based access control.",
    capabilities: ["Node.js", "MongoDB", "RBAC", "Admin Dashboards"],
    featured: true,
  },
  {
    slug: "web-design-tool",
    title: "Web-based Design Tool",
    category: "Web Application",
    summary:
      "Browser-based design platform with drag-and-drop canvas and asset management.",
    highlights: [
      "Drag-and-drop design canvas",
      "Custom fonts, layers, and templates",
      "Export to PNG and JPEG",
    ],
    description:
      "A Canva-like browser-based design platform using Fabric.js for an interactive canvas. Supports image and text editing, custom fonts, layers, templates, and export features with S3 asset storage.",
    capabilities: ["Fabric.js", "Node.js", "AWS S3", "Express"],
    featured: true,
  },
  {
    slug: "community-mobile-app",
    title: "Community Mobile App",
    category: "Mobile Application",
    summary:
      "Cross-platform community app with matrimony, jobs, and business directory features.",
    highlights: [
      "Community features: matrimony, jobs, businesses",
      "Real-time sync with Firebase",
      "Cross-platform React Native app",
    ],
    description:
      "A multi-feature mobile app serving a large community with services like matrimony, job listings, and business directories. Built with React Native and Firebase for real-time updates with modular architecture.",
    capabilities: ["React Native", "Firebase", "Node.js", "MongoDB"],
    featured: false,
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Web Application",
    summary:
      "Multi-vendor e-commerce with cart, checkout, coupons, and order management.",
    highlights: [
      "Cart, checkout, and coupon features",
      "Multi-vendor support",
      "Mobile-first design",
    ],
    description:
      "An e-commerce application supporting multiple vendors, order management, product search, and secure checkout with MongoDB for product and order data.",
    capabilities: ["Node.js", "Express", "MongoDB", "Payments"],
    featured: false,
  },
  {
    slug: "whatsapp-price-bot",
    title: "What's Cheaper Near Me",
    category: "Chatbot Prototype",
    summary:
      "AI-assisted WhatsApp bot MVP to find cheaper local product alternatives.",
    highlights: [
      "AI-assisted WhatsApp bot",
      "Find cheaper local alternatives",
      "Shipped in under 6 hours",
    ],
    description:
      "An experimental WhatsApp bot MVP built in under 6 hours to help users find cheaper local alternatives for products. Focused on rapid prototyping, CI/CD, and functional delivery.",
    capabilities: [
      "Node.js",
      "Express",
      "WhatsApp Cloud API",
      "OpenAI API",
      "Docker",
    ],
    featured: false,
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((study) => study.featured);
}
