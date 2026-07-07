import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/common/badge";
import { CaseStudyVisual } from "@/components/common/case-study-visual";
import { Container } from "@/components/common/container";
import { FadeIn } from "@/components/common/fade-in";
import { Section } from "@/components/common/section";
import { Heading, Text } from "@/components/common/typography";
import { PageHeader } from "@/components/layout/page-header";
import { caseStudies } from "@/data";

export function WorkPage() {
  return (
    <>
      <PageHeader
        title="Work"
        description="Selected projects across web, mobile, and IoT — each focused on solving a real business problem with production-ready engineering."
      />

      <Section>
        <Container>
          <ul className="space-y-16">
            {caseStudies.map((study, index) => (
              <li key={study.slug}>
                <FadeIn delay={index * 0.04}>
                  <article className="group grid gap-8 lg:grid-cols-2 lg:items-center">
                    <CaseStudyVisual visual={study.visual} title={study.title} />
                    <div>
                      <Badge>{study.category}</Badge>
                      <Heading as="h2" className="mt-4 text-2xl md:text-3xl">
                        <Link
                          href={`/work/${study.slug}`}
                          className="transition-colors hover:text-foreground/80"
                        >
                          {study.title}
                        </Link>
                      </Heading>
                      <Text variant="lead" className="text-muted-foreground mt-3">
                        {study.summary}
                      </Text>
                      <ul className="mt-4 space-y-2">
                        {study.outcomes.slice(0, 2).map((outcome) => (
                          <li
                            key={outcome}
                            className="text-muted-foreground flex gap-3 text-sm"
                          >
                            <span className="text-foreground mt-1.5 size-1.5 shrink-0 rounded-full bg-foreground" />
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
    </>
  );
}
