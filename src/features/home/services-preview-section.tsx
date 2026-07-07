import Link from "next/link";

import { FadeIn } from "@/components/common/fade-in";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { layout } from "@/constants";
import { services } from "@/data/services";

export function ServicesPreviewSection() {
  const preview = services.slice(0, 3);

  return (
    <section
      className={`border-y border-border bg-muted/30 ${layout.section.paddingY}`}
      aria-labelledby="services-heading"
    >
      <div
        className={`mx-auto ${layout.container.default} ${layout.section.paddingX}`}
      >
        <FadeIn>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2
                id="services-heading"
                className="text-3xl font-semibold tracking-tight md:text-4xl"
              >
                How I work with you
              </h2>
              <p className="text-pretty mt-4 text-lg text-muted-foreground">
                Outcome-focused engagements — from first build to scaling what
                already exists.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/services">All services</Link>
            </Button>
          </div>
        </FadeIn>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {preview.map((service, index) => (
            <li key={service.slug}>
              <FadeIn delay={index * 0.06}>
                <Card className="h-full border-border/80 bg-card shadow-xs">
                  <CardHeader>
                    <CardTitle className="text-lg font-medium">
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.audience}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-pretty text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
