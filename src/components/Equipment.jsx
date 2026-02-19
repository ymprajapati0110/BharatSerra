/*
  📘 EQUIPMENT COMPONENT — UPGRADED
  Now with "Hydraulic" expanding cards.
  Clicking a card "splits" it to reveal details inside.
*/

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaSearch, FaChevronDown, FaTimes } from "react-icons/fa";
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
    const [expandedId, setExpandedId] = useState(null); // Track expanding card

    useEffect(() => {
        async function loadData() {
            const data = await fetchEquipment();
            // Assign unique ID if missing
            const dataWithIds = data.map((item, index) => ({
                ...item,
                id: item.id || `eq-${index}`
            }));
            setEquipment(dataWithIds);
            setLoading(false);
        }
        loadData();
    }, []);

    const toggleExpand = (id) => {
        if (expandedId === id) {
            setExpandedId(null);
        } else {
            setExpandedId(id);
        }
    };

    const categories = ["All", ...new Set(equipment.map((item) => item.category).filter(Boolean))];

    const filteredEquipment =
        activeFilter === "All"
            ? equipment
            : equipment.filter((item) => item.category === activeFilter);

    return (
        <section id="equipment" className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl mix-blend-multiply animate-pulse-slow pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl mix-blend-multiply animate-pulse-slow pointer-events-none" />

            <div className="container-custom relative z-10">
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
                        Tap any vehicle to view technical specifications and rental rates.
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <motion.div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setActiveFilter(cat);
                                setExpandedId(null); // Close expando when filtering
                            }}
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

                {/* Equipment Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredEquipment.map((item) => {
                            const isExpanded = expandedId === item.id;

                            return (
                                <motion.div
                                    layout
                                    key={item.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    onClick={() => toggleExpand(item.id)}
                                    className={`group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl 
                                     border border-gray-100 cursor-pointer scroll-mt-32 relative
                                     ${isExpanded ? 'ring-2 ring-blue-500 shadow-2xl z-20' : 'hover:-translate-y-2'}`}
                                >
                                    {/* --- TOP BLOCK: Image & Badge --- */}
                                    <motion.div layout="position" className="relative h-56 overflow-hidden bg-gray-100">
                                        <img
                                            src={getImage(item)}
                                            alt={item.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />

                                        <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                                            {item.category}
                                        </span>

                                        {/* Expand/Collapse Indicator */}
                                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                                            {isExpanded ? <FaTimes /> : <FaChevronDown />}
                                        </div>
                                    </motion.div>

                                    {/* --- MIDDLE BLOCK: Hidden Details (The "Inside") --- */}
                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="bg-slate-50 border-y border-gray-100 overflow-hidden"
                                            >
                                                <div className="p-6 space-y-4">
                                                    {/* Description */}
                                                    <p className="text-gray-600 text-sm leading-relaxed">
                                                        {item.description || "Powerful equipment ready for your toughest projects. Contact us for availability."}
                                                    </p>

                                                    {/* Specs */}
                                                    {item.capacity && (
                                                        <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-blue-100">
                                                            <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                                                                ⚙️
                                                            </div>
                                                            <div>
                                                                <p className="text-xs text-blue-500 font-bold uppercase">Capacity</p>
                                                                <p className="text-gray-900 font-bold">{item.capacity}</p>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Full Pricing */}
                                                    <div className="grid grid-cols-3 gap-2">
                                                        <div className="text-center p-2 bg-white rounded-lg border border-gray-100">
                                                            <p className="text-[10px] text-gray-400 font-bold uppercase">Weekly</p>
                                                            <p className="text-sm font-bold text-gray-900">${item.priceWeekly}</p>
                                                        </div>
                                                        <div className="text-center p-2 bg-white rounded-lg border border-gray-100">
                                                            <p className="text-[10px] text-gray-400 font-bold uppercase">Monthly</p>
                                                            <p className="text-sm font-bold text-gray-900">${item.priceMonthly}</p>
                                                        </div>
                                                    </div>

                                                    {/* Action */}
                                                    <a
                                                        href={`https://wa.me/919979977744?text=Hi%2C%20I%27m%20interested%20in%20renting%20${encodeURIComponent(item.name)}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-colors text-sm"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <FaWhatsapp className="inline mr-2" /> Book via WhatsApp
                                                    </a>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* --- BOTTOM BLOCK: Title & Preview --- */}
                                    <motion.div layout="position" className="p-6 bg-white relative z-10">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                                            {item.name}
                                        </h3>
                                        {!isExpanded && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="flex items-center justify-between mt-2"
                                            >
                                                <p className="text-blue-600 font-bold">${item.priceDaily}<span className="text-xs text-gray-400 font-normal">/day</span></p>
                                                <span className="text-xs text-gray-400 flex items-center gap-1">
                                                    <FaSearch className="text-[10px]" /> Tap for details
                                                </span>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* Loading State */}
                {loading && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                        {[1, 2, 3].map((n) => (
                            <div key={n} className="h-64 bg-gray-100 rounded-3xl animate-pulse" />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
