'use client';

import { CheckCircle, Target, Award } from 'lucide-react';
import type { ServiceClient } from '@/types/service';

export default function ServiceDetailFeaturesBenefitsSection({ service }: { service: ServiceClient }) {
    const color = service.color || 'from-sky-500 to-indigo-600';
    return (
        <section className="w-full py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="bg-white rounded-3xl shadow-xl p-8 ring-1 ring-black/5">
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`w-12 h-12 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center`}>
                                <Target className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
                        </div>
                        <ul className="space-y-3">
                            {service.features.map((feature, index) => (
                                <li key={`${feature}-${index}`} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                                    <span className="text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl p-8 ring-1 ring-black/5">
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`w-12 h-12 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center`}>
                                <Award className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Benefits</h2>
                        </div>
                        <ul className="space-y-3">
                            {service.benefits.map((benefit, index) => (
                                <li key={`${benefit}-${index}`} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                                    <span className="text-gray-700">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
