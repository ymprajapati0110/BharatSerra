/*
  📘 APP.JSX — Main Application with Routing
  Two pages: Landing (/) and Fleet (/fleet)
*/

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesOverview from "./components/ServicesOverview";
import Equipment from "./components/Equipment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import FleetPage from "./components/FleetPage";
import Preloader from "./components/Preloader";
import { useState, useEffect } from "react";

function LandingPage() {
  return (
    <main>
      <Hero />
      <ServicesOverview />
      <Equipment />
      <Contact />
    </main>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/fleet" element={<FleetPage />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
