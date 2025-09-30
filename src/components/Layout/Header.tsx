'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ChevronRight, Award, Globe } from 'lucide-react';

// Course data structure with governing bodies per category
const courseCategories = [
  {
    id: 'agile-scrum',
    name: 'Agile and Scrum',
    courses: [
      'Certified Scrum Master',
      'Certified Scrum Product Owner',
      'Professional Scrum Master',
      'Leading SAFe® Agilist',
      'SAFe Scrum Master',
      'SAFe® Product Owner/Product Manager',
      'PMI-Agile Certified Practitioner',
      'AI For Scrum Masters',
      'Professional Scrum Master (PSM 2)',
    ],
    governingBodies: [
      { name: 'ICAgile', logo: '/images/icagile-logo.png' },
      { name: 'Scaled Agile', logo: '/images/scaled-agile-logo.png' },
      { name: 'Scrum.org', logo: '/images/scrumorg-logo.png' },
      { name: 'Scrum Alliance', logo: '/images/scrum-alliance-logo.png' },
    ],
  },
  {
    id: 'interview-bootcamp',
    name: 'Interview Bootcamp',
    courses: [
      'Interview Preparation',
      'Mock Interviews',
      'Resume Building',
      'Technical Interview Prep',
    ],
    governingBodies: [
      { name: 'Industry Certified', logo: '/images/industry-cert.png' },
      { name: 'Career Hub', logo: '/images/career-hub.png' },
    ],
  },
  {
    id: 'project-management',
    name: 'Project Management',
    courses: [
      'PMP Certification',
      'PRINCE2',
      'Project Management Basics',
      'Agile Project Management',
    ],
    governingBodies: [
      { name: 'PMI', logo: '/images/pmi-logo.png' },
      { name: 'AXELOS', logo: '/images/axelos-logo.png' },
    ],
  },
  {
    id: 'devops',
    name: 'DevOps',
    courses: [
      'Docker & Kubernetes',
      'Jenkins',
      'AWS DevOps',
      'Azure DevOps',
      'CI/CD Pipeline',
    ],
    governingBodies: [
      { name: 'AWS', logo: '/images/aws-logo.png' },
      { name: 'Microsoft Azure', logo: '/images/azure-logo.png' },
      { name: 'Linux Foundation', logo: '/images/linux-foundation.png' },
    ],
  },
  {
    id: 'data-science',
    name: 'Data Science',
    courses: [
      'Data Analytics',
      'Machine Learning',
      'Python for Data Science',
      'Power BI',
      'Tableau',
      'SQL for Data Science',
    ],
    governingBodies: [
      { name: 'Microsoft', logo: '/images/microsoft-logo.png' },
      { name: 'Tableau', logo: '/images/tableau-logo.png' },
      { name: 'Python Institute', logo: '/images/python-institute.png' },
    ],
  },
  {
    id: 'software-testing',
    name: 'Software Testing',
    courses: [
      'Selenium Testing',
      'API Testing',
      'Performance Testing',
      'Manual Testing',
      'Automation Testing',
      'Mobile Testing',
    ],
    governingBodies: [
      { name: 'ISTQB', logo: '/images/istqb-logo.png' },
      { name: 'ASTQB', logo: '/images/astqb-logo.png' },
    ],
  },
  {
    id: 'marketing',
    name: 'Marketing',
    courses: [
      'Digital Marketing',
      'SEO & SEM',
      'Social Media Marketing',
      'Content Marketing',
      'Email Marketing',
    ],
    governingBodies: [
      { name: 'Google', logo: '/images/google-logo.png' },
      { name: 'HubSpot', logo: '/images/hubspot-logo.png' },
      { name: 'Meta', logo: '/images/meta-logo.png' },
    ],
  },
  {
    id: 'software-development',
    name: 'Software Development',
    courses: [
      'Full Stack Development',
      'React & Next.js',
      'Node.js Development',
      'Python Programming',
      'Java Development',
    ],
    governingBodies: [
      { name: 'Oracle', logo: '/images/oracle-logo.png' },
      { name: 'Microsoft', logo: '/images/microsoft-logo.png' },
    ],
  },
  {
    id: 'quality-management',
    name: 'Quality Management',
    courses: [
      'Six Sigma',
      'Quality Assurance',
      'ISO Certification',
      'TQM',
    ],
    governingBodies: [
      { name: 'ASQ', logo: '/images/asq-logo.png' },
      { name: 'ISO', logo: '/images/iso-logo.png' },
    ],
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(courseCategories[0].id);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setExpandedMobileCategory(null); // Reset mobile category when closing
    }
  };

  const toggleMobileCategory = (categoryId: string) => {
    setExpandedMobileCategory(expandedMobileCategory === categoryId ? null : categoryId);
  };

  const selectedCategoryData = courseCategories.find((cat) => cat.id === selectedCategory);

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
            <Link href="/" className="text-gray-700 hover:text-brand transition-colors text-sm xl:text-base">
              Home
            </Link>

            {/* Mega Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <button
                className="text-gray-700 hover:text-brand transition-colors flex items-center py-6 text-sm xl:text-base"
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
                                onMouseEnter={() => setSelectedCategory(category.id)}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center justify-between group text-sm ${
                                  selectedCategory === category.id
                                    ? 'bg-blue-50 text-blue-700 font-medium'
                                    : 'text-gray-700 hover:bg-gray-50'
                                }`}
                                aria-current={selectedCategory === category.id ? 'true' : 'false'}
                              >
                                <span>{category.name}</span>
                                <ChevronRight
                                  className={`h-4 w-4 transition-transform ${
                                    selectedCategory === category.id ? 'text-blue-700' : 'text-gray-400'
                                  }`}
                                />
                              </button>
                            ))}
                          </div>
                          <Link
                            href="/courses"
                            className="mt-4 flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group"
                          >
                            View All Courses
                            <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>

                        {/* Column 2: Courses */}
                        <div className="col-span-12 sm:col-span-4 lg:col-span-5 pr-0 sm:pr-4">
                          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 sm:mb-4">
                            Courses
                          </h3>
                          <div className="grid grid-cols-1 gap-1 max-h-[400px] sm:max-h-[500px] overflow-y-auto pr-2">
                            {selectedCategoryData?.courses.map((course, index) => (
                              <Link
                                key={index}
                                href={`/courses/${selectedCategory}/${course.toLowerCase().replace(/[®\s&]+/g, '-')}`}
                                className="flex items-start px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 group"
                              >
                                <div className="flex-shrink-0 mt-1">
                                  <div className="w-2 h-2 rounded-full bg-blue-600 group-hover:scale-125 transition-transform" />
                                </div>
                                <div className="ml-3">
                                  <p className="font-medium text-sm">{course}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Column 3: Governing Bodies */}
                        <div className="col-span-12 sm:col-span-4 lg:col-span-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4">
                          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                            Governing Bodies
                          </h3>
                          <p className="text-xs text-gray-600 mb-4">
                            Our courses are certified and recognized by leading industry organizations
                          </p>
                          <div className="grid grid-cols-2 gap-3">
                            {selectedCategoryData?.governingBodies.map((body, index) => (
                              <div
                                key={index}
                                className="bg-white rounded-lg p-3 flex items-center justify-center hover:shadow-md transition-shadow duration-200 group"
                              >
                                <div className="relative w-full h-10 sm:h-12">
                                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <Award className="h-6 w-6 text-gray-300 group-hover:text-blue-600 transition-colors" />
                                    <span className="text-[10px] text-gray-500 mt-1">{body.name}</span>
                                  </div>
                                  {/* Uncomment when actual images are available */}
                                  {/* <Image
                                    src={body.logo}
                                    alt={body.name}
                                    fill
                                    className="object-contain"
                                  /> */}
                                </div>
                              </div>
                            ))}
                          </div>
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

            <Link href="/about-us" className="text-gray-700 hover:text-brand transition-colors text-sm xl:text-base">
              About
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-brand transition-colors text-sm xl:text-base">
              Blog
            </Link>
            <Link href="/contact-us" className="text-gray-700 hover:text-brand transition-colors text-sm xl:text-base">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center">
            <Link
              href="/contact-us"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-5 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 text-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-brand transition-colors p-2"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden px-2 pt-2 pb-4 sm:px-3 bg-gray-50 rounded-lg mb-4 max-h-[80vh] overflow-y-auto">
            <div className="space-y-2">
              <Link
                href="/"
                className="block px-4 py-3 text-gray-700 hover:text-brand hover:bg-white rounded-lg transition-colors text-sm sm:text-base"
                onClick={toggleMenu}
              >
                Home
              </Link>

              {/* Mobile Courses Accordion */}
              <div className="space-y-2">
                <button
                  onClick={() => toggleMobileCategory('courses')}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-brand hover:bg-white rounded-lg transition-colors text-sm sm:text-base"
                  aria-expanded={expandedMobileCategory === 'courses'}
                  aria-controls="mobile-courses"
                >
                  <span>Courses</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      expandedMobileCategory === 'courses' ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedMobileCategory === 'courses' && (
                  <div id="mobile-courses" className="pl-4 space-y-2">
                    {courseCategories.map((category) => (
                      <div key={category.id} className="space-y-2">
                        <button
                          onClick={() => toggleMobileCategory(category.id)}
                          className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-600 hover:text-brand hover:bg-white rounded-lg transition-colors"
                          aria-expanded={expandedMobileCategory === category.id}
                          aria-controls={`mobile-category-${category.id}`}
                        >
                          <span>{category.name}</span>
                          <ChevronRight
                            className={`h-4 w-4 transition-transform duration-200 ${
                              expandedMobileCategory === category.id ? 'rotate-90' : ''
                            }`}
                          />
                        </button>

                        {expandedMobileCategory === category.id && (
                          <div id={`mobile-category-${category.id}`} className="pl-4 space-y-1">
                            {category.courses.map((course, idx) => (
                              <Link
                                key={idx}
                                href={`/courses/${category.id}/${course.toLowerCase().replace(/[®\s&]+/g, '-')}`}
                                className="block px-4 py-2 text-sm text-gray-600 hover:text-brand hover:bg-white rounded-lg transition-colors"
                                onClick={toggleMenu}
                              >
                                • {course}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                    <Link
                      href="/courses"
                      className="block px-4 py-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
                      onClick={toggleMenu}
                    >
                      View All Courses →
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/about-us"
                className="block px-4 py-3 text-gray-700 hover:text-brand hover:bg-white rounded-lg transition-colors text-sm sm:text-base"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="/blog"
                className="block px-4 py-3 text-gray-700 hover:text-brand hover:bg-white rounded-lg transition-colors text-sm sm:text-base"
                onClick={toggleMenu}
              >
                Blog
              </Link>
              <Link
                href="/contact-us"
                className="block px-4 py-3 text-gray-700 hover:text-brand hover:bg-white rounded-lg transition-colors text-sm sm:text-base"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link
                href="/contact-us"
                className="block px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-center text-sm sm:text-base"
                onClick={toggleMenu}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;