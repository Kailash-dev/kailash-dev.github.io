"use client";

import { Calendar } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

type CalendlyEmbedProps = {
  className?: string;
};

export function CalendlyEmbed({ className }: CalendlyEmbedProps) {
  const { calendlyUrl, author } = siteConfig;

  if (calendlyUrl) {
    return (
      <div className={className}>
        <iframe
          src={`${calendlyUrl}?hide_gdpr_banner=1&background_color=ffffff&text_color=171717&primary_color=171717`}
          title="Schedule a discovery call"
          className="h-[650px] w-full rounded-xl border border-border"
          loading="lazy"
        />
      </div>
    );
  }

  const mailtoHref = `mailto:${author.email}?subject=${encodeURIComponent("Book a discovery call")}&body=${encodeURIComponent("Hi Kailash,\n\nI'd like to schedule a discovery call to discuss:\n\n")}`;

  return (
    <div
      className={`rounded-2xl border border-border bg-card p-8 text-center md:p-12 ${className ?? ""}`}
    >
      <div className="bg-muted mx-auto flex size-14 items-center justify-center rounded-2xl">
        <Calendar className="text-foreground size-6" aria-hidden />
      </div>
      <h2 className="mt-6 text-2xl font-semibold tracking-tight">
        Book a 30-minute discovery call
      </h2>
      <p className="text-muted-foreground mx-auto mt-3 max-w-md text-pretty">
        Walk through your product goals, timeline, and constraints. No pitch —
        just a clear conversation about fit.
      </p>
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Button asChild size="lg">
          <a href={mailtoHref}>Request a call via email</a>
        </Button>
      </div>
      <p className="text-muted-foreground mt-4 text-sm">
        Prefer email?{" "}
        <a
          href={`mailto:${author.email}`}
          className="text-foreground underline-offset-4 hover:underline"
        >
          {author.email}
        </a>
      </p>
    </div>
  );
}
