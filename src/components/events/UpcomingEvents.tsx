"use client";

import { Calendar, Clock, MapPin, Users, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  locationType: "online" | "offline" | "hybrid";
  category: string;
  categoryColor: string;
  seats: number;
  seatsLeft: number;
  price: string;
  featured: boolean;
  slug: string;
  imageUrl?: string;
  speakers: string[];
}

const UpcomingEvents = () => {
  const events: Event[] = [
    {
      id: "1",
      title: "AI & Machine Learning Bootcamp 2025",
      description: "Intensive 2-day bootcamp covering latest AI/ML trends, hands-on projects, and real-world applications with industry experts.",
      date: "November 15-16, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Bangalore Tech Hub",
      locationType: "offline",
      category: "AI & ML",
      categoryColor: "bg-purple-500",
      seats: 100,
      seatsLeft: 23,
      price: "Free",
      featured: true,
      slug: "/events/ai-ml-bootcamp-2025",
      speakers: ["Dr. Sarah Chen", "Raj Kumar"],
    },
    {
      id: "2",
      title: "Full Stack Development Masterclass",
      description: "Learn MERN stack development from scratch with live coding sessions and project deployment.",
      date: "November 20, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "Online (Zoom)",
      locationType: "online",
      category: "Web Development",
      categoryColor: "bg-blue-500",
      seats: 200,
      seatsLeft: 87,
      price: "Free",
      featured: true,
      slug: "/events/fullstack-masterclass",
      speakers: ["Mike Rodriguez", "Emily Johnson"],
    },
    {
      id: "3",
      title: "Software Testing & QA Workshop",
      description: "Comprehensive workshop on manual and automation testing with Selenium, Cypress, and best practices.",
      date: "November 25, 2025",
      time: "2:00 PM - 7:00 PM",
      location: "Hybrid (Mumbai + Online)",
      locationType: "hybrid",
      category: "Testing",
      categoryColor: "bg-green-500",
      seats: 150,
      seatsLeft: 45,
      price: "Free",
      featured: false,
      slug: "/events/testing-qa-workshop",
      speakers: ["David Kim", "Priya Sharma"],
    },
    {
      id: "4",
      title: "Data Science Career Fair 2025",
      description: "Meet top recruiters, attend panel discussions, and get career guidance from data science professionals.",
      date: "December 5, 2025",
      time: "11:00 AM - 4:00 PM",
      location: "Delhi Convention Center",
      locationType: "offline",
      category: "Career",
      categoryColor: "bg-orange-500",
      seats: 300,
      seatsLeft: 156,
      price: "Free",
      featured: false,
      slug: "/events/data-science-career-fair",
      speakers: ["Multiple Industry Leaders"],
    },
    {
      id: "5",
      title: "Cloud Computing with AWS Workshop",
      description: "Hands-on workshop covering AWS services, deployment strategies, and cloud architecture best practices.",
      date: "December 10, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Online (Microsoft Teams)",
      locationType: "online",
      category: "Cloud & DevOps",
      categoryColor: "bg-cyan-500",
      seats: 180,
      seatsLeft: 92,
      price: "Free",
      featured: false,
      slug: "/events/aws-cloud-workshop",
      speakers: ["Chris Evans", "Anita Desai"],
    },
    {
      id: "6",
      title: "UI/UX Design Thinking Workshop",
      description: "Learn design thinking methodology, user research, prototyping, and create stunning user interfaces.",
      date: "December 15, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "Pune Design Studio",
      locationType: "offline",
      category: "Design",
      categoryColor: "bg-pink-500",
      seats: 80,
      seatsLeft: 12,
      price: "Free",
      featured: true,
      slug: "/events/uiux-design-thinking",
      speakers: ["Sophia Lee", "Arjun Mehta"],
    },
  ];

  const featuredEvents = events.filter((event) => event.featured);
  const regularEvents = events.filter((event) => !event.featured);

  const getLocationIcon = (type: string) => {
    if (type === "online") return "🌐";
    if (type === "offline") return "📍";
    return "🔄";
  };

  const getSeatsColor = (seatsLeft: number, totalSeats: number) => {
    const percentage = (seatsLeft / totalSeats) * 100;
    if (percentage <= 20) return "text-red-600 bg-red-50";
    if (percentage <= 50) return "text-orange-600 bg-orange-50";
    return "text-green-600 bg-green-50";
  };

  return (
    <section id="upcoming-events" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
            <Zap className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-600">Don't Miss Out</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Register now for our upcoming tech events and workshops. Limited seats available!
          </p>
        </div>

        {/* Featured Events */}
        {featuredEvents.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-yellow-500" />
              Featured Events
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredEvents.map((event) => (
                <EventCard key={event.id} event={event} featured />
              ))}
            </div>
          </div>
        )}

        {/* Regular Events */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">All Upcoming Events</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Event Card Component
const EventCard = ({ event, featured = false }: { event: Event; featured?: boolean }) => {
  const getSeatsColor = (seatsLeft: number, totalSeats: number) => {
    const percentage = (seatsLeft / totalSeats) * 100;
    if (percentage <= 20) return "text-red-600 bg-red-50 border-red-200";
    if (percentage <= 50) return "text-orange-600 bg-orange-50 border-orange-200";
    return "text-green-600 bg-green-50 border-green-200";
  };

  const getLocationIcon = (type: string) => {
    if (type === "online") return "🌐";
    if (type === "offline") return "📍";
    return "🔄";
  };

  return (
    <article
      className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 ${
        featured ? "border-yellow-400" : "border-gray-100"
      } relative`}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
          <Sparkles className="w-3 h-3" />
          Featured
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100 overflow-hidden">
        {event.imageUrl ? (
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Calendar className="w-16 h-16 text-purple-300" />
          </div>
        )}
        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
          <span className={`${event.categoryColor} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md`}>
            {event.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <Link href={event.slug}>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
            {event.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-gray-700">
            <Calendar className="w-4 h-4 text-purple-600" />
            <span className="font-medium">{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin className="w-4 h-4 text-green-600" />
            <span>{getLocationIcon(event.locationType)} {event.location}</span>
          </div>
        </div>

        {/* Seats Left */}
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border ${getSeatsColor(event.seatsLeft, event.seats)} text-xs font-semibold`}>
          <Users className="w-4 h-4" />
          Only {event.seatsLeft} seats left!
        </div>

        {/* Speakers */}
        <div className="pt-2 border-t border-gray-100">
          <p className="text-xs text-gray-500 mb-1">Speakers:</p>
          <p className="text-sm font-medium text-gray-700">{event.speakers.join(", ")}</p>
        </div>

        {/* CTA Button */}
        <Link href={event.slug}>
          <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group">
            Register Now - {event.price}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>
    </article>
  );
};

// Import Sparkles from lucide-react
import { Sparkles } from "lucide-react";

export default UpcomingEvents;
