'use client';

import React from 'react';
import {
  HeroSection,
  StatsSection,
  FeaturedCoursesSection,
  WhyChooseUsSection,
  TestimonialsSection,
  FAQSection,
  CTASection,
} from '@/components/sections';

export default function HomePage(): React.ReactElement {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturedCoursesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}