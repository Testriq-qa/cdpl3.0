'use client';

import { BookOpen } from 'lucide-react';
import type { ServiceClient } from '@/types/service';

export default function ServiceDetailMethodologySection({ service }: { service: ServiceClient }) {
    const color = service.color || 'from-sky-500 to-indigo-600';
    return (
        <section className="w-full py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 ring-1 ring-black/5">
                    <div className="flex items-center gap-3 mb-8">
                        <div className={`w-12 h-12 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center`}>
                            <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">Our Methodology</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.methodology.map((method, index) => (
                            <div key={`${method}-${index}`} className="relative pl-8">
                                <div className={`absolute left-0 top-0 w-6 h-6 bg-gradient-to-r ${color} rounded-full flex items-center justify-center`}>
                                    <span className="text-white text-xs font-bold">{index + 1}</span>
                                </div>
                                <div className="text-gray-700 font-medium">{method}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
