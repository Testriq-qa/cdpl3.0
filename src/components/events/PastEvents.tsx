"use client";

import { Calendar, Users, Play, Image as ImageIcon, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface PastEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  attendees: number;
  category: string;
  categoryColor: string;
  highlights: string[];
  videoUrl?: string;
  galleryCount: number;
  slug: string;
  imageUrl?: string;
}

const PastEvents = () => {
  const pastEvents: PastEvent[] = [
    {
      id: "1",
      title: "React & Next.js Conference 2024",
      date: "September 15, 2024",
      location: "Bangalore",
      attendees: 500,
      category: "Web Development",
      categoryColor: "bg-blue-500",
      highlights: ["5 keynote speakers", "10+ workshops", "Networking sessions"],
      videoUrl: "/events/react-conf-2024",
      galleryCount: 150,
      slug: "/events/past/react-nextjs-conference-2024",
    },
    {
      id: "2",
      title: "AI/ML Summit 2024",
      date: "August 20, 2024",
      location: "Online",
      attendees: 1200,
      category: "AI & ML",
      categoryColor: "bg-purple-500",
      highlights: ["Industry leaders", "Hands-on labs", "Career guidance"],
      videoUrl: "/events/ai-summit-2024",
      galleryCount: 80,
      slug: "/events/past/ai-ml-summit-2024",
    },
    {
      id: "3",
      title: "DevOps & Cloud Bootcamp",
      date: "July 10, 2024",
      location: "Mumbai",
      attendees: 300,
      category: "DevOps",
      categoryColor: "bg-cyan-500",
      highlights: ["AWS certification prep", "Docker & Kubernetes", "CI/CD pipelines"],
      galleryCount: 120,
      slug: "/events/past/devops-cloud-bootcamp",
    },
    {
      id: "4",
      title: "Data Science Workshop Series",
      date: "June 5, 2024",
      location: "Hybrid",
      attendees: 800,
      category: "Data Science",
      categoryColor: "bg-green-500",
      highlights: ["Python & R programming", "ML algorithms", "Real-world projects"],
      videoUrl: "/events/data-science-workshop",
      galleryCount: 95,
      slug: "/events/past/data-science-workshop-series",
    },
  ];

  return (
    <section id="past-events" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-4">
            <Award className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-semibold text-gray-600">Success Stories</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Past Events</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Relive the moments from our previous events. Watch recordings and view photo galleries.
          </p>
        </div>

        {/* Past Events Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {pastEvents.map((event) => (
            <article
              key={event.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200"
            >
              {/* Image */}
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                {event.imageUrl ? (
                  <Image
                    src={event.imageUrl}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Calendar className="w-20 h-20 text-gray-300" />
                  </div>
                )}
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`${event.categoryColor} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md`}>
                    {event.category}
                  </span>
                </div>
                {/* Video Badge */}
                {event.videoUrl && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md flex items-center gap-1">
                    <Play className="w-3 h-3" />
                    Recording
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Title */}
                <Link href={event.slug}>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                    {event.title}
                  </h3>
                </Link>

                {/* Event Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span>{event.attendees.toLocaleString()} attendees</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-700">Event Highlights:</p>
                  <ul className="space-y-1">
                    {event.highlights.map((highlight, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  {event.videoUrl && (
                    <Link href={event.videoUrl} className="flex-1">
                      <button className="w-full bg-red-500 text-white px-4 py-2.5 rounded-xl font-semibold hover:bg-red-600 transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                        <Play className="w-4 h-4" />
                        Watch Recording
                      </button>
                    </Link>
                  )}
                  <Link href={`${event.slug}/gallery`} className="flex-1">
                    <button className="w-full bg-purple-100 text-purple-600 px-4 py-2.5 rounded-xl font-semibold hover:bg-purple-200 transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                      <ImageIcon className="w-4 h-4" />
                      Gallery ({event.galleryCount})
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/events/past">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              View All Past Events
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
