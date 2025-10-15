// Centralized data source for city/course landing pages
// Conforms exactly to the interfaces provided by the user

import { Url } from "next/dist/shared/lib/router/router";

// ===== Interfaces from your code (kept verbatim for local type safety) =====
export interface CourseDetails {
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  eligibility: string;
  modules: CourseModule[];
  features: string[];
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  topics: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  city: string;
  course: string;
  rating: number; // 1-5
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CityPageProps {
  courseSlug: string; // e.g., 'software-testing'
  citySlug: string; // e.g., 'mumbai'
  courseName: string; // e.g., 'Software Testing'
  cityName: string; // e.g., 'Mumbai'
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonicalUrl: string;
  };
  hero: {
    headline: string;
    subHeadline: string;
    ctaText: string;
    ctaLink: string;
    backgroundImage: string;
  };
  courseDetails: CourseDetails;
  testimonials: Testimonial[];
  faqs: FAQItem[];
  leadForm: {
    title: string;
    description: string;
    fields: LeadFormField[];
    submitButtonText: string;
  };
  // Add other sections as needed
}

export interface LeadFormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'select';
  placeholder?: string;
  required: boolean;
  options?: string[]; // For select type
}

// Component-specific interfaces (optional, can be derived from CityPageProps)
export interface HeroSectionProps {
  headline: string;
  subHeadline: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
  leadFormTitle: string;
  leadFormDescription: string;
  leadFormFields: LeadFormField[];
  leadFormSubmitButtonText: string;
}

export interface CourseOverviewProps {
  courseName: string;
  cityName: string;
  details: CourseDetails;
}

export interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export interface FAQSectionProps {
  faqs: FAQItem[];
}

export interface LeadFormSectionProps {
  title: string;
  description: string;
  fields: LeadFormField[];
  submitButtonText: string;
}


// ===== City master data (single source) =====
export const CITIES: Record<string, CityData> = {
  mumbai: {
    slug: "it-training-service-in-mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    metadata: {
      title: "IT & Training Services in Mumbai | Developer_Jayesh",
      description: "Premium software training, QA bootcamps, and development services in Mumbai.",
      keywords: "Mumbai software training, QA courses Mumbai, IT services Mumbai",
    },
    heroContent: {
      title: "Build your tech career in Mumbai",
      subtitle: "Hands-on courses • Job-ready skills",
      description: "Learn from industry experts with real projects and interview prep.",
      certifications: ["ISTQB", "AWS CCP", "Scrum Fundamentals"],
      stats: [
        { number: "10k+", label: "Learners", description: "Alumni across India" },
        { number: "94%", label: "Placement", description: "Within 90 days" },
        { number: "120+", label: "Hiring Partners", description: "Top product firms" },
      ],
      landmarks: ["Gateway of India", "BKC", "Powai"]
    },
    servicesContent: {
      title: "Popular Services in Mumbai",
      description: "From beginner bootcamps to advanced upskilling.",
      subtitle: "Trending now",
      services: [
        {
          icon: "Bug",
          trending: true,
          name: "Manual Software Testing",
          description: "Master fundamentals, test design, and defect management.",
          features: ["ISTQB-aligned", "Live projects", "Interview prep"],
          link: "/courses/manual-software-testing" as unknown as Url,
        },
        {
          icon: "Cpu",
          trending: true,
          name: "Automation Testing (Selenium)",
          description: "UI automation with Java + TestNG + Jenkins.",
          features: ["Frameworks", "CI/CD", "Best practices"],
          link: "/courses/automation-testing" as unknown as Url,
        },
      ],
    },
    processContent: {
      title: "How we work",
      subtitle: "Clear steps to outcomes",
      steps: [
        { number: "01", title: "Assess", description: "Skill-gap analysis & roadmap.", deliverables: ["Skill report"] },
        { number: "02", title: "Train", description: "Live sessions & labs.", deliverables: ["Recordings", "Assignments"] },
        { number: "03", title: "Build", description: "Capstone projects with reviews.", deliverables: ["GitHub portfolio"] },
        { number: "04", title: "Place", description: "Mock interviews & referrals.", deliverables: ["Offer support"] },
      ],
    },
    toolsFrameworkContent: {
      title: "Tools & Frameworks",
      description: "Learn the stack used by pros.",
      stats: {
        projectsCompleted: "650+",
        clientSatisfaction: "4.8/5",
        supportAvailable: "24x7",
        yearsExperience: "8+",
      },
    },
    whyChooseContent: {
      title: "Why choose us",
      subtitle: "Outcome-first learning",
      reasons: [
        { icon: "CheckCircle2", title: "Industry mentors", stats: "40+", description: "Mentors from FAANG & startups." },
        { icon: "Trophy", title: "Placement support", stats: "94%", description: "Dedicated career services." },
        { icon: "Layers", title: "Projects", stats: "3+", description: "Capstones per course." },
      ],
      testimonial: { text: "Got my QA role in 2 months!", author: "A. Shah", company: "FinTech Co.", rating: 5 },
    },
    caseStudiesContent: {
      title: "Impact stories",
      description: "Real outcomes from Mumbai learners",
      subtitle: "From zero to job-ready",
      studies: [
        { company: "PayWave", industry: "Fintech", challenge: "Manual to automation", results: ["95% coverage", "CI pipeline"] },
      ],
    },
    trendingServicesContent: {
      title: "Trending in Mumbai",
      description: "High-demand programs",
      subtitle: "Enroll this month",
      services: [
        { name: "API Testing", trending: true, description: "Postman + Newman pipelines.", citySpecific: "BKC startups", benefits: ["Faster QA"], technologies: ["Postman", "Newman"] },
      ],
    },
    faqsContent: {
      title: "FAQs",
      subtitle: "Common questions",
      faqs: [
        { question: "Do you provide recordings?", answer: "Yes, lifetime access." },
        { question: "Is there job assistance?", answer: "Yes, with referrals & mock interviews." },
      ],
    },
    ctaContent: {
      title: "Start learning today",
      description: "Join the next cohort in Mumbai.",
      subtitle: "Limited seats",
      benefits: ["Scholarships", "No-cost EMIs"],
      contactInfo: { phone: "+91-90000-00000", email: "hello@mumbai.dev", address: "Powai, Mumbai" },
    },
    industries: ["Fintech", "Media", "E-commerce"],
  },
  delhi: {
    slug: "delhi",
    name: "Delhi",
    state: "Delhi NCR",
    metadata: {
      title: "IT & Training Services in Delhi | Developer_Jayesh",
      description: "Project-driven tech courses and consulting in Delhi.",
      keywords: "Delhi QA course, test automation Delhi, software training NCR",
    },
    heroContent: {
      title: "Upgrade your skills in Delhi",
      subtitle: "Flexible schedules • Expert mentors",
      description: "Evening & weekend batches available.",
      certifications: ["ISTQB", "Azure Fundamentals"],
      stats: [
        { number: "6k+", label: "Learners", description: "From NCR" },
        { number: "100+", label: "Partners", description: "Hiring network" },
      ],
      landmarks: ["India Gate", "Connaught Place"]
    },
    servicesContent: {
      title: "Top picks in Delhi",
      description: "Most enrolled this quarter",
      subtitle: "Hot courses",
      services: [
        {
          icon: "Bug",
          trending: true,
          name: "Manual Software Testing",
          description: "End-to-end QA fundamentals.",
          features: ["ISTQB-ready", "Live defects", "Resume help"],
          link: "/courses/manual-software-testing" as unknown as Url,
        },
      ],
    },
    processContent: {
      title: "Learning journey",
      subtitle: "Simple and effective",
      steps: [
        { number: "01", title: "Onboard", description: "Orientation & tooling." },
        { number: "02", title: "Practice", description: "Case studies & sprints." },
        { number: "03", title: "Showcase", description: "Portfolio review." },
      ],
    },
    toolsFrameworkContent: {
      title: "What you use",
      description: "Modern QA stack",
      stats: { projectsCompleted: "420+", clientSatisfaction: "4.7/5", supportAvailable: "Mon–Sun", yearsExperience: "7+" },
    },
    whyChooseContent: {
      title: "Learner-first",
      subtitle: "Quality training",
      reasons: [
        { icon: "Users", title: "Small cohorts", stats: "20", description: "More 1:1 time." },
        { icon: "ClipboardCheck", title: "Cert prep", stats: "ISTQB", description: "Syllabus aligned." },
      ],
      testimonial: { text: "Loved the projects!", author: "R. Mehta", company: "Edutech", rating: 5 },
    },
    caseStudiesContent: {
      title: "Case studies",
      description: "Highlights from NCR",
      subtitle: "Practical wins",
      studies: [
        { company: "ShopKart", industry: "Retail", challenge: "QA leakages", results: ["30% fewer bugs", "Release on time"] },
      ],
    },
    trendingServicesContent: {
      title: "Now trending",
      description: "Skills in demand",
      subtitle: "Delhi NCR",
      services: [
        { name: "Mobile App Testing", trending: true, description: "Device labs & Appium.", citySpecific: "Gurugram startups", benefits: ["Better app QoS"], technologies: ["Appium", "ADB"] },
      ],
    },
    faqsContent: {
      title: "FAQs",
      subtitle: "Ask us anything",
      faqs: [
        { question: "Weekend batches?", answer: "Yes, Sat–Sun." },
        { question: "Placement?", answer: "Yes, assistance included." },
      ],
    },
    ctaContent: {
      title: "Join Delhi cohort",
      description: "Applications open",
      subtitle: "Next batch soon",
      contactInfo: { phone: "+91-90000-00001", email: "hello@delhi.dev", address: "Connaught Place, New Delhi" },
    },
    industries: ["GovTech", "Retail", "Logistics"],
  },
  bangalore: {
    slug: "bangalore",
    name: "Bengaluru",
    state: "Karnataka",
    metadata: {
      title: "IT & Training Services in Bengaluru | Developer_Jayesh",
      description: "Project-based QA & dev programs in BLR.",
      keywords: "Bangalore software testing, QA course Bengaluru",
    },
    heroContent: {
      title: "Level up in Bengaluru",
      subtitle: "Project-first • Mentor-led",
      description: "Learn with peers in India’s tech hub.",
      certifications: ["ISTQB", "Git Essentials"],
      stats: [
        { number: "8k+", label: "Alumni", description: "Across BLR" },
        { number: "150+", label: "Partners", description: "Product & SaaS" },
      ],
    },
    servicesContent: {
      title: "BLR favorites",
      description: "Best for starters",
      subtitle: "Editor's picks",
      services: [
        {
          icon: "Bug",
          trending: true,
          name: "Manual Software Testing",
          description: "Requirements to release: end-to-end QA.",
          features: ["Templates", "Reporting", "Defect triage"],
          link: "/courses/manual-software-testing" as unknown as Url,
        },
      ],
    },
    processContent: {
      title: "Pathway",
      subtitle: "From zero to hired",
      steps: [
        { number: "01", title: "Basics", description: "Foundations & tools." },
        { number: "02", title: "Deep-dive", description: "Projects & reviews." },
        { number: "03", title: "Hiring", description: "Mock interviews & referrals." },
      ],
    },
    toolsFrameworkContent: {
      title: "Tech stack",
      description: "What you’ll master",
      stats: { projectsCompleted: "720+", clientSatisfaction: "4.9/5", supportAvailable: "Slack+Email", yearsExperience: "9+" },
    },
    whyChooseContent: {
      title: "Designed for outcomes",
      subtitle: "Built by practitioners",
      reasons: [
        { icon: "Zap", title: "Live labs", stats: "Weekly", description: "Hands-on challenges." },
        { icon: "Heart", title: "Community", stats: "Active", description: "Peer learning groups." },
      ],
      testimonial: { text: "Job-ready content!", author: "P. Nair", company: "SaaS Co.", rating: 5 },
    },
    caseStudiesContent: {
      title: "Success stories",
      description: "BLR placements",
      subtitle: "Recent wins",
      studies: [
        { company: "CloudCart", industry: "SaaS", challenge: "Release delays", results: ["40% faster QA", "Stable regressions"] },
      ],
    },
    trendingServicesContent: {
      title: "What’s hot in BLR",
      description: "Skills hiring now",
      subtitle: "Don’t miss out",
      services: [
        { name: "API Automation", trending: true, description: "REST Assured in Java.", citySpecific: "Koramangala firms", benefits: ["Faster cycles"], technologies: ["REST Assured", "JUnit"] },
      ],
    },
    faqsContent: {
      title: "FAQs",
      subtitle: "Details",
      faqs: [
        { question: "Do you give EMIs?", answer: "Yes, 0% EMI available." },
        { question: "Are classes online?", answer: "Hybrid format in BLR." },
      ],
    },
    ctaContent: {
      title: "Apply now",
      description: "Next Bengaluru cohort",
      subtitle: "Early-bird open",
      contactInfo: { phone: "+91-90000-00002", email: "hello@blr.dev", address: "HSR Layout, Bengaluru" },
    },
    industries: ["SaaS", "DeepTech", "Fintech"],
  },
};

// ===== Course page payloads by courseSlug -> citySlug =====
const manualTestingDetails: CourseDetails = {
  title: "Manual Software Testing",
  description: "Learn test planning, design techniques, execution, defect management, and release readiness—aligned to ISTQB Foundation.",
  imageUrl: "/images/courses/manual-testing.jpg",
  duration: "8 weeks (40+ hours)",
  eligibility: "Beginners, CS/IT grads, switching to QA",
  modules: [
    { id: "m1", title: "QA Fundamentals", description: "SDLC, STLC, roles", topics: ["SDLC", "STLC", "Test Levels", "Test Types"] },
    { id: "m2", title: "Test Design", description: "Techniques & strategies", topics: ["BVA", "ECP", "Decision Tables", "State Transition"] },
    { id: "m3", title: "Defect Management", description: "Lifecycle & reporting", topics: ["Severity/Priority", "Bug lifecycle", "JIRA workflows"] },
  ],
  features: ["Capstone project", "Resume & mock interviews", "Lifetime community"]
};

const commonLeadForm = {
  title: "Get the syllabus & a free class",
  description: "Fill in your details and we’ll reach out with schedules and offers.",
  fields: [
    { name: "name", label: "Full Name", type: "text", placeholder: "Your name", required: true },
    { name: "email", label: "Email", type: "email", placeholder: "you@example.com", required: true },
    { name: "phone", label: "Phone", type: "tel", placeholder: "+91", required: true },
    { name: "city", label: "City", type: "select", required: true, options: ["Mumbai", "Delhi", "Bengaluru"] },
  ] as LeadFormField[],
  submitButtonText: "Get free session",
};

// function makeCityPage(citySlug: keyof typeof CITIES): CityPageProps {
//   const city = CITIES[citySlug];
//   return {
//     courseSlug: "manual-software-testing",
//     citySlug: city.slug,
//     courseName: "Manual Software Testing",
//     cityName: city.name,
//     seo: {
//       title: `${city.name} Manual Software Testing Course | ISTQB-aligned QA Training`,
//       description: `Hands-on Manual Software Testing course in ${city.name}. Projects, interview prep, and placement support.\`,
//       keywords: [
//         "Manual Software Testing course",
//         `QA training ${city.name}`,
//         "ISTQB foundation",
//         "Learn software testing from scratch",
//       ],
//       canonicalUrl: `https://example.com/${"courses/manual-software-testing"}/${city.slug}`,
//     },
//     hero: {
//       headline: `Manual Software Testing in ${city.name}`,
//       subHeadline: `${city.name} • Mentor-led • Job-focused`,
//       ctaText: "Book a free class",
//       ctaLink: "/apply",
//       backgroundImage: "/images/hero/qa-light.jpg",
//     },
//     courseDetails: manualTestingDetails,
//     testimonials: [
//       { id: `t-${city.slug}-1`, quote: "Clear explanations and strong projects.", author: "K. Rao", city: city.name, course: "Manual Testing", rating: 5 },
//       { id: `t-${city.slug}-2`, quote: "Cracked interviews with their help!", author: "S. Patil", city: city.name, course: "Manual Testing", rating: 5 },
//     ],
//     faqs: [
//       { id: `f-${city.slug}-1`, question: "Is this beginner-friendly?", answer: "Yes, we start from fundamentals and build up to advanced topics." },
//       { id: `f-${city.slug}-2`, question: "Do you help with jobs?", answer: "Yes—resume reviews, mock interviews, and referrals are included." },
//     ],
//     leadForm: commonLeadForm,
//   };
// }

export const CITY_PAGES: Record<string, CityPageProps> = {
  mumbai: makeCityPage("mumbai"),
  delhi: makeCityPage("delhi"),
  bangalore: makeCityPage("bangalore"),
};

// Utility getters for dynamic routes like /courses/[courseSlug]/[citySlug]
export function getCityPageProps(courseSlug: string, citySlug: string): CityPageProps | null {
  if (courseSlug !== "manual-software-testing") return null;
  return CITY_PAGES[citySlug] ?? null;
}

export function getAllCitySlugs(): string[] {
  return Object.keys(CITIES);
}

export function getAllCourseCityPaths(): { courseSlug: string; citySlug: string }[] {
  return Object.keys(CITY_PAGES).map((citySlug) => ({ courseSlug: "manual-software-testing", citySlug }));
}
