'use client';

import { Users, CheckCircle } from 'lucide-react';
import type { ServiceClient } from '@/types/service';

export default function ServiceDetailAudienceSection({ service }: { service: ServiceClient }) {
    const color = service.color || 'from-sky-500 to-indigo-600';
    return (
        <section className="w-full py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl p-8 md:p-12 ring-1 ring-black/5">
                    <div className="flex items-center gap-3 mb-8">
                        <div className={`w-12 h-12 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center`}>
                            <Users className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">Who Should Attend?</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {service.whoShouldAttend.map((aud, index) => (
                            <div key={`${aud}-${index}`} className="bg-white rounded-xl p-4 shadow-md ring-1 ring-black/5 flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-purple-600" />
                                <span className="text-gray-800 font-medium">{aud}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
