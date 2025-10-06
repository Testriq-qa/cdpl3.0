// Export all section components for easy importing
export { default as HeroSection } from './HeroSection';
export { default as StatsSection } from './StatsSection';
export { default as FeaturedCoursesSection } from './FeaturedCoursesSection';
export { default as WhyChooseUsSection } from './WhyChooseUsSection';
export { default as TestimonialsSection } from './TestimonialsSection';
export { default as CTASection } from './CTASection';

// Type definitions for section components
export interface SectionProps {
  className?: string;
  id?: string;
}

// Common interfaces used across sections
export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  students: string;
  rating: number;
  price: string;
  originalPrice?: string;
  image: string;
  features: string[];
  icon: React.ReactNode;
  category: string;
  instructor: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  image: string;
  content: string;
  rating: number;
  course: string;
  completionDate: string;
  videoUrl?: string;
  linkedinUrl?: string;
  achievements: string[];
}

export interface StatItem {
  id: string;
  number: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  benefits: string[];
}
