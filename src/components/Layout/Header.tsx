"use client";

import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight, Award, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Course data structure with governing bodies per course and category
const courseCategories = [
  {
    id: "software-testing-courses",
    name: "Sofware Testing Courses",
    description:
      "Master Agile methodologies and Scrum frameworks to enhance team collaboration and project delivery.",
    governingBodies: [
      { name: "Sofware Testing Courses", logo: "/header_images/Sotware_Testing.png" },

    ],
    courses: [
      {
        name: "Manual Software Testing",
        description:
          "Learn to facilitate Scrum teams and drive Agile projects effectively.",
        governingBodies: [
          { name: "Manual Testing", logo: "/header_images/Manual-Testing.png" },

        ],
      },
      {
        name: "API Testing using POSTMAN and RestAPIs",
        description:
          "Master product backlog management and stakeholder collaboration.",
        governingBodies: [
          { name: "API Testing", logo: "/header_images/API_Testing_Postman.png" },
        ],
      },
      {
        name: "Database Management System using MySQL",
        description:
          "Gain advanced Scrum knowledge to lead high-performing teams.",
        governingBodies: [
          { name: "Database Management", logo: "/header_images/Database_Management_MySQL.png" },
        ],
      },
      {
        name: "ETL Testing Course",
        description:
          "Learn to lead Agile transformations using the SAFe framework.",
        governingBodies: [
          { name: "ETL Testing", logo: "/header_images/ETL_Testing.png" },
        ],
      },
      {
        name: "Advanced Software Testing",
        description: "Facilitate SAFe practices for scaled Agile environments.",
        governingBodies: [
          { name: "Advanced Software Testing", logo: "/header_images/Advance_Software_Testing.png" },
        ],
      },
      {
        name: "Advanced Automation Testing",
        description: "Drive product vision and delivery in SAFe settings.",
        governingBodies: [
          { name: "Advanced Automation Testing", logo: "/header_images/Advance_Automation_Testing.png" },
        ],
      },
      {
        name: "Advanced Manual and Automation Testing - Master Program",
        description:
          "Blend Agile principles with PMI project management standards.",
        governingBodies: [{ name: "Advanced Manual and Automation Testing - Master Program", logo: "/header_images/Advanced Manual and Automation Testing - Master Program.png" }],
      },
    ],
  },
  {
    id: "data-science",
    name: "Data Science, AI - ML & BI Courses",
    description:
      "Prepare for job interviews with practical skills and confidence.",
    governingBodies: [
      { name: "Data Science, AI - ML & BI Courses", logo: "/header_images/DataScience_AI_ML_BI.png" },
    ],
    courses: [
      {
        name: "Machine Learning and Data Science with Python - Hero Program",
        description:
          "Build strategies to ace behavioral and technical interviews.",
        governingBodies: [
          { name: "Machine Learning and Data Science with Python - Hero Program", logo: "/header_images/ML_and_DS_with_Python.png" },
        ],
      },
      {
        name: "Deep Learning, NLP and GenerativeAI",
        description: "Practice real-world interview scenarios with feedback.",
        governingBodies: [
          { name: "Deep Learning, NLP and GenerativeAI", logo: "/header_images/DeepLearning_and_NLP.png" },
        ],
      },
      {
        name: "Advanced Data Analytics - Hero Program",
        description: "Craft a standout resume to impress recruiters.",
        governingBodies: [
          { name: "Advanced Data Analytics - Hero Program", logo: "/header_images/Advance_Data_Analytics.png" },
        ],
      },
      {
        name: "Big Data Engineering",
        description: "Master coding challenges and technical questions.",
        governingBodies: [
          { name: "Big Data Engineering", logo: "/header_images/Big_Data_Engineering.png" },
        ],
      },
      {
        name: "Prompt Engneering with Generative AI",
        description: "Master coding challenges and technical questions.",
        governingBodies: [
          { name: "Prompt Engneering with Generative AI", logo: "/header_images/Prompt_Engineering_Gen_AI.png" },
        ],
      },
      {
        name: "Advanced Data Science and Machine Learning Masterclass",
        description: "Master coding challenges and technical questions.",
        governingBodies: [
          { name: "Advanced Data Science and Machine Learning Masterclass", logo: "/header_images/Advance_DS_and_ML.png" },
        ],
      },
      {
        name: "Comprehensive Data Science and AI - Master Program",
        description: "Master coding challenges and technical questions.",
        governingBodies: [
          { name: "Comprehensive Data Science and AI - Master Program", logo: "/header_images/Comprehensive_DS_and_AI.png" },
        ],
      },
      {
        name: "Data Analysis with BI & Big Data Engineering Master Program",
        description: "Master coding challenges and technical questions.",
        governingBodies: [
          { name: "Data Analysis with BI & Big Data Engineering Master Program", logo: "/header_images/Data_Analysis_Big_Data_Engineering.png" },
        ],
      },
    ],
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    description:
      "Develop skills to manage projects efficiently and effectively.",
    governingBodies: [
      { name: "Digital Marketing", logo: "/header_images/Digital_Marketing.png" },
    ],
    courses: [
      {
        name: "Digital Marketing and Analytics - Master Program",
        description: "Earn the globally recognized PMP certification.",
        governingBodies: [{ name: "Digital Marketing and Analytics - Master Program", logo: "/header_images/Digital_Marketing_Analytics.png" }],
      },

    ],
  },
  {
    id: "programming-courses",
    name: "Programming Courses",
    description:
      "Streamline software development and operations with DevOps practices.",
    governingBodies: [
      { name: "Programming Courses", logo: "/header_images/Programming.png" },
    ],
    courses: [
      {
        name: "Python Programming",
        description: "Master containerization and orchestration technologies.",
        governingBodies: [
          { name: "Python Programming", logo: "/header_images/Python_Programming.png" },
        ],
      },
      {
        name: "Java Programming",
        description: "Automate CI/CD pipelines with Jenkins.",
        governingBodies: [
          { name: "Java Programming", logo: "/header_images/Java_Programming.png" },
        ],
      },

    ],
  },
  {
    id: "aaa-accredited",
    name: "AAA Accredited Courses",
    description:
      "Unlock insights from data with advanced analytics and machine learning.",
    governingBodies: [
      { name: "AAA Accredited Courses", logo: "/header_images/AAA_Accredited.png" },
    ],
    courses: [
      {
        name: "Advanced Software Testing",
        description: "Analyze data to drive business decisions.",
        governingBodies: [
          { name: "Advanced Software Testing", logo: "/header_images/Advance_Software_Testing.png" },
        ],
      },
      {
        name: "Advanced Automation Testing",
        description:
          "Build predictive models with machine learning techniques.",
        governingBodies: [
          { name: "Advanced Automation Testing", logo: "/header_images/Advance_Automation_Testing.png" },
        ],
      },
      {
        name: "Advanced Data Science and Machine Learning - Masterclass",
        description: "Use Python for data analysis and visualization.",
        governingBodies: [
          { name: "Advanced Data Science and Machine Learning - Masterclass", logo: "/header_images/Advance_DS_and_ML.png" },
        ],
      },
      {
        name: "Data Analysis with BI & Big Data Engineering - Master Program",
        description: "Create interactive data visualizations with Power BI.",
        governingBodies: [
          { name: "Data Analysis with BI & Big Data Engineering - Master Program", logo: "/header_images/Data_Analysis_Big_Data_Engineering.png" },
        ],
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
                                className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center justify-between group text-sm ${selectedCategory === category.id
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
                                  className={`h-4 w-4 transition-transform ${selectedCategory === category.id
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
                                  className={`flex items-start px-3 py-2 rounded-lg transition-all duration-200 group ${hoveredCourse === course.name
                                    ? "bg-blue-50 text-blue-700"
                                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                                    }`}
                                >
                                  <div className="flex-shrink-0 mt-1">
                                    <div
                                      className={`w-2 h-2 rounded-full transition-transform ${hoveredCourse === course.name
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
                          <div className="py-5 min-h-[120px]">
                            {displayGoverningBodies.length > 0 ? (
                              displayGoverningBodies.map((body, index) => (
                                <div
                                  key={index}
                                  className="bg-white rounded-lg p-8 hover:shadow-md transition-all duration-200 group animate-fadeIn flex flex-col items-center justify-center"
                                >

                                  <Image
                                    src={body.logo}
                                    alt={body.name}
                                    className="object-contain h-full rounded-2xl"
                                    width={300}
                                    height={150}
                                  />
                                  <span className="text-[10px] text-gray-700 font-medium mt-2 text-center">
                                    {body.name}
                                  </span>

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

            <Link href='#' className="text-gray-700 hover:text-blue-600 transition-colors text-sm xl:text-base">Event</Link>

            <Link href='/mentors' className="text-gray-700 hover:text-blue-600 transition-colors text-sm xl:text-base">Mentors</Link>

            <Link href='#' className="text-gray-700 hover:text-blue-600 transition-colors text-sm xl:text-base">Jobs</Link>

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
                    className={`h-4 w-4 transition-transform duration-200 ${expandedMobileCategory !== null ? "rotate-180" : ""
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
                            className={`h-4 w-4 transition-transform duration-200 ${expandedMobileCategory === category.id
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
