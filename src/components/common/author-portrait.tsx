"use client";

import { useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

type AuthorPortraitProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: { container: "size-12 text-lg", image: 48 },
  md: { container: "size-20 text-2xl", image: 80 },
  lg: { container: "size-28 text-4xl", image: 112 },
} as const;

export function AuthorPortrait({ size = "md", className }: AuthorPortraitProps) {
  const { author } = siteConfig;
  const dimensions = sizes[size];
  const [imageError, setImageError] = useState(false);
  const showInitials = !author.headshot || imageError;

  if (showInitials) {
    return (
      <div
        className={cn(
          "bg-primary text-primary-foreground flex shrink-0 items-center justify-center rounded-2xl font-semibold tracking-tight",
          dimensions.container,
          className,
        )}
        aria-label={`${author.name}, ${author.role}`}
        role="img"
      >
        {author.initials}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-2xl border border-border bg-muted shadow-sm",
        dimensions.container,
        className,
      )}
    >
      <Image
        src={author.headshot}
        alt={`Portrait of ${author.name}`}
        width={dimensions.image}
        height={dimensions.image}
        className="size-full object-cover"
        priority={size === "lg"}
        onError={() => setImageError(true)}
      />
    </div>
  );
}
