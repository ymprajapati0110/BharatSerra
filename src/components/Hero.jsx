/*
  📘 HERO + ABOUT — Stunning homepage with mining imagery
*/

import { FaWhatsapp, FaTruck, FaHardHat, FaGlobeAsia, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section>
            {/* ══════════════════════════════════════════
                HERO BANNER — Full width, vibrant blue overlay
            ══════════════════════════════════════════ */}
            <div className="relative min-h-[75vh] flex items-center">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80"
                        alt="Heavy construction and mining site"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/85 to-blue-900/60" />
                    {/* Subtle geometric pattern overlay */}
                    <div className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    />
                </div>

                <div className="container-custom relative z-10 py-20">
                    <div className="max-w-2xl">
                        {/* Badge */}
                        <div className="inline-flex items-center bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                            <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse" />
                            Heavy Equipment & Mining Solutions
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                            Building Sierra Leone's{" "}
                            <span className="text-orange-400">Infrastructure</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-lg">
                            Providing heavy machinery for mining, road construction, and infrastructure
                            development — operated by experienced professionals.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/equipment"
                                className="btn-white px-7 py-3.5 text-sm flex items-center gap-2 shadow-lg shadow-white/10"
                            >
                                View Our Fleet <FaArrowRight className="text-xs" />
                            </Link>
                            <Link
                                to="/services"
                                className="border-2 border-white/30 text-white px-7 py-3.5 rounded-lg font-semibold text-sm hover:bg-white/10 transition-all"
                            >
                                Our Services
                            </Link>
                            <a
                                href="https://wa.me/919979977744?text=Hi%2C%20I%27m%20interested%20in%20renting%20equipment"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-whatsapp px-6 py-3.5 text-sm flex items-center gap-2"
                            >
                                <FaWhatsapp className="text-lg" /> Get a Quote
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom wave divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg viewBox="0 0 1200 120" className="w-full h-10 text-white" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" opacity=".2" />
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="currentColor" opacity=".5" />
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor" />
                    </svg>
                </div>
            </div>

            {/* ══════════════════════════════════════════
                ABOUT STRIP — Company info + stats
            ══════════════════════════════════════════ */}
            <div className="bg-white py-16">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Text */}
                        <div>
                            <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                                About Us
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                                About{" "}
                                <span className="text-gradient-blue">BharatSerra Corp</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                BharatSerra Corp specializes in heavy equipment rental, mining services,
                                oil supply, and infrastructure development in Sierra Leone. With a fleet
                                of trucks, excavators, and specialized machinery, we support mining
                                companies, construction firms, and government projects.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Headquartered in India with over{" "}
                                <strong className="text-blue-700 font-bold">100+ equipment</strong>{" "}
                                in our Indian operations, we bring decades of experience to
                                West Africa's growing mining and construction sector.
                            </p>
                            <div className="flex gap-3">
                                <Link
                                    to="/services"
                                    className="btn-primary px-6 py-3 text-sm flex items-center gap-2"
                                >
                                    Our Services <FaArrowRight className="text-xs" />
                                </Link>
                                <Link
                                    to="/contact"
                                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold text-sm transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { icon: FaTruck, number: "15+", label: "Machines in SL", bg: "bg-blue-600" },
                                { icon: FaHardHat, number: "200+", label: "Projects Done", bg: "bg-blue-700" },
                                { icon: FaGlobeAsia, number: "100+", label: "Equipment India", bg: "bg-blue-800" },
                            ].map((stat) => (
                                <div key={stat.label} className={`${stat.bg} rounded-xl p-5 text-center text-white shadow-lg`}>
                                    <stat.icon className="text-3xl mx-auto mb-3 text-blue-200" />
                                    <p className="text-3xl font-extrabold">{stat.number}</p>
                                    <p className="text-xs text-blue-200 mt-1 font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════════════
                SERVICE HIGHLIGHTS — Quick links to services page  
            ══════════════════════════════════════════ */}
            <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-14">
                <div className="container-custom">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                            What We Offer
                        </h2>
                        <p className="text-blue-200 max-w-lg mx-auto text-sm">
                            Comprehensive solutions for Sierra Leone's mining and construction industry
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { icon: FaTruck, title: "Equipment Rental", to: "/equipment/equipment-rental" },
                            { icon: "🏗️", title: "Infrastructure", to: "/equipment/infrastructure" },
                            { icon: FaHardHat, title: "Mining & Earthworks", to: "/equipment/mining" },
                            { icon: "🛢️", title: "Oil Supply", to: "/equipment/oil-supply" },
                        ].map((item) => (
                            <Link
                                key={item.title}
                                to={item.to}
                                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center text-white hover:bg-white/20 transition-all group"
                            >
                                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                                    {typeof item.icon === "string" ? (
                                        <span>{item.icon}</span>
                                    ) : (
                                        <item.icon className="mx-auto text-blue-300" />
                                    )}
                                </div>
                                <p className="font-semibold text-sm">{item.title}</p>
                                <p className="text-blue-300 text-xs mt-1 group-hover:text-white transition-colors">
                                    View Details →
                                </p>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Link
                            to="/services"
                            className="btn-white px-8 py-3 text-sm inline-flex items-center gap-2"
                        >
                            View All Services <FaArrowRight className="text-xs" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
