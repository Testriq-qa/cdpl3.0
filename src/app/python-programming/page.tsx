// pages/python-programming.tsx
import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "@/components/python-programming/HeroSection";
import StatsSection from "@/components/python-programming/StatsSection";
import WhyPythonProgram from "@/components/python-programming/WhyPythonProgram";
import CurriculumSection from "@/components/python-programming/CurriculumSection";
import ProjectsSection from "@/components/python-programming/ProjectsSection";
import CareerSection from "@/components/python-programming/CareerSection";
import WhoShouldEnroll from "@/components/python-programming/WhoShouldEnroll";
import ToolsSection from "@/components/python-programming/ToolsSection";
import CareerRoadmapSection from "@/components/python-programming/CareerRoadmapSection";
import FaqSection from "@/components/python-programming/FaqSection";
import CtaSection from "@/components/python-programming/CtaSection";

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