/*
  📘 CONTACT COMPONENT — UPGRADED
  More vibrant, better mobile layout, colored cards
*/

import { useState } from "react";
import { motion } from "framer-motion";
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
    {
        icon: FaPhone,
        label: "Sierra Leone",
        value: "+232 90 800632",
        href: "tel:+23290800632",
        color: "from-blue-500 to-indigo-500",
        bgLight: "bg-blue-50",
    },
    {
        icon: FaPhone,
        label: "India",
        value: "+91 99799 77744",
        href: "tel:+919979977744",
        color: "from-cyan-500 to-blue-500",
        bgLight: "bg-cyan-50",
    },
    {
        icon: FaWhatsapp,
        label: "WhatsApp",
        value: "+91 99799 77744",
        href: "https://wa.me/919979977744",
        color: "from-green-500 to-emerald-500",
        bgLight: "bg-green-50",
    },
    {
        icon: FaEnvelope,
        label: "Email",
        value: "Bharatserracorp@gmail.com",
        href: "mailto:Bharatserracorp@gmail.com",
        color: "from-amber-500 to-orange-500",
        bgLight: "bg-amber-50",
    },
    {
        icon: FaMapMarkerAlt,
        label: "Location",
        value: "Sierra Leone",
        href: null,
        color: "from-purple-500 to-pink-500",
        bgLight: "bg-purple-50",
    },
    {
        icon: FaClock,
        label: "Working Hours",
        value: "Mon - Sat, 8 AM - 6 PM",
        href: null,
        color: "from-rose-500 to-red-500",
        bgLight: "bg-rose-50",
    },
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
        "w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-200";

    return (
        <section id="contact" className="section-padding bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-rose-200/20 to-orange-200/20 rounded-full -translate-y-1/2 blur-3xl opacity-60" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl opacity-50" />

            <div className="container-custom relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white 
                       text-sm font-bold px-5 py-2 rounded-full mb-4"
                    >
                        Get In Touch
                    </motion.span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                        Ready to{" "}
                        <span className="text-gradient">Start Your Project?</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Contact us for equipment rentals, project inquiries, or custom quotes.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3"
                    >
                        {CONTACT_INFO.map((info, i) => {
                            const Card = info.href ? "a" : "div";
                            return (
                                <motion.div
                                    key={info.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Card
                                        href={info.href || undefined}
                                        target={info.href?.startsWith("http") ? "_blank" : undefined}
                                        rel={info.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className={`block p-4 bg-white rounded-2xl border border-gray-100 
                               transition-all duration-300 h-full
                               ${info.href ? "hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 cursor-pointer" : ""}`}
                                    >
                                        <div className={`w-10 h-10 bg-gradient-to-br ${info.color} rounded-xl 
                                    flex items-center justify-center mb-3 shadow-sm`}>
                                            <info.icon className="text-white text-sm" />
                                        </div>
                                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">
                                            {info.label}
                                        </p>
                                        <p className="font-semibold text-gray-800 text-sm break-all sm:break-normal">
                                            {info.value}
                                        </p>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-3"
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-blue-900/5 
                         border border-gray-100"
                        >
                            <h3 className="text-xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg 
                               flex items-center justify-center">
                                    <FaPaperPlane className="text-white text-xs" />
                                </span>
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
                                        Equipment of Interest
                                    </label>
                                    <select
                                        name="equipment"
                                        value={form.equipment}
                                        onChange={handleChange}
                                        className={inputClasses}
                                    >
                                        <option value="">Select equipment...</option>
                                        <option value="32 Ton Tipper Truck">32 Ton Tipper Truck</option>
                                        <option value="42 Ton Tipper Truck">42 Ton Tipper Truck</option>
                                        <option value="Crawler Excavator">Crawler Excavator</option>
                                        <option value="Multiple Equipment">Multiple Equipment</option>
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
                                    placeholder="Tell us about your project, required equipment, duration, etc."
                                    className={`${inputClasses} resize-none`}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={submitted}
                                className={`w-full flex items-center justify-center gap-3 py-4 rounded-2xl 
                           font-bold text-lg transition-all duration-300 active:scale-[0.98]
                           ${submitted
                                        ? "bg-gradient-to-r from-emerald-400 to-green-500 text-white"
                                        : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white hover:shadow-xl hover:shadow-blue-600/25"
                                    }`}
                            >
                                {submitted ? (
                                    <>
                                        <FaCheckCircle className="text-xl" />
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
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
