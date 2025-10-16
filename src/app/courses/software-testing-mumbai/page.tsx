import HeroSection from '@/components/city-courses/HeroSection';
import CourseCategoriesGrid from '@/components/city-courses/CourseCategoriesGrid';
import KeyFeaturesSection from '@/components/city-courses/KeyFeaturesSection';
import CourseCurriculumSection from '@/components/city-courses/CourseCurriculumSection';
import TestimonialsSection from '@/components/city-courses/TestimonialsSection';
import CertificationPlacementSection from '@/components/city-courses/CertificationPlacementSection';
import FAQSection from '@/components/city-courses/FAQSection';
import FinalCTASection from '@/components/city-courses/FinalCTASection';

import {
  SOFTWARE_TESTING_CATEGORIES,
  SAMPLE_MODULES,
  SAMPLE_TESTIMONIALS,
  SAMPLE_FAQS,
  HIRING_PARTNERS
} from '@/components/city-courses/sampleData';

import type { Metadata } from 'next';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Software Testing Training in Mumbai | Best QA Course',
  description: 'Join the best Software Testing training in Mumbai with 100% placement assistance.',
};

export default function Page() {
  return (
    <main>
      <HeroSection
        courseName="Software Testing"
        cityName="Mumbai"
        courseCategory="Quality Assurance"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Courses', href: '/courses' },
          { label: 'Software Testing in Mumbai', href: '#' }
        ]}
      />

      <CourseCategoriesGrid
        cityName="Mumbai"
        mainCourse="Software Testing"
        categories={SOFTWARE_TESTING_CATEGORIES}
      />

      <KeyFeaturesSection
        cityName="Mumbai"
        courseName="Software Testing"
      />

      <CourseCurriculumSection
        courseName="Software Testing"
        cityName="Mumbai"
        modules={SAMPLE_MODULES}
      />

      <TestimonialsSection
        cityName="Mumbai"
        courseName="Software Testing"
        testimonials={SAMPLE_TESTIMONIALS}
      />

      <CertificationPlacementSection
        cityName="Mumbai"
        courseName="Software Testing"
        hiringPartners={HIRING_PARTNERS}
      />

      <FAQSection
        cityName="Mumbai"
        courseName="Software Testing"
        faqs={SAMPLE_FAQS}
      />

      <FinalCTASection
        cityName="Mumbai"
        courseName="Software Testing"
      />
    </main>
  );
}