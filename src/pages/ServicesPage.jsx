/*
  📘 SERVICES PAGE — Better images, mobile-friendly
*/

import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaTruck, FaRoad, FaHardHat, FaOilCan, FaArrowRight, FaWhatsapp } from "react-icons/fa";

const SERVICES = [
    {
        icon: FaTruck,
        title: "Equipment Rental",
        slug: "equipment-rental",
        description: "Reliable heavy machinery available for short and long-term rental across Sierra Leone. All equipment is maintained to the highest standards.",
        items: ["Tipper Trucks (32T & 42T)", "Excavators", "Lightweight Vehicles"],
        /* Dump truck on a construction site */
        image: "https://images.unsplash.com/photo-1580901368919-7738efb0f228?w=600&q=80",
    },
    {
        icon: FaRoad,
        title: "Infrastructure Development",
        slug: "infrastructure",
        description: "Complete infrastructure solutions — roads, bridges, canals, and culverts that form the backbone of Sierra Leone's development.",
        items: ["Roads", "Canals", "Concrete Culverts", "Pipe Culverts", "Bridges"],
        /* Road construction / highway being built */
        image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=600&q=80",
    },
    {
        icon: FaHardHat,
        title: "Mining & Earthworks",
        slug: "mining",
        description: "End-to-end mining support for Sierra Leone's growing mineral sector. From site preparation to haulage.",
        items: ["Site Clearing", "Site Preparation", "Earth Work", "Mining & Haulage"],
        /* Open-pit mine / excavation */
        image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&q=80",
    },
    {
        icon: FaOilCan,
        title: "Oil Supply",
        slug: "oil-supply",
        description: "Keep your machinery running with our industrial grade oils and lubricants. We source and deliver for all equipment types.",
        items: ["Engine Oil", "Gear Oil", "Hydraulic Oil"],
        /* Oil barrels / industrial oil */
        image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&q=80",
    },
];

export default function ServicesPage() {
    const navigate = useNavigate();

    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <main>
            {/* Banner */}
            <div className="page-banner py-12 sm:py-16 pb-10">
                <div className="container-custom relative z-10">
                    <div className="inline-block bg-blue-500/20 text-blue-200 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider border border-blue-400/20">
                        What We Do
                    </div>
                    <h1 className="text-2xl sm:text-4xl font-bold mb-2">Our Services</h1>
                    <p className="text-blue-200 max-w-xl text-sm sm:text-base">
                        Four core areas powering Sierra Leone's mining, construction, and development.
                    </p>
                </div>
            </div>

            {/* Service cards — stack on mobile, alternating on desktop */}
            <div className="container-custom py-8 sm:py-12">
                <div className="space-y-6">
                    {SERVICES.map((service, index) => (
                        <div
                            key={service.title}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow`}
                        >
                            {/* Image */}
                            <div className="md:w-2/5 h-48 md:h-auto relative overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="md:w-3/5 p-5 sm:p-6 md:p-8 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="bg-blue-600 p-2 rounded-lg flex-shrink-0">
                                        <service.icon className="text-base text-white" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{service.title}</h3>
                                </div>
                                <p className="text-gray-600 mb-3 leading-relaxed text-sm">{service.description}</p>
                                <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-4">
                                    {service.items.map((item) => (
                                        <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                                            <span className="truncate">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        onClick={() => navigate(`/equipment/${service.slug}`)}
                                        className="btn-primary px-4 py-2 text-xs sm:text-sm flex items-center gap-2"
                                    >
                                        View Equipment <FaArrowRight className="text-[10px]" />
                                    </button>
                                    <a
                                        href={`https://wa.me/919979977744?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(service.title)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-whatsapp px-4 py-2 text-xs sm:text-sm flex items-center gap-2"
                                    >
                                        <FaWhatsapp /> Enquire
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-900 py-10 sm:py-12">
                <div className="container-custom text-center">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Need Custom Solutions?</h2>
                    <p className="text-blue-200 mb-5 max-w-lg mx-auto text-sm">
                        We import equipment from India — delivered within 2 months.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link to="/contact" className="btn-white px-6 py-2.5 text-sm">Contact Us</Link>
                        <a href="https://wa.me/919979977744" target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-6 py-2.5 text-sm flex items-center gap-2">
                            <FaWhatsapp /> WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
