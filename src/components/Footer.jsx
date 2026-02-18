/*
  📘 FOOTER COMPONENT — Company logo, compact layout
*/

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-purple-950" />
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2"
            />

            {/* Main Footer */}
            <div className="container-custom py-10 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                    {/* Column 1: Company with Logo */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="/logo.jpeg"
                                alt="BharatSerra Corp"
                                className="w-11 h-11 rounded-full object-cover shadow-lg shadow-blue-500/20"
                            />
                            <div>
                                <h3 className="text-white font-bold text-lg leading-tight">BharatSerra</h3>
                                <p className="text-[10px] text-blue-400 uppercase tracking-[0.2em] font-semibold">Corp</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Heavy Equipment Rental, Excavation, Haulage, Oil Supply &amp;
                            Road Construction in Sierra Leone.
                        </p>
                        <a
                            href="https://wa.me/919979977744"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 
                         text-green-400 px-4 py-2 rounded-xl text-sm font-semibold
                         hover:from-green-500/30 hover:to-emerald-500/30 transition-all
                         border border-green-500/20"
                        >
                            <FaWhatsapp className="text-lg" />
                            Chat on WhatsApp
                        </a>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                            <span className="w-5 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full" />
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {[
                                { label: "Home", href: "#home" },
                                { label: "About Us", href: "#about" },
                                { label: "Equipment", href: "#equipment" },
                                { label: "Services", href: "#services" },
                                { label: "Contact", href: "#contact" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-gray-400 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group">
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 rounded-full transition-all duration-300" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                            <span className="w-5 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                            Our Services
                        </h4>
                        <ul className="space-y-2">
                            {[
                                "Site Clearing",
                                "Bulk Excavation",
                                "Earthmoving & Haulage",
                                "Road Construction",
                                "Oil Supply",
                                "Custom Machinery Import",
                            ].map((service) => (
                                <li key={service}>
                                    <a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group">
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 rounded-full transition-all duration-300" />
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                            <span className="w-5 h-0.5 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full" />
                            Contact Us
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="tel:+23290800632" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm group">
                                    <span className="w-8 h-8 bg-blue-500/10 group-hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors">
                                        <FaPhone className="text-blue-400 text-xs" />
                                    </span>
                                    +232 90 800632
                                </a>
                            </li>
                            <li>
                                <a href="tel:+919979977744" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm group">
                                    <span className="w-8 h-8 bg-cyan-500/10 group-hover:bg-cyan-500/20 rounded-lg flex items-center justify-center transition-colors">
                                        <FaPhone className="text-cyan-400 text-xs" />
                                    </span>
                                    +91 99799 77744
                                </a>
                            </li>
                            <li>
                                <a href="mailto:Bharatserracorp@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm group overflow-hidden">
                                    <span className="w-8 h-8 bg-amber-500/10 group-hover:bg-amber-500/20 rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
                                        <FaEnvelope className="text-amber-400 text-xs" />
                                    </span>
                                    <span className="truncate">Bharatserracorp@gmail.com</span>
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <span className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center">
                                    <FaMapMarkerAlt className="text-purple-400 text-xs" />
                                </span>
                                Sierra Leone
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800/50 relative z-10">
                <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-gray-500 text-sm text-center sm:text-left flex items-center gap-1">
                        © {new Date().getFullYear()} BharatSerra Corp. Proudly serving Sierra Leone.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-gray-400 
                       hover:text-white text-sm px-4 py-2 rounded-xl transition-all border border-white/5"
                    >
                        <FaArrowUp className="text-xs" />
                        Back to Top
                    </button>
                </div>
            </div>
        </footer>
    );
}
