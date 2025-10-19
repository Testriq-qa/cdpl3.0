// lib/cityCourseData.ts
import type { Metadata } from 'next';
import { toKebab as slugify, deslugify } from './slug';
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
} from '@/components/city-courses/sampleData';

import { COURSE_REGISTRY } from './courseRegistry';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';

export type CityCourseRecord = {
  courseSlug: string;
  citySlug: string;
  courseDisplayName: string;
  cityDisplayName: string;
  courseCategory: string;
  breadcrumbs: Array<{ label: string; href: string }>;
  categories: ReturnType<typeof pickCategories>;
  modules: typeof SAMPLE_MODULES;
  testimonials: typeof SAMPLE_TESTIMONIALS;
  faqs: typeof SAMPLE_FAQS;
  hiringPartners: typeof HIRING_PARTNERS;
};

function pickCategories(courseSlug: keyof typeof COURSE_REGISTRY) {
  return COURSE_REGISTRY[courseSlug].categories;
}

export function getAllCityCourseParams() {
  const courseSlugs = Object.keys(COURSE_REGISTRY) as (keyof typeof COURSE_REGISTRY)[];
  const citySlugs = INDIAN_CITIES.map(slugify);
  const params: Array<{ course: string; city: string }> = [];

  courseSlugs.forEach(course => {
    citySlugs.forEach(city => {
      params.push({ course, city });
    });
  });

  return params;
}

export function getCityCourseRecord(courseParam: string, cityParam: string): CityCourseRecord {
  const courseSlug = courseParam as keyof typeof COURSE_REGISTRY;
  const courseCfg = COURSE_REGISTRY[courseSlug];
  if (!courseCfg) {
    throw new Error(`Unknown course: ${courseParam}`);
  }

  const cityDisplayName = deslugify(cityParam);
  const citySlug = slugify(cityDisplayName);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/courses' },
    { label: `${courseCfg.displayName} in ${cityDisplayName}`, href: `/courses/${courseSlug}/${citySlug}` },
  ];

  return {
    courseSlug,
    citySlug,
    courseDisplayName: courseCfg.displayName,
    cityDisplayName,
    courseCategory: courseCfg.categoryLabel,
    breadcrumbs,
    categories: pickCategories(courseSlug),
    modules: courseCfg.modules,
    testimonials: courseCfg.testimonials,
    faqs: courseCfg.faqs,
    hiringPartners: courseCfg.hiringPartners,
  };
}

export function seoFromRecord(rec: CityCourseRecord): Metadata {
  const title = generatePageTitle(rec.courseDisplayName, rec.cityDisplayName);
  const description = generatePageDescription(rec.courseDisplayName, rec.cityDisplayName);
  const keywords = generateKeywords(rec.courseDisplayName, rec.cityDisplayName);
  const canonical = generateCanonicalUrl(rec.courseDisplayName, rec.cityDisplayName, SITE_URL);

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