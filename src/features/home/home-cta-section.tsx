import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cta, layout } from "@/constants";

export function HomeCtaSection() {
  return (
    <section className={layout.section.paddingY} aria-labelledby="home-cta-heading">
      <div className={`mx-auto ${layout.container.default} ${layout.section.paddingX}`}>
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card px-8 py-12 text-center shadow-sm md:px-12 md:py-16">
          <h2 id="home-cta-heading" className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Ready to talk about your product?
          </h2>
          <p className="text-pretty mx-auto mt-4 max-w-xl text-muted-foreground">
            Book a discovery call to discuss goals, constraints, and whether we are a good fit.
            No pressure — just a clear conversation.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href={`${cta.href}#book`}>{cta.label}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
