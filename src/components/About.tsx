import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 px-6 md:px-24 bg-gradient-to-br from-white via-blue-50 to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100"
    >
      {/* Floating Gradient Circles */}
      <div className="absolute top-[-5rem] left-[-5rem] w-96 h-96 bg-cyan-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-5rem] right-[-5rem] w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl"></div>

      <div className="grid md:grid-cols-2 gap-14 z-10 relative items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative group">
            <img
              src="/profile.jpg"
              alt="Vijay Varma"
              className="w-56 h-56 rounded-full object-cover shadow-2xl border-4 border-cyan-500"
            />
            <div className="absolute -inset-1 rounded-full border-2 border-cyan-400 blur-sm opacity-30 group-hover:scale-105 group-hover:opacity-70 transition duration-300"></div>
          </div>
        </motion.div>

        {/* Bio and Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
            Hi, I'm Vijay Varma
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
            I’m a <span className="font-semibold text-blue-600 dark:text-cyan-400">Data Engineer</span> with 7+ years of experience crafting robust, cloud-native data pipelines and intelligent automation workflows powered by AI and LLMs.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            I’ve built scalable solutions in the finance research space, integrating tools like Azure Databricks, Promptflow, and Data Factory to unlock insights and streamline operations through automation.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4 text-sm mt-4">
            {[
              ["Experience", "7+ years"],
              ["Specialties", "LLM Automation, Cloud ETL"],
              ["Cloud", "Azure, Databricks, Data Factory"],
              ["Focus", "AI-Driven Data Solutions"],
            ].map(([label, value], index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="p-4 bg-white/60 dark:bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-sm"
              >
                <div className="text-xs uppercase text-gray-500 dark:text-gray-400 font-medium tracking-wide">
                  {label}
                </div>
                <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  {value}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
