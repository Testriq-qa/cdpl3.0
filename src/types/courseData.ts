// import { Url } from "next/dist/shared/lib/router/router";

export interface CourseData {
  slug: string;
  courseName: string;
  location: string;
  state: string;
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
  heroContent: {
    title: string;
    subtitle: string;
    description: string;
    certifications: string[];
    stats: { number: string; label: string; description: string }[];
    landmarks?: string[];
  };
  courseOverviewContent: {
    title: string;
    description: string;
    subtitle: string;
    modules: {
      icon: string;
      trending: boolean;
      name: string;
      description: string;
      topics: string[];
      link: string;
    }[];
  };
  curriculumContent: {
    title: string;
    subtitle: string;
    weeks: {
      number: string;
      title: string;
      description: string;
      deliverables?: string[];
    }[];
  };
  toolsFrameworkContent: {
    title: string;
    description: string;
    stats: {
      totalHours: string;
      projects: string;
      mentorSupport: string;
      jobPlacement: string;
    };
  };
  whyChooseContent: {
    title: string;
    subtitle: string;
    reasons: {
      icon: string;
      title: string;
      stats: string;
      description: string;
    }[];
    testimonial: {
      text: string;
      author: string;
      role: string;
      rating: number;
    };
  };
  projectsContent: {
    title: string;
    description: string;
    subtitle: string;
    projects: {
      name: string;
      description: string;
      skills: string[];
      difficulty: string;
    }[];
  };
  careerPathContent: {
    title: string;
    description: string;
    subtitle: string;
    paths: {
      role: string;
      trending: boolean;
      description: string;
      salaryRange: string;
      skills: string[];
      opportunities: string[];
    }[];
  };
  faqsContent: {
    title: string;
    subtitle: string;
    faqs: { question: string; answer: string }[];
  };
  ctaContent: {
    title: string;
    description: string;
    subtitle: string;
    benefits?: string[];
    contactInfo: {
      phone: string;
      email: string;
      address: string;
    };
  };
  courseDetails: {
    duration: string;
    level: string;
    language: string;
    price: string;
    discountedPrice?: string;
  };
}

// Course Data Mapping
export const courseData: Record<string, CourseData> = {
  "software-testing-mumbai": {
    slug: "software-testing-course-in-mumbai",
    courseName: "Software Testing",
    location: "Mumbai",
    state: "Maharashtra",
    metadata: {
      title: "Software Testing Course in Mumbai | Learn QA Testing",
      description: "Comprehensive software testing course in Mumbai. Learn manual testing, automation, performance testing with industry experts. 100% job placement support.",
      keywords:
        "software testing course mumbai, qa testing training mumbai, automation testing course, manual testing course, testing certification mumbai, qa course maharashtra",
    },
    courseDetails: {
      duration: "12 weeks",
      level: "Beginner to Intermediate",
      language: "English & Hindi",
      price: "₹29,999",
      discountedPrice: "₹19,999",
    },
    heroContent: {
      title: "Master Software Testing in Mumbai",
      subtitle: "Industry-Recognized QA Testing Course",
      description:
        "Learn comprehensive software testing skills from industry experts in Mumbai. Master manual testing, automation, performance testing, and quality assurance to launch your career in tech.",
      certifications: [
        "ISTQB Certification Ready",
        "Industry-Recognized",
        "Hands-on Projects",
      ],
      stats: [
        {
          number: "500+",
          label: "Students Trained",
          description: "Successfully completed the course",
        },
        {
          number: "95%",
          label: "Job Placement",
          description: "Within 3 months of completion",
        },
        {
          number: "12",
          label: "Weeks Duration",
          description: "Intensive learning program",
        },
        {
          number: "24/7",
          label: "Mentor Support",
          description: "Dedicated mentorship available",
        },
      ],
      landmarks: [
        "Bandra-Worli Sea Link",
        "Gateway of India",
        "Marine Drive",
        "Bombay Stock Exchange",
      ],
    },
    courseOverviewContent: {
      title: "Course Modules",
      description: "Comprehensive modules covering all aspects of software testing",
      subtitle:
        "Learn industry-relevant skills with hands-on projects and real-world scenarios.",
      modules: [
        {
          icon: "BookOpen",
          trending: true,
          name: "Testing Fundamentals",
          description:
            "Master the basics of software testing, SDLC, and QA processes.",
          topics: [
            "Testing Concepts",
            "SDLC Models",
            "Testing Types",
            "Bug Lifecycle",
          ],
          link: "/courses/testing-fundamentals",
        },
        {
          icon: "CheckCircle",
          trending: true,
          name: "Manual Testing",
          description:
            "Learn comprehensive manual testing techniques and best practices.",
          topics: [
            "Test Case Design",
            "Exploratory Testing",
            "Regression Testing",
            "Usability Testing",
          ],
          link: "/courses/manual-testing",
        },
        {
          icon: "Zap",
          trending: true,
          name: "Automation Testing",
          description:
            "Master automation frameworks and tools for efficient testing.",
          topics: [
            "Selenium WebDriver",
            "Test Automation Framework",
            "CI/CD Integration",
            "API Automation",
          ],
          link: "/courses/automation-testing",
        },
        {
          icon: "Gauge",
          trending: false,
          name: "Performance Testing",
          description:
            "Learn load testing, stress testing, and performance optimization.",
          topics: [
            "Load Testing",
            "Stress Testing",
            "JMeter Basics",
            "Performance Analysis",
          ],
          link: "/courses/performance-testing",
        },
        {
          icon: "Shield",
          trending: false,
          name: "Security Testing",
          description:
            "Understand security vulnerabilities and penetration testing.",
          topics: [
            "Security Concepts",
            "Vulnerability Assessment",
            "OWASP Top 10",
            "Security Best Practices",
          ],
          link: "/courses/security-testing",
        },
        {
          icon: "Smartphone",
          trending: true,
          name: "Mobile Testing",
          description: "Test mobile applications across iOS and Android platforms.",
          topics: [
            "Mobile Testing Concepts",
            "Appium Framework",
            "Device Testing",
            "Cross-Platform Testing",
          ],
          link: "/courses/mobile-testing",
        },
      ],
    },
    curriculumContent: {
      title: "Detailed Curriculum",
      subtitle: "Week-by-week learning path designed by industry experts.",
      weeks: [
        {
          number: "01-02",
          title: "Testing Fundamentals & SDLC",
          description:
            "Introduction to software testing, SDLC models, testing types, and quality assurance principles.",
          deliverables: [
            "Understanding of SDLC",
            "Testing concepts mastery",
            "First test case creation",
          ],
        },
        {
          number: "03-04",
          title: "Manual Testing Mastery",
          description:
            "Deep dive into manual testing techniques, test case design, and defect reporting.",
          deliverables: [
            "50+ test cases",
            "Defect reports",
            "Testing documentation",
          ],
        },
        {
          number: "05-06",
          title: "Automation Testing with Selenium",
          description:
            "Learn Selenium WebDriver, automation framework design, and script development.",
          deliverables: [
            "Automation framework",
            "20+ automated scripts",
            "Test execution reports",
          ],
        },
        {
          number: "07-08",
          title: "API & Database Testing",
          description:
            "Master API testing tools, REST API testing, and database validation.",
          deliverables: [
            "API test suite",
            "Database test cases",
            "Integration testing",
          ],
        },
        {
          number: "09-10",
          title: "Performance & Security Testing",
          description:
            "Learn load testing, stress testing, and security vulnerability assessment.",
          deliverables: [
            "Performance test report",
            "Security assessment",
            "Optimization recommendations",
          ],
        },
        {
          number: "11-12",
          title: "Capstone Project & Interview Prep",
          description:
            "Complete a real-world project and prepare for job interviews.",
          deliverables: [
            "Capstone project",
            "Portfolio",
            "Interview preparation",
          ],
        },
      ],
    },
    toolsFrameworkContent: {
      title: "Tools & Technologies",
      description: "Learn industry-standard tools used by leading companies.",
      stats: {
        totalHours: "120+",
        projects: "8",
        mentorSupport: "24/7",
        jobPlacement: "95%",
      },
    },
    whyChooseContent: {
      title: "Why Choose Our Course?",
      subtitle: "Get trained by industry experts with real-world experience.",
      reasons: [
        {
          icon: "Award",
          title: "Expert Instructors",
          stats: "10+ Years Experience",
          description:
            "Learn from professionals with extensive industry experience.",
        },
        {
          icon: "Briefcase",
          title: "Job Placement",
          stats: "95% Success Rate",
          description:
            "Dedicated placement assistance and interview preparation.",
        },
        {
          icon: "Users",
          title: "Community Support",
          stats: "500+ Alumni",
          description:
            "Join a thriving community of professionals and learners.",
        },
        {
          icon: "Clock",
          title: "Flexible Learning",
          stats: "Self-Paced Options",
          description:
            "Learn at your own pace with recorded sessions available.",
        },
      ],
      testimonial: {
        text: "This course completely transformed my career. The practical approach and mentorship helped me land a job within 2 months of completion. Highly recommended!",
        author: "Rahul Sharma",
        role: "QA Engineer at TechCorp",
        rating: 5,
      },
    },
    projectsContent: {
      title: "Hands-On Projects",
      description: "Build real-world projects to strengthen your portfolio.",
      subtitle: "Apply your learning through practical, industry-relevant projects.",
      projects: [
        {
          name: "E-Commerce Platform Testing",
          description:
            "Complete testing of an e-commerce application including manual and automation testing.",
          skills: [
            "Manual Testing",
            "Selenium",
            "Test Case Design",
            "Bug Reporting",
          ],
          difficulty: "Intermediate",
        },
        {
          name: "Banking Application QA",
          description:
            "Security and performance testing of a banking application.",
          skills: [
            "Security Testing",
            "Performance Testing",
            "API Testing",
            "Database Testing",
          ],
          difficulty: "Advanced",
        },
        {
          name: "Mobile App Testing Suite",
          description:
            "Comprehensive testing of a mobile application across multiple devices.",
          skills: [
            "Mobile Testing",
            "Appium",
            "Cross-Platform Testing",
            "Device Testing",
          ],
          difficulty: "Intermediate",
        },
        {
          name: "CI/CD Pipeline Implementation",
          description:
            "Set up automated testing in a CI/CD pipeline with Jenkins.",
          skills: [
            "Automation Testing",
            "Jenkins",
            "Git Integration",
            "Test Reporting",
          ],
          difficulty: "Advanced",
        },
      ],
    },
    careerPathContent: {
      title: "Career Opportunities",
      description: "Explore diverse career paths after completing the course.",
      subtitle: "Launch your career in QA and software testing.",
      paths: [
        {
          role: "QA Engineer",
          trending: true,
          description:
            "Perform manual and automated testing to ensure software quality.",
          salaryRange: "₹4-8 LPA",
          skills: [
            "Manual Testing",
            "Automation",
            "Test Planning",
            "Bug Reporting",
          ],
          opportunities: [
            "Startups",
            "IT Companies",
            "Product Companies",
            "Consulting Firms",
          ],
        },
        {
          role: "Automation Test Engineer",
          trending: true,
          description:
            "Develop and maintain automated test suites and frameworks.",
          salaryRange: "₹5-10 LPA",
          skills: [
            "Selenium",
            "API Testing",
            "Framework Design",
            "Scripting",
          ],
          opportunities: [
            "Tech Giants",
            "Product Companies",
            "Testing Services",
            "Startups",
          ],
        },
        {
          role: "Performance Test Engineer",
          trending: false,
          description:
            "Conduct performance and load testing to optimize applications.",
          salaryRange: "₹6-12 LPA",
          skills: [
            "JMeter",
            "LoadRunner",
            "Performance Analysis",
            "Optimization",
          ],
          opportunities: [
            "Enterprise Companies",
            "Financial Services",
            "E-Commerce",
            "Tech Companies",
          ],
        },
        {
          role: "QA Lead / Manager",
          trending: false,
          description:
            "Lead QA teams and manage testing strategies and processes.",
          salaryRange: "₹10-18 LPA",
          skills: [
            "Team Management",
            "Test Strategy",
            "Process Improvement",
            "Leadership",
          ],
          opportunities: [
            "IT Companies",
            "Product Companies",
            "Consulting Firms",
            "Startups",
          ],
        },
      ],
    },
    faqsContent: {
      title: "Frequently Asked Questions",
      subtitle: "Get answers to common questions about the course.",
      faqs: [
        {
          question: "Do I need prior programming experience?",
          answer:
            "No, this course is designed for beginners. We cover all fundamentals from scratch. Basic computer knowledge is sufficient to get started.",
        },
        {
          question: "What is the course duration?",
          answer:
            "The course is 12 weeks long with 120+ hours of content. You can complete it at your own pace with flexible learning options.",
        },
        {
          question: "Will I get a certificate?",
          answer:
            "Yes, you'll receive an industry-recognized certificate upon completion. The certificate is valued by employers across India.",
        },
        {
          question: "What is the job placement rate?",
          answer:
            "We have a 95% job placement rate within 3 months of course completion. Our placement team actively assists with job search and interviews.",
        },
        {
          question: "Can I access the course content after completion?",
          answer:
            "Yes, you get lifetime access to all course materials, including future updates and new content additions.",
        },
        {
          question: "Is there any refund policy?",
          answer:
            "We offer a 7-day money-back guarantee if you're not satisfied with the course. No questions asked.",
        },
        {
          question: "What tools will I learn?",
          answer:
            "You'll learn Selenium, Appium, JMeter, Postman, Jenkins, and other industry-standard testing tools.",
        },
        {
          question: "Is there mentor support?",
          answer:
            "Yes, we provide 24/7 mentor support through chat, email, and scheduled calls. Our mentors are experienced QA professionals.",
        },
      ],
    },
    ctaContent: {
      title: "Ready to Start Your Testing Career?",
      description:
        "Join 500+ students who have successfully launched their QA careers.",
      subtitle: "Enroll now and get 33% discount for limited time.",
      benefits: [
        "Industry-recognized certificate",
        "Lifetime access to course materials",
        "24/7 mentor support",
        "Job placement assistance",
        "Real-world projects",
        "Interview preparation",
      ],
      contactInfo: {
        phone: "+91-XXXX-XXXX-XX",
        email: "courses@edtech.com",
        address: "Mumbai, Maharashtra, India",
      },
    },
  },
};

