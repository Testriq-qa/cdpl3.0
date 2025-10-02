"use client";

import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight, Award, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Course data structure with governing bodies per course and category
const courseCategories = [
  {
    id: "agile-scrum",
    name: "Agile and Scrum",
    description:
      "Master Agile methodologies and Scrum frameworks to enhance team collaboration and project delivery.",
    governingBodies: [
      { name: "Scrum Alliance", logo: "/images/scrum-alliance-logo.png" },
      { name: "Scrum.org", logo: "/images/scrumorg-logo.png" },
      { name: "Scaled Agile", logo: "/images/scaled-agile-logo.png" },
      { name: "PMI", logo: "/images/pmi-logo.png" },
      { name: "ICAgile", logo: "/images/icagile-logo.png" },
    ],
    courses: [
      {
        name: "Certified Scrum Master",
        description:
          "Learn to facilitate Scrum teams and drive Agile projects effectively.",
        governingBodies: [
          { name: "Scrum Alliance", logo: "/images/scrum-alliance-logo.png" },
          { name: "Scrum Alliance", logo: "/images/scrum-alliance-logo.png" },
          { name: "Scrum Alliance", logo: "/images/scrum-alliance-logo.png" },
          { name: "Scrum Alliance", logo: "/images/scrum-alliance-logo.png" },
        ],
      },
      {
        name: "Certified Scrum Product Owner",
        description:
          "Master product backlog management and stakeholder collaboration.",
        governingBodies: [
          { name: "Scrum Alliance", logo: "/images/scrum-alliance-logo.png" },
        ],
      },
      {
        name: "Professional Scrum Master",
        description:
          "Gain advanced Scrum knowledge to lead high-performing teams.",
        governingBodies: [
          { name: "Scrum.org", logo: "/images/scrumorg-logo.png" },
        ],
      },
      {
        name: "Leading SAFe® Agilist",
        description:
          "Learn to lead Agile transformations using the SAFe framework.",
        governingBodies: [
          { name: "Scaled Agile", logo: "/images/scaled-agile-logo.png" },
        ],
      },
      {
        name: "SAFe Scrum Master",
        description: "Facilitate SAFe practices for scaled Agile environments.",
        governingBodies: [
          { name: "Scaled Agile", logo: "/images/scaled-agile-logo.png" },
        ],
      },
      {
        name: "SAFe® Product Owner/Product Manager",
        description: "Drive product vision and delivery in SAFe settings.",
        governingBodies: [
          { name: "Scaled Agile", logo: "/images/scaled-agile-logo.png" },
        ],
      },
      {
        name: "PMI-Agile Certified Practitioner",
        description:
          "Blend Agile principles with PMI project management standards.",
        governingBodies: [{ name: "PMI", logo: "/images/pmi-logo.png" }],
      },
      {
        name: "AI For Scrum Masters",
        description: "Leverage AI tools to enhance Scrum practices.",
        governingBodies: [
          { name: "ICAgile", logo: "/images/icagile-logo.png" },
        ],
      },
      {
        name: "Professional Scrum Master (PSM 2)",
        description: "Deepen your Scrum expertise for complex projects.",
        governingBodies: [
          { name: "Scrum.org", logo: "/images/scrumorg-logo.png" },
        ],
      },
    ],
  },
  {
    id: "interview-bootcamp",
    name: "Interview Bootcamp",
    description:
      "Prepare for job interviews with practical skills and confidence.",
    governingBodies: [
      { name: "Industry Certified", logo: "/images/industry-cert.png" },
      { name: "Career Hub", logo: "/images/career-hub.png" },
    ],
    courses: [
      {
        name: "Interview Preparation",
        description:
          "Build strategies to ace behavioral and technical interviews.",
        governingBodies: [
          { name: "Industry Certified", logo: "/images/industry-cert.png" },
        ],
      },
      {
        name: "Mock Interviews",
        description: "Practice real-world interview scenarios with feedback.",
        governingBodies: [
          { name: "Career Hub", logo: "/images/career-hub.png" },
        ],
      },
      {
        name: "Resume Building",
        description: "Craft a standout resume to impress recruiters.",
        governingBodies: [
          { name: "Career Hub", logo: "/images/career-hub.png" },
        ],
      },
      {
        name: "Technical Interview Prep",
        description: "Master coding challenges and technical questions.",
        governingBodies: [
          { name: "Industry Certified", logo: "/images/industry-cert.png" },
        ],
      },
    ],
  },
  {
    id: "project-management",
    name: "Project Management",
    description:
      "Develop skills to manage projects efficiently and effectively.",
    governingBodies: [
      { name: "PMI", logo: "/images/pmi-logo.png" },
      { name: "AXELOS", logo: "/images/axelos-logo.png" },
    ],
    courses: [
      {
        name: "PMP Certification",
        description: "Earn the globally recognized PMP certification.",
        governingBodies: [{ name: "PMI", logo: "/images/pmi-logo.png" }],
      },
      {
        name: "PRINCE2",
        description: "Learn structured project management with PRINCE2.",
        governingBodies: [{ name: "AXELOS", logo: "/images/axelos-logo.png" }],
      },
      {
        name: "Project Management Basics",
        description: "Understand core project management principles.",
        governingBodies: [{ name: "PMI", logo: "/images/pmi-logo.png" }],
      },
      {
        name: "Agile Project Management",
        description: "Apply Agile techniques to manage projects dynamically.",
        governingBodies: [
          { name: "PMI", logo: "/images/pmi-logo.png" },
          { name: "AXELOS", logo: "/images/axelos-logo.png" },
        ],
      },
    ],
  },
  {
    id: "devops",
    name: "DevOps",
    description:
      "Streamline software development and operations with DevOps practices.",
    governingBodies: [
      { name: "Linux Foundation", logo: "/images/linux-foundation.png" },
      { name: "AWS", logo: "/images/aws-logo.png" },
      { name: "Microsoft Azure", logo: "/images/azure-logo.png" },
    ],
    courses: [
      {
        name: "Docker & Kubernetes",
        description: "Master containerization and orchestration technologies.",
        governingBodies: [
          { name: "Linux Foundation", logo: "/images/linux-foundation.png" },
        ],
      },
      {
        name: "Jenkins",
        description: "Automate CI/CD pipelines with Jenkins.",
        governingBodies: [
          { name: "Linux Foundation", logo: "/images/linux-foundation.png" },
        ],
      },
      {
        name: "AWS DevOps",
        description: "Implement DevOps practices on AWS cloud.",
        governingBodies: [{ name: "AWS", logo: "/images/aws-logo.png" }],
      },
      {
        name: "Azure DevOps",
        description: "Leverage Azure tools for DevOps workflows.",
        governingBodies: [
          { name: "Microsoft Azure", logo: "/images/azure-logo.png" },
        ],
      },
      {
        name: "CI/CD Pipeline",
        description:
          "Build efficient continuous integration and delivery pipelines.",
        governingBodies: [
          { name: "Linux Foundation", logo: "/images/linux-foundation.png" },
        ],
      },
    ],
  },
  {
    id: "data-science",
    name: "Data Science",
    description:
      "Unlock insights from data with advanced analytics and machine learning.",
    governingBodies: [
      { name: "Microsoft", logo: "/images/microsoft-logo.png" },
      { name: "Python Institute", logo: "/images/python-institute.png" },
      { name: "Tableau", logo: "/images/tableau-logo.png" },
    ],
    courses: [
      {
        name: "Data Analytics",
        description: "Analyze data to drive business decisions.",
        governingBodies: [
          { name: "Microsoft", logo: "/images/microsoft-logo.png" },
        ],
      },
      {
        name: "Machine Learning",
        description:
          "Build predictive models with machine learning techniques.",
        governingBodies: [
          { name: "Python Institute", logo: "/images/python-institute.png" },
        ],
      },
      {
        name: "Python for Data Science",
        description: "Use Python for data analysis and visualization.",
        governingBodies: [
          { name: "Python Institute", logo: "/images/python-institute.png" },
        ],
      },
      {
        name: "Power BI",
        description: "Create interactive data visualizations with Power BI.",
        governingBodies: [
          { name: "Microsoft", logo: "/images/microsoft-logo.png" },
        ],
      },
      {
        name: "Tableau",
        description: "Master data visualization with Tableau.",
        governingBodies: [
          { name: "Tableau", logo: "/images/tableau-logo.png" },
        ],
      },
      {
        name: "SQL for Data Science",
        description: "Query and manage data using SQL.",
        governingBodies: [
          { name: "Microsoft", logo: "/images/microsoft-logo.png" },
        ],
      },
    ],
  },
  {
    id: "software-testing",
    name: "Software Testing",
    description:
      "Ensure software quality with comprehensive testing techniques.",
    governingBodies: [
      { name: "ISTQB", logo: "/images/istqb-logo.png" },
      { name: "ASTQB", logo: "/images/astqb-logo.png" },
    ],
    courses: [
      {
        name: "Selenium Testing",
        description: "Automate web testing with Selenium.",
        governingBodies: [{ name: "ISTQB", logo: "/images/istqb-logo.png" }],
      },
      {
        name: "API Testing",
        description: "Test APIs for functionality and performance.",
        governingBodies: [{ name: "ISTQB", logo: "/images/istqb-logo.png" }],
      },
      {
        name: "Performance Testing",
        description: "Evaluate software performance under load.",
        governingBodies: [{ name: "ISTQB", logo: "/images/istqb-logo.png" }],
      },
      {
        name: "Manual Testing",
        description: "Learn manual testing techniques for software quality.",
        governingBodies: [{ name: "ISTQB", logo: "/images/istqb-logo.png" }],
      },
      {
        name: "Automation Testing",
        description: "Automate testing processes for efficiency.",
        governingBodies: [
          { name: "ISTQB", logo: "/images/istqb-logo.png" },
          { name: "ASTQB", logo: "/images/astqb-logo.png" },
        ],
      },
      {
        name: "Mobile Testing",
        description: "Test mobile applications for usability and performance.",
        governingBodies: [{ name: "ASTQB", logo: "/images/astqb-logo.png" }],
      },
    ],
  },
  {
    id: "marketing",
    name: "Marketing",
    description: "Boost your brand with modern digital marketing strategies.",
    governingBodies: [
      { name: "Google", logo: "/images/google-logo.png" },
      { name: "HubSpot", logo: "/images/hubspot-logo.png" },
      { name: "Meta", logo: "/images/meta-logo.png" },
    ],
    courses: [
      {
        name: "Digital Marketing",
        description: "Master online marketing channels and strategies.",
        governingBodies: [
          { name: "Google", logo: "/images/google-logo.png" },
          { name: "HubSpot", logo: "/images/hubspot-logo.png" },
        ],
      },
      {
        name: "SEO & SEM",
        description: "Optimize websites for search engines and ads.",
        governingBodies: [{ name: "Google", logo: "/images/google-logo.png" }],
      },
      {
        name: "Social Media Marketing",
        description: "Leverage social platforms for brand growth.",
        governingBodies: [
          { name: "Meta", logo: "/images/meta-logo.png" },
          { name: "HubSpot", logo: "/images/hubspot-logo.png" },
        ],
      },
      {
        name: "Content Marketing",
        description: "Create compelling content to engage audiences.",
        governingBodies: [
          { name: "HubSpot", logo: "/images/hubspot-logo.png" },
        ],
      },
      {
        name: "Email Marketing",
        description: "Design effective email campaigns for customer retention.",
        governingBodies: [
          { name: "HubSpot", logo: "/images/hubspot-logo.png" },
        ],
      },
    ],
  },
  {
    id: "software-development",
    name: "Software Development",
    description: "Build robust applications with cutting-edge technologies.",
    governingBodies: [
      { name: "Microsoft", logo: "/images/microsoft-logo.png" },
      { name: "Meta", logo: "/images/meta-logo.png" },
      { name: "Linux Foundation", logo: "/images/linux-foundation.png" },
      { name: "Python Institute", logo: "/images/python-institute.png" },
      { name: "Oracle", logo: "/images/oracle-logo.png" },
    ],
    courses: [
      {
        name: "Full Stack Development",
        description: "Develop end-to-end web applications.",
        governingBodies: [
          { name: "Microsoft", logo: "/images/microsoft-logo.png" },
        ],
      },
      {
        name: "React & Next.js",
        description: "Build dynamic user interfaces with React and Next.js.",
        governingBodies: [{ name: "Meta", logo: "/images/meta-logo.png" }],
      },
      {
        name: "Node.js Development",
        description: "Create scalable backend systems with Node.js.",
        governingBodies: [
          { name: "Linux Foundation", logo: "/images/linux-foundation.png" },
        ],
      },
      {
        name: "Python Programming",
        description: "Learn versatile Python for various applications.",
        governingBodies: [
          { name: "Python Institute", logo: "/images/python-institute.png" },
        ],
      },
      {
        name: "Java Development",
        description: "Build enterprise-grade applications with Java.",
        governingBodies: [{ name: "Oracle", logo: "/images/oracle-logo.png" }],
      },
    ],
  },
  {
    id: "quality-management",
    name: "Quality Management",
    description: "Ensure excellence with quality management methodologies.",
    governingBodies: [
      { name: "ASQ", logo: "/images/asq-logo.png" },
      { name: "ISO", logo: "/images/iso-logo.png" },
    ],
    courses: [
      {
        name: "Six Sigma",
        description: "Improve processes with Six Sigma techniques.",
        governingBodies: [{ name: "ASQ", logo: "/images/asq-logo.png" }],
      },
      {
        name: "Quality Assurance",
        description: "Implement QA practices for consistent quality.",
        governingBodies: [{ name: "ASQ", logo: "/images/asq-logo.png" }],
      },
      {
        name: "ISO Certification",
        description: "Achieve compliance with ISO standards.",
        governingBodies: [{ name: "ISO", logo: "/images/iso-logo.png" }],
      },
      {
        name: "TQM",
        description:
          "Adopt Total Quality Management for organizational success.",
        governingBodies: [{ name: "ASQ", logo: "/images/asq-logo.png" }],
      },
    ],
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    courseCategories[0].id
  );
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<
    string | null
  >(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setExpandedMobileCategory(null);
    }
  };

  const toggleMobileCategory = (categoryId: string) => {
    if (categoryId === "courses") {
      setExpandedMobileCategory(
        expandedMobileCategory === "courses" ? null : "courses"
      );
    } else {
      setExpandedMobileCategory(
        expandedMobileCategory === categoryId ? "courses" : categoryId
      );
    }
  };

  const selectedCategoryData = courseCategories.find(
    (cat) => cat.id === selectedCategory
  );
  const hoveredCourseData = selectedCategoryData?.courses.find(
    (c) => c.name === hoveredCourse
  );
  const displayGoverningBodies = hoveredCourse
    ? hoveredCourseData?.governingBodies || []
    : selectedCategoryData?.governingBodies || [];
  const displayDescription = hoveredCourse
    ? hoveredCourseData?.description
    : selectedCategoryData?.description;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className="rounded-lg">
                <Image
                  src="/images/cdpl-logo.png"
                  alt="CDPL Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
                />
              </div>
              <span className="text-base sm:text-xl lg:text-2xl font-bold text-brand">
                Cinute Digital
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors text-sm xl:text-base"
            >
              Home
            </Link>

            {/* Mega Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => {
                setIsMegaMenuOpen(false);
                setHoveredCourse(null);
                setHoveredCategory(null);
              }}
            >
              <button
                className="text-gray-700 hover:text-blue-600 transition-colors flex items-center py-6 text-sm xl:text-base"
                aria-expanded={isMegaMenuOpen}
                aria-controls="mega-menu"
              >
                Courses
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {/* Mega Menu - Desktop */}
              {isMegaMenuOpen && (
                <div
                  id="mega-menu"
                  className="fixed left-0 right-0 top-[72px] lg:top-[80px] w-full backdrop-blur-sm z-50"
                >
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-b-2xl shadow-2xl border-t-4 border-blue-600">
                      <div className="grid grid-cols-12 gap-4 p-4 sm:p-6 lg:p-8">
                        {/* Column 1: Categories */}
                        <div className="col-span-12 sm:col-span-4 lg:col-span-3 border-r border-gray-200 pr-4">
                          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 sm:mb-4">
                            Categories
                          </h3>
                          <div className="space-y-1 max-h-[400px] sm:max-h-[500px] overflow-y-auto pr-2">
                            {courseCategories.map((category) => (
                              <button
                                key={category.id}
                                onMouseEnter={() => {
                                  setSelectedCategory(category.id);
                                  setHoveredCategory(category.id);
                                  setHoveredCourse(null);
                                }}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center justify-between group text-sm ${
                                  selectedCategory === category.id
                                    ? "bg-blue-50 text-blue-700 font-medium"
                                    : "text-gray-700 hover:bg-gray-50"
                                }`}
                                aria-current={
                                  selectedCategory === category.id
                                    ? "true"
                                    : "false"
                                }
                              >
                                <span>{category.name}</span>
                                <ChevronRight
                                  className={`h-4 w-4 transition-transform ${
                                    selectedCategory === category.id
                                      ? "text-blue-700"
                                      : "text-gray-400"
                                  }`}
                                />
                              </button>
                            ))}
                          </div>
                          <a
                            href="/courses"
                            className="mt-4 flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group"
                          >
                            View All Courses
                            <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </a>
                        </div>

                        {/* Column 2: Courses */}
                        <div className="col-span-12 sm:col-span-4 lg:col-span-5 pr-0 sm:pr-4">
                          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 sm:mb-4">
                            Courses
                          </h3>
                          <div className="grid grid-cols-1 gap-1 max-h-[400px] sm:max-h-[500px] overflow-y-auto pr-2">
                            {selectedCategoryData?.courses.map(
                              (course, index) => (
                                <a
                                  key={index}
                                  href={`/courses/${selectedCategory}/${course.name
                                    .toLowerCase()
                                    .replace(/[®\s&]+/g, "-")}`}
                                  onMouseEnter={() =>
                                    setHoveredCourse(course.name)
                                  }
                                  className={`flex items-start px-3 py-2 rounded-lg transition-all duration-200 group ${
                                    hoveredCourse === course.name
                                      ? "bg-blue-50 text-blue-700"
                                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                                  }`}
                                >
                                  <div className="flex-shrink-0 mt-1">
                                    <div
                                      className={`w-2 h-2 rounded-full transition-transform ${
                                        hoveredCourse === course.name
                                          ? "bg-blue-700 scale-125"
                                          : "bg-blue-600 group-hover:scale-125"
                                      }`}
                                    />
                                  </div>
                                  <div className="ml-3">
                                    <p className="font-medium text-sm">
                                      {course.name}
                                    </p>
                                  </div>
                                </a>
                              )
                            )}
                          </div>
                        </div>

                        {/* Column 3: Governing Bodies */}
                        <div className="col-span-12 sm:col-span-4 lg:col-span-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4">
                          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                            {hoveredCourse || hoveredCategory
                              ? "Certifications"
                              : "Governing Bodies"}
                          </h3>
                          <p className="text-xs text-gray-600 mb-4">
                            {hoveredCourse
                              ? `Certified by leading organizations`
                              : hoveredCategory
                              ? `Certified by leading organizations`
                              : "Hover over a category or course to see its certifications"}
                          </p>
                          <div className="grid grid-cols-2 gap-3 min-h-[120px]">
                            {displayGoverningBodies.length > 0 ? (
                              displayGoverningBodies.map((body, index) => (
                                <div
                                  key={index}
                                  className="bg-white rounded-lg p-3 flex items-center justify-center hover:shadow-md transition-all duration-200 group animate-fadeIn"
                                >
                                  <div className="relative w-full h-10 sm:h-12">
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                      <Award className="h-6 w-6 text-blue-500 group-hover:text-blue-600 transition-colors" />
                                      <span className="text-[10px] text-gray-700 font-medium mt-1 text-center">
                                        {body.name}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <div className="col-span-2 flex flex-col items-center justify-center text-center py-8">
                                <Award className="h-10 w-10 text-gray-300 mb-2" />
                                <p className="text-xs text-gray-400">
                                  Hover over categories or courses to see their
                                  certifications
                                </p>
                              </div>
                            )}
                          </div>
                          <p className="text-xs text-gray-600 mt-4 mb-4">
                            {displayDescription ||
                              "Select a category or course to view its description"}
                          </p>
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <div className="flex items-center text-xs text-gray-600">
                              <Globe className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
                              <span>Globally Recognized Certifications</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="/about-us"
              className="text-gray-700 hover:text-blue-600 transition-colors text-sm xl:text-base"
            >
              About
            </a>
            <a
              href="/blog"
              className="text-gray-700 hover:text-blue-600 transition-colors text-sm xl:text-base"
            >
              Blog
            </a>
            <a
              href="/contact-us"
              className="text-gray-700 hover:text-blue-600 transition-colors text-sm xl:text-base"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center">
            <a
              href="/contact-us"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-5 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 text-sm"
            >
              Get Started
            </a>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden px-2 pt-2 pb-4 sm:px-3 bg-gray-50 rounded-lg mb-4 max-h-[80vh] overflow-y-auto">
            <div className="space-y-2">
              <Link
                href="/"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-white rounded-lg transition-colors text-sm sm:text-base"
                onClick={toggleMenu}
              >
                Home
              </Link>

              {/* Mobile Courses Accordion */}
              <div className="space-y-2">
                <button
                  onClick={() => toggleMobileCategory("courses")}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-white rounded-lg transition-colors text-sm sm:text-base"
                  aria-expanded={expandedMobileCategory !== null}
                  aria-controls="mobile-courses"
                >
                  <span>Courses</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      expandedMobileCategory !== null ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedMobileCategory !== null && (
                  <div id="mobile-courses" className="pl-4 space-y-2">
                    {courseCategories.map((category) => (
                      <div key={category.id} className="space-y-2">
                        <button
                          onClick={() => toggleMobileCategory(category.id)}
                          className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white rounded-lg transition-colors"
                          aria-expanded={expandedMobileCategory === category.id}
                          aria-controls={`mobile-category-${category.id}`}
                        >
                          <span>{category.name}</span>
                          <ChevronRight
                            className={`h-4 w-4 transition-transform duration-200 ${
                              expandedMobileCategory === category.id
                                ? "rotate-90"
                                : ""
                            }`}
                          />
                        </button>

                        {expandedMobileCategory === category.id && (
                          <div
                            id={`mobile-category-${category.id}`}
                            className="pl-4 space-y-1"
                          >
                            {category.courses.map((course, idx) => (
                              <a
                                key={idx}
                                href={`/courses/${category.id}/${course.name
                                  .toLowerCase()
                                  .replace(/[®\s&]+/g, "-")}`}
                                className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white rounded-lg transition-colors"
                                onClick={toggleMenu}
                              >
                                • {course.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                    <a
                      href="/courses"
                      className="block px-4 py-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
                      onClick={toggleMenu}
                    >
                      View All Courses →
                    </a>
                  </div>
                )}
              </div>

              <a
                href="/about-us"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-white rounded-lg transition-colors text-sm sm:text-base"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="/blog"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-white rounded-lg transition-colors text-sm sm:text-base"
                onClick={toggleMenu}
              >
                Blog
              </a>
              <a
                href="/contact-us"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-white rounded-lg transition-colors text-sm sm:text-base"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <a
                href="/contact-us"
                className="block px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-center text-sm sm:text-base"
                onClick={toggleMenu}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
