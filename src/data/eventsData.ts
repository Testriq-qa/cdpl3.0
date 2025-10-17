export interface PastEvent {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  location: string;
  organization: string;
  attendees: number;
  category: string;
  categoryColor: string;
  serviceType: string; // Links to service
  purpose: string;
  sessionHighlights: {
    title: string;
    points: string[];
  }[];
  specialSession?: {
    speaker: string;
    topic: string;
    highlights: string[];
  };
  keyTakeaways: string[];
  highlights: string[];
  imageUrl?: string;
  featured?: boolean;
  galleryCount?: number;
  videoUrl?: string;
}

export const pastEvents: PastEvent[] = [
  {
    id: "1",
    slug: "ai-conference-nagindas-khandwala",
    title: "National Conference on Applications of AI",
    subtitle: "Promises, Perils, and Sustainability",
    date: "February 14, 2025",
    location: "MKES Trust Nagindas Khandwala College, Mumbai",
    organization: "Nagindas Khandwala College",
    attendees: 110,
    category: "AI & Machine Learning",
    categoryColor: "bg-purple-500",
    serviceType: "expert-talks",
    purpose: "Artificial Intelligence (AI) is no longer just a futuristic concept—it is transforming industries, businesses, and human interactions in real time. However, with rapid advancements in AI, new challenges arise, including ethical concerns, bias, and governance issues. This session aimed to provide an in-depth look at Generative AI, Large Language Models (LLMs), and Business Intelligence (BI).",
    sessionHighlights: [
      {
        title: "Introduction to Generative AI and Large Language Models (LLMs)",
        points: [
          "How AI models learn from data and generate human-like responses",
          "The potential of LLMs in automating content creation, customer support, and data analysis",
          "Limitations of LLMs: Bias, misinformation, and ethical concerns"
        ]
      },
      {
        title: "Applications of AI-Driven Business Intelligence (BI) for Decision-Making",
        points: [
          "AI-powered predictive analytics for market trends and customer behavior",
          "AI in fraud detection and cybersecurity",
          "Real-world case studies of companies leveraging AI for competitive advantage"
        ]
      },
      {
        title: "The Ethical and Governance Challenges in AI Adoption",
        points: [
          "How AI bias and misinformation can lead to flawed decision-making",
          "The role of government policies and regulations in AI governance",
          "Discussing AI ethics and responsible AI development"
        ]
      },
      {
        title: "Case Studies on AI-Driven Automation in Industry",
        points: [
          "How AI is being used in healthcare, finance, and manufacturing",
          "The role of AI in automating supply chains and logistics",
          "How businesses are balancing AI-driven automation with human oversight"
        ]
      }
    ],
    specialSession: {
      speaker: "Shoeb Sheikh, Head of Learning & Development at Testriq QA Lab",
      topic: "AI Integration in Software Testing",
      highlights: [
        "How AI-powered testing tools improve software quality and efficiency",
        "The role of machine learning in detecting software defects faster",
        "AI-driven automation in regression and performance testing"
      ]
    },
    keyTakeaways: [
      "AI is not a replacement for human intelligence but an amplifier of it",
      "Businesses that adopt AI responsibly will gain a competitive edge",
      "Ethical AI development is critical for sustainability and trust",
      "The right balance of AI and human expertise is the key to long-term AI adoption"
    ],
    highlights: [
      "Introduction to Generative AI and LLMs",
      "AI-Driven Business Intelligence applications",
      "Ethical and Governance Challenges",
      "AI Integration in Software Testing"
    ],
    featured: true,
    galleryCount: 45,
  },
  {
    id: "2",
    slug: "software-testing-workshop-bangalore",
    title: "Software Testing Workshop",
    subtitle: "Manual & Automation Testing Masterclass",
    date: "January 20, 2025",
    location: "Corporate Training Center, Bangalore",
    organization: "Tech Corp India",
    attendees: 85,
    category: "Software Testing",
    categoryColor: "bg-green-500",
    serviceType: "workshops",
    purpose: "A comprehensive workshop designed to equip participants with both manual and automation testing skills. The session covered industry best practices, hands-on exercises, and real-world testing scenarios to prepare professionals for modern QA challenges.",
    sessionHighlights: [
      {
        title: "Manual Testing Fundamentals",
        points: [
          "Test case design and execution strategies",
          "Bug reporting and tracking best practices",
          "Exploratory testing techniques",
          "Test documentation and reporting"
        ]
      },
      {
        title: "Automation Testing with Selenium",
        points: [
          "Setting up Selenium WebDriver framework",
          "Writing robust test scripts",
          "Page Object Model implementation",
          "Cross-browser testing strategies"
        ]
      },
      {
        title: "API Testing with Postman",
        points: [
          "RESTful API testing fundamentals",
          "Creating and managing test collections",
          "Automated API testing workflows",
          "Integration with CI/CD pipelines"
        ]
      },
      {
        title: "Performance Testing Basics",
        points: [
          "Load testing concepts and tools",
          "Performance metrics and analysis",
          "Identifying bottlenecks",
          "Best practices for scalability testing"
        ]
      }
    ],
    keyTakeaways: [
      "Quality assurance is integral to software development lifecycle",
      "Automation testing increases efficiency and test coverage",
      "API testing is crucial for modern microservices architecture",
      "Continuous testing enables faster and more reliable releases"
    ],
    highlights: [
      "Comprehensive manual testing techniques",
      "Selenium automation framework",
      "API testing with Postman",
      "Performance testing fundamentals"
    ],
    featured: false,
    galleryCount: 32,
  },
  {
    id: "3",
    slug: "data-science-bootcamp-iit-delhi",
    title: "Data Science & Analytics Bootcamp",
    subtitle: "From Data to Insights",
    date: "December 15, 2024",
    location: "IIT Delhi",
    organization: "Indian Institute of Technology, Delhi",
    attendees: 150,
    category: "Data Science",
    categoryColor: "bg-blue-500",
    serviceType: "workshops",
    purpose: "An intensive bootcamp focused on transforming raw data into actionable insights. Participants learned the complete data science workflow from data collection to visualization, with hands-on projects using industry-standard tools and real-world datasets.",
    sessionHighlights: [
      {
        title: "Python for Data Analysis",
        points: [
          "NumPy and Pandas for data manipulation",
          "Data cleaning and preprocessing techniques",
          "Exploratory data analysis (EDA)",
          "Working with different data formats"
        ]
      },
      {
        title: "Machine Learning Algorithms",
        points: [
          "Supervised learning: Regression and Classification",
          "Unsupervised learning: Clustering and Dimensionality Reduction",
          "Model evaluation and selection",
          "Feature engineering best practices"
        ]
      },
      {
        title: "Data Visualization with Tableau",
        points: [
          "Creating interactive dashboards",
          "Visual analytics techniques",
          "Storytelling with data",
          "Best practices for effective visualization"
        ]
      },
      {
        title: "Real-World Case Studies",
        points: [
          "Customer segmentation analysis",
          "Predictive maintenance in manufacturing",
          "Fraud detection in financial services",
          "Recommendation systems"
        ]
      }
    ],
    keyTakeaways: [
      "Data-driven decision making is essential for business success",
      "Python is the industry standard for data science",
      "Effective visualization makes data accessible to stakeholders",
      "Machine learning models require continuous refinement and monitoring"
    ],
    highlights: [
      "Python for data analysis",
      "Machine learning algorithms",
      "Data visualization with Tableau",
      "Real-world case studies"
    ],
    featured: true,
    galleryCount: 58,
    videoUrl: "/events/recordings/data-science-bootcamp",
  },
  {
    id: "4",
    slug: "faculty-development-mumbai-university",
    title: "Faculty Development Program",
    subtitle: "Modern Teaching Methodologies",
    date: "November 10, 2024",
    location: "Mumbai University",
    organization: "University of Mumbai",
    attendees: 75,
    category: "Academic Training",
    categoryColor: "bg-orange-500",
    serviceType: "faculty-development",
    purpose: "A comprehensive program designed to enhance teaching capabilities of faculty members. The program focused on modern pedagogical approaches, digital tools integration, and student-centric teaching methods to improve learning outcomes.",
    sessionHighlights: [
      {
        title: "Student-Centric Teaching Approaches",
        points: [
          "Active learning strategies",
          "Flipped classroom methodology",
          "Collaborative learning techniques",
          "Differentiated instruction methods"
        ]
      },
      {
        title: "Digital Tools for Education",
        points: [
          "Learning Management Systems (LMS)",
          "Interactive presentation tools",
          "Online assessment platforms",
          "Virtual collaboration tools"
        ]
      },
      {
        title: "Curriculum Design Workshop",
        points: [
          "Outcome-based education framework",
          "Bloom's Taxonomy application",
          "Course structure and syllabus design",
          "Alignment with industry requirements"
        ]
      },
      {
        title: "Assessment and Feedback Techniques",
        points: [
          "Formative vs summative assessment",
          "Rubric development",
          "Effective feedback strategies",
          "Continuous improvement processes"
        ]
      }
    ],
    keyTakeaways: [
      "Active learning significantly enhances student engagement",
      "Technology integration improves teaching effectiveness",
      "Continuous faculty development is essential for quality education",
      "Constructive feedback drives student improvement"
    ],
    highlights: [
      "Student-centric teaching approaches",
      "Digital tools for education",
      "Curriculum design workshop",
      "Assessment and feedback techniques"
    ],
    featured: false,
    galleryCount: 28,
  },
  {
    id: "5",
    slug: "fullstack-workshop-infosys-pune",
    title: "Full Stack Development Workshop",
    subtitle: "MERN Stack Intensive Training",
    date: "October 25, 2024",
    location: "Pune IT Park",
    organization: "Infosys Limited",
    attendees: 120,
    category: "Web Development",
    categoryColor: "bg-cyan-500",
    serviceType: "workshops",
    purpose: "An intensive workshop covering the complete MERN (MongoDB, Express.js, React.js, Node.js) stack. Participants built full-stack applications from scratch, learning modern web development practices and deployment strategies.",
    sessionHighlights: [
      {
        title: "MongoDB Database Design",
        points: [
          "NoSQL database concepts",
          "Schema design and modeling",
          "CRUD operations and queries",
          "Database optimization techniques"
        ]
      },
      {
        title: "Express.js Backend Development",
        points: [
          "RESTful API architecture",
          "Middleware and routing",
          "Authentication and authorization",
          "Error handling best practices"
        ]
      },
      {
        title: "React.js Frontend Mastery",
        points: [
          "Component-based architecture",
          "State management with Redux",
          "React Hooks and modern patterns",
          "Performance optimization"
        ]
      },
      {
        title: "Node.js Server-Side Programming",
        points: [
          "Asynchronous programming patterns",
          "File system operations",
          "Package management with npm",
          "Deployment and scaling strategies"
        ]
      }
    ],
    keyTakeaways: [
      "Full stack skills are highly valued in the industry",
      "MERN stack is the industry-standard for modern web applications",
      "Hands-on projects build practical confidence",
      "Continuous learning is essential in web development"
    ],
    highlights: [
      "MongoDB database design",
      "Express.js backend development",
      "React.js frontend mastery",
      "Node.js server-side programming"
    ],
    featured: false,
    galleryCount: 41,
  },
  {
    id: "6",
    slug: "industrial-visit-tata-motors",
    title: "Industrial Visit & Training",
    subtitle: "Manufacturing Excellence Tour",
    date: "September 18, 2024",
    location: "Tata Motors Plant, Pune",
    organization: "Engineering College, Nashik",
    attendees: 60,
    category: "Industrial Training",
    categoryColor: "bg-teal-500",
    serviceType: "industrial-visits",
    purpose: "An immersive industrial visit providing students with firsthand exposure to world-class manufacturing processes. Participants observed live production lines, quality control systems, and automation technologies while interacting with industry professionals.",
    sessionHighlights: [
      {
        title: "Live Manufacturing Process Observation",
        points: [
          "Assembly line operations",
          "Lean manufacturing principles",
          "Just-in-time production systems",
          "Workflow optimization techniques"
        ]
      },
      {
        title: "Quality Control Systems",
        points: [
          "Six Sigma methodology",
          "Statistical process control",
          "Defect prevention strategies",
          "Quality assurance protocols"
        ]
      },
      {
        title: "Automation in Production",
        points: [
          "Robotic process automation",
          "IoT integration in manufacturing",
          "Predictive maintenance systems",
          "Industry 4.0 technologies"
        ]
      },
      {
        title: "Interaction with Industry Experts",
        points: [
          "Career guidance session",
          "Skills required in manufacturing",
          "Q&A with plant managers",
          "Networking opportunities"
        ]
      }
    ],
    keyTakeaways: [
      "Theory meets practical application in real-world settings",
      "Industry exposure is invaluable for career preparation",
      "Quality is non-negotiable in manufacturing",
      "Automation and technology drive efficiency and innovation"
    ],
    highlights: [
      "Live manufacturing process observation",
      "Quality control systems",
      "Automation in production",
      "Interaction with industry experts"
    ],
    featured: true,
    galleryCount: 67,
  },
  {
    id: "7",
    slug: "train-the-trainer-program-corporate",
    title: "Train-the-Trainer Program",
    subtitle: "Building Internal Training Capability",
    date: "August 5, 2024",
    location: "Mumbai Corporate Hub",
    organization: "Multinational IT Corporation",
    attendees: 45,
    category: "Corporate Training",
    categoryColor: "bg-pink-500",
    serviceType: "train-the-trainer",
    purpose: "A specialized program designed to develop internal trainers who can effectively deliver technical and soft skills training within their organizations. Participants learned instructional design, delivery techniques, and assessment methods.",
    sessionHighlights: [
      {
        title: "Instructional Design Mastery",
        points: [
          "ADDIE model for training design",
          "Learning objectives formulation",
          "Content structuring techniques",
          "Training material development"
        ]
      },
      {
        title: "Delivery Techniques",
        points: [
          "Presentation skills enhancement",
          "Engaging diverse learners",
          "Handling difficult participants",
          "Virtual training best practices"
        ]
      },
      {
        title: "Feedback and Assessment Methods",
        points: [
          "Formative and summative assessments",
          "Kirkpatrick's evaluation model",
          "Providing constructive feedback",
          "Measuring training effectiveness"
        ]
      },
      {
        title: "Training Material Development",
        points: [
          "Creating engaging presentations",
          "Developing hands-on exercises",
          "Assessment design",
          "Resource compilation"
        ]
      }
    ],
    keyTakeaways: [
      "Effective trainers are made, not born",
      "Instructional design is the foundation of good training",
      "Engagement is key to knowledge retention",
      "Continuous improvement through feedback is essential"
    ],
    highlights: [
      "Instructional design mastery",
      "Delivery techniques",
      "Feedback and assessment methods",
      "Training material development"
    ],
    featured: false,
    galleryCount: 23,
  },
  {
    id: "8",
    slug: "sttp-iot-applications",
    title: "STTP on IoT Applications",
    subtitle: "Internet of Things in Smart Systems",
    date: "July 12, 2024",
    location: "VIT Pune",
    organization: "Vishwakarma Institute of Technology",
    attendees: 95,
    category: "Technology",
    categoryColor: "bg-indigo-500",
    serviceType: "sttp",
    purpose: "A 5-day Short Term Training Program focused on Internet of Things (IoT) applications in smart systems. Faculty and students learned IoT fundamentals, sensor integration, data analytics, and real-world implementation strategies.",
    sessionHighlights: [
      {
        title: "IoT Fundamentals",
        points: [
          "IoT architecture and components",
          "Communication protocols (MQTT, CoAP)",
          "Edge computing concepts",
          "IoT security considerations"
        ]
      },
      {
        title: "Sensor Integration and Data Collection",
        points: [
          "Sensor types and selection",
          "Arduino and Raspberry Pi programming",
          "Data acquisition techniques",
          "Calibration and accuracy"
        ]
      },
      {
        title: "IoT Data Analytics",
        points: [
          "Real-time data processing",
          "Cloud platforms for IoT",
          "Data visualization dashboards",
          "Predictive analytics applications"
        ]
      },
      {
        title: "Real-World IoT Projects",
        points: [
          "Smart home automation",
          "Industrial IoT applications",
          "Smart agriculture systems",
          "Healthcare monitoring solutions"
        ]
      }
    ],
    keyTakeaways: [
      "IoT is transforming industries across sectors",
      "Hands-on experience is crucial for IoT mastery",
      "Security must be built into IoT systems from the start",
      "Data analytics unlocks the true value of IoT"
    ],
    highlights: [
      "IoT fundamentals and architecture",
      "Sensor integration techniques",
      "IoT data analytics",
      "Real-world project implementation"
    ],
    featured: false,
    galleryCount: 52,
  },
];

// Helper function to get event by slug
export const getEventBySlug = (slug: string): PastEvent | undefined => {
  return pastEvents.find(event => event.slug === slug);
};

// Helper function to get events by service type
export const getEventsByService = (serviceType: string): PastEvent[] => {
  return pastEvents.filter(event => event.serviceType === serviceType);
};

// Helper function to get featured events
export const getFeaturedEvents = (): PastEvent[] => {
  return pastEvents.filter(event => event.featured);
};

// Helper function to get events by category
export const getEventsByCategory = (category: string): PastEvent[] => {
  return pastEvents.filter(event => event.category === category);
};
