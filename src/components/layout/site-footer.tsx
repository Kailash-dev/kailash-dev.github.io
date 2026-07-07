import Link from "next/link";

import { layout, navigation } from "@/constants";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div
        className={`mx-auto flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between ${layout.container.default} ${layout.section.paddingX}`}
      >
        <div>
          <p className="text-sm font-medium">{siteConfig.name}</p>
          <p className="text-sm text-muted-foreground mt-1">{siteConfig.title}</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
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

        <p className="text-sm text-muted-foreground">
          © {year} {siteConfig.author.name}
        </p>
      </div>
    </footer>
  );
}
