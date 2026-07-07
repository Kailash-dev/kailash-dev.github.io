import { Container } from "@/components/common/container";
import { Heading, Text } from "@/components/common/typography";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
};

export function PageHeader({
  title,
  description,
  className,
  children,
}: PageHeaderProps) {
  return (
    <div className={cn("border-b border-border py-16 md:py-20", className)}>
      <Container>
        <div className="max-w-3xl">
          <Heading as="h1" className="text-4xl md:text-5xl lg:text-6xl">
            {title}
          </Heading>
          {description && (
            <Text variant="lead" className="text-muted-foreground mt-6">
              {description}
            </Text>
          )}
          {children}
        </div>
      </Container>
    </div>
  );
}
