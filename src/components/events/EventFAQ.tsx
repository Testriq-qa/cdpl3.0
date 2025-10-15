"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const EventFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Is this event really free?",
      answer: "Yes! This event is completely free to attend. We believe in making quality tech education accessible to everyone. Just register and show up!",
    },
    {
      question: "Will I receive a certificate?",
      answer: "Absolutely! All participants who attend the full event will receive a digital certificate of participation that you can add to your LinkedIn profile or resume.",
    },
    {
      question: "Do I need prior experience in AI/ML?",
      answer: "While basic programming knowledge is helpful, our workshops are designed for all skill levels. We'll cover fundamentals and gradually move to advanced topics.",
    },
    {
      question: "What should I bring to the event?",
      answer: "Please bring your laptop with Python installed (we'll send setup instructions via email). Also bring a notebook, pen, and your enthusiasm to learn!",
    },
    {
      question: "Will food be provided?",
      answer: "Yes! We'll provide complimentary breakfast, lunch, and refreshments throughout the day. Please let us know about any dietary restrictions during registration.",
    },
    {
      question: "Can I get a refund if I can't attend?",
      answer: "Since the event is free, there's no refund process. However, please cancel your registration if you can't make it so we can offer your spot to someone on the waitlist.",
    },
    {
      question: "Will the sessions be recorded?",
      answer: "Yes! All sessions will be recorded and made available to registered participants within 48 hours after the event.",
    },
    {
      question: "Is parking available at the venue?",
      answer: "Yes, the venue has ample parking space. Parking is free for all event attendees. We'll share detailed directions and parking information via email.",
    },
    {
      question: "Can I bring a friend?",
      answer: "Each person must register individually to ensure we have accurate headcount for catering and materials. Please ask your friend to register separately!",
    },
    {
      question: "What's the cancellation policy?",
      answer: "You can cancel your registration anytime before the event. We just request that you do so at least 24 hours in advance if possible.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
            <HelpCircle className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-600">Got Questions?</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about the event
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-purple-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Card */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
          <p className="mb-6 text-white/90">
            Our team is here to help! Reach out to us anytime.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:events@yourcompany.com" className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200">
              Email Us
            </a>
            <a href="tel:+911234567890" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors duration-200">
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventFAQ;
