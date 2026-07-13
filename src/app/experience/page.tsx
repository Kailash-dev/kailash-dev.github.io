import type { Metadata } from "next";

import { createMetadata } from "@/config/site";
import { ExperiencePage } from "@/features/experience";

export const metadata: Metadata = createMetadata({
  title: "Experience",
  description:
    "Product engineering timeline — senior delivery across web, mobile, IoT, and founder-facing platforms since 2019.",
  alternates: {
    canonical: "/experience",
  },
});

export default function Page() {
  return <ExperiencePage />;
}
