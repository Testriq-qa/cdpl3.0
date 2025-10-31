'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import dynamic from 'next/dynamic';

const Footer2 = dynamic(
  () => import("@/components/Layout/Footer2"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Data Science, AI - ML & BI Courses */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-400">Data Science, AI - ML & BI Courses</h3>
            <ul>
              <li className='flex flex-col space-y-2'>
                <Link href="/courses/data-science-master" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Comprehensive Data Science and AI - Master Program
                </Link>

                <Link href="/courses/data-analysis-bi" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Data Analysis with BI & Big Data Engineering
                </Link>

                <Link href="/courses/ml-python" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Machine Learning and Data Science with Python
                </Link>

                <Link href="/courses/deep-learning-nlp" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Deep Learning, NLP and Generative AI
                </Link>

                <Link href="/courses/business-analyst" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Advanced Business Analyst
                </Link>

                <Link href="/courses/big-data" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Big Data Engineering
                </Link>

                <Link href="/courses/prompt-engineering" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Prompt Engineering with Gen AI
                </Link>

                <Link href="/courses/advanced-data-science" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Advanced Data Science & Machine Learning Masterclass
                </Link>
              </li>
            </ul>

            <div className="space-y-4 hidden lg:block">
              <h3 className="text-lg font-semibold text-orange-400">Follow Us On</h3>
              <ul className="space-y-2">
                <li className='flex gap-5'>
                  <Link href="/courses/digital-marketing" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                    <Facebook />
                  </Link>

                  <Link href="/courses/digital-marketing" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                    <Twitter />
                  </Link>

                  <Link href="/courses/digital-marketing" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                    <Linkedin />
                  </Link>

                  <Link href="/courses/digital-marketing" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                    <Instagram />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Software Testing Courses */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-400">Software Testing Courses</h3>
            <ul>
              <li className='flex flex-col space-y-2'>
                <Link href="/courses/manual-testing" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Manual Software Testing
                </Link>

                <Link href="/courses/api-testing" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  API Testing
                </Link>

                <Link href="/courses/database-management" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Database Management System
                </Link>

                <Link href="/courses/advanced-testing" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Advanced Software Testing
                </Link>

                <Link href="/courses/advanced-automation" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Advanced Automation Testing
                </Link>

                <Link href="/courses/manual-automation" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Advanced Manual and Automation Testing
                </Link>
              </li>
            </ul>

            {/* Digital Marketing */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-orange-400">Digital Marketing</h3>
              <ul>
                <li className='flex flex-col space-y-2'>
                  <Link href="/courses/digital-marketing" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                    Digital Marketing & Analytics
                  </Link>
                </li>
              </ul>
            </div>

            {/* Programming Languages */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-orange-400">Programming Languages</h3>
              <ul>
                <li className='flex flex-col space-y-2'>
                  <Link href="/courses/python" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                    Python Programming
                  </Link>

                  <Link href="/courses/java" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                    Java Programming
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* City Pages */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-400">Cities</h3>
            <ul>
              <li className='flex flex-col space-y-2'>
                <Link href="/courses/software-testing-course-in-mumbai" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Mumbai
                </Link>

                <Link href="/courses/software-testing-course-in-chennai" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Chennai
                </Link>

                <Link href="/courses/software-testing-course-in-kolkata" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Kolkata
                </Link>

                <Link href="/courses/software-testing-course-in-bengaluru" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Bengaluru
                </Link>

                <Link href="/courses/software-testing-course-in-hyderabad" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Hyderabad
                </Link>

                <Link href="/courses/software-testing-course-in-pune" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Pune
                </Link>

                <Link href="/courses/software-testing-course-in-delhi" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Delhi
                </Link>

                <Link href="/courses/software-testing-course-in-ahmedabad" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Ahmedabad
                </Link>

                <Link href="/courses/software-testing-course-in-surat" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Surat
                </Link>

                <Link href="/courses/software-testing-course-in-jodhpur" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Jodhpur
                </Link>

                <Link href="/courses/software-testing-course-in-jaipur" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Jaipur
                </Link>

                <Link href="/courses/software-testing-course-in-aurangabad" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Aurangabad
                </Link>

                <Link href="/courses/software-testing-course-in-kochi" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Kochi
                </Link>

                <Link href="/courses/software-testing-course-in-chandigarh" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Chandigarh
                </Link>

                <Link href="/courses/software-testing-course-in-patna" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Patna
                </Link>

                <Link href="/courses/software-testing-course-in-indore" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Indore
                </Link>

                <Link href="/courses/software-testing-course-in-bhubaneswar" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Bhubaneswar
                </Link>

                <Link href="/locations-we-serve" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  View All Cities
                </Link>
              </li>
            </ul>
          </div>

          {/* Blogs and Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-400">Blogs</h3>
            <ul>
              <li className='flex flex-col space-y-2'>
                <Link href="/blog" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Blogs
                </Link>

                <Link href="/blog/category/software-testing" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Software Testing
                </Link>

                <Link href="/blog/category/data-science" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Data Science
                </Link>

                <Link href="/blog/category/web-development" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Web Development
                </Link>

                <Link href="/blog/category/ai-ml" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  AI & Machine Learning
                </Link>
              </li>
            </ul>
          </div>

          {/* Institute */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-400">Institute</h3>
            <ul>
              <li className='flex flex-col space-y-2'>
                <Link href="/services" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Services
                </Link>

                <Link href="/events/past-events" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Events
                </Link>

                <Link href="/mentors" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Mentors
                </Link>

                <Link href="/jobs/placements" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Placements
                </Link>

                <Link href="/jobs/live-jobs" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Live Jobs
                </Link>

                <Link href="/jobs/job-openings" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Job Openings
                </Link>

                <Link href="/jobs/careers" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Careers
                </Link>

                <Link href="/about-us" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  About CDPL
                </Link>

                <Link href="/our-team" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Our Team
                </Link>

                <Link href="/#" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Affiliate Program
                </Link>

                <Link href="/contact-us" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Certifications and Accreditation */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-orange-400">Certifications and Accreditation</h3>
              <ul>
                <li className='flex flex-col space-y-2'>
                  <Link href="/aaa-certification-course" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                    AAA Certification Course
                  </Link>

                  <Link href="/actd-certification-training" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                    ACTD Certification Course
                  </Link>

                  <Link href="/cdpl-certificate-validation" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                    Validate Your Certificate
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4 lg:hidden">
              <h3 className="text-lg font-semibold text-orange-400">Follow Us On</h3>
              <ul className="space-y-2">
                <li className='flex gap-5'>
                  <Link href="/courses/digital-marketing" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                    <Facebook />
                  </Link>

                  <Link href="/courses/digital-marketing" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                    <Twitter />
                  </Link>

                  <Link href="/courses/digital-marketing" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                    <Linkedin />
                  </Link>

                  <Link href="/courses/digital-marketing" className="text-gray-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                    <Instagram />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer2 />
    </footer>
  );
};

export default Footer;