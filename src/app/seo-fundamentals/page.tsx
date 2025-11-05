// pages/seo-fundamentals.tsx
import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "@/components/seo-fundamentals/HeroSection";
import StatsSection from "@/components/seo-fundamentals/StatsSection";
import WhySEOProgram from "@/components/seo-fundamentals/WhySEOProgram";
import CurriculumSection from "@/components/seo-fundamentals/CurriculumSection";
import ProjectsSection from "@/components/seo-fundamentals/ProjectsSection";
import TestimonialsSection from "@/components/seo-fundamentals/TestimonialsSection";
import CareerSection from "@/components/seo-fundamentals/CareerSection";
import WhoShouldEnroll from "@/components/seo-fundamentals/WhoShouldEnroll";
import ToolsSection from "@/components/seo-fundamentals/ToolsSection";
import CareerRoadmapSection from "@/components/seo-fundamentals/CareerRoadmapSection";
import FaqSection from "@/components/seo-fundamentals/FaqSection";
import CtaSection from "@/components/seo-fundamentals/CtaSection";

const SEOFundamentals: NextPage = () => {
  return (
    <>
      <Head>
        <title>SEO Fundamentals Course in Mumbai | 40-Hour Master Program | CDPL</title>
        <meta
          name="description"
          content="Best SEO course in Mumbai with 100% placement. Learn on-page, off-page, technical SEO, AI tools. Rank #1 on Google in 40 hours."
        />
        <meta
          name="keywords"
          content="seo course mumbai, seo training institute, learn seo online, seo fundamentals, seo jobs mumbai, seo certification"
        />
        <link rel="canonical" href="https://www.cinutedigital.com/seo-fundamentals" />
        <meta property="og:title" content="SEO Fundamentals – 40-Hour Master Program" />
        <meta property="og:image" content="/seo-og.jpg" />
      </Head>

      <HeroSection />
      <StatsSection />
      <WhySEOProgram />
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

export default SEOFundamentals;