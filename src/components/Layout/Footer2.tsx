import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react'; // Assuming lucide-react for icons; install if needed

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section: Get In Touch */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Get In Touch</h2>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
              <p>Office #1, 2nd Floor, Ashley Towers, Kanakia Rd, Vagad Nagar, Beverly Park, Mira Road East, Mira Bhayandar, Maharashtra 401107</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
              <a href="mailto:contact@cinutedigital.com" className="hover:text-white transition-colors">
                contact@cinutedigital.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
              <div className="flex space-x-2">
                <a href="tel:+9178883383788" className="hover:text-white transition-colors">+91 788-833-838-788</a>
                <span>|</span>
                <a href="tel:+918488988984" className="hover:text-white transition-colors">+91 84-889-889-84</a>
              </div>
            </div>
          </div>

          {/* Right Section: Logos, Policies, Certifications */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-start md:justify-end space-x-4">
              {/* Placeholders for logos; replace with actual image sources */}
              <img src="/path/to/gov-india-logo.png" alt="Government of India" className="h-8" />
              <img src="/path/to/msme-logo.png" alt="MSME" className="h-8" />
              <img src="/path/to/skill-india-logo.png" alt="Skill India" className="h-8" />
              <img src="/path/to/iso-27001-logo.png" alt="ISO 27001 Certified" className="h-8" />
              <img src="/path/to/iso-9001-logo.png" alt="ISO 9001 Certified" className="h-8" />
              <img src="/path/to/trustpilot-logo.png" alt="Trustpilot" className="h-8" />
            </div>
            <div className="flex flex-wrap justify-start md:justify-end space-x-4 text-sm">
              <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="/cookies-policy" className="hover:text-white transition-colors">Cookies Policy</a>
              <span>|</span>
              <a href="/terms-conditions" className="hover:text-white transition-colors">Terms and Conditions</a>
              <span>|</span>
              <a href="/cancellation-refund" className="hover:text-white transition-colors">Cancellation/Refund Policy</a>
            </div>
            <p className="text-sm text-center md:text-right">ISO 9001:2015 (QMS) 27001:2013 (ISMS) Certified Company.</p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-700 text-sm text-center">
          © Copyright 2025 Cinute Digital Pvt. Ltd. - All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;