import { cn } from "@/lib/utils";

type SeparatorProps = React.HTMLAttributes<HTMLHRElement>;

export function Separator({ className, ...props }: SeparatorProps) {
  return (
    <hr
      className={cn("border-0 border-t border-border", className)}
      {...props}
    />
  );
}
