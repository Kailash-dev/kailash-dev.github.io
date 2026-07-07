import Link from "next/link";

import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";
import { cta, layout, navigation } from "@/constants";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div
        className={`mx-auto flex h-16 items-center justify-between ${layout.container.default} ${layout.section.paddingX}`}
      >
        <Link href="/" className="text-sm font-semibold tracking-tight">
          {siteConfig.name}
          <span className="text-muted-foreground font-normal">
            {" "}
            — {siteConfig.title}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden shrink-0 md:inline-flex">
            <Link href={cta.href}>{cta.label}</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
