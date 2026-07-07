export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery",
    description:
      "We align on goals, constraints, timeline, and success criteria. You get clarity on scope before any build begins.",
  },
  {
    step: 2,
    title: "Scope & plan",
    description:
      "I define milestones, technical approach, and communication rhythm. No surprises — you know what ships and when.",
  },
  {
    step: 3,
    title: "Build & iterate",
    description:
      "Steady delivery with regular updates. Architecture decisions are documented. Code is production-grade from day one.",
  },
  {
    step: 4,
    title: "Launch & handoff",
    description:
      "Deployment, documentation, and knowledge transfer. You own everything — code, assets, and the path forward.",
  },
];

export const engagementPrinciples = [
  {
    title: "Clear communication",
    description:
      "Structured async updates with scheduled overlap for calls. You always know project status without chasing updates.",
  },
  {
    title: "Ownership mindset",
    description:
      "I treat your product like my own — anticipating risks, proposing solutions, and delivering without constant direction.",
  },
  {
    title: "Production standards",
    description:
      "Clean architecture, typed codebases, and deployment readiness. Not prototypes that need to be rebuilt later.",
  },
] as const;
