import { cn } from "@/lib/utils";

const headingStyles = {
  h1: "text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl",
  h2: "text-3xl font-semibold tracking-tight md:text-4xl",
  h3: "text-xl font-medium md:text-2xl",
  h4: "text-lg font-medium",
} as const;

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: keyof typeof headingStyles;
};

export function Heading({
  as: Tag = "h2",
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Tag className={cn(headingStyles[Tag], className)} {...props}>
      {children}
    </Tag>
  );
}

type TextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  variant?: "default" | "lead" | "muted" | "small";
};

const textStyles = {
  default: "text-base",
  lead: "text-lg md:text-xl",
  muted: "text-muted-foreground",
  small: "text-sm text-muted-foreground",
} as const;

export function Text({
  variant = "default",
  className,
  children,
  ...props
}: TextProps) {
  return (
    <p
      className={cn("text-pretty", textStyles[variant], className)}
      {...props}
    >
      {children}
    </p>
  );
}
