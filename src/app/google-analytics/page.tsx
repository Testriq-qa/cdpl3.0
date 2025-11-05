// pages/google-analytics-digital-analytics.tsx
import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "@/components/google-analytics/HeroSection";
import StatsSection from "@/components/google-analytics/StatsSection";
import WhySEOProgram from "@/components/google-analytics/WhySEOProgram";
import CurriculumSection from "@/components/google-analytics/CurriculumSection";
import ProjectsSection from "@/components/google-analytics/ProjectsSection";
import TestimonialsSection from "@/components/google-analytics/TestimonialsSection";
import CareerSection from "@/components/google-analytics/CareerSection";
import WhoShouldEnroll from "@/components/google-analytics/WhoShouldEnroll";
import ToolsSection from "@/components/google-analytics/ToolsSection";
import CareerRoadmapSection from "@/components/google-analytics/CareerRoadmapSection";
import FaqSection from "@/components/google-analytics/FaqSection";
import CtaSection from "@/components/google-analytics/CtaSection";

const GoogleAnalyticsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Google Analytics Course in Mumbai | GA4 + BigQuery | 50-Hour Master Program</title>
        <meta
          name="description"
          content="Best Google Analytics course in Mumbai. Master GA4, GTM, Looker Studio, BigQuery. Google IQ + 100% placement."
        />
        <meta
          name="keywords"
          content="google analytics course mumbai, ga4 training, digital analytics certification, looker studio course, bigquery sql"
        />
        <link rel="canonical" href="https://www.cinutedigital.com/google-analytics-digital-analytics" />
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

export default GoogleAnalyticsPage;