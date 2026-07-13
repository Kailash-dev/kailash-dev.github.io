import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cta, layout } from "@/constants";
import { siteConfig } from "@/config/site";

export function HomeCtaSection() {
  return (
    <section
      className={`relative overflow-hidden ${layout.section.paddingY}`}
      aria-labelledby="home-cta-heading"
    >
      <div className="surface-glow pointer-events-none absolute inset-0" aria-hidden />
      <div
        className={`relative mx-auto ${layout.container.default} ${layout.section.paddingX}`}
      >
        <div className="mx-auto max-w-3xl border-t border-border pt-16 text-center md:pt-20">
          <p className="text-sm font-medium tracking-wide text-muted-foreground">
            Next step
          </p>
          <h2
            id="home-cta-heading"
            className="text-balance mt-4 text-3xl font-semibold tracking-tight md:text-5xl"
          >
            Building something that needs senior ownership?
          </h2>
          <p className="text-pretty mx-auto mt-5 max-w-xl text-muted-foreground md:text-lg">
            Tell me about the product, the constraints, and the outcome you need.
            If we&apos;re a fit, we&apos;ll define a clear path to production.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={`${cta.href}#book`}>{cta.label}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={`mailto:${siteConfig.author.email}`}>Email directly</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
