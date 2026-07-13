import Link from "next/link";

import { AuthorPortrait } from "@/components/common/author-portrait";
import { Badge } from "@/components/common/badge";
import { Container } from "@/components/common/container";
import { FadeIn } from "@/components/common/fade-in";
import { Section } from "@/components/common/section";
import { Heading, Text } from "@/components/common/typography";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/page-header";
import { cta } from "@/constants";
import { aboutContent, experience } from "@/data";
import { siteConfig } from "@/config/site";

export function AboutPage() {
  return (
    <>
      <PageHeader title="About" description={aboutContent.headline} />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[auto_1fr] lg:items-start">
            <FadeIn>
              <AuthorPortrait size="lg" />
              <p className="text-muted-foreground mt-4 text-sm">
                {siteConfig.location}
              </p>
            </FadeIn>
            <FadeIn delay={0.06}>
              <div className="max-w-3xl">
                <p className="text-sm font-medium text-muted-foreground">
                  {siteConfig.author.role}
                </p>
                <Text variant="lead" className="text-muted-foreground mt-4">
                  {aboutContent.intro}
                </Text>
                <div className="mt-8 space-y-4">
                  {aboutContent.story.map((paragraph) => (
                    <Text key={paragraph} variant="muted">
                      {paragraph}
                    </Text>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section bordered muted>
        <Container>
          <FadeIn>
            <div className="max-w-2xl">
              <Heading as="h2">Available for</Heading>
              <Text variant="lead" className="text-muted-foreground mt-4">
                Ways founders and teams usually engage.
              </Text>
            </div>
          </FadeIn>
          <ul className="mt-8 flex flex-wrap gap-2">
            {aboutContent.availability.map((item) => (
              <li key={item}>
                <Badge>{item}</Badge>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeIn>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <Heading as="h2">Career path</Heading>
                <Text variant="lead" className="text-muted-foreground mt-4">
                  A short view of where the work has lived.
                </Text>
              </div>
              <Button asChild variant="outline">
                <Link href="/experience">Full experience</Link>
              </Button>
            </div>
          </FadeIn>

          <ul className="mt-12 grid gap-8 md:grid-cols-2">
            {experience.map((role, index) => (
              <li key={role.id}>
                <FadeIn delay={index * 0.05}>
                  <article className="border-t border-border pt-6">
                    <p className="text-muted-foreground text-sm tabular-nums">
                      {role.start} — {role.end}
                    </p>
                    <Heading as="h3" className="mt-2 text-lg">
                      {role.role}
                    </Heading>
                    <p className="mt-1 text-sm font-medium">{role.company}</p>
                    <Text variant="muted" className="mt-3">
                      {role.summary}
                    </Text>
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
            <div className="max-w-2xl">
              <Heading as="h2">Working style</Heading>
              <Text variant="lead" className="text-muted-foreground mt-4">
                How I approach every engagement.
              </Text>
            </div>
          </FadeIn>

          <ul className="mt-12 grid gap-8 md:grid-cols-2">
            {aboutContent.workingStyle.map((item, index) => (
              <li key={item.title}>
                <FadeIn delay={index * 0.05}>
                  <div className="border-t border-border pt-6">
                    <Heading as="h3" className="text-lg">
                      {item.title}
                    </Heading>
                    <Text variant="muted" className="mt-2">
                      {item.description}
                    </Text>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeIn>
            <div className="max-w-2xl">
              <Heading as="h2">What I bring</Heading>
              <Text variant="lead" className="text-muted-foreground mt-4">
                Capabilities across the full product lifecycle — not just one
                layer of the stack.
              </Text>
            </div>
          </FadeIn>

          <ul className="mt-8 flex flex-wrap gap-2">
            {aboutContent.capabilities.map((capability) => (
              <li key={capability}>
                <Badge>{capability}</Badge>
              </li>
            ))}
          </ul>

          <div className="mt-16 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href={`${cta.href}#book`}>{cta.label}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/work">View selected work</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
