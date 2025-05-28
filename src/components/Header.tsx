import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ["about", "skills", "projects", "contact"];

  return (
    <header className="w-full py-4 px-6 md:px-24 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white shadow-md sticky top-0 z-50 backdrop-blur-sm">
      <div className="flex justify-between items-center">
        {/* Logo / Name */}
        <div className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 select-none cursor-default">
          Vijay Varma
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm font-semibold">
          {navItems.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 uppercase tracking-wide"
            >
              {section}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-white hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
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
                  className="block px-2 py-1 rounded hover:text-cyan-400 transition-colors duration-300 uppercase tracking-wide"
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
