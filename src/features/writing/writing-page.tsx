import Link from "next/link";

import { Container } from "@/components/common/container";
import { FadeIn } from "@/components/common/fade-in";
import { Section } from "@/components/common/section";
import { Heading, Text } from "@/components/common/typography";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/page-header";
import { cta } from "@/constants";
import { writingPosts } from "@/data";

export function WritingPage() {
  const hasPosts = writingPosts.length > 0;

  return (
    <>
      <PageHeader
        title="Writing"
        description="Notes on product engineering, delivery, and building software that holds up in production."
      />

      <Section>
        <Container>
          {hasPosts ? (
            <ul className="divide-y divide-border border-y border-border">
              {writingPosts.map((post, index) => (
                <li key={post.slug}>
                  <FadeIn delay={index * 0.04}>
                    <article className="grid gap-3 py-8 md:grid-cols-[1fr_auto] md:items-baseline">
                      <div>
                        <Heading as="h2" className="text-2xl">
                          <Link
                            href={`/writing/${post.slug}`}
                            className="transition-colors hover:text-foreground/80"
                          >
                            {post.title}
                          </Link>
                        </Heading>
                        <Text variant="muted" className="mt-3 max-w-2xl">
                          {post.summary}
                        </Text>
                      </div>
                      <p className="text-muted-foreground text-sm tabular-nums">
                        {post.publishedAt} · {post.readingTime}
                      </p>
                    </article>
                  </FadeIn>
                </li>
              ))}
            </ul>
          ) : (
            <FadeIn>
              <div className="mx-auto max-w-2xl border-t border-border pt-12 text-center">
                <Heading as="h2" className="text-2xl md:text-3xl">
                  Essays coming soon
                </Heading>
                <Text variant="muted" className="mt-4">
                  This archive is MDX-ready. The first pieces will cover product
                  engineering judgment, delivery systems, and lessons from
                  shipping real software — not recycled developer tips.
                </Text>
                <Button asChild size="lg" className="mt-8">
                  <Link href={`${cta.href}#book`}>Talk while you wait</Link>
                </Button>
              </div>
            </FadeIn>
          )}
        </Container>
      </Section>
    </>
  );
}
