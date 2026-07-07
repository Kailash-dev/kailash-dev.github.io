import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

type AuthorPortraitProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: "size-12 text-lg",
  md: "size-20 text-2xl",
  lg: "size-28 text-4xl",
} as const;

export function AuthorPortrait({ size = "md", className }: AuthorPortraitProps) {
  return (
    <div
      className={cn(
        "bg-primary text-primary-foreground flex shrink-0 items-center justify-center rounded-2xl font-semibold tracking-tight",
        sizes[size],
        className,
      )}
      aria-hidden
    >
      {siteConfig.author.initials}
    </div>
  );
}
