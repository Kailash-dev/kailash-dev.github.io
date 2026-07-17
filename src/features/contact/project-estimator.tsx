"use client";

import { useState, useMemo } from "react";
import { ArrowRight, Check, Sparkles, Clock, Layers } from "lucide-react";
import { Heading, Text } from "@/components/common/typography";
import { cn } from "@/lib/utils";
import type { ContactFormPayload } from "@/types";

type ProjectEstimatorProps = {
  onApply: (data: Partial<ContactFormPayload>) => void;
};

type ProductType = "SaaS" | "Mobile" | "IoT";
type ProjectStage = "MVP" | "Scale" | "Integration";

export function ProjectEstimator({ onApply }: ProjectEstimatorProps) {
  const [productType, setProductType] = useState<ProductType>("SaaS");
  const [stage, setStage] = useState<ProjectStage>("MVP");
  const [hasApplied, setHasApplied] = useState(false);

  const estimate = useMemo(() => {
    let duration = "6–8 weeks";
    let tech = "Next.js, Node.js, PostgreSQL, Tailwind";
    let savings = "20+ hours of manual operations / week";
    let budget = "$25k – $50k";
    let timeline = "1–3 months";

    if (productType === "SaaS") {
      if (stage === "MVP") {
        duration = "6–8 weeks";
        tech = "Next.js, Node.js, PostgreSQL, Tailwind";
        savings = "20+ operational hours saved / week";
        budget = "$10k – $25k";
        timeline = "1–3 months";
      } else if (stage === "Scale") {
        duration = "8–12 weeks";
        tech = "Next.js, Redis cache, PostgreSQL indexing, CI/CD";
        savings = "15+ developer pipeline hours saved / week";
        budget = "$25k – $50k";
        timeline = "1–3 months";
      } else {
        duration = "4–6 weeks";
        tech = "Node.js, REST APIs, Webhook integrations";
        savings = "30+ copy-paste database entries automated / week";
        budget = "Under $10k";
        timeline = "ASAP";
      }
    } else if (productType === "Mobile") {
      if (stage === "MVP") {
        duration = "8–10 weeks";
        tech = "React Native, Node.js API, JWT Session, Expo";
        savings = "Single codebase targeting iOS & Android natively";
        budget = "$25k – $50k";
        timeline = "3–6 months";
      } else if (stage === "Scale") {
        duration = "12–16 weeks";
        tech = "React Native, Redis session store, API optimization";
        savings = "99.9% mobile sync reliability SLA";
        budget = "$50k+";
        timeline = "3–6 months";
      } else {
        duration = "4–8 weeks";
        tech = "Mobile push notifications, deep links, analytics";
        savings = "Zero manual user-notifying overhead";
        budget = "$10k – $25k";
        timeline = "1–3 months";
      }
    } else if (productType === "IoT") {
      if (stage === "MVP") {
        duration = "10–12 weeks";
        tech = "Raspberry Pi OS, C/C++, Webhook gateway, Cloud portal";
        savings = "Field-ready custom image ready for manufacturing";
        budget = "$25k – $50k";
        timeline = "3–6 months";
      } else if (stage === "Scale") {
        duration = "14–18 weeks";
        tech = "Embedded OS configurations, camera analytics, telemetry logs";
        savings = "Continuous live status and failure-recovery cycles";
        budget = "$50k+";
        timeline = "3–6 months";
      } else {
        duration = "6–8 weeks";
        tech = "MotionEye captures, custom OS scripts, shell config";
        savings = "Zero manual site-logging overhead for field teams";
        budget = "$10k – $25k";
        timeline = "1–3 months";
      }
    }

    return { duration, tech, savings, budget, timeline };
  }, [productType, stage]);

  const handleApply = () => {
    onApply({
      budget: estimate.budget,
      timeline: estimate.timeline,
      message: `Hi Kailash,\n\nI used your Project Estimator to scope our work:\n- Product: ${productType} (${stage})\n- Projected Timeline: ${estimate.duration}\n- Recommended Stack: ${estimate.tech}\n\nLet's schedule a call to review details.`,
    });
    setHasApplied(true);
    setTimeout(() => setHasApplied(false), 3000);
  };

  return (
    <div className="rounded-xl border border-border bg-card p-6 md:p-8 relative overflow-hidden">
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      <div className="relative z-10 space-y-6">
        <div>
          <Heading as="h3" className="text-xl font-bold tracking-tight flex items-center gap-2">
            <Sparkles className="size-4 text-emerald-500" />
            Project Estimator
          </Heading>
          <Text variant="small" className="mt-1">
            Toggle your scope preferences to estimate timeline and stack parameters.
          </Text>
        </div>

        {/* Product Type Toggle */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
            Product Platform
          </label>
          <div className="grid grid-cols-3 gap-1.5 bg-muted/40 p-1 rounded-lg border border-border/30">
            {(["SaaS", "Mobile", "IoT"] as ProductType[]).map((t) => (
              <button
                key={t}
                onClick={() => setProductType(t)}
                className={cn(
                  "rounded-md py-1.5 text-xs font-medium transition-all focus:outline-none",
                  productType === t
                    ? "bg-foreground text-background shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Project Stage Toggle */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
            Scope Type
          </label>
          <div className="grid grid-cols-3 gap-1.5 bg-muted/40 p-1 rounded-lg border border-border/30">
            {(["MVP", "Scale", "Integration"] as ProjectStage[]).map((s) => (
              <button
                key={s}
                onClick={() => setStage(s)}
                className={cn(
                  "rounded-md py-1.5 text-xs font-medium transition-all focus:outline-none",
                  stage === s
                    ? "bg-foreground text-background shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {s === "Scale" ? "Scaling" : s}
              </button>
            ))}
          </div>
        </div>

        {/* Calculations Results card */}
        <div className="rounded-lg bg-muted/30 border border-border/30 p-5 space-y-4">
          <div className="flex items-center gap-3">
            <span className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-500">
              <Clock className="size-4" />
            </span>
            <div>
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider block">
                Projected Duration
              </span>
              <span className="text-sm font-bold text-foreground">{estimate.duration}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-500">
              <Layers className="size-4" />
            </span>
            <div>
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider block">
                Recommended Architecture
              </span>
              <span className="text-xs text-foreground font-medium line-clamp-1">{estimate.tech}</span>
            </div>
          </div>

          <div className="pt-3 border-t border-border/20">
            <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider block">
              Business Outcome Focus
            </span>
            <span className="text-xs text-muted-foreground font-medium italic block mt-1">
              {estimate.savings}
            </span>
          </div>
        </div>

        <button
          onClick={handleApply}
          className={cn(
            "w-full flex items-center justify-center gap-2 rounded-lg py-2.5 px-4 text-xs font-medium transition-all focus:outline-none shadow-sm",
            hasApplied
              ? "bg-emerald-500 text-white hover:bg-emerald-600"
              : "bg-foreground text-background hover:bg-foreground/90"
          )}
        >
          {hasApplied ? (
            <>
              <Check className="size-3.5" />
              Prefilled Successfully!
            </>
          ) : (
            <>
              Apply Estimate to Contact Form
              <ArrowRight className="size-3.5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
