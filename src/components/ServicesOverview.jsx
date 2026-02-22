/*
  📘 SERVICES OVERVIEW — 4 Pillars in 2×2 Grid
  1. Equipment Rental
  2. Infrastructure Development
  3. Mining & Earthworks
  4. Oil Supply
*/

import { FaTruck, FaRoad, FaHardHat, FaOilCan } from "react-icons/fa";

const SERVICES = [
    {
        icon: FaTruck,
        title: "Equipment Rental",
        description: "Reliable heavy machinery available for short and long-term rental.",
        items: ["Tipper Trucks (32T & 42T)", "Excavators", "Lightweight Vehicles"],
        image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=600&q=80",
    },
    {
        icon: FaRoad,
        title: "Infrastructure Development",
        description: "Complete infrastructure solutions from planning to execution.",
        items: ["Roads", "Canals", "Concrete Culverts", "Pipe Culverts", "Bridges"],
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80",
    },
    {
        icon: FaHardHat,
        title: "Mining & Earthworks",
        description: "End-to-end mining support for Sierra Leone's growing mineral sector.",
        items: ["Site Clearing", "Site Preparation", "Earth Work", "Mining & Haulage"],
        image: "https://images.unsplash.com/photo-1578319439584-104c94d37305?w=600&q=80",
    },
    {
        icon: FaOilCan,
        title: "Oil Supply",
        description: "Keep your machinery running with our industrial lubricant supply.",
        items: ["Engine Oil", "Gear Oil", "Hydraulic Oil"],
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80",
    },
];

export default function ServicesOverview() {
    return (
        <section id="services" className="section-padding bg-gray-50">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Our <span className="text-primary-600">Services</span>
                    </h2>
                    <p className="text-gray-600">
                        Comprehensive solutions for mining, construction, and infrastructure projects across Sierra Leone.
                    </p>
                </div>

                {/* 2×2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SERVICES.map((service) => (
                        <div
                            key={service.title}
                            className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Image */}
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                                        <service.icon className="text-xl text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.items.map((item) => (
                                        <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
