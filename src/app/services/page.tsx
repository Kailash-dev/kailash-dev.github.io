import type { Metadata } from "next";

import { createMetadata } from "@/config/site";
import { ServicesPage } from "@/features/services";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Outcome-focused product engineering for founders and teams — MVP builds, SaaS development, integrations, and technical advisory.",
  alternates: {
    canonical: "/services",
  },
});

export default function Page() {
  return <ServicesPage />;
}
