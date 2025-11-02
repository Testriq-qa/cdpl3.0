// pages/advanced-data-science-ml.tsx
import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "@/components/data-science-course/HeroSection";
import StatsSection from "@/components/data-science-course/StatsSection";
import WhyDSProgram from "@/components/data-science-course/WhyDSProgram";
import CurriculumSection from "@/components/data-science-course/CurriculumSection";
import ProjectsSection from "@/components/data-science-course/ProjectsSection";
import TestimonialsSection from "@/components/data-science-course/TestimonialsSection";
import CareerSection from "@/components/data-science-course/CareerSection";
import WhoShouldEnroll from "@/components/data-science-course/WhoShouldEnroll";
import ToolsSection from "@/components/data-science-course/ToolsSection";
import FaqSection from "@/components/data-science-course/FaqSection";
import CtaSection from "@/components/data-science-course/CtaSection";
import CareerRoadmapSection from "@/components/data-science-course/CareerRoadmapSection";

const AdvancedDSMLPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Advanced Data Science & Machine Learning Masterclass in Mumbai | 200-Hour Program | CDPL</title>
        <meta name="description" content="200-Hour Masterclass in Advanced Data Science and Machine Learning. Hands-on projects, 100% job assistance, global certificates." />
        <meta name="keywords" content="advanced data science course mumbai, machine learning masterclass, data science training mumbai, ml jobs mumbai" />
      </Head>

      <HeroSection />
      <StatsSection />
      <WhyDSProgram />
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

export default AdvancedDSMLPage;