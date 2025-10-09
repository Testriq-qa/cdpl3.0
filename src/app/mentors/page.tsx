// app/mentors/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

// Sections (server by default)
import MentorHeroSection from "@/components/Sections/MentorHeroSection";
import MentorProcessFlowSection from "@/components/Sections/MentorProcessFlowSection";

// ✅ Client browser (filters + grid) and its type
import MentorBrowserSection, {
  type Mentor as BrowserMentor,
} from "@/components/Sections/MentorBrowserSection";
import MentorHelpCTASection from "@/components/Sections/MentorHelpCTASection";
import MentorsImpactSection from "@/components/Sections/MentorsImpactSection";
import MentorOutcomesSection from "@/components/Sections/MentorOutcomesSection";

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

// --------- Local data shape (matches what you already have) ----------
type UIMentor = {
  id: string;
  name: string;
  title: string; // maps to BrowserMentor.role
  company?: string;
  domain: string; // e.g., "Data Science", "Engineering"
  experience?: string; // e.g., "20+ yrs"
  avatar?: string; // maps to BrowserMentor.image
  bio?: string;
  highlights?: string[]; // maps to skills
  socials?: { platform: "linkedin" | string; url: string }[];
};

// Your data (kept here, passed down via a mapping)
const MENTORS_DATA: UIMentor[] = [
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

// --------- JSON-LD (uses your raw data) ----------
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

// --------- Mapping helpers (to BrowserMentor shape) ----------
function mapDomain(d: string): BrowserMentor["domain"] {
  const s = d.toLowerCase();
  if (s.includes("qa") || s.includes("test")) return "QA";
  if (s.includes("product")) return "Product";
  if (s.includes("engineer")) return "Engineering";
  if (s.includes("market")) return "Marketing";
  if (s.includes("data")) return "Data"; // covers Data Science/Analytics/Engineering
  return "Data";
}

function years(exp?: string) {
  const m = (exp ?? "").match(/\d+/);
  return m ? Number(m[0]) : 0;
}

// --------- Final list consumed by MentorBrowserSection ----------
const BROWSER_MENTORS: BrowserMentor[] = MENTORS_DATA.map((m) => ({
  id: m.id,
  name: m.name,
  role: m.title,                                   // title → role
  company: m.company?.replace(/^@\s*/, "") || undefined,
  bio: m.bio ?? "",                                // ensure string
  domain: mapDomain(m.domain),
  experienceYears: years(m.experience),
  skills: m.highlights ?? [],
  location: undefined,
  image: m.avatar ?? "/placeholder/mentor.jpg",    // ensure string
  linkedin: m.socials?.find((s) => s.platform === "linkedin")?.url || undefined,
}));

export default function MentorsPage() {
  return (
    <main className="relative bg-white text-slate-900">
      <StructuredData />

      <MentorHeroSection />
<MentorsImpactSection />
<MentorOutcomesSection/>
      {/* Brand-gradient filters + grid (client component) */}
      {/* <MentorBrowserSection mentors={BROWSER_MENTORS} /> */}

      <MentorProcessFlowSection />
      <MentorHelpCTASection />

     
    </main>
  );
}
