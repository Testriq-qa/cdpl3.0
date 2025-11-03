// pages/digital-marketing.tsx
import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "@/components/digital-marketing-course/HeroSection";
import StatsSection from "@/components/digital-marketing-course/StatsSection";
import WhyMasterProgram from "@/components/digital-marketing-course/WhyMasterProgram";
import CurriculumSection from "@/components/digital-marketing-course/CurriculumSection";
import ProjectsSection from "@/components/digital-marketing-course/ProjectsSection";
import TestimonialsSection from "@/components/digital-marketing-course/TestimonialsSection";
import CareerSection from "@/components/digital-marketing-course/CareerSection";
import WhoShouldEnroll from "@/components/digital-marketing-course/WhoShouldEnroll";
import ToolsSection from "@/components/digital-marketing-course/ToolsSection";
import FaqSection from "@/components/digital-marketing-course/FaqSection";
import CtaSection from "@/components/digital-marketing-course/CtaSection";

const DigitalMarketingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>AI-Driven Digital Marketing & Analytics Master Program | CDPL Mumbai</title>
        <meta name="description" content="80-Hour Job-Ready Digital Marketing Course in Mumbai with AI, SEO, PPC, Google Ads, Social Media & Analytics. 100% Placement Assistance." />
        <meta name="keywords" content="digital marketing course Mumbai, AI digital marketing training, SEO course, Google Ads certification, social media marketing, digital analytics" />
      </Head>

      <HeroSection />
      <StatsSection />
      <WhyMasterProgram />
      <CurriculumSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CareerSection />
      <WhoShouldEnroll />
      <ToolsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
};

export default DigitalMarketingPage;