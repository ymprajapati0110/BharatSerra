/*
  📘 HERO + ABOUT + 9 SERVICE BOXES — Homepage
*/

import { FaWhatsapp, FaTruck, FaHardHat, FaGlobeAsia, FaArrowRight, FaRoad, FaOilCan } from "react-icons/fa";
import { Link } from "react-router-dom";

/* 9 sub-service items */
const SERVICE_BOXES = [
    { icon: "🚚", title: "Tipper Trucks", desc: "32T & 42T capacity" },
    { icon: "🏗️", title: "Excavators", desc: "Heavy-duty digging" },
    { icon: "🚜", title: "Light Vehicles", desc: "Transport & utility" },
    { icon: "🛣️", title: "Roads & Canals", desc: "Infrastructure build" },
    { icon: "🌉", title: "Bridges & Culverts", desc: "Concrete & pipe" },
    { icon: "⛏️", title: "Site Clearing", desc: "Land preparation" },
    { icon: "🏔️", title: "Mining & Haulage", desc: "End-to-end mining" },
    { icon: "🛢️", title: "Oil & Lubricants", desc: "Industrial supply" },
    { icon: "🔧", title: "Custom Import", desc: "India, 2 months" },
];

export default function Hero() {
    return (
        <section>
            {/* ═══════ HERO BANNER ═══════ */}
            <div className="relative min-h-[65vh] sm:min-h-[75vh] flex items-center">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80"
                        alt="Heavy construction and mining site"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/85 to-blue-900/50" />
                </div>

                <div className="container-custom relative z-10 py-14 sm:py-20">
                    <div className="max-w-2xl">
                        {/* Badge */}
                        <div className="inline-flex items-center bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full mb-4">
                            <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse" />
                            Heavy Equipment & Mining Solutions
                        </div>

                        {/* Headline — smaller on mobile */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                            Building Sierra Leone's{" "}
                            <span className="text-orange-400">Infrastructure</span>
                        </h1>

                        <p className="text-sm sm:text-base text-blue-100 leading-relaxed mb-6 max-w-lg">
                            Heavy machinery for mining, road construction, and infrastructure
                            — operated by experienced professionals.
                        </p>

                        {/* CTAs — stack on small mobile */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link to="/services" className="btn-white px-5 py-3 text-sm flex items-center justify-center gap-2 shadow-lg">
                                Our Services <FaArrowRight className="text-xs" />
                            </Link>
                            <a
                                href="https://wa.me/919979977744?text=Hi%2C%20I%27m%20interested%20in%20renting%20equipment"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-whatsapp px-5 py-3 text-sm flex items-center justify-center gap-2"
                            >
                                <FaWhatsapp className="text-lg" /> Get a Quote
                            </a>
                        </div>
                    </div>
                </div>

                {/* Wave */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg viewBox="0 0 1200 120" className="w-full h-8 sm:h-10 text-white" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" opacity=".3" />
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor" />
                    </svg>
                </div>
            </div>

            {/* ═══════ ABOUT ═══════ */}
            <div className="bg-white py-12 sm:py-16">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div>
                            <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                                About Us
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                                About <span className="text-gradient-blue">BharatSerra Corp</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-3 text-sm sm:text-base">
                                BharatSerra Corp specializes in heavy equipment rental, mining services,
                                oil supply, and infrastructure development in Sierra Leone.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-5 text-sm sm:text-base">
                                Headquartered in India with <strong className="text-blue-700">100+ equipment</strong>,
                                we bring decades of experience to West Africa's construction sector.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Link to="/services" className="btn-primary px-5 py-2.5 text-sm flex items-center gap-2">
                                    Our Services <FaArrowRight className="text-xs" />
                                </Link>
                                <Link to="/contact" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors">
                                    Contact Us
                                </Link>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-3">
                            {[
                                { icon: FaTruck, number: "15+", label: "Machines in SL", bg: "bg-blue-600" },
                                { icon: FaHardHat, number: "200+", label: "Projects Done", bg: "bg-blue-700" },
                                { icon: FaGlobeAsia, number: "100+", label: "Equipment India", bg: "bg-blue-800" },
                            ].map((stat) => (
                                <div key={stat.label} className={`${stat.bg} rounded-xl p-4 sm:p-5 text-center text-white shadow-lg`}>
                                    <stat.icon className="text-2xl sm:text-3xl mx-auto mb-2 text-blue-200" />
                                    <p className="text-2xl sm:text-3xl font-extrabold">{stat.number}</p>
                                    <p className="text-[10px] sm:text-xs text-blue-200 mt-1 font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ═══════ 9 SERVICE BOXES ═══════ */}
            <div className="bg-gray-50 py-12 sm:py-16">
                <div className="container-custom">
                    <div className="text-center mb-8">
                        <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                            What We Offer
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                            Our Capabilities
                        </h2>
                    </div>

                    <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-9 gap-3">
                        {SERVICE_BOXES.map((item) => (
                            <div
                                key={item.title}
                                className="bg-white rounded-xl p-3 sm:p-4 text-center border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all"
                            >
                                <div className="text-2xl sm:text-3xl mb-2">{item.icon}</div>
                                <p className="font-bold text-gray-900 text-xs sm:text-sm leading-tight mb-0.5">{item.title}</p>
                                <p className="text-[10px] sm:text-xs text-gray-500 leading-tight">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Link to="/services" className="btn-primary px-6 py-3 text-sm inline-flex items-center gap-2">
                            Learn More About Our Services <FaArrowRight className="text-xs" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* ═══════ 4 SERVICE CARDS — blue strip ═══════ */}
            <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-12">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                        {[
                            { icon: FaTruck, title: "Equipment Rental", to: "/equipment/equipment-rental" },
                            { icon: FaRoad, title: "Infrastructure", to: "/equipment/infrastructure" },
                            { icon: FaHardHat, title: "Mining", to: "/equipment/mining" },
                            { icon: FaOilCan, title: "Oil Supply", to: "/equipment/oil-supply" },
                        ].map((item) => (
                            <Link
                                key={item.title}
                                to={item.to}
                                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 text-center text-white hover:bg-white/20 transition-all group"
                            >
                                <item.icon className="text-2xl sm:text-3xl mx-auto mb-2 text-blue-300 group-hover:text-orange-400 transition-colors" />
                                <p className="font-semibold text-xs sm:text-sm">{item.title}</p>
                                <p className="text-blue-300 text-[10px] sm:text-xs mt-1 group-hover:text-white transition-colors">
                                    View →
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
