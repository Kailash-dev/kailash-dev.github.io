import { Container } from "@/components/common/container";
import { FadeIn } from "@/components/common/fade-in";
import { Section } from "@/components/common/section";
import { siteConfig } from "@/config/site";

export function TrustBarSection() {
  return (
    <Section bordered className="py-12 md:py-16">
      <Container>
        <FadeIn>
          <ul className="grid gap-8 md:grid-cols-3">
            {siteConfig.trustSignals.map((signal) => (
              <li key={signal.label} className="text-center md:text-left">
                <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
                  {signal.label}
                </p>
                <p className="mt-2 text-lg font-medium tracking-tight">
                  {signal.value}
                </p>
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </Section>
  );
}
