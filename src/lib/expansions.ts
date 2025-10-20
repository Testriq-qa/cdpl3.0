// lib/expansions.ts
import { INDIAN_CITIES } from '@/components/city-courses/sampleData';
import {  deslugify } from './slug';
import { COURSE_REGISTRY } from './courseRegistry';

export function expandCourseAcrossCities(courseSlug: keyof typeof COURSE_REGISTRY) {
  const courseDisplay = COURSE_REGISTRY[courseSlug].displayName;

  return INDIAN_CITIES.map((cityName) => {
    const citySlug = deslugify(cityName);
    return {
      courseSlug,
      courseDisplayName: courseDisplay,
      citySlug,
      cityDisplayName: cityName,
      url: `/courses/${courseSlug}/${citySlug}`,
      // SEO text examples using your helpers:
      title: `${courseDisplay} Training in ${cityName} | Best Course with 100% Placement`,
      description: `Join the best ${courseDisplay} training institute in ${cityName}. Learn with industry experts, work on real projects, and get 100% placement assistance. Enroll now!`,
    };
  });
}

// Example combined: two courses x all cities
export function expandAllCoursesAcrossCities() {
  return (Object.keys(COURSE_REGISTRY) as (keyof typeof COURSE_REGISTRY)[])
    .flatMap(expandCourseAcrossCities);
}
