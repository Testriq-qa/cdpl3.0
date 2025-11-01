import HeroSection from '@/components/etl-testing/HeroSection';
import StatsSection from '@/components/etl-testing/StatsSection';
import WhyEtlTesting from '@/components/etl-testing/WhyEtlTesting';
import CurriculumSection from '@/components/etl-testing/CurriculumSection';
import ProjectsSection from '@/components/etl-testing/ProjectsSection';
import TestimonialsSection from '@/components/etl-testing/TestimonialsSection';
import CareerSection from '@/components/etl-testing/CareerSection';
import WhoShouldEnroll from '@/components/etl-testing/WhoShouldEnroll';
import ToolsSection from '@/components/etl-testing/ToolsSection';
import FaqSection from '@/components/etl-testing/FaqSection';
import CtaSection from '@/components/etl-testing/CtaSection';

export const metadata = {
  title: "ETL Testing Course | 100% Job Placement | 18-Hour Training",
  description: "Master ETL testing with SQL, data validation, and real projects. Get certified and placed in top data companies.",
  keywords: "ETL testing course, data validation, SQL for ETL, ETL tester jobs, data quality testing",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyEtlTesting />
      <CurriculumSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CareerSection />
      <WhoShouldEnroll />
      <ToolsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}