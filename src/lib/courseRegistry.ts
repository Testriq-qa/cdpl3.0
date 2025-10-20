// lib/courseRegistry.ts
import {
  SOFTWARE_TESTING_CATEGORIES,
  DATA_SCIENCE_CATEGORIES,
  SAMPLE_MODULES,
  SAMPLE_TESTIMONIALS,
  SAMPLE_FAQS,
  HIRING_PARTNERS,
} from '@/components/city-courses/sampleData';

type CourseKey = 'software-testing' | 'data-science';

export const COURSE_REGISTRY: Record<CourseKey, {
  displayName: string;
  categoryLabel: string; // e.g. "Quality Assurance"
  categories: typeof SOFTWARE_TESTING_CATEGORIES;
  modules: typeof SAMPLE_MODULES;
  testimonials: typeof SAMPLE_TESTIMONIALS;
  faqs: typeof SAMPLE_FAQS;
  hiringPartners: typeof HIRING_PARTNERS;
}> = {
  'software-testing': {
    displayName: 'Software Testing',
    categoryLabel: 'Quality Assurance',
    categories: SOFTWARE_TESTING_CATEGORIES,
    modules: SAMPLE_MODULES,
    testimonials: SAMPLE_TESTIMONIALS,
    faqs: SAMPLE_FAQS,
    hiringPartners: HIRING_PARTNERS,
  },
  'data-science': {
    displayName: 'Data Science',
    categoryLabel: 'Data',
    categories: DATA_SCIENCE_CATEGORIES,
    modules: SAMPLE_MODULES, // reuse or swap if you have DS-specific modules
    testimonials: SAMPLE_TESTIMONIALS,
    faqs: SAMPLE_FAQS,
    hiringPartners: HIRING_PARTNERS,
  },
};
