import { Container } from "@/components/common/container";
import { FadeIn } from "@/components/common/fade-in";
import { Section } from "@/components/common/section";
import { Heading, Text } from "@/components/common/typography";
import { testimonials } from "@/data/testimonials";

export function ClientQuotesSection() {
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <Section bordered muted aria-labelledby="client-quotes-heading">
      <Container>
        <FadeIn>
          <div className="max-w-2xl">
            <Heading as="h2" id="client-quotes-heading">
              What clients say
            </Heading>
            <Text variant="lead" className="text-muted-foreground mt-4">
              Feedback from founders and teams I&apos;ve partnered with.
            </Text>
          </div>
        </FadeIn>

        <ul className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <li key={`${item.author}-${item.company}-${index}`}>
              <FadeIn delay={index * 0.06}>
                <figure className="flex h-full flex-col border-t border-border pt-6">
                  <blockquote className="text-pretty flex-1 text-base leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6">
                    <p className="text-sm font-medium">{item.author}</p>
                    <p className="text-muted-foreground text-sm">
                      {item.role}, {item.company}
                    </p>
                  </figcaption>
                </figure>
              </FadeIn>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
