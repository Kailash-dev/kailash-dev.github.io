import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { SkipLink } from "@/components/common";
import { AppProviders } from "@/providers";
import { SiteFooter, SiteHeader } from "@/components/layout";
import { createMetadata } from "@/config/site";
import {
  createPersonSchema,
  createProfessionalServiceSchema,
  createWebSiteSchema,
} from "@/lib/seo";
import "@/styles/globals.css";

export const metadata: Metadata = createMetadata();

const jsonLd = [
  createPersonSchema(),
  createWebSiteSchema(),
  createProfessionalServiceSchema(),
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <SkipLink />
        <AppProviders>
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </AppProviders>
      </body>
    </html>
  );
}
