// lib/slug.ts
export const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const deslugify = (s: string) =>
  s.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

// NEW: seo slug = "{course}-course-in-{city}"
export const buildSeoSlug = (courseSlug: string, cityName: string) =>
  `${courseSlug}-course-in-${slugify(cityName)}`;

export const parseSeoSlug = (
  seoSlug: string
): { courseSlug: string; citySlug: string } => {
  // Expect pattern: "<courseSlug>-course-in-<citySlug>"
  const m = seoSlug.match(/^(.+?)-course-in-(.+)$/);
  if (!m) throw new Error(`Invalid SEO slug: ${seoSlug}`);
  const courseSlug = m[1];
  const citySlug = m[2];
  return { courseSlug, citySlug };
};
