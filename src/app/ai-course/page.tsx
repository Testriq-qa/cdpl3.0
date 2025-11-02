// pages/comprehensive-data-science-ai.tsx
import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "@/components/ai-course/HeroSection";
import StatsSection from "@/components/ai-course/StatsSection";
import WhyAIProgram from "@/components/ai-course/WhyAIProgram";
import CurriculumSection from "@/components/ai-course/CurriculumSection";
import ProjectsSection from "@/components/ai-course/ProjectsSection";
import TestimonialsSection from "@/components/ai-course/TestimonialsSection";
import CareerSection from "@/components/ai-course/CareerSection";
import WhoShouldEnroll from "@/components/ai-course/WhoShouldEnroll";
import ToolsSection from "@/components/ai-course/ToolsSection";
import FaqSection from "@/components/ai-course/FaqSection";
import CtaSection from "@/components/ai-course/CtaSection";
import CareerRoadmapSection from "@/components/ai-course/CareerRoadmapSection";

const ComprehensiveDSAI: NextPage = () => {
  return (
    <>
      <Head>
        <title>Comprehensive Data Science & AI Master Program in Mumbai | 255-Hour Training | CDPL</title>
        <meta name="description" content="255-Hour Master Program in Comprehensive Data Science and AI. Hands-on projects, 100% job assistance, global certificates." />
        <meta name="keywords" content="comprehensive data science course mumbai, ai master program, data science and ai training, data scientist jobs mumbai" />
      </Head>

      <HeroSection />
      <StatsSection />
      <WhyAIProgram />
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

export default ComprehensiveDSAI;