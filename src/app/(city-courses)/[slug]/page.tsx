// app/courses/[slug]/page.tsx
import React from "react";
import type { Metadata } from "next";
import { courseData, type CourseData } from "@/types/courseData";

import HeroSection from "@/components/city-courses/HeroSection";
import CourseOverviewSection from "@/components/city-courses/CourseOverviewSection";
import CurriculumSection from "@/components/city-courses/CurriculumSection";
import ProjectsSection from "@/components/city-courses/ProjectsSection";
import WhyChooseSection from "@/components/city-courses/WhyChooseSection";
import CareerPathSection from "@/components/city-courses/CareerPathSection";
import FAQSection from "@/components/city-courses/FAQSection";
import CTASection from "@/components/city-courses/CTASection";
import NotFoundPage from "@/components/NotFoundPage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Helper: fetch by the object's internal `slug`
function getByInternalSlug(slug: string): CourseData | undefined {
  const key = slug.toLowerCase();
  return Object.values(courseData).find(
    (c) => c.slug.toLowerCase() === key
  );
}

// SEO metadata from the matched course
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getByInternalSlug(slug);
  if (!data) {
    return {
      title: "Course Not Found | 404",
      description: "The requested course page could not be found.",
    };
  }
  return {
    title: data.metadata.title,
    description: data.metadata.description,
    keywords: data.metadata.keywords,
    openGraph: {
      title: data.metadata.title,
      description: data.metadata.description,
      type: "website",
    },
  };
}

// Only prebuild pages using each object's internal `slug`
export async function generateStaticParams() {
  return Object.values(courseData).map((c) => ({ slug: c.slug.toLowerCase() }));
}
// Optional hard lock:
// export const dynamicParams = false;

export default async function CoursePage({ params }: PageProps) {
  const { slug } = await params;
  const data = getByInternalSlug(slug);
  
  // Show custom 404 page if course not found
  if (!data) {
    return <NotFoundPage />;
  }

  return (
    <main className="overflow-hidden">
      <HeroSection data={data} />
      <CourseOverviewSection data={data} />
      <CurriculumSection data={data} />
      <ProjectsSection data={data} />
      <WhyChooseSection data={data} />
      <CareerPathSection data={data} />
      <FAQSection data={data} />
      <CTASection data={data} />
    </main>
  );
}