import React from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { CityPageProps } from '../lib/CityCoursePage';
import HeroSection from '@/components/city-course/HeroSection';
import CourseOverview from '@/components/city-course/CourseOverview';
import WhyChooseUs from '@/components/city-course/WhyChooseUs';
import TestimonialsSection from '@/components/city-course/TestimonialsSection';
import PlacementPartners from '@/components/city-course/PlacementPartners';
import FAQSection from '@/components/city-course/FAQSection';
import CTASection from '@/components/city-course/CTASection';
import ContactSection from '@/components/city-course/ContactSection';

interface CityCourseLandingPageProps {
  pageData: CityPageProps;
}

const CityCourseLandingPage: React.FC<CityCourseLandingPageProps> = ({ pageData }) => {
  const {
    courseName,
    cityName,
    seo,
    hero,
    courseDetails,
    testimonials,
    faqs,
    leadForm,
  } = pageData;

  // Structured Data for SEO (JSON-LD)
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Course',
        name: `${courseName} Training in ${cityName}`,
        description: seo.description,
        provider: {
          '@type': 'Organization',
          name: 'Your Training Institute',
          sameAs: 'https://yourwebsite.com',
        },
        offers: {
          '@type': 'Offer',
          category: 'Professional Training',
          availability: 'https://schema.org/InStock',
        },
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'Blended',
          location: {
            '@type': 'Place',
            name: cityName,
            address: {
              '@type': 'PostalAddress',
              addressLocality: cityName,
              addressCountry: 'IN',
            },
          },
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': `https://yourwebsite.com/courses/${pageData.courseSlug}/${pageData.citySlug}`,
        name: `${courseName} Training Institute - ${cityName}`,
        image: hero.backgroundImage,
        description: seo.description,
        address: {
          '@type': 'PostalAddress',
          addressLocality: cityName,
          addressCountry: 'IN',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: testimonials.length.toString(),
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{seo.title}</title>
        <meta name="title" content={seo.title} />
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords.join(', ')} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={seo.canonicalUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seo.canonicalUrl} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={hero.backgroundImage} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={seo.canonicalUrl} />
        <meta property="twitter:title" content={seo.title} />
        <meta property="twitter:description" content={seo.description} />
        <meta property="twitter:image" content={hero.backgroundImage} />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Your Training Institute" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content={cityName} />
        
        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#2563eb" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section with Lead Form */}
        <HeroSection
          headline={hero.headline}
          subHeadline={hero.subHeadline}
          ctaText={hero.ctaText}
          ctaLink={hero.ctaLink}
          backgroundImage={hero.backgroundImage}
          leadFormTitle={leadForm.title}
          leadFormDescription={leadForm.description}
          leadFormFields={leadForm.fields}
          leadFormSubmitButtonText={leadForm.submitButtonText}
        />

        {/* Course Overview Section */}
        <CourseOverview
          courseName={courseName}
          cityName={cityName}
          details={courseDetails}
        />

        {/* Why Choose Us Section */}
        <WhyChooseUs cityName={cityName} />

        {/* Placement Partners Section */}
        <PlacementPartners cityName={cityName} />

        {/* Testimonials Section */}
        <TestimonialsSection testimonials={testimonials} />

        {/* FAQ Section */}
        <FAQSection faqs={faqs} />

        {/* CTA Section */}
        <CTASection courseName={courseName} cityName={cityName} />

        {/* Contact Section */}
        <ContactSection courseName={courseName} cityName={cityName} />
      </main>
    </>
  );
};

export default CityCourseLandingPage;

// Static Site Generation - Generate paths for all city-course combinations
export const getStaticPaths: GetStaticPaths = async () => {
  // Define your courses and cities
  const courses = [
    { slug: 'software-testing', name: 'Software Testing' },
    { slug: 'data-science', name: 'Data Science' },
    { slug: 'ai-ml', name: 'AI/ML' },
    { slug: 'business-intelligence', name: 'Business Intelligence' },
    { slug: 'full-stack-development', name: 'Full Stack Development' },
  ];

  const cities = [
    { slug: 'mumbai', name: 'Mumbai' },
    { slug: 'delhi', name: 'Delhi' },
    { slug: 'bangalore', name: 'Bangalore' },
    { slug: 'hyderabad', name: 'Hyderabad' },
    { slug: 'pune', name: 'Pune' },
    { slug: 'chennai', name: 'Chennai' },
    { slug: 'kolkata', name: 'Kolkata' },
    { slug: 'ahmedabad', name: 'Ahmedabad' },
  ];

  // Generate all combinations
  const paths = courses.flatMap((course) =>
    cities.map((city) => ({
      params: {
        courseSlug: course.slug,
        citySlug: city.slug,
      },
    }))
  );

  return {
    paths,
    fallback: 'blocking', // or 'blocking' for on-demand generation
  };
};

// Static Site Generation - Fetch data for each page
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { courseSlug, citySlug } = params as { courseSlug: string; citySlug: string };

  // In production, fetch this data from your CMS or database
  // This is sample data structure
  const pageData: CityPageProps = {
    courseSlug,
    citySlug,
    courseName: getCourseNameFromSlug(courseSlug),
    cityName: getCityNameFromSlug(citySlug),
    seo: {
      title: `${getCourseNameFromSlug(courseSlug)} Training in ${getCityNameFromSlug(citySlug)} | Best Institute 2025`,
      description: `Join the best ${getCourseNameFromSlug(courseSlug)} training in ${getCityNameFromSlug(citySlug)}. 100% placement assistance, expert trainers, hands-on projects. Enroll now!`,
      keywords: [
        `${getCourseNameFromSlug(courseSlug)} training in ${getCityNameFromSlug(citySlug)}`,
        `${getCourseNameFromSlug(courseSlug)} course ${getCityNameFromSlug(citySlug)}`,
        `best ${getCourseNameFromSlug(courseSlug)} institute ${getCityNameFromSlug(citySlug)}`,
        `${getCourseNameFromSlug(courseSlug)} certification ${getCityNameFromSlug(citySlug)}`,
        `learn ${getCourseNameFromSlug(courseSlug)} ${getCityNameFromSlug(citySlug)}`,
      ],
      canonicalUrl: `https://yourwebsite.com/courses/${courseSlug}/${citySlug}`,
    },
    hero: {
      headline: `Master ${getCourseNameFromSlug(courseSlug)} in ${getCityNameFromSlug(citySlug)}`,
      subHeadline: `Transform your career with industry-leading ${getCourseNameFromSlug(courseSlug)} training. Get certified and job-ready in 3-6 months.`,
      ctaText: 'Enroll Now',
      ctaLink: '#contact',
      backgroundImage: '/images/hero-background.jpg',
    },
    courseDetails: getCourseDetails(courseSlug),
    testimonials: getTestimonials(citySlug),
    faqs: getFAQs(courseSlug, citySlug),
    leadForm: {
      title: 'Get Free Career Counseling',
      description: 'Fill in your details and our expert will call you back',
      fields: [
        { name: 'name', label: 'Full Name', type: 'text', required: true, placeholder: 'Enter your name' },
        { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'your@email.com' },
        { name: 'phone', label: 'Phone', type: 'tel', required: true, placeholder: '+91 1234567890' },
        {
          name: 'course',
          label: 'Interested Course',
          type: 'select',
          required: true,
          options: ['Software Testing', 'Data Science', 'AI/ML', 'Business Intelligence', 'Full Stack Development'],
        },
      ],
      submitButtonText: 'Get Free Counseling',
    },
  };

  return {
    props: {
      pageData,
    },
    revalidate: 86400, // Revalidate every 24 hours
  };
};

// Helper functions (move to separate utils file in production)
function getCourseNameFromSlug(slug: string): string {
  const courseMap: Record<string, string> = {
    'software-testing': 'Software Testing',
    'data-science': 'Data Science',
    'ai-ml': 'AI/ML',
    'business-intelligence': 'Business Intelligence',
    'full-stack-development': 'Full Stack Development',
  };
  return courseMap[slug] || slug;
}

function getCityNameFromSlug(slug: string): string {
  const cityMap: Record<string, string> = {
    mumbai: 'Mumbai',
    delhi: 'Delhi',
    bangalore: 'Bangalore',
    hyderabad: 'Hyderabad',
    pune: 'Pune',
    chennai: 'Chennai',
    kolkata: 'Kolkata',
    ahmedabad: 'Ahmedabad',
  };
  return cityMap[slug] || slug;
}

function getCourseDetails(courseSlug: string) {
  // Return course-specific details
  // This should come from your CMS/database in production
  return {
    title: getCourseNameFromSlug(courseSlug),
    description: `Comprehensive ${getCourseNameFromSlug(courseSlug)} training program designed to make you job-ready with hands-on projects and real-world scenarios.`,
    imageUrl: '/images/course-image.jpg',
    duration: '3-6 Months',
    eligibility: 'Any Graduate / Working Professional',
    modules: [
      {
        id: '1',
        title: 'Fundamentals',
        description: 'Build strong foundation with core concepts',
        topics: ['Introduction', 'Basic Concepts', 'Tools Setup', 'Best Practices'],
      },
      {
        id: '2',
        title: 'Advanced Techniques',
        description: 'Master advanced topics and methodologies',
        topics: ['Advanced Concepts', 'Industry Tools', 'Frameworks', 'Optimization'],
      },
      {
        id: '3',
        title: 'Real-World Projects',
        description: 'Work on live projects and case studies',
        topics: ['Project Planning', 'Implementation', 'Testing', 'Deployment'],
      },
      {
        id: '4',
        title: 'Certification Prep',
        description: 'Prepare for industry certifications',
        topics: ['Exam Preparation', 'Mock Tests', 'Interview Questions', 'Resume Building'],
      },
    ],
    features: [
      'Live Interactive Classes',
      'Lifetime LMS Access',
      'Industry Expert Trainers',
      'Hands-on Projects',
      '100% Placement Support',
      'Flexible Batch Timings',
      'Doubt Clearing Sessions',
      'Interview Preparation',
      'Resume Building',
    ],
  };
}

function getTestimonials(citySlug: string) {
  // Return city-specific testimonials
  // This should come from your CMS/database in production
  return [
    {
      id: '1',
      quote: 'The training was excellent and helped me land my dream job. The instructors are very knowledgeable and supportive.',
      author: 'Rahul Sharma',
      city: getCityNameFromSlug(citySlug),
      course: 'Software Testing',
      rating: 5,
    },
    {
      id: '2',
      quote: 'Best institute for learning. The practical approach and real-world projects made all the difference.',
      author: 'Priya Patel',
      city: getCityNameFromSlug(citySlug),
      course: 'Data Science',
      rating: 5,
    },
    {
      id: '3',
      quote: 'I got placed in a top MNC within 2 months of completing the course. Highly recommended!',
      author: 'Amit Kumar',
      city: getCityNameFromSlug(citySlug),
      course: 'Full Stack Development',
      rating: 5,
    },
  ];
}

function getFAQs(courseSlug: string, citySlug: string) {
  const courseName = getCourseNameFromSlug(courseSlug);
  const cityName = getCityNameFromSlug(citySlug);

  return [
    {
      id: '1',
      question: `What is the duration of the ${courseName} course?`,
      answer: `The ${courseName} course typically runs for 3-6 months, depending on the batch type (weekday/weekend) and your learning pace. We offer flexible schedules to accommodate working professionals.`,
    },
    {
      id: '2',
      question: `Do you provide placement assistance in ${cityName}?`,
      answer: `Yes, we provide 100% placement assistance to all our students in ${cityName}. We have partnerships with 500+ companies and conduct regular placement drives, mock interviews, and resume building sessions.`,
    },
    {
      id: '3',
      question: `What are the prerequisites for this course?`,
      answer: `The course is designed for beginners to advanced learners. Basic computer knowledge is sufficient. Any graduate or working professional can enroll in this program.`,
    },
    {
      id: '4',
      question: `Is the training online or offline?`,
      answer: `We offer both online and offline training options in ${cityName}. You can choose the mode that suits your schedule and preferences. Both modes include live interactive sessions with expert trainers.`,
    },
    {
      id: '5',
      question: `Will I get a certificate after completion?`,
      answer: `Yes, upon successful completion of the course and projects, you will receive an industry-recognized certificate that adds value to your resume and helps in job placements.`,
    },
    {
      id: '6',
      question: `What is the fee structure?`,
      answer: `We offer competitive pricing with flexible payment options including EMI and Pay After Placement schemes. Contact our counselor for detailed fee information and current offers.`,
    },
  ];
}

