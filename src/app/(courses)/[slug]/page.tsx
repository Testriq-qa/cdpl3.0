// app/courses/[slug]/page.tsx
import type { Metadata } from 'next';

import HeroSection from '@/src/components/city-courses/HeroSection';
import CourseCategoriesGrid from '@/src/components/city-courses/CourseCategoriesGrid';
import KeyFeaturesSection from '@/src/components/city-courses/KeyFeaturesSection';
import CourseCurriculumSection from '@/src/components/city-courses/CourseCurriculumSection';
import TestimonialsSection from '@/src/components/city-courses/TestimonialsSection';
import CertificationPlacementSection from '@/src/components/city-courses/CertificationPlacementSection';
import FAQSection from '@/src/components/city-courses/FAQSection';
import FinalCTASection from '@/src/components/city-courses/FinalCTASection';

import {
  getAllSeoSlugs,
  getRecordBySeoSlug,
  seoFromRecord,
} from '@/src/lib/cityCourseData';

type PageProps = { params: { slug: string } };

export async function generateStaticParams() {
  // builds every SEO slug (e.g. software-testing-course-in-mumbai)
  return getAllSeoSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const record = getRecordBySeoSlug(params.slug);
  return seoFromRecord(record);
}

export default function Page({ params }: PageProps) {
  const record = getRecordBySeoSlug(params.slug);

  const {
    courseDisplayName,
    cityDisplayName,
    courseCategory,
    breadcrumbs,
    categories,
    modules,
    testimonials,
    faqs,
    hiringPartners,
  } = record;

  return (
    <main>
      <HeroSection
        courseName={courseDisplayName}
        cityName={cityDisplayName}
        courseCategory={courseCategory}
        breadcrumbs={breadcrumbs}
      />

      <CourseCategoriesGrid
        cityName={cityDisplayName}
        mainCourse={courseDisplayName}
        categories={categories}
      />

      <KeyFeaturesSection cityName={cityDisplayName} courseName={courseDisplayName} />

      <CourseCurriculumSection
        courseName={courseDisplayName}
        cityName={cityDisplayName}
        modules={modules}
      />

      <TestimonialsSection
        cityName={cityDisplayName}
        courseName={courseDisplayName}
        testimonials={testimonials}
      />

      <CertificationPlacementSection
        cityName={cityDisplayName}
        courseName={courseDisplayName}
        hiringPartners={hiringPartners}
      />

      <FAQSection cityName={cityDisplayName} courseName={courseDisplayName} faqs={faqs} />

      <FinalCTASection cityName={cityDisplayName} courseName={courseDisplayName} />
    </main>
  );
}
