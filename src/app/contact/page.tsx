import type { Metadata } from "next";

import { createMetadata } from "@/config/site";
import { ContactPage } from "@/features/contact";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Book a discovery call or send a message. Discuss your product goals and find out if we're a good fit.",
  alternates: {
    canonical: "/contact",
  },
});

export default function Page() {
  return <ContactPage />;
}
