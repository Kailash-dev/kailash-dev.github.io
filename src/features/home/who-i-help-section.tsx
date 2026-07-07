import { layout } from "@/constants";

const audiences = [
  {
    title: "Startup founders",
    description: "MVPs and v1 products with clear scope, steady delivery, and production-ready foundations.",
  },
  {
    title: "SaaS teams",
    description: "Feature development, integrations, and reliability work on existing codebases.",
  },
  {
    title: "Agencies & businesses",
    description: "A technical partner who can own delivery end-to-end without constant hand-holding.",
  },
] as const;

export function WhoIHelpSection() {
  return (
    <section className={layout.section.paddingY} aria-labelledby="who-i-help-heading">
      <div className={`mx-auto ${layout.container.default} ${layout.section.paddingX}`}>
        <div className="max-w-2xl">
          <h2 id="who-i-help-heading" className="text-3xl font-semibold tracking-tight md:text-4xl">
            Who I help
          </h2>
          <p className="text-pretty mt-4 text-lg text-muted-foreground">
            Decision makers who need a trusted engineering partner — not a résumé or a rate card.
          </p>
        </div>

        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {audiences.map((item) => (
            <li key={item.title} className="border-t border-border pt-6">
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-pretty mt-2 text-muted-foreground">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
