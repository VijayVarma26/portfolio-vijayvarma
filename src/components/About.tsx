import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 px-6 md:px-20 bg-gradient-to-br from-white via-blue-50 to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100"
    >
      {/* Gradient background circles */}
      <div className="absolute top-[-6rem] left-[-6rem] w-96 h-96 bg-cyan-400 opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[-6rem] right-[-6rem] w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl z-0" />

      <div className="max-w-6xl mx-auto z-10 relative grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="col-span-1 flex justify-center md:justify-start"
        >
          <div className="relative group">
            <img
              src="/profile.jpg"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/220x220.png?text=Your+Photo";
              }}
              alt="Vijay Varma"
              className="w-52 h-52 md:w-60 md:h-60 rounded-2xl object-cover shadow-xl border-4 border-cyan-500"
            />
            <div className="absolute -inset-1 rounded-2xl border-2 border-cyan-400 blur-sm opacity-30 group-hover:opacity-60 transition" />
          </div>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="col-span-2 space-y-5"
        >
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
            Meet Vijay Varma
          </h2>
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
            Data Engineer • Cloud Specialist • AI Integrator
          </h3>

          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a seasoned <span className="font-semibold text-blue-600 dark:text-cyan-400">Data Engineer</span> with over 7 years of experience architecting scalable, cloud-native data platforms and automation pipelines.
          </p>

          <p className="text-base text-gray-600 dark:text-gray-400">
            I specialize in delivering intelligent solutions in the financial research domain—leveraging tools like Azure Databricks, Promptflow, and Data Factory to power LLM-based automation and drive data-driven decisions.
          </p>
        </motion.div>
      </div>

      {/* Highlight Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto z-10 relative"
      >
        {[
          ["Experience", "7+ Years"],
          ["Specialties", "LLM Automation, Cloud ETL"],
          ["Cloud Stack", "Azure, Databricks, ADF"],
          ["Focus Area", "AI-Driven Data Solutions"],
        ].map(([title, value], idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl border border-white/20 bg-white/50 dark:bg-white/10 backdrop-blur-md shadow-md text-center"
          >
            <div className="text-xs uppercase font-semibold text-gray-600 dark:text-gray-400 mb-1">
              {title}
            </div>
            <div className="text-sm font-bold text-gray-900 dark:text-white">
              {value}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
