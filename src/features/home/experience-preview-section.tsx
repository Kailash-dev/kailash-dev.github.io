import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { FadeIn } from "@/components/common/fade-in";
import { Section } from "@/components/common/section";
import { Heading, Text } from "@/components/common/typography";
import { Button } from "@/components/ui/button";
import { experience } from "@/data";

export function ExperiencePreviewSection() {
  return (
    <Section bordered muted aria-labelledby="experience-preview-heading">
      <Container>
        <FadeIn>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Heading as="h2" id="experience-preview-heading">
                Experience
              </Heading>
              <Text variant="lead" className="text-muted-foreground mt-4">
                Nearly seven years owning product engineering — from device UIs
                and IoT platforms to SaaS and B2B systems in production.
              </Text>
            </div>
            <Button asChild variant="outline">
              <Link href="/experience">Full timeline</Link>
            </Button>
          </div>
        </FadeIn>

        <ol className="relative mt-14 space-y-0">
          <div
            className="absolute top-2 bottom-2 left-[7px] w-px bg-border md:left-[11px]"
            aria-hidden
          />
          {experience.map((role, index) => (
            <li key={role.id} className="relative pl-10 md:pl-14">
              <FadeIn delay={index * 0.06}>
                <div
                  className="bg-foreground absolute top-2 left-0 size-3.5 rounded-full ring-4 ring-background md:size-4"
                  aria-hidden
                />
                <article className="pb-12 last:pb-0">
                  <p className="text-muted-foreground text-sm tabular-nums">
                    {role.start} — {role.end}
                  </p>
                  <Heading as="h3" className="mt-2 text-xl md:text-2xl">
                    {role.role}
                  </Heading>
                  <p className="mt-1 text-sm font-medium">{role.company}</p>
                  <Text variant="muted" className="mt-4 max-w-2xl">
                    {role.summary}
                  </Text>
                </article>
              </FadeIn>
            </li>
          ))}
        </ol>

        <FadeIn>
          <Link
            href="/experience"
            className="text-foreground mt-4 inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-foreground/70"
          >
            See roles, projects & freelance work
            <ArrowRight className="size-4" />
          </Link>
        </FadeIn>
      </Container>
    </Section>
  );
}
