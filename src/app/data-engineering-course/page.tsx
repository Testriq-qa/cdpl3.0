// pages/big-data-engineering.tsx
import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "@/components/data-engineering-course/HeroSection";
import StatsSection from "@/components/data-engineering-course/StatsSection";
import WhyDataProgram from "@/components/data-engineering-course/WhyDataProgram";
import CurriculumSection from "@/components/data-engineering-course/CurriculumSection";
import ProjectsSection from "@/components/data-engineering-course/ProjectsSection";
import TestimonialsSection from "@/components/data-engineering-course/TestimonialsSection";
import CareerSection from "@/components/data-engineering-course/CareerSection";
import WhoShouldEnroll from "@/components/data-engineering-course/WhoShouldEnroll";
import ToolsSection from "@/components/data-engineering-course/ToolsSection";
import FaqSection from "@/components/data-engineering-course/FaqSection";
import CtaSection from "@/components/data-engineering-course/CtaSection";
import CareerRoadmapSection from "@/components/data-engineering-course/CareerRoadmapSection";

const BigDataEngineeringPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Big Data Engineering Course in Mumbai | 95-Hour Hero Program | CDPL</title>
        <meta name="description" content="95-Hour Big Data Engineering Master Program with Hadoop, Spark, Kafka. 100% job assistance, global certification, real-time projects." />
        <meta name="keywords" content="big data engineering course mumbai, hadoop spark training, kafka certification, data engineer jobs mumbai, cloud data pipeline" />
      </Head>

      <HeroSection />
      <StatsSection />
      <WhyDataProgram />
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

export default BigDataEngineeringPage;