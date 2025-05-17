"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Portfolio() {
  return (
    <div className="bg-gradient-to-b from-[#1c1c1e] to-[#121214] text-gray-200 font-light min-h-screen px-6 md:px-24 py-16">
      {/* Header */}
      <motion.header
        className="text-center mb-20"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl font-serif text-white tracking-wide">
          Vijay Varma
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Data Engineer · LLM Automation Architect · Cloud Native Builder
        </p>
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="mailto:varmavijay2021@gmail.com"
            className="text-sm border border-gray-600 hover:border-white py-2 px-5 rounded-full hover:text-white transition duration-300"
          >
            Contact
          </a>
          <a
            href="https://linkedin.com/in/vijayvarma-de"
            target="_blank"
            className="text-sm border border-gray-600 hover:border-white py-2 px-5 rounded-full hover:text-white transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/VijayVarma26"
            target="_blank"
            className="text-sm border border-gray-600 hover:border-white py-2 px-5 rounded-full hover:text-white transition duration-300"
          >
            GitHub
          </a>
        </div>
      </motion.header>

      {/* Summary */}
      <motion.section
        className="max-w-3xl mx-auto mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-medium mb-4 text-white border-b border-gray-700 pb-2">
          👨‍💼 Professional Summary
        </h2>
        <p className="text-gray-400 leading-relaxed">
          I’m a Data Engineer with 7+ years of experience building elegant,
          high-performance data pipelines, crafting AI-integrated LLM
          workflows, and deploying secure, scalable solutions in the cloud.
        </p>
      </motion.section>

      {/* Skills */}
      <motion.section
        className="max-w-3xl mx-auto mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-medium mb-4 text-white border-b border-gray-700 pb-2">
          🛠️ Technical Skills
        </h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300 text-sm">
          <li>Python</li>
          <li>SQL</li>
          <li>Java & JavaScript</li>
          <li>Azure & Databricks</li>
          <li>PySpark & SparkSQL</li>
          <li>Docker & FastAPI</li>
        </ul>
      </motion.section>

      {/* Experience */}
      <motion.section
        className="max-w-3xl mx-auto mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-medium mb-4 text-white border-b border-gray-700 pb-2">
          💼 Experience
        </h2>
        <Card className="bg-[#202024] border-none shadow-md rounded-xl">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              ION Analytics – Data Engineer
            </h3>
            <ul className="text-gray-400 list-disc list-inside space-y-2 text-sm">
              <li>Designed ETL pipelines with Azure & PySpark.</li>
              <li>Built cloud-native LLM automations with FastAPI & LangChain.</li>
              <li>Integrated multi-instance Databricks solutions for global workflows.</li>
            </ul>
          </CardContent>
        </Card>
      </motion.section>

      {/* Imagery */}
      <motion.section
        className="max-w-4xl mx-auto mb-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-medium mb-6 text-white border-b border-gray-700 pb-2">
          🎨 Visuals & Showcase
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <img
            src="/images/data-pipeline.svg"
            alt="Elegant data pipeline illustration"
            className="rounded-lg shadow-xl object-cover"
          />
          <img
            src="/images/llm-workflow.png"
            alt="LLM workflow"
            className="rounded-lg shadow-xl object-cover"
          />
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="text-center text-gray-600 text-sm mt-20">
        © 2025 Vijay Varma — Designed with intention.
      </footer>
    </div>
  );
}
