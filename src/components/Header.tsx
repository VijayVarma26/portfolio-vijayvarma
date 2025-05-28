import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const navItems = ["about", "skills", "projects", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const id of navItems) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(id);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full py-4 px-6 md:px-24 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-md sticky top-0 z-50 backdrop-blur-sm transition-colors duration-300">
      <div className="flex justify-between items-center">
        {/* Animated Name */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 select-none cursor-default"
        >
          Vijay Varma
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm font-semibold items-center">
          {navItems.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`uppercase tracking-wide transition-colors duration-300 ${
                activeSection === section
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-cyan-400"
              }`}
            >
              {section}
            </a>
          ))}
          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-full hover:bg-white/10 focus:outline-none"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="text-white hover:text-cyan-400 focus:outline-none"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-white hover:text-cyan-400 focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            key="mobileNav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="mt-4 space-y-3 text-sm font-semibold flex flex-col">
              {navItems.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`block px-2 py-1 rounded transition-colors duration-300 uppercase tracking-wide ${
                    activeSection === section
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-cyan-400"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {section}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
