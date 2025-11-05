'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Import home page components with proper naming
const HomeHeroSection = dynamic(() => import('@/components/home/HomeHeroSection'), { ssr: true });
const HomeTrustBarSection = dynamic(() => import('@/components/home/HomeTrustBarSection'), { ssr: true });
const HomeValuePropositionSection = dynamic(() => import('@/components/home/HomeValuePropositionSection'), { ssr: true });
const HomeFeaturedCoursesSection = dynamic(() => import('@/components/home/HomeFeaturedCoursesSection'), { ssr: true });
const HomeSuccessStoriesSection = dynamic(() => import('@/components/home/HomeSuccessStoriesSection'), { ssr: true });
const HomeLearningExperienceSection = dynamic(() => import('@/components/home/HomeLearningExperienceSection'), { ssr: true });
const HomePlacementSupportSection = dynamic(() => import('@/components/home/HomePlacementSupportSection'), { ssr: true });
const HomeStatsSection = dynamic(() => import('@/components/home/HomeStatsSection'), { ssr: true });
const HomeCourseCategoriesSection = dynamic(() => import('@/components/home/HomeCourseCategoriesSection'), { ssr: true });
const HomeWhyChooseSection = dynamic(() => import('@/components/home/HomeWhyChooseSection'), { ssr: true });
const HomeLatestBlogSection = dynamic(() => import('@/components/home/HomeLatestBlogSection'), { ssr: true });
const HomeFAQSection = dynamic(() => import('@/components/home/HomeFAQSection'), { ssr: true });
const HomeFinalCTASection = dynamic(() => import('@/components/home/HomeFinalCTASection'), { ssr: true });

/**
 * CDPL Home Page - Modern, SEO-Optimized, Lead Generation Focused
 * 
 * Aligned with CDPL brand identity:
 * - Orange primary color (#FF9933)
 * - Card-based design
 * - Custom illustrations
 * - Trust signals throughout
 * - Multiple lead capture points
 * 
 * @returns {React.ReactElement} Complete home page
 */
export default function HomePage(): React.ReactElement {
  return (
    <main className="relative bg-white">
      {/* 1. Hero Section with Lead Form */}
      <HomeHeroSection />
      
      {/* 2. Trust Bar - Partner Logos & Certifications */}
      <HomeTrustBarSection />
      
      {/* 3. Value Proposition - What Makes CDPL Different */}
      <HomeValuePropositionSection />
      
      {/* 4. Featured Courses - Interactive Course Cards */}
      <HomeFeaturedCoursesSection />
      
      {/* 5. Success Stories - Alumni Testimonials */}
      <HomeSuccessStoriesSection />
      
      {/* 6. Learning Experience - How We Train */}
      <HomeLearningExperienceSection />
      
      {/* 7. Placement Support - Job Assistance */}
      <HomePlacementSupportSection />
      
      {/* 8. Stats & Achievements - Animated Counters */}
      <HomeStatsSection />
      
      {/* 9. Course Categories - Visual Grid */}
      <HomeCourseCategoriesSection />
      
      {/* 10. Why Choose CDPL - Unique Benefits */}
      <HomeWhyChooseSection />
      
      {/* 11. Latest Blog - Recent Articles */}
      <HomeLatestBlogSection />
      
      {/* 12. FAQ - Common Questions */}
      <HomeFAQSection />
      
      {/* 13. Final CTA - Strong Call to Action */}
      <HomeFinalCTASection />
    </main>
  );
}
