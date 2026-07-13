import { forwardRef } from "react";

import { cn } from "@/lib/utils";
import { layout } from "@/constants";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: "section" | "div";
  bordered?: boolean;
  muted?: boolean;
};

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  {
    as: Component = "section",
    bordered = false,
    muted = false,
    className,
    children,
    ...props
  },
  ref,
) {
  return (
    <Component
      ref={ref as never}
      className={cn(
        layout.section.paddingY,
        bordered && "border-y border-border",
        muted && "bg-muted/30",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
});
