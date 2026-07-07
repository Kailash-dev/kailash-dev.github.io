import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/common/badge";
import { Container } from "@/components/common/container";
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
          <ul className="divide-y divide-border">
            {caseStudies.map((study) => (
              <li key={study.slug}>
                <article className="group grid gap-6 py-12 md:grid-cols-[1fr_auto] md:items-center">
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
                    <ul className="mt-4 space-y-1">
                      {study.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="text-muted-foreground text-sm"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`/work/${study.slug}`}
                    className="text-foreground inline-flex items-center gap-1 text-sm font-medium whitespace-nowrap transition-colors hover:text-foreground/70"
                    aria-label={`Read case study: ${study.title}`}
                  >
                    Read case study
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
