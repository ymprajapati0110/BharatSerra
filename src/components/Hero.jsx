/*
  📘 HERO COMPONENT — The First Thing Visitors See (UPGRADED)
  
  Full-width background image, gradient text, animated shapes, colored stat cards
*/

import { motion } from "framer-motion";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-[90vh] flex items-center overflow-hidden"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1600&q=80"
                    alt="Heavy equipment at work"
                    className="w-full h-full object-cover"
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-indigo-900/60" />
            </div>

            {/* Animated background shapes */}
            <motion.div
                animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
            />
            <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 left-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"
            />

            {/* HERO CONTENT */}
            <div className="container-custom relative z-10 py-20">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Badge */}
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400/20 to-orange-400/20 
                         text-amber-300 text-sm font-semibold px-5 py-2.5 rounded-full mb-8 
                         backdrop-blur-sm border border-amber-400/20"
                        >
                            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                            Sierra Leone's Trusted Equipment Partner
                        </motion.span>

                        {/* Headline with gradient text */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white 
                           leading-[1.1] mb-6">
                            Heavy Equipment{" "}
                            <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 
                               bg-clip-text text-transparent">
                                Rental
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-300 to-cyan-300 
                               bg-clip-text text-transparent">
                                & Haulage
                            </span>{" "}
                            Services
                        </h1>

                        <p className="text-lg sm:text-xl text-blue-100/90 leading-relaxed mb-10 max-w-2xl">
                            We provide trucks and excavators on rental basis and undertake
                            excavation, earthmoving, site clearing, and haulage contracts for
                            construction and mining companies in Sierra Leone.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                href="https://wa.me/919979977744?text=Hi%2C%20I%27m%20interested%20in%20renting%20equipment%20from%20BharatSerra%20Corp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 
                             text-white px-8 py-4 rounded-2xl text-lg font-bold
                             hover:shadow-2xl hover:shadow-green-500/30 transition-shadow duration-300"
                            >
                                <FaWhatsapp className="text-2xl" />
                                Get a Free Quote
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                href="tel:+23290800632"
                                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white 
                             px-8 py-4 rounded-2xl text-lg font-bold border border-white/20
                             hover:bg-white/20 transition-all duration-300"
                            >
                                <FaPhone className="text-lg" />
                                Call Us Now
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
                    >
                        {[
                            { number: "50+", label: "Machines", color: "from-blue-500/20 to-blue-600/20", border: "border-blue-400/30" },
                            { number: "200+", label: "Projects", color: "from-emerald-500/20 to-emerald-600/20", border: "border-emerald-400/30" },
                            { number: "5+", label: "Years", color: "from-amber-500/20 to-amber-600/20", border: "border-amber-400/30" },
                            { number: "24/7", label: "Support", color: "from-purple-500/20 to-purple-600/20", border: "border-purple-400/30" },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className={`bg-gradient-to-br ${stat.color} backdrop-blur-sm rounded-2xl 
                             p-4 text-center border ${stat.border}`}
                            >
                                <p className="text-2xl sm:text-3xl font-extrabold text-white">
                                    {stat.number}
                                </p>
                                <p className="text-blue-200 text-sm font-medium">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator — subtle fade-in chevron */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/60">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </motion.div>
        </section>
    );
}
