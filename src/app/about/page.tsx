import type { Metadata } from "next";

import { createMetadata } from "@/config/site";
import { AboutPage } from "@/features/about";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Product engineering partner for international founders — clarity, ownership, and production-ready delivery.",
  alternates: {
    canonical: "/about",
  },
});

export default function Page() {
  return <AboutPage />;
}
