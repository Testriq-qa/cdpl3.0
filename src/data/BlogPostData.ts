// ============================================================================
// BLOG POST DATA - MODULAR CONTENT SYSTEM
// ============================================================================
// This file contains blog post metadata. Full content is stored in separate
// files in the /posts directory for better maintainability and performance.

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================
export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  role: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: {
    bg: string;
    text: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  featuredImage: string;
  category: string;
  categoryId: string;
  author: string;
  authorId: string;
  publishDate: string;
  lastModified?: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  contentFile: string; // Path to content file
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    ogImage?: string;
    canonical?: string;
  };
}

export interface PopularPost {
  id: string;
  rank: number;
  title: string;
  category: string;
  slug: string;
}

export interface SidebarCategory {
  id: string;
  name: string;
  count: number;
  slug: string;
  color: string;
}

// ============================================================================
// AUTHORS DATA
// ============================================================================

export const AUTHORS: Record<string, Author> = {
  "sarah-chen": {
    id: "sarah-chen",
    name: "Sarah Chen",
    bio: "AI/ML expert with 10+ years of experience in machine learning and web development. Passionate about making AI accessible to developers.",
    avatar: "/blog/authors/sarah-chen.jpg",
    role: "AI/ML Engineer",
    social: {
      twitter: "https://twitter.com/sarahchen",
      linkedin: "https://linkedin.com/in/sarahchen",
      github: "https://github.com/sarahchen",
    },
  },
  "mike-rodriguez": {
    id: "mike-rodriguez",
    name: "Mike Rodriguez",
    bio: "Full-stack developer specializing in modern web technologies. Creator of popular open-source CSS frameworks.",
    avatar: "/blog/authors/mike-rodriguez.jpg",
    role: "Full-Stack Developer",
    social: {
      twitter: "https://twitter.com/mikerodriguez",
      linkedin: "https://linkedin.com/in/mikerodriguez",
      github: "https://github.com/mikerodriguez",
    },
  },
  "emily-johnson": {
    id: "emily-johnson",
    name: "Emily Johnson",
    bio: "React specialist and frontend architect. Core contributor to several popular React libraries and tools.",
    avatar: "/blog/authors/emily-johnson.jpg",
    role: "Frontend Architect",
    social: {
      twitter: "https://twitter.com/emilyjohnson",
      linkedin: "https://linkedin.com/in/emilyjohnson",
      github: "https://github.com/emilyjohnson",
    },
  },
  "david-kim": {
    id: "david-kim",
    name: "David Kim",
    bio: "Backend architect with expertise in database optimization and distributed systems. Author of 'Scalable Backend Design'.",
    avatar: "/blog/authors/david-kim.jpg",
    role: "Backend Architect",
    social: {
      twitter: "https://twitter.com/davidkim",
      linkedin: "https://linkedin.com/in/davidkim",
    },
  },
  "alex-green": {
    id: "alex-green",
    name: "Alex Green",
    bio: "AI researcher focusing on generative models and their practical applications in content creation.",
    avatar: "/blog/authors/alex-green.jpg",
    role: "AI Researcher",
    social: {
      linkedin: "https://linkedin.com/in/alexgreen",
      github: "https://github.com/alexgreen",
    },
  },
  "sophia-lee": {
    id: "sophia-lee",
    name: "Sophia Lee",
    bio: "UX designer and accessibility advocate. Helping companies build inclusive digital experiences.",
    avatar: "/blog/authors/sophia-lee.jpg",
    role: "UX/Accessibility Expert",
    social: {
      twitter: "https://twitter.com/sophialee",
      linkedin: "https://linkedin.com/in/sophialee",
      website: "https://sophialee.design",
    },
  },
  "chris-evans": {
    id: "chris-evans",
    name: "Chris Evans",
    bio: "DevOps engineer specializing in Kubernetes and cloud-native technologies. CNCF ambassador.",
    avatar: "/blog/authors/chris-evans.jpg",
    role: "DevOps Engineer",
    social: {
      twitter: "https://twitter.com/chrisevans",
      linkedin: "https://linkedin.com/in/chrisevans",
      github: "https://github.com/chrisevans",
    },
  },
  "jordan-smith": {
    id: "jordan-smith",
    name: "Jordan Smith",
    bio: "Cloud architect with deep expertise in serverless architectures and AWS. AWS Community Builder.",
    avatar: "/blog/authors/jordan-smith.jpg",
    role: "Cloud Architect",
    social: {
      twitter: "https://twitter.com/jordansmith",
      linkedin: "https://linkedin.com/in/jordansmith",
    },
  },
  "patricia-wong": {
    id: "patricia-wong",
    name: "Patricia Wong",
    bio: "Frontend architect passionate about state management and performance optimization in React applications.",
    avatar: "/blog/authors/patricia-wong.jpg",
    role: "Frontend Architect",
    social: {
      twitter: "https://twitter.com/patriciawong",
      github: "https://github.com/patriciawong",
    },
  },
  "robert-brown": {
    id: "robert-brown",
    name: "Robert Brown",
    bio: "Security engineer specializing in API security and authentication. OWASP contributor.",
    avatar: "/blog/authors/robert-brown.jpg",
    role: "Security Engineer",
    social: {
      twitter: "https://twitter.com/robertbrown",
      linkedin: "https://linkedin.com/in/robertbrown",
      github: "https://github.com/robertbrown",
    },
  },
};

// ============================================================================
// CATEGORIES DATA
// ============================================================================

export const CATEGORIES: Record<string, Category> = {
  "ai-ml": {
    id: "ai-ml",
    name: "AI & Machine Learning",
    slug: "ai-ml",
    description: "Explore the latest in artificial intelligence and machine learning technologies",
    color: {
      bg: "bg-purple-100",
      text: "text-purple-700",
    },
  },
  "web-development": {
    id: "web-development",
    name: "Web Development",
    slug: "web-development",
    description: "Modern web development techniques, frameworks, and best practices",
    color: {
      bg: "bg-blue-100",
      text: "text-blue-700",
    },
  },
  "react": {
    id: "react",
    name: "React",
    slug: "react",
    description: "Everything about React, from basics to advanced patterns and performance optimization",
    color: {
      bg: "bg-cyan-100",
      text: "text-cyan-700",
    },
  },
  "backend-development": {
    id: "backend-development",
    name: "Backend Development",
    slug: "backend-development",
    description: "Server-side development, databases, APIs, and backend architecture",
    color: {
      bg: "bg-green-100",
      text: "text-green-700",
    },
  },
  "ui-ux-design": {
    id: "ui-ux-design",
    name: "UI/UX Design",
    slug: "ui-ux-design",
    description: "User interface design, user experience, and accessibility best practices",
    color: {
      bg: "bg-pink-100",
      text: "text-pink-700",
    },
  },
  "devops": {
    id: "devops",
    name: "DevOps",
    slug: "devops",
    description: "DevOps practices, CI/CD, containerization, and infrastructure automation",
    color: {
      bg: "bg-amber-100",
      text: "text-amber-700",
    },
  },
  "cloud-computing": {
    id: "cloud-computing",
    name: "Cloud Computing",
    slug: "cloud-computing",
    description: "Cloud platforms, serverless architecture, and cloud-native development",
    color: {
      bg: "bg-indigo-100",
      text: "text-indigo-700",
    },
  },
  "software-testing": {
    id: "software-testing",
    name: "Software Testing",
    slug: "software-testing",
    description: "Testing strategies, automation, and quality assurance practices",
    color: {
      bg: "bg-teal-100",
      text: "text-teal-700",
    },
  },
  "data-science": {
    id: "data-science",
    name: "Data Science",
    slug: "data-science",
    description: "Data analysis, visualization, and data-driven decision making",
    color: {
      bg: "bg-orange-100",
      text: "text-orange-700",
    },
  },
  "digital-marketing": {
    id: "digital-marketing",
    name: "Digital Marketing",
    slug: "digital-marketing",
    description: "SEO, content marketing, and digital growth strategies",
    color: {
      bg: "bg-rose-100",
      text: "text-rose-700",
    },
  },
  "career-tips": {
    id: "career-tips",
    name: "Career Tips",
    slug: "career-tips",
    description: "Career advice, interview tips, and professional development",
    color: {
      bg: "bg-violet-100",
      text: "text-violet-700",
    },
  },
  "tutorials": {
    id: "tutorials",
    name: "Tutorials",
    slug: "tutorials",
    description: "Step-by-step guides and hands-on tutorials for developers",
    color: {
      bg: "bg-emerald-100",
      text: "text-emerald-700",
    },
  },
};

// ============================================================================
// BLOG POSTS METADATA
// ============================================================================

export const BLOG_POSTS: BlogPost[] = [

{
    id: "13",
    slug: "top-data-science-trends-2025-guide",
    title: "Top Data Science Trends 2025: AI, Automation, and Ethical Insights",
    description: "Explore the top data science trends shaping 2025, from generative AI and automated ML to ethical practices and edge computing. A complete guide for professionals and businesses.",
    excerpt: "As data volumes explode in 2025, staying ahead of trends like agentic AI and augmented analytics is crucial. Learn how these innovations drive smarter decisions, boost efficiency, and address ethical challenges in data science.",
    featuredImage: "/blog/featured/data-science-trends-2025.jpg",
    category: "Data Science",
    categoryId: "data-science",
author: "Sarah Chen",
    authorId: "sarah-chen",
    publishDate: "2025-10-29",
    lastModified: "2025-10-29",
    readTime: "13 min read",
    tags: ["Data Science", "AI Trends", "Generative AI", "Automated ML", "Ethical AI", "Edge Computing", "2025"],
    featured: true,
    contentFile: "top-data-science-trends-2025-guide",
    seo: {
      metaTitle: "Data Science Trends 2025: Top Innovations & Predictions",
      metaDescription: "Discover the leading data science trends for 2025, including generative AI, automated analytics, and ethical data practices. Expert insights to future-proof your career and business.",
      keywords: [
        "data science trends 2025",
        "generative AI in data science",
        "automated machine learning",
        "ethical AI trends",
        "edge computing data",
        "augmented analytics",
        "agentic AI"
      ],
      ogImage: "/blog/featured/data-science-trends-2025.jpg",
      canonical: "/blog/top-data-science-trends-2025-guide"
    }
  },
  {
    id: "12",
    slug: "mastering-automated-software-testing-2025",
    title: "Mastering Automated Software Testing: The Complete 2025 Guide",
    description: "A comprehensive guide to automated software testing covering fundamentals, best practices, advanced techniques, tools, real-world examples, and future trends in 2025.",
    excerpt: "Discover how to build a robust automated testing strategy that saves time, reduces bugs, and scales with modern software development. From Selenium to AI-powered testing, this guide has everything QA engineers and developers need.",
    featuredImage: "/blog/featured/testing.png",
    category: "Software Testing",
    categoryId: "software-testing",
    author: "Sarah Chen",
    authorId: "sarah-chen",
    publishDate: "2025-01-15",
    lastModified: "2025-01-15",
    readTime: "14 min read",
    tags: ["Automated Testing", "Software Testing", "Selenium", "Test Automation", "QA", "DevOps", "2025"],
    featured: true,
    contentFile: "mastering-automated-software-testing-2025",
    seo: {
      metaTitle: "Automated Software Testing Guide 2025: Best Practices & Tools",
      metaDescription: "Master automated software testing in 2025. Learn fundamentals, avoid pitfalls, implement best practices, explore AI tools, and future-proof your QA strategy with this expert guide.",
      keywords: [
        "automated software testing",
        "test automation 2025",
        "selenium testing",
        "qa automation",
        "ai in testing",
        "software testing best practices",
        "end-to-end testing"
      ],
      ogImage: "/blog/featured/automated-software-testing-2025.jpg",
      canonical: "/blog/mastering-automated-software-testing-2025"
    }
  },
  
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export const getAllPosts = (): BlogPost[] => {
  return BLOG_POSTS.sort((a, b) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
};

export const getFeaturedPost = (): BlogPost | null => {
  return BLOG_POSTS.find(post => post.featured) || BLOG_POSTS[0];
};

export const getLatestPosts = (limit: number = 10): BlogPost[] => {
  const featuredPost = getFeaturedPost();
  return BLOG_POSTS
    .filter(post => post.id !== featuredPost?.id)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit);
};

export const getPostBySlug = (slug: string): BlogPost | null => {
  return BLOG_POSTS.find(post => post.slug === slug) || null;
};

export const getPostsByCategory = (categoryId: string): BlogPost[] => {
  return BLOG_POSTS
    .filter(post => post.categoryId === categoryId)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
};

export const getCategoryById = (id: string): Category | null => {
  return CATEGORIES[id] || null;
};

export const getCategoryBySlug = (slug: string): Category | null => {
  return Object.values(CATEGORIES).find(cat => cat.slug === slug) || null;
};

export const getAuthorById = (id: string): Author | null => {
  return AUTHORS[id] || null;
};

export const getAllCategories = (): Category[] => {
  return Object.values(CATEGORIES);
};

export const getMainCategories = (): Category[] => {
  return [
    CATEGORIES["software-testing"],
    CATEGORIES["data-science"],
    CATEGORIES["web-development"],
    CATEGORIES["ai-ml"],
  ];
};

export const getDropdownCategories = (): Category[] => {
  const mainCategoryIds = ["software-testing", "data-science", "web-development", "ai-ml"];
  return Object.values(CATEGORIES).filter(cat => !mainCategoryIds.includes(cat.id));
};

// ============================================================================
// SIDEBAR DATA
// ============================================================================

export const POPULAR_POSTS: PopularPost[] = [
  {
    id: "1",
    rank: 1,
    title: "The Future of AI in Web Development: 2025 and Beyond",
    category: "AI & ML",
    slug: "/blog/future-of-ai-web-development-2025"
  },
  {
    id: "2",
    rank: 2,
    title: "Building Responsive Layouts with CSS Grid and Flexbox",
    category: "Web Dev",
    slug: "/blog/responsive-layouts-css-grid-flexbox"
  },
  {
    id: "3",
    rank: 3,
    title: "React 19: What's New and How to Migrate",
    category: "React",
    slug: "/blog/react-19-whats-new-migration"
  },
  {
    id: "4",
    rank: 4,
    title: "Optimizing Database Performance for High-Traffic Applications",
    category: "Backend",
    slug: "/blog/database-performance-optimization"
  },
  {
    id: "5",
    rank: 5,
    title: "Leveraging Generative AI for Content Creation",
    category: "AI & ML",
    slug: "/blog/generative-ai-content-creation"
  },
];

export const SIDEBAR_CATEGORIES: SidebarCategory[] = [
  {
    id: "1",
    name: "AI & Machine Learning",
    count: 2,
    slug: "/blog/category/ai-ml",
    color: "bg-purple-100 text-purple-700"
  },
  {
    id: "2",
    name: "Web Development",
    count: 1,
    slug: "/blog/category/web-development",
    color: "bg-blue-100 text-blue-700"
  },
  {
    id: "3",
    name: "React",
    count: 2,
    slug: "/blog/category/react",
    color: "bg-cyan-100 text-cyan-700"
  },
  {
    id: "4",
    name: "Backend Development",
    count: 2,
    slug: "/blog/category/backend-development",
    color: "bg-green-100 text-green-700"
  },
  {
    id: "5",
    name: "UI/UX Design",
    count: 1,
    slug: "/blog/category/ui-ux-design",
    color: "bg-pink-100 text-pink-700"
  },
  {
    id: "6",
    name: "DevOps",
    count: 1,
    slug: "/blog/category/devops",
    color: "bg-amber-100 text-amber-700"
  },
  {
    id: "7",
    name: "Cloud Computing",
    count: 1,
    slug: "/blog/category/cloud-computing",
    color: "bg-indigo-100 text-indigo-700"
  },
];

