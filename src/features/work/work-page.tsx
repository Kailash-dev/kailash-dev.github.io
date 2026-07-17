"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { ArrowRight, ArrowUpRight, Search, X } from "lucide-react";

import { CaseStudyBadge } from "@/components/common/case-study-badge";
import { CaseStudyVisual } from "@/components/common/case-study-visual";
import { Container } from "@/components/common/container";
import { FadeIn } from "@/components/common/fade-in";
import { Section } from "@/components/common/section";
import { Heading, Text } from "@/components/common/typography";
import { PageHeader } from "@/components/layout/page-header";
import { caseStudies } from "@/data";

const FILTERS = ["All", "Founder Product", "Client Engagement", "AI & SaaS", "IoT & Hardware"];

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

  // Split matches when there are no active filters
  const featured = useMemo(() => {
    return filteredStudies.filter((study) => study.featured);
  }, [filteredStudies]);

  const more = useMemo(() => {
    return filteredStudies.filter((study) => !study.featured);
  }, [filteredStudies]);

  return (
    <>
      <PageHeader
        title="Work"
        description="Case studies across SaaS, B2B platforms, IoT, creative tooling, and community products — each focused on a real business problem."
      />

      {/* Interactive Controls Bar */}
      <Section className="pb-4 pt-12 border-b border-border/40">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Search Input */}
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects, technologies, tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-border bg-muted/40 py-2.5 pl-10 pr-10 text-sm placeholder:text-muted-foreground focus:border-foreground/40 focus:bg-background focus:outline-none focus:ring-1 focus:ring-foreground/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 size-5 -translate-y-1/2 rounded-md p-0.5 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="size-full" />
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((filter) => {
                const isActive = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full px-4 py-1.5 text-xs font-medium border transition-all duration-200 ${
                      isActive
                        ? "bg-foreground text-background border-foreground shadow-sm scale-[1.02]"
                        : "bg-muted/30 border-border hover:border-muted-foreground/60 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Main Grid Render */}
      {hasActiveFilters ? (
        <Section>
          <Container>
            <FadeIn>
              <div className="flex justify-between items-center mb-10">
                <Heading as="h2" className="text-xl md:text-2xl">
                  Search Results ({filteredStudies.length})
                </Heading>
                {(activeFilter !== "All" || searchQuery) && (
                  <button
                    onClick={() => {
                      setActiveFilter("All");
                      setSearchQuery("");
                    }}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
                  >
                    Clear all filters
                  </button>
                )}
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
              <ul className="grid gap-x-8 gap-y-16 md:grid-cols-2">
                {filteredStudies.map((study, index) => (
                  <li key={study.slug}>
                    <FadeIn delay={index * 0.03}>
                      <article className="group flex h-full flex-col">
                        <CaseStudyVisual
                          visual={study.visual}
                          title={study.title}
                          image={study.image}
                          className="transition-transform duration-500 group-hover:scale-[1.01]"
                        />
                        <div className="mt-6 flex-1 flex flex-col justify-between">
                          <div>
                            <CaseStudyBadge study={study} />
                            <Heading as="h3" className="mt-4 text-xl md:text-2xl">
                              <Link
                                href={`/work/${study.slug}`}
                                className="transition-colors hover:text-foreground/80"
                              >
                                {study.title}
                              </Link>
                            </Heading>
                            <Text variant="muted" className="mt-3">
                              {study.summary}
                            </Text>
                          </div>
                          <div>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {study.tech.slice(0, 4).map((item) => (
                                <span
                                  key={item}
                                  className="text-muted-foreground text-xs"
                                >
                                  {item}
                                  {study.tech.indexOf(item) <
                                  Math.min(3, study.tech.length - 1)
                                    ? " ·"
                                    : ""}
                                </span>
                              ))}
                            </div>
                            <Link
                              href={`/work/${study.slug}`}
                              className="text-foreground mt-6 inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-foreground/70"
                            >
                              Read case study
                              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                          </div>
                        </div>
                      </article>
                    </FadeIn>
                  </li>
                ))}
              </ul>
            )}
          </Container>
        </Section>
      ) : (
        <>
          {/* Default Curated Sections */}
          {featured.length > 0 && (
            <Section>
              <Container>
                <FadeIn>
                  <Heading as="h2" className="text-2xl md:text-3xl">
                    Featured
                  </Heading>
                </FadeIn>
                <ul className="mt-10 space-y-20">
                  {featured.map((study, index) => (
                    <li key={study.slug}>
                      <FadeIn delay={index * 0.04}>
                        <article className="group grid gap-8 lg:grid-cols-2 lg:items-center">
                          <CaseStudyVisual
                            visual={study.visual}
                            title={study.title}
                            image={study.image}
                            className="transition-transform duration-500 group-hover:scale-[1.01]"
                          />
                          <div>
                            <CaseStudyBadge study={study} />
                            <Heading as="h3" className="mt-4 text-2xl md:text-3xl">
                              <Link
                                href={`/work/${study.slug}`}
                                className="transition-colors hover:text-foreground/80"
                              >
                                {study.title}
                              </Link>
                              {study.liveUrl ? (
                                <a
                                  href={study.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-muted-foreground ml-2 inline-flex align-middle text-sm font-normal underline-offset-4 hover:text-foreground hover:underline"
                                  aria-label={`Visit ${study.title} live site`}
                                >
                                  <ArrowUpRight className="size-4" />
                                </a>
                              ) : null}
                            </Heading>
                            <Text
                              variant="lead"
                              className="text-muted-foreground mt-3"
                            >
                              {study.summary}
                            </Text>
                            <ul className="mt-4 space-y-2">
                              {study.outcomes.slice(0, 2).map((outcome) => (
                                <li
                                  key={outcome}
                                  className="text-muted-foreground flex gap-3 text-sm"
                                >
                                  <span className="bg-foreground mt-1.5 size-1.5 shrink-0 rounded-full" />
                                  {outcome}
                                </li>
                              ))}
                            </ul>
                            <Link
                              href={`/work/${study.slug}`}
                              className="text-foreground mt-6 inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-foreground/70"
                              aria-label={`Read case study: ${study.title}`}
                            >
                              Read case study
                              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                          </div>
                        </article>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </Container>
            </Section>
          )}

          {more.length > 0 && (
            <Section bordered muted>
              <Container>
                <FadeIn>
                  <Heading as="h2" className="text-2xl md:text-3xl">
                    More projects
                  </Heading>
                  <Text variant="lead" className="text-muted-foreground mt-4">
                    Additional production work across employment and product
                    engineering engagements.
                  </Text>
                </FadeIn>

                <ul className="mt-12 grid gap-10 md:grid-cols-2">
                  {more.map((study, index) => (
                    <li key={study.slug}>
                      <FadeIn delay={index * 0.04}>
                        <article className="group flex h-full flex-col border-t border-border pt-6">
                          <CaseStudyBadge study={study} />
                          <Heading as="h3" className="mt-4 text-xl">
                            <Link
                              href={`/work/${study.slug}`}
                              className="transition-colors hover:text-foreground/80"
                            >
                              {study.title}
                            </Link>
                          </Heading>
                          <Text variant="muted" className="mt-3 flex-1">
                            {study.summary}
                          </Text>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {study.tech.slice(0, 4).map((item) => (
                              <span
                                key={item}
                                className="text-muted-foreground text-xs"
                              >
                                {item}
                                {study.tech.indexOf(item) <
                                Math.min(3, study.tech.length - 1)
                                  ? " ·"
                                  : ""}
                              </span>
                            ))}
                          </div>
                          <Link
                            href={`/work/${study.slug}`}
                            className="text-foreground mt-6 inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-foreground/70"
                          >
                            Read case study
                            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        </article>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </Container>
            </Section>
          )}
        </>
      )}
    </>
  );
}
