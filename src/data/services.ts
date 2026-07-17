import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "mvp-product-builds",
    title: "MVP & Product Builds",
    description:
      "Turn your product idea into a launch-ready application with clear scope, steady delivery, and production-grade foundations.",
    audience: "Founders building their first or next product version",
    price: "Starts at $5,000",
  },
  {
    slug: "saas-feature-development",
    title: "SaaS Feature Development",
    description:
      "Reliable execution on features, integrations, and product improvements for teams with existing codebases.",
    audience: "Technical founders and growing SaaS teams",
    price: "Starts at $1,500",
  },
  {
    slug: "web-mobile-applications",
    title: "Web & Mobile Applications",
    description:
      "End-to-end product delivery across web and mobile with consistent architecture and user experience.",
    audience: "Businesses needing cross-platform product delivery",
    price: "Starts at $6,000",
  },
  {
    slug: "api-auth-payments",
    title: "API, Auth & Payment Integrations",
    description:
      "Production-ready authentication, payment flows, and third-party integrations built for reliability.",
    audience: "Teams preparing products for real users and revenue",
    price: "Starts at $1,200",
  },
  {
    slug: "cloud-deployment",
    title: "Cloud Deployment & DevOps",
    description:
      "AWS infrastructure, Docker containerization, and deployment pipelines that keep products stable in production.",
    audience: "Teams needing production deployment and operational readiness",
    price: "Starts at $2,000",
  },
  {
    slug: "technical-advisory",
    title: "Technical Advisory",
    description:
      "Architecture reviews, stack decisions, and hands-on guidance for products that need senior technical judgment.",
    audience: "Founders evaluating build vs. buy and technical direction",
    price: "CTO / Advisory Retainer",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
