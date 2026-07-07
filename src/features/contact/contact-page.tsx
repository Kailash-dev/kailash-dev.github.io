import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { Heading, Text } from "@/components/common/typography";
import { Accordion } from "@/components/ui/accordion";
import { PageHeader } from "@/components/layout/page-header";
import { siteConfig } from "@/config/site";
import { faqItems } from "@/data";
import { ContactForm } from "./contact-form";

export function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        description="Book a discovery call or send a message. I'll respond within one business day."
      />

      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <Heading as="h2" className="text-2xl">
                Start a conversation
              </Heading>
              <Text variant="muted" className="mt-3">
                Share your project goals, timeline, and constraints. I&apos;ll
                let you know if we&apos;re a good fit — honestly and quickly.
              </Text>

              <div className="mt-8 space-y-4">
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a
                    href={`mailto:${siteConfig.author.email}`}
                    className="text-muted-foreground mt-1 text-sm underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    {siteConfig.author.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium">Response time</p>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Within one business day
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">Time zones</p>
                  <p className="text-muted-foreground mt-1 text-sm">
                    US, Canada, UK, Europe, Australia
                  </p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </Section>

      <Section bordered muted aria-labelledby="faq-heading">
        <Container>
          <div className="max-w-2xl">
            <Heading as="h2" id="faq-heading">
              Frequently asked questions
            </Heading>
            <Text variant="lead" className="text-muted-foreground mt-4">
              Common questions before we work together.
            </Text>
          </div>

          <div className="mt-10 max-w-3xl">
            <Accordion items={faqItems} />
          </div>
        </Container>
      </Section>
    </>
  );
}
