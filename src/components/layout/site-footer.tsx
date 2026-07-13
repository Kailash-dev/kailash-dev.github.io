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
        className={`mx-auto flex flex-col gap-10 py-14 ${layout.container.default} ${layout.section.paddingX}`}
      >
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-lg font-semibold tracking-tight">
              {siteConfig.fullName}
            </p>
            <p className="text-muted-foreground mt-2 max-w-md text-sm leading-relaxed">
              {siteConfig.title}. {siteConfig.tagline}
            </p>
            <p className="text-muted-foreground mt-3 text-sm">
              {siteConfig.location}
            </p>
            {socialLinks.length > 0 && (
              <div className="mt-5 flex items-center gap-3">
                {socialLinks.map((link) => {
                  const Icon =
                    socialIcons[link.label as keyof typeof socialIcons];
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
            className="grid grid-cols-2 gap-x-6 gap-y-3 sm:justify-self-end"
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

        <div className="flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted-foreground text-sm">
            © {year} {siteConfig.author.name}
          </p>
          <a
            href={`mailto:${siteConfig.author.email}`}
            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            {siteConfig.author.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
