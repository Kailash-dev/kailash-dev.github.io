import type { Variants, Transition } from "framer-motion";

import { animation } from "@/constants";

const { duration, ease } = animation;

export const defaultTransition: Transition = {
  duration: duration.normal,
  ease: ease.outExpo,
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

export const reducedMotionTransition: Transition = {
  duration: 0,
};

export function getMotionVariants(
  variants: Variants,
  prefersReducedMotion: boolean,
): Variants {
  if (!prefersReducedMotion) {
    return variants;
  }

  return {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  };
}
