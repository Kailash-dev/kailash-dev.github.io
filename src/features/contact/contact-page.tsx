"use client";

import { useState, Suspense } from "react";
import { CalendlyEmbed } from "@/components/common/calendly-embed";
import { Container } from "@/components/common/container";
import { FadeIn } from "@/components/common/fade-in";
import { Section } from "@/components/common/section";
import { Heading, Text } from "@/components/common/typography";
import { Accordion } from "@/components/ui/accordion";
import { PageHeader } from "@/components/layout/page-header";
import { siteConfig } from "@/config/site";
import { faqItems } from "@/data";
import { ContactForm } from "./contact-form";
import { ProjectEstimator } from "./project-estimator";
import type { ContactFormPayload } from "@/types";

export function ContactPage() {
  const [prefill, setPrefill] = useState<Partial<ContactFormPayload> | null>(null);

  return (
    <>
      <PageHeader
        title="Contact"
        description="Book a discovery call or send a message. I'll respond within one business day."
      />

      <Section id="book">
        <Container>
          <FadeIn>
            <CalendlyEmbed />
          </FadeIn>
        </Container>
      </Section>

      <Section bordered muted>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Interactive Scope Calculator */}
            <div className="space-y-8">
              <FadeIn>
                <ProjectEstimator onApply={(data) => setPrefill(data)} />
              </FadeIn>

              {/* Minimalist direct email backup info */}
              <FadeIn delay={0.05}>
                <div className="rounded-xl border border-border bg-card/10 p-6 space-y-4">
                  <Heading as="h4" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Direct Correspondence
                  </Heading>
                  <div className="grid grid-cols-2 gap-4 text-xs md:text-sm">
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a
                        href={`mailto:${siteConfig.author.email}`}
                        className="text-muted-foreground mt-0.5 block underline-offset-4 hover:text-foreground hover:underline"
                      >
                        {siteConfig.author.email}
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Time Zones</p>
                      <p className="text-muted-foreground mt-0.5">US, EU, UK, AU & India</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <FadeIn delay={0.08}>
              <div className="rounded-xl border border-border bg-card p-6 md:p-8">
                <div className="mb-6">
                  <Heading as="h3" className="text-xl font-bold tracking-tight">
                    Prefer to write?
                  </Heading>
                  <Text variant="small" className="mt-1">
                    Share your requirements directly below. I will analyze and respond in 24 hours.
                  </Text>
                </div>
                <Suspense
                  fallback={
                    <div className="h-64 flex items-center justify-center text-sm text-muted-foreground">
                      Loading contact form...
                    </div>
                  }
                >
                  <ContactForm prefill={prefill} />
                </Suspense>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="faq-heading">
        <Container>
          <FadeIn>
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
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
