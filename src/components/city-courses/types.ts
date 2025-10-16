/**
 * Type definitions for City-Based Course Landing Page Components
 */

// ============================================
// Common Types
// ============================================

export interface Breadcrumb {
  label: string;
  href: string;
}

export interface Company {
  id: string;
  name: string;
  logo?: string;
}

// ============================================
// Hero Section Types
// ============================================

export interface HeroSectionProps {
  courseName: string;
  cityName: string;
  courseCategory: string;
  breadcrumbs?: Breadcrumb[];
}

// ============================================
// Course Categories Types
// ============================================

export interface CourseCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
  level: string;
  studentsEnrolled: number;
  rating: number;
  href: string;
  features: string[];
}

export interface CourseCategoriesGridProps {
  cityName: string;
  mainCourse: string;
  categories: CourseCategory[];
}

// ============================================
// Key Features Types
// ============================================

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  stats?: string;
}

export interface KeyFeaturesSectionProps {
  cityName: string;
  courseName: string;
}

// ============================================
// Curriculum Types
// ============================================

export interface Module {
  id: string;
  title: string;
  duration: string;
  topics: string[];
  learningOutcomes: string[];
}

export interface CourseCurriculumSectionProps {
  courseName: string;
  cityName: string;
  modules: Module[];
}

// ============================================
// Testimonials Types
// ============================================

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
  course: string;
  batch: string;
  package?: string;
}

export interface TestimonialsSectionProps {
  cityName: string;
  courseName: string;
  testimonials: Testimonial[];
}

// ============================================
// FAQ Types
// ============================================

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface FAQSectionProps {
  cityName: string;
  courseName: string;
  faqs: FAQ[];
}

// ============================================
// Certification & Placement Types
// ============================================

export interface CertificationPlacementSectionProps {
  cityName: string;
  courseName: string;
  hiringPartners: Company[];
}

// ============================================
// Final CTA Types
// ============================================

export interface FinalCTASectionProps {
  cityName: string;
  courseName: string;
}

export interface EnrollmentFormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  preferredBatch: string;
}

// ============================================
// SEO & Metadata Types
// ============================================

export interface PageMetadata {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogImage: string;
  twitterImage: string;
}

export interface StructuredData {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  provider: {
    '@type': string;
    name: string;
    sameAs: string;
  };
  offers?: {
    '@type': string;
    category: string;
    availability: string;
  };
  hasCourseInstance?: {
    '@type': string;
    courseMode: string[];
    location: {
      '@type': string;
      address: {
        '@type': string;
        addressLocality: string;
        addressCountry: string;
      };
    };
  };
}

// ============================================
// API Response Types
// ============================================

export interface LeadSubmissionResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export interface CourseDataResponse {
  course: {
    id: string;
    name: string;
    city: string;
    categories: CourseCategory[];
    modules: Module[];
    testimonials: Testimonial[];
    faqs: FAQ[];
  };
}

// ============================================
// Form Types
// ============================================

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export interface CallbackFormData {
  name: string;
  phone: string;
  preferredTime?: string;
}

export interface DownloadSyllabusFormData {
  name: string;
  email: string;
  phone: string;
  course: string;
}

// ============================================
// Stats & Metrics Types
// ============================================

export interface Stat {
  label: string;
  value: string | number;
  icon?: string;
}

export interface PlacementStats {
  placementRate: number;
  averagePackage: string;
  highestPackage: string;
  hiringPartners: number;
  studentsPlaced: number;
}

// ============================================
// Batch & Schedule Types
// ============================================

export interface BatchSchedule {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  timing: string;
  mode: 'online' | 'offline' | 'hybrid';
  seatsAvailable: number;
  totalSeats: number;
}

export interface BatchTimingOption {
  value: string;
  label: string;
  description: string;
}

// ============================================
// Utility Types
// ============================================

export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
export type CourseMode = 'Online' | 'Offline' | 'Hybrid';
export type BatchType = 'Weekday' | 'Weekend' | 'Fast Track';

// ============================================
// Export all types
// ============================================

export type {
  Breadcrumb,
  Company,
  HeroSectionProps,
  CourseCategory,
  CourseCategoriesGridProps,
  Feature,
  KeyFeaturesSectionProps,
  Module,
  CourseCurriculumSectionProps,
  Testimonial,
  TestimonialsSectionProps,
  FAQ,
  FAQSectionProps,
  CertificationPlacementSectionProps,
  FinalCTASectionProps,
  EnrollmentFormData,
  PageMetadata,
  StructuredData,
  LeadSubmissionResponse,
  CourseDataResponse,
  ContactFormData,
  CallbackFormData,
  DownloadSyllabusFormData,
  Stat,
  PlacementStats,
  BatchSchedule,
  BatchTimingOption,
  CourseLevel,
  CourseMode,
  BatchType,
};

