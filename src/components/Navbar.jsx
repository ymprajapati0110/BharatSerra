/*
  📘 NAVBAR COMPONENT — Navigation Bar
  Uses company logo.jpeg, scrollspy, mobile hamburger menu
*/

import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Equipment", href: "#equipment" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scrollspy
    useEffect(() => {
        const sectionIds = NAV_LINKS.map((link) => link.href.replace("#", ""));
        const observers = [];
        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (!element) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
            );
            observer.observe(element);
            observers.push(observer);
        });
        return () => observers.forEach((obs) => obs.disconnect());
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        setMobileMenuOpen(false);
        setTimeout(() => {
            const element = document.getElementById(targetId);
            if (element) {
                const offset = 80;
                const top = element.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: "smooth" });
            }
        }, 350);
    };

    return (
        <>
            {/* TOP INFO BAR */}
            <div className="hidden md:block bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white text-sm">
                <div className="container-custom flex justify-between items-center py-2">
                    <div className="flex items-center gap-6">
                        <a href="tel:+23290800632" className="flex items-center gap-2 hover:text-amber-300 transition-colors">
                            <FaPhone className="text-xs text-amber-400" />
                            <span>+232 90 800632</span>
                        </a>
                        <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                        <a href="tel:+919979977744" className="flex items-center gap-2 hover:text-amber-300 transition-colors">
                            <FaPhone className="text-xs text-amber-400" />
                            <span>+91 99799 77744</span>
                        </a>
                    </div>
                    <a href="mailto:Bharatserracorp@gmail.com" className="flex items-center gap-2 hover:text-amber-300 transition-colors truncate">
                        <FaEnvelope className="text-xs text-amber-400 flex-shrink-0" />
                        <span className="truncate">Bharatserracorp@gmail.com</span>
                    </a>
                </div>
            </div>

            {/* MAIN NAVBAR */}
            <nav className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ${scrolled ? "shadow-lg shadow-blue-900/10 py-1" : "shadow-sm py-2"}`}>
                <div className="container-custom flex items-center justify-between">
                    {/* LOGO — uses company logo.jpeg */}
                    <a
                        href="#home"
                        onClick={(e) => handleNavClick(e, "#home")}
                        className="flex items-center gap-2.5 group"
                    >
                        <motion.img
                            src="/logo.jpeg"
                            alt="BharatSerra Corp Logo"
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shadow-md
                                       group-hover:shadow-lg group-hover:scale-105 transition-all duration-300"
                            whileHover={{ rotate: [0, -5, 5, 0] }}
                            transition={{ duration: 0.5 }}
                        />
                        <div>
                            <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-800 to-indigo-700 
                             bg-clip-text text-transparent leading-tight">
                                BharatSerra
                            </h1>
                            <p className="text-[10px] text-blue-400 uppercase tracking-[0.2em] leading-tight font-semibold">
                                Corp
                            </p>
                        </div>
                    </a>

                    {/* DESKTOP NAV */}
                    <div className="hidden md:flex items-center gap-1">
                        {NAV_LINKS.map((link) => {
                            const isActive = activeSection === link.href.replace("#", "");
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`relative px-4 py-2 rounded-lg text-sm font-medium 
                                        transition-all duration-200 group
                                        ${isActive
                                            ? "text-blue-700 bg-blue-50"
                                            : "text-gray-600 hover:text-blue-700 hover:bg-blue-50"
                                        }`}
                                >
                                    {link.label}
                                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 
                                        bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full
                                        transition-all duration-300
                                        ${isActive ? "w-3/4" : "w-0 group-hover:w-3/4"}`} />
                                </a>
                            );
                        })}

                        <a
                            href="https://wa.me/919979977744?text=Hi%2C%20I%27m%20interested%20in%20renting%20equipment%20from%20BharatSerra%20Corp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-3 flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 
                         text-white px-5 py-2.5 rounded-xl text-sm font-semibold 
                         hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5
                         transition-all duration-300 active:scale-95"
                        >
                            <FaWhatsapp className="text-lg" />
                            <span>WhatsApp</span>
                        </a>
                    </div>

                    {/* MOBILE HAMBURGER */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2.5 rounded-xl hover:bg-blue-50 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <HiX className="text-2xl text-blue-700" />
                        ) : (
                            <HiMenuAlt3 className="text-2xl text-gray-700" />
                        )}
                    </button>
                </div>

                {/* MOBILE MENU */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="md:hidden overflow-hidden border-t border-blue-100"
                        >
                            <div className="container-custom py-3 space-y-1">
                                {NAV_LINKS.map((link, i) => {
                                    const isActive = activeSection === link.href.replace("#", "");
                                    return (
                                        <motion.a
                                            key={link.href}
                                            href={link.href}
                                            onClick={(e) => handleNavClick(e, link.href)}
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: i * 0.05 }}
                                            className={`block px-4 py-2.5 rounded-xl font-medium transition-colors
                                                ${isActive
                                                    ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600"
                                                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                                                }`}
                                        >
                                            {link.label}
                                        </motion.a>
                                    );
                                })}

                                {/* Mobile contact info */}
                                <div className="pt-3 mt-2 border-t border-blue-100 space-y-1.5">
                                    <a href="tel:+23290800632" className="flex items-center gap-3 px-4 py-2 text-gray-600 text-sm">
                                        <FaPhone className="text-blue-500 flex-shrink-0" />
                                        <span>+232 90 800632</span>
                                    </a>
                                    <a href="tel:+919979977744" className="flex items-center gap-3 px-4 py-2 text-gray-600 text-sm">
                                        <FaPhone className="text-blue-500 flex-shrink-0" />
                                        <span>+91 99799 77744</span>
                                    </a>
                                    <a href="mailto:Bharatserracorp@gmail.com" className="flex items-center gap-3 px-4 py-2 text-gray-600 text-sm overflow-hidden">
                                        <FaEnvelope className="text-blue-500 flex-shrink-0" />
                                        <span className="truncate">Bharatserracorp@gmail.com</span>
                                    </a>
                                    <a
                                        href="https://wa.me/919979977744?text=Hi%2C%20I%27m%20interested%20in%20renting%20equipment%20from%20BharatSerra%20Corp"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 mx-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 
                               text-white rounded-xl justify-center font-semibold 
                               hover:shadow-lg transition-all"
                                    >
                                        <FaWhatsapp className="text-lg" />
                                        <span>Chat on WhatsApp</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
}
