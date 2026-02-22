/*
  📘 EQUIPMENT — Homepage Preview (9 cards max)
  Shows 9 items from Google Sheets + "View Full Fleet" button
*/

import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
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

export default function Equipment() {
    const [equipment, setEquipment] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
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

    // Show max 9 items on homepage
    const previewEquipment = equipment.slice(0, 9);

    return (
        <section id="equipment" className="section-padding bg-white">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Our <span className="text-primary-600">Equipment</span>
                    </h2>
                    <p className="text-gray-600">
                        Heavy-duty machinery ready for your projects. Available for daily, weekly, and monthly rental.
                    </p>
                </div>

                {/* Loading */}
                {loading && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((n) => (
                            <div key={n} className="h-64 bg-gray-100 rounded-xl animate-pulse" />
                        ))}
                    </div>
                )}

                {/* Equipment Grid */}
                {!loading && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {previewEquipment.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                            >
                                {/* Image */}
                                <div className="relative h-48 bg-gray-100">
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
                                </div>

                                {/* Info */}
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.name}</h3>
                                    {item.description && (
                                        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{item.description}</p>
                                    )}
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-xl font-bold text-primary-600">${item.priceDaily}</span>
                                            <span className="text-sm text-gray-400">/day</span>
                                        </div>
                                        <a
                                            href={`https://wa.me/919979977744?text=Hi%2C%20I%27m%20interested%20in%20renting%20${encodeURIComponent(item.name)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <FaWhatsapp /> Book
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* View Full Fleet Button */}
                {!loading && equipment.length > 0 && (
                    <div className="text-center mt-10">
                        <button
                            onClick={() => navigate("/fleet")}
                            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                        >
                            View Full Fleet →
                        </button>
                        {equipment.length > 9 && (
                            <p className="text-sm text-gray-500 mt-2">
                                Showing 9 of {equipment.length} available equipment
                            </p>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
