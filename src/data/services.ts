import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "mvp-product-builds",
    title: "MVP & Product Builds",
    description:
      "Turn your product idea into a launch-ready application with clear scope, steady delivery, and production-grade foundations.",
    audience: "Founders building their first or next product version",
  },
  {
    slug: "saas-feature-development",
    title: "SaaS Feature Development",
    description:
      "Reliable execution on features, integrations, and product improvements for teams with existing codebases.",
    audience: "Technical founders and growing SaaS teams",
  },
  {
    slug: "web-mobile-applications",
    title: "Web & Mobile Applications",
    description:
      "End-to-end product delivery across web and mobile with consistent architecture and user experience.",
    audience: "Businesses needing cross-platform product delivery",
  },
  {
    slug: "api-auth-payments",
    title: "API, Auth & Payment Integrations",
    description:
      "Production-ready authentication, payment flows, and third-party integrations built for reliability.",
    audience: "Teams preparing products for real users and revenue",
  },
  {
    slug: "cloud-deployment",
    title: "Cloud Deployment & DevOps",
    description:
      "AWS infrastructure, Docker containerization, and deployment pipelines that keep products stable in production.",
    audience: "Teams needing production deployment and operational readiness",
  },
  {
    slug: "technical-advisory",
    title: "Technical Advisory",
    description:
      "Architecture reviews, stack decisions, and hands-on guidance for products that need senior technical judgment.",
    audience: "Founders evaluating build vs. buy and technical direction",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
