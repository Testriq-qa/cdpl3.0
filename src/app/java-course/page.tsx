// pages/java-programming.tsx
import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "@/components/java-course/HeroSection";
import StatsSection from "@/components/java-course/StatsSection";
import WhyJavaProgram from "@/components/java-course/WhyJavaProgram";
import CurriculumSection from "@/components/java-course/CurriculumSection";
import ProjectsSection from "@/components/java-course/ProjectsSection";
import CareerSection from "@/components/java-course/CareerSection";
import WhoShouldEnroll from "@/components/java-course/WhoShouldEnroll";
import ToolsSection from "@/components/java-course/ToolsSection";
import CareerRoadmapSection from "@/components/java-course/CareerRoadmapSection";
import FaqSection from "@/components/java-course/FaqSection";
import CtaSection from "@/components/java-course/CtaSection";

const JavaPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Java Programming Course in Mumbai | 80-Hour Job-Ready Training | CDPL</title>
        <meta name="description" content="Best Java course in Mumbai with Core Java, Spring Boot, Microservices, AWS. 100% placement. Live projects, global certificate." />
        <meta name="keywords" content="java course mumbai, core java training, spring boot course, java full stack, java developer course, java certification mumbai" />
      </Head>

      <HeroSection />
      <StatsSection />
      <WhyJavaProgram />
      <CurriculumSection />
      <ProjectsSection />
      <CareerSection />
      <WhoShouldEnroll />
      <ToolsSection />
      <CareerRoadmapSection />
      <FaqSection />
      <CtaSection />
    </>
  );
};

export default JavaPage;