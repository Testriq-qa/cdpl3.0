// app/events/past-events/page.tsx
import { useState, type ComponentProps } from "react";

import EventsPastEventsAllEventsSection from "@/components/sections/EventsPastEventsAllEventsSection";
import EventsPastEventsFeaturedEventsSliderSection, {
  FeaturedEvent,
} from "@/components/sections/EventsPastEventsFeaturedEventsSliderSection";
import EventsPastEventsFeatureEventsRequestTrainingButton from "@/components/sections/EventsPastEventsFeatureEventsRequestTrainingButton";
import { pastEvents } from "@/data/eventsData";

import EventsPastEventsHeroSection from "@/components/sections/EventsPastEventsHeroSection";
import EventsPastEventsCTASection from "@/components/sections/EventsPastEventsCTASection";

// Infer prop types from the AllEvents section to avoid `any`
type AllEventsProps = ComponentProps<
  typeof EventsPastEventsAllEventsSection
>;

const CATEGORY_STYLES: Record<
  string,
  { badgeBg: string; btnBg: string; text: string }
> = {
  "AI & Machine Learning": {
    badgeBg: "bg-purple-600",
    btnBg: "bg-purple-600",
    text: "text-purple-600",
  },
  "Software Testing": {
    badgeBg: "bg-green-600",
    btnBg: "bg-green-600",
    text: "text-green-600",
  },
  "Data Science": {
    badgeBg: "bg-blue-600",
    btnBg: "bg-blue-600",
    text: "text-blue-600",
  },
  "Academic Training": {
    badgeBg: "bg-orange-600",
    btnBg: "bg-orange-600",
    text: "text-orange-600",
  },
  "Web Development": {
    badgeBg: "bg-cyan-600",
    btnBg: "bg-cyan-600",
    text: "text-cyan-600",
  },
  "Industrial Training": {
    badgeBg: "bg-teal-600",
    btnBg: "bg-teal-600",
    text: "text-teal-600",
  },
  "Corporate Training": {
    badgeBg: "bg-pink-600",
    btnBg: "bg-pink-600",
    text: "text-pink-600",
  },
  Technology: {
    badgeBg: "bg-indigo-600",
    btnBg: "bg-indigo-600",
    text: "text-indigo-600",
  },
};

const FALLBACK = {
  badgeBg: "bg-slate-700",
  btnBg: "bg-slate-700",
  text: "text-slate-700",
};

export default function PastEventsPage() {
  const featuredEvents: FeaturedEvent[] = pastEvents
    .filter((e) => e.featured)
    .map((e) => ({
      id: e.id,
      slug: e.slug,
      title: e.title,
      subtitle: e.subtitle,
      date: e.date,
      location: e.location,
      attendees: e.attendees,
      organization: e.organization,
      purpose: e.purpose,
      highlights: e.highlights,
      category: e.category,
      categoryColor: (CATEGORY_STYLES[e.category] ?? FALLBACK).badgeBg,
      featured: e.featured,
    }));

  // Type this exactly as the AllEvents section expects
  const regularEvents: AllEventsProps["events"] = pastEvents.filter(
    (e) => !e.featured
  ) as AllEventsProps["events"];

  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* HERO (separate component) */}
      <EventsPastEventsHeroSection />

      {/* Featured */}
      {featuredEvents.length > 0 && (
        <section className="py-16 w-full">
          <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-4xl font-bold text-gray-900">
              Featured Events
            </h2>
            <EventsPastEventsFeaturedEventsSliderSection
              events={featuredEvents}
              autoplayMs={4500}
              // CHANGED: was cardMinHClass; the slider now uses a fixed height prop name
              cardHClass="h-[480px]"
            />
          </div>
        </section>
      )}

      {/* All Past Events */}
      <section className="py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            All Past Events
          </h2>
          <EventsPastEventsAllEventsSection
            events={regularEvents}
            cardMinHClass="min-h-[480px]"
          />
        </div>
      </section>

      {/* CTA (separate component) */}
      <EventsPastEventsCTASection>
        <EventsPastEventsFeatureEventsRequestTrainingButton />
      </EventsPastEventsCTASection>
    </div>
  );
}