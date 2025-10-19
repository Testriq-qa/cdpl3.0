import type { Metadata } from 'next';
import { buildSeoSlug, parseSeoSlug, deslugify } from './slug';
import {
  INDIAN_CITIES,
  generatePageTitle,
  generatePageDescription,
  generateKeywords,
  SAMPLE_MODULES,
  SAMPLE_FAQS,
  HIRING_PARTNERS,
  SAMPLE_TESTIMONIALS,
} from '@/components/city-courses/sampleData';
import { COURSE_REGISTRY } from './courseRegistry';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';

export type CityCourseRecord = {
  seoSlug: string;
  courseSlug: string;
  citySlug: string;
  courseDisplayName: string;
  cityDisplayName: string;
  courseCategory: string;
  breadcrumbs: Array<{ label: string; href: string }>;
  categories: typeof COURSE_REGISTRY[keyof typeof COURSE_REGISTRY]['categories'];
  modules: typeof SAMPLE_MODULES;
  testimonials: typeof SAMPLE_TESTIMONIALS;
  faqs: typeof SAMPLE_FAQS;
  hiringPartners: typeof HIRING_PARTNERS;
};

// ------------- Build all SEO slugs (pick your canonical variant once) -------------
const CANONICAL_VARIANT: 'plain' | 'course' = 'plain'; // switch to 'course' if you prefer

export function getAllSeoSlugs(): string[] {
  const courseSlugs = Object.keys(COURSE_REGISTRY) as (keyof typeof COURSE_REGISTRY)[];
  const cityNames = INDIAN_CITIES; // Display names like 'Mumbai', 'New Delhi', etc.
  const slugs: string[] = [];
  courseSlugs.forEach((course) => {
    cityNames.forEach((cityName) => {
      slugs.push(buildSeoSlug(course, cityName, CANONICAL_VARIANT));
    });
  });
  return slugs;
}

// ------------- Core record builder -------------
function buildRecord(courseSlug: keyof typeof COURSE_REGISTRY, cityName: string): CityCourseRecord {
  const courseCfg = COURSE_REGISTRY[courseSlug];
  if (!courseCfg) throw new Error(`Unknown course: ${courseSlug}`);

  const cityDisplayName = cityName;
  const citySlug = cityName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const seoSlug = buildSeoSlug(courseSlug, cityDisplayName, CANONICAL_VARIANT);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/courses' },
    { label: `${courseCfg.displayName} in ${cityDisplayName}`, href: `/courses/${seoSlug}` },
  ];

  return {
    seoSlug,
    courseSlug,
    citySlug,
    courseDisplayName: courseCfg.displayName,
    cityDisplayName,
    courseCategory: courseCfg.categoryLabel,
    breadcrumbs,
    categories: courseCfg.categories,
    modules: courseCfg.modules,
    testimonials: courseCfg.testimonials,
    faqs: courseCfg.faqs,
    hiringPartners: courseCfg.hiringPartners,
  };
}

// ------------- Public lookups -------------
export function getRecordBySeoSlug(seoSlug: string): CityCourseRecord | null {
  let parsed;
  try {
    parsed = parseSeoSlug(seoSlug);
  } catch {
    return null; // bad format -> let the route 404
  }

  const courseKey = parsed.courseSlug as keyof typeof COURSE_REGISTRY;
  const courseCfg = COURSE_REGISTRY[courseKey];
  if (!courseCfg) return null; // unknown course -> 404

  const cityDisplayName = deslugify(parsed.citySlug);
  return buildRecord(courseKey, cityDisplayName);
}

export function seoFromRecord(rec: CityCourseRecord | null): Metadata {
  if (!rec) {
    return {
      title: 'Course not found',
      description: 'The requested course or city was not found.',
      robots: { index: false, follow: false },
    };
  }

  const title = generatePageTitle(rec.courseDisplayName, rec.cityDisplayName);
  const description = generatePageDescription(rec.courseDisplayName, rec.cityDisplayName);
  const keywords = generateKeywords(rec.courseDisplayName, rec.cityDisplayName);
  const canonical = `${SITE_URL}/courses/${rec.seoSlug}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, type: 'website' },
    twitter: { card: 'summary_large_image', title, description },
  };
}