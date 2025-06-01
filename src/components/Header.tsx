import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full py-4 px-6 md:px-20 backdrop-blur-md bg-white/10 dark:bg-black/20 shadow-lg sticky top-0 z-50 border-b border-white/10"
    >
      <div className="flex justify-between items-center font-sans">
        {/* Animated Logo */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text select-none cursor-default"
        >
          Vijay Varma
        </motion.h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold uppercase tracking-wide">
          {navItems.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`transition duration-300 px-3 py-1 rounded-md ${
                activeSection === section
                  ? "text-white bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {section}
            </a>
          ))}
          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="text-white hover:text-cyan-400"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={toggleMenu}
            className="text-white hover:text-cyan-400"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            key="mobileNav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-3 space-y-3 font-semibold text-sm"
          >
            {navItems.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md transition-all duration-300 uppercase tracking-wide ${
                  activeSection === section
                    ? "text-white bg-gradient-to-r from-cyan-500 to-blue-500 shadow-sm"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {section}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
