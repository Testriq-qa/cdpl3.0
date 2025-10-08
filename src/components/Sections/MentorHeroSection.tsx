// components/Sections/MentorHeroSection.tsx  (Server Component – Light theme only)
import Image from "next/image";
import Link from "next/link";

export default function MentorHeroSection() {
  return (
    <section className="relative overflow-hidden isolate bg-white text-slate-900">
      {/* background wash */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="absolute left-1/2 top-[-6rem] h-[30rem] w-[60rem] -translate-x-1/2 rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,theme(colors.indigo.200)_0,transparent_60%)]" />
      </div>

      {/* text/content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center min-[1040px]:text-left">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur">
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: "var(--color-brand, #ff8c00)" }}
            />
            One-on-One Mentorship • Resume + Interview Prep • Placement Support
          </p>

          <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Meet CDPL’s industry mentors
          </h1>

          <p className="mt-4 mx-auto min-[1040px]:mx-0 max-w-3xl text-slate-600">
            Learn directly from CDPL mentors across <strong>Software Testing (QA)</strong>,{" "}
            <strong>Data Science &amp; AI/ML</strong>, <strong>Product</strong>, and{" "}
            <strong>Engineering</strong>. Build a job-ready portfolio with real projects, get tailored
            feedback and mock interviews, and follow a clear placement roadmap across India, UAE,
            USA, and Germany.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-700 justify-center min-[1040px]:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">200+ real projects</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">100+ datasets</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">Interview prep + mock rounds</span>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 min-[1040px]:justify-start">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              style={{ backgroundColor: "var(--color-brand, #ff8c00)" }}
              aria-label="Book a free mentorship session"
            >
              Book a free session
            </Link>
            <Link
              href="#our-mentors"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:bg-slate-50"
              aria-label="Browse mentors"
            >
              Browse mentors
            </Link>
          </div>

          {/* trust row */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm min-[1040px]:justify-start">
            <div className="inline-flex items-center gap-2">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 text-amber-500" fill="currentColor">
                <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <span className="text-slate-600">4.8/5 mentor rating</span>
            </div>
            <span className="hidden h-4 w-px bg-slate-200 min-[480px]:block" />
            <span className="text-slate-600">10,000+ session hours delivered</span>
            <span className="hidden h-4 w-px bg-slate-200 min-[480px]:block" />
            <span className="text-slate-600">Outcome-focused curriculum</span>
          </div>

          {/* SR-only keywords for SEO */}
          <p className="sr-only">
            CDPL mentorship, industry mentors, placement assistance, career guidance, ed-tech institute,
            job oriented training, hands-on projects, portfolio building, data science mentorship,
            software testing mentorship, product management coaching, engineering mentorship.
          </p>
        </div>
      </div>

      {/* ≥1040px – floating bubbles (behind content) */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden min-[1040px]:block" aria-hidden="true">
        <div className="absolute left-[12%] top-[10%] h-14 w-14 overflow-hidden rounded-full ring-2 ring-white shadow-sm">
          <Image src="/testimonial_images/testimonial.jpeg" alt="" fill className="object-cover rounded-full" />
        </div>
        <div className="absolute left-[65%] top-[18%] h-16 w-16 overflow-hidden rounded-full ring-2 ring-white shadow-sm">
          <Image src="/testimonial_images/testimonial.jpeg" alt="" fill className="object-cover rounded-full" />
        </div>
        <div className="absolute left-[78%] top-[30%] h-11 w-11 overflow-hidden rounded-full ring-2 ring-white shadow-sm">
          <Image src="/testimonial_images/testimonial.jpeg" alt="" fill className="object-cover rounded-full" />
        </div>
        <div className="absolute left-[88%] top-[12%] h-12 w-12 overflow-hidden rounded-full ring-2 ring-white shadow-sm">
          <Image src="/testimonial_images/testimonial.jpeg" alt="" fill className="object-cover rounded-full" />
        </div>

        {/* brand dots */}
        <span className="absolute left-[8%] top-[65%] h-6 w-6 rounded-full" style={{ backgroundColor: "var(--color-brand, #ff8c00)", opacity: 0.7 }} />
        <span className="absolute left-[48%] top-[40%] h-1.5 w-1.5 rounded-full bg-sky-500" />
        <span className="absolute left-[28%] top-[88%] h-1.5 w-1.5 rounded-full bg-sky-500" />
        <span className="absolute -left-6 top-[75%] h-12 w-12 rounded-full" style={{ backgroundColor: "var(--color-brand, #ff8c00)" }} />
      </div>

      {/* <1040px – avatar cloud below text */}
      <div className="relative z-0 mt-8 block min-[1040px]:hidden" aria-hidden="true">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex -space-x-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-12 w-12 overflow-hidden rounded-full ring-2 ring-white">
                  <Image
                    src="/testimonial_images/testimonial.jpeg"
                    alt=""
                    width={48}
                    height={48}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
