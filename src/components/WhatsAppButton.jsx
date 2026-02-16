/*
  📘 WHATSAPP FLOATING BUTTON — UPGRADED
  Better animation, gradient ring, more visible
*/

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/919979977744?text=Hi%2C%20I%27m%20interested%20in%20renting%20equipment%20from%20BharatSerra%20Corp"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, type: "spring", stiffness: 200 }}
            className="fixed bottom-6 right-6 z-40 group"
            aria-label="Chat on WhatsApp"
        >
            {/* Animated ping ring */}
            <span className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25" />
            <span className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-30 blur-sm group-hover:opacity-50 transition-opacity" />

            {/* Button */}
            <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 text-white 
                      p-4 rounded-full shadow-xl shadow-green-500/40
                      hover:shadow-2xl hover:shadow-green-500/50 
                      transition-all duration-300 hover:scale-110 active:scale-95">
                <FaWhatsapp className="text-2xl" />
            </div>

            {/* Tooltip */}
            <span
                className="absolute right-full mr-4 top-1/2 -translate-y-1/2 
                   bg-gradient-to-r from-gray-800 to-gray-900 text-white 
                   text-sm font-medium px-4 py-2 rounded-xl whitespace-nowrap 
                   opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 
                   transition-all duration-300 pointer-events-none shadow-xl
                   border border-gray-700"
            >
                💬 Chat with us!
                {/* Arrow */}
                <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 
                         bg-gray-900 rotate-45 border-r border-t border-gray-700" />
            </span>
        </motion.a>
    );
}
