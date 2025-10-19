/**
 * Sample Data for City-Based Course Landing Pages
 * 
 * This file contains example data for different courses and cities.
 * Customize this data according to your actual courses and offerings.
 */

import type { CourseCategory, Module, Testimonial, FAQ, Company } from './types';

// ============================================
// CITIES DATA
// ============================================

export const INDIAN_CITIES = [
  'Mumbai',
  'Delhi',
  'Bangalore',
  'Hyderabad',
  'Pune',
  'Chennai',
  'Kolkata',
  'Ahmedabad',
  'Jaipur',
  'Lucknow',
  'Noida',
  'Gurgaon',
  'Chandigarh',
  'Indore',
  'Nagpur'
];

// ============================================
// SOFTWARE TESTING COURSE CATEGORIES
// ============================================

export const SOFTWARE_TESTING_CATEGORIES: CourseCategory[] = [
  {
    id: 'manual-testing',
    title: 'Manual Testing',
    description: 'Master the fundamentals of software testing with comprehensive manual testing techniques and methodologies.',
    icon: '📝',
    duration: '6-8 Weeks',
    level: 'Beginner',
    studentsEnrolled: 2500,
    rating: 4.8,
    href: '/courses/manual-testing',
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
    href: '/courses/automation-testing',
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
    href: '/courses/api-testing',
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
    href: '/courses/performance-testing',
    features: [
      'JMeter & LoadRunner tools',
      'Load and stress testing',
      'Performance metrics analysis',
      'Bottleneck identification'
    ]
  }
];

// ============================================
// DATA SCIENCE COURSE CATEGORIES
// ============================================

export const DATA_SCIENCE_CATEGORIES: CourseCategory[] = [
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Learn data analysis, visualization, and business intelligence with Excel, SQL, Tableau, and Power BI.',
    icon: '📊',
    duration: '8-10 Weeks',
    level: 'Beginner',
    studentsEnrolled: 2800,
    rating: 4.7,
    href: '/courses/data-analytics',
    features: [
      'Excel & SQL mastery',
      'Tableau & Power BI',
      'Statistical analysis',
      'Business intelligence'
    ]
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    description: 'Master ML algorithms, Python programming, and build predictive models with scikit-learn and TensorFlow.',
    icon: '🤖',
    duration: '10-12 Weeks',
    level: 'Intermediate',
    studentsEnrolled: 3500,
    rating: 4.9,
    href: '/courses/machine-learning',
    features: [
      'Python & ML libraries',
      'Supervised & unsupervised learning',
      'Model deployment',
      'Real-world ML projects'
    ]
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning & AI',
    description: 'Dive deep into neural networks, computer vision, and NLP with TensorFlow and PyTorch.',
    icon: '🧠',
    duration: '12-14 Weeks',
    level: 'Advanced',
    studentsEnrolled: 2200,
    rating: 4.8,
    href: '/courses/deep-learning',
    features: [
      'Neural networks & CNNs',
      'Computer vision & NLP',
      'TensorFlow & PyTorch',
      'AI model deployment'
    ]
  },
  {
    id: 'big-data',
    title: 'Big Data & Hadoop',
    description: 'Learn big data technologies including Hadoop, Spark, Hive, and data engineering concepts.',
    icon: '💾',
    duration: '10-12 Weeks',
    level: 'Intermediate',
    studentsEnrolled: 1900,
    rating: 4.6,
    href: '/courses/big-data',
    features: [
      'Hadoop ecosystem',
      'Apache Spark',
      'Data engineering',
      'Cloud data platforms'
    ]
  }
];

// ============================================
// DEVELOPMENT COURSE CATEGORIES
// ============================================

export const DEVELOPMENT_CATEGORIES: CourseCategory[] = [
  {
    id: 'full-stack-web',
    title: 'Full Stack Web Development',
    description: 'Become a full-stack developer with MERN stack, React, Node.js, and modern web technologies.',
    icon: '💻',
    duration: '16-20 Weeks',
    level: 'All Levels',
    studentsEnrolled: 4200,
    rating: 4.9,
    href: '/courses/full-stack-development',
    features: [
      'HTML, CSS, JavaScript',
      'React & Node.js',
      'MongoDB & Express',
      'Full-stack projects'
    ]
  },
  {
    id: 'python-development',
    title: 'Python Development',
    description: 'Master Python programming, Django, Flask, and build scalable web applications.',
    icon: '🐍',
    duration: '10-12 Weeks',
    level: 'Beginner',
    studentsEnrolled: 3100,
    rating: 4.8,
    href: '/courses/python-development',
    features: [
      'Python fundamentals',
      'Django & Flask',
      'REST API development',
      'Database integration'
    ]
  },
  {
    id: 'mobile-development',
    title: 'Mobile App Development',
    description: 'Build native and cross-platform mobile apps with React Native, Flutter, or native technologies.',
    icon: '📱',
    duration: '12-14 Weeks',
    level: 'Intermediate',
    studentsEnrolled: 2600,
    rating: 4.7,
    href: '/courses/mobile-development',
    features: [
      'React Native or Flutter',
      'iOS & Android development',
      'App deployment',
      'Mobile UI/UX'
    ]
  }
];

// ============================================
// SAMPLE CURRICULUM MODULES
// ============================================

export const SAMPLE_MODULES: Module[] = [
  {
    id: 'module-1',
    title: 'Introduction & Fundamentals',
    duration: '1 Week',
    topics: [
      'Course overview and objectives',
      'Industry landscape and opportunities',
      'Core concepts and terminology',
      'Tools and environment setup',
      'Best practices and standards',
      'Career paths and growth'
    ],
    learningOutcomes: [
      'Understand the course structure and goals',
      'Set up development environment',
      'Grasp fundamental concepts',
      'Identify career opportunities'
    ]
  },
  {
    id: 'module-2',
    title: 'Core Concepts & Techniques',
    duration: '2-3 Weeks',
    topics: [
      'Advanced theoretical concepts',
      'Practical implementation techniques',
      'Industry-standard methodologies',
      'Hands-on exercises and labs',
      'Case studies and examples',
      'Common challenges and solutions'
    ],
    learningOutcomes: [
      'Apply core concepts in practice',
      'Implement industry-standard techniques',
      'Solve real-world problems',
      'Build foundational skills'
    ]
  },
  {
    id: 'module-3',
    title: 'Advanced Topics & Tools',
    duration: '2-3 Weeks',
    topics: [
      'Advanced tool usage',
      'Framework implementation',
      'Optimization techniques',
      'Integration with other systems',
      'Automation and efficiency',
      'Performance tuning'
    ],
    learningOutcomes: [
      'Master advanced tools and frameworks',
      'Optimize workflows and processes',
      'Integrate multiple technologies',
      'Implement automation strategies'
    ]
  },
  {
    id: 'module-4',
    title: 'Real-World Projects',
    duration: '2-4 Weeks',
    topics: [
      'Live project implementation',
      'End-to-end development',
      'Team collaboration',
      'Version control and deployment',
      'Documentation and reporting',
      'Project presentation'
    ],
    learningOutcomes: [
      'Complete real-world projects',
      'Build professional portfolio',
      'Work in team environments',
      'Deploy production-ready solutions'
    ]
  }
];

// ============================================
// SAMPLE TESTIMONIALS
// ============================================

export const SAMPLE_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Priya Sharma',
    role: 'Software Engineer',
    company: 'TCS',
    image: '/testimonials/priya.jpg',
    rating: 5,
    text: 'The training was exceptional! The instructors are industry experts who provide hands-on experience with real projects. I got placed within 2 months of completing the course.',
    course: 'Full Stack Development',
    batch: 'Jan 2024',
    package: '6.5 LPA'
  },
  {
    id: 'test-2',
    name: 'Rahul Kumar',
    role: 'Data Analyst',
    company: 'Infosys',
    image: '/testimonials/rahul.jpg',
    rating: 5,
    text: 'Best decision I made was enrolling here. The curriculum is well-structured and the placement support is outstanding. Highly recommend this institute!',
    course: 'Data Science',
    batch: 'Mar 2024',
    package: '7.2 LPA'
  },
  {
    id: 'test-3',
    name: 'Sneha Patil',
    role: 'QA Engineer',
    company: 'Wipro',
    image: '/testimonials/sneha.jpg',
    rating: 5,
    text: 'I was a complete beginner with no IT background. The trainers patiently taught me everything from basics to advanced concepts. Got placed in a top company!',
    course: 'Software Testing',
    batch: 'Feb 2024',
    package: '5.8 LPA'
  }
];

// ============================================
// SAMPLE FAQS
// ============================================

export const SAMPLE_FAQS: FAQ[] = [
  {
    id: 'faq-1',
    question: 'What are the prerequisites for this course?',
    answer: 'No specific prerequisites are required. Basic computer knowledge and willingness to learn are sufficient. We start from fundamentals and gradually move to advanced topics.',
    category: 'Course Details'
  },
  {
    id: 'faq-2',
    question: 'What is the duration of the training program?',
    answer: 'The duration varies based on the course you choose, typically ranging from 8-16 weeks. We offer flexible batch timings including weekday, weekend, and fast-track options.',
    category: 'Course Details'
  },
  {
    id: 'faq-3',
    question: 'Do you provide placement assistance?',
    answer: 'Yes, we provide 100% placement assistance. Our dedicated placement cell has tie-ups with 500+ companies. We offer resume building, mock interviews, and direct job referrals.',
    category: 'Placement'
  },
  {
    id: 'faq-4',
    question: 'Is the certification recognized by companies?',
    answer: 'Absolutely! Our certification is industry-recognized and accepted by top companies across India. The certificate adds significant value to your resume and LinkedIn profile.',
    category: 'Certification'
  },
  {
    id: 'faq-5',
    question: 'What is the average salary package after completing the course?',
    answer: 'The average salary package ranges from 5-8 LPA depending on the course and prior experience. Freshers typically get 4-6 LPA, while experienced professionals get 6-10 LPA.',
    category: 'Placement'
  },
  {
    id: 'faq-6',
    question: 'Do you offer online or offline training?',
    answer: 'We offer both online and offline training options. Our offline centers are equipped with modern infrastructure. Online classes are conducted live with interactive sessions.',
    category: 'Training Mode'
  },
  {
    id: 'faq-7',
    question: 'Can I get a demo class before enrolling?',
    answer: 'Yes, we offer free demo classes for all our courses. You can attend a demo class to understand our teaching methodology and interact with trainers.',
    category: 'Enrollment'
  },
  {
    id: 'faq-8',
    question: 'What if I miss a class?',
    answer: 'All our classes are recorded and made available to students. If you miss a class, you can watch the recording or attend the same topic in another batch.',
    category: 'Training Mode'
  }
];

// ============================================
// HIRING PARTNERS
// ============================================

export const HIRING_PARTNERS: Company[] = [
  { id: '1', name: 'TCS' },
  { id: '2', name: 'Infosys' },
  { id: '3', name: 'Wipro' },
  { id: '4', name: 'Accenture' },
  { id: '5', name: 'Cognizant' },
  { id: '6', name: 'Tech Mahindra' },
  { id: '7', name: 'HCL Technologies' },
  { id: '8', name: 'Capgemini' },
  { id: '9', name: 'IBM' },
  { id: '10', name: 'Oracle' },
  { id: '11', name: 'Amazon' },
  { id: '12', name: 'Microsoft' }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Generate page title for SEO
 */
export function generatePageTitle(courseName: string, cityName: string): string {
  return `${courseName} Training in ${cityName} | Best Course with 100% Placement`;
}

/**
 * Generate page description for SEO
 */
export function generatePageDescription(courseName: string, cityName: string): string {
  return `Join the best ${courseName} training institute in ${cityName}. Learn with industry experts, work on real projects, and get 100% placement assistance. Enroll now!`;
}

/**
 * Generate keywords for SEO
 */
export function generateKeywords(courseName: string, cityName: string): string {
  const courseSlug = courseName.toLowerCase().replace(/\s+/g, '-');
  return `${courseSlug} course ${cityName}, ${courseSlug} training ${cityName}, ${courseSlug} institute ${cityName}, best ${courseSlug} ${cityName}, ${courseSlug} certification ${cityName}`;
}

/**
 * Generate canonical URL
 */
export function generateCanonicalUrl(courseName: string, cityName: string, baseUrl: string): string {
  const courseSlug = courseName.toLowerCase().replace(/\s+/g, '-');
  const citySlug = cityName.toLowerCase().replace(/\s+/g, '-');
  return `${baseUrl}/courses/${courseSlug}-${citySlug}`;
}

// ============================================
// EXPORT ALL
// ============================================


