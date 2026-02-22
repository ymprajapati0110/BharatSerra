/*
  📘 FLEET PAGE — Full Equipment Listing
  Separate page (/fleet) with all equipment + India section
*/

import { useState, useEffect } from "react";
import { FaWhatsapp, FaArrowLeft, FaGlobeAsia } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { fetchEquipment } from "../utils/fetchEquipment";

const DEFAULT_IMAGES = {
    truck: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=600&q=80",
    excavator: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=600&q=80",
    default: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
};

function getImage(item) {
    if (item.image) {
        if (item.image.includes("drive.google.com") || item.image.includes("docs.google.com")) {
            const idMatch = item.image.match(/\/d\/([-\w]{25,})/) || item.image.match(/id=([-\w]{25,})/);
            if (idMatch && idMatch[1]) {
                return `https://drive.google.com/thumbnail?id=${idMatch[1]}&sz=w1000`;
            }
        } else {
            return item.image;
        }
    }
    const cat = (item.category || "").toLowerCase();
    if (cat.includes("truck") || cat.includes("tipper")) return DEFAULT_IMAGES.truck;
    if (cat.includes("excavator")) return DEFAULT_IMAGES.excavator;
    return DEFAULT_IMAGES.default;
}

export default function FleetPage() {
    const [equipment, setEquipment] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState("All");
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        async function loadData() {
            const data = await fetchEquipment();
            const dataWithIds = data.map((item, index) => ({
                ...item,
                id: item.id || `eq-${index}`
            }));
            setEquipment(dataWithIds);
            setLoading(false);
        }
        loadData();
    }, []);

    const categories = ["All", ...new Set(equipment.map((item) => item.category).filter(Boolean))];
    const filteredEquipment =
        activeFilter === "All" ? equipment : equipment.filter((item) => item.category === activeFilter);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Page Header */}
            <div className="bg-primary-900 text-white py-16">
                <div className="container-custom">
                    <button
                        onClick={() => navigate("/")}
                        className="flex items-center gap-2 text-primary-200 hover:text-white mb-6 transition-colors"
                    >
                        <FaArrowLeft /> Back to Home
                    </button>
                    <h1 className="text-3xl sm:text-4xl font-bold mb-3">Our Complete Fleet</h1>
                    <p className="text-primary-200 max-w-xl">
                        Browse our full range of heavy equipment available for rental in Sierra Leone.
                    </p>
                </div>
            </div>

            <div className="container-custom py-10">
                {/* Category Filters */}
                <div className="flex flex-wrap gap-3 mb-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all
                                ${activeFilter === cat
                                    ? "bg-primary-600 text-white"
                                    : "bg-white text-gray-700 border border-gray-200 hover:border-primary-300 hover:text-primary-600"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Loading */}
                {loading && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                            <div key={n} className="h-72 bg-gray-100 rounded-xl animate-pulse" />
                        ))}
                    </div>
                )}

                {/* Equipment Grid */}
                {!loading && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredEquipment.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                            >
                                {/* Image */}
                                <div className="relative h-52 bg-gray-100">
                                    <img
                                        src={getImage(item)}
                                        alt={item.name}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            const cat = (item.category || "").toLowerCase();
                                            if (cat.includes("truck") || cat.includes("tipper")) e.target.src = DEFAULT_IMAGES.truck;
                                            else if (cat.includes("excavator")) e.target.src = DEFAULT_IMAGES.excavator;
                                            else e.target.src = DEFAULT_IMAGES.default;
                                        }}
                                        className="w-full h-full object-cover"
                                    />
                                    <span className="absolute top-3 left-3 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        {item.category}
                                    </span>
                                    {item.available && item.available.toLowerCase() === "yes" && (
                                        <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                            Available
                                        </span>
                                    )}
                                </div>

                                {/* Info */}
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.name}</h3>
                                    {item.description && (
                                        <p className="text-sm text-gray-500 mb-3">{item.description}</p>
                                    )}

                                    {/* Specs */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {item.capacity && (
                                            <span className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded font-medium">
                                                {item.capacity}
                                            </span>
                                        )}
                                        {item.specs && (
                                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded font-medium">
                                                {item.specs}
                                            </span>
                                        )}
                                    </div>

                                    {/* Pricing */}
                                    <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                                        <div className="bg-gray-50 rounded-lg p-2">
                                            <p className="text-xs text-gray-400 font-semibold">Daily</p>
                                            <p className="text-sm font-bold text-gray-900">${item.priceDaily}</p>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-2">
                                            <p className="text-xs text-gray-400 font-semibold">Weekly</p>
                                            <p className="text-sm font-bold text-gray-900">${item.priceWeekly}</p>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-2">
                                            <p className="text-xs text-gray-400 font-semibold">Monthly</p>
                                            <p className="text-sm font-bold text-gray-900">${item.priceMonthly}</p>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <a
                                        href={`https://wa.me/919979977744?text=Hi%2C%20I%27m%20interested%20in%20renting%20${encodeURIComponent(item.name)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm"
                                    >
                                        <FaWhatsapp className="inline mr-2" /> Book via WhatsApp
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* India Operations Section */}
                <div className="mt-16 bg-primary-900 text-white rounded-xl p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-shrink-0">
                            <div className="bg-primary-800 p-6 rounded-xl">
                                <FaGlobeAsia className="text-5xl text-accent" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-3">Operations in India</h2>
                            <p className="text-primary-200 leading-relaxed">
                                BharatSerra Corp is headquartered in India with a fleet of over <strong className="text-white">100+ equipment</strong> serving
                                mining and construction projects across the country. We import and customize
                                machinery as per your specific requirements — delivered within 2 months.
                            </p>
                            <a
                                href="https://wa.me/919979977744?text=Hi%2C%20I%27m%20interested%20in%20equipment%20from%20your%20India%20operations"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-gray-900 font-semibold px-6 py-3 rounded-lg mt-6 transition-colors"
                            >
                                <FaWhatsapp className="text-lg" /> Enquire About India Fleet
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
