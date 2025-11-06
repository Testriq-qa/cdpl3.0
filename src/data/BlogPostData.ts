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
  "shoeb-shaikh": {
    id: "shoeb-shaikh",
    name: "Shoeb Shaikh",
    bio: "Shoeb Shaikh is a seasoned Software Testing and Data Science Expert and a Mentor with over 14 years of experience in the field. Specialist in designing and managing processes, and leading high-performing teams to deliver impactful results.",
    avatar: "/blog/authors/shoeb-shaikh.png",
    role: "Test Automation Engineer & Data Science Enthusiast",
    social: {
      linkedin: "https://www.linkedin.com/in/ishaikhshoeb/",
    },
  },
  "ashish-shetty": {
    id: "ashish-shetty",
    name: "Ashish Shetty",
    bio: "Seasoned Business Intelligence and learning and development professional with over 11 years of experience empowering students and professionals to unlock career success through data-driven skills. Specializing in Power BI, Tableau, and Prompt Engineering, Ashish is known for delivering practical, high-impact workshops and training programs across academic and corporate sectors.",
    avatar: "/blog/authors/ashish-shetty.png",
    role: "Business Intelligence & Data Analytics Specialist",
    social: {

      linkedin: "https://www.linkedin.com/in/profashishshetty/"

    },
  },
  "teshoo-rai": {
    id: "teshoo-rai",
    name: "Teshoo Rai",
    bio: "A highly skilled Quality Analysis Engineer and Corporate Trainer, specialising in Software Development Life Cycle (SDLC) and Software Testing.",
    avatar: "/blog/authors/teshoo-rai.png",
    role: "Quality Analysis Engineer",
    social: {
      linkedin: "linkedin.com/in/teshoo-rai-b56179237"
    },
  },
  "vaibhav-kakade": {
    id: "vaibhav-kakade",
    name: "Vaibhav Kakade",
    bio: "A Manual Tester in TESTRIQ QA LLP and also as Corporate Trainer with CDPL. With a focused career in training and development.",
    avatar: "/blog/authors/vaibhav-kakade.png",
    role: "Quality Analysis Engineer",
    social: {
      linkedin: "https://www.linkedin.com/in/vaibhav-kakade-565bb6207/",
    },
  },
  "rehmat-shaikh": {
    id: "rehmat-shaikh",
    name: "Rehmat Shaikh",
    bio: "A visionary data scientist dedicated to unlocking the potential of data to drive informed decision-making and spark innovation. With a strong foundation in Data Science.",
    avatar: "/blog/authors/rehmat-shaikh.png",
    role: "Data Science Trainer",
    social: {
      linkedin: "https://www.linkedin.com/in/rehmat-shaikh-60a023324"
    },
  },
  "cezzane-khan": {
    id: "cezzane-khan",
    name: "Cezzane Khan",
    bio: "Cezzane Khan is a dedicated and innovative Data Science Trainer committed to empowering individuals and organizations.",
    avatar: "/blog/authors/cezzane-khan.png",
    role: "Data Science Trainer",
    social: {
      linkedin: "https://www.linkedin.com/in/khan-cezzane"
    },
  },
  "prakash-mishra": {
    id: "prakash-mishra",
    name: "Prakash Mishra",
    bio: "Drives software development initiatives, leading teams to build robust, scalable, and high-performance solutions with latest tools and technologies.",
    avatar: "/blog/authors/prakash-mishra.png",
    role: "Lead Software Engineer",
    social: {
      linkedin: "https://www.linkedin.com/in/prakashmmishra/"
    },
  },
  "jayesh-mistry": {
    id: "jayesh-mistry",
    name: "Jayesh Mistry",
    bio: "A passionate and detail-oriented frontend developer with a strong knowledge in Web Development and strong foundation in HTML, CSS, JavaScript, React.js and Next.js.",
    avatar: "/blog/authors/jayesh-mistry.png",
    role: "Frontend Developer",
    social: {
      linkedin: "https://www.linkedin.com/in/jayesh-mistry-53300235b/"
    },
  },
  "sushma-pal": {
    id: "sushma-pal",
    name: "Sushma Pal",
    bio: "SEO Analyst & Digital Marketing Specialist helping brands grow organically through smart strategy, data-driven insights, and powerful content.",
    avatar: "/blog/authors/sushma-pal.png",
    role: "SEO Analyst & Digital Marketing Specialist",
    social: {
      linkedin: "https://www.linkedin.com/in/sushma-pal-a1557b1b1/"
    }
  },

};

// ============================================================================
// CATEGORIES DATA
// ============================================================================

export const CATEGORIES: Record<string, Category> = {
  "ai": {
    id: "ai",
    name: "Artificial Intelligence",
    slug: "artificial-intelligence",
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
  // "react": {
  //   id: "react",
  //   name: "React",
  //   slug: "react",
  //   description: "Everything about React, from basics to advanced patterns and performance optimization",
  //   color: {
  //     bg: "bg-cyan-100",
  //     text: "text-cyan-700",
  //   },
  // },
  // "backend-development": {
  //   id: "backend-development",
  //   name: "Backend Development",
  //   slug: "backend-development",
  //   description: "Server-side development, databases, APIs, and backend architecture",
  //   color: {
  //     bg: "bg-green-100",
  //     text: "text-green-700",
  //   },
  // },
  // "ui-ux-design": {
  //   id: "ui-ux-design",
  //   name: "UI/UX Design",
  //   slug: "ui-ux-design",
  //   description: "User interface design, user experience, and accessibility best practices",
  //   color: {
  //     bg: "bg-pink-100",
  //     text: "text-pink-700",
  //   },
  // },
  // "devops": {
  //   id: "devops",
  //   name: "DevOps",
  //   slug: "devops",
  //   description: "DevOps practices, CI/CD, containerization, and infrastructure automation",
  //   color: {
  //     bg: "bg-amber-100",
  //     text: "text-amber-700",
  //   },
  // },
  // "cloud-computing": {
  //   id: "cloud-computing",
  //   name: "Cloud Computing",
  //   slug: "cloud-computing",
  //   description: "Cloud platforms, serverless architecture, and cloud-native development",
  //   color: {
  //     bg: "bg-indigo-100",
  //     text: "text-indigo-700",
  //   },
  // },
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
  // "career-tips": {
  //   id: "career-tips",
  //   name: "Career Tips",
  //   slug: "career-tips",
  //   description: "Career advice, interview tips, and professional development",
  //   color: {
  //     bg: "bg-violet-100",
  //     text: "text-violet-700",
  //   },
  // },
  // "tutorials": {
  //   id: "tutorials",
  //   name: "Tutorials",
  //   slug: "tutorials",
  //   description: "Step-by-step guides and hands-on tutorials for developers",
  //   color: {
  //     bg: "bg-emerald-100",
  //     text: "text-emerald-700",
  //   },
  // },
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
    featuredImage: "/blog/featured/ds.png",
    category: "Data Science",
    categoryId: "data-science",
    author: "Shoeb Shaikh",
    authorId: "shoeb-shaikh",
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
    author: "Shoeb Shaikh",
    authorId: "shoeb-shaikh",
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

  {
    id: "23",
    slug: "nextjs-15-seo-guide-react-server-components-2025",
    title: "Next.js 15 SEO Guide: Master React Server Components in 2025",
    description: "A practical, up-to-date SEO playbook for Next.js 15. Learn how React Server Components, the App Router, streaming, caching, ISR, and Edge rendering impact search performance in 2025.",
    excerpt: "Ship lightning-fast, indexable Next.js 15 apps. From React Server Components to ISR and Edge rendering, this 2025 guide shows you how to rank higher and load faster.",
    featuredImage: "/blog/featured/nextjs15-seo-guide.png",
    category: "Web Development",
    categoryId: "web-development",
    author: "Jayesh Mistry",
    authorId: "jayesh-mistry",
    publishDate: "2025-11-06",
    lastModified: "2025-11-06",
    readTime: "14 min read",
    tags: [
      "Next.js 15",
      "React Server Components",
      "Next.js SEO",
      "Core Web Vitals",
      "App Router",
      "ISR",
      "Edge Rendering",
      "2025"
    ],
    featured: true,
    contentFile: "nextjs-15-seo-guide-react-server-components-2025",
    seo: {
      metaTitle: "Next.js 15 SEO Guide (2025): Master React Server Components, ISR & Edge",
      metaDescription: "Learn high-impact Next.js 15 SEO: React Server Components, App Router, streaming, ISR, Edge rendering, metadata, sitemaps, and Core Web Vitals optimization for 2025.",
      keywords: [
        "next.js seo",
        "nextjs 15",
        "react server components",
        "nextjs app router",
        "core web vitals",
        "nextjs isr",
        "nextjs sitemap",
        "edge rendering",
        "nextjs metadata"
      ],
      ogImage: "/blog/featured/nextjs15-seo-guide-og.jpg",
      canonical: "/blog/nextjs-15-seo-guide-react-server-components-2025"
    }
  },
  {
    id: "24",
    slug: "ai-for-frontend-developers-llms-generate-code-tests-docs-2025",
    title: "AI for Front-End Developers: Using LLMs to Generate Code, Tests & Docs",
    description:
      "A hands-on 2025 playbook for front-end engineers to use LLMs to scaffold React/Next.js components, write TypeScript, generate unit/e2e tests, create Storybook and MDX docs, and wire everything into CI with safety and quality controls.",
    excerpt:
      "Turn AI into a force multiplier for your UI stack. Learn prompt patterns, guardrails, test-first workflows, Storybook automation, and CI integration to ship reliable, documented React and Next.js features faster.",
    featuredImage: "/blog/featured/ai-frontend-dev.png",
    category: "Web Development",
    categoryId: "web-development",
    author: "Jayesh Mistry",
    authorId: "jayesh-mistry",
    publishDate: "2025-11-06",
    lastModified: "2025-11-06",
    readTime: "14 min read",
    tags: [
      "LLM",
      "Front-End",
      "React",
      "Next.js",
      "TypeScript",
      "Jest",
      "Playwright",
      "Storybook",
      "MDX"
    ],
    featured: true,
    contentFile: "ai-for-frontend-developers-llms-generate-code-tests-docs",
    seo: {
      metaTitle:
        "AI for Front-End Developers (2025): Generate React/Next.js Code, Tests & Docs with LLMs",
      metaDescription:
        "A practical guide for using LLMs in front-end development: React/Next.js scaffolding, TypeScript patterns, Jest/Playwright tests, Storybook & MDX docs, prompts, and CI guardrails.",
      keywords: [
        "ai for front-end developers",
        "llm code generation react",
        "nextjs ai workflow",
        "generate unit tests jest",
        "playwright e2e testing",
        "storybook docs mdx automation",
        "typescript best practices ai"
      ],
      ogImage: "/blog/featured/ai-frontend-dev-og.jpg",
      canonical: "/blog/ai-for-frontend-developers-llms-generate-code-tests-docs-2025"
    }
  },
  {
  id: "25",
  slug: "migrating-gatsby-cra-to-nextjs-15-step-by-step",
  title: "Static to Dynamic: Migrating Gatsby/CRA to Next.js 15 (Step-by-Step)",
  description:
    "A practical 2025 migration guide for teams moving from Gatsby or Create React App to Next.js 15. Learn App Router, React Server Components, ISR, edge rendering, Metadata API, routing, SEO, images, and CI/CD.",
  excerpt:
    "Ship faster with React Server Components, App Router, and ISR. This step-by-step playbook shows how to migrate from Gatsby or CRA to Next.js 15 without losing SEO, performance, or developer velocity.",
  featuredImage: "/blog/featured/migrate-gatsby-cra-to-next15.png",
  category: "Web Development",
  categoryId: "web-development",
  author: "Jayesh Mistry",
  authorId: "jayesh-mistry",
  publishDate: "2025-11-06",
  lastModified: "2025-11-06",
  readTime: "14 min read",
  tags: [
    "Next.js 15",
    "Migration",
    "Gatsby",
    "Create React App",
    "React Server Components",
    "ISR",
    "SEO"
  ],
  featured: true,
  contentFile: "migrating-gatsby-cra-to-nextjs-15-step-by-step",
  seo: {
    metaTitle:
      "Migrate Gatsby/CRA to Next.js 15 (2025): Step-by-Step Guide to App Router, RSC, ISR & SEO",
    metaDescription:
      "Definitive 2025 guide to migrate from Gatsby or Create React App to Next.js 15. Covers App Router, React Server Components, ISR, edge rendering, routing, images, fonts, SEO (Metadata API), and CI/CD.",
    keywords: [
      "migrate gatsby to nextjs",
      "migrate cra to nextjs",
      "next.js 15 app router",
      "react server components migration",
      "nextjs isr migration",
      "nextjs seo metadata api",
      "gatsby to nextjs guide"
    ],
    ogImage: "/blog/featured/migrate-gatsby-cra-to-next15-og.jpg",
    canonical: "/blog/migrating-gatsby-cra-to-nextjs-15-step-by-step"
  }
}



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

// export const SIDEBAR_CATEGORIES: SidebarCategory[] = [
//   {
//     id: "1",
//     name: "AI & Machine Learning",
//     count: 2,
//     slug: "/blog/category/ai-ml",
//     color: "bg-purple-100 text-purple-700"
//   },
//   {
//     id: "2",
//     name: "Web Development",
//     count: 1,
//     slug: "/blog/category/web-development",
//     color: "bg-blue-100 text-blue-700"
//   },
//   {
//     id: "3",
//     name: "React",
//     count: 2,
//     slug: "/blog/category/react",
//     color: "bg-cyan-100 text-cyan-700"
//   },
//   {
//     id: "4",
//     name: "Backend Development",
//     count: 2,
//     slug: "/blog/category/backend-development",
//     color: "bg-green-100 text-green-700"
//   },
//   {
//     id: "5",
//     name: "UI/UX Design",
//     count: 1,
//     slug: "/blog/category/ui-ux-design",
//     color: "bg-pink-100 text-pink-700"
//   },
//   {
//     id: "6",
//     name: "DevOps",
//     count: 1,
//     slug: "/blog/category/devops",
//     color: "bg-amber-100 text-amber-700"
//   },
//   {
//     id: "7",
//     name: "Cloud Computing",
//     count: 1,
//     slug: "/blog/category/cloud-computing",
//     color: "bg-indigo-100 text-indigo-700"
//   },
// ];

