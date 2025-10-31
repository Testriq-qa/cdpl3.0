import React from 'react';
import { CheckCircle, Users, Award, TrendingUp, Target, Code, Shield, Zap, BookOpen, Briefcase } from 'lucide-react';

export default function APITestingLanding() {

    const features = [
        {
            icon: <Code className="w-6 h-6" />,
            title: "Hands-On Training",
            description: "80% practical and 20% theory for real-world experience"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Expert Instructors",
            description: "Learn from industry veterans with 13+ years of experience"
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: "Global Certification",
            description: "Internationally recognized certificates with QR validation"
        },
        {
            icon: <Briefcase className="w-6 h-6" />,
            title: "100% Job Assistance",
            description: "Resume building and dedicated placement support"
        }
    ];

    const stats = [
        { value: "101,000+", label: "Job Vacancies in India" },
        { value: "4 LPA", label: "Average Fresher Salary" },
        { value: "25%", label: "Market Growth (2020-2030)" },
        { value: "15 Hours", label: "Comprehensive Training" }
    ];

    const curriculum = [
        {
            title: "Basics of API Testing",
            topics: [
                "What is API Testing and why it matters",
                "POSTMAN Installation & Setup",
                "Creating Workspaces and Collections",
                "Understanding HTTP Methods (GET, POST, PUT, PATCH, DELETE)"
            ]
        },
        {
            title: "Advanced POSTMAN Techniques",
            topics: [
                "Creating and Managing Dummy APIs",
                "JavaScript Object Notation (JSON) mastery",
                "Request/Response validation",
                "Exporting & Importing Collections"
            ]
        },
        {
            title: "Test Script Validation",
            topics: [
                "Testing status codes and headers",
                "Cookie and response time validation",
                "JSON Schema testing",
                "HTTP Request Validation"
            ]
        },
        {
            title: "Environment & Variables",
            topics: [
                "Creating server and JSON files",
                "Environment Variables implementation",
                "API Chaining techniques",
                "Authorization & Token Management"
            ]
        },
        {
            title: "Real-World Projects",
            topics: [
                "Contact List Application Testing",
                "OWASP Juice Shop Security Testing",
                "Employee Management API",
                "End-to-end test case execution"
            ]
        }
    ];

    const jobRoles = [
        "API Tester",
        "QA Engineer",
        "Security Tester",
        "DevOps Engineer",
        "Performance Test Engineer",
        "Penetration Tester",
        "Integration Developer",
        "Test Analyst"
    ];

    const companies = [
        "TCS", "Infosys", "Wipro", "Cognizant", "Accenture",
        "Capgemini", "Tech Mahindra", "HCL Technologies"
    ];

    return (
        <div className="min-h-screen bg-white">


            {/* Hero Section */}
            <section className="bg-blue-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                Master Program | 15 Hours
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                API Testing using POSTMAN & RestAPIs
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                Master API testing with hands-on training in POSTMAN, RestAPIs, and industry-standard testing methodologies. Get job-ready with real-world projects and expert guidance.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-center">
                                    Start Your Journey
                                </a>
                                <a href="#curriculum" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition text-center">
                                    View Curriculum
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-white p-8 rounded-2xl shadow-xl">
                                <div className="space-y-6">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-start space-x-4">
                                            <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                                                {feature.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                                                <p className="text-gray-600 text-sm">{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why API Testing Matters
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            APIs are the backbone of modern software applications. Learn to test them effectively and ensure reliability, security, and performance.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
                            <div className="bg-green-100 text-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Validate Security</h3>
                            <p className="text-gray-600">
                                Identify vulnerabilities and ensure your APIs are protected against security threats and unauthorized access.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
                            <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Detect Issues Early</h3>
                            <p className="text-gray-600">
                                Catch bugs and integration problems before they reach production, saving time and resources.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
                            <div className="bg-orange-100 text-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Core Functionality</h3>
                            <p className="text-gray-600">
                                Verify that APIs perform as expected and deliver the correct responses to various requests.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section id="curriculum" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Comprehensive Course Curriculum
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From basics to advanced testing techniques, our structured curriculum covers everything you need to become an API testing expert.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {curriculum.map((module, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                                        {index + 1}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{module.title}</h3>
                                        <ul className="space-y-2">
                                            {module.topics.map((topic, topicIndex) => (
                                                <li key={topicIndex} className="flex items-start space-x-2">
                                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700">{topic}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 bg-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Real-World Projects
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Apply your knowledge on industry-standard projects that simulate real testing scenarios.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-md">
                            <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Contact List Application</h3>
                            <p className="text-gray-600 mb-4">
                                A software tool for managing and organizing personal or professional contact information including names, addresses, and countries. Test complete CRUD operations and data validation.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span className="text-gray-700">User authentication testing</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span className="text-gray-700">CRUD operations validation</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span className="text-gray-700">Data integrity checks</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md">
                            <div className="bg-red-100 text-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">OWASP Juice Shop</h3>
                            <p className="text-gray-600 mb-4">
                                A deliberately insecure web application for security training and penetration testing practice. Master security testing techniques with real vulnerabilities.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span className="text-gray-700">Security vulnerability testing</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span className="text-gray-700">Penetration testing practice</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span className="text-gray-700">OWASP security standards</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Career Section */}
            <section id="career" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Launch Your Career in API Testing
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Multiple career paths await you with competitive salaries and growth opportunities.
                        </p>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Job Roles You Can Apply For</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {jobRoles.map((role, index) => (
                                <div key={index} className="bg-blue-50 p-4 rounded-lg text-center hover:bg-blue-100 transition">
                                    <span className="font-semibold text-gray-900">{role}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Top Companies Hiring API Experts</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {companies.map((company, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg text-center font-semibold text-gray-700 shadow-sm hover:shadow-md transition">
                                    {company}
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-gray-600 mt-6">and many more...</p>
                    </div>
                </div>
            </section>

            {/* Who Should Enroll Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Who Should Enroll?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Career Switchers</h3>
                                    <p className="text-gray-600">Anyone from non-IT background wanting to build a career in IT industry</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                            <div className="flex items-start space-x-4">
                                <div className="bg-green-100 text-green-600 p-2 rounded-lg">
                                    <BookOpen className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Fresh Graduates</h3>
                                    <p className="text-gray-600">Students from BSc and Engineering background starting their IT career</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                            <div className="flex items-start space-x-4">
                                <div className="bg-purple-100 text-purple-600 p-2 rounded-lg">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Job Seekers</h3>
                                    <p className="text-gray-600">Anyone stuck in non-technical jobs with no scope for growth</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                            <div className="flex items-start space-x-4">
                                <div className="bg-orange-100 text-orange-600 p-2 rounded-lg">
                                    <Target className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Existing Testers</h3>
                                    <p className="text-gray-600">Testers not familiar with API testing basics and fundamentals</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Tools & Technologies
                        </h2>
                        <p className="text-xl text-gray-600">Master industry-standard tools used by professionals worldwide</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {['POSTMAN', 'REST APIs', 'JSON', 'HTTP/HTTPS', 'API Chaining', 'OAuth'].map((tool, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:bg-blue-50 transition">
                                <div className="text-2xl font-bold text-gray-900">{tool}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="py-20 bg-blue-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Start Your API Testing Journey?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Join thousands of successful students who have launched their careers with Cinute Digital. Get expert training, real-world projects, and dedicated placement support.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <a href="tel:+917888383788" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
                            Call: +91 788-83-83-788
                        </a>
                        <a href="mailto:contact@cinutedigital.com" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition">
                            Email Us
                        </a>
                    </div>
                    <div className="text-sm opacity-75">
                        <p>Head Office: Ashley Towers, Kanakia Rd, Mira Road East, Maharashtra 401107</p>
                        <p className="mt-2">Study Center: Laxmi Palace, Vasai West, Maharashtra 401202</p>
                    </div>
                </div>
            </section>
        </div>
    );
}