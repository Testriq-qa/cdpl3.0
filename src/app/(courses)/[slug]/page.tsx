// app/courses/[slug]/page.tsx
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import HeroSection from '@/components/city-courses/HeroSection';
import CourseCategoriesGrid from '@/components/city-courses/CourseCategoriesGrid';
import KeyFeaturesSection from '@/components/city-courses/KeyFeaturesSection';
import CourseCurriculumSection from '@/components/city-courses/CourseCurriculumSection';
import TestimonialsSection from '@/components/city-courses/TestimonialsSection';
import CertificationPlacementSection from '@/components/city-courses/CertificationPlacementSection';
import FAQSection from '@/components/city-courses/FAQSection';
import FinalCTASection from '@/components/city-courses/FinalCTASection';

import {
  getAllSeoSlugs,
  getRecordBySeoSlug,
  seoFromRecord,
} from '@/lib/cityCourseData';

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return getAllSeoSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const record = getRecordBySeoSlug(params.slug);
  return seoFromRecord(record);
}

export default function Page({ params }: PageProps) {
  const record = getRecordBySeoSlug(params.slug);
  if (!record) notFound();

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
