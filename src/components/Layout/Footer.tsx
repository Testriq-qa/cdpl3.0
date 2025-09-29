'use client';

import Link from 'next/link';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';
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
            <h3 className="text-lg font-semibold text-blue-400">Data Science, AI - ML & BI Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses/data-science-master" className="text-gray-300 hover:text-orange-300 transition-colors text-sm">
                  Comprehensive Data Science and AI - Master Program
                </Link>
              </li>
              <li>
                <Link href="/courses/data-analysis-bi" className="text-gray-300 hover:text-orange-300 transition-colors text-sm">
                  Data Analysis with BI & Big Data Engineering
                </Link>
              </li>
              <li>
                <Link href="/courses/ml-python" className="text-gray-300 hover:text-orange-300 transition-colors text-sm">
                  Machine Learning and Data Science with Python
                </Link>
              </li>
              <li>
                <Link href="/courses/deep-learning-nlp" className="text-gray-300 hover:text-orange-300 transition-colors text-sm">
                  Deep Learning, NLP and Generative AI
                </Link>
              </li>
              <li>
                <Link href="/courses/business-analyst" className="text-gray-300 hover:text-orange-300 transition-colors text-sm">
                  Advanced Business Analyst
                </Link>
              </li>
              <li>
                <Link href="/courses/big-data" className="text-gray-300 hover:text-orange-300 transition-colors text-sm">
                  Big Data Engineering
                </Link>
              </li>
              <li>
                <Link href="/courses/prompt-engineering" className="text-gray-300 hover:text-orange-300 transition-colors text-sm">
                  Prompt Engineering with Gen AI
                </Link>
              </li>
              <li>
                <Link href="/courses/advanced-data-science" className="text-gray-300 hover:text-orange-300 transition-colors text-sm">
                  Advanced Data Science & Machine Learning Masterclass
                </Link>
              </li>
            </ul>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold hover:text-orange-300">Follow Us On</h3>
              <ul className="space-y-2">
                <li className='flex gap-5'>
                  <Link href="/courses/digital-marketing" className="text-gray-300 hover:text-orange-300 transition-colors text-sm">
                    <Facebook />
                  </Link>

                  <Link href="/courses/digital-marketing" className="text-gray-300 hover:text-orange-300 transition-colors text-sm">
                    <Twitter />
                  </Link>

                  <Link href="/courses/digital-marketing" className="text-gray-300 hover:text-orange-300 transition-colors text-sm">
                    <Linkedin />
                  </Link>

                  <Link href="/courses/digital-marketing" className="text-gray-300 hover:text-orange-300 transition-colors text-sm">
                    <Instagram />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Software Testing Courses */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Software Testing Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses/manual-testing" className="text-gray-300 hover:text-orange-300 transition-colors text-sm">
                  Manual Software Testing
                </Link>
              </li>
              <li>
                <Link href="/courses/api-testing" className="text-gray-300 hover:text-orange-300 transition-colors text-sm">
                  API Testing
                </Link>
              </li>
              <li>
                <Link href="/courses/database-management" className="text-gray-300 hover:text-orange-300 transition-colors text-sm">
                  Database Management System
                </Link>
              </li>
              <li>
                <Link href="/courses/advanced-testing" className="text-gray-300 hover:text-orange-300 transition-colors text-sm">
                  Advanced Software Testing
                </Link>
              </li>
              <li>
                <Link href="/courses/advanced-automation" className="text-gray-300 hover:text-orange-300 transition-colors text-sm">
                  Advanced Automation Testing
                </Link>
              </li>
              <li>
                <Link href="/courses/manual-automation" className="text-gray-300 hover:text-orange-300 transition-colors text-sm">
                  Advanced Manual and Automation Testing
                </Link>
              </li>
            </ul>

            {/* Digital Marketing */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-400">Digital Marketing</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/courses/digital-marketing" className="text-gray-300 hover:text-orange-300 transition-colors text-sm">
                    Digital Marketing & Analytics
                  </Link>
                </li>
              </ul>
            </div>

            {/* Programming Languages */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-400">Programming Languages</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/courses/python" className="text-gray-300 hover:text-orange-300 transition-colors text-sm">
                    Python Programming
                  </Link>
                </li>
                <li>
                  <Link href="/courses/java" className="text-gray-300 hover:text-orange-300 transition-colors text-sm">
                    Java Programming
                  </Link>
                </li>
              </ul>
            </div>
          </div>





          {/* Institute */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Institute</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/institute/services" className="text-gray-300 hover:text-orange-300 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/institute/job-openings" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Job Openings
                </Link>
              </li>
              <li>
                <Link href="/institute/placements" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Placements
                </Link>
              </li>
              <li>
                <Link href="/institute/placement-news" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Placement News
                </Link>
              </li>
              <li>
                <Link href="/institute/affiliate-program" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link href="/institute/mentors" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Mentors
                </Link>
              </li>
              <li>
                <Link href="/institute/about-us" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/institute/contact-us" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/institute/validate-certificate" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Validate your Certificate
                </Link>
              </li>
            </ul>

            {/* Digital Marketing */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-400">Powered By</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/courses/digital-marketing" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    <Image src={'/images/Testriq-Logo-1.webp'} alt='Testriq_logo' width={100} height={100} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>


        </div>
      </div>

      <Footer2/>
    </footer>
  );
};

export default Footer;