import type { Metadata } from "next";

import { createMetadata } from "@/config/site";
import { WorkPage } from "@/features/work";

export const metadata: Metadata = createMetadata({
  title: "Work",
  description:
    "Selected projects across web, mobile, and IoT — production-ready engineering focused on business outcomes.",
  alternates: {
    canonical: "/work",
  },
});

export default function Page() {
  return <WorkPage />;
}
