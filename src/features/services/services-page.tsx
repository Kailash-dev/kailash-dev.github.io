import Link from "next/link";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { Heading, Text } from "@/components/common/typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageHeader } from "@/components/layout/page-header";
import { cta } from "@/constants";
import { services } from "@/data";
import { Button } from "@/components/ui/button";

export function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        description="Outcome-focused engagements for founders and teams who need reliable product engineering — from first build to scaling what already exists."
      />

      <Section>
        <Container>
          <ul className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Card className="h-full border-border/80 bg-card shadow-xs flex flex-col justify-between">
                  <div>
                    <CardHeader>
                      <CardTitle className="text-xl font-medium">
                        {service.title}
                      </CardTitle>
                      <CardDescription>{service.audience}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-pretty text-muted-foreground">
                        {service.description}
                      </p>
                    </CardContent>
                  </div>
                  <div className="px-6 pb-6 pt-0 flex items-center justify-between gap-4">
                    {service.price ? (
                      <span className="text-xs font-semibold text-muted-foreground">
                        {service.price}
                      </span>
                    ) : <div />}
                    <Button asChild variant="outline" size="sm" className="w-fit">
                      <Link href={`/contact?service=${encodeURIComponent(service.title)}#book`}>
                        Discuss this service
                      </Link>
                    </Button>
                  </div>
                </Card>
              </li>
            ))}
          </ul>

          <div className="mt-16 rounded-2xl border border-border bg-muted/30 p-8 text-center md:p-12">
            <Heading as="h2" className="text-2xl">
              Not sure which fits?
            </Heading>
            <Text variant="muted" className="mx-auto mt-3 max-w-lg">
              Book a discovery call. We&apos;ll discuss your goals and find the
              right engagement model — no obligation.
            </Text>
            <Button asChild size="lg" className="mt-6">
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
