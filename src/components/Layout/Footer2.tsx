"use client";

import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 text-slate-700">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-12">
        {/* CARD */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* TOP: Brand + Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/cdpl-logo.png"
                  alt="Cinute Digital logo"
                  width={48}
                  height={48}
                  className="rounded"
                  priority
                />
                <p className="text-2xl font-semibold tracking-tight text-slate-900">
                  Cinute Digital
                </p>
              </div>

              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Get In Touch
              </h2>

              <div className="space-y-4 text-[15px] leading-relaxed">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-orange-500 mt-0.5" aria-hidden="true" />
                  <p>
                    Office #1, 2nd Floor, Ashley Towers, Kanakia Rd, Vagad Nagar, Beverly Park,
                    Mira Road East, Mira Bhayandar, Maharashtra 401107
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-orange-500" aria-hidden="true" />
                  <Link
                    href="mailto:contact@cinutedigital.com"
                    className="hover:text-orange-600 transition-colors"
                  >
                    contact@cinutedigital.com
                  </Link>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-orange-500 mt-0.5" aria-hidden="true" />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                    <Link
                      href="tel:+9178883383788"
                      className="hover:text-orange-600 transition-colors"
                    >
                      +91 788-833-838-788
                    </Link>
                    <span className="hidden sm:inline text-slate-300">|</span>
                    <Link
                      href="tel:+918488988984"
                      className="hover:text-orange-600 transition-colors"
                    >
                      +91 84-889-889-84
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Logos + Policies */}
            <div className="flex flex-col gap-6">
              {/* Logos: centered, larger size */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-7">
                <div className="w-32 flex justify-center">
                  <Image
                    src="/images/msme.png"
                    alt="MSME"
                    width={120}
                    height={120}
                    className="h-16 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="w-32 flex justify-center">
                  <Image
                    src="/images/Skill-India-Color.svg"
                    alt="Skill India"
                    width={130}
                    height={130}
                    className="h-16 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="w-32 flex justify-center">
                  <Image
                    src="/images/ISO-27001.png"
                    alt="ISO 27001 Certified"
                    width={130}
                    height={130}
                    className="h-16 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="w-32 flex justify-center">
                  <Image
                    src="/images/ISO-9001.png"
                    alt="ISO 9001 Certified"
                    width={130}
                    height={130}
                    className="h-16 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="w-32 flex justify-center">
                  <Image
                    src="/images/Trustpilot.png"
                    alt="Trustpilot"
                    width={150}
                    height={150}
                    className="h-16 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>

              {/* Policies: simple chips */}
              <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
                <Link
                  href="/privacy-policy"
                  className="rounded-full border border-slate-200 px-3 py-1.5 hover:border-orange-300 hover:text-orange-600 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/cookies-policy"
                  className="rounded-full border border-slate-200 px-3 py-1.5 hover:border-orange-300 hover:text-orange-600 transition-colors"
                >
                  Cookies Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="rounded-full border border-slate-200 px-3 py-1.5 hover:border-orange-300 hover:text-orange-600 transition-colors"
                >
                  Terms and Conditions
                </Link>
                <Link
                  href="/cancellation-refund-policy"
                  className="rounded-full border border-slate-200 px-3 py-1.5 hover:border-orange-300 hover:text-orange-600 transition-colors"
                >
                  Cancellation/Refund Policy
                </Link>
              </div>

              <p className="text-xs text-center text-slate-500">
                ISO 9001:2015 (QMS) 27001:2013 (ISMS) Certified Company.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-slate-100" />

          {/* Bottom Bar */}
          <div className="px-6 md:px-10 py-5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              <p className="text-xs md:text-sm text-slate-600 text-center md:text-left">
                © {new Date().getFullYear()} Cinute Digital Pvt. Ltd. — All Rights Reserved.
              </p>
              <div className="flex items-center gap-2 text-[11px] text-slate-500">
                <span className="rounded-full bg-red-100 text-red-800 px-2.5 py-2">Quality Training</span>
                <span className="rounded-full bg-green-100 text-green-800 px-2.5 py-2">Job Assistance</span>
                <span className="rounded-full bg-blue-100 text-blue-800 px-2.5 py-2">Mentor Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
