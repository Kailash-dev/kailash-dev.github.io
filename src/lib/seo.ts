import { siteConfig } from "@/config/site";
import type { CaseStudy } from "@/types";

type JsonLd = Record<string, unknown>;

function getSameAsLinks(): string[] {
  const { author } = siteConfig;
  return [author.linkedin, author.github, author.twitter].filter(
    (url) => url.length > 0,
  );
}

export function createPersonSchema(): JsonLd {
  const { author, url, description } = siteConfig;
  const sameAs = getSameAsLinks();

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    url,
    email: author.email,
    description,
    jobTitle: siteConfig.title,
    homeLocation: {
      "@type": "Place",
      name: siteConfig.location,
    },
    knowsAbout: siteConfig.keywords,
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function createWebSiteSchema(): JsonLd {
  const { name, url, description } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
    inLanguage: "en-US",
  };
}

export function createProfessionalServiceSchema(): JsonLd {
  const { name, url, description, author } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${name} — ${siteConfig.title}`,
    url,
    description,
    email: author.email,
    areaServed: ["US", "CA", "GB", "EU", "AU"],
    serviceType: [
      "Software Development",
      "Web Application Development",
      "Mobile Application Development",
      "Technical Consulting",
    ],
  };
}

export function createCaseStudySchema(study: CaseStudy): JsonLd {
  const { url } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.title,
    description: study.summary,
    url: study.liveUrl ?? `${url}/work/${study.slug}`,
    about: study.category,
    abstract: study.problem,
    keywords: study.outcomes.join(", "),
  };
}
