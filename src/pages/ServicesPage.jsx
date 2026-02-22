/*
  📘 SERVICES PAGE — 4 Pillars with blue headers and service→equipment linking
*/

import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaTruck, FaRoad, FaHardHat, FaOilCan, FaArrowRight, FaWhatsapp } from "react-icons/fa";

const SERVICES = [
    {
        icon: FaTruck,
        title: "Equipment Rental",
        slug: "equipment-rental",
        description: "Reliable heavy machinery available for short and long-term rental across Sierra Leone. All equipment is maintained to the highest standards and operated by experienced professionals.",
        items: ["Tipper Trucks (32T & 42T)", "Excavators", "Lightweight Vehicles"],
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    },
    {
        icon: FaRoad,
        title: "Infrastructure Development",
        slug: "infrastructure",
        description: "Complete infrastructure solutions from planning to execution. We build roads, bridges, canals, and culverts that form the backbone of Sierra Leone's development.",
        items: ["Roads", "Canals", "Concrete Culverts", "Pipe Culverts", "Bridges"],
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80",
    },
    {
        icon: FaHardHat,
        title: "Mining & Earthworks",
        slug: "mining",
        description: "End-to-end mining support for Sierra Leone's growing mineral sector. From site preparation to haulage, we handle the heavy lifting.",
        items: ["Site Clearing", "Site Preparation", "Earth Work", "Mining & Haulage"],
        image: "https://images.unsplash.com/photo-1578319439584-104c94d37305?w=600&q=80",
    },
    {
        icon: FaOilCan,
        title: "Oil Supply",
        slug: "oil-supply",
        description: "Keep your machinery running efficiently with our comprehensive industrial lubricant supply chain. We source and deliver quality oils for all equipment types.",
        items: ["Engine Oil", "Gear Oil", "Hydraulic Oil"],
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80",
    },
];

export default function ServicesPage() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            {/* Page Banner */}
            <div className="page-banner py-16 pb-12">
                <div className="container-custom relative z-10">
                    <div className="inline-block bg-blue-500/20 text-blue-200 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider border border-blue-400/20">
                        What We Do
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold mb-3">Our Services</h1>
                    <p className="text-blue-200 max-w-xl">
                        Four core areas of expertise powering Sierra Leone's mining, construction, and development sector.
                    </p>
                </div>
            </div>

            {/* Services List — Alternating layout */}
            <div className="container-custom py-12">
                <div className="space-y-8">
                    {SERVICES.map((service, index) => (
                        <div
                            key={service.title}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow`}
                        >
                            {/* Image */}
                            <div className="md:w-2/5 h-56 md:h-auto relative overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="bg-blue-600 p-2.5 rounded-lg">
                                        <service.icon className="text-lg text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                                </div>
                                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-5">
                                    {service.items.map((item) => (
                                        <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => navigate(`/equipment/${service.slug}`)}
                                        className="btn-primary px-5 py-2.5 text-sm flex items-center gap-2"
                                    >
                                        View Equipment <FaArrowRight className="text-xs" />
                                    </button>
                                    <a
                                        href={`https://wa.me/919979977744?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(service.title)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-whatsapp px-5 py-2.5 text-sm flex items-center gap-2"
                                    >
                                        <FaWhatsapp /> Enquire
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Strip */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-900 py-12">
                <div className="container-custom text-center">
                    <h2 className="text-2xl font-bold text-white mb-3">Need Custom Solutions?</h2>
                    <p className="text-blue-200 mb-6 max-w-lg mx-auto">
                        Contact us for custom machinery requirements. We import equipment from India within 2 months.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/contact" className="btn-white px-7 py-3 text-sm">
                            Contact Us
                        </Link>
                        <a
                            href="https://wa.me/919979977744"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp px-7 py-3 text-sm flex items-center gap-2"
                        >
                            <FaWhatsapp /> WhatsApp Us
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
