import type { Metadata } from 'next';
import { 
  CheckCircle, 
  Award, 
  Users, 
  Clock, 
  BookOpen, 
  Shield, 
  Star,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Target,
  Zap,
  Code,
  FileCheck,
  Briefcase,
  GraduationCap,
  Trophy,
  Download
} from 'lucide-react';
import { ReactNode } from 'react';

// ============================================================================
// METADATA - SEO OPTIMIZATION
// ============================================================================
export const metadata: Metadata = {
  title: 'Manual Software Testing Course | Learn QA Testing from Scratch | ISTQB Foundation Certification',
  description: 'Master Manual Software Testing with our comprehensive certification training. Learn software testing from scratch, ISTQB foundation, QA testing, test case design, defect management, and more. 100% placement assistance. Enroll now!',
  keywords: [
    'Manual Software Testing course',
    'Learn software testing from scratch',
    'ISTQB foundation',
    'QA testing training',
    'Manual testing for beginners',
    'Software testing certification',
    'Software testing course with placement',
    'Quality assurance training',
    'Test case design',
    'Defect management',
    'Software QA course',
    'Manual testing certification',
    'Testing fundamentals',
    'Black box testing',
    'White box testing'
  ],
  openGraph: {
    title: 'Manual Software Testing Course | ISTQB Foundation Certification',
    description: 'Master Manual Software Testing with comprehensive training. Learn QA testing from scratch with 100% placement assistance.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manual Software Testing Course | ISTQB Foundation Certification',
    description: 'Master Manual Software Testing with comprehensive training. Learn QA testing from scratch with 100% placement assistance.',
  },
};

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================
interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface Skill {
  name: string;
  category: 'core' | 'advanced' | 'tools';
}

interface Tool {
  name: string;
  logo: string;
  description: string;
}

interface Project {
  title: string;
  domain: string;
  description: string;
  technologies: string[];
}

interface Review {
  name: string;
  role: string;
  company?: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Achievement {
  title: string;
  subtitle: string;
  organization: string;
}

interface Stat {
  value: string;
  label: string;
  icon: ReactNode;
}

// ============================================================================
// DATA CONSTANTS
// ============================================================================
const HERO_STATS: Stat[] = [
  { value: '15,000+', label: 'Students Trained', icon: <Users className="w-5 h-5" /> },
  { value: '4.8/5', label: 'Average Rating', icon: <Star className="w-5 h-5" /> },
  { value: '100%', label: 'Placement Support', icon: <Briefcase className="w-5 h-5" /> },
  { value: '50+', label: 'Hiring Partners', icon: <Award className="w-5 h-5" /> },
];

const KEY_FEATURES: Feature[] = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: 'Industry-Expert Instructors',
    description: 'Learn from seasoned QA professionals with 15+ years of real-world testing experience across diverse industries and domains.'
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Comprehensive Curriculum',
    description: 'Master manual testing fundamentals, ISTQB syllabus, test case design techniques, defect lifecycle, and industry best practices from the ground up.'
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Hands-On Projects',
    description: 'Work on 5+ real-world capstone projects spanning e-commerce, banking, healthcare, and telecom domains to build your portfolio.'
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'ISTQB Certification Prep',
    description: 'Structured preparation for ISTQB Foundation Level certification with mock tests, practice questions, and exam strategies.'
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: '100% Placement Assistance',
    description: 'Dedicated career support with resume building, mock interviews, and direct referrals to 50+ top hiring partners until you land your dream job.'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Flexible Learning Options',
    description: 'Choose from live online classes, self-paced modules, or weekend batches. Lifetime access to course materials and community support.'
  },
];

const SKILLS_COVERED: Skill[] = [
  { name: 'Software Testing Fundamentals', category: 'core' },
  { name: 'Manual Testing Techniques', category: 'core' },
  { name: 'Test Planning & Strategy', category: 'core' },
  { name: 'Test Case Design', category: 'core' },
  { name: 'Test Execution & Reporting', category: 'core' },
  { name: 'Defect Lifecycle Management', category: 'core' },
  { name: 'ISTQB Foundation Syllabus', category: 'core' },
  { name: 'Software Development Life Cycle (SDLC)', category: 'core' },
  { name: 'Software Testing Life Cycle (STLC)', category: 'advanced' },
  { name: 'Black Box Testing', category: 'advanced' },
  { name: 'White Box Testing', category: 'advanced' },
  { name: 'Grey Box Testing', category: 'advanced' },
  { name: 'Functional Testing', category: 'advanced' },
  { name: 'Non-Functional Testing', category: 'advanced' },
  { name: 'Regression Testing', category: 'advanced' },
  { name: 'Smoke & Sanity Testing', category: 'advanced' },
  { name: 'Agile & Scrum Methodology', category: 'advanced' },
  { name: 'User Acceptance Testing (UAT)', category: 'advanced' },
  { name: 'Exploratory Testing', category: 'advanced' },
  { name: 'Risk-Based Testing', category: 'advanced' },
  { name: 'JIRA', category: 'tools' },
  { name: 'TestRail', category: 'tools' },
  { name: 'Bugzilla', category: 'tools' },
  { name: 'Postman (API Testing Basics)', category: 'tools' },
];

const TOOLS_COVERED: Tool[] = [
  {
    name: 'JIRA',
    logo: '🔷',
    description: 'Industry-standard tool for test management, defect tracking, and agile project collaboration.'
  },
  {
    name: 'TestRail',
    logo: '📋',
    description: 'Comprehensive test case management platform for organizing, tracking, and reporting test activities.'
  },
  {
    name: 'Bugzilla',
    logo: '🐛',
    description: 'Open-source defect tracking system used by enterprises for bug lifecycle management.'
  },
  {
    name: 'Postman',
    logo: '📮',
    description: 'API testing tool for manual testing of REST APIs, validating responses, and understanding backend behavior.'
  },
  {
    name: 'Excel & Google Sheets',
    logo: '📊',
    description: 'Essential tools for creating test cases, test data management, and reporting test metrics.'
  },
  {
    name: 'Confluence',
    logo: '📝',
    description: 'Documentation and collaboration platform for maintaining test plans, strategies, and knowledge bases.'
  },
];

const CAPSTONE_PROJECTS: Project[] = [
  {
    title: 'E-Commerce Testing Suite',
    domain: 'Retail & E-Commerce',
    description: 'Comprehensive manual testing of an e-commerce platform covering user registration, product search, shopping cart, checkout, payment gateway integration, and order management. Includes functional, usability, and compatibility testing across browsers and devices.',
    technologies: ['JIRA', 'TestRail', 'Excel', 'Browser DevTools']
  },
  {
    title: 'Banking Application QA',
    domain: 'Finance & Banking',
    description: 'End-to-end manual testing of a banking web application focusing on account management, fund transfers, transaction history, and security testing. Emphasis on data integrity, error handling, and compliance with financial regulations.',
    technologies: ['JIRA', 'Bugzilla', 'Test Case Design', 'Security Testing']
  },
  {
    title: 'Healthcare Management System',
    domain: 'Healthcare & Medical',
    description: 'Manual testing of a patient management system including appointment scheduling, electronic health records (EHR), prescription management, and billing. Focus on HIPAA compliance, data privacy, and critical workflow validation.',
    technologies: ['TestRail', 'JIRA', 'Compliance Testing', 'UAT']
  },
  {
    title: 'Telecom Service Portal',
    domain: 'Telecommunications',
    description: 'Testing of a customer service portal for a telecom provider, covering plan selection, recharge, bill payment, usage tracking, and customer support ticketing. Includes API testing basics using Postman for backend validation.',
    technologies: ['JIRA', 'Postman', 'API Testing', 'Regression Testing']
  },
  {
    title: 'Travel Booking Platform',
    domain: 'Travel & Tourism',
    description: 'Comprehensive manual testing of a flight and hotel booking platform. Test scenarios include search functionality, booking flow, payment processing, cancellation, and refund workflows. Focus on edge cases and negative testing.',
    technologies: ['TestRail', 'JIRA', 'Cross-Browser Testing', 'Exploratory Testing']
  },
];

const COURSE_REVIEWS: Review[] = [
  {
    name: 'Priya Sharma',
    role: 'QA Engineer',
    company: 'TCS',
    rating: 5,
    comment: 'This Manual Software Testing course was a game-changer for my career. The instructors were incredibly knowledgeable, and the hands-on projects gave me the confidence to excel in interviews. I landed a QA role at TCS within 2 months of completing the course!',
    date: 'March 10, 2025',
    verified: true
  },
  {
    name: 'Rajesh Kumar',
    role: 'Manual Tester',
    company: 'Infosys',
    rating: 5,
    comment: 'Coming from a non-IT background, I was nervous about learning software testing. But the course structure was so clear and beginner-friendly. The ISTQB preparation module was excellent, and I passed the certification on my first attempt. Highly recommended!',
    date: 'February 28, 2025',
    verified: true
  },
  {
    name: 'Anjali Verma',
    role: 'QA Analyst',
    company: 'Wipro',
    rating: 5,
    comment: 'The placement assistance was outstanding! The team helped me refine my resume, prepared me for interviews, and connected me with multiple companies. The real-world projects in the course made my portfolio stand out. Thank you for the amazing support!',
    date: 'March 5, 2025',
    verified: true
  },
  {
    name: 'Vikram Singh',
    role: 'Software Tester',
    company: 'Capgemini',
    rating: 4,
    comment: 'Excellent course content and very practical approach. The instructors shared real-world scenarios and best practices that you won\'t find in textbooks. The only improvement I\'d suggest is adding more advanced topics like performance testing basics. Overall, a solid foundation for anyone starting in QA.',
    date: 'February 20, 2025',
    verified: true
  },
];

const FAQS: FAQ[] = [
  {
    question: 'Who can enroll in the Manual Software Testing course?',
    answer: 'This course is designed for anyone interested in starting a career in software testing and quality assurance. Whether you\'re a fresh graduate, a career changer from a non-IT background, a manual tester looking to formalize your skills, or a software developer wanting to understand testing, this course is perfect for you. No prior programming or testing experience is required.'
  },
  {
    question: 'What is the duration of the Manual Software Testing course?',
    answer: 'The comprehensive Manual Software Testing course spans 8-10 weeks with flexible learning options. You can choose from live online classes (3-4 sessions per week, 2 hours each), weekend batches, or self-paced learning. The course includes 60+ hours of instructor-led training, hands-on projects, and lifetime access to course materials.'
  },
  {
    question: 'Do I need any prior programming knowledge to learn Manual Testing?',
    answer: 'No, you do not need any programming knowledge to excel in Manual Software Testing. This course is designed for absolute beginners and focuses on testing concepts, methodologies, test case design, and defect management—all of which require logical thinking and attention to detail rather than coding skills. However, basic computer literacy and familiarity with web applications are helpful.'
  },
  {
    question: 'Will I receive a certification after completing the course?',
    answer: 'Yes, upon successful completion of the course, you will receive a Course Completion Certificate that validates your skills in Manual Software Testing. Additionally, the course includes comprehensive preparation for the globally recognized ISTQB Foundation Level certification exam, which you can take independently to enhance your credentials and job prospects.'
  },
  {
    question: 'What kind of placement assistance is provided?',
    answer: 'We offer 100% placement assistance that includes resume building and optimization, mock interview sessions with industry experts, soft skills training, direct referrals to our 50+ hiring partners (including top IT companies and startups), and ongoing career support until you secure a job. Our dedicated placement team works closely with each student to maximize their chances of landing their dream QA role.'
  },
  {
    question: 'What are the career opportunities after completing this course?',
    answer: 'After completing the Manual Software Testing course, you can pursue roles such as Manual Tester, QA Analyst, Software Tester, Test Engineer, Quality Assurance Engineer, and UAT Tester. With experience, you can advance to Senior QA roles, Test Lead, QA Manager, or transition into Automation Testing. The demand for skilled QA professionals is consistently high across industries like IT, finance, healthcare, e-commerce, and telecommunications.'
  },
  {
    question: 'Are there any hands-on projects included in the course?',
    answer: 'Absolutely! The course includes 5+ comprehensive capstone projects spanning real-world domains like e-commerce, banking, healthcare, telecommunications, and travel. You\'ll work on end-to-end testing scenarios, create detailed test cases, execute tests, log defects, and generate test reports—giving you practical experience that directly translates to job readiness and a strong portfolio.'
  },
  {
    question: 'Can I attend classes from anywhere in the world?',
    answer: 'Yes, our Manual Software Testing course is delivered 100% online, allowing you to attend live classes from anywhere in the world. All you need is a stable internet connection and a computer. Recorded sessions are also available for students who miss live classes or want to revisit topics. Our global student community spans across India, the US, UK, Canada, Australia, and more.'
  },
  {
    question: 'What is the difference between Manual Testing and Automation Testing?',
    answer: 'Manual Testing involves human testers executing test cases without the use of automation tools. It\'s ideal for exploratory testing, usability testing, and scenarios requiring human judgment. Automation Testing uses scripts and tools (like Selenium) to execute repetitive tests automatically. Manual Testing is the foundation of QA and is essential before moving to automation. This course focuses on Manual Testing, providing you with the core skills needed to excel in QA and transition to automation later if desired.'
  },
  {
    question: 'Is ISTQB certification included in the course fee?',
    answer: 'The course fee includes comprehensive ISTQB Foundation Level exam preparation, including study materials, mock tests, and practice questions. However, the official ISTQB exam fee is not included and must be paid separately to the ISTQB certification body when you register for the exam. We provide full guidance on the registration process and exam strategies to help you pass on your first attempt.'
  },
];

const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Best Skill Learning Institute of the Year',
    subtitle: 'The Education Excellence Award',
    organization: 'Brands Impact'
  },
  {
    title: 'EdTech Company of the Year',
    subtitle: 'The Education Awards',
    organization: 'The Corporate Titan'
  },
  {
    title: 'Institute with the Best Placement',
    subtitle: 'The Education Awards',
    organization: 'Mantra Excellence'
  },
];

// ============================================================================
// INLINE COMPONENT DEFINITIONS
// ============================================================================

// Navigation Component
function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                QA Academy
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Features
            </a>
            <a href="#curriculum" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Curriculum
            </a>
            <a href="#projects" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Projects
            </a>
            <a href="#reviews" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Reviews
            </a>
            <a href="#faq" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              FAQ
            </a>
            <button className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Enroll Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <ChevronDown className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </nav>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-gray-50 via-orange-50/30 to-gray-50">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
              <Award className="w-4 h-4" />
              <span>100% Placement Assistance</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Master{' '}
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Manual Software Testing
              </span>{' '}
              from Scratch
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Launch your QA career with our comprehensive Manual Software Testing course. Learn ISTQB foundation, test case design, defect management, and industry best practices. No coding required—perfect for beginners!
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Industry Experts</p>
                  <p className="text-sm text-gray-600">15+ years experience</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">ISTQB Certified</p>
                  <p className="text-sm text-gray-600">Exam preparation included</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">5+ Live Projects</p>
                  <p className="text-sm text-gray-600">Real-world experience</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Flexible Learning</p>
                  <p className="text-sm text-gray-600">Online & self-paced</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Start Learning Today</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-orange-500 hover:text-orange-600 transition-all duration-300 flex items-center justify-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download Brochure</span>
              </button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Trusted by 15,000+ Students</span>
              </div>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-orange-500 text-orange-500" />
                ))}
                <span className="text-sm font-medium text-gray-700 ml-2">4.8/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900">Talk to a Consultant</h2>
                <p className="text-gray-600 mt-2">Fill in the details to get started</p>
              </div>

              <form className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-2">
                    Purpose <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="purpose"
                    name="purpose"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
                  >
                    <option value="">Select your purpose</option>
                    <option value="career-change">Career Change</option>
                    <option value="skill-upgrade">Skill Upgrade</option>
                    <option value="fresher">Fresher/Graduate</option>
                    <option value="certification">Certification</option>
                  </select>
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    required
                    className="mt-1 w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                  />
                  <label htmlFor="terms" className="text-xs text-gray-600">
                    I agree to the{' '}
                    <a href="#" className="text-orange-600 hover:underline">
                      Terms & Conditions
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-orange-600 hover:underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Submit
                </button>
              </form>

              <div className="text-center pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Or call us directly at{' '}
                  <a href="tel:+911234567890" className="text-orange-600 font-semibold hover:underline">
                    +91 123 456 7890
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {HERO_STATS.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-orange-100 rounded-lg text-orange-600">{stat.icon}</div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Key Features Section Component
function KeyFeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our{' '}
            <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Manual Testing Course?
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Discover the unique advantages that set our Manual Software Testing course apart and accelerate your QA career journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {KEY_FEATURES.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="p-4 bg-orange-100 rounded-xl text-orange-600 inline-block group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Course Overview Section Component
function CourseOverviewSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Manual Software Testing{' '}
            <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Course Overview
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            A comprehensive, industry-aligned curriculum designed to transform you into a confident and job-ready QA professional.
          </p>
        </div>

        {/* Overview Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Description */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What You&apos;ll Learn</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Manual Software Testing is the foundation of quality assurance in software development. This comprehensive course takes you from absolute beginner to job-ready QA professional, covering everything from testing fundamentals to advanced test design techniques, defect management, and ISTQB certification preparation.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                You&apos;ll gain hands-on experience with industry-standard tools like JIRA, TestRail, and Postman, and work on real-world projects spanning e-commerce, banking, healthcare, and telecom domains. Our expert instructors bring 15+ years of industry experience, ensuring you learn not just theory, but practical skills that employers demand.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you&apos;re a fresh graduate, a career changer, or a professional looking to formalize your testing skills, this course provides the perfect launchpad for a rewarding career in software quality assurance. No programming knowledge required—just a passion for quality and attention to detail!
              </p>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="space-y-6">
            {/* Target Audience */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-orange-100 rounded-lg text-orange-600">
                  <Users className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Target Audience</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Fresh graduates and students seeking QA careers</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Career changers from non-IT backgrounds</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Manual testers looking to formalize skills</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Software developers wanting to understand QA</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Learning Objectives */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-orange-100 rounded-lg text-orange-600">
                  <Target className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Learning Objectives</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Master software testing fundamentals and ISTQB syllabus</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Design effective test cases using industry techniques</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Execute tests and manage defect lifecycle with JIRA</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Work on real-world projects to build your portfolio</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Prerequisites */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-orange-100 rounded-lg text-orange-600">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Prerequisites</h4>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>No prior experience required!</strong> This course is designed for absolute beginners. All you need is basic computer literacy, familiarity with web applications, and a passion for quality. Our expert instructors will guide you from scratch, building a strong foundation in manual testing concepts and practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Course Duration */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-orange-100 rounded-lg text-orange-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Course Duration</h4>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>8-10 weeks</strong> of comprehensive training with flexible learning options. Choose from live online classes (3-4 sessions/week, 2 hours each), weekend batches, or self-paced learning. Includes 60+ hours of instructor-led training, hands-on projects, and lifetime access to course materials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Skills Covered Section Component
function SkillsCoveredSection() {
  const coreSkills = SKILLS_COVERED.filter((skill) => skill.category === 'core');
  const advancedSkills = SKILLS_COVERED.filter((skill) => skill.category === 'advanced');
  const toolSkills = SKILLS_COVERED.filter((skill) => skill.category === 'tools');

  return (
    <section id="curriculum" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills You&apos;ll{' '}
            <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Master
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            A comprehensive skill set covering testing fundamentals, advanced techniques, and industry-standard tools to make you job-ready.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {/* Core Skills */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-orange-100 rounded-lg text-orange-600">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Core Testing Fundamentals</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {coreSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced Skills */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Advanced Testing Techniques</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {advancedSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl border border-blue-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-green-100 rounded-lg text-green-600">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Industry-Standard Tools</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {toolSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-50 to-white p-4 rounded-xl border border-green-200 hover:border-green-500 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Tools Covered Section Component
function ToolsCoveredSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tools You&apos;ll{' '}
            <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Gain hands-on experience with industry-leading tools used by QA professionals worldwide.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOOLS_COVERED.map((tool, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">{tool.logo}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{tool.name}</h3>
              <p className="text-gray-600 leading-relaxed">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Capstone Projects Section Component
function CapstoneProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real-World{' '}
            <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Capstone Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Build your portfolio with hands-on projects spanning diverse industries and testing scenarios.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {CAPSTONE_PROJECTS.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                <div className="flex-shrink-0 mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                    <FileCheck className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-orange-600 font-semibold">{project.domain}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Course Reviews Section Component
function CourseReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-orange-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our{' '}
            <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Students Say
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Hear from our successful graduates who transformed their careers with our Manual Software Testing course.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {COURSE_REVIEWS.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className={`w-5 h-5 ${
                      starIndex < review.rating
                        ? 'fill-orange-500 text-orange-500'
                        : 'fill-gray-200 text-gray-200'
                    }`}
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-600 leading-relaxed mb-6 italic">&ldquo;{review.comment}&rdquo;</p>

              {/* Reviewer Info */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div>
                  <p className="font-bold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-600">
                    {review.role}
                    {review.company && ` at ${review.company}`}
                  </p>
                </div>
                <div className="text-right">
                  {review.verified && (
                    <span className="inline-flex items-center space-x-1 text-xs text-green-600 font-semibold">
                      <CheckCircle className="w-4 h-4" />
                      <span>Verified</span>
                    </span>
                  )}
                  <p className="text-xs text-gray-500 mt-1">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Reviews Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            View All Reviews
          </button>
        </div>
      </div>
    </section>
  );
}

// FAQ Section Component
function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our Manual Software Testing course.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-6">
          {FAQS.map((faq, index) => (
            <details
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-orange-500 transition-all duration-300"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                <ChevronDown className="w-5 h-5 text-orange-600 flex-shrink-0 group-open:rotate-180 transition-transform duration-300" />
              </summary>
              <p className="text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-200">{faq.answer}</p>
            </details>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-orange-600 to-orange-500 p-8 rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-3">Still Have Questions?</h3>
          <p className="mb-6">Our team is here to help you make the right decision for your career.</p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            Talk to Our Experts
          </button>
        </div>
      </div>
    </section>
  );
}

// Achievements Section Component
function AchievementsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Distinctions &{' '}
            <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Explore the milestones of our journey and the recognition we&apos;ve earned for excellence in education.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {ACHIEVEMENTS.map((achievement, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-orange-600 font-semibold mb-2">{achievement.subtitle}</p>
              <p className="text-sm text-gray-600">by {achievement.organization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Section Component
function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Manual Software Testing in 2025?
            </span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Increasing Demand for QA Professionals</h3>
              <p className="text-gray-600 leading-relaxed">
                As businesses accelerate their digital transformation, the demand for skilled Quality Assurance professionals has never been higher. Manual Software Testing remains the foundation of software quality, with companies across industries—from startups to Fortune 500 enterprises—actively seeking QA experts who can ensure flawless user experiences and reliable software products.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Essential Skill Set for Tech Careers</h3>
              <p className="text-gray-600 leading-relaxed">
                Manual Testing is not just about finding bugs—it&apos;s about developing critical thinking, problem-solving, and analytical skills that are transferable across domains. Whether you&apos;re working in healthcare, finance, e-commerce, or telecom, the ability to ensure software quality is a highly valued and recession-proof skill that opens doors to diverse career opportunities.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect Entry Point to QA Careers</h3>
              <p className="text-gray-600 leading-relaxed">
                Unlike automation testing or development roles that require programming expertise, Manual Software Testing is accessible to everyone—regardless of your educational background. It&apos;s the perfect starting point for fresh graduates, career changers, and professionals looking to break into the tech industry without needing to learn complex coding languages.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Growth and Advancement</h3>
              <p className="text-gray-600 leading-relaxed">
                A career in Manual Software Testing offers clear progression paths. Start as a QA Analyst or Manual Tester, advance to Senior QA Engineer, Test Lead, or QA Manager, and eventually transition into specialized roles like Automation Engineer, Performance Tester, or even Product Manager. With ISTQB certification and hands-on experience, you can command competitive salaries and work with top global companies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Foundation for Automation Testing</h3>
              <p className="text-gray-600 leading-relaxed">
                Manual Testing is the essential foundation for anyone aspiring to become an Automation Engineer. Understanding testing principles, test design techniques, and defect management through manual testing makes the transition to automation tools like Selenium, Cypress, and Playwright much smoother. Our course prepares you for this natural career progression.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Opportunities and Remote Work</h3>
              <p className="text-gray-600 leading-relaxed">
                QA professionals are in demand worldwide, and Manual Software Testing skills are universally recognized. With ISTQB certification and practical experience, you can work with international clients, join global teams, and enjoy the flexibility of remote work opportunities. The skills you gain in this course are applicable across geographies and industries, giving you true career mobility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section Component
function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Launch Your QA Career?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Join 15,000+ students who transformed their careers with our Manual Software Testing course. Start learning today with 100% placement assistance!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Enroll Now
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300">
            Download Syllabus
          </button>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">QA Academy</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering aspiring QA professionals with world-class training and 100% placement assistance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#features" className="hover:text-orange-500 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-orange-500 transition-colors">
                  Curriculum
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-orange-500 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-orange-500 transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-orange-500 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Courses</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Manual Software Testing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Automation Testing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  API Testing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Performance Testing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  ISTQB Certification
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>info@qaacademy.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Bangalore, Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 QA Academy. All rights reserved. | Privacy Policy | Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function ManualSoftwareTestingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <KeyFeaturesSection />
      <CourseOverviewSection />
      <SkillsCoveredSection />
      <ToolsCoveredSection />
      <CapstoneProjectsSection />
      <CourseReviewsSection />
      <FAQSection />
      <AchievementsSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  );
}

