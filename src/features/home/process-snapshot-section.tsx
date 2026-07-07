import Link from "next/link";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { Heading, Text } from "@/components/common/typography";
import { Button } from "@/components/ui/button";
import { processSteps } from "@/data/process";

export function ProcessSnapshotSection() {
  const preview = processSteps.slice(0, 3);

  return (
    <Section bordered muted aria-labelledby="process-snapshot-heading">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Heading as="h2" id="process-snapshot-heading">
              How engagements work
            </Heading>
            <Text variant="lead" className="text-muted-foreground mt-4">
              A clear path from first conversation to production — no ambiguity,
              no surprises.
            </Text>
          </div>
          <Button asChild variant="outline">
            <Link href="/process">Full process</Link>
          </Button>
        </div>

        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {preview.map((step) => (
            <li key={step.step} className="border-t border-border pt-6">
              <span className="text-muted-foreground text-sm font-medium tabular-nums">
                Step {step.step}
              </span>
              <Heading as="h3" className="mt-2 text-lg">
                {step.title}
              </Heading>
              <Text variant="muted" className="mt-2">
                {step.description}
              </Text>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
