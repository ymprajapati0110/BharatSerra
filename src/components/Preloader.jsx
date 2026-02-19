import { motion } from "framer-motion";
import { FaTruck, FaHardHat, FaTools } from "react-icons/fa";

export default function Preloader() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-gray-900 flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

            {/* Content Container */}
            <div className="relative z-10 font-bold text-center">

                {/* Truck Animation */}
                <div className="relative w-64 h-20 mb-8 mx-auto">
                    {/* Road Line */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-700/50 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-amber-400 to-orange-500"
                            initial={{ x: "-100%" }}
                            animate={{ x: "0%" }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                    </div>

                    {/* Truck Icon */}
                    <motion.div
                        className="absolute bottom-1.5 left-0 text-5xl text-white"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: "calc(100% - 3REM)", opacity: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    >
                        <FaTruck />
                        {/* Dust Effect */}
                        <motion.div
                            animate={{ opacity: [0, 0.5, 0], scale: [0.5, 1.5, 2], x: [-10, -30] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            className="absolute bottom-0 -left-2 w-4 h-4 bg-gray-500/30 rounded-full blur-sm"
                        />
                    </motion.div>
                </div>

                {/* Text */}
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-2xl text-white mb-2"
                >
                    BHARAT<span className="text-amber-400">SERRA</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-gray-400 text-sm uppercase tracking-widest flex items-center justify-center gap-2"
                >
                    <FaHardHat className="animate-bounce" />
                    Mobilizing Fleet...
                </motion.p>
            </div>
        </motion.div>
    );
}
