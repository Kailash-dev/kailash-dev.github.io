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
import { aboutContent } from "@/data/about";
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

          <div className="mt-16 text-center">
            <Button asChild size="lg">
              <Link href={`${cta.href}#book`}>{cta.label}</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
