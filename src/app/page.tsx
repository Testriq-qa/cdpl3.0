
import { Suspense } from 'react';
import {
  HeroSection,
  StatsSection,
  FeaturedCoursesSection,
  WhyChooseUsSection,
  TestimonialsSection,
  FAQSection,
  CTASection,
} from '@/components/sections';

// Loading component for better UX
const SectionLoading = ({ className }: { className?: string }) => (
  <div className={`animate-pulse ${className}`}>
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="h-8 bg-gray-200 rounded-lg mb-4 w-3/4 mx-auto"></div>
        <div className="h-4 bg-gray-200 rounded-lg mb-8 w-1/2 mx-auto"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// export default function HomePage() {
//   return (
//     <main className="min-h-screen bg-white overflow-x-hidden">
//       {/* Hero Section - Above the fold, load immediately */}
//       <Suspense fallback={<SectionLoading className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900" />}>
//         <HeroSection />
//       </Suspense>

//       {/* Stats Section - High priority, load early */}
//       <Suspense fallback={<SectionLoading className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" />}>
//         <StatsSection />
//       </Suspense>

//       {/* Featured Courses Section - Core content, high priority */}
//       <Suspense fallback={<SectionLoading className="bg-gradient-to-br from-white via-blue-50 to-indigo-100" />}>
//         <FeaturedCoursesSection />
//       </Suspense>

//       {/* Why Choose Us Section - Important for conversion */}
//       <Suspense fallback={<SectionLoading className="bg-gradient-to-br from-gray-50 via-white to-blue-50" />}>
//         <WhyChooseUsSection />
//       </Suspense>

//       {/* Testimonials Section - Social proof, can load later */}
//       <Suspense fallback={<SectionLoading className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900" />}>
//         <TestimonialsSection />
//       </Suspense>

//       {/* CTA Section - Final conversion point */}
//       <Suspense fallback={<SectionLoading className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900" />}>
//         <CTASection />
//       </Suspense>
//     </main>
//   );
// }

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturedCoursesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
