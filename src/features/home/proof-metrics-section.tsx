"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { proofSignals } from "@/data";
import { fadeInUp, getMotionVariants } from "@/lib/animations";

function AnimatedValue({
  value,
  active,
}: {
  value: string;
  active: boolean;
}) {
  const [display, setDisplay] = useState(value);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const match = value.match(/^(\d+)(\+?)$/);
    if (!active || !match || prefersReducedMotion) {
      setDisplay(value);
      return;
    }

    const target = Number(match[1]);
    const suffix = match[2] ?? "";
    const durationMs = 900;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(`${Math.round(target * eased)}${suffix}`);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, prefersReducedMotion, value]);

  return <span className="tabular-nums">{display}</span>;
}

export function ProofMetricsSection() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const variants = getMotionVariants(fadeInUp, prefersReducedMotion ?? false);

  return (
    <Section
      ref={ref}
      bordered
      className="py-14 md:py-16"
      aria-labelledby="proof-metrics-heading"
    >
      <Container>
        <h2 id="proof-metrics-heading" className="sr-only">
          Experience snapshot
        </h2>
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {proofSignals.map((signal, index) => (
            <li key={signal.label}>
              <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                transition={{ delay: index * 0.06 }}
              >
                <p className="text-3xl font-semibold tracking-tight md:text-4xl">
                  <AnimatedValue value={signal.value} active={inView} />
                </p>
                <p className="mt-2 text-sm font-medium">{signal.label}</p>
                <p className="text-muted-foreground mt-1 text-sm">
                  {signal.detail}
                </p>
              </motion.div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
