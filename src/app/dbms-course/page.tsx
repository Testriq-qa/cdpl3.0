import HeroSection from '@/components/dbms-course/HeroSection';
import StatsSection from '@/components/dbms-course/StatsSection';
import WhyMysqlSection from '@/components/dbms-course/WhyMysqlSection';
import CurriculumSection from '@/components/dbms-course/CurriculumSection';
import ProjectsSection from '@/components/dbms-course/ProjectsSection';
import TestimonialsSection from '@/components/dbms-course/TestimonialsSection';
import CareerSection from '@/components/dbms-course/CareerSection';
import WhoShouldEnroll from '@/components/dbms-course/WhoShouldEnroll';
import ToolsSection from '@/components/dbms-course/ToolsSection';
import FaqSection from '@/components/dbms-course/FaqSection';
import CtaSection from '@/components/dbms-course/CtaSection';

export const metadata = {
  title: "MySQL Database Course | 100% Job Placement | 20-Hour Training",
  description: "Master MySQL, SQL queries, database design, and optimization. Build real projects. Get certified and placed in top companies.",
  keywords: "MySQL course, SQL training, database management, MySQL certification, DBA jobs India",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyMysqlSection />
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