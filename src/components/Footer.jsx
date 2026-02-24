/*
  📘 FOOTER — Compact for mobile, no excessive scroll
*/

import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaArrowUp } from "react-icons/fa";

const ALL_LINKS = [
    { label: "Home", to: "/" },
    { label: "Our Services", to: "/services" },
    { label: "Equipment", to: "/equipment" },
    { label: "Contact", to: "/contact" },
    { label: "Equipment Rental", to: "/equipment/equipment-rental" },
    { label: "Infrastructure", to: "/equipment/infrastructure" },
    { label: "Mining", to: "/equipment/mining" },
    { label: "Oil Supply", to: "/equipment/oil-supply" },
];

export default function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white">
            <div className="container-custom py-10">
                {/* Top row: Logo + WhatsApp */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-6 border-b border-blue-800/50">
                    <div className="flex items-center gap-3">
                        <img src="/logo.jpeg" alt="BharatSerra" className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-700" />
                        <div>
                            <h3 className="font-extrabold text-lg leading-tight">BharatSerra</h3>
                            <p className="text-[10px] text-blue-400 uppercase tracking-widest font-bold">Corp</p>
                        </div>
                    </div>
                    <a
                        href="https://wa.me/919979977744"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-fit"
                    >
                        <FaWhatsapp /> WhatsApp Us
                    </a>
                </div>

                {/* Links — single compact grid on mobile */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-2 mb-8">
                    {ALL_LINKS.map((link) => (
                        <Link
                            key={link.label}
                            to={link.to}
                            className="text-blue-200 hover:text-white transition-colors text-sm py-1 truncate"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>


            {/* Bottom bar */}
            <div className="border-t border-blue-800/50">
                <div className="container-custom py-3 flex items-center justify-between">
                    <p className="text-blue-400 text-xs">
                        © {new Date().getFullYear()} BharatSerra Corp.
                    </p>
                    <button onClick={scrollToTop} className="text-blue-400 hover:text-white text-xs transition-colors flex items-center gap-1">
                        <FaArrowUp className="text-[8px]" /> Top
                    </button>
                </div>
            </div>
        </footer>
    );
}
