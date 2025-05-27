"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="text-center py-16 px-6 md:px-0"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-5xl md:text-6xl font-serif text-gray-900 tracking-wide mb-4">
        Vijay Varma
      </h1>
      <p className="text-lg md:text-xl text-gray-600">
        Data Engineer · LLM Automation Architect · Cloud Native Builder
      </p>

      <div className="flex justify-center gap-4 mt-8 flex-wrap">
        <a href="mailto:varmavijay2021@gmail.com" className="btn-outline text-sm">
          Contact
        </a>
        <a href="https://linkedin.com/in/vijayvarma-de" target="_blank" className="btn-outline text-sm">
          LinkedIn
        </a>
        <a href="https://github.com/VijayVarma26" target="_blank" className="btn-outline text-sm">
          GitHub
        </a>
      </div>
    </motion.header>
  );
}
