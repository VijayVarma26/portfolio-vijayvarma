import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/profile_picture_place_holder.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 px-6 md:px-20 bg-gradient-to-br from-white via-blue-50 to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100"
    >
      {/* Background Circles */}
      <div className="absolute top-[-6rem] left-[-6rem] w-96 h-96 bg-cyan-400 opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[-6rem] right-[-6rem] w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl z-0" />

      <div className="max-w-6xl mx-auto z-10 relative grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="col-span-1 flex justify-center md:justify-start"
        >
          <div className="relative group">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-500 opacity-10 group-hover:opacity-30 transition-all duration-300 blur-lg z-0" />
            <img
              src={profileImage}
              alt="Vijay Varma"
              className="w-52 h-64 md:w-64 md:h-80 rounded-2xl object-cover shadow-xl border-4 border-cyan-500 transition-transform group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="col-span-2 space-y-6 text-gray-700 dark:text-gray-300"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
            Data. Systems. Simplicity.
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-2xl">
            I design scalable pipelines and smart software that makes
            data-driven business effortless.
          </p>

          <h3 className="text-lg sm:text-xl font-semibold text-gray-600 dark:text-gray-400 tracking-wide italic">
            Data Engineer • AI Integrator • Full Stack Developer
          </h3>

          <div className="prose dark:prose-invert prose-blue max-w-none text-base sm:text-lg leading-[1.8] space-y-4">
            <p>
              I'm a{" "}
              <strong className="text-blue-600 dark:text-cyan-400">
                Data Engineer and Full Stack Developer
              </strong>{" "}
              with 7+ years of experience solving real-world challenges at the
              intersection of data, cloud, and AI.
            </p>
            <p>
              At{" "}
              <strong className="text-blue-600 dark:text-cyan-400">
                ION Analytics
              </strong>
              , I build intelligent pipelines and automation systems that change
              how financial data flows. My stack includes{" "}
              <strong>
                Azure Databricks, PySpark, Promptflow, GPT-4, and FastAPI
              </strong>
              .
            </p>
            <p>
              As a <strong>Full Stack Developer</strong>, I craft smooth and
              responsive applications using the <strong>MERN stack</strong>{" "}
              (MongoDB, Express.js, React, Node.js). Whether it’s backend
              orchestration or clean frontend design, I love turning ideas into
              real-world tools.
            </p>
            <p>
              I’ve automated IPO deal creation in under 3 minutes, synced
              millions of M&A records, and saved 400+ manual hours weekly
              through intelligent KYC systems. I thrive on tough problems and
              forward-thinking tech.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto z-10 relative"
      >
        {[
          ["Experience", "7+ Years"],
          ["Specialties", "LLM Automation, Cloud ETL"],
          ["Cloud Stack", "Azure, Databricks, ADF"],
          ["Focus Area", "AI-Driven Data Solutions"],
        ].map(([title, value], idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl border border-white/20 bg-white/50 dark:bg-white/10 backdrop-blur-md shadow-md text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-sm uppercase font-medium tracking-wider text-gray-500 dark:text-gray-400 mb-1">
              {title}
            </div>
            <div className="text-lg font-bold text-gray-900 dark:text-white">
              {value}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
