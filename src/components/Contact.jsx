/*
  📘 CONTACT — Clean Corporate Blue
*/

import { useState } from "react";
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
    { icon: FaClock, label: "Working Hours", value: "Mon - Sat, 8 AM - 6 PM", href: null },
];

const SERVICES_LIST = [
    "Equipment Rental",
    "Infrastructure Development",
    "Mining & Earthworks",
    "Oil Supply",
    "Custom Machinery Import",
];

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        equipment: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `Equipment Inquiry from ${form.name}`;
        const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0APhone: ${form.phone}%0D%0AEquipment: ${form.equipment}%0D%0A%0D%0AMessage:%0D%0A${form.message}`;
        window.open(
            `mailto:Bharatserracorp@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`
        );
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setForm({ name: "", email: "", phone: "", equipment: "", message: "" });
        }, 3000);
    };

    const inputClasses =
        "w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all";

    return (
        <section id="contact" className="section-padding bg-gray-50">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Get In <span className="text-primary-600">Touch</span>
                    </h2>
                    <p className="text-gray-600">
                        Contact us for equipment rentals, project inquiries, or custom quotes.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Contact Info */}
                    <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
                        {CONTACT_INFO.map((info) => {
                            const Card = info.href ? "a" : "div";
                            return (
                                <Card
                                    key={info.label}
                                    href={info.href || undefined}
                                    target={info.href?.startsWith("http") ? "_blank" : undefined}
                                    rel={info.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className={`block p-4 bg-white rounded-xl border border-gray-100 
                               ${info.href ? "hover:shadow-md hover:border-primary-200 transition-all cursor-pointer" : ""}`}
                                >
                                    <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center mb-3">
                                        <info.icon className="text-primary-600 text-sm" />
                                    </div>
                                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">
                                        {info.label}
                                    </p>
                                    <p className="font-semibold text-gray-800 text-sm break-all">
                                        {info.value}
                                    </p>
                                </Card>
                            );
                        })}
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-3">
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-6">
                                Send Us an Inquiry
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                        className={inputClasses}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                        className={inputClasses}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="+232 XX XXXXXX"
                                        className={inputClasses}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                        Service of Interest
                                    </label>
                                    <select
                                        name="equipment"
                                        value={form.equipment}
                                        onChange={handleChange}
                                        className={inputClasses}
                                    >
                                        <option value="">Select a service...</option>
                                        {SERVICES_LIST.map((s) => (
                                            <option key={s} value={s}>{s}</option>
                                        ))}
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                    Your Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    placeholder="Tell us about your project requirements..."
                                    className={`${inputClasses} resize-none`}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={submitted}
                                className={`w-full flex items-center justify-center gap-3 py-3.5 rounded-lg 
                           font-semibold text-lg transition-all
                           ${submitted
                                        ? "bg-green-500 text-white"
                                        : "bg-primary-600 hover:bg-primary-700 text-white"
                                    }`}
                            >
                                {submitted ? (
                                    <>
                                        <FaCheckCircle />
                                        Email App Opened!
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane />
                                        Send Inquiry
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
