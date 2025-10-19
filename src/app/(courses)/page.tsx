// app/courses/page.tsx
import Link from 'next/link';
import { getAllSeoSlugs } from '@/lib/cityCourseData';
import { parseSeoSlug, deslugify } from '@/lib/slug';
import { COURSE_REGISTRY } from '@/lib/courseRegistry';

export default function CoursesIndex() {
  const slugs = getAllSeoSlugs();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">All Courses by City</h1>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {slugs.map((s) => {
          const { courseSlug, citySlug } = parseSeoSlug(s);
          const courseName = COURSE_REGISTRY[courseSlug as keyof typeof COURSE_REGISTRY]?.displayName ?? courseSlug;
          const cityName = deslugify(citySlug);
          return (
            <li key={s}>
              <Link className="text-blue-600 hover:underline" href={`/courses/${s}`}>
                {courseName} in {cityName}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
