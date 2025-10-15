import { EventDetailHero, EventAgenda, EventFAQ } from '@/components/events';
import type { Metadata } from 'next';

// This would typically come from a database or CMS
const getEventData = (slug: string) => {
  // Mock data - replace with actual API call
  return {
    id: "1",
    title: "AI & Machine Learning Bootcamp 2025",
    description: "Intensive 2-day bootcamp covering latest AI/ML trends, hands-on projects, and real-world applications with industry experts. Learn to build, train, and deploy machine learning models from scratch.",
    date: "November 15-16, 2025",
    time: "9:00 AM - 5:00 PM",
    endDate: "November 16, 2025",
    location: "Bangalore Tech Hub, Koramangala",
    locationType: "offline" as const,
    category: "AI & ML",
    categoryColor: "bg-purple-500",
    seats: 100,
    seatsLeft: 23,
    price: "Free",
    organizer: "Your Training Institute",
    speakers: [
      {
        name: "Dr. Sarah Chen",
        role: "AI Research Scientist",
        company: "Google AI",
      },
      {
        name: "Raj Kumar",
        role: "ML Engineer",
        company: "Microsoft",
      },
      {
        name: "Priya Sharma",
        role: "Data Science Lead",
        company: "Amazon",
      },
      {
        name: "David Kim",
        role: "AI Consultant",
        company: "IBM Watson",
      },
    ],
  };
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const event = getEventData(params.slug);
  
  return {
    title: `${event.title} | Tech Events`,
    description: event.description,
    keywords: `${event.category}, tech event, workshop, ${event.title}, free event, ${event.location}`,
    openGraph: {
      title: event.title,
      description: event.description,
      type: 'website',
    },
  };
}

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = getEventData(params.slug);

  return (
    <>
      {/* Event Detail Hero with Registration */}
      <EventDetailHero event={event} />

      {/* Event Agenda/Schedule */}
      <EventAgenda />

      {/* FAQ Section */}
      <EventFAQ />
    </>
  );
}
