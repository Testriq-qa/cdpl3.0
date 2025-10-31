'use client';

import type { ServiceClient } from '@/types/service';

export default function ServiceDetailAboutSection({ service }: { service: ServiceClient }) {
    return (
        <section className="w-full py-14 md:py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                <div className="bg-white rounded-3xl shadow-xl ring-1 ring-black/5 p-8 md:p-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About This Service</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">{service.fullDescription}</p>
                </div>
            </div>
        </section>
    );
}
