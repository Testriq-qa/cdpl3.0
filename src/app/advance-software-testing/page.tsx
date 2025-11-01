import HeroSection from '@/components/advance-software-testing/HeroSection';
import StatsSection from '@/components/advance-software-testing/StatsSection';
import WhyAdvancedTesting from '@/components/advance-software-testing/WhyAdvancedTesting';
import CurriculumSection from '@/components/advance-software-testing/CurriculumSection';
import ProjectsSection from '@/components/advance-software-testing/ProjectsSection';
import TestimonialsSection from '@/components/advance-software-testing/TestimonialsSection';
import CareerSection from '@/components/advance-software-testing/CareerSection';
import WhoShouldEnroll from '@/components/advance-software-testing/WhoShouldEnroll';
import ToolsSection from '@/components/advance-software-testing/ToolsSection';
import FaqSection from '@/components/advance-software-testing/FaqSection';
import CtaSection from '@/components/advance-software-testing/CtaSection';

export const metadata = {
  title: "Advanced Software Testing Course | SDET Training | 100% Placement",
  description: "Master Selenium, Appium, API, Cypress, and Performance Testing. Become a full-stack SDET with real projects and ISTQB certification.",
  keywords: "SDET course, Selenium training, Appium, automation testing, ISTQB certification, QA jobs India",
};

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <HeroSection />
      <StatsSection />
      <WhyAdvancedTesting />
      <CurriculumSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CareerSection />
      <WhoShouldEnroll />
      <ToolsSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}