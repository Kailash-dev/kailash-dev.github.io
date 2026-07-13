import type { Metadata } from "next";

import { createMetadata } from "@/config/site";
import { AboutPage } from "@/features/about";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Kailash Gayari — Product Engineering Partner in Vapi, Gujarat. Nearly seven years shipping web, mobile, and IoT products for founders and teams.",
  alternates: {
    canonical: "/about",
  },
});

export default function Page() {
  return <AboutPage />;
}
