import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Prefix absolute asset paths with NEXT_PUBLIC_BASE_PATH (GitHub Pages). */
export function withBasePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!basePath || !path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
