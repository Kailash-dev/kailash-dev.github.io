import type { CapabilityDomain, ProofSignal } from "@/types";

/** Real presence signals — never invent vanity metrics. */
export const proofSignals: ProofSignal[] = [
  {
    value: "7+",
    label: "Years shipping",
    detail: "Production software since 2019",
  },
  {
    value: "Full stack",
    label: "Ownership",
    detail: "Web, mobile, APIs & IoT",
  },
  {
    value: "Idea → live",
    label: "Engagement model",
    detail: "Architecture through deployment",
  },
  {
    value: "Global",
    label: "Collaboration",
    detail: "India, US, UK, EU & AU",
  },
];

export const capabilityDomains: CapabilityDomain[] = [
  {
    title: "Product interfaces",
    description:
      "Interfaces founders can ship with — designed for clarity, speed, and long-term maintainability.",
    items: [
      "React & Next.js applications",
      "Angular product platforms",
      "React Native mobile apps",
      "Design systems & component libraries",
      "Real-time dashboards & data visualization",
    ],
  },
  {
    title: "Systems & APIs",
    description:
      "Backend foundations that stay reliable under real usage — auth, data, and integrations included.",
    items: [
      "Node.js & Express APIs",
      "PostgreSQL & MySQL data modeling",
      "Redis session & cache layers",
      "JWT authentication & authorization",
      "Third-party integrations",
    ],
  },
  {
    title: "Delivery & operations",
    description:
      "Getting software into production — and keeping it healthy once users depend on it.",
    items: [
      "AWS EC2 & RDS",
      "Docker containerization",
      "GitHub Actions CI/CD",
      "Nginx & Linux operations",
      "Playwright & Jest testing",
    ],
  },
  {
    title: "Connected products",
    description:
      "Software that meets hardware — IoT dashboards, device UIs, and embedded-adjacent delivery.",
    items: [
      "IoT monitoring platforms",
      "Device-facing entertainment UIs",
      "Raspberry Pi & camera systems",
      "Multi-client telemetry architecture",
      "Hardware–software collaboration",
    ],
  },
];
