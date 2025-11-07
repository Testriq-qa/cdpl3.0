'use client';

import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, User, Mail, Phone, Download } from 'lucide-react';

interface BrochureDownloadFormProps {
  onClose: () => void;
}

const BrochureDownloadForm: React.FC<BrochureDownloadFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // --- Validation Functions ---
  const validateFullName = useCallback((fullName: string) => {
    if (!fullName.trim()) {
      setErrors(prev => ({ ...prev, fullName: 'Full Name is required' }));
      return false;
    }
    setErrors(prev => ({ ...prev, fullName: '' }));
    return true;
  }, []);

  const validateEmail = useCallback((email: string) => {
    if (!email.trim()) {
      setErrors(prev => ({ ...prev, email: 'Email is required' }));
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors(prev => ({ ...prev, email: 'Email address is invalid' }));
      return false;
    }
    setErrors(prev => ({ ...prev, email: '' }));
    return true;
  }, []);

  const validatePhoneNumber = useCallback((phone: string) => {
    // Basic check for 10-15 digits
    if (!/^\d{10,15}$/.test(phone.replace(/\D/g, ''))) {
      setErrors(prev => ({ ...prev, phone: 'Mobile Number must be 10-15 digits' }));
      return false;
    }
    setErrors(prev => ({ ...prev, phone: '' }));
    return true;
  }, []);

  const validateForm = useCallback(() => {
    const isNameValid = validateFullName(formData.fullName);
    const isEmailValid = validateEmail(formData.email);
    const isPhoneValid = validatePhoneNumber(formData.phone);
    return isNameValid && isEmailValid && isPhoneValid;
  }, [formData, validateFullName, validateEmail, validatePhoneNumber]);

  // --- Handlers ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Validation runs only on blur or submit
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // NOTE: We send 'type: brochure' to the API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, type: 'brochure' }),
      });

      if (response.ok) {
        console.log('Brochure request submitted successfully, emails sent.');
        setIsSubmitted(true);
        setFormData({
          fullName: '',
          email: '',
          phone: ''
        });
      } else {
        const errorData = await response.json();
        console.error('Form submission failed:', errorData.message);
        alert(`Submission failed: ${errorData.message || 'An unknown error occurred.'}`);
      }
    } catch (error) {
      console.error('Network error during form submission:', error);
      alert('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- Sub-Components ---
  const SuccessMessage = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-full py-8 text-center"
    >
      <CheckCircle2 className="w-16 h-16 text-green-500 mb-6" />
      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        Brochure Sent!
      </h3>
      <p className="text-lg text-gray-600 mb-6">
        The download link has been sent to your email address. Please check your inbox (and spam folder).
      </p>
      <button
        onClick={onClose}
        className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-lg transition-all duration-300"
      >
        <Download className="w-5 h-5 mr-2" />
        Close & Check Email
      </button>
    </motion.div>
  );

  const FormFields = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm text-gray-600 mb-4">
        Fill out the form below to receive the comprehensive CDPL brochure directly in your inbox.
      </p>
      
      {/* Full Name Input */}
      <div>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            onBlur={() => validateFullName(formData.fullName)}
            required
            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all duration-300 ${
              errors.fullName ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Full Name *"
            style={{ color: '#1e293b' }}
          />
        </div>
        {errors.fullName && (
          <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
        )}
      </div>

      {/* Email Input */}
      <div>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={() => validateEmail(formData.email)}
            required
            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all duration-300 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Email Address *"
            style={{ color: '#1e293b' }}
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      {/* Phone Input */}
      <div>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={() => validatePhoneNumber(formData.phone)}
            required
            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all duration-300 ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Mobile Number *"
            style={{ color: '#1e293b' }}
          />
        </div>
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Sending Link...</span>
          </>
        ) : (
          <>
            <span>Send Brochure Link</span>
            <Download className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );

  return (
    <>
      {isSubmitted ? <SuccessMessage /> : <FormFields />}
    </>
  );
};

export default BrochureDownloadForm;
