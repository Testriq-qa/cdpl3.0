// pages/social-media-marketing.tsx
import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "@/components/social-media-marketing/HeroSection";
import StatsSection from "@/components/social-media-marketing/StatsSection";
import WhyMediaProgram from "@/components/social-media-marketing/WhyMediaProgram";
import CurriculumSection from "@/components/social-media-marketing/CurriculumSection";
import ProjectsSection from "@/components/social-media-marketing/ProjectsSection";
import TestimonialsSection from "@/components/social-media-marketing/TestimonialsSection";
import CareerSection from "@/components/social-media-marketing/CareerSection";
import WhoShouldEnroll from "@/components/social-media-marketing/WhoShouldEnroll";
import ToolsSection from "@/components/social-media-marketing/ToolsSection";
import CareerRoadmapSection from "@/components/social-media-marketing/CareerRoadmapSection";
import FaqSection from "@/components/social-media-marketing/FaqSection";
import CtaSection from "@/components/social-media-marketing/CtaSection";

const SocialMediaMarketing: NextPage = () => {
  return (
    <>
      <Head>
        <title>Social Media Marketing Course in Mumbai | 60-Hour Master Program | CDPL</title>
        <meta
          name="description"
          content="Best SMM course in Mumbai with 100% placement. Master Instagram, Facebook Ads, LinkedIn, TikTok. Go viral in 60 hours."
        />
        <meta
          name="keywords"
          content="social media marketing course mumbai, smm training, instagram marketing, facebook ads course, digital marketing jobs"
        />
        <link rel="canonical" href="https://www.cinutedigital.com/social-media-marketing" />
      </Head>

      <HeroSection />
      <StatsSection />
      <WhyMediaProgram />
      <CurriculumSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CareerSection />
      <WhoShouldEnroll />
      <ToolsSection />
      <CareerRoadmapSection />
      <FaqSection />
      <CtaSection />
    </>
  );
};

export default SocialMediaMarketing;