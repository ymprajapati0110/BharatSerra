/*
  📘 SERVICES COMPONENT — Vibrant, distinct cards
  Each service gets its own unique color identity
*/

import { motion } from "framer-motion";
import services from "../data/services";

// Map service titles to specific color themes
const SERVICE_THEMES = {
    "Site Clearing": "from-emerald-400 to-green-600",
    "Bulk Excavation": "from-orange-400 to-red-500",
    "Earthmoving & Haulage": "from-blue-500 to-indigo-600",
    "Mining Support": "from-gray-600 to-gray-800",
    "Road Construction": "from-amber-400 to-yellow-600",
    "Land Development": "from-teal-400 to-emerald-600",
    "Oil Supply": "from-slate-800 to-black",
    "Custom Machinery": "from-rose-400 to-red-600",
    "Equipment Import": "from-violet-500 to-purple-700",
};

export default function Services() {
    return (
        <section id="services" className="section-padding relative overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1/2 -left-1/2 w-[100vw] h-[100vw] bg-gradient-to-r from-blue-500/20 to-pink-500/20 rounded-full blur-3xl opacity-40"
            />

            <div className="container-custom relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 
                        text-sm font-bold px-4 py-1.5 rounded-full mb-4 shadow-lg shadow-amber-500/20"
                    >
                        What We Do
                    </motion.span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Solutions</span>
                    </h2>
                    <p className="text-gray-300 text-lg">
                        From heavy lifting to precise grading, we cover every aspect of your project needs.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const theme = SERVICE_THEMES[service.title] || "from-blue-500 to-indigo-600";

                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{ delay: index * 0.1 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1.05,
                                    borderColor: "rgba(255, 255, 255, 0.5)",
                                    boxShadow: "0 0 25px rgba(59, 130, 246, 0.4)"
                                }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 overflow-hidden hover:border-amber-400/50 transition-all duration-300 hover:shadow-glow"
                                id={service.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}
                            >
                                {/* Hover Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${theme} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                {/* Top colored bar */}
                                <div className={`h-1 w-20 bg-gradient-to-r ${theme} rounded-full mb-6`} />

                                {/* Icon Box */}
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${theme} 
                                flex items-center justify-center text-white text-2xl shadow-lg mb-6 
                                group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                                    <service.icon />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                                    {service.description}
                                </p>

                                {/* Decorative number */}
                                <span className="absolute top-4 right-6 text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
