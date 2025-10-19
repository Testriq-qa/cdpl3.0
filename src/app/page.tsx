

import {
  HeroSection,
  StatsSection,
  FeaturedCoursesSection,
  WhyChooseUsSection,
  TestimonialsSection,
  FAQSection,
  CTASection,
} from '@/components/sections';


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
