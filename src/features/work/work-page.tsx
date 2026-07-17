"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { ArrowRight, ArrowUpRight, Calendar, Search, X } from "lucide-react";

import { CaseStudyBadge } from "@/components/common/case-study-badge";
import { CaseStudyVisual } from "@/components/common/case-study-visual";
import { Container } from "@/components/common/container";
import { FadeIn } from "@/components/common/fade-in";
import { Section } from "@/components/common/section";
import { Heading, Text } from "@/components/common/typography";
import { PageHeader } from "@/components/layout/page-header";
import { caseStudies } from "@/data";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/types";

const FILTERS = ["All", "Founder Product", "Client Engagement", "AI & SaaS", "IoT & Hardware"];

// Utility to determine responsive bento grid spans for case studies in the default showcase view
const getGridSpan = (slug: string): string => {
  switch (slug) {
    case "safework-global":
      return "lg:col-span-2 md:col-span-2";
    case "whatsapp-profile-sync":
      return "lg:col-span-1 md:col-span-1";
    case "jobfit-ai":
      return "lg:col-span-1 md:col-span-1";
    case "vyaparpost":
      return "lg:col-span-2 md:col-span-2";
    case "vendor-infra":
      return "lg:col-span-3 md:col-span-2";
    case "solar-monitoring":
      return "lg:col-span-1 md:col-span-1";
    case "graphic-design-platform":
      return "lg:col-span-2 md:col-span-1";
    case "digital-invoice":
      return "lg:col-span-1 md:col-span-1";
    case "vipra-community":
      return "lg:col-span-1 md:col-span-1";
    case "nstream-connect":
      return "lg:col-span-1 md:col-span-1";
    case "raspberry-pi-monitoring":
      return "lg:col-span-2 md:col-span-1";
    default:
      return "lg:col-span-1 md:col-span-1";
  }
};

type BentoCardProps = {
  study: CaseStudy;
  className?: string;
  isWide?: boolean;
  isFull?: boolean;
};

// Interactive Bento Card with a custom hover cursor-glow overlay
export function BentoCard({ study, className, isWide = false, isFull = false }: BentoCardProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-card/30 backdrop-blur-md transition-all duration-300 hover:border-foreground/15 hover:shadow-lg dark:hover:shadow-black/20",
        isWide && "lg:flex-row lg:col-span-2",
        isFull && "lg:flex-row lg:col-span-3",
        className
      )}
      style={{
        ...({
          "--mouse-x": `${coords.x}px`,
          "--mouse-y": `${coords.y}px`,
        } as React.CSSProperties),
      }}
    >
      {/* Dynamic Cursor Glow Overlay */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(0,0,0,0.025),transparent_80%)] dark:bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.035),transparent_80%)]",
          isHovered && "opacity-100"
        )}
      />

      {isWide || isFull ? (
        <>
          {/* Layout for wide or full-width cards: split on desktop */}
          <div className={cn(
            "p-6 md:p-8 flex flex-col justify-between flex-1",
            isFull ? "lg:w-2/5" : "lg:w-1/2"
          )}>
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <CaseStudyBadge study={study} />
                  {study.status && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/15">
                      <span className="relative flex h-1 w-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1 w-1 bg-emerald-500"></span>
                      </span>
                      {study.status}
                    </span>
                  )}
                </div>
                {study.year && (
                  <span className="text-xs text-muted-foreground font-medium">{study.year}</span>
                )}
              </div>
              <Heading as="h3" className="mt-4 text-2xl font-semibold tracking-tight">
                <Link href={`/work/${study.slug}`} className="transition-colors hover:text-foreground/80 focus:outline-none">
                  {study.title}
                </Link>
                {study.liveUrl && (
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground ml-2 inline-flex align-middle text-sm font-normal hover:text-foreground transition-colors"
                    aria-label={`Visit ${study.title} live site`}
                  >
                    <ArrowUpRight className="size-4" />
                  </a>
                )}
              </Heading>
              <Text variant="muted" className="mt-3 text-sm md:text-base text-muted-foreground/90">
                {study.summary}
              </Text>
              
              {/* Highlight outcomes in wide cards */}
              <ul className="mt-5 space-y-2 hidden sm:block">
                {study.outcomes.slice(0, isFull ? 3 : 2).map((outcome) => (
                  <li key={outcome} className="text-muted-foreground flex gap-2.5 text-xs md:text-sm">
                    <span className="bg-foreground/60 mt-2 size-1.5 shrink-0 rounded-full" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              {/* Tech stack tags */}
              <div className="mt-6 flex flex-wrap gap-1.5">
                {study.tech.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full bg-muted/60 border border-border/30 px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={`/work/${study.slug}`}
                className="text-foreground mt-5 inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-foreground/70"
                aria-label={`Read case study: ${study.title}`}
              >
                Read case study
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          <div className={cn(
            "p-6 flex items-center justify-center bg-muted/20 dark:bg-muted/10 border-t lg:border-t-0 border-border/30",
            isFull ? "lg:w-3/5 lg:border-l" : "lg:w-1/2 lg:border-l"
          )}>
            <div className="relative w-full max-w-[480px] aspect-[16/10] overflow-hidden rounded-xl border border-border/50 shadow-sm transition-transform duration-500 group-hover:scale-[1.015]">
              <CaseStudyVisual
                visual={study.visual}
                title={study.title}
                image={study.image}
                className="border-0 shadow-none rounded-none w-full h-full"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Standard vertical card layout */}
          <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-border/30 bg-muted/20 dark:bg-muted/10">
            <div className="w-full h-full transition-transform duration-500 group-hover:scale-[1.015]">
              <CaseStudyVisual
                visual={study.visual}
                title={study.title}
                image={study.image}
                className="border-0 shadow-none rounded-none w-full h-full"
              />
            </div>
          </div>

          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <CaseStudyBadge study={study} />
                  {study.status && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/15">
                      <span className="relative flex h-1 w-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1 w-1 bg-emerald-500"></span>
                      </span>
                      {study.status}
                    </span>
                  )}
                </div>
                {study.year && (
                  <span className="text-xs text-muted-foreground font-medium">{study.year}</span>
                )}
              </div>
              <Heading as="h3" className="mt-4 text-xl font-semibold tracking-tight">
                <Link href={`/work/${study.slug}`} className="transition-colors hover:text-foreground/80 focus:outline-none">
                  {study.title}
                </Link>
              </Heading>
              <Text variant="muted" className="mt-2 text-sm line-clamp-3 text-muted-foreground/90">
                {study.summary}
              </Text>
            </div>

            <div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {study.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full bg-muted/60 border border-border/30 px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={`/work/${study.slug}`}
                className="text-foreground mt-5 inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-foreground/70"
              >
                Read case study
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// Custom CTA card placed inside the grid to generate discovery calls
export function CTAContactCard({ className }: { className?: string }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-foreground text-background dark:bg-zinc-900/50 dark:text-foreground border-foreground/10 dark:border-border/60 p-6 md:p-8 transition-all duration-300 hover:shadow-lg dark:hover:shadow-black/20",
        className
      )}
      style={{
        ...({
          "--mouse-x": `${coords.x}px`,
          "--mouse-y": `${coords.y}px`,
        } as React.CSSProperties),
      }}
    >
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Hover glow overlay */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 bg-[radial-gradient(300px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.08),transparent_80%)] dark:bg-[radial-gradient(300px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.05),transparent_80%)]",
          isHovered && "opacity-100"
        )}
      />

      <div className="relative z-10">
        <span className="inline-flex items-center rounded-full bg-background/10 dark:bg-foreground/5 border border-background/20 dark:border-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-background dark:text-foreground">
          Let&apos;s Collaborate
        </span>
        <Heading as="h3" className="mt-6 text-2xl font-bold tracking-tight text-background dark:text-foreground">
          Have a project in mind?
        </Heading>
        <Text className="mt-3 text-sm text-background/80 dark:text-muted-foreground">
          I partner with founders to build high-performance products from concept to launch. Let&apos;s audit your roadmaps or architecture.
        </Text>
      </div>

      <div className="relative z-10 mt-8 flex flex-col gap-3">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-lg bg-background text-foreground dark:bg-foreground dark:text-background py-2.5 px-4 text-sm font-medium hover:bg-background/90 dark:hover:bg-foreground/90 transition-colors shadow-sm focus:outline-none"
        >
          Get in touch
          <ArrowRight className="size-4 ml-1.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
        <a
          href={siteConfig.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-background/80 hover:text-background dark:text-muted-foreground dark:hover:text-foreground transition-colors focus:outline-none"
        >
          <Calendar className="size-3.5" />
          Book directly on Calendly
        </a>
      </div>
    </div>
  );
}

export function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStudies = useMemo(() => {
    return caseStudies.filter((study) => {
      // 1. Filter by category/engagement
      let matchesFilter = true;
      if (activeFilter === "Founder Product") {
        matchesFilter = study.engagement === "founder";
      } else if (activeFilter === "Client Engagement") {
        matchesFilter = study.engagement === "client";
      } else if (activeFilter === "IoT & Hardware") {
        matchesFilter =
          study.visual === "iot" ||
          study.category.toLowerCase().includes("iot") ||
          study.category.toLowerCase().includes("embedded") ||
          study.tech.some((t) => ["Raspberry Pi", "IoT", "Hardware", "Embedded OS"].includes(t));
      } else if (activeFilter === "AI & SaaS") {
        matchesFilter =
          study.visual === "ai" ||
          study.category.toLowerCase().includes("ai") ||
          study.category.toLowerCase().includes("saas");
      }

      // 2. Filter by search query
      let matchesSearch = true;
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        matchesSearch =
          study.title.toLowerCase().includes(q) ||
          study.summary.toLowerCase().includes(q) ||
          study.category.toLowerCase().includes(q) ||
          study.tech.some((t) => t.toLowerCase().includes(q));
      }

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const hasActiveFilters = activeFilter !== "All" || searchQuery.trim() !== "";

  return (
    <>
      <PageHeader
        title="Work"
        description="Case studies across SaaS, B2B platforms, IoT, creative tooling, and community products — each focused on a real business problem."
      />

      {/* Interactive Controls Bar — Sticky top navigation */}
      <div className="sticky top-16 z-30 w-full border-b border-border/40 bg-background/80 py-4 backdrop-blur-md">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                id="work-search-input"
                aria-label="Search case studies by title, technology, or category"
                type="text"
                placeholder="Search projects, technologies, tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-border bg-muted/40 py-2 pl-10 pr-10 text-sm placeholder:text-muted-foreground focus:border-foreground/40 focus:bg-background focus:outline-none focus:ring-1 focus:ring-foreground/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search query"
                  className="absolute right-3 top-1/2 size-5 -translate-y-1/2 rounded-md p-0.5 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="size-full" />
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {FILTERS.map((filter) => {
                const isActive = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    aria-label={`Filter projects by ${filter}`}
                    className={cn(
                      "rounded-full px-3.5 py-1.5 text-xs font-medium border transition-all duration-200 focus:outline-none",
                      isActive
                        ? "bg-foreground text-background border-foreground shadow-sm"
                        : "bg-muted/30 border-border hover:border-muted-foreground/60 text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>
        </Container>
      </div>

      {/* Main Grid Render */}
      <Section>
        <Container>
          {hasActiveFilters ? (
            <>
              <FadeIn>
                <div className="flex justify-between items-center mb-10">
                  <Heading as="h2" className="text-xl md:text-2xl">
                    Search Results ({filteredStudies.length})
                  </Heading>
                  <button
                    onClick={() => {
                      setActiveFilter("All");
                      setSearchQuery("");
                    }}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
                  >
                    Clear all filters
                  </button>
                </div>
              </FadeIn>

              {filteredStudies.length === 0 ? (
                <FadeIn>
                  <div className="text-center py-20 border border-dashed border-border rounded-xl">
                    <Text className="text-muted-foreground">
                      No projects found matching your search criteria.
                    </Text>
                    <button
                      onClick={() => {
                        setActiveFilter("All");
                        setSearchQuery("");
                      }}
                      className="mt-4 rounded-lg bg-foreground text-background px-4 py-2 text-xs font-medium hover:bg-foreground/90 transition-colors"
                    >
                      Reset Filters
                    </button>
                  </div>
                </FadeIn>
              ) : (
                /* Uniform column grid for search results */
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredStudies.map((study, index) => (
                    <FadeIn key={study.slug} delay={index * 0.03}>
                      <BentoCard study={study} className="h-full" />
                    </FadeIn>
                  ))}
                </div>
              )}
            </>
          ) : (
            /* Curated editorial Bento Grid default showcase */
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((study, index) => {
                const isWide =
                  study.slug === "safework-global" ||
                  study.slug === "vyaparpost" ||
                  study.slug === "graphic-design-platform" ||
                  study.slug === "raspberry-pi-monitoring";
                const isFull = study.slug === "vendor-infra";
                const spanClass = getGridSpan(study.slug);

                return (
                  <FadeIn key={study.slug} className={spanClass} delay={index * 0.03}>
                    <BentoCard
                      study={study}
                      isWide={isWide}
                      isFull={isFull}
                      className="h-full"
                    />
                  </FadeIn>
                );
              })}

              {/* Seamlessly integrated CTA Call Card */}
              <FadeIn className="lg:col-span-1 md:col-span-2" delay={caseStudies.length * 0.03}>
                <CTAContactCard className="h-full" />
              </FadeIn>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
