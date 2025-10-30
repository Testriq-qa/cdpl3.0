// app/affiliate-program/page.tsx
import type { Metadata } from "next";
import dynamic from "next/dynamic";

// ---------- SEO ----------
export const metadata: Metadata = {
    title: "CDPL Affiliate Program — Earn commission promoting training, events & services",
    description:
        "Join the CDPL Affiliate Program. Promote world-class training, events, and services and earn recurring commissions with transparent tracking and fast payouts.",
    keywords: [
        "CDPL affiliate program",
        "CDPL partners",
        "affiliate marketing training",
        "IT training affiliate",
        "corporate training affiliate",
        "events affiliate program",
        "software services affiliate",
    ],
    openGraph: {
        title: "CDPL Affiliate Program",
        description:
            "Earn recurring commissions by promoting CDPL training, events, and services.",
        url: "https://your-domain.com/affiliate-program", // TODO: replace
        siteName: "CDPL",
        images: [
            {
                url: "https://your-domain.com/og/affiliate-program.png", // TODO: replace
                width: 1200,
                height: 630,
                alt: "CDPL Affiliate Program",
            },
        ],
        type: "website",
    },
    alternates: {
        canonical: "https://your-domain.com/affiliate-program", // TODO: replace
    },
};

// ---------- Inline Loader ----------
function SectionLoader({ label = "Loading..." }: { label?: string }) {
    return (
        <div className="flex items-center justify-center py-8">
            <p className="text-gray-500">{label}</p>
        </div>
    );
}

// ---------- Dynamic sections (SSR enabled) ----------
const AffiliateHeroSection = dynamic(
    () => import("@/components/sections/AffiliateHeroSection"),
    { ssr: true, loading: () => <SectionLoader label="Booting the hero..." /> }
);

const AffiliateBenefitsSection = dynamic(
    () => import("@/components/sections/AffiliateBenefitsSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading benefits..." /> }
);

const AffiliateHowItWorksSection = dynamic(
    () => import("@/components/sections/AffiliateHowItWorksSection"),
    { ssr: true, loading: () => <SectionLoader label="Wiring the flow..." /> }
);

const AffiliateTiersSection = dynamic(
    () => import("@/components/sections/AffiliateTiersSection"),
    { ssr: true, loading: () => <SectionLoader label="Setting up tiers..." /> }
);

const AffiliatePayoutsSection = dynamic(
    () => import("@/components/sections/AffiliatePayoutsSection"),
    { ssr: true, loading: () => <SectionLoader label="Fetching payouts..." /> }
);

const AffiliateFAQSection = dynamic(
    () => import("@/components/sections/AffiliateFAQSection"),
    { ssr: true, loading: () => <SectionLoader label="Preparing FAQs..." /> }
);

const AffiliateCTASection = dynamic(
    () => import("@/components/sections/AffiliateCTASection"),
    { ssr: true, loading: () => <SectionLoader label="Final touch..." /> }
);

export default async function AffiliateProgramPage() {
    // ---------- Embedded JSON-LD (relevant to this page) ----------
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "CDPL Affiliate Program",
        url: "https://your-domain.com/affiliate-program", // TODO: replace
        description:
            "Join the CDPL Affiliate Program to earn commissions by promoting CDPL training, developer events, and services with transparent tracking and fast payouts.",
        isPartOf: {
            "@type": "Organization",
            name: "CDPL",
            url: "https://your-domain.com", // TODO: replace
            description:
                "CDPL delivers industry-aligned training, developer events, and engineering services with practitioner-led content and measurable outcomes.",
            sameAs: [
                "https://www.linkedin.com/company/your-cdpl", // TODO: replace or remove
                "https://twitter.com/your-cdpl",              // TODO: replace or remove
            ],
            department: [
                { "@type": "Organization", name: "Software Testing" },
                { "@type": "Organization", name: "Data Science & AI" },
                { "@type": "Organization", name: "Cloud & DevOps" },
                { "@type": "Organization", name: "Full-Stack Engineering" },
                { "@type": "Organization", name: "Developer Events" },
            ],
        },
        about: [
            {
                "@type": "Offer",
                name: "CDPL Affiliate Commission",
                description:
                    "Performance-based affiliate commissions across training, events, and services.",
                priceSpecification: {
                    "@type": "PriceSpecification",
                    priceCurrency: "USD",
                    // Using text because commission is a percentage tier, not a fixed price:
                    price: "15–25% commission by tier",
                },
                availabilityStarts: "2020-01-01",
                eligibleRegion: "Worldwide",
            },
        ],
        breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://your-domain.com", // TODO: replace
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Affiliate Program",
                    item: "https://your-domain.com/affiliate-program", // TODO: replace
                },
            ],
        },
    };

    return (
        <main
            className="relative min-h-screen bg-white text-slate-800 [color-scheme:light] dark:[color-scheme:light]"
        // ^ Ensures identical look in light/dark modes
        >
            {/* Structured data for SEO */}
            <script
                type="application/ld+json"
                // Prevent React from trying to re-hydrate this JSON:
                suppressHydrationWarning
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Page background accents */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 opacity-60"
                style={{
                    background:
                        "radial-gradient(1000px 400px at 20% 0%, rgba(59,130,246,0.08), transparent 60%), radial-gradient(800px 300px at 80% 20%, rgba(16,185,129,0.08), transparent 60%)",
                }}
            />

            {/* Sections (100% width wrapper, content bounded to max-w-7xl) */}
            <AffiliateHeroSection />

            <section className="w-full">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <AffiliateBenefitsSection />
                </div>
            </section>

            <section className="w-full" id="how-it-works">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <AffiliateHowItWorksSection />
                </div>
            </section>

            <section className="w-full" id="tiers">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <AffiliateTiersSection />
                </div>
            </section>

            <section className="w-full" id="payouts">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <AffiliatePayoutsSection />
                </div>
            </section>

            <section className="w-full" id="faq">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <AffiliateFAQSection />
                </div>
            </section>

            <section className="w-full" id="apply">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <AffiliateCTASection />
                </div>
            </section>
        </main>
    );
}
