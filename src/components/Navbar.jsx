/*
  📘 NAVBAR — Clean Corporate Navigation
  4 items: Home, Our Services, Equipment, Contact
*/

import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "Our Services", href: "#services" },
    { label: "Equipment", href: "#equipment" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scrollspy (only on landing page)
    useEffect(() => {
        if (location.pathname !== "/") return;
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
    }, [location.pathname]);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        setMobileMenuOpen(false);

        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    const offset = 80;
                    const top = element.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top, behavior: "smooth" });
                }
            }, 300);
        } else {
            const element = document.getElementById(targetId);
            if (element) {
                const offset = 80;
                const top = element.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: "smooth" });
            }
        }
    };

    return (
        <>
            {/* TOP INFO BAR */}
            <div className="hidden md:block bg-primary-900 text-white text-sm">
                <div className="container-custom flex justify-between items-center py-2">
                    <div className="flex items-center gap-6">
                        <a href="tel:+23290800632" className="flex items-center gap-2 hover:text-primary-200 transition-colors">
                            <FaPhone className="text-xs text-primary-300" />
                            <span>+232 90 800632</span>
                        </a>
                        <span className="w-1 h-1 bg-primary-400 rounded-full"></span>
                        <a href="tel:+919979977744" className="flex items-center gap-2 hover:text-primary-200 transition-colors">
                            <FaPhone className="text-xs text-primary-300" />
                            <span>+91 99799 77744</span>
                        </a>
                    </div>
                    <a href="mailto:Bharatserracorp@gmail.com" className="flex items-center gap-2 hover:text-primary-200 transition-colors">
                        <FaEnvelope className="text-xs text-primary-300" />
                        <span>Bharatserracorp@gmail.com</span>
                    </a>
                </div>
            </div>

            {/* MAIN NAVBAR */}
            <nav className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? "shadow-md py-1" : "shadow-sm py-2"}`}>
                <div className="container-custom flex items-center justify-between">
                    {/* LOGO */}
                    <a
                        href="#home"
                        onClick={(e) => handleNavClick(e, "#home")}
                        className="flex items-center gap-2.5"
                    >
                        <img
                            src="/logo.jpeg"
                            alt="BharatSerra Corp Logo"
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shadow-sm"
                        />
                        <div>
                            <h1 className="text-lg sm:text-xl font-bold text-primary-900 leading-tight">
                                BharatSerra
                            </h1>
                            <p className="text-[10px] text-primary-500 uppercase tracking-[0.2em] leading-tight font-semibold">
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
                                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                                        ${isActive
                                            ? "text-primary-700 bg-primary-50"
                                            : "text-gray-600 hover:text-primary-700 hover:bg-primary-50"
                                        }`}
                                >
                                    {link.label}
                                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 
                                        bg-primary-600 rounded-full transition-all duration-300
                                        ${isActive ? "w-3/4" : "w-0 group-hover:w-3/4"}`} />
                                </a>
                            );
                        })}

                        <a
                            href="https://wa.me/919979977744?text=Hi%2C%20I%27m%20interested%20in%20renting%20equipment%20from%20BharatSerra%20Corp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-3 flex items-center gap-2 bg-green-500 hover:bg-green-600
                         text-white px-5 py-2.5 rounded-lg text-sm font-semibold 
                         transition-all duration-300"
                        >
                            <FaWhatsapp className="text-lg" />
                            <span>WhatsApp</span>
                        </a>
                    </div>

                    {/* MOBILE HAMBURGER */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2.5 rounded-lg hover:bg-primary-50 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <HiX className="text-2xl text-primary-700" />
                        ) : (
                            <HiMenuAlt3 className="text-2xl text-gray-700" />
                        )}
                    </button>
                </div>

                {/* MOBILE MENU */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-gray-100">
                        <div className="container-custom py-3 space-y-1">
                            {NAV_LINKS.map((link) => {
                                const isActive = activeSection === link.href.replace("#", "");
                                return (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className={`block px-4 py-2.5 rounded-lg font-medium transition-colors
                                            ${isActive
                                                ? "bg-primary-50 text-primary-700 border-l-4 border-primary-600"
                                                : "text-gray-700 hover:bg-primary-50 hover:text-primary-700"
                                            }`}
                                    >
                                        {link.label}
                                    </a>
                                );
                            })}

                            {/* Mobile contact info */}
                            <div className="pt-3 mt-2 border-t border-gray-100 space-y-1.5">
                                <a href="tel:+23290800632" className="flex items-center gap-3 px-4 py-2 text-gray-600 text-sm">
                                    <FaPhone className="text-primary-500" />
                                    <span>+232 90 800632</span>
                                </a>
                                <a href="tel:+919979977744" className="flex items-center gap-3 px-4 py-2 text-gray-600 text-sm">
                                    <FaPhone className="text-primary-500" />
                                    <span>+91 99799 77744</span>
                                </a>
                                <a
                                    href="https://wa.me/919979977744"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 mx-4 py-3 bg-green-500 text-white rounded-lg justify-center font-semibold"
                                >
                                    <FaWhatsapp className="text-lg" />
                                    <span>Chat on WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
