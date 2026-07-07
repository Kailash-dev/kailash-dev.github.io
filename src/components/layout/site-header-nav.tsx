"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { cta, navigation } from "@/constants";
import { cn } from "@/lib/utils";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
      {navigation.map((item) => {
        const isActive = pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm transition-colors",
              isActive
                ? "text-foreground font-medium"
                : "text-muted-foreground hover:text-foreground",
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function HeaderActions() {
  return (
    <div className="flex items-center gap-1">
      <ThemeToggle />
      <Button asChild size="sm" className="hidden shrink-0 md:inline-flex">
        <Link href={cta.href}>{cta.label}</Link>
      </Button>
    </div>
  );
}
