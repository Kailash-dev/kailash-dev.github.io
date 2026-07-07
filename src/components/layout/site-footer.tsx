import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

import { getAuthorSocialLinks, siteConfig } from "@/config/site";
import { layout, navigation } from "@/constants";

const socialIcons = {
  LinkedIn: Linkedin,
  GitHub: Github,
} as const;

export function SiteFooter() {
  const year = new Date().getFullYear();
  const socialLinks = getAuthorSocialLinks();

  return (
    <footer className="border-t border-border">
      <div
        className={`mx-auto flex flex-col gap-8 py-12 ${layout.container.default} ${layout.section.paddingX}`}
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-medium">{siteConfig.fullName}</p>
            <p className="text-muted-foreground mt-1 text-sm">
              {siteConfig.title}
            </p>
            {socialLinks.length > 0 && (
              <div className="mt-4 flex items-center gap-3">
                {socialLinks.map((link) => {
                  const Icon = socialIcons[link.label as keyof typeof socialIcons];
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`${siteConfig.author.name} on ${link.label}`}
                    >
                      <Icon className="size-4" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          <nav
            className="flex flex-wrap gap-x-6 gap-y-2"
            aria-label="Footer"
          >
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
        </div>

        <p className="text-muted-foreground text-sm">
          © {year} {siteConfig.author.name}
        </p>
      </div>
    </footer>
  );
}
