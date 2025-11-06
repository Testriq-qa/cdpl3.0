'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm'; // Import the new reusable form component

export default function HomeFinalCTASection() {
  return (
    <section className="relative py-12 lg:py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-50" style={{ zIndex: 0 }}>
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-gray-900"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-gray-900">
              Ready to <span className="text-indigo-600">Transform</span> Your Career?
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-gray-600">
              Join 5000+ students who have successfully launched their careers in Software Testing, Data Science, and AI/ML with CDPL&apos;s industry-ready training.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Start learning within 48 hours',
                'Live interactive classes with experts',
                '100% placement support guaranteed',
                'Flexible payment options available',
              ].map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="w-6 h-6 bg-green-100 border border-green-200 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-lg text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="space-y-3 pt-8 border-t border-gray-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center gap-3 text-gray-700 font-medium hover:text-indigo-600 transition-colors">
                <Phone className="w-5 h-5 text-indigo-500" />
                <span>+91 788-833-838-788</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 font-medium hover:text-indigo-600 transition-colors">
                <Mail className="w-5 h-5 text-indigo-500" />
                <span>contact@cinutedigital.com</span>
              </div>
              <div className="flex items-start gap-3 text-gray-700 font-medium hover:text-indigo-600 transition-colors">
                <MapPin className="w-5 h-5 text-indigo-500 mt-1" />
                <span className="flex flex-col">
                  <span>Head Office (CDPL)</span>
                  <span className="text-sm text-gray-500">Mira Road East, Mira Bhayandar, Maharashtra</span>
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-10 transform hover:shadow-3xl transition-shadow duration-300">
              {/* Use the reusable ContactForm component */}
              <ContactForm 
                submitButtonText="Get Started Now"
                headerText="Get Started Today"
                subHeaderText="Fill the form below and our team will contact you within 24 hours"
                successSubHeaderText="Thank you for your interest."
                successBodyText="Your details have been successfully submitted. A dedicated career advisor will contact you shortly to discuss your career goals."
                successButtonText="Submit Another Inquiry"
                submitButtonClasses="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

<style jsx global>{`
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
`}</style>
