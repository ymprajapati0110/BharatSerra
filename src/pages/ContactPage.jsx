/*
  📘 CONTACT PAGE — Blue theme with quick links, contact cards, and form
*/

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaWhatsapp,
    FaClock,
    FaPaperPlane,
    FaCheckCircle,

} from "react-icons/fa";

const CONTACT_INFO = [
    { icon: FaPhone, label: "Sierra Leone", value: "+232 90 800632", href: "tel:+23290800632" },
    { icon: FaPhone, label: "India", value: "+91 99799 77744", href: "tel:+919979977744" },
    { icon: FaWhatsapp, label: "WhatsApp", value: "+91 99799 77744", href: "https://wa.me/919979977744" },
    { icon: FaEnvelope, label: "Email", value: "Bharatserracorp@gmail.com", href: "mailto:Bharatserracorp@gmail.com" },
    { icon: FaMapMarkerAlt, label: "Location", value: "Sierra Leone & India", href: null },
    { icon: FaClock, label: "Hours", value: "Mon - Sat, 8AM - 6PM", href: null },
];



const SERVICES_LIST = [
    "Equipment Rental",
    "Infrastructure Development",
    "Mining & Earthworks",
    "Oil Supply",
    "Custom Machinery Import",
];

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", equipment: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [searchParams] = useSearchParams();
    const formRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const equipmentName = searchParams.get("equipment");
        if (equipmentName) {
            setForm((prev) => ({
                ...prev,
                message: `Hi, I'm interested in: ${equipmentName}. Please share availability and pricing details.`,
                equipment: matchService(equipmentName),
            }));
            // Scroll to the form after a brief delay
            setTimeout(() => {
                formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 300);
        }
    }, [searchParams]);

    /* Try to match equipment name to a service category */
    function matchService(name) {
        const lower = name.toLowerCase();
        if (["truck", "tipper", "excavator", "vehicle"].some((k) => lower.includes(k))) return "Equipment Rental";
        if (["road", "bridge", "culvert", "canal"].some((k) => lower.includes(k))) return "Infrastructure Development";
        if (["mining", "earth", "site", "haulage"].some((k) => lower.includes(k))) return "Mining & Earthworks";
        if (["oil", "lubricant", "hydraulic", "gear"].some((k) => lower.includes(k))) return "Oil Supply";
        return "";
    }

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `Equipment Inquiry from ${form.name}`;
        const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0APhone: ${form.phone}%0D%0AService: ${form.equipment}%0D%0A%0D%0AMessage:%0D%0A${form.message}`;
        window.open(`mailto:Bharatserracorp@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setForm({ name: "", email: "", phone: "", equipment: "", message: "" });
        }, 3000);
    };

    const inputClasses = "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 focus:bg-white transition-all";

    return (
        <main>
            {/* Page Banner */}
            <div className="page-banner py-16 pb-12">
                <div className="container-custom relative z-10">
                    <div className="inline-block bg-blue-500/20 text-blue-200 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider border border-blue-400/20">
                        Get In Touch
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold mb-3">Contact Us</h1>
                    <p className="text-blue-200 max-w-xl">
                        Reach out for equipment rentals, project inquiries, or custom quotes.
                    </p>
                </div>
            </div>

            <div className="container-custom py-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {/* Left: Contact Info */}
                    <div className="flex flex-col">
                        {/* Contact Cards */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex-1">
                            <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Contact Information</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {CONTACT_INFO.map((info) => {
                                    const Card = info.href ? "a" : "div";
                                    return (
                                        <Card
                                            key={info.label}
                                            href={info.href || undefined}
                                            target={info.href?.startsWith("http") ? "_blank" : undefined}
                                            rel={info.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                                            className={`block p-3 bg-white rounded-lg border border-gray-100 
                                       ${info.href ? "hover:shadow-md hover:border-blue-200 transition-all cursor-pointer" : ""}`}
                                        >
                                            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center mb-2">
                                                <info.icon className="text-white text-xs" />
                                            </div>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{info.label}</p>
                                            <p className="font-semibold text-gray-800 text-[11px] truncate">{info.value}</p>
                                        </Card>
                                    );
                                })}
                            </div>
                        </div>


                    </div>

                    {/* Right: Form */}
                    <div className="lg:col-span-2">
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-1">Send Us an Inquiry</h3>
                            <p className="text-gray-500 text-sm mb-6">Fill in the details and we'll get back to you within 24 hours.</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Name *</label>
                                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" className={inputClasses} />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@example.com" className={inputClasses} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+232 XX XXXXXX" className={inputClasses} />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Service of Interest</label>
                                    <select name="equipment" value={form.equipment} onChange={handleChange} className={inputClasses}>
                                        <option value="">Select a service...</option>
                                        {SERVICES_LIST.map((s) => (<option key={s} value={s}>{s}</option>))}
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Message *</label>
                                <textarea name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="Tell us about your project..." className={`${inputClasses} resize-none`} />
                            </div>

                            <button
                                type="submit"
                                disabled={submitted}
                                className={`w-full flex items-center justify-center gap-3 py-3.5 rounded-lg font-semibold text-lg transition-all
                           ${submitted ? "bg-green-500 text-white" : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25"}`}
                            >
                                {submitted ? (<><FaCheckCircle /> Email App Opened!</>) : (<><FaPaperPlane /> Send Inquiry</>)}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
