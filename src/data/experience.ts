import type { ExperienceRole } from "@/types";

export const experience: ExperienceRole[] = [
  {
    id: "vcraft",
    company: "Vcraft Innovations",
    role: "Senior Software Developer",
    location: "India",
    start: "Sep 2020",
    end: "Present",
    summary:
      "Owning product engineering across web, mobile, and IoT platforms — from architecture and delivery through production operations for multi-client systems.",
    highlights: [
      "Led frontend architecture for multi-tenant IoT dashboards with real-time visualization",
      "Shipped a Canva-style design platform with SVG editing, brand kits, and role-based portals",
      "Built end-to-end invoice and catalog systems spanning React Native, Angular, Node.js, and Redis",
      "Delivered community and matrimony products used by real users in production",
    ],
    projects: [
      "solar-monitoring",
      "graphic-design-platform",
      "digital-invoice",
      "vipra-community",
    ],
  },
  {
    id: "neon-tss",
    company: "NEON TSS",
    role: "Associate Software Engineer",
    location: "India",
    start: "Jul 2019",
    end: "Sep 2020",
    summary:
      "Built production frontend and embedded-facing software for IoT entertainment and monitoring devices — translating designs into reliable interfaces that talk to hardware.",
    highlights: [
      "Developed the complete frontend for an IoT entertainment device for travelers",
      "Converted Figma designs into production UI and integrated media/video playback",
      "Worked closely with embedded hardware teams on device-facing experiences",
      "Customized Raspberry Pi OS and MotionEye for camera-based monitoring devices",
    ],
    projects: ["nstream-connect", "raspberry-pi-monitoring"],
  },
];

export const freelanceEngagements = [
  {
    id: "vendor-infra",
    name: "Vendor Infra",
    summary:
      "Frontend and backend optimization, security hardening, GitHub Actions CI/CD, and deployment automation for a B2B infrastructure platform.",
    href: "/work/vendor-infra",
  },
  {
    id: "safework-global",
    name: "SafeWork Global",
    summary:
      "Product platform engineering for a compliance-first overseas hiring marketplace — from workflows to production launch.",
    href: "/work/safework-global",
  },
  {
    id: "ishvax",
    name: "Ishvax",
    summary:
      "Production website development with a focus on clarity, performance, and a polished brand presence.",
    href: "/work",
  },
] as const;
