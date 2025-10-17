// Robust helpers
export function toKebab(input: string) {
  return input.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

export function deslugify(slug: string) {
  // Mumbai -> "Mumbai", new-delhi -> "New Delhi"
  return slug
    .split('-')
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ');
}

/** Accepts:
 * 1) <course>-course-in-<city>
 * 2) <course>-training-in-<city>
 * 3) <course>-in-<city>   (e.g., software-testing-in-mumbai)
 */
export function parseSeoSlug(seoSlug: string): { courseSlug: string; citySlug: string } {
  const s = toKebab(seoSlug);
  const patterns = [
    /^(.+?)-course-in-(.+)$/,
    /^(.+?)-training-in-(.+)$/,
    /^(.+?)-in-(.+)$/,
  ];
  for (const re of patterns) {
    const m = s.match(re);
    if (m) return { courseSlug: toKebab(m[1]), citySlug: toKebab(m[2]) };
  }
  // Fallback: last -in-
  const idx = s.lastIndexOf('-in-');
  if (idx > 0) {
    const course = s.slice(0, idx);
    const city = s.slice(idx + 4);
    if (course && city) return { courseSlug: toKebab(course), citySlug: toKebab(city) };
  }
  throw new Error(
    `Invalid SEO slug format: "${seoSlug}". Expected "<course>-in-<city>" or "<course>-course-in-<city>".`
  );
}

/** Generate your canonical slug.
 * Choose 'plain' => "<course>-in-<city>"
 * or 'course'    => "<course>-course-in-<city>"
 */
export function buildSeoSlug(
  courseSlug: string,
  cityName: string,
  variant: 'plain' | 'course' = 'plain'
) {
  const c = toKebab(courseSlug);
  const city = toKebab(cityName);
  return variant === 'course' ? `${c}-course-in-${city}` : `${c}-in-${city}`;
}
