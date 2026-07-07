import { cn } from "@/lib/utils";
import { layout } from "@/constants";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: keyof typeof layout.container;
};

export function Container({
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto",
        layout.container[size],
        layout.section.paddingX,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
