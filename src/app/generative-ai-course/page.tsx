// pages/deep-learning-nlp-genai.tsx
import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "@/components/generative-ai-course/HeroSection";
import StatsSection from "@/components/generative-ai-course/StatsSection";
import WhyGenAIProgram from "@/components/generative-ai-course/WhyGenAIProgram";
import CurriculumSection from "@/components/generative-ai-course/CurriculumSection";
import ProjectsSection from "@/components/generative-ai-course/ProjectsSection";
import TestimonialsSection from "@/components/generative-ai-course/TestimonialsSection";
import CareerSection from "@/components/generative-ai-course/CareerSection";
import WhoShouldEnroll from "@/components/generative-ai-course/WhoShouldEnroll";
import ToolsSection from "@/components/generative-ai-course/ToolsSection";
import FaqSection from "@/components/generative-ai-course/FaqSection";
import CtaSection from "@/components/generative-ai-course/CtaSection";
import CareerRoadmapSection from "@/components/generative-ai-course/CareerRoadmapSection";

const DeepLearningPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Deep Learning, NLP & Generative AI Course in Mumbai | 55-Hour Hero Program | CDPL</title>
        <meta name="description" content="55-Hour Hero Program in Deep Learning, NLP, and Generative AI with Python. Hands-on projects, 100% job assistance, global certificates from AAA." />
        <meta name="keywords" content="deep learning course mumbai, nlp training, generative ai with python, ai hero program, ai jobs mumbai" />
      </Head>

      <HeroSection />
      <StatsSection />
      <WhyGenAIProgram />
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

export default DeepLearningPage;