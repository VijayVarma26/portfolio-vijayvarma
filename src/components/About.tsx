import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 bg-gradient-to-br from-white via-blue-50 to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100"
    >
      {/* Floating Gradient Circles */}
      <div className="absolute top-[-5rem] left-[-5rem] w-96 h-96 bg-cyan-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-5rem] right-[-5rem] w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl"></div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12 z-10 relative grid md:grid-cols-2 items-center gap-12">
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
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/220x220.png?text=Your+Photo";
              }}
              alt="Vijay Varma"
              className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover shadow-xl border-4 border-cyan-500"
            />
            <div className="absolute -inset-1 rounded-full border-2 border-cyan-400 blur-sm opacity-30 group-hover:scale-105 group-hover:opacity-70 transition duration-300"></div>
          </div>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
            Meet Vijay Varma
          </h2>
          <h3 className="text-lg text-gray-700 dark:text-gray-300 mb-6 font-medium">
            Data Engineer • Cloud Specialist • AI Integrator
          </h3>

          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
            I'm a seasoned <span className="font-semibold text-blue-600 dark:text-cyan-400">Data Engineer</span> with 7+ years of experience architecting scalable, cloud-native data platforms and automation pipelines. I specialize in turning complex datasets into actionable intelligence through modern technologies and AI integrations.
          </p>

          <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
            My recent work focuses on delivering intelligent solutions in the financial research domain—leveraging tools like Azure Databricks, Promptflow, and Data Factory to enable faster insights, operational efficiency, and LLM-based automation.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4 text-sm mt-4">
            {[
              ["Experience", "7+ Years"],
              ["Specialties", "LLM Automation, Cloud ETL"],
              ["Cloud Stack", "Azure, Databricks, ADF"],
              ["Focus Area", "AI-Driven Data Solutions"],
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
