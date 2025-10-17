// lib/cityCourseData.ts
import type { Metadata } from 'next';
import { slugify, deslugify, buildSeoSlug, parseSeoSlug } from './slug';
import {
  INDIAN_CITIES,
  generatePageTitle,
  generatePageDescription,
  generateKeywords,
  generateCanonicalUrl,
  SAMPLE_MODULES,
  SAMPLE_TESTIMONIALS,
  SAMPLE_FAQS,
  HIRING_PARTNERS,
} from '@/src/components/city-courses/sampleData';
import { COURSE_REGISTRY } from './courseRegistry';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';

export type CityCourseRecord = {
  seoSlug: string; // software-testing-course-in-mumbai
  courseSlug: string; // software-testing
  citySlug: string;   // mumbai
  courseDisplayName: string; // Software Testing
  cityDisplayName: string;   // Mumbai
  courseCategory: string;
  breadcrumbs: Array<{ label: string; href: string }>;
  categories: typeof COURSE_REGISTRY[keyof typeof COURSE_REGISTRY]['categories'];
  modules: typeof SAMPLE_MODULES;
  testimonials: typeof SAMPLE_TESTIMONIALS;
  faqs: typeof SAMPLE_FAQS;
  hiringPartners: typeof HIRING_PARTNERS;
};

// Build all SEO slugs
export function getAllSeoSlugs(): string[] {
  const courseSlugs = Object.keys(COURSE_REGISTRY) as (keyof typeof COURSE_REGISTRY)[];
  const cityNames = INDIAN_CITIES;
  const slugs: string[] = [];
  courseSlugs.forEach((course) => {
    cityNames.forEach((cityName) => {
      slugs.push(buildSeoSlug(course, cityName));
    });
  });
  return slugs;
}

// Core record builder from course & city
function buildRecord(courseSlug: keyof typeof COURSE_REGISTRY, cityName: string): CityCourseRecord {
  const courseCfg = COURSE_REGISTRY[courseSlug];
  if (!courseCfg) throw new Error(`Unknown course: ${courseSlug}`);

  const cityDisplayName = cityName;
  const citySlug = slugify(cityDisplayName);
  const seoSlug = buildSeoSlug(courseSlug, cityDisplayName);

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

// Public: get record by SEO slug
export function getRecordBySeoSlug(seoSlug: string): CityCourseRecord {
  const { courseSlug, citySlug } = parseSeoSlug(seoSlug);
  const courseKey = courseSlug as keyof typeof COURSE_REGISTRY;
  const cityDisplayName = deslugify(citySlug);
  return buildRecord(courseKey, cityDisplayName);
}

// SEO metadata (canonical now uses the one-piece slug)
export function seoFromRecord(rec: CityCourseRecord): Metadata {
  const title = generatePageTitle(rec.courseDisplayName, rec.cityDisplayName);
  const description = generatePageDescription(rec.courseDisplayName, rec.cityDisplayName);
  const keywords = generateKeywords(rec.courseDisplayName, rec.cityDisplayName);

  // Canonical via your helper, but path should match /courses/{seoSlug}
  // If your generateCanonicalUrl strictly expects course/city, we override URL manually:
  const canonical = `${SITE_URL}/courses/${rec.seoSlug}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
