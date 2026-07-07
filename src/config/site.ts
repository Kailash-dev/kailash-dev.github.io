import type { Metadata } from "next";

export const siteConfig = {
  name: "Kailash",
  title: "Product Engineering Partner",
  description:
    "I help founders and growing teams design, build, and ship production-ready web and mobile software — from architecture through deployment.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kailash.dev",
  ogImage: "/og-image.png",
  locale: "en_US",
  author: {
    name: "Kailash",
    email: "hello@kailash.dev",
    twitter: "",
    linkedin: "",
    github: "",
  },
  keywords: [
    "software engineering consultant",
    "product engineering partner",
    "full stack developer",
    "SaaS MVP development",
    "React developer",
    "Node.js developer",
    "international software consultant",
  ],
} as const;

export function createMetadata(overrides?: Partial<Metadata>): Metadata {
  const { name, title, description, url, ogImage, keywords, author } =
    siteConfig;

  return {
    metadataBase: new URL(url),
    title: {
      default: `${name} — ${title}`,
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
      title: `${name} — ${title}`,
      description,
      siteName: name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} — ${title}`,
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
    alternates: {
      canonical: url,
    },
    ...overrides,
  };
}
