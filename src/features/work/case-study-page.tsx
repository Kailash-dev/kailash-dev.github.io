import Link from "next/link";
import { notFound } from "next/navigation";

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
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="max-w-3xl">
              <CaseStudyBadge study={study} />
              <Heading as="h1" className="mt-4 text-4xl md:text-5xl">
                {study.title}
              </Heading>
              <Text variant="lead" className="text-muted-foreground mt-6">
                {study.summary}
              </Text>
              {study.liveUrl && (
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground mt-4 inline-flex text-sm font-medium underline-offset-4 hover:underline"
                >
                  Visit live site ↗
                </a>
              )}
            </div>
            <CaseStudyVisual
              visual={study.visual}
              title={study.title}
              image={study.image}
            />
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="max-w-3xl">
            <FadeIn>
              <Heading as="h2" className="text-2xl">
                The challenge
              </Heading>
              <Text className="text-muted-foreground mt-4">{study.problem}</Text>
            </FadeIn>

            <FadeIn>
              <Heading as="h2" className="mt-12 text-2xl">
                The approach
              </Heading>
              <Text className="text-muted-foreground mt-4">
                {study.approach}
              </Text>
            </FadeIn>

            <FadeIn>
              <Heading as="h2" className="mt-12 text-2xl">
                Outcomes
              </Heading>
              <ul className="mt-4 space-y-3">
                {study.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="text-muted-foreground flex gap-3 text-base"
                  >
                    <span className="text-foreground mt-1.5 size-1.5 shrink-0 rounded-full bg-foreground" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn>
              <div className="mt-12 rounded-xl border border-border bg-muted/30 p-6">
                <Text variant="small" className="text-muted-foreground">
                  {study.context}
                </Text>
                <p className="text-muted-foreground mt-4 text-xs">
                  Capabilities: {study.capabilities.join(" · ")}
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="mt-16 rounded-2xl border border-border bg-card p-8 text-center md:p-12">
                <Heading as="h2" className="text-2xl">
                  Building something similar?
                </Heading>
                <Text variant="muted" className="mx-auto mt-3 max-w-md">
                  Let&apos;s discuss your product goals and whether I can help you
                  ship with the same clarity and ownership.
                </Text>
                <Button asChild size="lg" className="mt-6">
                  <Link href={`${cta.href}#book`}>{cta.label}</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  );
}
