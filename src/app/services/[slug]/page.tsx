import { getServiceBySlug } from '@/data/servicesData';
import { getEventsByService } from '@/data/eventsData';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { ServiceClient } from '@/types/service';

// --- infer the concrete service type from your data function ---
type TrainingService = ReturnType<typeof getServiceBySlug> extends infer T
  ? NonNullable<T>
  : never;

// --- map server model -> serializable client model (no React components) ---
function toClientService(s: TrainingService): ServiceClient {
  // some datasets may not declare these extras in the TS type
  const extras = s as unknown as {
    iconName?: string;
    stats?: ServiceClient['stats'];
    keywords?: ServiceClient['keywords'];
  };

  return {
    id: s.id,
    slug: s.slug,
    iconName: extras.iconName ?? 'GraduationCap', // send only a string, never a component
    title: s.title,
    tagline: s.tagline,
    shortDescription: s.shortDescription,
    fullDescription: s.fullDescription,
    color: s.color,
    features: s.features,
    benefits: s.benefits,
    whoShouldAttend: s.whoShouldAttend,
    deliveryFormats: s.deliveryFormats,
    outcomes: s.outcomes,
    methodology: s.methodology,
    stats: extras.stats,
    keywords: extras.keywords,
  };
}

// ------- Reusable loader for dynamic sections -------
function SectionLoader({ label = 'Loading...' }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-600">{label}</p>
    </div>
  );
}

// ---------- Dynamic sections (SSR enabled) ----------
const ServiceDetailHeroSection = dynamic(
  () => import('@/components/sections/ServiceDetailHeroSection'),
  { ssr: true, loading: () => <SectionLoader label="Loading hero..." /> }
);
const ServiceDetailAboutSection = dynamic(
  () => import('@/components/sections/ServiceDetailAboutSection'),
  { ssr: true, loading: () => <SectionLoader label="Loading about..." /> }
);
const ServiceDetailStatsSection = dynamic(
  () => import('@/components/sections/ServiceDetailStatsSection'),
  { ssr: true, loading: () => <SectionLoader label="Loading stats..." /> }
);
const ServiceDetailFeaturesBenefitsSection = dynamic(
  () => import('@/components/sections/ServiceDetailFeaturesBenefitsSection'),
  { ssr: true, loading: () => <SectionLoader label="Loading features..." /> }
);
const ServiceDetailAudienceSection = dynamic(
  () => import('@/components/sections/ServiceDetailAudienceSection'),
  { ssr: true, loading: () => <SectionLoader label="Loading audience..." /> }
);
const ServiceDetailOutcomesSection = dynamic(
  () => import('@/components/sections/ServiceDetailOutcomesSection'),
  { ssr: true, loading: () => <SectionLoader label="Loading outcomes..." /> }
);
const ServiceDetailMethodologySection = dynamic(
  () => import('@/components/sections/ServiceDetailMethodologySection'),
  { ssr: true, loading: () => <SectionLoader label="Loading methodology..." /> }
);
const ServiceDetailPastEventsSection = dynamic(
  () => import('@/components/sections/ServiceDetailPastEventsSection'),
  { ssr: true, loading: () => <SectionLoader label="Loading events..." /> }
);
const ServiceDetailCTASection = dynamic(
  () => import('@/components/sections/ServiceDetailCTASection'),
  { ssr: true, loading: () => <SectionLoader label="Loading call-to-action..." /> }
);

// ---------- Metadata for SEO ----------
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Service Not Found | Cinute Digital', robots: { index: false } };

  const title = `${service.title} Training & Corporate Programs | Cinute Digital`;
  const description = `${service.tagline} — ${service.shortDescription} Learn ${service.title} with industry projects, mentor-led classes, and job-ready skills.`;
  const url = `/services/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'article', siteName: 'Cinute Digital' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

// ---------- Page (server component) ----------
export default async function ServiceDetailPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const pastEvents = getEventsByService(slug);

  // map to client-safe shape (no Record<string, unknown> cast; no destructuring of icon)
  const serviceForClient = toClientService(service);

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: service.title,
    description: service.fullDescription || service.shortDescription,
    provider: { '@type': 'Organization', name: 'Cinute Digital', sameAs: 'https://cinutedigital.com' },
  };

  return (
    <>
      <ServiceDetailHeroSection service={serviceForClient} />
      <ServiceDetailAboutSection service={serviceForClient} />
      <ServiceDetailStatsSection service={serviceForClient} />
      <ServiceDetailFeaturesBenefitsSection service={serviceForClient} />
      <ServiceDetailAudienceSection service={serviceForClient} />
      <ServiceDetailOutcomesSection service={serviceForClient} />
      <ServiceDetailMethodologySection service={serviceForClient} />
      {pastEvents?.length > 0 && <ServiceDetailPastEventsSection events={pastEvents} />}
      <ServiceDetailCTASection service={serviceForClient} />

      {/* JSON-LD script */}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(jsonLd)}
      </script>
    </>
  );
}