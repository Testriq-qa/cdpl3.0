"use client";

import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 text-slate-700">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-12">
        {/* CARD */}
        <div className="rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/50 overflow-hidden">
          {/* TOP: Brand + Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10 lg:p-12">
            
            {/* LEFT: Brand + Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-500/20 rounded-xl blur-md group-hover:bg-orange-500/30 transition-all" />
                  <Image
                    src="/images/cdpl-logo.png"
                    alt="Cinute Digital logo"
                    width={52}
                    height={52}
                    className="relative rounded-xl shadow-md transition-transform group-hover:scale-105"
                    priority
                  />
                </div>
                <p className="text-2xl lg:text-3xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Cinute Digital
                </p>
              </div>

              <h2 className="text-sm font-bold uppercase tracking-wider text-orange-600 flex items-center gap-2">
                <div className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-orange-300" />
                Get In Touch
              </h2>

              <div className="space-y-4 text-[15px] leading-relaxed">
                <div className="group flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all duration-200">
                  <div className="mt-0.5 p-2 bg-orange-50 rounded-lg group-hover:bg-orange-100 group-hover:scale-110 transition-all">
                    <MapPin className="h-4 w-4 text-orange-600" aria-hidden="true" />
                  </div>
                  <p className="text-slate-600 group-hover:text-slate-900 transition-colors">
                    Office #1, 2nd Floor, Ashley Towers, Kanakia Rd, Vagad Nagar, Beverly Park,
                    Mira Road East, Mira Bhayandar, Maharashtra 401107
                  </p>
                </div>

                <Link
                  href="mailto:contact@cinutedigital.com"
                  className="group flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all duration-200"
                >
                  <div className="p-2 bg-orange-50 rounded-lg group-hover:bg-orange-100 group-hover:scale-110 transition-all">
                    <Mail className="h-4 w-4 text-orange-600" aria-hidden="true" />
                  </div>
                  <span className="text-slate-600 group-hover:text-orange-600 transition-colors font-medium">
                    contact@cinutedigital.com
                  </span>
                </Link>

                <div className="group flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all duration-200">
                  <div className="mt-0.5 p-2 bg-orange-50 rounded-lg group-hover:bg-orange-100 group-hover:scale-110 transition-all">
                    <Phone className="h-4 w-4 text-orange-600" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-slate-600">
                    <Link
                      href="tel:+917888338788"
                      className="hover:text-orange-600 transition-colors font-medium"
                    >
                      +91 788-833-8788
                    </Link>
                    <span className="hidden sm:inline text-slate-300">|</span>
                    <Link
                      href="tel:+918488988984"
                      className="hover:text-orange-600 transition-colors font-medium"
                    >
                      +91 84-889-889-84
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Logos + Policies */}
            <div className="flex flex-col gap-6 lg:gap-8">
              
              {/* Logos: centered, larger size with improved styling */}
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-100">
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                  <div className="group w-28 flex justify-center">
                    <Image
                      src="/images/msme.png"
                      alt="MSME"
                      width={120}
                      height={120}
                      className="h-16 md:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0"
                    />
                  </div>
                  <div className="group w-28 flex justify-center">
                    <Image
                      src="/images/Skill-India-Color.svg"
                      alt="Skill India"
                      width={130}
                      height={130}
                      className="h-16 md:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0"
                    />
                  </div>
                  <div className="group w-28 flex justify-center">
                    <Image
                      src="/images/ISO-27001.png"
                      alt="ISO 27001 Certified"
                      width={130}
                      height={130}
                      className="h-16 md:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0"
                    />
                  </div>
                  <div className="group w-28 flex justify-center">
                    <Image
                      src="/images/ISO-9001.png"
                      alt="ISO 9001 Certified"
                      width={130}
                      height={130}
                      className="h-16 md:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0"
                    />
                  </div>
                  <div className="group w-28 flex justify-center">
                    <Image
                      src="/images/Trustpilot.png"
                      alt="Trustpilot"
                      width={150}
                      height={150}
                      className="h-16 md:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0"
                    />
                  </div>
                </div>
              </div>

              {/* Policies: modern pill design */}
              <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
                <Link
                  href="/privacy-policy"
                  className="group relative rounded-full bg-white border-2 border-slate-200 px-4 py-2 hover:border-orange-400 hover:shadow-md transition-all duration-200 overflow-hidden"
                >
                  <span className="relative z-10 text-slate-700 group-hover:text-orange-600 font-medium transition-colors">
                    Privacy Policy
                  </span>
                  <div className="absolute inset-0 bg-orange-50 scale-0 group-hover:scale-100 transition-transform duration-200" />
                </Link>
                <Link
                  href="/cookies-policy"
                  className="group relative rounded-full bg-white border-2 border-slate-200 px-4 py-2 hover:border-orange-400 hover:shadow-md transition-all duration-200 overflow-hidden"
                >
                  <span className="relative z-10 text-slate-700 group-hover:text-orange-600 font-medium transition-colors">
                    Cookies Policy
                  </span>
                  <div className="absolute inset-0 bg-orange-50 scale-0 group-hover:scale-100 transition-transform duration-200" />
                </Link>
                <Link
                  href="/terms-of-service"
                  className="group relative rounded-full bg-white border-2 border-slate-200 px-4 py-2 hover:border-orange-400 hover:shadow-md transition-all duration-200 overflow-hidden"
                >
                  <span className="relative z-10 text-slate-700 group-hover:text-orange-600 font-medium transition-colors">
                    Terms and Conditions
                  </span>
                  <div className="absolute inset-0 bg-orange-50 scale-0 group-hover:scale-100 transition-transform duration-200" />
                </Link>
                <Link
                  href="/cancellation-refund-policy"
                  className="group relative rounded-full bg-white border-2 border-slate-200 px-4 py-2 hover:border-orange-400 hover:shadow-md transition-all duration-200 overflow-hidden"
                >
                  <span className="relative z-10 text-slate-700 group-hover:text-orange-600 font-medium transition-colors">
                    Cancellation/Refund Policy
                  </span>
                  <div className="absolute inset-0 bg-orange-50 scale-0 group-hover:scale-100 transition-transform duration-200" />
                </Link>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-center">
                <div className="flex items-center gap-1.5 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-full px-3 py-1.5">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-emerald-700 font-semibold">ISO 9001:2015 (QMS)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full px-3 py-1.5">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-blue-700 font-semibold">ISO 27001:2013 (ISMS)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider with gradient */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

          {/* Bottom Bar */}
          <div className="px-6 md:px-10 py-6 bg-gradient-to-r from-slate-50 via-white to-slate-50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs md:text-sm text-slate-600 text-center md:text-left font-medium">
                © {new Date().getFullYear()} Cinute Digital Pvt. Ltd. — All Rights Reserved.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 text-[11px]">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 px-3 py-1.5 text-orange-700 font-semibold hover:shadow-md transition-all">
                  <div className="w-1 h-1 bg-orange-500 rounded-full" />
                  Quality Training
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 px-3 py-1.5 text-blue-700 font-semibold hover:shadow-md transition-all">
                  <div className="w-1 h-1 bg-blue-500 rounded-full" />
                  Job Assistance
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 px-3 py-1.5 text-purple-700 font-semibold hover:shadow-md transition-all">
                  <div className="w-1 h-1 bg-purple-500 rounded-full" />
                  Mentor Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;