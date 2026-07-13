import Link from "next/link";

import { MobileNav } from "@/components/layout/mobile-nav";
import { DesktopNav, HeaderActions } from "@/components/layout/site-header-nav";
import { layout } from "@/constants";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div
        className={`mx-auto flex h-16 items-center justify-between gap-4 ${layout.container.default} ${layout.section.paddingX}`}
      >
        <Link
          href="/"
          className="shrink-0 text-sm font-semibold tracking-tight"
        >
          {siteConfig.name}
          <span className="text-muted-foreground hidden font-normal lg:inline">
            {" "}
            — {siteConfig.title}
          </span>
        </Link>

        <DesktopNav />

        <div className="flex items-center gap-1">
          <HeaderActions />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
