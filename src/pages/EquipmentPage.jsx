/*
  📘 EQUIPMENT PAGE — Category-filtered equipment with blue theme
*/

import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaArrowLeft, FaTruck, FaRoad, FaHardHat, FaOilCan, FaGlobeAsia, FaFilter } from "react-icons/fa";
import { fetchEquipment } from "../utils/fetchEquipment";

const DEFAULT_IMAGES = {
    truck: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    excavator: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=600&q=80",
    default: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
};

const CATEGORY_MAP = {
    "equipment-rental": { label: "Equipment Rental", icon: FaTruck, keywords: ["truck", "tipper", "excavator", "vehicle", "rental"] },
    "infrastructure": { label: "Infrastructure Development", icon: FaRoad, keywords: ["road", "bridge", "culvert", "canal", "infrastructure"] },
    "mining": { label: "Mining & Earthworks", icon: FaHardHat, keywords: ["mining", "earth", "site", "haulage", "clearing"] },
    "oil-supply": { label: "Oil Supply", icon: FaOilCan, keywords: ["oil", "lubricant", "hydraulic", "gear", "engine"] },
};

function getImage(item) {
    if (item.image) {
        if (item.image.includes("drive.google.com") || item.image.includes("docs.google.com")) {
            const idMatch = item.image.match(/\/d\/([-\w]{25,})/) || item.image.match(/id=([-\w]{25,})/);
            if (idMatch && idMatch[1]) {
                return `https://drive.google.com/thumbnail?id=${idMatch[1]}&sz=w1000`;
            }
        }
        return item.image;
    }
    const cat = (item.category || "").toLowerCase();
    if (cat.includes("truck") || cat.includes("tipper")) return DEFAULT_IMAGES.truck;
    if (cat.includes("excavator")) return DEFAULT_IMAGES.excavator;
    return DEFAULT_IMAGES.default;
}

export default function EquipmentPage() {
    const [equipment, setEquipment] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState("all");
    const { category } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        if (category && CATEGORY_MAP[category]) {
            setActiveFilter(category);
        }
    }, [category]);

    useEffect(() => {
        async function loadData() {
            const data = await fetchEquipment();
            setEquipment(data.map((item, index) => ({ ...item, id: item.id || `eq-${index}` })));
            setLoading(false);
        }
        loadData();
    }, []);

    const filterEquipment = (items, filterKey) => {
        if (filterKey === "all") return items;
        const cat = CATEGORY_MAP[filterKey];
        if (!cat) return items;
        return items.filter((item) => {
            const text = `${item.category} ${item.name} ${item.description}`.toLowerCase();
            return cat.keywords.some((kw) => text.includes(kw));
        });
    };

    const filteredEquipment = filterEquipment(equipment, activeFilter);

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Page Banner */}
            <div className="page-banner py-16 pb-12">
                <div className="container-custom relative z-10">
                    <button
                        onClick={() => navigate("/")}
                        className="flex items-center gap-2 text-blue-200 hover:text-white mb-4 transition-colors text-sm"
                    >
                        <FaArrowLeft className="text-xs" /> Back to Home
                    </button>
                    <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                        {activeFilter !== "all" && CATEGORY_MAP[activeFilter]
                            ? CATEGORY_MAP[activeFilter].label
                            : "Our Equipment"
                        }
                    </h1>
                    <p className="text-blue-200 max-w-xl">
                        Heavy-duty machinery ready for your projects in Sierra Leone.
                    </p>
                </div>
            </div>

            <div className="container-custom py-8">
                {/* Filter Tabs */}
                <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 mb-8">
                    <div className="flex items-center gap-2 mb-2 text-xs text-gray-400 font-semibold uppercase tracking-wider px-1">
                        <FaFilter /> Filter by Service
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {[
                            { key: "all", label: "All Equipment", icon: null },
                            { key: "equipment-rental", label: "Equipment Rental", icon: FaTruck },
                            { key: "infrastructure", label: "Infrastructure", icon: FaRoad },
                            { key: "mining", label: "Mining", icon: FaHardHat },
                            { key: "oil-supply", label: "Oil Supply", icon: FaOilCan },
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveFilter(tab.key)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all
                                    ${activeFilter === tab.key
                                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                                        : "bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                                    }`}
                            >
                                {tab.icon && <tab.icon className="text-xs" />}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Results count */}
                {!loading && (
                    <p className="text-sm text-gray-500 mb-4">
                        Showing <strong className="text-gray-800">{filteredEquipment.length}</strong> equipment
                        {activeFilter !== "all" && ` in ${CATEGORY_MAP[activeFilter]?.label}`}
                    </p>
                )}

                {/* Loading Skeleton */}
                {loading && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                            <div key={n} className="bg-white rounded-xl overflow-hidden border border-gray-100">
                                <div className="h-44 bg-gray-200 animate-pulse" />
                                <div className="p-4 space-y-3">
                                    <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
                                    <div className="h-3 bg-gray-100 rounded animate-pulse w-1/2" />
                                    <div className="h-8 bg-gray-100 rounded animate-pulse" />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Equipment Grid */}
                {!loading && filteredEquipment.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredEquipment.map((item) => (
                            <div key={item.id} className="card overflow-hidden group">
                                {/* Image */}
                                <div className="relative h-40 sm:h-44 bg-gray-50 overflow-hidden">
                                    <img
                                        src={getImage(item)}
                                        alt={item.name}
                                        onError={(e) => { e.target.onerror = null; e.target.src = DEFAULT_IMAGES.default; }}
                                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <span className="absolute top-2 left-2 bg-blue-600 text-white text-[11px] font-bold px-2.5 py-1 rounded">
                                        {item.category}
                                    </span>
                                    {item.available && item.available.toLowerCase() === "yes" && (
                                        <span className="absolute top-2 right-2 bg-green-500 text-white text-[11px] font-bold px-2.5 py-1 rounded">
                                            Available
                                        </span>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">{item.name}</h3>
                                    {item.description && (
                                        <p className="text-xs sm:text-sm text-gray-500 mb-2 line-clamp-2">{item.description}</p>
                                    )}

                                    {(item.capacity || item.specs) && (
                                        <div className="flex flex-wrap gap-1.5 mb-2">
                                            {item.capacity && <span className="text-[11px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-semibold">{item.capacity}</span>}
                                            {item.specs && <span className="text-[11px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-semibold">{item.specs}</span>}
                                        </div>
                                    )}

                                    {/* Pricing — only show if at least one price exists */}
                                    {(item.priceDaily || item.priceWeekly || item.priceMonthly) && (
                                        <div className="grid grid-cols-3 gap-1.5 mb-3">
                                            {[
                                                { label: "Daily", value: item.priceDaily },
                                                { label: "Weekly", value: item.priceWeekly },
                                                { label: "Monthly", value: item.priceMonthly },
                                            ].map((p) => (
                                                <div key={p.label} className="bg-blue-50 rounded p-1.5 text-center">
                                                    <p className="text-[10px] text-blue-400 font-bold uppercase">{p.label}</p>
                                                    <p className="text-xs sm:text-sm font-bold text-blue-900">{p.value ? `$${p.value}` : "—"}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <Link
                                        to={`/contact?equipment=${encodeURIComponent(item.name)}`}
                                        className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors"
                                    >
                                        Enquire Now
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {!loading && filteredEquipment.length === 0 && (
                    <div className="text-center py-16 bg-white rounded-xl border border-gray-100">
                        <p className="text-gray-500 text-lg mb-2">No equipment found in this category.</p>
                        <button onClick={() => setActiveFilter("all")} className="text-blue-600 font-semibold hover:underline">
                            View all equipment
                        </button>
                    </div>
                )}

                {/* India Operations */}
                <div className="mt-12 bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-xl p-6 md:p-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-700/30 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
                        <div className="flex-shrink-0 bg-blue-700 p-5 rounded-xl">
                            <FaGlobeAsia className="text-4xl text-orange-400" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2">Operations in India</h2>
                            <p className="text-blue-200 leading-relaxed text-sm">
                                BharatSerra Corp is headquartered in India with <strong className="text-white">100+ equipment</strong> serving
                                mining and construction projects. We import and customize machinery — delivered within 2 months.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-gray-900 font-semibold px-5 py-2.5 rounded-lg mt-4 transition-colors text-sm"
                            >
                                Enquire About India Fleet
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
