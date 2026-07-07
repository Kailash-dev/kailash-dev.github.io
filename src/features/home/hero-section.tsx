import Link from "next/link";

import { AuthorPortrait } from "@/components/common/author-portrait";
import { Button } from "@/components/ui/button";
import { cta, layout } from "@/constants";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section
      className={`relative overflow-hidden border-b border-border ${layout.section.paddingY}`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,oklch(0.92_0_0),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,oklch(0.2_0_0),transparent)]"
        aria-hidden
      />

      <div
        className={`relative mx-auto ${layout.container.default} ${layout.section.paddingX}`}
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground">
              {siteConfig.title}
            </p>
            <h1 className="text-balance mt-4 text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
              Own your product from idea to production
            </h1>
            <p className="text-pretty mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              {siteConfig.description}
            </p>
            <p className="text-pretty mt-4 max-w-2xl text-base text-muted-foreground">
              For founders and teams who need a senior partner — not another
              vendor — to design, build, and ship software with clarity and
              accountability.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <Link href={`${cta.href}#book`}>{cta.label}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/work">View selected work</Link>
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <AuthorPortrait size="lg" className="shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
