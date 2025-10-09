// =============================
// components/our-team/data.ts
// =============================
import type { TeamMember, Trainer } from "./types";


export const BRAND = "#ff8c00"; // Cinute Digital brand


export const teamData: TeamMember[] = [
    {
        id: "1",
        name: "Ami Khambata",
        title: "Founder & Chief Mentor",
        role: "Leadership",
        expertise: ["Software Testing", "Automation", "Career Mentorship"],
        bio: "EdTech leader with a decade of experience enabling learners to build industry-ready skills through hands-on projects and mentor-led learning.",
        location: "Mumbai, India",
        avatar: "/images/ami-khambata.png",
        linkedin: "https://www.linkedin.com/",
        email: "mailto:hello@cinutedigital.com",
        highlights: ["10+ years in EdTech", "Built 1k+ careers", "ISO-aligned delivery"],
        
    },
    {
        id: "2",
        name: "Jayesh Patel",
        title: "Head of Programs (QA & Automation)",
        role: "Faculty",
        expertise: ["Selenium", "Playwright", "API Testing", "CI/CD"],
        bio: "Drives job-ready curriculum for Manual, Automation, and API Testing with real-world sprints and capstones.",
        location: "Pune, India",
        avatar: "/images/ami-khambata.png",
        linkedin: "https://www.linkedin.com/",
    },
    {
        id: "3",
        name: "Rhea Sharma",
        title: "Data Science Mentor",
        role: "Faculty",
        expertise: ["Python", "ML", "NLP", "Generative AI"],
        bio: "Mentors learners on ML fundamentals, model deployment, and prompt engineering for GenAI applications.",
        location: "Remote, India",
        avatar: "/images/ami-khambata.png",
    },
    {
        id: "4",
        name: "Arun Rao",
        title: "Industry Advisor (QA Strategy)",
        role: "Advisory",
        expertise: ["QA Strategy", "Test Architecture", "Agile"],
        bio: "Advises on QA strategy, governance, and enterprise-grade testing practices to align outcomes with hiring partner expectations.",
        location: "Bengaluru, India",
        avatar: "/images/ami-khambata.png",
    },
    {
        id: "5",
        name: "Neha Verma",
        title: "Program Operations Lead",
        role: "Operations",
        expertise: ["Student Success", "Placements", "Admissions"],
        bio: "Ensures a smooth learning journey—from enrollment to placement—with data-driven student success operations.",
        location: "Mumbai, India",
        avatar: "/images/ami-khambata.png",
    },
];

export const trainers: Trainer[] = [
  {
    id: "1",
    name: "Aarav Mehta",
    role: "Senior QA Mentor",
    avatar: "/images/ami-khambata.png",
    bio: "Ex-Product QA Lead with 9+ years in Automation Testing for fintech & e-commerce; passionate about Playwright, CI/CD, and test strategies.",
    yearsExp: 9,
    rating: 4.9,
    specialties: ["Automation Testing", "Playwright", "API Testing", "CI/CD", "Test Strategy"],
    certifications: ["ISTQB CTFL", "Certified Scrum Master"],
    languages: ["English", "Hindi"],
    successStories: 120,
    slug: "aarav-mehta",
  },
];