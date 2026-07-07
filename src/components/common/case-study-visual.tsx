import { cn } from "@/lib/utils";
import type { CaseStudyVisual } from "@/types";

const visualStyles: Record<CaseStudyVisual, string> = {
  iot: "from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900",
  portal: "from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900",
  design: "from-stone-200 to-stone-100 dark:from-stone-800 dark:to-stone-900",
  mobile: "from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900",
  commerce:
    "from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900",
  ai: "from-neutral-300/60 to-neutral-100 dark:from-neutral-700 dark:to-neutral-900",
};

type CaseStudyVisualProps = {
  visual: CaseStudyVisual;
  title: string;
  className?: string;
};

export function CaseStudyVisual({
  visual,
  title,
  className,
}: CaseStudyVisualProps) {
  return (
    <div
      className={cn(
        "relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-gradient-to-br",
        visualStyles[visual],
        className,
      )}
      role="img"
      aria-label={`Visual for ${title}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_50%)]" />
      <div className="absolute right-6 bottom-6 left-6">
        <div className="h-2 w-16 rounded-full bg-foreground/10" />
        <div className="mt-3 h-2 w-24 rounded-full bg-foreground/5" />
      </div>
    </div>
  );
}
