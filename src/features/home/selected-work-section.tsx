import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { CaseStudyBadge } from "@/components/common/case-study-badge";
import { CaseStudyVisual } from "@/components/common/case-study-visual";
import { Container } from "@/components/common/container";
import { FadeIn } from "@/components/common/fade-in";
import { Section } from "@/components/common/section";
import { Heading, Text } from "@/components/common/typography";
import { Button } from "@/components/ui/button";
import { getFeaturedCaseStudies } from "@/data";

export function SelectedWorkSection() {
  const featured = getFeaturedCaseStudies();
  const [primary, ...rest] = featured;

  if (!primary) {
    return null;
  }

  return (
    <Section aria-labelledby="selected-work-heading">
      <Container>
        <FadeIn>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Heading as="h2" id="selected-work-heading">
                Selected work
              </Heading>
              <Text variant="lead" className="text-muted-foreground mt-4">
                Products shipped for founders and operators — told through
                problem, approach, and outcomes.
              </Text>
            </div>
            <Button asChild variant="outline">
              <Link href="/work">All case studies</Link>
            </Button>
          </div>
        </FadeIn>

        <FadeIn>
          <article className="group mt-14 grid gap-10 border-t border-border pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <CaseStudyVisual
              visual={primary.visual}
              title={primary.title}
              image={primary.image}
              className="transition-transform duration-500 group-hover:scale-[1.01]"
            />
            <div>
              <CaseStudyBadge study={primary} />
              <Heading as="h3" className="mt-4 text-3xl md:text-4xl">
                <Link
                  href={`/work/${primary.slug}`}
                  className="transition-colors hover:text-foreground/80"
                >
                  {primary.title}
                </Link>
              </Heading>
              <Text variant="muted" className="mt-4 text-base md:text-lg">
                {primary.summary}
              </Text>
              <ul className="mt-6 space-y-2">
                {primary.outcomes.slice(0, 3).map((outcome) => (
                  <li
                    key={outcome}
                    className="text-muted-foreground flex gap-3 text-sm"
                  >
                    <span className="bg-foreground mt-1.5 size-1.5 shrink-0 rounded-full" />
                    {outcome}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={`/work/${primary.slug}`}
                  className="text-foreground inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-foreground/70"
                >
                  Read case study
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                {primary.liveUrl ? (
                  <a
                    href={primary.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground inline-flex items-center gap-1 text-sm transition-colors hover:text-foreground"
                  >
                    Live site
                    <ArrowUpRight className="size-3.5" />
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        </FadeIn>

        {rest.length > 0 ? (
          <ul className="mt-16 grid gap-10 border-t border-border pt-12 md:grid-cols-2">
            {rest.map((study, index) => (
              <li key={study.slug}>
                <FadeIn delay={index * 0.06}>
                  <article className="group flex h-full flex-col">
                    <CaseStudyVisual
                      visual={study.visual}
                      title={study.title}
                      image={study.image}
                      className="mb-6 transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                    <CaseStudyBadge study={study} />
                    <Heading as="h3" className="mt-4 text-2xl">
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
        ) : null}
      </Container>
    </Section>
  );
}
