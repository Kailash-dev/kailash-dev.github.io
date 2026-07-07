import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/common/badge";
import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { Heading, Text } from "@/components/common/typography";
import { Button } from "@/components/ui/button";
import { cta } from "@/constants";
import { getCaseStudyBySlug } from "@/data";
import { createCaseStudySchema } from "@/lib/seo";

type CaseStudyPageProps = {
  slug: string;
};

export function CaseStudyPage({ slug }: CaseStudyPageProps) {
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

      <div className="border-b border-border py-16 md:py-20">
        <Container>
          <div className="max-w-3xl">
            <Badge>{study.category}</Badge>
            <Heading as="h1" className="mt-4 text-4xl md:text-5xl">
              {study.title}
            </Heading>
            <Text variant="lead" className="text-muted-foreground mt-6">
              {study.summary}
            </Text>
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="max-w-3xl">
            <Heading as="h2" className="text-2xl">
              Overview
            </Heading>
            <Text className="text-muted-foreground mt-4">{study.description}</Text>

            <Heading as="h2" className="mt-12 text-2xl">
              Key outcomes
            </Heading>
            <ul className="mt-4 space-y-3">
              {study.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="text-muted-foreground flex gap-3 text-base"
                >
                  <span className="text-foreground mt-1.5 size-1.5 shrink-0 rounded-full bg-foreground" />
                  {highlight}
                </li>
              ))}
            </ul>

            <Heading as="h2" className="mt-12 text-2xl">
              Capabilities applied
            </Heading>
            <ul className="mt-4 flex flex-wrap gap-2">
              {study.capabilities.map((capability) => (
                <li key={capability}>
                  <Badge>{capability}</Badge>
                </li>
              ))}
            </ul>

            <div className="mt-16 rounded-2xl border border-border bg-card p-8 text-center md:p-12">
              <Heading as="h2" className="text-2xl">
                Building something similar?
              </Heading>
              <Text variant="muted" className="mx-auto mt-3 max-w-md">
                Let&apos;s discuss your product goals and whether I can help you
                ship with the same clarity and ownership.
              </Text>
              <Button asChild size="lg" className="mt-6">
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
