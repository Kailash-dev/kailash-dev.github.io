"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { AuthorPortrait } from "@/components/common/author-portrait";
import { Button } from "@/components/ui/button";
import { cta, layout } from "@/constants";
import { siteConfig } from "@/config/site";
import { fadeInUp, getMotionVariants } from "@/lib/animations";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const variants = getMotionVariants(fadeInUp, prefersReducedMotion ?? false);
  const social = [
    { label: "GitHub", href: siteConfig.author.github, icon: Github },
    { label: "LinkedIn", href: siteConfig.author.linkedin, icon: Linkedin },
  ].filter((item) => item.href.length > 0);

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="surface-glow pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="surface-grid pointer-events-none absolute inset-0 opacity-60"
        aria-hidden
      />

      <div
        className={`relative mx-auto ${layout.container.default} ${layout.section.paddingX} pt-20 pb-24 md:pt-28 md:pb-32`}
      >
        <div className="grid items-end gap-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-20">
          <div className="max-w-4xl">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={variants}
              className="text-sm font-medium tracking-wide text-muted-foreground"
            >
              {siteConfig.name}
              <span className="text-foreground/40"> · </span>
              {siteConfig.title}
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ delay: 0.05 }}
              className="text-balance mt-6 text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl xl:text-8xl"
            >
              Own the product.
              <span className="mt-2 block text-muted-foreground">
                Ship what lasts.
              </span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ delay: 0.1 }}
              className="text-pretty mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
            >
              {siteConfig.tagline} I partner with founders and teams as a senior
              engineering owner — architecture, build, and production delivery.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ delay: 0.16 }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <Button asChild size="lg">
                <Link href={`${cta.href}#book`}>Hire me</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/work">View projects</Link>
              </Button>
              {siteConfig.resumeUrl ? (
                <Button asChild variant="ghost" size="lg">
                  <a href={siteConfig.resumeUrl} download>
                    Download resume
                  </a>
                </Button>
              ) : null}
              <div className="flex items-center gap-1 sm:ml-2">
                {social.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground inline-flex size-11 items-center justify-center rounded-full transition-colors"
                      aria-label={`${siteConfig.author.name} on ${item.label}`}
                    >
                      <Icon className="size-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ delay: 0.12 }}
            className="hidden lg:block"
          >
            <AuthorPortrait size="lg" className="shadow-lg" />
            <p className="text-muted-foreground mt-4 text-sm">
              {siteConfig.location}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
