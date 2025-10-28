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

id: "11",
  slug: "api-testing-mistakes-beginners-guide",
  title: "15 API Testing Mistakes Beginners Make (And How to Fix Them)",
  description: "Discover 15 common API testing mistakes beginners make and learn how to avoid them. Includes practical solutions, code examples, and a comprehensive checklist to improve your API testing skills.",
  excerpt: "73% of API failures in production could have been prevented with proper testing. Learn the 15 most common API testing mistakes beginners make and get practical solutions to fix them. From planning errors to security oversights, this comprehensive guide covers everything you need to know.",
  featuredImage: "/blog/api-testing-mistakes-featured.jpg",
  category: "Software Testing",
  categoryId: "software-testing",
  author: "Sarah Chen",
  authorId: "sarah-chen",
  publishDate: "2024-01-15",
  readTime: "15 min read",
  tags: ["API Testing", "Software Testing", "Testing Best Practices", "API Security", "Test Automation", "Quality Assurance"],
  featured: true,
  contentFile: "api-testing-mistakes-beginners-guide",
  seo: {
    metaTitle: "15 API Testing Mistakes Beginners Make (And How to Fix Them) - 2024",
    metaDescription: "Discover 15 common API testing mistakes beginners make and learn how to avoid them. Includes practical solutions, code examples, and a comprehensive checklist.",
    keywords: [
      "API testing mistakes",
      "common API testing errors",
      "API testing best practices",
      "how to test APIs correctly",
      "API testing checklist",
      "avoid API testing failures",
      "REST API testing",
      "API test automation",
      "API security testing",
      "API performance testing"
    ],
    ogImage: "/blog/api-testing-mistakes-featured.jpg",
    canonical: "https://yourwebsite.com/blog/api-testing-mistakes-beginners-guide",
  },
},


  
{
    id: "1",
    slug: "future-of-ai-web-development-2025",
    title: "The Future of AI in Web Development: 2025 and Beyond",
    description: "Explore how artificial intelligence is revolutionizing web development, from automated code generation to intelligent user experiences.",
    excerpt: "Artificial intelligence is transforming the way we build web applications. Discover the latest AI tools, techniques, and trends that are shaping the future of web development in 2025.",
    featuredImage: "/blog/featured-ai.jpg",
    category: "AI & Machine Learning",
    categoryId: "ai-ml",
    author: "Sarah Chen",
    authorId: "sarah-chen",
    publishDate: "2024-10-24",
    readTime: "12 min read",
    tags: ["AI", "Web Development", "Machine Learning", "Automation", "Future Tech"],
    featured: true,
    contentFile: "future-of-ai-web-development-2025",
    seo: {
      metaTitle: "The Future of AI in Web Development: 2025 Trends & Tools",
      metaDescription: "Discover how AI is revolutionizing web development in 2025. Learn about AI-powered tools, automated testing, personalization, and future trends shaping the industry.",
      keywords: ["AI web development", "artificial intelligence", "machine learning", "AI tools 2025", "automated coding", "GitHub Copilot", "AI testing", "future of web development"],
      ogImage: "/blog/featured-ai.jpg",
    },
  },
  {
    id: "2",
    slug: "responsive-layouts-css-grid-flexbox",
    title: "Building Responsive Layouts with CSS Grid and Flexbox",
    description: "Master modern CSS layout techniques to create responsive, flexible designs that work beautifully across all devices.",
    excerpt: "Learn how to combine CSS Grid and Flexbox to build sophisticated, responsive layouts. This comprehensive guide covers best practices, real-world examples, and common patterns.",
    featuredImage: "/blog/css-grid-flexbox.jpg",
    category: "Web Development",
    categoryId: "web-development",
    author: "Mike Rodriguez",
    authorId: "mike-rodriguez",
    publishDate: "2024-10-20",
    readTime: "10 min read",
    tags: ["CSS", "Flexbox", "CSS Grid", "Responsive Design", "Frontend"],
    featured: false,
    contentFile: "responsive-layouts-css-grid-flexbox",
    seo: {
      metaTitle: "CSS Grid & Flexbox: Complete Guide to Responsive Layouts",
      metaDescription: "Master CSS Grid and Flexbox to build modern, responsive web layouts. Learn when to use each, best practices, and real-world examples with code.",
      keywords: ["CSS Grid", "Flexbox", "responsive design", "CSS layouts", "modern CSS", "web design", "frontend development"],
      ogImage: "/blog/css-grid-flexbox.jpg",
    },
  },
  {
    id: "3",
    slug: "react-19-whats-new-migration",
    title: "React 19: What's New and How to Migrate Your Application",
    description: "Comprehensive guide to React 19's new features, breaking changes, and step-by-step migration strategies for your existing applications.",
    excerpt: "React 19 brings significant improvements to performance, developer experience, and new features like Server Components and Actions. Learn what's changed and how to upgrade smoothly.",
    featuredImage: "/blog/react-19.jpg",
    category: "React",
    categoryId: "react",
    author: "Emily Johnson",
    authorId: "emily-johnson",
    publishDate: "2024-10-18",
    readTime: "15 min read",
    tags: ["React", "React 19", "Migration", "JavaScript", "Frontend"],
    featured: false,
    contentFile: "react-19-whats-new-migration",
    seo: {
      metaTitle: "React 19: Complete Migration Guide & New Features Explained",
      metaDescription: "Learn everything about React 19: new features like Server Components and Actions, breaking changes, migration guide, and best practices for modern React development.",
      keywords: ["React 19", "React migration", "Server Components", "React Actions", "React upgrade", "React tutorial", "modern React"],
      ogImage: "/blog/react-19.jpg",
    },
  },
  {
    id: "4",
    slug: "database-performance-optimization",
    title: "Optimizing Database Performance for High-Traffic Applications",
    description: "Learn advanced techniques to optimize database performance, reduce query times, and scale your application to handle millions of requests.",
    excerpt: "Database performance is critical for application success. Discover indexing strategies, query optimization, caching techniques, and scaling approaches that handle high traffic efficiently.",
    featuredImage: "/blog/database-optimization.jpg",
    category: "Backend Development",
    categoryId: "backend-development",
    author: "David Kim",
    authorId: "david-kim",
    publishDate: "2024-10-15",
    readTime: "14 min read",
    tags: ["Database", "Performance", "Optimization", "SQL", "Scaling"],
    featured: false,
    contentFile: "database-performance-optimization",
    seo: {
      metaTitle: "Database Performance Optimization: Complete Guide for High Traffic",
      metaDescription: "Master database optimization techniques: indexing strategies, query optimization, caching, connection pooling, and scaling for high-traffic applications.",
      keywords: ["database optimization", "database performance", "SQL optimization", "database indexing", "query optimization", "database scaling", "high traffic"],
      ogImage: "/blog/database-optimization.jpg",
    },
  },
  {
    id: "5",
    slug: "generative-ai-content-creation",
    title: "Leveraging Generative AI for Content Creation and Marketing",
    description: "Discover how generative AI tools are transforming content creation, from writing blog posts to generating images and videos.",
    excerpt: "Generative AI is revolutionizing content marketing. Learn how to use AI tools effectively while maintaining authenticity and quality in your content strategy.",
    featuredImage: "/blog/generative-ai-content.jpg",
    category: "AI & Machine Learning",
    categoryId: "ai-ml",
    author: "Alex Green",
    authorId: "alex-green",
    publishDate: "2024-10-12",
    readTime: "11 min read",
    tags: ["Generative AI", "Content Marketing", "AI Tools", "ChatGPT", "Content Strategy"],
    featured: false,
    contentFile: "generative-ai-content-creation",
    seo: {
      metaTitle: "Generative AI for Content Creation: Complete Marketing Guide",
      metaDescription: "Learn how to leverage generative AI tools like ChatGPT, Midjourney, and DALL-E for content creation. Best practices, tools, and strategies for marketers.",
      keywords: ["generative AI", "AI content creation", "ChatGPT", "AI marketing", "content strategy", "AI tools", "automated content"],
      ogImage: "/blog/generative-ai-content.jpg",
    },
  },
  {
    id: "6",
    slug: "web-accessibility-wcag-guide",
    title: "Web Accessibility: A Comprehensive Guide to WCAG Compliance",
    description: "Build inclusive web experiences that work for everyone. Learn WCAG guidelines, testing tools, and implementation strategies.",
    excerpt: "Web accessibility isn't optional—it's essential. This guide covers everything you need to know about creating accessible websites that comply with WCAG standards.",
    featuredImage: "/blog/accessibility.jpg",
    category: "UI/UX Design",
    categoryId: "ui-ux-design",
    author: "Sophia Lee",
    authorId: "sophia-lee",
    publishDate: "2024-10-10",
    readTime: "13 min read",
    tags: ["Accessibility", "WCAG", "Inclusive Design", "UX", "Web Standards"],
    featured: false,
    contentFile: "web-accessibility-wcag-guide",
    seo: {
      metaTitle: "Web Accessibility Guide: WCAG Compliance & Best Practices",
      metaDescription: "Complete guide to web accessibility and WCAG compliance. Learn standards, testing tools, implementation strategies, and best practices for inclusive design.",
      keywords: ["web accessibility", "WCAG", "accessible design", "inclusive web", "accessibility testing", "ARIA", "screen readers"],
      ogImage: "/blog/accessibility.jpg",
    },
  },
  {
    id: "7",
    slug: "kubernetes-production-deployment",
    title: "Deploying Applications to Production with Kubernetes",
    description: "Master Kubernetes deployment strategies, scaling, monitoring, and best practices for production environments.",
    excerpt: "Kubernetes is the industry standard for container orchestration. Learn how to deploy, scale, and manage applications in production with confidence.",
    featuredImage: "/blog/kubernetes.jpg",
    category: "DevOps",
    categoryId: "devops",
    author: "Chris Evans",
    authorId: "chris-evans",
    publishDate: "2024-10-08",
    readTime: "16 min read",
    tags: ["Kubernetes", "DevOps", "Containers", "Docker", "Cloud Native"],
    featured: false,
    contentFile: "kubernetes-production-deployment",
    seo: {
      metaTitle: "Kubernetes Production Deployment: Complete Guide & Best Practices",
      metaDescription: "Learn how to deploy applications to production with Kubernetes. Covers deployment strategies, scaling, monitoring, security, and production best practices.",
      keywords: ["Kubernetes", "K8s deployment", "container orchestration", "production deployment", "Kubernetes tutorial", "DevOps", "cloud native"],
      ogImage: "/blog/kubernetes.jpg",
    },
  },
  {
    id: "8",
    slug: "serverless-architecture-aws-lambda",
    title: "Building Serverless Applications with AWS Lambda and API Gateway",
    description: "Learn how to build scalable, cost-effective serverless applications using AWS Lambda, API Gateway, and other AWS services.",
    excerpt: "Serverless architecture eliminates infrastructure management and scales automatically. Discover how to build production-ready serverless applications on AWS.",
    featuredImage: "/blog/serverless.jpg",
    category: "Cloud Computing",
    categoryId: "cloud-computing",
    author: "Jordan Smith",
    authorId: "jordan-smith",
    publishDate: "2024-10-05",
    readTime: "14 min read",
    tags: ["Serverless", "AWS Lambda", "API Gateway", "Cloud", "AWS"],
    featured: false,
    contentFile: "serverless-architecture-aws-lambda",
    seo: {
      metaTitle: "Serverless Architecture with AWS Lambda: Complete Guide",
      metaDescription: "Build scalable serverless applications with AWS Lambda and API Gateway. Learn architecture patterns, best practices, and cost optimization strategies.",
      keywords: ["serverless", "AWS Lambda", "API Gateway", "serverless architecture", "AWS", "cloud computing", "FaaS"],
      ogImage: "/blog/serverless.jpg",
    },
  },
  {
    id: "9",
    slug: "react-state-management-2024",
    title: "Modern React State Management: Redux, Zustand, and Beyond",
    description: "Compare popular React state management solutions and learn when to use each for optimal application architecture.",
    excerpt: "State management is crucial for React applications. Explore modern solutions including Redux Toolkit, Zustand, Jotai, and React Query to find the best fit for your project.",
    featuredImage: "/blog/react-state.jpg",
    category: "React",
    categoryId: "react",
    author: "Patricia Wong",
    authorId: "patricia-wong",
    publishDate: "2024-10-03",
    readTime: "12 min read",
    tags: ["React", "State Management", "Redux", "Zustand", "React Query"],
    featured: false,
    contentFile: "react-state-management-2024",
    seo: {
      metaTitle: "React State Management 2024: Redux, Zustand, Jotai Compared",
      metaDescription: "Complete guide to modern React state management. Compare Redux Toolkit, Zustand, Jotai, and React Query. Learn when to use each solution.",
      keywords: ["React state management", "Redux", "Zustand", "Jotai", "React Query", "state management comparison", "React hooks"],
      ogImage: "/blog/react-state.jpg",
    },
  },
  {
    id: "10",
    slug: "jwt-api-security",
    title: "Securing Your APIs with JWT Authentication and Best Practices",
    description: "Implement secure API authentication using JSON Web Tokens. Learn JWT structure, security best practices, and common pitfalls to avoid.",
    excerpt: "API security is critical for protecting user data. Master JWT authentication, token management, and security best practices to build secure APIs.",
    featuredImage: "/blog/jwt-security.jpg",
    category: "Backend Development",
    categoryId: "backend-development",
    author: "Robert Brown",
    authorId: "robert-brown",
    publishDate: "2024-10-01",
    readTime: "13 min read",
    tags: ["Security", "JWT", "Authentication", "API", "Backend"],
    featured: false,
    contentFile: "jwt-api-security",
    seo: {
      metaTitle: "JWT Authentication: Complete API Security Guide & Best Practices",
      metaDescription: "Learn how to secure APIs with JWT authentication. Covers JWT structure, implementation, security best practices, token refresh, and common vulnerabilities.",
      keywords: ["JWT", "API security", "authentication", "JSON Web Tokens", "API authentication", "security best practices", "token-based auth"],
      ogImage: "/blog/jwt-security.jpg",
    },
  },

  // {

  // id: "11",
  //   slug: "future-of-ai-web-development-2025",
  //   title: "The Future of AI in Web Development: 2025 and Beyond",
  //   description: "Explore how artificial intelligence is revolutionizing web development, from automated code generation to intelligent user experiences.",
  //   excerpt: "Artificial intelligence is transforming the way we build web applications. Discover the latest AI tools, techniques, and trends that are shaping the future of web development in 2025.",
  //   featuredImage: "/blog/featured-ai.jpg",
  //   category: "AI & Machine Learning",
  //   categoryId: "ai-ml",
  //   author: "Sarah Chen",
  //   authorId: "sarah-chen",
  //   publishDate: "2024-10-24",
  //   readTime: "12 min read",
  //   tags: ["AI", "Web Development", "Machine Learning", "Automation", "Future Tech"],
  //   featured: true,
  //   contentFile: "future-of-ai-web-development-2025",
  //   seo: {
  //     metaTitle: "The Future of AI in Web Development: 2025 Trends & Tools",
  //     metaDescription: "Discover how AI is revolutionizing web development in 2025. Learn about AI-powered tools, automated testing, personalization, and future trends shaping the industry.",
  //     keywords: ["AI web development", "artificial intelligence", "machine learning", "AI tools 2025", "automated coding", "GitHub Copilot", "AI testing", "future of web development"],
  //     ogImage: "/blog/featured-ai.jpg",
  //   },
  // },

  

  
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

