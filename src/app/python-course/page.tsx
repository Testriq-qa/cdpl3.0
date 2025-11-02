// pages/python-programming.tsx
import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "@/components/python-course/HeroSection";
import StatsSection from "@/components/python-course/StatsSection";
import WhyPythonProgram from "@/components/python-course/WhyPythonProgram";
import CurriculumSection from "@/components/python-course/CurriculumSection";
import ProjectsSection from "@/components/python-course/ProjectsSection";
import CareerSection from "@/components/python-course/CareerSection";
import WhoShouldEnroll from "@/components/python-course/WhoShouldEnroll";
import ToolsSection from "@/components/python-course/ToolsSection";
import CareerRoadmapSection from "@/components/python-course/CareerRoadmapSection";
import FaqSection from "@/components/python-course/FaqSection";
import CtaSection from "@/components/python-course/CtaSection";

const PythonPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Python Programming Course in Mumbai | 80-Hour Job-Ready Training | CDPL</title>
        <meta name="description" content="Best Python course in Mumbai with Django, Data Science, ML, Automation. 100% placement. Live projects, global certificate." />
        <meta name="keywords" content="python course mumbai, python training, django course, data science python, python job guarantee, python certification mumbai" />
      </Head>

      <HeroSection />
      <StatsSection />
      <WhyPythonProgram />
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

export default PythonPage;