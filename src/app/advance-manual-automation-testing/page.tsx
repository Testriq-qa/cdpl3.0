import HeroSection from '@/components/advance-manual-automation-testing/HeroSection';
import StatsSection from '@/components/advance-manual-automation-testing/StatsSection';
import WhyMasterProgram from '@/components/advance-manual-automation-testing/WhyMasterProgram';
import CurriculumSection from '@/components/advance-manual-automation-testing/CurriculumSection';
import ProjectsSection from '@/components/advance-manual-automation-testing/ProjectsSection';
import TestimonialsSection from '@/components/advance-manual-automation-testing/TestimonialsSection';
import CareerSection from '@/components/advance-manual-automation-testing/CareerSection';
import WhoShouldEnroll from '@/components/advance-manual-automation-testing/WhoShouldEnroll';
import ToolsSection from '@/components/advance-manual-automation-testing/ToolsSection';
import FaqSection from '@/components/advance-manual-automation-testing/FaqSection';
import CtaSection from '@/components/advance-manual-automation-testing/CtaSection';

export const metadata = {
  title: "Advanced Manual & Automation Testing Master Program | 100% Placement",
  description: "Master ISTQB Manual Testing + Selenium, Cypress, API, Mobile. Get dual certified and placed in top QA roles.",
  keywords: "manual testing course, automation testing, ISTQB certification, Selenium training, QA jobs India, SDET course",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyMasterProgram />
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