/*
  📘 HERO COMPONENT — High Impact First Impression
  Dynamic animations, glassmorphism, truck-focused
*/

import { motion } from "framer-motion";
import { FaWhatsapp, FaPhone, FaTruckMoving, FaOilCan, FaCogs, FaArrowRight } from "react-icons/fa";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image with Dynamic Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1600&q=80"
                    alt="Heavy construction machinery at sunset"
                    className="w-full h-full object-cover scale-105 animate-pulse-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-purple-900/60" />
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

            <div className="container-custom relative z-10 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Interactive Badge */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 
                            rounded-full px-4 py-2 mb-6 shadow-lg cursor-default"
                        >
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-blue-100 text-sm font-semibold tracking-wide uppercase">Available to Rent Now</span>
                        </motion.div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                            Heavy Duty <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 animate-shine-text">
                                Solutions
                            </span>
                        </h1>

                        <p className="text-lg text-blue-100/90 leading-relaxed mb-8 max-w-lg border-l-4 border-amber-500 pl-6">
                            Trucks, excavators, oil supply, and road construction services.
                            We customise and import machinery as per your requirement — delivered within 2 months.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <motion.a
                                href="#equipment"
                                whileHover={{ scale: 1.05, x: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl 
                                font-bold text-lg shadow-lg shadow-amber-500/30 flex items-center gap-3 transition-all"
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
                                font-bold text-lg border border-white/20 hover:bg-white/20 transition-all flex items-center gap-3"
                            >
                                <FaWhatsapp className="text-green-400 text-xl" /> WhatsApp
                            </motion.a>
                        </div>

                        {/* Stats Row */}
                        <div className="flex gap-8 border-t border-white/10 pt-8">
                            <div>
                                <p className="text-3xl font-bold text-white">15+</p>
                                <p className="text-sm text-blue-200 uppercase tracking-wider">Machines</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white">200+</p>
                                <p className="text-sm text-blue-200 uppercase tracking-wider">Projects</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white">5+</p>
                                <p className="text-sm text-blue-200 uppercase tracking-wider">Years</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content - 3D Floating Cards */}
                    <div className="hidden lg:block relative h-[600px]">
                        {/* Service Cards Floating */}
                        <FloatingCard
                            icon={FaTruckMoving}
                            title="Haulage Services"
                            desc="32T & 42T Trucks"
                            color="bg-blue-600"
                            position="top-10 right-5"
                            delay={0.2}
                        />
                        <FloatingCard
                            icon={FaOilCan}
                            title="Oil Supply"
                            desc="Reliable Fuel Delivery"
                            color="bg-black"
                            position="top-40 left-0"
                            delay={0.4}
                        />
                        <FloatingCard
                            icon={FaCogs}
                            title="Custom Import"
                            desc="Delivery in 2 Months"
                            color="bg-amber-600"
                            position="bottom-10 right-10"
                            delay={0.6}
                        />

                        {/* Circle Background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/10 rounded-full animate-spin-slow-reverse" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-white/10 rounded-full animate-spin-slow" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function FloatingCard({ icon: Icon, title, desc, color, position, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.8, type: "spring" }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            className={`absolute ${position} bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl w-64 shadow-2xl cursor-default`}
        >
            <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center text-white text-xl mb-3 shadow-lg`}>
                <Icon />
            </div>
            <h3 className="text-white font-bold text-lg">{title}</h3>
            <p className="text-blue-200 text-sm">{desc}</p>
        </motion.div>
    );
}
