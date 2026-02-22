/*
  📘 PRELOADER — Professional blue loading screen
*/

export default function Preloader() {
    return (
        <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 flex flex-col items-center justify-center">
            {/* Decorative circles */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-800/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-700/15 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
                <img
                    src="/logo.jpeg"
                    alt="BharatSerra Corp"
                    className="w-20 h-20 rounded-full object-cover mb-6 shadow-2xl ring-4 ring-blue-700/50 mx-auto"
                />
                <h2 className="text-3xl font-extrabold text-white mb-1 tracking-tight">BharatSerra</h2>
                <p className="text-blue-400 text-sm font-bold uppercase tracking-[0.3em] mb-8">Corp</p>

                {/* Loading bar */}
                <div className="w-52 h-1 bg-blue-800 rounded-full overflow-hidden mx-auto">
                    <div
                        className="h-full bg-gradient-to-r from-blue-400 to-orange-400 rounded-full"
                        style={{
                            animation: "loadingBar 1.5s ease-in-out infinite",
                            width: "40%",
                        }}
                    />
                </div>
                <p className="text-blue-500 text-xs mt-4 font-medium">Loading...</p>
            </div>

            <style>{`
                @keyframes loadingBar {
                    0% { transform: translateX(-100%); }
                    50% { transform: translateX(150%); }
                    100% { transform: translateX(-100%); }
                }
            `}</style>
        </div>
    );
}
