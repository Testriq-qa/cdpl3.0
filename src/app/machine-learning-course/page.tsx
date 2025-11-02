// pages/machine-learning-data-science.tsx
import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "@/components/machine-learning-course/HeroSection";
import StatsSection from "@/components/machine-learning-course/StatsSection";
import CurriculumSection from "@/components/machine-learning-course/CurriculumSection";
import ProjectsSection from "@/components/machine-learning-course/ProjectsSection";
import TestimonialsSection from "@/components/machine-learning-course/TestimonialsSection";
import CareerSection from "@/components/machine-learning-course/CareerSection";
import WhoShouldEnroll from "@/components/machine-learning-course/WhoShouldEnroll";
import ToolsSection from "@/components/machine-learning-course/ToolsSection";
import FaqSection from "@/components/machine-learning-course/FaqSection";
import CtaSection from "@/components/machine-learning-course/CtaSection";
import CareerRoadmapSection from "@/components/machine-learning-course/CareerRoadmapSection";
import WhyMLProgram from "@/components/machine-learning-course/WhyMLProgram";

const MachineLearningPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Machine Learning & Data Science with Python Hero Program | Mumbai | CDPL</title>
        <meta name="description" content="95-Hour Hero Program in Machine Learning and Data Science with Python. Hands-on projects, 100% job assistance, global certificates." />
        <meta name="keywords" content="machine learning course mumbai, data science with python, python data science training, ml hero program, data scientist jobs mumbai" />
      </Head>

      <HeroSection />
      <StatsSection />
      <WhyMLProgram />
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

export default MachineLearningPage;