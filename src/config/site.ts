import type { Metadata } from "next";

import { withBasePath } from "@/lib/utils";

export const siteConfig = {
  name: "Kailash",
  fullName: "Kailash Gayari",
  title: "Product Engineering Partner",
  description:
    "I help founders and growing teams design, build, and ship production-ready web and mobile software — from architecture through deployment.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kailash-dev.github.io",
  ogImage: withBasePath("/opengraph-image"),
  locale: "en_US",
  author: {
    name: "Kailash Gayari",
    email: "kailash514910@gmail.com",
    initials: "KG",
    role: "Product Engineering Partner",
    headshot: withBasePath("/images/kailash-headshot.jpg"),
    twitter: "",
    linkedin: "https://www.linkedin.com/in/kailash-gayari-720327156/",
    github: "https://github.com/Kailash-dev",
  },
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
  keywords: [
    "product engineering partner",
    "software engineering consultant",
    "independent software consultant",
    "technical partner for startups",
    "SaaS MVP development",
    "international software consultant",
    "full stack product development",
  ],
  trustSignals: [
    {
      label: "Live products",
      value: "SaaS, B2B & compliance platforms",
    },
    {
      label: "Engagement scope",
      value: "Idea to production",
    },
    {
      label: "Client regions",
      value: "India, US, UK, EU & AU",
    },
  ],
} as const;

export function createMetadata(overrides?: Partial<Metadata>): Metadata {
  const { name, title, description, url, ogImage, keywords, author } =
    siteConfig;

  const defaultTitle = `${name} — ${title}`;

  return {
    metadataBase: new URL(url),
    title: {
      default: defaultTitle,
      template: `%s | ${name}`,
    },
    description,
    keywords: [...keywords],
    authors: [{ name: author.name, url }],
    creator: author.name,
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      title: defaultTitle,
      description,
      siteName: name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: defaultTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    ...overrides,
  };
}

export function getAuthorSocialLinks() {
  const { author } = siteConfig;
  return [
    { label: "LinkedIn", href: author.linkedin },
    { label: "GitHub", href: author.github },
  ].filter((link) => link.href.length > 0);
}
