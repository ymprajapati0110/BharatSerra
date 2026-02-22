/*
  📘 FOOTER — Clean Corporate Blue
*/

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaArrowUp } from "react-icons/fa";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-primary-900 text-white">
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="/logo.jpeg"
                                alt="BharatSerra Corp"
                                className="w-11 h-11 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="font-bold text-lg leading-tight">BharatSerra</h3>
                                <p className="text-xs text-primary-300 uppercase tracking-widest font-semibold">Corp</p>
                            </div>
                        </div>
                        <p className="text-primary-200 text-sm leading-relaxed mb-4">
                            Heavy Equipment Rental, Mining Services, Oil Supply & Infrastructure Development in Sierra Leone.
                        </p>
                        <a
                            href="https://wa.me/919979977744"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                        >
                            <FaWhatsapp className="text-lg" />
                            Chat on WhatsApp
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {[
                                { label: "Home", href: "#home" },
                                { label: "Our Services", href: "#services" },
                                { label: "Equipment", href: "#equipment" },
                                { label: "Contact", href: "#contact" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-primary-200 hover:text-white transition-colors text-sm">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Our Services</h4>
                        <ul className="space-y-2">
                            {["Equipment Rental", "Infrastructure Development", "Mining & Earthworks", "Oil Supply"].map((service) => (
                                <li key={service}>
                                    <span className="text-primary-200 text-sm">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="tel:+23290800632" className="flex items-center gap-3 text-primary-200 hover:text-white transition-colors text-sm">
                                    <FaPhone className="text-xs" />
                                    +232 90 800632
                                </a>
                            </li>
                            <li>
                                <a href="tel:+919979977744" className="flex items-center gap-3 text-primary-200 hover:text-white transition-colors text-sm">
                                    <FaPhone className="text-xs" />
                                    +91 99799 77744
                                </a>
                            </li>
                            <li>
                                <a href="mailto:Bharatserracorp@gmail.com" className="flex items-center gap-3 text-primary-200 hover:text-white transition-colors text-sm overflow-hidden">
                                    <FaEnvelope className="text-xs flex-shrink-0" />
                                    <span className="truncate">Bharatserracorp@gmail.com</span>
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-primary-200 text-sm">
                                <FaMapMarkerAlt className="text-xs" />
                                Sierra Leone & India
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-primary-800">
                <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-primary-300 text-sm">
                        © {new Date().getFullYear()} BharatSerra Corp. Proudly serving Sierra Leone.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-primary-300 hover:text-white text-sm transition-colors"
                    >
                        <FaArrowUp className="text-xs" />
                        Back to Top
                    </button>
                </div>
            </div>
        </footer>
    );
}
