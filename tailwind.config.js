/** @type {import('tailwindcss').Config} */

/*
 📘 TAILWIND CONFIG — Your Design System
 
 Think of this file as the "settings" for your entire website's look.
 Instead of writing color codes everywhere, you define them ONCE here
 and use them as class names like: bg-primary, text-primary-dark, etc.
 
 WHY?
 - Change a color here → it changes EVERYWHERE on the site
 - Keeps your design consistent (no random blues)
 - Tailwind generates only the CSS you actually use (tiny file size)
*/

export default {
  // 📘 content: tells Tailwind WHERE to look for class names
  //    It scans these files and generates CSS only for classes you use
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",

  theme: {
    extend: {
      // 📘 Custom colors — our blue corporate palette
      //    Usage: bg-primary, text-primary-light, border-primary-dark, etc.
      colors: {
        primary: {
          light: "#3b82f6",   // Blue 500 — buttons, links, accents
          DEFAULT: "#1e40af", // Blue 800 — main brand color
          dark: "#1e3a8a",    // Blue 900 — headers, dark sections
        },
        accent: {
          light: "#fbbf24",   // Amber 400 — highlights
          DEFAULT: "#f59e0b", // Amber 500 — CTA buttons, badges
          dark: "#d97706",    // Amber 600 — hover states
        },
      },

      // 📘 Custom font family
      //    We loaded "Inter" in index.html via Google Fonts
      //    Now we tell Tailwind to use it with: font-sans
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },

      // 📘 Custom animation keyframes
      //    These power the floating WhatsApp button pulse effect
      animation: {
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
