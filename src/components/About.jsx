/*
  📘 ABOUT COMPONENT — UPGRADED
  More colorful, animated counters, vibrant cards
*/

import { motion } from "framer-motion";
import { FaShieldAlt, FaTruck, FaHandshake, FaClock, FaCheckCircle } from "react-icons/fa";

const FEATURES = [
    {
        icon: FaTruck,
        title: "Modern Fleet",
        description: "Well-maintained 32T & 42T trucks and crawler excavators ready for any project.",
        gradient: "from-blue-500 to-cyan-500",
        bgLight: "bg-blue-50",
        iconColor: "text-blue-600",
    },
    {
        icon: FaShieldAlt,
        title: "Safety First",
        description: "All equipment meets international safety standards with regular maintenance.",
        gradient: "from-emerald-500 to-teal-500",
        bgLight: "bg-emerald-50",
        iconColor: "text-emerald-600",
    },
    {
        icon: FaClock,
        title: "24/7 Availability",
        description: "Round-the-clock support and equipment availability for your deadlines.",
        gradient: "from-amber-500 to-orange-500",
        bgLight: "bg-amber-50",
        iconColor: "text-amber-600",
    },
    {
        icon: FaHandshake,
        title: "Flexible Rentals",
        description: "Daily, weekly, and monthly rental plans tailored to your requirements.",
        gradient: "from-purple-500 to-pink-500",
        bgLight: "bg-purple-50",
        iconColor: "text-purple-600",
    },
];

export default function About() {
    return (
        <section id="about" className="section-padding bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

            <div className="container-custom relative">
                {/* Section Header */}
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
                        className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white 
                       text-sm font-semibold px-5 py-2 rounded-full mb-4"
                    >
                        About Us
                    </motion.span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                        Sierra Leone's Premier{" "}
                        <span className="text-gradient">Equipment Partner</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        BharatSerra Corp is a Heavy Equipment Rental, Excavation & Haulage
                        Contracting Company operating in Sierra Leone. We provide reliable
                        machines and services for construction and mining projects.
                    </p>
                </motion.div>

                {/* Image + Text Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20">
                            <img
                                src="https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?w=800&q=80"
                                alt="Construction workers with excavator"
                                className="w-full h-80 sm:h-96 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                        </div>
                        {/* Floating badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, type: "spring" }}
                            className="absolute -bottom-6 -right-4 sm:right-8 bg-gradient-to-br from-amber-400 to-orange-500 
                         text-gray-900 rounded-2xl p-5 shadow-xl shadow-amber-500/30"
                        >
                            <p className="text-3xl font-extrabold">5+</p>
                            <p className="text-sm font-semibold">Years of Trust</p>
                        </motion.div>
                    </motion.div>

                    {/* Right: Text + Bullets */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                            Building Sierra Leone's{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Infrastructure
                            </span>
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            We specialize in providing heavy machinery for mining, road
                            construction, and building projects. Our fleet includes trucks
                            and excavators operated by experienced professionals.
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Licensed & insured operators",
                                "Regular equipment maintenance",
                                "On-time project delivery",
                                "Competitive pricing plans",
                                "24/7 customer support",
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Feature Cards — now with individual colors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {FEATURES.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white rounded-2xl p-7 text-center
                         shadow-sm hover:shadow-xl transition-all duration-500 cursor-default
                         border border-gray-100 overflow-hidden"
                        >
                            {/* Gradient bar at top */}
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} 
                              transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                            <div className={`w-16 h-16 ${feature.bgLight} rounded-2xl flex items-center justify-center 
                              mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className={`text-2xl ${feature.iconColor}`} />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
