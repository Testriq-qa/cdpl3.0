"use client";

import { useState, useEffect, useRef } from "react";
import { Search, ChevronDown, X } from "lucide-react";
import Link from "next/link";

interface Category {
  id: string;
  name: string;
  slug: string;
  count?: number;
}

const BlogCategoryMenu = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Main categories displayed in the menu
  const mainCategories: Category[] = [
    { id: "all", name: "All Blogs", slug: "/blog" },
    { id: "software-testing", name: "Software Testing", slug: "/blog/category/software-testing" },
    { id: "data-science", name: "Data Science", slug: "/blog/category/data-science" },
    { id: "web-development", name: "Web Development", slug: "/blog/category/web-development" },
    { id: "ai-ml", name: "AI & ML", slug: "/blog/category/ai-ml" },
  ];

  // Additional categories in dropdown
  const dropdownCategories: Category[] = [
    { id: "devops", name: "DevOps", slug: "/blog/category/devops" },
    { id: "cloud-computing", name: "Cloud Computing", slug: "/blog/category/cloud-computing" },
    { id: "digital-marketing", name: "Digital Marketing", slug: "/blog/category/digital-marketing" },
    { id: "ui-ux", name: "UI/UX Design", slug: "/blog/category/ui-ux" },
    { id: "career-tips", name: "Career Tips", slug: "/blog/category/career-tips" },
    { id: "industry-news", name: "Industry News", slug: "/blog/category/industry-news" },
    { id: "tutorials", name: "Tutorials", slug: "/blog/category/tutorials" },
    { id: "case-studies", name: "Case Studies", slug: "/blog/category/case-studies" },
  ];

  // Handle scroll to hide/show menu
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        // Always show when near top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 150) {
        // Scrolling down - hide menu
        setIsVisible(false);
      } else {
        // Scrolling up - show menu
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results
      window.location.href = `/blog/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div
      className={`sticky top-[72px] lg:top-[80px] z-40 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 shadow-md transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Categories Navigation */}
          <nav className="flex items-center space-x-1 overflow-x-auto scrollbar-hide flex-1">
            {mainCategories.map((category) => (
              <Link
                key={category.id}
                href={category.slug}
                className="whitespace-nowrap px-4 py-2 text-sm font-medium text-white hover:bg-white/20 rounded-lg transition-all duration-200 flex-shrink-0"
              >
                {category.name}
              </Link>
            ))}

            {/* Others Dropdown */}
            <div className="relative flex-shrink-0" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="whitespace-nowrap px-4 py-2 text-sm font-medium text-white hover:bg-white/20 rounded-lg transition-all duration-200 flex items-center gap-1"
              >
                Others
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 max-h-96 overflow-y-auto">
                  <div className="px-3 py-2 border-b border-gray-100">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      More Categories
                    </p>
                  </div>
                  {dropdownCategories.map((category) => (
                    <Link
                      key={category.id}
                      href={category.slug}
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-150"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Search Section */}
          <div className="flex items-center ml-4 flex-shrink-0">
            {!isSearchOpen ? (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-white hover:bg-white/20 rounded-lg transition-all duration-200"
                aria-label="Open search"
              >
                <Search className="w-5 h-5" />
              </button>
            ) : (
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden animate-expand"
              >
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="bg-transparent text-white placeholder-white/70 px-4 py-2 outline-none w-48 sm:w-64 text-sm"
                />
                <button
                  type="button"
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="p-2 text-white hover:bg-white/20 transition-colors duration-200"
                  aria-label="Close search"
                >
                  <X className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes expand {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: auto;
            opacity: 1;
          }
        }
        .animate-expand {
          animation: expand 0.3s ease-out;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default BlogCategoryMenu;
