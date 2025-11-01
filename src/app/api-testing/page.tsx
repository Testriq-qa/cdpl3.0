import HeroSection from '@/components/api-testing/HeroSection';
import StatsSection from '@/components/api-testing/StatsSection';
import WhyApiTesting from '@/components/api-testing/WhyApiTesting';
import CurriculumSection from '@/components/api-testing/CurriculumSection';
import ProjectsSection from '@/components/api-testing/ProjectsSection';
import CareerSection from '@/components/api-testing/CareerSection';
import WhoShouldEnroll from '@/components/api-testing/WhoShouldEnroll';
import ToolsSection from '@/components/api-testing/ToolsSection';
import TestimonialsSection from '@/components/api-testing/TestimonialsSection';
import FaqSection from '@/components/api-testing/FaqSection';
import CtaSection from '@/components/api-testing/CtaSection';

// SEO Metadata
export const metadata = {
  title: "API Testing Course with POSTMAN & RestAPIs | 100% Job Placement",
  description: "Master API testing in 15 hours with live projects, global certification, and placement support. Learn POSTMAN, JSON, OAuth, and security testing.",
  keywords: "API testing course, POSTMAN training, RestAPI testing, API automation, QA jobs, placement guaranteed course",
  openGraph: {
    title: "Best API Testing Course in India",
    description: "15-Hour Master Program | 100% Placement | Global Certification",
    images: ["/og-image.jpg"]
  }
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyApiTesting />
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