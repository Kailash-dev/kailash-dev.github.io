import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/common/badge";
import { CaseStudyVisual } from "@/components/common/case-study-visual";
import { Container } from "@/components/common/container";
import { FadeIn } from "@/components/common/fade-in";
import { Section } from "@/components/common/section";
import { Heading, Text } from "@/components/common/typography";
import { Button } from "@/components/ui/button";
import { getFeaturedCaseStudies } from "@/data";

export function SelectedWorkSection() {
  const featured = getFeaturedCaseStudies();

  return (
    <Section aria-labelledby="selected-work-heading">
      <Container>
        <FadeIn>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Heading as="h2" id="selected-work-heading">
                Selected work
              </Heading>
              <Text variant="lead" className="text-muted-foreground mt-4">
                Real products shipped across web, mobile, and IoT — focused on
                outcomes, not tech stacks.
              </Text>
            </div>
            <Button asChild variant="outline">
              <Link href="/work">View all work</Link>
            </Button>
          </div>
        </FadeIn>

        <ul className="mt-12 grid gap-8 lg:grid-cols-3">
          {featured.map((study, index) => (
            <li key={study.slug}>
              <FadeIn delay={index * 0.06}>
                <article className="group flex h-full flex-col">
                  <CaseStudyVisual
                    visual={study.visual}
                    title={study.title}
                    image={study.image}
                    className="mb-6"
                  />
                  <Badge className="w-fit">{study.category}</Badge>
                  <Heading as="h3" className="mt-4 text-xl">
                    <Link
                      href={`/work/${study.slug}`}
                      className="transition-colors hover:text-foreground/80"
                    >
                      {study.title}
                    </Link>
                  </Heading>
                  <Text variant="muted" className="mt-3 flex-1">
                    {study.summary}
                  </Text>
                  <Link
                    href={`/work/${study.slug}`}
                    className="text-foreground mt-6 inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-foreground/70"
                  >
                    Read case study
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </article>
              </FadeIn>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
