import { Container } from "@/components/common/container";
import { FadeIn } from "@/components/common/fade-in";
import { Section } from "@/components/common/section";
import { Heading, Text } from "@/components/common/typography";
import { capabilityDomains } from "@/data";

export function CapabilitiesSection() {
  return (
    <Section aria-labelledby="capabilities-heading">
      <Container>
        <FadeIn>
          <div className="max-w-2xl">
            <Heading as="h2" id="capabilities-heading">
              Capabilities
            </Heading>
            <Text variant="lead" className="text-muted-foreground mt-4">
              Not a logo wall — domains I use to take products from idea to
              production.
            </Text>
          </div>
        </FadeIn>

        <ul className="mt-14 grid gap-10 md:grid-cols-2">
          {capabilityDomains.map((domain, index) => (
            <li key={domain.title}>
              <FadeIn delay={index * 0.05}>
                <article className="border-t border-border pt-6">
                  <Heading as="h3" className="text-xl">
                    {domain.title}
                  </Heading>
                  <Text variant="muted" className="mt-3">
                    {domain.description}
                  </Text>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {domain.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
