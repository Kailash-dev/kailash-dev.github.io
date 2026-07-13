import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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

type CaseStudyPageProps = {
  slug: string;
};

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
                <Text className="text-muted-foreground">
                  {study.architecture}
                </Text>
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
    </>
  );
}
