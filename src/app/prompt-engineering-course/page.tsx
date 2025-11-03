// pages/prompt-engineering-genai.tsx
import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "@/components/prompt-engineering-course/HeroSection";
import StatsSection from "@/components/prompt-engineering-course/StatsSection";
import WhyPromptGenProgram from "@/components/prompt-engineering-course/WhyPromptGenProgram";
import CurriculumSection from "@/components/prompt-engineering-course/CurriculumSection";
import ProjectsSection from "@/components/prompt-engineering-course/ProjectsSection";
import TestimonialsSection from "@/components/prompt-engineering-course/TestimonialsSection";
import CareerSection from "@/components/prompt-engineering-course/CareerSection";
import WhoShouldEnroll from "@/components/prompt-engineering-course/WhoShouldEnroll";
import ToolsSection from "@/components/prompt-engineering-course/ToolsSection";
import FaqSection from "@/components/prompt-engineering-course/FaqSection";
import CtaSection from "@/components/prompt-engineering-course/CtaSection";
import CareerRoadmapSection from "@/components/prompt-engineering-course/CareerRoadmapSection";

const PromptGenPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Prompt Engineering with Generative AI Course in Mumbai | 20-Hour Hero Program | CDPL</title>
        <meta name="description" content="20-Hour Hero Program in Prompt Engineering with Gen AI. Hands-on projects, 100% job assistance, AAA global certificates." />
        <meta name="keywords" content="prompt engineering course mumbai, generative ai training, python gen ai, prompt hero program, ai prompt jobs mumbai" />
      </Head>

      <HeroSection />
      <StatsSection />
      <WhyPromptGenProgram />
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

export default PromptGenPage;