import { Container } from "@/components/common/container";
import { FadeIn } from "@/components/common/fade-in";
import { Section } from "@/components/common/section";

export function TrustBarSection() {
  const brands = [
    "SAFEWORK GLOBAL",
    "VENDOR INFRA",
    "VCRAFT INNOVATIONS",
    "NEON TSS",
    "SOLAR MONITORING"
  ];

  return (
    <Section className="py-12 border-b border-border/40 bg-muted/5">
      <Container>
        <FadeIn>
          <div className="flex flex-col items-center gap-6">
            <p className="text-muted-foreground/50 text-xs font-semibold tracking-[0.2em] uppercase">
              TRUSTED BY FOUNDERS & TEAMS AT
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors text-sm font-bold tracking-widest uppercase select-none"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
