// ============================================================================
// Blog Post Data Management System
// ============================================================================
// This file centralizes all blog-related data including posts, categories,
// authors, and sidebar content for easy management and scalability.
// ============================================================================

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
  count?: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content?: string;
  excerpt: string;
  featuredImage: string;
  category: string;
  categoryId: string;
  author: string;
  authorId: string;
  publishDate: string;
  lastModified?: string;
  readTime: string;
  views?: string;
  tags: string[];
  featured?: boolean;
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
  views: string;
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
    bio: "Senior AI/ML Engineer with 10+ years of experience in developing intelligent systems. Former Tech Lead at Google AI, specializing in NLP and computer vision. Passionate about making AI accessible to developers.",
    avatar: "/blog/authors/sarah-chen.jpg",
    role: "AI/ML Expert",
    social: {
      twitter: "https://twitter.com/sarahchen",
      linkedin: "https://linkedin.com/in/sarahchen",
      github: "https://github.com/sarahchen"
    }
  },
  "mike-rodriguez": {
    id: "mike-rodriguez",
    name: "Mike Rodriguez",
    bio: "Full-stack developer and UI/UX enthusiast with a decade of experience building scalable web applications. Contributor to several open-source projects and advocate for modern web standards.",
    avatar: "/blog/authors/mike-rodriguez.jpg",
    role: "Senior Full-Stack Developer",
    social: {
      twitter: "https://twitter.com/mikerodriguez",
      linkedin: "https://linkedin.com/in/mikerodriguez"
    }
  },
  "emily-johnson": {
    id: "emily-johnson",
    name: "Emily Johnson",
    bio: "React core team contributor and frontend architecture specialist. 8+ years building enterprise-scale applications. Speaker at React Conf and author of 'Modern React Patterns'.",
    avatar: "/blog/authors/emily-johnson.jpg",
    role: "React Specialist",
    social: {
      twitter: "https://twitter.com/emilyjohnson",
      linkedin: "https://linkedin.com/in/emilyjohnson",
      github: "https://github.com/emilyjohnson"
    }
  },
  "david-kim": {
    id: "david-kim",
    name: "David Kim",
    bio: "Database architect and backend performance expert. 12+ years optimizing high-traffic systems at scale. Former Principal Engineer at Amazon Web Services, specializing in distributed systems.",
    avatar: "/blog/authors/david-kim.jpg",
    role: "Backend Architect",
    social: {
      linkedin: "https://linkedin.com/in/davidkim"
    }
  },
  "alex-green": {
    id: "alex-green",
    name: "Alex Green",
    bio: "AI researcher and content strategist exploring the intersection of generative AI and digital marketing. PhD in Computer Science, published author with 20+ papers on machine learning applications.",
    avatar: "/blog/authors/alex-green.jpg",
    role: "AI Researcher",
    social: {
      twitter: "https://twitter.com/alexgreen",
      linkedin: "https://linkedin.com/in/alexgreen"
    }
  },
  "sophia-lee": {
    id: "sophia-lee",
    name: "Sophia Lee",
    bio: "Accessibility advocate and UX designer with 9+ years creating inclusive digital experiences. WCAG certified expert and consultant for Fortune 500 companies on accessibility compliance.",
    avatar: "/blog/authors/sophia-lee.jpg",
    role: "UX/Accessibility Expert",
    social: {
      twitter: "https://twitter.com/sophialee",
      linkedin: "https://linkedin.com/in/sophialee"
    }
  },
  "chris-evans": {
    id: "chris-evans",
    name: "Chris Evans",
    bio: "DevOps engineer and cloud infrastructure specialist. Kubernetes certified administrator with expertise in CI/CD pipelines, container orchestration, and cloud-native architectures.",
    avatar: "/blog/authors/chris-evans.jpg",
    role: "DevOps Engineer",
    social: {
      twitter: "https://twitter.com/chrisevans",
      linkedin: "https://linkedin.com/in/chrisevans",
      github: "https://github.com/chrisevans"
    }
  },
  "jordan-smith": {
    id: "jordan-smith",
    name: "Jordan Smith",
    bio: "Serverless architecture pioneer and cloud solutions architect. AWS certified professional helping companies transition to modern cloud-native infrastructures with focus on cost optimization.",
    avatar: "/blog/authors/jordan-smith.jpg",
    role: "Cloud Architect",
    social: {
      linkedin: "https://linkedin.com/in/jordansmith"
    }
  },
  "patty-olantern": {
    id: "patty-olantern",
    name: "Patty O'Lantern",
    bio: "State management expert and performance optimization specialist. Creator of popular React libraries with 100K+ downloads. Technical writer and educator passionate about clean code architecture.",
    avatar: "/blog/authors/patty-olantern.jpg",
    role: "Frontend Architect",
    social: {
      twitter: "https://twitter.com/pattyolantern",
      github: "https://github.com/pattyolantern"
    }
  },
  "robert-brown": {
    id: "robert-brown",
    name: "Robert Brown",
    bio: "Security engineer specializing in API security and authentication systems. 10+ years protecting enterprise applications. CISSP certified with expertise in OAuth, JWT, and zero-trust architectures.",
    avatar: "/blog/authors/robert-brown.jpg",
    role: "Security Engineer",
    social: {
      linkedin: "https://linkedin.com/in/robertbrown"
    }
  }
};

// ============================================================================
// CATEGORIES DATA
// ============================================================================

export const CATEGORIES: Record<string, Category> = {
  "ai-ml": {
    id: "ai-ml",
    name: "AI & Machine Learning",
    slug: "ai-ml",
    description: "Explore cutting-edge artificial intelligence and machine learning technologies, frameworks, and best practices.",
    color: {
      bg: "bg-purple-100",
      text: "text-purple-700"
    }
  },
  "web-development": {
    id: "web-development",
    name: "Web Development",
    slug: "web-development",
    description: "Modern web development techniques, frameworks, and tools for building scalable applications.",
    color: {
      bg: "bg-blue-100",
      text: "text-blue-700"
    }
  },
  "react": {
    id: "react",
    name: "React",
    slug: "react",
    description: "React ecosystem, best practices, state management, and advanced patterns for building user interfaces.",
    color: {
      bg: "bg-cyan-100",
      text: "text-cyan-700"
    }
  },
  "backend": {
    id: "backend",
    name: "Backend Development",
    slug: "backend",
    description: "Server-side development, databases, APIs, and backend architecture patterns.",
    color: {
      bg: "bg-green-100",
      text: "text-green-700"
    }
  },
  "ui-ux": {
    id: "ui-ux",
    name: "UI/UX Design",
    slug: "ui-ux",
    description: "User interface design, user experience principles, and accessibility best practices.",
    color: {
      bg: "bg-pink-100",
      text: "text-pink-700"
    }
  },
  "devops": {
    id: "devops",
    name: "DevOps",
    slug: "devops",
    description: "DevOps practices, CI/CD pipelines, containerization, and infrastructure automation.",
    color: {
      bg: "bg-yellow-100",
      text: "text-yellow-700"
    }
  },
  "cloud-computing": {
    id: "cloud-computing",
    name: "Cloud Computing",
    slug: "cloud-computing",
    description: "Cloud platforms, serverless architectures, and cloud-native application development.",
    color: {
      bg: "bg-indigo-100",
      text: "text-indigo-700"
    }
  },
  "software-testing": {
    id: "software-testing",
    name: "Software Testing",
    slug: "software-testing",
    description: "Testing strategies, automation frameworks, and quality assurance best practices.",
    color: {
      bg: "bg-red-100",
      text: "text-red-700"
    }
  },
  "data-science": {
    id: "data-science",
    name: "Data Science",
    slug: "data-science",
    description: "Data analysis, visualization, statistical modeling, and data-driven decision making.",
    color: {
      bg: "bg-teal-100",
      text: "text-teal-700"
    }
  },
  "digital-marketing": {
    id: "digital-marketing",
    name: "Digital Marketing",
    slug: "digital-marketing",
    description: "SEO, content marketing, analytics, and digital marketing strategies for tech companies.",
    color: {
      bg: "bg-orange-100",
      text: "text-orange-700"
    }
  },
  "career-tips": {
    id: "career-tips",
    name: "Career Tips",
    slug: "career-tips",
    description: "Career development, interview preparation, and professional growth in tech industry.",
    color: {
      bg: "bg-emerald-100",
      text: "text-emerald-700"
    }
  },
  "tutorials": {
    id: "tutorials",
    name: "Tutorials",
    slug: "tutorials",
    description: "Step-by-step guides and hands-on tutorials for learning new technologies.",
    color: {
      bg: "bg-violet-100",
      text: "text-violet-700"
    }
  }
};

// ============================================================================
// BLOG POSTS DATA
// ============================================================================

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "future-of-ai-web-development-2025",
    title: "The Future of AI in Web Development: Trends and Predictions for 2025",
    description: "Explore how artificial intelligence is revolutionizing web development, from automated code generation to intelligent user experiences. Discover the tools and techniques that will shape the industry.",
    excerpt: "Artificial intelligence is transforming web development at an unprecedented pace. From AI-powered code assistants to intelligent design systems, discover the trends that will define the future of web development in 2025 and beyond.",
    featuredImage: "/blog/featured-ai.jpg",
    category: "AI & Machine Learning",
    categoryId: "ai-ml",
    author: "Sarah Chen",
    authorId: "sarah-chen",
    publishDate: "2024-10-24",
    readTime: "8 min read",
    views: "18.5k",
    tags: ["AI", "Web Development", "Machine Learning", "Automation", "Future Tech"],
    featured: true,
    seo: {
      metaTitle: "The Future of AI in Web Development: 2025 Trends & Predictions",
      metaDescription: "Discover how AI is revolutionizing web development in 2025. Learn about automated code generation, intelligent UX, and AI-powered tools shaping the future of web development.",
      keywords: ["AI web development", "artificial intelligence", "web development trends 2025", "AI code generation", "machine learning web apps", "AI-powered development tools"],
      ogImage: "/blog/featured-ai.jpg"
    }
  },
  {
    id: "2",
    slug: "responsive-layouts-css-grid-flexbox",
    title: "Building Responsive Layouts with CSS Grid and Flexbox",
    description: "A hands-on guide to crafting responsive layouts with CSS Grid and Flexbox. Explore real patterns, common pitfalls, and shortcuts to production-ready UI.",
    excerpt: "Master modern CSS layout techniques with this comprehensive guide to CSS Grid and Flexbox. Learn practical patterns, avoid common mistakes, and build responsive designs that work flawlessly across all devices.",
    featuredImage: "/blog/css-grid-flexbox.jpg",
    category: "Web Development",
    categoryId: "web-development",
    author: "Mike Rodriguez",
    authorId: "mike-rodriguez",
    publishDate: "2024-10-20",
    readTime: "6 min read",
    views: "14.2k",
    tags: ["CSS", "Flexbox", "CSS Grid", "Responsive Design", "Frontend"],
    featured: false,
    seo: {
      metaTitle: "CSS Grid & Flexbox: Complete Guide to Responsive Layouts",
      metaDescription: "Learn how to build responsive layouts using CSS Grid and Flexbox. Practical examples, best practices, and common patterns for modern web design.",
      keywords: ["CSS Grid", "Flexbox", "responsive design", "CSS layout", "modern CSS", "web design patterns"],
      ogImage: "/blog/css-grid-flexbox.jpg"
    }
  },
  {
    id: "3",
    slug: "react-19-whats-new-migration",
    title: "React 19: What's New and How to Migrate",
    description: "React 19 is here. See the biggest changes, why they matter, and follow a simple migration plan—tools, checks, and copy-paste snippets included.",
    excerpt: "React 19 introduces groundbreaking features including the new compiler, server components improvements, and enhanced hooks. This comprehensive guide covers everything you need to know to migrate your applications smoothly.",
    featuredImage: "/blog/react-19.jpg",
    category: "React",
    categoryId: "react",
    author: "Emily Johnson",
    authorId: "emily-johnson",
    publishDate: "2024-10-18",
    readTime: "10 min read",
    views: "22.1k",
    tags: ["React", "React 19", "Migration", "JavaScript", "Frontend"],
    featured: false,
    seo: {
      metaTitle: "React 19: New Features, Breaking Changes & Migration Guide",
      metaDescription: "Complete guide to React 19 features and migration. Learn about the new compiler, server components, hooks improvements, and step-by-step migration process.",
      keywords: ["React 19", "React migration", "React new features", "React compiler", "React server components", "React hooks"],
      ogImage: "/blog/react-19.jpg"
    }
  },
  {
    id: "4",
    slug: "database-performance-optimization",
    title: "Optimizing Database Performance for High-Traffic Applications",
    description: "A practical guide to keeping databases fast under heavy load. Learn how to profile queries, choose the right indexes, add caching, tune connections, and scale with replication or sharding.",
    excerpt: "Database performance can make or break high-traffic applications. Discover proven strategies for query optimization, indexing, caching, connection pooling, and horizontal scaling to handle millions of requests.",
    featuredImage: "/blog/database-optimization.jpg",
    category: "Backend Development",
    categoryId: "backend",
    author: "David Kim",
    authorId: "david-kim",
    publishDate: "2024-10-15",
    readTime: "12 min read",
    views: "16.8k",
    tags: ["Database", "Performance", "Optimization", "SQL", "Scaling"],
    featured: false,
    seo: {
      metaTitle: "Database Performance Optimization: Complete Guide for High-Traffic Apps",
      metaDescription: "Learn database performance optimization techniques for high-traffic applications. Query optimization, indexing strategies, caching, and scaling solutions.",
      keywords: ["database optimization", "database performance", "query optimization", "database indexing", "database scaling", "high-traffic applications"],
      ogImage: "/blog/database-optimization.jpg"
    }
  },
  {
    id: "5",
    slug: "generative-ai-content-creation",
    title: "The Impact of Generative AI on Content Creation",
    description: "How generative AI is reshaping content creation—from ideation to editing—boosting speed, scale, and personalization while raising new quality and ethics questions.",
    excerpt: "Generative AI is transforming how we create content. Explore the latest AI tools, their impact on creative workflows, ethical considerations, and best practices for integrating AI into your content strategy.",
    featuredImage: "/blog/generative-ai-content.jpg",
    category: "AI & Machine Learning",
    categoryId: "ai-ml",
    author: "Alex Green",
    authorId: "alex-green",
    publishDate: "2024-10-12",
    readTime: "8 min read",
    views: "19.3k",
    tags: ["Generative AI", "Content Creation", "AI Tools", "ChatGPT", "Digital Marketing"],
    featured: false,
    seo: {
      metaTitle: "Generative AI in Content Creation: Tools, Impact & Best Practices",
      metaDescription: "Discover how generative AI is revolutionizing content creation. Learn about AI tools, ethical considerations, and strategies for effective AI-assisted content.",
      keywords: ["generative AI", "AI content creation", "ChatGPT", "AI writing tools", "content marketing AI", "AI ethics"],
      ogImage: "/blog/generative-ai-content.jpg"
    }
  },
  {
    id: "6",
    slug: "accessibility-best-practices",
    title: "Designing for Accessibility: Best Practices",
    description: "Practical accessibility best practices: semantic HTML, contrast, keyboard & screen reader support, and inclusive patterns aligned with WCAG.",
    excerpt: "Creating accessible web experiences is not just a legal requirement—it's a moral imperative. Learn WCAG-compliant best practices for semantic HTML, ARIA, keyboard navigation, and inclusive design patterns.",
    featuredImage: "/blog/accessibility.jpg",
    category: "UI/UX Design",
    categoryId: "ui-ux",
    author: "Sophia Lee",
    authorId: "sophia-lee",
    publishDate: "2024-10-10",
    readTime: "7 min read",
    views: "13.7k",
    tags: ["Accessibility", "WCAG", "Inclusive Design", "UX", "Web Standards"],
    featured: false,
    seo: {
      metaTitle: "Web Accessibility Best Practices: WCAG Compliance Guide",
      metaDescription: "Complete guide to web accessibility best practices. Learn WCAG standards, semantic HTML, ARIA, keyboard navigation, and inclusive design principles.",
      keywords: ["web accessibility", "WCAG", "accessible design", "inclusive design", "ARIA", "screen reader", "keyboard navigation"],
      ogImage: "/blog/accessibility.jpg"
    }
  },
  {
    id: "7",
    slug: "kubernetes-for-developers",
    title: "Introduction to Kubernetes for Developers",
    description: "A practical intro to Kubernetes from a developer's viewpoint. Learn Pods, Deployments, Services, and ConfigMaps, then wire up local dev, CI/CD, and debugging to ship reliably.",
    excerpt: "Kubernetes doesn't have to be intimidating. This developer-focused guide covers essential concepts, practical examples, and real-world workflows for deploying and managing containerized applications.",
    featuredImage: "/blog/kubernetes.jpg",
    category: "DevOps",
    categoryId: "devops",
    author: "Chris Evans",
    authorId: "chris-evans",
    publishDate: "2024-10-08",
    readTime: "11 min read",
    views: "17.9k",
    tags: ["Kubernetes", "DevOps", "Containers", "Docker", "Cloud Native"],
    featured: false,
    seo: {
      metaTitle: "Kubernetes for Developers: Practical Introduction & Tutorial",
      metaDescription: "Learn Kubernetes from a developer's perspective. Understand Pods, Deployments, Services, and how to integrate K8s into your development workflow.",
      keywords: ["Kubernetes tutorial", "Kubernetes for developers", "K8s guide", "container orchestration", "Kubernetes deployment", "DevOps"],
      ogImage: "/blog/kubernetes.jpg"
    }
  },
  {
    id: "8",
    slug: "serverless-architectures",
    title: "Understanding Serverless Architectures",
    description: "A practical guide to serverless architectures. Learn core concepts (FaaS, BaaS, events), common trade-offs (cold starts, vendor lock-in), and patterns for scaling, cost control, and observability.",
    excerpt: "Serverless computing is changing how we build and deploy applications. Explore serverless patterns, AWS Lambda, Azure Functions, cost optimization strategies, and when to choose serverless over traditional architectures.",
    featuredImage: "/blog/serverless.jpg",
    category: "Cloud Computing",
    categoryId: "cloud-computing",
    author: "Jordan Smith",
    authorId: "jordan-smith",
    publishDate: "2024-10-05",
    readTime: "9 min read",
    views: "15.4k",
    tags: ["Serverless", "AWS Lambda", "Cloud Computing", "FaaS", "Architecture"],
    featured: false,
    seo: {
      metaTitle: "Serverless Architecture Guide: Patterns, Benefits & Best Practices",
      metaDescription: "Complete guide to serverless architectures. Learn FaaS, BaaS, AWS Lambda, cost optimization, and when to use serverless computing.",
      keywords: ["serverless architecture", "AWS Lambda", "serverless computing", "FaaS", "cloud functions", "serverless patterns"],
      ogImage: "/blog/serverless.jpg"
    }
  },
  {
    id: "9",
    slug: "react-state-management",
    title: "State Management in React: A Deep Dive",
    description: "Master React state: local vs context, reducers, Redux Toolkit, Zustand, and React Query—how to choose, structure, and scale without re-renders.",
    excerpt: "State management is crucial for React applications. Compare different approaches from useState to Redux Toolkit, learn when to use each, and discover performance optimization techniques to prevent unnecessary re-renders.",
    featuredImage: "/blog/react-state.jpg",
    category: "React",
    categoryId: "react",
    author: "Patty O'Lantern",
    authorId: "patty-olantern",
    publishDate: "2024-10-02",
    readTime: "13 min read",
    views: "20.6k",
    tags: ["React", "State Management", "Redux", "Zustand", "React Query"],
    featured: false,
    seo: {
      metaTitle: "React State Management: Complete Guide to Redux, Zustand & More",
      metaDescription: "Master React state management. Compare useState, Context, Redux Toolkit, Zustand, and React Query. Learn best practices and performance optimization.",
      keywords: ["React state management", "Redux", "Zustand", "React Query", "Context API", "React hooks", "state management patterns"],
      ogImage: "/blog/react-state.jpg"
    }
  },
  {
    id: "10",
    slug: "jwt-authentication-apis",
    title: "Securing Your APIs with JWT Authentication",
    description: "Secure APIs with JWTs: signing, expiry, refresh tokens, rotation, revocation, and best practices for storage, scopes, and CSRF/XSS defense.",
    excerpt: "API security is paramount in modern applications. Learn how to implement JWT authentication correctly, handle refresh tokens, prevent common vulnerabilities, and follow security best practices.",
    featuredImage: "/blog/jwt-security.jpg",
    category: "Backend Development",
    categoryId: "backend",
    author: "Robert Brown",
    authorId: "robert-brown",
    publishDate: "2024-09-28",
    readTime: "10 min read",
    views: "21.2k",
    tags: ["JWT", "Authentication", "API Security", "OAuth", "Backend"],
    featured: false,
    seo: {
      metaTitle: "JWT Authentication Guide: Secure Your APIs with Best Practices",
      metaDescription: "Learn JWT authentication for APIs. Understand token signing, refresh tokens, security best practices, and how to prevent common vulnerabilities.",
      keywords: ["JWT authentication", "API security", "JSON Web Token", "refresh tokens", "OAuth", "API authentication", "security best practices"],
      ogImage: "/blog/jwt-security.jpg"
    }
  }
];

// ============================================================================
// SIDEBAR DATA
// ============================================================================

export const POPULAR_POSTS: PopularPost[] = [
  {
    id: "1",
    rank: 1,
    title: "React 19: What's New and How to Migrate",
    category: "React",
    views: "22.1k",
    slug: "/blog/react-19-whats-new-migration"
  },
  {
    id: "2",
    rank: 2,
    title: "Securing Your APIs with JWT Authentication",
    category: "Backend",
    views: "21.2k",
    slug: "/blog/jwt-authentication-apis"
  },
  {
    id: "3",
    rank: 3,
    title: "State Management in React: A Deep Dive",
    category: "React",
    views: "20.6k",
    slug: "/blog/react-state-management"
  },
  {
    id: "4",
    rank: 4,
    title: "The Impact of Generative AI on Content Creation",
    category: "AI & ML",
    views: "19.3k",
    slug: "/blog/generative-ai-content-creation"
  },
  {
    id: "5",
    rank: 5,
    title: "The Future of AI in Web Development: 2025",
    category: "AI & ML",
    views: "18.5k",
    slug: "/blog/future-of-ai-web-development-2025"
  }
];

export const SIDEBAR_CATEGORIES: SidebarCategory[] = [
  {
    id: "1",
    name: "AI & Machine Learning",
    count: 45,
    slug: "/blog/category/ai-ml",
    color: "bg-purple-100 text-purple-700"
  },
  {
    id: "2",
    name: "React",
    count: 38,
    slug: "/blog/category/react",
    color: "bg-cyan-100 text-cyan-700"
  },
  {
    id: "3",
    name: "Web Development",
    count: 52,
    slug: "/blog/category/web-development",
    color: "bg-blue-100 text-blue-700"
  },
  {
    id: "4",
    name: "DevOps",
    count: 28,
    slug: "/blog/category/devops",
    color: "bg-yellow-100 text-yellow-700"
  },
  {
    id: "5",
    name: "Backend",
    count: 34,
    slug: "/blog/category/backend",
    color: "bg-green-100 text-green-700"
  },
  {
    id: "6",
    name: "UI/UX",
    count: 22,
    slug: "/blog/category/ui-ux",
    color: "bg-pink-100 text-pink-700"
  }
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get all blog posts sorted by publish date (newest first)
 */
export const getAllPosts = (): BlogPost[] => {
  return BLOG_POSTS.sort((a, b) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
};

/**
 * Get featured post (most recent featured post or most recent post)
 */
export const getFeaturedPost = (): BlogPost => {
  const featuredPosts = BLOG_POSTS.filter(post => post.featured);
  if (featuredPosts.length > 0) {
    return featuredPosts.sort((a, b) => 
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    )[0];
  }
  return getAllPosts()[0];
};

/**
 * Get latest posts excluding the featured one
 */
export const getLatestPosts = (limit?: number): BlogPost[] => {
  const featuredPost = getFeaturedPost();
  const posts = getAllPosts().filter(post => post.id !== featuredPost.id);
  return limit ? posts.slice(0, limit) : posts;
};

/**
 * Get post by slug
 */
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return BLOG_POSTS.find(post => post.slug === slug);
};

/**
 * Get posts by category
 */
export const getPostsByCategory = (categoryId: string): BlogPost[] => {
  return BLOG_POSTS.filter(post => post.categoryId === categoryId)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
};

/**
 * Get category by ID
 */
export const getCategoryById = (categoryId: string): Category | undefined => {
  return CATEGORIES[categoryId];
};

/**
 * Get category by slug
 */
export const getCategoryBySlug = (slug: string): Category | undefined => {
  return Object.values(CATEGORIES).find(cat => cat.slug === slug);
};

/**
 * Get author by ID
 */
export const getAuthorById = (authorId: string): Author | undefined => {
  return AUTHORS[authorId];
};

/**
 * Get all categories as array
 */
export const getAllCategories = (): Category[] => {
  return Object.values(CATEGORIES);
};

/**
 * Get main categories for navigation (first 5)
 */
export const getMainCategories = (): Category[] => {
  return [
    CATEGORIES["software-testing"],
    CATEGORIES["data-science"],
    CATEGORIES["web-development"],
    CATEGORIES["ai-ml"],
    CATEGORIES["react"]
  ];
};

/**
 * Get dropdown categories for navigation
 */
export const getDropdownCategories = (): Category[] => {
  return [
    CATEGORIES["devops"],
    CATEGORIES["cloud-computing"],
    CATEGORIES["digital-marketing"],
    CATEGORIES["ui-ux"],
    CATEGORIES["career-tips"],
    CATEGORIES["tutorials"],
    CATEGORIES["backend"]
  ];
};

/**
 * Update category counts based on actual posts
 */
export const updateCategoryCounts = (): void => {
  Object.keys(CATEGORIES).forEach(categoryId => {
    const count = BLOG_POSTS.filter(post => post.categoryId === categoryId).length;
    CATEGORIES[categoryId].count = count;
  });
};

// Initialize category counts
updateCategoryCounts();

