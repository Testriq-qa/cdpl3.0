import CareerSection from "@/components/manual-testing-course/CareerSection";
import ComparisonSection from "@/components/manual-testing-course/ComparisonSection";
import CurriculumSection from "@/components/manual-testing-course/CurriculumSection";
import FaqSection from "@/components/manual-testing-course/FaqSection";
import HeroManualTesting from "@/components/manual-testing-course/HeroManualTesting";
import InstructorSection from "@/components/manual-testing-course/InstructorSection";
import LearningPath from "@/components/manual-testing-course/LearningPath";
import OtherCoursesSection from "@/components/manual-testing-course/OtherCourseSection";
import ProjectsSection from "@/components/manual-testing-course/ProjectSection";
import ToolsSection from "@/components/manual-testing-course/ToolsSection";
import TrustSection from "@/components/manual-testing-course/TrustSection";
import WhyLearnSection from "@/components/manual-testing-course/WhyLearnSection";


export default function ContactPage() {
  return (
    <main className="relative min-h-[220vh]">
      <HeroManualTesting />
      <WhyLearnSection />
      <CurriculumSection />
      <ToolsSection />
      <ProjectsSection />
      <LearningPath />
      <InstructorSection />
      <CareerSection />
      <TrustSection />
      <ComparisonSection />
      <OtherCoursesSection />
      <FaqSection />
    </main>
  );
}
