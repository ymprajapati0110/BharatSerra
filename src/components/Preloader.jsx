/*
  📘 PRELOADER — Simple Blue Theme
*/

export default function Preloader() {
    return (
        <div className="fixed inset-0 z-[9999] bg-primary-900 flex flex-col items-center justify-center">
            <img
                src="/logo.jpeg"
                alt="BharatSerra Corp"
                className="w-20 h-20 rounded-full object-cover mb-6 shadow-lg"
            />
            <h2 className="text-2xl font-bold text-white mb-2">BharatSerra Corp</h2>
            <p className="text-primary-300 text-sm mb-8">Heavy Equipment Solutions</p>
            <div className="w-48 h-1 bg-primary-800 rounded-full overflow-hidden">
                <div className="h-full bg-accent rounded-full animate-pulse" style={{ width: "60%" }} />
            </div>
        </div>
    );
}
