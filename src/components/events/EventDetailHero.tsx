"use client";

import { Calendar, Clock, MapPin, Users, Share2, Bookmark, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface EventDetail {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  endDate?: string;
  location: string;
  locationType: "online" | "offline" | "hybrid";
  category: string;
  categoryColor: string;
  seats: number;
  seatsLeft: number;
  price: string;
  imageUrl?: string;
  organizer: string;
  speakers: Array<{
    name: string;
    role: string;
    company: string;
    avatar?: string;
  }>;
}

interface EventDetailHeroProps {
  event: EventDetail;
}

const EventDetailHero = ({ event }: EventDetailHeroProps) => {
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
    <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Back Button */}
        <Link href="/events">
          <button className="inline-flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors duration-200 mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to Events</span>
          </button>
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Event Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Category Badge */}
            <div>
              <span className={`inline-block ${event.categoryColor} text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-md`}>
                {event.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {event.title}
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
              {event.description}
            </p>

            {/* Event Meta Information */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Date</p>
                  <p className="text-sm font-semibold text-gray-900">{event.date}</p>
                  {event.endDate && (
                    <p className="text-xs text-gray-600">to {event.endDate}</p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Time</p>
                  <p className="text-sm font-semibold text-gray-900">{event.time}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Location</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {getLocationIcon(event.locationType)} {event.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Seats Available</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {event.seatsLeft} / {event.seats}
                  </p>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl overflow-hidden shadow-xl">
              {event.imageUrl ? (
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Calendar className="w-24 h-24 text-purple-300" />
                </div>
              )}
            </div>

            {/* Speakers Section */}
            {event.speakers && event.speakers.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Speakers</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {event.speakers.map((speaker, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors duration-200">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        {speaker.avatar ? (
                          <Image src={speaker.avatar} alt={speaker.name} width={64} height={64} className="rounded-full" />
                        ) : (
                          speaker.name.charAt(0)
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{speaker.name}</p>
                        <p className="text-sm text-gray-600">{speaker.role}</p>
                        <p className="text-xs text-gray-500">{speaker.company}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Registration Card (Sticky) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {/* Registration Card */}
              <div className="bg-white rounded-2xl shadow-2xl border-2 border-purple-100 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
                  <p className="text-sm font-medium mb-2">Registration Fee</p>
                  <p className="text-4xl font-bold">{event.price}</p>
                </div>

                <div className="p-6 space-y-4">
                  {/* Seats Left Alert */}
                  <div className={`flex items-center gap-2 px-4 py-3 rounded-xl border ${getSeatsColor(event.seatsLeft, event.seats)} font-semibold`}>
                    <Users className="w-5 h-5" />
                    <span>Only {event.seatsLeft} seats left!</span>
                  </div>

                  {/* Register Button */}
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    Register Now
                  </button>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-gray-200 rounded-xl font-semibold text-gray-700 hover:border-purple-600 hover:text-purple-600 transition-all duration-200">
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-gray-200 rounded-xl font-semibold text-gray-700 hover:border-purple-600 hover:text-purple-600 transition-all duration-200">
                      <Bookmark className="w-4 h-4" />
                      Save
                    </button>
                  </div>

                  {/* Organizer Info */}
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500 mb-2">Organized by</p>
                    <p className="font-semibold text-gray-900">{event.organizer}</p>
                  </div>
                </div>
              </div>

              {/* Why Attend Card */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100">
                <h4 className="font-bold text-gray-900 mb-4">Why Attend?</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Learn from industry experts</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Hands-on practical sessions</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Networking opportunities</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Certificate of participation</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Access to event recordings</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailHero;
