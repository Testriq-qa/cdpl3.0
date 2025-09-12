'use client';

import Link from 'next/link';
import Image from 'next/image';
import {Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg">
                <Image src="/images/cdpl-logo.png" alt="CDPL Logo" width={50} height={50} />
              </div>
              <span className="text-xl font-bold">Cinute Digital</span>
            </div>
            <p className="text-gray-300 text-sm">
              Leading EdTech platform offering comprehensive courses in Software Testing, Data Science, AI, and Machine Learning. Transform your career with industry-expert training.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-brand transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-brand transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-brand transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-brand transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-brand transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses/software-testing" className="text-gray-300 hover:text-brand transition-colors">
                  Software Testing
                </Link>
              </li>
              <li>
                <Link href="/courses/automation-testing" className="text-gray-300 hover:text-brand transition-colors">
                  Automation Testing
                </Link>
              </li>
              <li>
                <Link href="/courses/data-science" className="text-gray-300 hover:text-brand transition-colors">
                  Data Science
                </Link>
              </li>
              <li>
                <Link href="/courses/ai-ml" className="text-gray-300 hover:text-brand transition-colors">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/courses/python" className="text-gray-300 hover:text-brand transition-colors">
                  Python Programming
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-20 w-20 text-brand" />
                <span className="text-gray-300 text-sm">
                  Office # 1, 2nd Floor, Ashley Towers, Kanakia Rd, Vagad Nagar, Beverly Park, Mira Road East, Mira Bhayandar, Maharashtra 401107
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand" />
                <span className="text-gray-300 text-sm">+91 788-83-83-788</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand" />
              <span className="text-gray-300 text-sm">+91 84-889-889-84</span>
</div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand" />
                <span className="text-gray-300 text-sm">contact@cinutedigital.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Cinute Digital Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-brand text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-brand text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies-policy" className="text-gray-400 hover:text-brand text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

