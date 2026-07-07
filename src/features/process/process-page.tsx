import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { Heading, Text } from "@/components/common/typography";
import { PageHeader } from "@/components/layout/page-header";
import { engagementPrinciples, processSteps } from "@/data/process";

export function ProcessPage() {
  return (
    <>
      <PageHeader
        title="Process"
        description="A structured engagement model designed for founders who value clarity, accountability, and production-ready delivery."
      />

      <Section>
        <Container>
          <div className="max-w-2xl">
            <Heading as="h2">From discovery to launch</Heading>
            <Text variant="lead" className="text-muted-foreground mt-4">
              Every project follows a clear path. You always know what&apos;s
              happening, what&apos;s next, and what success looks like.
            </Text>
          </div>

          <ol className="mt-16 space-y-0">
            {processSteps.map((step) => (
              <li
                key={step.step}
                className="grid gap-4 border-t border-border py-10 md:grid-cols-[auto_1fr] md:gap-12"
              >
                <span className="text-muted-foreground text-4xl font-semibold tabular-nums md:text-5xl">
                  {String(step.step).padStart(2, "0")}
                </span>
                <div>
                  <Heading as="h3" className="text-xl">
                    {step.title}
                  </Heading>
                  <Text variant="muted" className="mt-3">
                    {step.description}
                  </Text>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section bordered muted>
        <Container>
          <div className="max-w-2xl">
            <Heading as="h2">How we work together</Heading>
            <Text variant="lead" className="text-muted-foreground mt-4">
              Principles that keep projects on track and relationships healthy.
            </Text>
          </div>

          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            {engagementPrinciples.map((principle) => (
              <li key={principle.title} className="border-t border-border pt-6">
                <Heading as="h3" className="text-lg">
                  {principle.title}
                </Heading>
                <Text variant="muted" className="mt-2">
                  {principle.description}
                </Text>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
