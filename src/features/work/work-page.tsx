import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { CaseStudyBadge } from "@/components/common/case-study-badge";
import { CaseStudyVisual } from "@/components/common/case-study-visual";
import { Container } from "@/components/common/container";
import { FadeIn } from "@/components/common/fade-in";
import { Section } from "@/components/common/section";
import { Heading, Text } from "@/components/common/typography";
import { PageHeader } from "@/components/layout/page-header";
import { caseStudies } from "@/data";

export function WorkPage() {
  const featured = caseStudies.filter((study) => study.featured);
  const more = caseStudies.filter((study) => !study.featured);

  return (
    <>
      <PageHeader
        title="Work"
        description="Case studies across SaaS, B2B platforms, IoT, creative tooling, and community products — each focused on a real business problem."
      />

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
    </>
  );
}
