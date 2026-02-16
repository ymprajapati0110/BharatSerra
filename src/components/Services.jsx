/*
  📘 SERVICES COMPONENT — UPGRADED
  More colorful with gradient backgrounds, animated icons, better visual hierarchy
*/

import { motion } from "framer-motion";
import services from "../data/services";

export default function Services() {
    return (
        <section id="services" className="section-padding relative overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800" />
            {/* Decorative shapes */}
            <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute top-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
            />
            <motion.div
                animate={{ scale: [1.15, 1, 1.15] }}
                transition={{ duration: 12, repeat: Infinity }}
                className="absolute bottom-20 left-20 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"
            />

            <div className="container-custom relative z-10">
                {/* Section Header — white text on dark bg */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block bg-gradient-to-r from-amber-400 to-orange-400 text-gray-900 
                       text-sm font-bold px-5 py-2 rounded-full mb-4"
                    >
                        What We Do
                    </motion.span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Our{" "}
                        <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
                            Services
                        </span>
                    </h2>
                    <p className="text-blue-200 text-lg">
                        From site clearing to construction support, we provide comprehensive
                        heavy equipment and contracting services across Sierra Leone.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.06 }}
                            className="group bg-white/5 backdrop-blur-sm rounded-2xl p-7 
                         border border-white/10 hover:border-amber-400/30
                         hover:bg-white/10 transition-all duration-500"
                        >
                            {/* Service number */}
                            <span className="text-xs font-bold text-blue-400/40 mb-4 block">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            {/* Icon */}
                            <div className="w-14 h-14 bg-gradient-to-br from-amber-400/20 to-orange-500/20 
                              rounded-2xl flex items-center justify-center mb-5 
                              group-hover:from-amber-400 group-hover:to-orange-500
                              group-hover:shadow-lg group-hover:shadow-amber-500/20
                              transition-all duration-500">
                                <service.icon className="text-xl text-amber-400 group-hover:text-gray-900 transition-colors duration-500" />
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-bold text-white mb-3">
                                {service.title}
                            </h3>
                            <p className="text-blue-200/70 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-16"
                >
                    <p className="text-blue-200 mb-5 text-lg">
                        Need a custom solution for your project?
                    </p>
                    <a
                        href="https://wa.me/919979977744?text=Hi%2C%20I%20need%20a%20custom%20solution%20for%20my%20project"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-orange-500 
                       hover:from-amber-500 hover:to-orange-600
                       text-gray-900 font-bold px-8 py-4 rounded-2xl text-lg
                       transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30
                       hover:-translate-y-1 active:scale-95"
                    >
                        Get a Custom Quote
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
