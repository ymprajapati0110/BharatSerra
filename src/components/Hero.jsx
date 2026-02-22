/*
  📘 HERO + ABOUT US — Combined Section
  Mining image, Sierra Leone focus, India business mention
*/

import { FaWhatsapp, FaTruck, FaHardHat, FaGlobeAsia } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();

    return (
        <section id="home">
            {/* Hero Banner */}
            <div className="relative min-h-[70vh] flex items-center">
                <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80"
                    alt="Mining operations in Sierra Leone"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/70 to-primary-900/50" />

                <div className="container-custom relative z-10 py-20">
                    <div className="max-w-2xl">
                        <span className="inline-block bg-accent/20 text-accent border border-accent/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                            Heavy Equipment & Mining Solutions
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                            Building Sierra Leone's{" "}
                            <span className="text-accent">Infrastructure</span>
                        </h1>
                        <p className="text-lg text-primary-100 leading-relaxed mb-8 max-w-xl">
                            We provide heavy machinery for mining, road construction, and infrastructure projects
                            across Sierra Leone. Operated by experienced professionals.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => navigate("/fleet")}
                                className="bg-white text-primary-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                View Our Fleet →
                            </button>
                            <a
                                href="https://wa.me/919979977744?text=Hi%2C%20I%27m%20interested%20in%20renting%20equipment"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                            >
                                <FaWhatsapp className="text-xl" /> Get a Quote
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* About / Stats Strip */}
            <div className="bg-white py-16">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Text */}
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                About <span className="text-primary-600">BharatSerra Corp</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                BharatSerra Corp specializes in heavy equipment rental, mining services,
                                oil supply, and infrastructure development in Sierra Leone. With a fleet
                                of trucks, excavators, and specialized machinery, we support mining
                                companies, construction firms, and government projects.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Headquartered in India with over <strong className="text-gray-900">100+ equipment</strong> in
                                our Indian operations, we bring decades of experience to West Africa's
                                growing mining and construction sector.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-primary-50 rounded-xl p-6 text-center">
                                <FaTruck className="text-3xl text-primary-600 mx-auto mb-3" />
                                <p className="text-3xl font-bold text-primary-900">15+</p>
                                <p className="text-sm text-gray-600 mt-1">Machines in SL</p>
                            </div>
                            <div className="bg-primary-50 rounded-xl p-6 text-center">
                                <FaHardHat className="text-3xl text-primary-600 mx-auto mb-3" />
                                <p className="text-3xl font-bold text-primary-900">200+</p>
                                <p className="text-sm text-gray-600 mt-1">Projects Done</p>
                            </div>
                            <div className="bg-primary-50 rounded-xl p-6 text-center">
                                <FaGlobeAsia className="text-3xl text-primary-600 mx-auto mb-3" />
                                <p className="text-3xl font-bold text-primary-900">100+</p>
                                <p className="text-sm text-gray-600 mt-1">Equipment in India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
