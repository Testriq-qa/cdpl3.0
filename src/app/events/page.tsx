import { EventsHero, UpcomingEvents, PastEvents } from '@/components/events';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tech Events & Workshops | Learn from Industry Experts',
  description: 'Join our exclusive tech events, workshops, and webinars. Learn AI/ML, web development, data science, and more from industry leaders. Free registration!',
  keywords: 'tech events, workshops, webinars, AI ML events, web development workshops, data science seminars, free tech events, technology conferences',
  openGraph: {
    title: 'Tech Events & Workshops | Learn from Industry Experts',
    description: 'Join our exclusive tech events and workshops. Free registration for all events!',
    type: 'website',
  },
};

export default function EventsPage() {
  return (
    <>
      {/* Hero Section */}
      <EventsHero />

      {/* Upcoming Events Section */}
      <UpcomingEvents />

      {/* Past Events Section */}
      <PastEvents />
    </>
  );
}
