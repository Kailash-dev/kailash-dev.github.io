"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import { ArrowUpRight, X, ArrowRight, Cpu, Database, Server, Globe } from "lucide-react";
import { notFound } from "next/navigation";

import { Badge } from "@/components/common/badge";
import { CaseStudyBadge } from "@/components/common/case-study-badge";
import { CaseStudyVisual } from "@/components/common/case-study-visual";
import { Container } from "@/components/common/container";
import { FadeIn } from "@/components/common/fade-in";
import { Section } from "@/components/common/section";
import { Heading, Text } from "@/components/common/typography";
import { Button } from "@/components/ui/button";
import { cta } from "@/constants";
import { getCaseStudyBySlug } from "@/data";
import { createCaseStudySchema } from "@/lib/seo";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/types";

type FlowNode = {
  id: string;
  label: string;
  description: string;
  tech: string[];
};

const getFlowNodes = (study: CaseStudy): FlowNode[] => {
  const tech = study.tech;
  const isIot = study.visual === "iot" || study.category.toLowerCase().includes("iot");
  const isDesign = study.visual === "design";
  const isMobile = study.visual === "mobile";

  if (isIot) {
    return [
      {
        id: "device",
        label: "Field Device / OS",
        description: "Raspberry Pi or telemetry sensor node running tailored Linux configurations.",
        tech: tech.filter(t => ["Raspberry Pi Zero", "Raspberry Pi OS", "Embedded Linux", "Hardware", "IoT", "Embedded OS"].includes(t)),
      },
      {
        id: "ingestion",
        label: "Ingestion Engine",
        description: "MotionEye or telemetry service parsing inputs, handling camera capture, and buffering logs.",
        tech: tech.filter(t => ["MotionEye", "Camera module", "RxJS", "IoT telemetry", "Charting"].includes(t)),
      },
      {
        id: "transport",
        label: "State webhooks / APIs",
        description: "Deterministic JSON/YAML webhooks normalizing inputs and routing payloads securely.",
        tech: tech.filter(t => ["Node.js", "TypeScript", "REST APIs", "YAML", "Webhook"].includes(t)),
      },
      {
        id: "destination",
        label: "B2B Cloud Portal",
        description: "Multi-tenant dashboard rendering status, real-time analytics graphs, and alerts.",
        tech: tech.filter(t => ["Angular", "React", "PostgreSQL", "Cloud deployment"].includes(t)),
      },
    ].filter(n => n.tech.length > 0 || n.id === "device" || n.id === "destination");
  }

  if (isDesign) {
    return [
      {
        id: "editor",
        label: "Canvas Editor Engine",
        description: "Fabric.js canvas wrapper managing canvas scaling, SVG rendering, and layer state.",
        tech: tech.filter(t => ["Fabric.js", "SVG", "Canvas editing"].includes(t)),
      },
      {
        id: "serialization",
        label: "State JSON Serializer",
        description: "Normalizing designs as JSON payloads for secure template storage and reload logic.",
        tech: tech.filter(t => ["JSON persistence", "Brand systems"].includes(t)),
      },
      {
        id: "portal",
        label: "Angular Shell UI",
        description: "Role-separated application interfaces for designers and operators with authentication.",
        tech: tech.filter(t => ["Angular", "Angular Material", "TypeScript", "Role-based portals"].includes(t)),
      },
    ].filter(n => n.tech.length > 0 || n.id === "editor" || n.id === "portal");
  }

  if (isMobile) {
    return [
      {
        id: "client",
        label: "React Native Client",
        description: "Native mobile application client presenting community modules and profile details.",
        tech: tech.filter(t => ["React Native", "Auth & sessions"].includes(t)),
      },
      {
        id: "auth",
        label: "JWT Auth / REST APIs",
        description: "Secure gateway verification, route guards, and payload validation layers.",
        tech: tech.filter(t => ["JWT", "REST APIs", "Node.js"].includes(t)),
      },
      {
        id: "storage",
        label: "Backend & Database",
        description: "Relational database model holding profile, business, and job listings.",
        tech: tech.filter(t => ["Node.js", "PostgreSQL", "Redis"].includes(t)),
      },
    ].filter(n => n.tech.length > 0 || n.id === "client" || n.id === "storage");
  }

  // Default SaaS / Web application flow
  return [
    {
      id: "client",
      label: "Client Web / UI",
      description: "Fast-loading React/Next.js/Angular application layer focusing on premium UX and layouts.",
      tech: tech.filter(t => ["React", "TypeScript", "Angular", "Vanilla HTML/CSS/JS"].includes(t)),
    },
    {
      id: "server",
      label: "Node / Next.js Server",
      description: "Server-side business logic, security middleware, and third-party gateway integrations.",
      tech: tech.filter(t => ["Node.js", "Node", "TypeScript", "YAML template parser"].includes(t)),
    },
    {
      id: "cache",
      label: "Redis Cache / Webhooks",
      description: "Webhook template parsing, in-memory event queues, and allowlisted sender traces.",
      tech: tech.filter(t => ["Redis", "Webhook architecture", "File uploads & API syncing"].includes(t)),
    },
    {
      id: "storage",
      label: "PostgreSQL Database",
      description: "Secure relational storage holding transactional accounts, verification states, and tables.",
      tech: tech.filter(t => ["PostgreSQL", "Payments & escrow"].includes(t)),
    },
  ].filter(n => n.tech.length > 0 || n.id === "client" || n.id === "storage");
};

function ArchitectureExplorer({ study }: { study: CaseStudy }) {
  const nodes = useMemo(() => getFlowNodes(study), [study]);
  const [activeNodeId, setActiveNodeId] = useState(nodes[0]?.id || "");

  const activeNode = useMemo(() => {
    return nodes.find(n => n.id === activeNodeId) || nodes[0];
  }, [nodes, activeNodeId]);

  if (nodes.length === 0) return null;

  const getIcon = (id: string) => {
    switch (id) {
      case "device": return <Cpu className="size-4" />;
      case "editor": return <Cpu className="size-4" />;
      case "client": return <Globe className="size-4" />;
      case "ingestion": return <Server className="size-4" />;
      case "transport": return <ArrowRight className="size-4" />;
      case "auth": return <Server className="size-4" />;
      case "server": return <Server className="size-4" />;
      case "cache": return <Server className="size-4" />;
      case "storage": return <Database className="size-4" />;
      case "destination": return <Database className="size-4" />;
      case "portal": return <Globe className="size-4" />;
      default: return <Server className="size-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Node blocks row */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 overflow-x-auto pb-2">
        {nodes.map((node, idx) => {
          const isActive = node.id === activeNodeId;
          return (
            <div key={node.id} className="flex flex-col md:flex-row items-stretch md:items-center flex-1 min-w-[140px]">
              <button
                onClick={() => setActiveNodeId(node.id)}
                className={cn(
                  "flex items-center gap-2.5 rounded-lg border px-3 py-2.5 text-xs font-medium transition-all text-left w-full focus:outline-none",
                  isActive
                    ? "bg-foreground text-background border-foreground shadow-sm"
                    : "bg-muted/40 border-border/40 text-muted-foreground hover:border-muted-foreground/40 hover:text-foreground"
                )}
              >
                <span className={cn(
                  "p-1 rounded-md",
                  isActive ? "bg-background/20 text-background" : "bg-muted text-muted-foreground"
                )}>
                  {getIcon(node.id)}
                </span>
                <span className="truncate">{node.label}</span>
              </button>
              
              {idx < nodes.length - 1 && (
                <div className="flex justify-center py-2 md:py-0 md:px-2 text-muted-foreground/30">
                  <ArrowRight className="size-4 rotate-90 md:rotate-0" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Detail card of active node */}
      {activeNode && (
        <div className="rounded-lg bg-muted/30 border border-border/30 p-5 animate-in fade-in duration-200">
          <div className="flex items-center justify-between gap-4">
            <h4 className="text-sm font-semibold tracking-tight text-foreground flex items-center gap-2">
              <span className="p-1 rounded bg-foreground/5 text-foreground">
                {getIcon(activeNode.id)}
              </span>
              {activeNode.label}
            </h4>
            <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Component Node
            </span>
          </div>
          
          <p className="mt-2.5 text-xs md:text-sm text-muted-foreground leading-relaxed">
            {activeNode.description}
          </p>

          {activeNode.tech.length > 0 && (
            <div className="mt-4 pt-4 border-t border-border/20">
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider block">
                Technologies Involved:
              </span>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {activeNode.tech.map(t => (
                  <span key={t} className="inline-flex items-center rounded-full bg-background border border-border/50 px-2 py-0.5 text-[10px] font-medium text-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function DetailBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <FadeIn>
      <div className="mt-12 first:mt-0">
        <Heading as="h2" className="text-2xl">
          {title}
        </Heading>
        <div className="mt-4">{children}</div>
      </div>
    </FadeIn>
  );
}

export function CaseStudyPage({ slug }: { slug: string }) {
  const [isZoomed, setIsZoomed] = useState(false);
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const jsonLd = createCaseStudySchema(study);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative overflow-hidden border-b border-border py-16 md:py-20">
        <div className="surface-glow pointer-events-none absolute inset-0" aria-hidden />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <CaseStudyBadge study={study} />
                {study.year ? (
                  <span className="text-muted-foreground text-sm tabular-nums">
                    {study.year}
                  </span>
                ) : null}
              </div>
              <Heading as="h1" className="mt-4 text-4xl md:text-5xl">
                {study.title}
              </Heading>
              <Text variant="lead" className="text-muted-foreground mt-6">
                {study.summary}
              </Text>
              <div className="mt-6 flex flex-wrap gap-4">
                {study.liveUrl ? (
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline"
                  >
                    Visit live site
                    <ArrowUpRight className="size-3.5" />
                  </a>
                ) : null}
                {study.githubUrl ? (
                  <a
                    href={study.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground inline-flex items-center gap-1 text-sm underline-offset-4 hover:text-foreground hover:underline"
                  >
                    GitHub
                    <ArrowUpRight className="size-3.5" />
                  </a>
                ) : null}
              </div>
            </div>
            <div className="relative group/visual cursor-zoom-in" onClick={() => setIsZoomed(true)}>
              <CaseStudyVisual
                visual={study.visual}
                title={study.title}
                image={study.image}
              />
              {study.image && (
                <div className="absolute inset-0 bg-black/0 group-hover/visual:bg-black/10 flex items-center justify-center transition-colors duration-300 rounded-xl">
                  <span className="text-white text-xs bg-black/60 px-3 py-1.5 rounded-full font-medium opacity-0 group-hover/visual:opacity-100 transition-opacity duration-300">
                    Click to zoom
                  </span>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_18rem]">
            <div className="max-w-3xl">
              <DetailBlock title="The challenge">
                <Text className="text-muted-foreground">{study.problem}</Text>
              </DetailBlock>

              <DetailBlock title="The approach">
                <Text className="text-muted-foreground">{study.approach}</Text>
              </DetailBlock>

              <DetailBlock title="The solution">
                <Text className="text-muted-foreground">{study.solution}</Text>
              </DetailBlock>

              <DetailBlock title="Architecture">
                <Text className="text-muted-foreground mb-6">
                  {study.architecture}
                </Text>
                
                {/* Visual Architecture Explorer */}
                <div className="rounded-xl border border-border/40 bg-card/20 p-6 backdrop-blur-sm mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    Interactive System Architecture Flow
                  </p>
                  
                  <ArchitectureExplorer study={study} />
                </div>
              </DetailBlock>

              <DetailBlock title="Challenges">
                <ul className="space-y-3">
                  {study.challenges.map((item) => (
                    <li
                      key={item}
                      className="text-muted-foreground flex gap-3 text-base"
                    >
                      <span className="bg-foreground mt-1.5 size-1.5 shrink-0 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </DetailBlock>

              <DetailBlock title="My contributions">
                <ul className="space-y-3">
                  {study.contributions.map((item) => (
                    <li
                      key={item}
                      className="text-muted-foreground flex gap-3 text-base"
                    >
                      <span className="bg-foreground mt-1.5 size-1.5 shrink-0 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </DetailBlock>

              <DetailBlock title="Outcomes">
                <ul className="space-y-3">
                  {study.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="text-muted-foreground flex gap-3 text-base"
                    >
                      <span className="bg-foreground mt-1.5 size-1.5 shrink-0 rounded-full" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </DetailBlock>

              <DetailBlock title="Lessons learned">
                <ul className="space-y-3">
                  {study.lessons.map((item) => (
                    <li
                      key={item}
                      className="text-muted-foreground flex gap-3 text-base"
                    >
                      <span className="bg-foreground mt-1.5 size-1.5 shrink-0 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </DetailBlock>

              <FadeIn>
                <div className="mt-12 rounded-xl border border-border bg-muted/30 p-6">
                  <Text variant="small" className="text-muted-foreground">
                    {study.context}
                  </Text>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="mt-16 border-t border-border pt-12 text-center">
                  <Heading as="h2" className="text-2xl md:text-3xl">
                    Building something similar?
                  </Heading>
                  <Text variant="muted" className="mx-auto mt-3 max-w-md">
                    Let&apos;s discuss your product goals and whether I can help
                    you ship with the same clarity and ownership.
                  </Text>
                  <Button asChild size="lg" className="mt-6">
                    <Link href={`${cta.href}#book`}>{cta.label}</Link>
                  </Button>
                </div>
              </FadeIn>
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <FadeIn>
                <div className="space-y-8 border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
                  <div>
                    <p className="text-sm font-medium">Tech stack</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {study.tech.map((item) => (
                        <li key={item}>
                          <Badge>{item}</Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Capabilities</p>
                    <ul className="mt-3 space-y-2">
                      {study.capabilities.map((item) => (
                        <li
                          key={item}
                          className="text-muted-foreground text-sm"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {study.client ? (
                    <div>
                      <p className="text-sm font-medium">Client</p>
                      <p className="text-muted-foreground mt-2 text-sm">
                        {study.client}
                      </p>
                    </div>
                  ) : null}
                </div>
              </FadeIn>
            </aside>
          </div>
        </Container>
      </Section>

      {isZoomed && study.image && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-200"
          onClick={() => setIsZoomed(false)}
        >
          <button
            onClick={() => setIsZoomed(false)}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="size-6" />
          </button>
          <div className="relative w-full max-w-5xl aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-muted">
            <Image
              src={study.image}
              alt={`Zoomed screenshot of ${study.title}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
