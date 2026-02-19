/*
  📘 HERO COMPONENT — High Impact First Impression
  Dynamic animations, glassmorphism, truck-focused
*/

import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 lg:pt-24 pb-20 overflow-hidden text-center">
            {/* Background Image with Dynamic Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1600&q=80"
                    alt="Heavy construction machinery at sunset"
                    className="w-full h-full object-cover object-center scale-105 animate-pulse-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-indigo-900/80 to-rose-900/60" />
            </div>

            {/* Floating Elements */}
            <motion.div
                animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-[10%] w-64 h-64 bg-amber-500/20 rounded-full blur-3xl z-0"
            />
            <motion.div
                animate={{ y: [0, 40, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 left-[5%] w-80 h-80 bg-blue-500/20 rounded-full blur-3xl z-0"
            />

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto flex flex-col items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Interactive Badge */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 
                            rounded-full px-4 py-2 mb-8 shadow-lg cursor-default"
                        >
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-blue-100 text-sm font-semibold tracking-wide uppercase">Available to Rent Now</span>
                        </motion.div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
                            Heavy Duty <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 animate-shine-text">
                                Solutions
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-blue-100/90 leading-relaxed mb-10 max-w-2xl mx-auto">
                            Trucks, excavators, oil supply, and road construction services.
                            We customise and import machinery as per your requirement — delivered within 2 months.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <motion.a
                                href="#equipment"
                                whileHover={{ scale: 1.05, x: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl 
                                font-bold text-lg shadow-lg shadow-amber-500/30 flex items-center justify-center gap-3 transition-all shadow-glow"
                            >
                                View Fleet <FaArrowRight />
                            </motion.a>
                            <motion.a
                                href="https://wa.me/919979977744"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl 
                                font-bold text-lg border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-3"
                            >
                                <FaWhatsapp className="text-green-400 text-xl" /> WhatsApp
                            </motion.a>
                        </div>

                        {/* Stats Row */}
                        <div className="flex flex-wrap justify-center gap-8 sm:gap-16 border-t border-white/10 pt-10">
                            <div>
                                <p className="text-4xl font-bold text-white">15+</p>
                                <p className="text-sm text-blue-200 uppercase tracking-wider">Machines</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-white">200+</p>
                                <p className="text-sm text-blue-200 uppercase tracking-wider">Projects</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-white">5+</p>
                                <p className="text-sm text-blue-200 uppercase tracking-wider">Years</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
