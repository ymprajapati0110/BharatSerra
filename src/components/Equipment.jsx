/*
  📘 EQUIPMENT COMPONENT — UPGRADED
  Now with default Unsplash images when Google Sheets has no image URL.
  More colorful cards, better animations.
*/

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaWhatsapp, FaRuler, FaSearch } from "react-icons/fa";
import { fetchEquipment } from "../utils/fetchEquipment";

// Default images if Google Sheet doesn't have image URLs
const DEFAULT_IMAGES = {
    truck: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=600&q=80",
    excavator: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=600&q=80",
    default: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
};

function getImage(item) {
    if (item.image) return item.image;
    const cat = (item.category || "").toLowerCase();
    if (cat.includes("truck") || cat.includes("tipper")) return DEFAULT_IMAGES.truck;
    if (cat.includes("excavator")) return DEFAULT_IMAGES.excavator;
    return DEFAULT_IMAGES.default;
}

export default function Equipment() {
    const [equipment, setEquipment] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState("All");
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        async function loadData() {
            const data = await fetchEquipment();
            setEquipment(data);
            setLoading(false);
        }
        loadData();
    }, []);

    const categories = ["All", ...new Set(equipment.map((item) => item.category).filter(Boolean))];

    const filteredEquipment =
        activeFilter === "All"
            ? equipment
            : equipment.filter((item) => item.category === activeFilter);

    return (
        <section id="equipment" className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl mix-blend-multiply animate-pulse-slow" />
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl mix-blend-multiply animate-pulse-slow" />

            <div className="container-custom relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 
                       text-sm font-bold px-5 py-2 rounded-full mb-4"
                    >
                        🚛 Our Fleet
                    </motion.span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                        Heavy Equipment for{" "}
                        <span className="text-gradient">Every Project</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Browse our fleet of well-maintained trucks and excavators.
                        Pricing is flexible — daily, weekly, or monthly rentals available.
                    </p>
                </motion.div>

                {/* Filter Tabs — now more colorful */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                ${activeFilter === cat
                                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                                    : "bg-white text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 border border-gray-200 hover:border-blue-300"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Loading Skeletons — now with shimmer animation */}
                {loading && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                            <div key={n} className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
                                <div className="h-52 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-2xl mb-4 animate-pulse" />
                                <div className="h-6 bg-gray-200 rounded-lg w-3/4 mb-3 animate-pulse" />
                                <div className="h-4 bg-gray-100 rounded-lg w-1/2 mb-3 animate-pulse" />
                                <div className="h-4 bg-gray-100 rounded-lg w-full mb-4 animate-pulse" />
                                <div className="flex gap-2">
                                    <div className="h-12 bg-blue-50 rounded-xl flex-1 animate-pulse" />
                                    <div className="h-12 bg-blue-50 rounded-xl flex-1 animate-pulse" />
                                    <div className="h-12 bg-blue-50 rounded-xl flex-1 animate-pulse" />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Equipment Grid */}
                {!loading && (
                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredEquipment.map((item, index) => (
                                <motion.div
                                    key={item.id || item.name || index}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    onClick={() => setSelectedItem(item)}
                                    className="group bg-white rounded-3xl overflow-hidden 
                             shadow-sm hover:shadow-2xl hover:shadow-blue-900/10
                             transition-all duration-500 cursor-pointer
                             border border-gray-100 hover:border-blue-200
                             hover:-translate-y-2"
                                >
                                    {/* Image */}
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            src={getImage(item)}
                                            alt={item.name}
                                            className="w-full h-full object-cover group-hover:scale-110 
                                 transition-transform duration-700"
                                            loading="lazy"
                                        />
                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        {/* Category badge */}
                                        <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-indigo-600 
                                     text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                                            {item.category || "Equipment"}
                                        </span>

                                        {/* Availability badge */}
                                        {String(item.available).toLowerCase() === "yes" && (
                                            <span className="absolute top-4 right-4 bg-gradient-to-r from-emerald-400 to-green-500 
                                       text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                                                Available
                                            </span>
                                        )}

                                        {/* View details overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span className="bg-white/90 backdrop-blur-sm text-blue-700 font-semibold px-5 py-2.5 rounded-xl shadow-lg flex items-center gap-2">
                                                <FaSearch className="text-sm" />
                                                View Details
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">
                                            {item.name}
                                        </h3>
                                        {item.capacity && (
                                            <p className="text-sm text-blue-500 font-medium mb-3">⚙️ {item.capacity}</p>
                                        )}
                                        <p className="text-sm text-gray-500 line-clamp-2 mb-5">
                                            {item.description || "Heavy-duty equipment for construction and mining."}
                                        </p>

                                        {/* Price Grid */}
                                        <div className="grid grid-cols-3 gap-1.5">
                                            <div className="bg-blue-50 rounded-lg p-2 text-center hover:bg-blue-100 transition-colors min-w-0">
                                                <p className="text-[9px] text-gray-500 uppercase font-semibold">Daily</p>
                                                <p className="text-sm font-bold text-blue-700 truncate">${item.priceDaily || "—"}</p>
                                            </div>
                                            <div className="bg-emerald-50 rounded-lg p-2 text-center hover:bg-emerald-100 transition-colors min-w-0">
                                                <p className="text-[9px] text-gray-500 uppercase font-semibold">Weekly</p>
                                                <p className="text-sm font-bold text-emerald-700 truncate">${item.priceWeekly || "—"}</p>
                                            </div>
                                            <div className="bg-amber-50 rounded-lg p-2 text-center hover:bg-amber-100 transition-colors min-w-0">
                                                <p className="text-[9px] text-gray-500 uppercase font-semibold">Monthly</p>
                                                <p className="text-sm font-bold text-amber-700 truncate">${item.priceMonthly || "—"}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}

                {/* No equipment message */}
                {!loading && filteredEquipment.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16"
                    >
                        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaSearch className="text-3xl text-blue-300" />
                        </div>
                        <p className="text-lg text-gray-500 font-medium">No equipment found in this category.</p>
                        <button
                            onClick={() => setActiveFilter("All")}
                            className="mt-4 text-blue-600 font-semibold hover:underline"
                        >
                            Show all equipment
                        </button>
                    </motion.div>
                )}

                {/* DETAIL MODAL */}
                <AnimatePresence>
                    {selectedItem && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                            onClick={() => setSelectedItem(null)}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                                transition={{ type: "spring", duration: 0.5 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                            >
                                {/* Header Image */}
                                <div className="relative">
                                    <img
                                        src={getImage(selectedItem)}
                                        alt={selectedItem.name}
                                        className="w-full h-72 object-cover rounded-t-3xl"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-3xl" />
                                    <button
                                        onClick={() => setSelectedItem(null)}
                                        className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full 
                               hover:bg-white transition-colors shadow-lg"
                                    >
                                        <FaTimes className="text-gray-700" />
                                    </button>
                                    <div className="absolute bottom-4 left-6">
                                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                                            {selectedItem.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 sm:p-8">
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="text-2xl font-extrabold text-gray-900">
                                            {selectedItem.name}
                                        </h3>
                                        {String(selectedItem.available).toLowerCase() === "yes" ? (
                                            <span className="bg-emerald-100 text-emerald-700 text-sm font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                                                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                                Available
                                            </span>
                                        ) : (
                                            <span className="bg-red-100 text-red-700 text-sm font-bold px-3 py-1.5 rounded-full">
                                                Unavailable
                                            </span>
                                        )}
                                    </div>

                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {selectedItem.description}
                                    </p>

                                    {selectedItem.capacity && (
                                        <div className="mb-6 bg-blue-50 rounded-xl p-4 border border-blue-100">
                                            <p className="text-sm text-blue-500 font-semibold mb-1">Capacity</p>
                                            <p className="text-gray-800 font-bold text-lg">{selectedItem.capacity}</p>
                                        </div>
                                    )}

                                    {/* Pricing Table */}
                                    <div className="mb-8">
                                        <h4 className="font-bold text-gray-900 mb-3 text-lg">Rental Pricing</h4>
                                        <div className="grid grid-cols-3 gap-2 sm:gap-3">
                                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center border border-blue-200 min-w-0">
                                                <p className="text-xs text-blue-500 mb-1 font-semibold">Daily</p>
                                                <p className="text-xl sm:text-3xl font-extrabold text-blue-700 truncate">
                                                    ${selectedItem.priceDaily || "—"}
                                                </p>
                                            </div>
                                            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center border border-emerald-200 relative min-w-0">
                                                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full">
                                                    POPULAR
                                                </span>
                                                <p className="text-xs text-emerald-500 mb-1 font-semibold">Weekly</p>
                                                <p className="text-xl sm:text-3xl font-extrabold text-emerald-700 truncate">
                                                    ${selectedItem.priceWeekly || "—"}
                                                </p>
                                            </div>
                                            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center border border-amber-200 min-w-0">
                                                <p className="text-xs text-amber-500 mb-1 font-semibold">Monthly</p>
                                                <p className="text-xl sm:text-3xl font-extrabold text-amber-700 truncate">
                                                    ${selectedItem.priceMonthly || "—"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <a
                                        href={`https://wa.me/919979977744?text=Hi%2C%20I%27m%20interested%20in%20renting%20${encodeURIComponent(selectedItem.name)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-3 w-full 
                               bg-gradient-to-r from-green-500 to-emerald-600 
                               hover:from-green-600 hover:to-emerald-700
                               text-white font-bold py-4 rounded-2xl 
                               transition-all duration-300 text-lg
                               hover:shadow-xl hover:shadow-green-500/30"
                                    >
                                        <FaWhatsapp className="text-2xl" />
                                        Inquire on WhatsApp
                                    </a>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
