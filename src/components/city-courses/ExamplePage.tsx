import type { Metadata } from 'next';
import HeroSection from './HeroSection';
import CourseCategoriesGrid from './CourseCategoriesGrid';
import KeyFeaturesSection from './KeyFeaturesSection';
import CourseCurriculumSection from './CourseCurriculumSection';
import TestimonialsSection from './TestimonialsSection';
import FAQSection from './FAQSection';
import CertificationPlacementSection from './CertificationPlacementSection';
import FinalCTASection from './FinalCTASection';

// SEO Metadata Configuration
export const metadata: Metadata = {
  title: 'Software Testing Training in Mumbai | Best QA Course with 100% Placement',
  description: 'Join the best Software Testing training institute in Mumbai. Learn Manual, Automation, API & Performance Testing with hands-on projects. 100% placement assistance, expert trainers, and industry-recognized certification.',
  keywords: 'software testing course Mumbai, QA training Mumbai, automation testing Mumbai, manual testing course, selenium training Mumbai, software testing institute, testing certification Mumbai',
  authors: [{ name: 'Your Institute Name' }],
  openGraph: {
    title: 'Software Testing Training in Mumbai | Best QA Course',
    description: 'Master Software Testing with industry experts. Get certified and placed in top companies.',
    url: 'https://yourwebsite.com/courses/software-testing-mumbai',
    siteName: 'Your Institute Name',
    images: [
      {
        url: 'https://yourwebsite.com/og-image-software-testing-mumbai.jpg',
        width: 1200,
        height: 630,
        alt: 'Software Testing Training in Mumbai',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Testing Training in Mumbai',
    description: 'Best Software Testing course with 100% placement assistance',
    images: ['https://yourwebsite.com/twitter-image-software-testing-mumbai.jpg'],
  },
  alternates: {
    canonical: 'https://yourwebsite.com/courses/software-testing-mumbai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Sample Data for Components
const courseCategories = [
  {
    id: 'manual-testing',
    title: 'Manual Testing',
    description: 'Master the fundamentals of software testing with comprehensive manual testing techniques and methodologies.',
    icon: '📝',
    duration: '6-8 Weeks',
    level: 'Beginner',
    studentsEnrolled: 2500,
    rating: 4.8,
    href: '/courses/manual-testing-mumbai',
    features: [
      'Test case design and execution',
      'Bug tracking and reporting',
      'SDLC and STLC concepts',
      'Real-world project experience'
    ]
  },
  {
    id: 'automation-testing',
    title: 'Automation Testing',
    description: 'Learn industry-leading automation tools like Selenium, TestNG, and Cucumber for efficient test automation.',
    icon: '🤖',
    duration: '8-10 Weeks',
    level: 'Intermediate',
    studentsEnrolled: 3200,
    rating: 4.9,
    href: '/courses/automation-testing-mumbai',
    features: [
      'Selenium WebDriver mastery',
      'TestNG & JUnit frameworks',
      'Page Object Model (POM)',
      'CI/CD integration with Jenkins'
    ]
  },
  {
    id: 'api-testing',
    title: 'API Testing',
    description: 'Become proficient in REST API testing using Postman, RestAssured, and other industry-standard tools.',
    icon: '🔌',
    duration: '4-6 Weeks',
    level: 'Intermediate',
    studentsEnrolled: 1800,
    rating: 4.7,
    href: '/courses/api-testing-mumbai',
    features: [
      'REST & SOAP API testing',
      'Postman & RestAssured',
      'API automation frameworks',
      'Performance testing basics'
    ]
  },
  {
    id: 'performance-testing',
    title: 'Performance Testing',
    description: 'Master performance testing with JMeter and LoadRunner to ensure application scalability and reliability.',
    icon: '⚡',
    duration: '6-8 Weeks',
    level: 'Advanced',
    studentsEnrolled: 1500,
    rating: 4.8,
    href: '/courses/performance-testing-mumbai',
    features: [
      'JMeter & LoadRunner tools',
      'Load and stress testing',
      'Performance metrics analysis',
      'Bottleneck identification'
    ]
  },
  {
    id: 'mobile-testing',
    title: 'Mobile Testing',
    description: 'Learn mobile app testing for iOS and Android using Appium and other mobile testing frameworks.',
    icon: '📱',
    duration: '6-8 Weeks',
    level: 'Intermediate',
    studentsEnrolled: 1200,
    rating: 4.6,
    href: '/courses/mobile-testing-mumbai',
    features: [
      'Appium framework',
      'iOS & Android testing',
      'Mobile automation strategies',
      'Real device testing'
    ]
  },
  {
    id: 'full-stack-testing',
    title: 'Full Stack Testing',
    description: 'Comprehensive testing course covering manual, automation, API, and performance testing for complete QA expertise.',
    icon: '🎯',
    duration: '12-16 Weeks',
    level: 'All Levels',
    studentsEnrolled: 2800,
    rating: 4.9,
    href: '/courses/full-stack-testing-mumbai',
    features: [
      'End-to-end testing coverage',
      'Multiple tool expertise',
      '10+ real-world projects',
      'Job-ready certification'
    ]
  }
];

const curriculumModules = [
  {
    id: 'module-1',
    title: 'Introduction to Software Testing',
    duration: '1 Week',
    topics: [
      'What is Software Testing?',
      'Importance of Testing in SDLC',
      'Types of Testing (Functional & Non-Functional)',
      'Testing Principles and Fundamentals',
      'Software Development Life Cycle (SDLC)',
      'Software Testing Life Cycle (STLC)',
      'Verification vs Validation',
      'Quality Assurance vs Quality Control'
    ],
    learningOutcomes: [
      'Understand the role of testing in software development',
      'Differentiate between various testing types and methodologies',
      'Comprehend SDLC and STLC phases',
      'Apply testing principles in real-world scenarios'
    ]
  },
  {
    id: 'module-2',
    title: 'Manual Testing Fundamentals',
    duration: '2 Weeks',
    topics: [
      'Test Case Design Techniques',
      'Writing Effective Test Cases',
      'Test Scenario Creation',
      'Boundary Value Analysis',
      'Equivalence Partitioning',
      'Decision Table Testing',
      'State Transition Testing',
      'Use Case Testing'
    ],
    learningOutcomes: [
      'Design comprehensive test cases for various scenarios',
      'Apply test design techniques effectively',
      'Create test scenarios based on requirements',
      'Identify edge cases and boundary conditions'
    ]
  },
  {
    id: 'module-3',
    title: 'Defect Management & Tracking',
    duration: '1 Week',
    topics: [
      'Bug Life Cycle',
      'Defect Reporting Best Practices',
      'JIRA Tool Training',
      'Severity vs Priority',
      'Bug Tracking and Management',
      'Test Execution and Reporting',
      'Defect Metrics and KPIs',
      'Root Cause Analysis'
    ],
    learningOutcomes: [
      'Report bugs effectively with proper documentation',
      'Use JIRA for defect tracking and management',
      'Understand defect life cycle and severity levels',
      'Analyze defect trends and metrics'
    ]
  },
  {
    id: 'module-4',
    title: 'Automation Testing with Selenium',
    duration: '3 Weeks',
    topics: [
      'Introduction to Automation Testing',
      'Selenium WebDriver Architecture',
      'Locators and Web Elements',
      'Handling Different Web Elements',
      'Synchronization Techniques',
      'TestNG Framework',
      'Page Object Model (POM)',
      'Data-Driven Testing'
    ],
    learningOutcomes: [
      'Automate web applications using Selenium WebDriver',
      'Implement Page Object Model design pattern',
      'Create robust and maintainable test scripts',
      'Execute data-driven tests with TestNG'
    ]
  },
  {
    id: 'module-5',
    title: 'API Testing & RestAssured',
    duration: '2 Weeks',
    topics: [
      'Introduction to API Testing',
      'REST vs SOAP APIs',
      'HTTP Methods and Status Codes',
      'Postman Tool Training',
      'RestAssured Framework',
      'API Test Automation',
      'JSON and XML Parsing',
      'API Authentication & Authorization'
    ],
    learningOutcomes: [
      'Test REST APIs using Postman and RestAssured',
      'Automate API testing with RestAssured framework',
      'Validate API responses and status codes',
      'Handle authentication and authorization in APIs'
    ]
  },
  {
    id: 'module-6',
    title: 'Real-World Projects & Placement Prep',
    duration: '2 Weeks',
    topics: [
      'Live Project Implementation',
      'End-to-End Testing Scenarios',
      'Framework Development',
      'CI/CD Integration with Jenkins',
      'Resume Building Workshop',
      'Mock Interviews',
      'Technical Interview Preparation',
      'Soft Skills Training'
    ],
    learningOutcomes: [
      'Complete real-world testing projects',
      'Build a professional testing portfolio',
      'Prepare for technical interviews',
      'Develop job-ready skills and confidence'
    ]
  }
];

const testimonials = [
  {
    id: 'test-1',
    name: 'Priya Sharma',
    role: 'QA Engineer',
    company: 'TCS',
    image: '/testimonials/priya.jpg',
    rating: 5,
    text: 'The Software Testing course at this institute completely transformed my career. The trainers are industry experts who provide hands-on training with real-world projects. I got placed in TCS within 2 months of course completion!',
    course: 'Full Stack Testing',
    batch: 'Jan 2024',
    package: '6.5 LPA'
  },
  {
    id: 'test-2',
    name: 'Rahul Desai',
    role: 'Automation Test Engineer',
    company: 'Infosys',
    image: '/testimonials/rahul.jpg',
    rating: 5,
    text: 'Best decision I made was enrolling in the Automation Testing course here. The curriculum is well-structured, covering Selenium, TestNG, and CI/CD. The placement support is exceptional - they helped me prepare for interviews and negotiate my salary.',
    course: 'Automation Testing',
    batch: 'Mar 2024',
    package: '7.2 LPA'
  },
  {
    id: 'test-3',
    name: 'Sneha Patil',
    role: 'Senior QA Analyst',
    company: 'Wipro',
    image: '/testimonials/sneha.jpg',
    rating: 5,
    text: 'I was a complete beginner with no IT background. The trainers patiently taught me everything from basics to advanced concepts. The mock interviews and resume building sessions were incredibly helpful. Highly recommend this institute!',
    course: 'Manual Testing',
    batch: 'Feb 2024',
    package: '5.8 LPA'
  },
  {
    id: 'test-4',
    name: 'Amit Kulkarni',
    role: 'Performance Test Engineer',
    company: 'Accenture',
    image: '/testimonials/amit.jpg',
    rating: 5,
    text: 'The Performance Testing course gave me expertise in JMeter and LoadRunner. The real-world projects helped me understand how to handle production scenarios. Got multiple job offers and chose Accenture. Thank you team!',
    course: 'Performance Testing',
    batch: 'Dec 2023',
    package: '8.5 LPA'
  },
  {
    id: 'test-5',
    name: 'Neha Joshi',
    role: 'API Test Specialist',
    company: 'Cognizant',
    image: '/testimonials/neha.jpg',
    rating: 5,
    text: 'The API Testing course was comprehensive and practical. Learned Postman, RestAssured, and API automation frameworks. The placement team connected me with Cognizant and I cleared the interview in the first attempt!',
    course: 'API Testing',
    batch: 'Jan 2024',
    package: '6.8 LPA'
  },
  {
    id: 'test-6',
    name: 'Vikram Singh',
    role: 'Mobile QA Engineer',
    company: 'Tech Mahindra',
    image: '/testimonials/vikram.jpg',
    rating: 5,
    text: 'Excellent training institute in Mumbai! The Mobile Testing course covered both iOS and Android testing with Appium. The trainers are supportive and the learning environment is great. Placed in Tech Mahindra with a good package.',
    course: 'Mobile Testing',
    batch: 'Feb 2024',
    package: '7.0 LPA'
  }
];

const faqs = [
  {
    id: 'faq-1',
    question: 'What are the prerequisites for joining the Software Testing course?',
    answer: 'No specific prerequisites are required for our Software Testing courses. Basic computer knowledge and willingness to learn are sufficient. We start from fundamentals and gradually move to advanced topics. Our courses are designed for both freshers and working professionals.',
    category: 'Course Details'
  },
  {
    id: 'faq-2',
    question: 'What is the duration of the Software Testing training program?',
    answer: 'The duration varies based on the course you choose. Manual Testing takes 6-8 weeks, Automation Testing takes 8-10 weeks, and the Full Stack Testing program is 12-16 weeks. We offer flexible batch timings including weekday, weekend, and fast-track options.',
    category: 'Course Details'
  },
  {
    id: 'faq-3',
    question: 'Do you provide placement assistance after course completion?',
    answer: 'Yes, we provide 100% placement assistance. Our dedicated placement cell has tie-ups with 500+ companies. We offer resume building, mock interviews, soft skills training, and direct job referrals. We guarantee minimum 10 interview opportunities for every student.',
    category: 'Placement'
  },
  {
    id: 'faq-4',
    question: 'Is the certification recognized by companies?',
    answer: 'Absolutely! Our certification is industry-recognized and accepted by top companies across India. Many of our hiring partners specifically look for candidates with our certification. The certificate adds significant value to your resume and LinkedIn profile.',
    category: 'Certification'
  },
  {
    id: 'faq-5',
    question: 'What is the average salary package after completing the course?',
    answer: 'The average salary package for our students ranges from 5-8 LPA depending on the course and prior experience. Freshers typically get 4-6 LPA, while experienced professionals get 6-10 LPA. Some of our top performers have received packages up to 12 LPA.',
    category: 'Placement'
  },
  {
    id: 'faq-6',
    question: 'Do you offer online or offline training in Mumbai?',
    answer: 'We offer both online and offline training options in Mumbai. Our offline training center is equipped with modern infrastructure and labs. Online classes are conducted live with interactive sessions, recorded lectures, and 24/7 doubt clearing support.',
    category: 'Training Mode'
  },
  {
    id: 'faq-7',
    question: 'What tools and technologies are covered in the course?',
    answer: 'We cover industry-standard tools including Selenium WebDriver, TestNG, JUnit, Cucumber, JIRA, Postman, RestAssured, JMeter, LoadRunner, Appium, Jenkins, Git, and Maven. All tools are taught with hands-on practice and real-world projects.',
    category: 'Course Details'
  },
  {
    id: 'faq-8',
    question: 'Can I get a demo class before enrolling?',
    answer: 'Yes, we offer free demo classes for all our courses. You can attend a demo class to understand our teaching methodology, interact with trainers, and see the course curriculum. Contact us to schedule your free demo class.',
    category: 'Enrollment'
  },
  {
    id: 'faq-9',
    question: 'What if I miss a class?',
    answer: 'All our classes are recorded and made available to students. If you miss a class, you can watch the recording at your convenience. Additionally, you can attend the same topic in another batch or schedule a doubt-clearing session with the trainer.',
    category: 'Training Mode'
  },
  {
    id: 'faq-10',
    question: 'Do you provide course materials and projects?',
    answer: 'Yes, we provide comprehensive course materials including presentations, code samples, practice exercises, and real-world projects. You will work on 5+ live projects during the course to build a strong portfolio. All materials are yours to keep for lifetime reference.',
    category: 'Course Details'
  }
];

const hiringPartners = [
  { id: '1', name: 'TCS' },
  { id: '2', name: 'Infosys' },
  { id: '3', name: 'Wipro' },
  { id: '4', name: 'Accenture' },
  { id: '5', name: 'Cognizant' },
  { id: '6', name: 'Tech Mahindra' }
];

export default function SoftwareTestingMumbaiPage() {
  const cityName = 'Mumbai';
  const courseName = 'Software Testing';
  const courseCategory = 'Quality Assurance';

  return (
    <main className="min-h-screen">
      {/* Schema.org Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: `${courseName} Training in ${cityName}`,
            description: `Comprehensive ${courseName} training with hands-on projects and 100% placement assistance in ${cityName}`,
            provider: {
              '@type': 'Organization',
              name: 'Your Institute Name',
              sameAs: 'https://yourwebsite.com'
            },
            offers: {
              '@type': 'Offer',
              category: 'Educational',
              availability: 'https://schema.org/InStock'
            },
            hasCourseInstance: {
              '@type': 'CourseInstance',
              courseMode: ['Online', 'Onsite'],
              location: {
                '@type': 'Place',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: cityName,
                  addressCountry: 'IN'
                }
              }
            }
          })
        }}
      />

      <HeroSection
        courseName={courseName}
        cityName={cityName}
        courseCategory={courseCategory}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Courses', href: '/courses' },
          { label: `${courseName} in ${cityName}`, href: '#' }
        ]}
      />

      <CourseCategoriesGrid
        cityName={cityName}
        mainCourse={courseName}
        categories={courseCategories}
      />

      <KeyFeaturesSection
        cityName={cityName}
        courseName={courseName}
      />

      <CourseCurriculumSection
        courseName={courseName}
        cityName={cityName}
        modules={curriculumModules}
      />

      <TestimonialsSection
        cityName={cityName}
        courseName={courseName}
        testimonials={testimonials}
      />

      <CertificationPlacementSection
        cityName={cityName}
        courseName={courseName}
        hiringPartners={hiringPartners}
      />

      <FAQSection
        cityName={cityName}
        courseName={courseName}
        faqs={faqs}
      />

      <FinalCTASection
        cityName={cityName}
        courseName={courseName}
      />
    </main>
  );
}

