// app/events/past/page.tsx
import EventsPastEventsFeaturedEventsSlider, { FeaturedEvent } from "@/components/sections/EventsPastEventsFeaturedEventsSlider";
import EventsPastEventsFeatureEventsRequestTrainingButton from "@/components/sections/EventsPastEventsFeatureEventsRequestTrainingButton";
import { pastEvents } from "@/data/eventsData";
import { Calendar, Users, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function PastEventsPage() {
  const featuredEvents: FeaturedEvent[] = pastEvents.filter((e) => e.featured);
  const regularEvents = pastEvents.filter((e) => !e.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              Our Training Portfolio
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Past Events &amp; Training Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successfully conducted training events,
              workshops, and corporate programs that have empowered thousands of
              professionals across India.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Events Conducted", value: "150+", color: "from-purple-500 to-blue-500" },
              { label: "Professionals Trained", value: "25K+", color: "from-blue-500 to-cyan-500" },
              { label: "Organizations Served", value: "200+", color: "from-green-500 to-emerald-500" },
              { label: "Academic Partners", value: "50+", color: "from-orange-500 to-red-500" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events (client carousel) */}
      {featuredEvents.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
              <h2 className="text-4xl font-bold text-gray-900">Featured Events</h2>
            </div>

            <EventsPastEventsFeaturedEventsSlider events={featuredEvents} autoplayMs={4500} />
          </div>
        </section>
      )}

      {/* All Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">All Past Events</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularEvents.map((event) => (
              <article
                key={event.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Calendar className="w-16 h-16 text-purple-300" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span
                      className={`${event.categoryColor} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md`}
                    >
                      {event.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {event.title}
                  </h3>

                  {/* Event Meta */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Calendar className="w-4 h-4 text-purple-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span>{event.attendees} participants</span>
                    </div>
                  </div>

                  {/* Purpose */}
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {event.purpose}
                  </p>

                  {/* CTA */}
                  <Link href={`/events/${event.slug}`}>
                    <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2.5 rounded-xl font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">
              Want Similar Training for Your Organization?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              We can customize and deliver any of these programs for your team.
              Let&apos;s discuss your training needs.
            </p>

            {/* Client-only button keeps dispatch behavior without making page client */}
            <EventsPastEventsFeatureEventsRequestTrainingButton />
          </div>
        </div>
      </section>
    </div>
  );
}
