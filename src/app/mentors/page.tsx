// app/testimonial_images/testimonial
import type { Metadata } from "next";
import Link from "next/link";

// components (all server by default)


import MentorHeroSection from "@/components/Sections/MentorHeroSection";
import MentorOurSection from "@/components/Sections/MentorOurSection";
import MentorProcessFlowSection from "@/components/Sections/MentorProcessFlowSection";
import MentorFAQSection from "@/components/Sections/MentorFAQSection";
import { Mentor } from "@/lib/mentorShared";

export const metadata: Metadata = {
  title: "Mentors | CDPL",
  description:
    "Meet the mentors guiding our learners across QA, Data, and Product. 1:1 mentorship, resume + interview prep, and career support.",
  alternates: { canonical: "/mentors" },
  openGraph: {
    title: "Mentors | CDPL",
    description:
      "Learn from practitioners across QA, Data, Product, and Engineering.",
    type: "website",
    url: "/mentors",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentors | CDPL",
    description:
      "Learn from practitioners across QA, Data, Product, and Engineering.",
  },
};

// Your data (kept here, passed down to the grid)
const MENTORS_DATA: Mentor[] = [
  {
    id: "pravin-mhaske",
    name: "Pravin Mhaske",
    title: "Data Science Manager",
    company: "@ Infosys (India)",
    domain: "Data Science",
    experience: "20+ yrs",
    avatar: "/testimonial_images/mentors.jpg",
    bio: "Seasoned professional with two decades across data science, analytics, and ML.",
    highlights: [
      "Led enterprise analytics programs",
      "Scaled ML in production",
      "Mentors mid-senior data talent",
    ],
    socials: [{ platform: "linkedin", url: "#" }],
  },
  {
    id: "piyali-mondal",
    name: "Piyali Mondal",
    title: "Program Leader | M.Sc (DS/AI/ML)",
    company: "@ Exeed College (UAE)",
    domain: "Data Science",
    experience: "10+ yrs",
    avatar: "/testimonial_images/mentors.jpg",
    bio: "Academician, engineering professor, and Ph.D. scholar with extensive experience.",
    highlights: ["Curriculum design", "Research mentoring", "Statistics & ML"],
    socials: [{ platform: "linkedin", url: "#" }],
  },
  {
    id: "revathi-soundarrajan",
    name: "Revathi Soundarrajan",
    title: "Data Scientist (PhD)",
    company: "@ Electra Vehicles (USA)",
    domain: "Data Science",
    experience: "10+ yrs",
    avatar: "/testimonial_images/mentors.jpg",
    bio: "Dr. S. Revathi brings rich experience in research, teaching, and applied ML across domains.",
    highlights: ["Applied ML", "Academic to industry transition", "Publications"],
    socials: [{ platform: "linkedin", url: "#" }],
  },
  {
    id: "dnyaneshwar-bhabad",
    name: "Dnyaneshwar Bhabad",
    title: "Assistant Manager – Technology",
    company: "@ Deloitte – Technology Academy (India)",
    domain: "Engineering",
    experience: "11+ yrs",
    avatar: "/testimonial_images/mentors.jpg",
    bio: "IT professional spanning software development and technical training.",
    highlights: ["Backend engineering", "Training & enablement", "Career switch guidance"],
    socials: [{ platform: "linkedin", url: "#" }],
  },
  {
    id: "abhirupa-manna",
    name: "Abhirupa Manna",
    title: "Consultant",
    company: "@ KPMG (India)",
    domain: "Data Analytics",
    experience: "5+ yrs",
    avatar: "/testimonial_images/mentors.jpg",
    bio: "Helps clients make the most of data with SQL, Tableau, Power BI, QlikView, ETL, and Python.",
    highlights: ["Dashboarding", "BI strategy", "ETL pipelines"],
    socials: [{ platform: "linkedin", url: "#" }],
  },
  {
    id: "urvi-verma",
    name: "Urvi Verma",
    title: "AVP – Data Engineering",
    company: "@ Deutsche Bank (Germany)",
    domain: "Data Engineering",
    experience: "5+ yrs",
    avatar: "/testimonial_images/mentors.jpg",
    bio: "Big data, Java, Python, SQL, and cloud (AWS/GCP).",
    highlights: ["Data platforms", "Cloud data stacks", "Streaming & batch"],
    socials: [{ platform: "linkedin", url: "#" }],
  },
  {
    id: "eshita-gangwar",
    name: "Eshita Gangwar",
    title: "Application Engineer",
    company: "@ Oracle (USA)",
    domain: "Engineering",
    experience: "5+ yrs",
    avatar: "/testimonial_images/mentors.jpg",
    bio: "USC CS graduate with hands-on software development and genomic data analysis experience.",
    highlights: ["Full-stack dev", "Data engineering for genomics", "Scalable services"],
    socials: [{ platform: "linkedin", url: "#" }],
  },
];

function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "CDPL Mentors",
    description:
      "Meet the mentors guiding learners across QA, Data, Product, and Engineering at CDPL.",
    about: "Mentorship, interview prep, career support",
    mainEntity: MENTORS_DATA.map((m) => ({
      "@type": "Person",
      name: m.name,
      jobTitle: m.title,
      worksFor: m.company?.replace("@ ", "") || undefined,
      image: m.avatar,
      url: m.socials?.find((s) => s.platform === "linkedin")?.url || undefined,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function MentorsPage() {
  return (
    <main className="relative bg-white text-slate-900">
      <StructuredData />
      <MentorHeroSection />
      <MentorOurSection mentors={MENTORS_DATA} />
      <MentorProcessFlowSection />
      <MentorFAQSection />

      {/* Optional CTA (kept simple/light) */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50">
            <div className="p-8 md:p-12 lg:p-14">
              <h2 className="text-2xl font-semibold text-slate-900">
                Start your mentorship journey
              </h2>
              <p className="mt-2 max-w-2xl text-slate-600">
                Book a free session, get a personalized roadmap, and learn by
                shipping real projects.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand,#ff8c00)] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90"
                >
                  Book a free session
                </Link>
                <Link
                  href="/events"
                  className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50"
                >
                  See upcoming events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
