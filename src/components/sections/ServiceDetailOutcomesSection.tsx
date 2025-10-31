'use client';

import { TrendingUp } from 'lucide-react';
import type { ServiceClient } from '@/types/service';

export default function ServiceDetailOutcomesSection({ service }: { service: ServiceClient }) {
    const color = service.color || 'from-sky-500 to-indigo-600';
    return (
        <section className="w-full py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 ring-1 ring-black/5">
                    <div className="flex items-center gap-3 mb-8">
                        <div className={`w-12 h-12 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center`}>
                            <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">Learning Outcomes</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {service.outcomes.map((outcome, index) => (
                            <div key={`${outcome}-${index}`} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl ring-1 ring-black/5">
                                <div className={`w-8 h-8 bg-gradient-to-r ${color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                    <span className="text-white font-bold text-sm">{index + 1}</span>
                                </div>
                                <span className="text-gray-700">{outcome}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
