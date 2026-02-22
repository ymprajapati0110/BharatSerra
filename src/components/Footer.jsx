/*
  📘 FOOTER — Corporate blue gradient with navigation links
*/

import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaArrowUp, FaArrowRight } from "react-icons/fa";

export default function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white">
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <img src="/logo.jpeg" alt="BharatSerra" className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-700" />
                            <div>
                                <h3 className="font-extrabold text-lg leading-tight">BharatSerra</h3>
                                <p className="text-[10px] text-blue-400 uppercase tracking-widest font-bold">Corp</p>
                            </div>
                        </div>
                        <p className="text-blue-200 text-sm leading-relaxed mb-4">
                            Equipment Rental, Mining Services, Oil Supply & Infrastructure Development in Sierra Leone.
                        </p>
                        <a
                            href="https://wa.me/919979977744"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                        >
                            <FaWhatsapp /> WhatsApp Us
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider text-blue-300 mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {[
                                { label: "Home", to: "/" },
                                { label: "Our Services", to: "/services" },
                                { label: "Equipment", to: "/equipment" },
                                { label: "Contact", to: "/contact" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link to={link.to} className="text-blue-200 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                                        <FaArrowRight className="text-[8px] text-blue-500 group-hover:text-orange-400 transition-colors" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider text-blue-300 mb-4">Our Services</h4>
                        <ul className="space-y-2">
                            {[
                                { label: "Equipment Rental", to: "/equipment/equipment-rental" },
                                { label: "Infrastructure", to: "/equipment/infrastructure" },
                                { label: "Mining & Earthworks", to: "/equipment/mining" },
                                { label: "Oil Supply", to: "/equipment/oil-supply" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link to={item.to} className="text-blue-200 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                                        <FaArrowRight className="text-[8px] text-blue-500 group-hover:text-orange-400 transition-colors" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider text-blue-300 mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="tel:+23290800632" className="flex items-center gap-2.5 text-blue-200 hover:text-white transition-colors text-sm">
                                    <div className="w-7 h-7 bg-blue-800 rounded flex items-center justify-center flex-shrink-0">
                                        <FaPhone className="text-[10px] text-blue-400" />
                                    </div>
                                    +232 90 800632
                                </a>
                            </li>
                            <li>
                                <a href="tel:+919979977744" className="flex items-center gap-2.5 text-blue-200 hover:text-white transition-colors text-sm">
                                    <div className="w-7 h-7 bg-blue-800 rounded flex items-center justify-center flex-shrink-0">
                                        <FaPhone className="text-[10px] text-blue-400" />
                                    </div>
                                    +91 99799 77744
                                </a>
                            </li>
                            <li>
                                <a href="mailto:Bharatserracorp@gmail.com" className="flex items-center gap-2.5 text-blue-200 hover:text-white transition-colors text-sm overflow-hidden">
                                    <div className="w-7 h-7 bg-blue-800 rounded flex items-center justify-center flex-shrink-0">
                                        <FaEnvelope className="text-[10px] text-blue-400" />
                                    </div>
                                    <span className="truncate">Bharatserracorp@gmail.com</span>
                                </a>
                            </li>
                            <li className="flex items-center gap-2.5 text-blue-200 text-sm">
                                <div className="w-7 h-7 bg-blue-800 rounded flex items-center justify-center flex-shrink-0">
                                    <FaMapMarkerAlt className="text-[10px] text-blue-400" />
                                </div>
                                Sierra Leone & India
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-blue-800/50">
                <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
                    <p className="text-blue-400 text-xs">
                        © {new Date().getFullYear()} BharatSerra Corp. Proudly serving Sierra Leone.
                    </p>
                    <button onClick={scrollToTop} className="flex items-center gap-2 text-blue-400 hover:text-white text-xs transition-colors group">
                        <FaArrowUp className="text-[8px] group-hover:text-orange-400 transition-colors" /> Back to Top
                    </button>
                </div>
            </div>
        </footer>
    );
}
