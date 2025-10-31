'use client';

import dynamic from 'next/dynamic';
import * as Icons from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';
import type { ServiceClient } from '@/types/service';

const RequestButton = dynamic(() => import('@/app/services/[slug]/RequestButton'), {
    loading: () => (
        <div className="inline-flex items-center px-8 py-4 bg-gray-200 rounded-xl animate-pulse">
            <div className="h-4 w-32 bg-gray-300 rounded" />
        </div>
    ),
});

// Strongly-typed icon resolver (no `any`)
type LucideIcon = ComponentType<SVGProps<SVGSVGElement>>;
function getIcon(name: string): LucideIcon {
    const key = name as keyof typeof Icons;
    const Icon = Icons[key];
    return (Icon as unknown as LucideIcon) ?? Icons.GraduationCap;
}

export default function ServiceDetailCTASection({ service }: { service: ServiceClient }) {
    const IconComponent = getIcon(service.iconName);
    const color = service.color || 'from-sky-500 to-indigo-600';

    return (
        <section className="w-full py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
                <div className={`bg-gradient-to-r ${color} rounded-3xl p-12 text-center text-white shadow-2xl`}>
                    <IconComponent className="w-16 h-16 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-xl mb-8 text-white/90">
                        Let’s discuss how {service.title} can benefit your organization.
                    </p>
                    <RequestButton serviceTitle={service.title} />
                </div>
            </div>
        </section>
    );
}
