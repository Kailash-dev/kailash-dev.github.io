import type { WritingPost } from "@/types";

/**
 * MDX-ready writing archive.
 * Add posts here (and corresponding MDX files under content/writing/) as they ship.
 * Intentionally empty — no placeholder articles.
 */
export const writingPosts: WritingPost[] = [];

export function getWritingPostBySlug(slug: string): WritingPost | undefined {
  return writingPosts.find((post) => post.slug === slug);
}
