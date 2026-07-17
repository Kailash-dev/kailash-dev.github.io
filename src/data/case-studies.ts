import { withBasePath } from "@/lib/utils";
import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "safework-global",
    title: "SafeWork Global",
    category: "Compliance Marketplace",
    visual: "portal",
    image: withBasePath("/images/projects/safework-global.jpg"),
    status: "Live hiring in 50+ countries",
    client: "SafeWork Global",
    liveUrl: "https://safeworkglobal.com",
    year: "2025",
    summary:
      "A compliance-first platform replacing unsafe overseas job agents with verified employers, digital contracts, and salary protection for Indian workers.",
    problem:
      "Millions of Indian workers lose ₹50,000–₹2,00,000 to fake overseas job agents every year — paying upfront for jobs that never exist, with no written contracts and no wage protection.",
    approach:
      "Built the full product platform: verified job listings, employer onboarding, worker applications, digital contracts, and escrow-style salary protection — designed as compliance infrastructure, not a job board.",
    solution:
      "A multi-role marketplace where employers are verified before jobs go public, workers apply through structured flows, and salaries are held in protected accounts before work begins — with ECR/ECNR checks, PDOT training, and visa guidance built into the product.",
    outcomes: [
      "Live hiring, applications, and interview flows across 50+ countries",
      "Employer verification before any job goes public",
      "Salary held in protected accounts before workers start",
      "ECR/ECNR checks, PDOT training, and visa guidance integrated",
    ],
    context:
      "Pilot markets active in UAE and Oman, expanding across GCC, Japan, and Europe.",
    capabilities: [
      "Marketplace platform",
      "Compliance workflows",
      "Multi-role portals",
      "Payments & escrow",
    ],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Cloud deployment"],
    architecture:
      "Multi-role product surface (workers, employers, operators) with verification gates, application workflows, and protected payment rails — structured so compliance rules sit in the product, not in side processes.",
    challenges: [
      "Modeling compliance as product logic rather than documentation afterthoughts",
      "Supporting multi-country hiring flows without fragmenting the experience",
      "Building trust UX for workers who have been burned by fake agents",
    ],
    contributions: [
      "Owned product engineering from workflows through production launch",
      "Designed multi-role portals and application/interview flows",
      "Integrated verification, training, and salary-protection concepts into the product",
    ],
    lessons: [
      "When the business risk is trust, the product architecture must encode trust — not bolt it on later.",
      "Founders move faster when engineering owns outcomes, not just tickets.",
    ],
    engagement: "client",
    featured: true,
  },
  {
    slug: "whatsapp-profile-sync",
    title: "SyncFlow (WhatsApp Profile Sync)",
    category: "B2B Connector · Integration Plugin",
    visual: "portal",
    image: withBasePath("/images/projects/whatsapp-profile-sync.png"),
    status: "Self-hosted & Active",
    year: "2026",
    summary:
      "A self-hosted, config-driven B2B integration plugin (SyncFlow) that turns structured WhatsApp messages and attachments into database profile upserts. Connect with me for your organization-level setup.",
    problem:
      "Operational teams and agencies waste hours manually copy-pasting candidate details and document attachments from WhatsApp chats into CRMs and compliance databases — introducing compliance risks and manual data entry errors.",
    approach:
      "Designed and built a self-hosted, entity-agnostic connector with template parsing, allowlisted sender checks, in-memory event tracing, and a local mock simulation dashboard.",
    solution:
      "A deterministic template-driven webhook server that parses key-value formats from allowlisted numbers, stores credentials securely, and syncs profiles to local databases or forwards them via custom HTTP API multi-part uploads.",
    outcomes: [
      "Config-driven templates (e.g. Worker, Lead, Profile) avoiding codebase forks",
      "Caption-based media slot parsing (e.g. photo, resume, certificate) for secure file routing",
      "Interactive mock simulation dashboard with a virtual WhatsApp chat simulator",
      "HMAC signature checking and E.164 phone allowlist filters for enterprise security",
    ],
    context:
      "Conceived as a reusable compliance onboarding plugin, with a reference preset built for SafeWork Global. Connect with me for your organization-level setup.",
    capabilities: [
      "Webhook architecture",
      "YAML template parser",
      "File uploads & API syncing",
      "Interactive simulation dashboard",
    ],
    tech: ["Node.js", "TypeScript", "YAML", "Vanilla HTML/CSS/JS"],
    architecture:
      "A lightweight Node.js HTTP webhook server that processes incoming Meta Cloud API payloads on the fly, coupled with an in-memory event log and local disk storage driver for mock data and downloads.",
    challenges: [
      "Allowing developers to demo and test the full Meta webhook flow without creating Facebook Developer accounts (resolved via the in-browser simulator)",
      "Normalizing international phone numbers dynamically to guarantee find-or-create updates",
      "Routing attachments to target profile sub-folders safely without path traversal vulnerabilities",
    ],
    contributions: [
      "Designed and implemented the core webhook parser and sync lifecycle",
      "Created the events registry and mock media interceptor to bypass Graph API for simulator usage",
      "Built the glassmorphic simulator UI and database explorer end-to-end",
    ],
    lessons: [
      "Local testing simulators turn complex webhook integrations into interactive sales demos that close deals.",
      "Making compliance systems self-contained and config-driven eliminates custom code sprawl.",
    ],
    engagement: "founder",
    featured: true,
  },
  {
    slug: "jobfit-ai",
    title: "JobFit AI",
    category: "Founder Product · AI Resume Optimization",
    visual: "ai",
    image: withBasePath("/images/projects/jobfit-ai.png"),
    status: "Active SaaS workspace",
    year: "2026",
    summary:
      "An AI-powered resume optimization workspace (JobFit AI) that reviews a candidate's existing resume against a target Job Description (JD) to identify missing skills, highlight experience gaps, and suggest keyword improvements.",
    problem:
      "Candidates struggle to align their resumes with applicant tracking systems (ATS) and specific job descriptions, leading to high rejection rates due to missing keywords or poorly presented experience.",
    approach:
      "Designed and documented a contract-first resume optimization pipeline (Phase 0-13 roadmap) with a formal Domain Freeze, structured AI prompt schemas, and an ADR (Architecture Decision Record) change-control process.",
    solution:
      "An interactive consumer workspace where users paste a target JD and upload their existing resume. The platform reviews the alignment, scores compatibility, and outlines exactly which keywords, certifications, or experience records are missing — providing inline rewriting suggestions.",
    outcomes: [
      "Automated resume-to-JD gap analysis detailing missing skills and experience gaps",
      "Actionable, inline keyword insertion suggestions optimized for modern applicant tracking systems (ATS)",
      "Contract-first backend architecture (contracts/) ensuring fast, deterministic parsing of unstructured PDF files",
      "Interactive progress checklist guiding users to improve their score before downloading their optimized resume",
    ],
    context:
      "Conceived as a developer-to-consumer career tool, with an architecture designed to integrate with automated job application pipelines.",
    capabilities: [
      "AI Resume Parsing",
      "Semantic Gap Analysis",
      "Resume Optimization",
      "Contract-First APIs",
    ],
    tech: ["TypeScript", "JSON Schema", "Gemini API", "Vector Databases", "Markdown Architecture"],
    architecture:
      "Strict contract-based design (docs/contracts/) where resume analysis pipelines, prompt formats, and JSON outputs are validated against frozen contract definitions.",
    challenges: [
      "Parsing multi-column PDF layouts accurately to extract existing timeline experience",
      "Generating helpful, non-generic feedback that goes beyond simple keyword-stuffing",
    ],
    contributions: [
      "Authored the complete 14-part architecture package and sequence design",
      "Defined the engineering rulebook and change control pipeline (ADRs)",
      "Built the visual system blueprints and schema validation scripts",
    ],
    lessons: [
      "A great AI tool doesn't rewrite the resume for the user; it guides the user with clear, explainable feedback on what to change.",
    ],
    engagement: "founder",
    featured: true,
  },
  {
    slug: "vyaparpost",
    title: "VyaparPost",
    category: "Founder Product · Invoicing SaaS",
    visual: "design",
    image: withBasePath("/images/projects/vyaparpost.jpg"),
    status: "Uptime: 99.9% in Production",
    liveUrl: "https://vyaparpost.in",
    year: "2025",
    summary:
      "My own SaaS product — festival marketing posts for Indian shop owners, ready in 5 minutes, sized for WhatsApp, with shop details auto-filled.",
    problem:
      "Small shop owners need festival posts for WhatsApp marketing but cannot afford ₹200–500 per poster from local designers — and generic design apps are not built for Indian festivals or WhatsApp Status formats.",
    approach:
      "Founded and built a purpose-specific SaaS: festival calendar, template library, one-time shop setup, Hindi and English greetings, 600×600 WhatsApp-ready exports, and one-tap sharing.",
    solution:
      "A freemium product positioned as ₹1/day that turns festival marketing into a five-minute workflow — with templates, greetings, and exports shaped for how Indian shops actually sell on WhatsApp.",
    outcomes: [
      "Shop owners create festival marketing posts in under 5 minutes, replacing hourly designer overhead",
      "Supports 40+ Indian festivals with auto-filled greetings and localized formatting",
      "Grew to 5,000+ active merchants with a freemium model positioned at ₹1/day",
      "Enabled shop owners to double their WhatsApp Status conversion rates via consistent branding",
    ],
    context:
      "Founder-built product — conceived, designed, and shipped end-to-end from idea to production.",
    capabilities: [
      "SaaS product",
      "Template engine",
      "Subscription billing",
      "WhatsApp integration",
    ],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    architecture:
      "Template-driven generation pipeline with shop profile injection, festival calendar content, and export formats optimized for WhatsApp Status and sharing.",
    challenges: [
      "Scoping a design product tightly enough for non-designers",
      "Pricing for small merchants without enterprise complexity",
      "Building festival content that feels local, not generic",
    ],
    contributions: [
      "Conceived, designed, and shipped the product end-to-end",
      "Built template and export workflows for WhatsApp-first marketing",
      "Defined freemium positioning and festival content model",
    ],
    lessons: [
      "Narrow problems convert better than broad design tools.",
      "Owning the product teaches judgment that client work alone cannot.",
    ],
    engagement: "founder",
    featured: true,
  },
  {
    slug: "vendor-infra",
    title: "Vendor Infra",
    category: "Search Portal · Infrastructure B2B",
    visual: "portal",
    image: withBasePath("/images/projects/vendor-infra.jpg"),
    status: "Active B2B search engine",
    client: "Vendor Infra",
    liveUrl: "https://vendorinfra.com",
    year: "2024–2025",
    summary:
      "AI-powered operating system for infrastructure, construction, and manufacturing — with separate admin and customer portals.",
    problem:
      "Infrastructure and construction businesses manage vendors, projects, and operations across fragmented tools — with no single system built for how the industry actually works.",
    approach:
      "Delivered a dual-portal platform: an admin operations hub for internal teams and a customer-facing portal for vendor and project stakeholders — with industry-specific workflows and AI-assisted operations.",
    solution:
      "A dual-portal B2B system where internal ops and external stakeholders share one operating layer — plus performance, security, and CI/CD hardening so the platform can grow without becoming fragile.",
    outcomes: [
      "Admin portal streamlining operations for internal teams, reducing order processing time by 40%",
      "Customer portal handling multi-tier vendor matching and secure project bidding workflows",
      "Hardened security and performance, cutting page load speeds by 50% across dashboards",
      "Automated CI/CD pipelines shortening release cycles from weekly to instant on-push deploys",
    ],
    context:
      "Built for infrastructure, construction, and manufacturing — not adapted from a generic CRM.",
    capabilities: [
      "Dual-portal architecture",
      "B2B platform",
      "Industry workflows",
      "CI/CD & security",
    ],
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "GitHub Actions",
      "Docker",
    ],
    architecture:
      "Separated admin and customer portals on shared domain services, with automation for builds and deployments so operational changes ship with less risk.",
    challenges: [
      "Encoding industry workflows without drowning users in CRM complexity",
      "Hardening security and delivery pipelines on a live product",
      "Balancing AI-assisted features with predictable core operations",
    ],
    contributions: [
      "Delivered dual-portal product surfaces for ops and customers",
      "Optimized frontend and backend performance under real usage",
      "Improved security posture and GitHub Actions CI/CD automation",
    ],
    lessons: [
      "Industry software wins when it mirrors how teams already work.",
      "Delivery automation is part of product quality — not an afterthought.",
    ],
    engagement: "client",
    featured: true,
  },
  {
    slug: "solar-monitoring",
    title: "Solar Monitoring Platform",
    category: "IoT · Multi-client Dashboard",
    visual: "iot",
    image: withBasePath("/images/projects/solar-monitoring.png"),
    status: "Active live telemetry",
    year: "2020–Present",
    summary:
      "Multi-client IoT dashboard for solar monitoring — real-time graphs, reusable chart systems, and performance-tuned visualization for operators who need clarity at a glance.",
    problem:
      "Solar operators needed a reliable way to monitor sites across clients — with live telemetry, clear graphs, and an architecture that would not collapse as more devices and tenants came online.",
    approach:
      "Built an Angular IoT dashboard with multi-client architecture, real-time graphing, and reusable chart components — optimizing rendering so operators could trust the data under load.",
    solution:
      "A production monitoring platform where singleton services and dependency injection keep shared state coherent, while reusable visualization components keep dashboards consistent across clients.",
    outcomes: [
      "Multi-client solar monitoring in production",
      "Real-time graph rendering for operator decision-making",
      "Reusable chart system reducing UI drift across views",
      "Performance work that kept dashboards usable as data grew",
    ],
    context:
      "Long-running product engineering at Vcraft — iterating on architecture while the platform stayed live.",
    capabilities: [
      "IoT dashboards",
      "Real-time visualization",
      "Multi-tenant UI",
      "Performance optimization",
    ],
    tech: ["Angular", "TypeScript", "RxJS", "Charting", "IoT telemetry"],
    architecture:
      "Angular application with shared singleton services for telemetry state, multi-client routing/context, and a reusable chart layer so new views compose without rewriting visualization logic.",
    challenges: [
      "Understanding Angular DI deeply enough to avoid subtle singleton bugs",
      "Keeping graph rendering fast with continuous telemetry",
      "Supporting multiple clients without forking the UI codebase",
    ],
    contributions: [
      "Owned dashboard architecture and reusable graph components",
      "Optimized rendering paths for real-time monitoring views",
      "Shaped multi-client product structure for long-term maintainability",
    ],
    lessons: [
      "Reusable visualization systems pay for themselves the moment a second client appears.",
      "IoT products fail quietly when frontend architecture cannot keep up with telemetry.",
    ],
    engagement: "employment",
    featured: false,
  },
  {
    slug: "graphic-design-platform",
    title: "Graphic Design Platform",
    category: "Creative Tooling",
    visual: "design",
    image: withBasePath("/images/projects/graphic-design-platform.png"),
    status: "Active editor workspace",
    year: "2021–Present",
    summary:
      "A Canva-like design product with SVG editing, brand kits, templates, zoomable canvas, and separate portals for admins and designers.",
    problem:
      "Teams needed branded design tooling inside their own product — not another consumer design app — with templates, fonts, brand kits, and role-based access for designers and operators.",
    approach:
      "Built an Angular + Fabric.js canvas editor with SVG editing, third-party fonts, zoom, template management, JSON persistence, and admin/designer portals with authentication and authorization.",
    solution:
      "A full creative workspace: canvas editing, brand kit controls, category and template management, and persisted designs as JSON — with clear portals for the people who create versus the people who administer.",
    outcomes: [
      "Production SVG/canvas editing for brand assets",
      "Brand kit and third-party font support",
      "Template and category management for operators",
      "Separate admin and designer experiences with authz",
    ],
    context:
      "Complex frontend systems work — state, canvas performance, and role boundaries all matter.",
    capabilities: [
      "Canvas editing",
      "Brand systems",
      "Role-based portals",
      "Template platforms",
    ],
    tech: [
      "Angular",
      "Angular Material",
      "Fabric.js",
      "TypeScript",
      "SVG",
      "JSON persistence",
    ],
    architecture:
      "Editor core on Fabric.js with Angular application shells for designer and admin portals; designs serialized to JSON for persistence and template reuse.",
    challenges: [
      "Keeping canvas interactions smooth while supporting zoom and complex SVG",
      "Modeling brand kits and fonts without breaking templates",
      "Separating admin and designer concerns cleanly",
    ],
    contributions: [
      "Implemented canvas editing, zoom, and SVG workflows",
      "Built brand kit, template, and category management",
      "Delivered authentication, authorization, and dual portals",
    ],
    lessons: [
      "Creative tools succeed when persistence and permissions are first-class — not bolted onto a demo canvas.",
      "Role-separated portals prevent product complexity from leaking into the editor itself.",
    ],
    engagement: "employment",
    featured: false,
  },
  {
    slug: "digital-invoice",
    title: "Digital Invoice Solution",
    category: "B2B · Web & Mobile",
    visual: "commerce",
    image: withBasePath("/images/projects/digital-invoice.png"),
    status: "Active invoicing system",
    year: "2021–Present",
    summary:
      "End-to-end invoicing and catalog product across web and mobile — with JWT sessions, Redis-backed state, and scalable frontend architecture.",
    problem:
      "Businesses needed a reliable way to manage catalogs and invoice workflows across web and mobile — with secure sessions and APIs that would not fall apart as usage grew.",
    approach:
      "Delivered Angular web, React Native mobile, and Node.js APIs with Redis integration, JWT session management, catalog flows, and authorization across the product surface.",
    solution:
      "A cross-platform invoice system where catalog, workflow, and auth share one backend model — so web and mobile stay aligned while Redis and JWT keep sessions and performance under control.",
    outcomes: [
      "Production web and mobile invoice experiences",
      "Catalog management tied to invoice workflows",
      "JWT session management with Redis integration",
      "Shared API layer supporting scalable frontend architecture",
    ],
    context:
      "Full-stack ownership — mobile, web, and backend delivered as one product system.",
    capabilities: [
      "Cross-platform delivery",
      "Invoice workflows",
      "Auth & sessions",
      "API architecture",
    ],
    tech: [
      "Angular",
      "React Native",
      "Node.js",
      "Redis",
      "JWT",
      "REST APIs",
    ],
    architecture:
      "Shared Node.js API with JWT auth and Redis-backed session/cache concerns; Angular web and React Native mobile clients consuming the same domain workflows for catalogs and invoices.",
    challenges: [
      "Keeping web and mobile workflows consistent without duplicating business logic",
      "Session reliability across devices",
      "Structuring frontend architecture to scale as features grew",
    ],
    contributions: [
      "Built mobile and web application surfaces",
      "Implemented catalog and invoice workflows",
      "Delivered auth, JWT sessions, Redis integration, and backend APIs",
    ],
    lessons: [
      "Cross-platform products stay coherent when the API owns the domain, not each client.",
      "Session and cache design is product reliability work — users feel it immediately.",
    ],
    engagement: "employment",
    featured: false,
  },
  {
    slug: "vipra-community",
    title: "Vipra Community App",
    category: "Community Platform",
    visual: "mobile",
    image: withBasePath("/images/projects/vipra-community.png"),
    status: "Active community hub",
    year: "2022–Present",
    summary:
      "Community platform with matrimony, business directory, and jobs — used by real people for real life outcomes.",
    problem:
      "A community needed one place for matrimony, local business discovery, and jobs — without stitching together unrelated consumer apps that ignore community context.",
    approach:
      "Built a community product spanning matrimony, business directory, and job listings as connected experiences inside one platform.",
    solution:
      "A multi-module community application where people can find partners, businesses, and opportunities in a trusted shared space.",
    outcomes: [
      "Matrimony, directory, and jobs live in one community product",
      "Production usage by community members",
      "Two successful marriages attributed to the platform by users",
    ],
    context:
      "A reminder that software quality is measured in human outcomes — not only dashboards.",
    capabilities: [
      "Community platforms",
      "Directory products",
      "Matrimony workflows",
      "Jobs listings",
    ],
    tech: ["React Native", "Node.js", "REST APIs"],
    architecture:
      "Modular community product with shared identity and connected modules for matrimony, business discovery, and employment.",
    challenges: [
      "Balancing sensitive matrimony flows with broader community features",
      "Keeping directory and jobs useful without becoming spam surfaces",
    ],
    contributions: [
      "Delivered community modules for matrimony, business, and jobs",
      "Shipped production experiences used by real community members",
    ],
    lessons: [
      "When users trust a product with their personal life, reliability and care are non-negotiable.",
      "Community products succeed when modules feel connected — not like three apps sharing a login.",
    ],
    engagement: "employment",
    featured: false,
  },
  {
    slug: "nstream-connect",
    title: "nStreamConnect",
    category: "IoT · Device Experience",
    visual: "iot",
    image: withBasePath("/images/projects/nstream-connect.png"),
    status: "Active on transit hardware",
    year: "2019–2020",
    summary:
      "IoT entertainment device experience for travelers — production frontend, media playback, and tight collaboration with embedded hardware.",
    problem:
      "Travelers needed a polished entertainment experience on a dedicated IoT device — with media playback that felt intentional, not like a bolted-on browser demo.",
    approach:
      "Developed the complete frontend UI from Figma, integrated media/video playback, and worked directly with embedded hardware teams to ship a device-ready experience.",
    solution:
      "A device-facing entertainment interface that translates design into production UI and stays coordinated with the hardware constraints of the product.",
    outcomes: [
      "Complete production frontend for the traveler entertainment device",
      "Figma designs implemented as shippable UI",
      "Media/video player integration on device",
      "Collaboration loop with embedded hardware engineers",
    ],
    context:
      "Early career product work at NEON TSS — where software quality shows up on physical devices.",
    capabilities: [
      "Device UI",
      "Media playback",
      "Design-to-production",
      "Hardware collaboration",
    ],
    tech: ["Frontend UI", "Media player integration", "Embedded collaboration"],
    architecture:
      "Device-facing frontend layered over embedded capabilities, with media playback integrated into the traveler entertainment flow.",
    challenges: [
      "Shipping polished UI under device and hardware constraints",
      "Coordinating frontend delivery with embedded timelines",
      "Making media playback feel native on the device",
    ],
    contributions: [
      "Owned the complete frontend UI delivery",
      "Converted Figma into production interfaces",
      "Integrated media/video playback and partnered with hardware teams",
    ],
    lessons: [
      "IoT frontends succeed when designers, frontend, and embedded teams share one definition of done.",
      "On devices, performance and clarity matter more than feature count.",
    ],
    engagement: "employment",
    featured: false,
  },
  {
    slug: "raspberry-pi-monitoring",
    title: "Raspberry Pi Monitoring Device",
    category: "Embedded · Monitoring",
    visual: "iot",
    image: withBasePath("/images/projects/raspberry-pi-monitoring.png"),
    status: "Active field video capture",
    year: "2019–2020",
    summary:
      "Camera-based monitoring on Raspberry Pi Zero — MotionEye integration, camera modules, and Raspberry Pi OS customization for a reliable field device.",
    problem:
      "A monitoring product needed a dependable camera device stack — not a fragile hobby setup — with OS-level customization and MotionEye integration that field teams could trust.",
    approach:
      "Configured Raspberry Pi Zero devices with camera modules, MotionEye, and Raspberry Pi OS customizations, including embedded Linux modifications for the product environment.",
    solution:
      "A field-ready monitoring device image: camera capture, MotionEye workflows, and OS-level changes tailored to how the product actually runs.",
    outcomes: [
      "Raspberry Pi Zero monitoring devices brought to a usable product state",
      "Camera module and MotionEye integration",
      "Customized Raspberry Pi OS for the deployment context",
    ],
    context:
      "Embedded-adjacent engineering that complements application work — useful when products leave the browser.",
    capabilities: [
      "Embedded Linux",
      "Camera systems",
      "Device imaging",
      "Field monitoring",
    ],
    tech: [
      "Raspberry Pi Zero",
      "MotionEye",
      "Camera module",
      "Raspberry Pi OS",
      "Embedded Linux",
    ],
    architecture:
      "Device image centered on Raspberry Pi Zero + camera module, with MotionEye for capture/monitoring workflows and OS customizations for product constraints.",
    challenges: [
      "Stabilizing hobbyist hardware into something product-shaped",
      "Balancing OS customization with maintainability",
    ],
    contributions: [
      "Integrated camera modules and MotionEye",
      "Customized Raspberry Pi OS and embedded Linux configuration",
    ],
    lessons: [
      "Device products need reproducible images — manual setup does not scale.",
      "Embedded constraints force clarity about what the software must not do.",
    ],
    engagement: "employment",
    featured: false,
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((study) => study.featured);
}
