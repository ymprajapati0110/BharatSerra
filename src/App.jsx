/*
  📘 APP.JSX — The Main Application File
  
  This is the ROOT component of your React app. Think of it as the "main page"
  that holds ALL other components in the right order.
  
  📘 HOW A SINGLE-SCROLL WEBSITE WORKS:
  Instead of multiple pages with a router, we stack all sections vertically:
  
  Navbar (sticky at top)
    ↓
  Hero (#home)
    ↓
  About (#about)
    ↓
  Equipment (#equipment)
    ↓
  Services (#services)
    ↓
  Contact (#contact)
    ↓
  Footer
  + WhatsApp (floating, always visible)
  
  When you click "About" in the Navbar, it scrolls to the #about section.
  This is simpler and smoother than multi-page routing!
  
  📘 COMPONENT COMPOSITION:
  React lets you build small, focused components and assemble them.
  Each import below is a self-contained section with its own logic and styling.
  This keeps your code organized — need to change the Navbar? Edit Navbar.jsx only.
*/

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Equipment from "./components/Equipment";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { AnimatePresence } from "framer-motion";

import Preloader from "./components/Preloader";
import { useState, useEffect } from "react";

function useScrollToCenter() {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.hash && target.origin === window.location.origin) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Update URL without jumping
          window.history.pushState(null, '', target.hash);
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useScrollToCenter(); // Enable centered scrolling

  return (
    /*
      📘 The wrapper div
      "min-h-screen" ensures the page is at least as tall as the screen
      "bg-white" sets the base background
    */
    <div className="min-h-screen bg-white">
      {/* Preloader Overlay */}
      <AnimatePresence mode="wait">
        {loading && <Preloader />}
      </AnimatePresence>

      {/* 📘 Navbar stays at the top, "sticky" keeps it visible while scrolling */}
      <Navbar />

      {/* 📘 main tag: semantic HTML — tells browsers/search engines this is the main content */}
      <main>
        <Hero />
        <About />
        <Equipment />
        <Services />
        <Contact />
      </main>

      {/* 📘 Footer at the bottom */}
      <Footer />

      {/* 📘 WhatsApp button is "fixed" — it floats over everything */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
