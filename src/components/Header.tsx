import { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional icons if using lucide

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full py-4 px-6 md:px-24 bg-white text-gray-900 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo / Name */}
        <div className="text-2xl font-bold tracking-tight">Vijay Varma</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 text-sm font-medium">
          <a href="#about" className="block hover:text-blue-600">About</a>
          <a href="#skills" className="block hover:text-blue-600">Skills</a>
          <a href="#projects" className="block hover:text-blue-600">Projects</a>
          <a href="#contact" className="block hover:text-blue-600">Contact</a>
        </div>
      )}
    </header>
  );
}
