import type { Metadata } from "next";

import { createMetadata } from "@/config/site";
import { ProcessPage } from "@/features/process";

export const metadata: Metadata = createMetadata({
  title: "Process",
  description:
    "A structured engagement model for founders who value clarity, accountability, and production-ready delivery.",
  alternates: {
    canonical: "/process",
  },
});

export default function Page() {
  return <ProcessPage />;
}
