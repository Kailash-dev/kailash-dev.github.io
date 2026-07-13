import type { Metadata } from "next";

import { createMetadata } from "@/config/site";
import { WritingPage } from "@/features/writing";

export const metadata: Metadata = createMetadata({
  title: "Writing",
  description:
    "Product engineering notes from Kailash — shipping software, delivery judgment, and building systems that last.",
  alternates: {
    canonical: "/writing",
  },
});

export default function Page() {
  return <WritingPage />;
}
