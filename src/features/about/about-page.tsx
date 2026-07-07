import Link from "next/link";

import { Badge } from "@/components/common/badge";
import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { Heading, Text } from "@/components/common/typography";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/page-header";
import { cta } from "@/constants";
import { aboutContent } from "@/data/about";

export function AboutPage() {
  return (
    <>
      <PageHeader title="About" description={aboutContent.headline} />

      <Section>
        <Container>
          <div className="max-w-3xl">
            <Text variant="lead" className="text-muted-foreground">
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
        </Container>
      </Section>

      <Section bordered muted>
        <Container>
          <div className="max-w-2xl">
            <Heading as="h2">Working style</Heading>
            <Text variant="lead" className="text-muted-foreground mt-4">
              How I approach every engagement.
            </Text>
          </div>

          <ul className="mt-12 grid gap-8 md:grid-cols-2">
            {aboutContent.workingStyle.map((item) => (
              <li key={item.title} className="border-t border-border pt-6">
                <Heading as="h3" className="text-lg">
                  {item.title}
                </Heading>
                <Text variant="muted" className="mt-2">
                  {item.description}
                </Text>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-2xl">
            <Heading as="h2">What I bring</Heading>
            <Text variant="lead" className="text-muted-foreground mt-4">
              Capabilities across the full product lifecycle — not just one layer
              of the stack.
            </Text>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {aboutContent.capabilities.map((capability) => (
              <li key={capability}>
                <Badge>{capability}</Badge>
              </li>
            ))}
          </ul>

          <div className="mt-16 text-center">
            <Button asChild size="lg">
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
