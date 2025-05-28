import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="section bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16 px-6 md:px-24"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full flex justify-center"
        >
          <img
            src="/profile.jpg" // Replace with your actual image
            alt="Vijay Varma"
            className="w-52 h-52 rounded-full object-cover shadow-lg border-4 border-cyan-400"
          />
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2 text-blue-600 dark:text-cyan-400">
            Hi, I'm Vijay Varma
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            I'm a <span className="font-semibold text-blue-600 dark:text-cyan-400">Data Engineer</span> with 7+ years of experience designing scalable data pipelines, cloud-native systems, and AI-integrated workflows.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            I specialize in automating and optimizing data processes across financial research platforms using technologies like Azure, Databricks, and Promptflow. Passionate about building production-grade data infrastructure with modern DevOps, LLMs, and a problem-solving mindset.
          </p>

          {/* Highlights */}
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-800 dark:text-gray-300">
            <div>
              <span className="font-medium">Experience:</span> 7+ years
            </div>
            <div>
              <span className="font-medium">Specialties:</span> LLM Automation, Cloud ETL
            </div>
            <div>
              <span className="font-medium">Cloud:</span> Azure (Databricks, Data Factory)
            </div>
            <div>
              <span className="font-medium">Focus:</span> AI-Driven Data Solutions
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
