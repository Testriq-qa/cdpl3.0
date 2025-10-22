import { getEventBySlug, pastEvents } from '@/data/eventsData';
import { Calendar, MapPin, Users, Award, Building2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { CorporateRegistrationModal } from '@/components/events';

type PageProps = { params: Promise<{ slug: string }> };

const CorporateRequestButton = dynamic(
  () => import('./CorporateRequestButton'),
  {
    loading: () => (
      <div className="w-full h-16 bg-gray-200 rounded-xl animate-pulse" />
    ),
  }
);

export async function generateStaticParams() {
  return pastEvents.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  
  if (!event) {
    return {
      title: 'Event Not Found',
    };
  }
  
  return {
    title: `${event.title} | Past Events`,
    description: event.purpose,
    keywords: `${event.category}, ${event.title}, corporate training, workshop, ${event.organization}`,
    openGraph: {
      title: event.title,
      description: event.purpose,
      type: 'website',
    },
  };
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      {/* Event Detail Content */}
      <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          {/* Back Button */}
          <Link href="/events/past-events">
            <button className="inline-flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors duration-200 mb-6">
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Back to Past Events</span>
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
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-2">
                  {event.title}
                </h1>
                {event.subtitle && (
                  <p className="text-2xl text-purple-600 font-semibold">{event.subtitle}</p>
                )}
              </div>

              {/* Event Meta Information */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Date</p>
                    <p className="text-sm font-semibold text-gray-900">{event.date}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Location</p>
                    <p className="text-sm font-semibold text-gray-900 line-clamp-2">{event.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Participants</p>
                    <p className="text-sm font-semibold text-gray-900">{event.attendees} people</p>
                  </div>
                </div>
              </div>

              {/* Featured Image Placeholder */}
              <div className="relative h-96 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Calendar className="w-24 h-24 text-purple-300" />
                </div>
              </div>

              {/* Purpose */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-purple-600" />
                  Purpose
                </h2>
                <p className="text-gray-700 leading-relaxed">{event.purpose}</p>
              </div>

              {/* Session Highlights */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Content & Session Highlights</h2>
                <div className="space-y-6">
                  {event.sessionHighlights.map((session, index) => (
                    <div key={index} className="border-l-4 border-purple-600 pl-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{session.title}</h3>
                      <ul className="space-y-2">
                        {session.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <span className="text-purple-600 mt-1">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* Special Session */}
                  {event.specialSession && (
                    <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
                      <h3 className="text-lg font-bold text-purple-900 mb-2">Special Session</h3>
                      <p className="text-purple-700 font-semibold mb-3">{event.specialSession.speaker}</p>
                      <p className="text-gray-800 font-medium mb-3">{event.specialSession.topic}</p>
                      <ul className="space-y-2">
                        {event.specialSession.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                            <span className="text-green-500 mt-0.5">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Key Takeaways */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 shadow-lg text-white">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6" />
                  Key Takeaways
                </h2>
                <ul className="space-y-3">
                  {event.keyTakeaways.map((takeaway, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-yellow-300 text-xl mt-0.5">✓</span>
                      <span className="text-white/95">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Organization Info & CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Organization Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <Building2 className="w-8 h-8" />
                      <h3 className="text-xl font-bold">Organized By</h3>
                    </div>
                    <p className="text-white/90">{event.organization}</p>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Calendar className="w-5 h-5 text-purple-600" />
                      <div>
                        <p className="text-xs text-gray-500">Event Date</p>
                        <p className="font-semibold">{event.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Users className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="text-xs text-gray-500">Participants</p>
                        <p className="font-semibold">{event.attendees} people attended</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border-2 border-purple-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Want Similar Training?</h3>
                  <p className="text-gray-700 mb-6">
                    Bring this expert-led training to your organization. Customized programs available for corporates and institutions.
                  </p>
                  <CorporateRequestButton eventCategory={event.category} />
                </div>

                {/* Benefits Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-4">What You Get:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>Expert trainers from industry</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>Customized content for your needs</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>Hands-on practical sessions</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>Certificates for participants</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>Post-training support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Registration Modal */}
      <CorporateRegistrationModal />
    </>
  );
}