export const navigation = [
  { label: "Work", href: "/work" },
  { label: "Experience", href: "/experience" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Writing", href: "/writing" },
  { label: "Contact", href: "/contact" },
] as const;

export const cta = {
  label: "Book a Call",
  href: "/contact",
  anchor: "/contact#book",
} as const;

export const animation = {
  duration: {
    fast: 0.15,
    normal: 0.25,
    slow: 0.4,
  },
  ease: {
    outExpo: [0.16, 1, 0.3, 1] as const,
    inOut: [0.4, 0, 0.2, 1] as const,
  },
} as const;

export const layout = {
  container: {
    narrow: "max-w-2xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
  },
  section: {
    paddingY: "py-24 md:py-32",
    paddingX: "px-6 md:px-8",
  },
} as const;
