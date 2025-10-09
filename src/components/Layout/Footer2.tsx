import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react'; // Assuming lucide-react for icons; install if needed
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-tr from-sky-100 via-sky-50 to-sky-100 text-gray-700 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section: Get In Touch */}
          <div className="space-y-4">
            <div className='flex items-center space-x-3'>
              <Image src='/images/cdpl-logo.png' alt='cdpl-logo' width={50} height={50} />
              <p className='text-2xl font-bold text-gray-700'>Cinute Digital</p>
            </div>
            <h2 className="text-xl font-semibold text-orange-400">Get In Touch</h2>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
              <p>Office #1, 2nd Floor, Ashley Towers, Kanakia Rd, Vagad Nagar, Beverly Park, Mira Road East, Mira Bhayandar, Maharashtra 401107</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
              <Link href="mailto:contact@cinutedigital.com" className="hover:text-orange-400 transition-colors">
                contact@cinutedigital.com
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
              <div className="flex flex-col lg:flex-row space-y-2 lg:space-x-2">
                <Link href="tel:+9178883383788" className="hover:text-orange-400 transition-colors">+91 788-833-838-788</Link>
                <span className='hidden lg:block'>|</span>
                <Link href="tel:+918488988984" className="hover:text-orange-400 transition-colors">+91 84-889-889-84</Link>
              </div>
            </div>
          </div>

          {/* Right Section: Logos, Policies, Certifications */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center pb-2 justify-start md:justify-end space-x-4">
              {/* Placeholders for logos; replace with actual image sources */}
              <Image src="/images/msme.png" alt="MSME" width={100} height={100} />
              <Image src="/images/Skill-India-Color.svg" alt="Skill India" width={100} height={100} />
              <Image src="/images/ISO-27001.png" alt="ISO 27001 Certified" width={100} height={100} />
              <Image src="/images/ISO-9001.png" alt="ISO 9001 Certified" width={100} height={100} className='lg:mr-0' />
              <Image src="/images/Trustpilot.png" alt="Trustpilot" width={100} height={100} className='lg:w-[120px]' />
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-y-3 space-x-4 text-sm">
              <Link href="/privacy-policy" className="hover:text-orange-400 transition-colors">Privacy Policy</Link>
              <span className='hidden lg:block'>|</span>
              <Link href="/cookies-policy" className="hover:text-orange-400 transition-colors md:mr-0 lg:mr-4">Cookies Policy</Link>
              <span className='hidden lg:block'>|</span>
              <Link href="/terms-of-service" className="hover:text-orange-400 transition-colors md:mr-3 lg:mr-0 xl:mr-4">Terms and Conditions</Link>
              <span className='hidden xl:block'>|</span>
              <Link href="/cancellation-refund-policy" className="hover:text-orange-400 transition-colors">Cancellation/Refund Policy</Link>
            </div>
            <p className="mt-6 text-sm text-center md:text-right">ISO 9001:2015 (QMS) 27001:2013 (ISMS) Certified Company.</p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 py-4 border-t border-4 border-gray-400 rounded-full text-sm text-center">
          © Copyright 2025 Cinute Digital Pvt. Ltd. - All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;