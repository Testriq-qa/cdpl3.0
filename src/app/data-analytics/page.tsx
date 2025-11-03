// pages/advanced-data-analytics.tsx
import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "@/components/data-analytics/HeroSection";
import StatsSection from "@/components/data-analytics/StatsSection";
import WhyAnalyticsProgram from "@/components/data-analytics/WhyAnalyticsProgram";
import CurriculumSection from "@/components/data-analytics/CurriculumSection";
import ProjectsSection from "@/components/data-analytics/ProjectsSection";
import TestimonialsSection from "@/components/data-analytics/TestimonialsSection";
import CareerSection from "@/components/data-analytics/CareerSection";
import WhoShouldEnroll from "@/components/data-analytics/WhoShouldEnroll";
import ToolsSection from "@/components/data-analytics/ToolsSection";
import FaqSection from "@/components/data-analytics/FaqSection";
import CtaSection from "@/components/data-analytics/CtaSection";
import CareerRoadmapSection from "@/components/data-analytics/CareerRoadmapSection";

const AdvancedDataAnalyticsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Advanced Data Analytics Hero Program | 110-Hour Training | Mumbai | CDPL</title>
        <meta name="description" content="110-Hour Hero Program in Advanced Data Analytics. Hands-on projects in Power BI, Tableau, Python, SQL. 100% job assistance, global certificates." />
        <meta name="keywords" content="advanced data analytics course mumbai, data analytics hero program, power bi training, tableau course, data analyst jobs mumbai" />
      </Head>

      <HeroSection />
      <StatsSection />
      <WhyAnalyticsProgram />
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

export default AdvancedDataAnalyticsPage;