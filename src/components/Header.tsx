"use client";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="text-center mb-16"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="text-5xl md:text-6xl font-bold text-white">Vijay Varma</h1>
      <p className="text-lg mt-4 text-gray-400">
        Data Engineer · LLM Automation Architect · Cloud Native Builder
      </p>
      <div className="flex justify-center gap-4 mt-6">
        <a href="mailto:varmavijay2021@gmail.com" className="btn-outline">Contact</a>
        <a href="https://linkedin.com/in/vijayvarma-de" className="btn-outline" target="_blank">LinkedIn</a>
        <a href="https://github.com/VijayVarma26" className="btn-outline" target="_blank">GitHub</a>
      </div>
    </motion.header>
  );
}
