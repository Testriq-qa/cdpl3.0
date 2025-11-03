// app/events/[slug]/page.tsx
import { getEventBySlug, pastEvents } from "@/data/eventsData";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { CorporateRegistrationModal } from "@/components/events";

type PageProps = { params: Promise<{ slug: string }> };

// Small loader for dynamic sections
function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

// Sections (SSR enabled by default – OK in Server Components)
const EventDetailsHeroSection = dynamic(
  () => import("@/components/sections/EventDetailsHeroSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading hero..." /> }
);

const EventDetailsTwoColumnSection = dynamic(
  () => import("@/components/sections/EventDetailsTwoColumnSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading details..." /> }
);

// Left-column extras (no ssr:false here)
const EventDetailsOrganizerSection = dynamic(
  () => import("@/components/sections/EventDetailsOrganizerSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading organizer..." /> }
);

const EventDetailsVenueSection = dynamic(
  () => import("@/components/sections/EventDetailsVenueSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading venue..." /> }
);

const EventDetailsImageGallerySection = dynamic(
  () => import("@/components/sections/EventDetailsImageGallerySection"),
  { ssr: true, loading: () => <SectionLoader label="Loading gallery..." /> }
);

export async function generateStaticParams() {
  return pastEvents.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Event Not Found" };

  return {
    title: `${event.title} | Past Events`,
    description: event.purpose,
    keywords: `${event.category}, ${event.title}, corporate training, workshop, ${event.organization}`,
    openGraph: { title: event.title, description: event.purpose, type: "website" },
  };
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const totalSessions = event.sessionHighlights?.length ?? 0;
  const totalBullets =
    event.sessionHighlights?.reduce(
      (n: number, s: { points: string[] }) => n + (s.points?.length ?? 0),
      0
    ) ?? 0;

  return (
    <>
      {/* back button/top bar removed per earlier request */}
      <EventDetailsHeroSection event={event} />

      <EventDetailsTwoColumnSection
        event={event}
        totalSessions={totalSessions}
        totalBullets={totalBullets}
        extras={
          <>
            <EventDetailsOrganizerSection event={event} />
            <EventDetailsVenueSection event={event} />
            <EventDetailsImageGallerySection event={event} />
          </>
        }
      />

      <CorporateRegistrationModal />
    </>
  );
}
