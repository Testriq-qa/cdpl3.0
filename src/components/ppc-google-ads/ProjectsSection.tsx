'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Trophy, Target, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const projects = [
    {
        title: "E-Commerce Scale: ₹1.2Cr Revenue in 90 Days",
        platform: "Google Shopping + Performance Max",
        result: "ROAS 8.4x",
        badge: "Top 1% Campaign",
        img: "/projects/ecom.jpg"
    },
    {
        title: "Lead Gen Mastery: 42,000+ Qualified Leads",
        platform: "Search + Remarketing",
        result: "CPL ↓ 68%",
        badge: "Award Winning",
        img: "/projects/leads.jpg"
    },
    {
        title: "Local Business Domination: 300% Traffic Surge",
        platform: "Local Service Ads",
        result: "1200+ Calls/Month",
        badge: "Google Partner Case Study",
        img: "/projects/local.jpg"
    }
];

export default function ProjectsSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-blue-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Real <span className="text-blue-600">₹50L+ Campaigns</span> You’ll Launch
                    </h2>
                    <p className="text-xl text-gray-600">Live Google Ads Projects • 100% Hands-On</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((proj, i) => (
                        <motion.a
                            key={i}
                            href="#"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="group block bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-300"
                        >
                            <div className="relative h-48 bg-gray-200">
                                <Image
                                    src={proj.img}
                                    alt={`Google Ads Project: ${proj.title}`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                    <Trophy className="w-3 h-3" />
                                    {proj.badge}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition">
                                    {proj.title}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                                    <Target className="w-4 h-4 text-blue-500" />
                                    {proj.platform}
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <TrendingUp className="w-5 h-5 text-green-500" />
                                        <span className="text-2xl font-bold text-green-600">{proj.result}</span>
                                    </div>

                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-lg text-gray-600">
                        You’ll get <strong>₹50,000 ad credit</strong> to run your own campaign
                    </p>
                </div>
            </div>
        </section>
    );
}