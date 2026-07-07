import { cn } from "@/lib/utils";
import { layout } from "@/constants";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: "section" | "div";
  bordered?: boolean;
  muted?: boolean;
};

export function Section({
  as: Component = "section",
  bordered = false,
  muted = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Component
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
}
