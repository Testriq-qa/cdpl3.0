'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, BookOpen, Code, Database, Brain } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-4">
              <div className=" rounded-lg">
                <Image src="/images/cdpl-logo.png" alt="CDPL Logo" width={70} height={70} />
              </div>
              <span className="text-2xl font-bold text-brand">Cinute Digital</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-brand transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-brand transition-colors flex items-center">
                Courses
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/courses/software-testing" className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-brand">
                    <Code className="h-4 w-4 mr-2" />
                    Software Testing
                  </Link>
                  <Link href="/courses/data-science" className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-brand">
                    <Database className="h-4 w-4 mr-2" />
                    Data Science
                  </Link>
                  <Link href="/courses/ai-ml" className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-brand">
                    <Brain className="h-4 w-4 mr-2" />
                    AI & Machine Learning
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/about-us" className="text-gray-700 hover:text-brand transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-brand transition-colors">
              Blog
            </Link>
            <Link href="/contact-us" className="text-gray-700 hover:text-brand transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact-us"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-brand transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mb-4">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-brand">
                Home
              </Link>
              <Link href="/courses" className="block px-3 py-2 text-gray-700 hover:text-brand">
                Courses
              </Link>
              <Link href="/about-us" className="block px-3 py-2 text-gray-700 hover:text-brand">
                About
              </Link>
              <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:text-brand">
                Blog
              </Link>
              <Link href="/contact-us" className="block px-3 py-2 text-gray-700 hover:text-brand">
                Contact
              </Link>
              <Link
                href="/contact-us"
                className="block px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-center"
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

