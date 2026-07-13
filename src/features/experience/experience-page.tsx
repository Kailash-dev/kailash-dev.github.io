import Link from "next/link";

import { Container } from "@/components/common/container";
import { FadeIn } from "@/components/common/fade-in";
import { Section } from "@/components/common/section";
import { Heading, Text } from "@/components/common/typography";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/page-header";
import { cta } from "@/constants";
import { experience, freelanceEngagements, getCaseStudyBySlug } from "@/data";

export function ExperiencePage() {
  return (
    <>
      <PageHeader
        title="Experience"
        description="A timeline of product engineering ownership — employment, client partnerships, and systems shipped to production."
      />

      <Section>
        <Container>
          <ol className="relative">
            <div
              className="absolute top-3 bottom-3 left-[7px] w-px bg-border md:left-[11px]"
              aria-hidden
            />
            {experience.map((role, index) => (
              <li key={role.id} className="relative pl-10 md:pl-14">
                <FadeIn delay={index * 0.05}>
                  <div
                    className="bg-foreground absolute top-2 left-0 size-3.5 rounded-full ring-4 ring-background md:size-4"
                    aria-hidden
                  />
                  <article className="pb-16 last:pb-0">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                      <p className="text-muted-foreground text-sm tabular-nums">
                        {role.start} — {role.end}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {role.location}
                      </p>
                    </div>
                    <Heading as="h2" className="mt-3 text-2xl md:text-3xl">
                      {role.role}
                    </Heading>
                    <p className="mt-1 text-base font-medium">{role.company}</p>
                    <Text variant="muted" className="mt-4 max-w-3xl">
                      {role.summary}
                    </Text>

                    <ul className="mt-6 space-y-3">
                      {role.highlights.map((item) => (
                        <li
                          key={item}
                          className="text-muted-foreground flex gap-3 text-sm md:text-base"
                        >
                          <span className="bg-foreground mt-2 size-1.5 shrink-0 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {role.projects.length > 0 ? (
                      <div className="mt-8">
                        <p className="text-sm font-medium">Related work</p>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {role.projects.map((slug) => {
                            const study = getCaseStudyBySlug(slug);
                            if (!study) return null;
                            return (
                              <li key={slug}>
                                <Link
                                  href={`/work/${slug}`}
                                  className="hover:border-foreground/30 hover:text-foreground inline-flex rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors"
                                >
                                  {study.title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ) : null}
                  </article>
                </FadeIn>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section bordered muted>
        <Container>
          <FadeIn>
            <div className="max-w-2xl">
              <Heading as="h2">Independent engagements</Heading>
              <Text variant="lead" className="text-muted-foreground mt-4">
                Selected partnerships as a product engineering partner — not a
                staffing vendor.
              </Text>
            </div>
          </FadeIn>

          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            {freelanceEngagements.map((item, index) => (
              <li key={item.id}>
                <FadeIn delay={index * 0.05}>
                  <article className="border-t border-border pt-6">
                    <Heading as="h3" className="text-lg">
                      <Link
                        href={item.href}
                        className="transition-colors hover:text-foreground/80"
                      >
                        {item.name}
                      </Link>
                    </Heading>
                    <Text variant="muted" className="mt-3">
                      {item.summary}
                    </Text>
                  </article>
                </FadeIn>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center">
            <Heading as="h2" className="text-2xl md:text-3xl">
              Looking for a senior engineering partner?
            </Heading>
            <Text variant="muted" className="mx-auto mt-4 max-w-xl">
              Available for product builds, contract engagements, consulting, and
              founding-engineer conversations.
            </Text>
            <Button asChild size="lg" className="mt-8">
              <Link href={`${cta.href}#book`}>{cta.label}</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
