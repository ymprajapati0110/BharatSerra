/*
  📘 NAVBAR — Blue top bar + clean multipage navigation
*/

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const NAV_LINKS = [
    { label: "Home", to: "/" },
    { label: "Our Services", to: "/services" },
    { label: "Equipment", to: "/equipment" },
    { label: "Contact", to: "/contact" },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    const isActive = (to) => {
        if (to === "/") return location.pathname === "/";
        return location.pathname.startsWith(to);
    };

    return (
        <>
            {/* TOP INFO BAR — dark blue */}
            <div className="hidden md:block bg-gradient-to-r from-blue-950 to-blue-900 text-white text-[13px]">
                <div className="container-custom flex justify-between items-center py-2">
                    <div className="flex items-center gap-6">
                        <a href="tel:+23290800632" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                            <FaPhone className="text-[10px] text-blue-400" />
                            +232 90 800632
                        </a>
                        <span className="w-px h-3 bg-blue-700" />
                        <a href="tel:+919979977744" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                            <FaPhone className="text-[10px] text-blue-400" />
                            +91 99799 77744
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="mailto:Bharatserracorp@gmail.com" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                            <FaEnvelope className="text-[10px] text-blue-400" />
                            Bharatserracorp@gmail.com
                        </a>
                    </div>
                </div>
            </div>

            {/* MAIN NAVBAR */}
            <nav className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? "shadow-lg py-1" : "shadow py-2.5"}`}>
                <div className="container-custom flex items-center justify-between">
                    {/* LOGO */}
                    <Link to="/" className="flex items-center gap-2.5 group">
                        <img
                            src="/logo.jpeg"
                            alt="BharatSerra Corp"
                            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover ring-2 ring-blue-100 group-hover:ring-blue-300 transition-all"
                        />
                        <div>
                            <h1 className="text-lg sm:text-xl font-extrabold text-blue-900 leading-tight tracking-tight">
                                BharatSerra
                            </h1>
                            <p className="text-[10px] text-blue-500 uppercase tracking-[0.25em] leading-tight font-bold">
                                Corp
                            </p>
                        </div>
                    </Link>

                    {/* DESKTOP NAV */}
                    <div className="hidden md:flex items-center gap-1">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`relative px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200
                                    ${isActive(link.to)
                                        ? "text-blue-700 bg-blue-50"
                                        : "text-gray-600 hover:text-blue-700 hover:bg-blue-50/50"
                                    }`}
                            >
                                {link.label}
                                {isActive(link.to) && (
                                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-8 bg-blue-600 rounded-full" />
                                )}
                            </Link>
                        ))}

                        <a
                            href="https://wa.me/919979977744?text=Hi%2C%20I%27m%20interested%20in%20renting%20equipment"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-3 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-sm"
                        >
                            <FaWhatsapp className="text-base" />
                            WhatsApp
                        </a>
                    </div>

                    {/* HAMBURGER */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
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
                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-gray-100 bg-white">
                        <div className="container-custom py-3 space-y-1">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className={`block px-4 py-3 rounded-lg font-semibold transition-colors
                                        ${isActive(link.to)
                                            ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600"
                                            : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <div className="pt-3 mt-2 border-t border-gray-100 space-y-2">
                                <a href="tel:+23290800632" className="flex items-center gap-3 px-4 py-2 text-gray-600 text-sm">
                                    <FaPhone className="text-blue-500 text-xs" /> +232 90 800632
                                </a>
                                <a href="tel:+919979977744" className="flex items-center gap-3 px-4 py-2 text-gray-600 text-sm">
                                    <FaPhone className="text-blue-500 text-xs" /> +91 99799 77744
                                </a>
                                <a
                                    href="https://wa.me/919979977744"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 mx-4 py-3 bg-green-500 text-white rounded-lg justify-center font-semibold text-sm"
                                >
                                    <FaWhatsapp /> Chat on WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
