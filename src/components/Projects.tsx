import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Powered Web Crawler",
    description:
      "Built an LLM-based web scraper that generated over 110K high-quality leads, increasing customer reach by 12% in one quarter.",
    image: "/images/web-crawler.jpg",
    details:
      "This project utilized a hybrid of Python-based scrapers and GPT-4 Turbo prompts to dynamically extract, clean, and store structured leads from web sources. Hosted in Azure Functions with CosmosDB and vector embeddings for contextual filtering.",
  },
  {
    title: "LLM-Powered IPO Deal Automation",
    description:
      "Automated ECM IPO deal creation using GPT-4 Turbo, reducing processing time from 2.5 hours to under 3 minutes.",
    image: "/images/ipo-automation.jpg",
    details:
      "Used Promptflow pipelines integrated with Azure Blob Triggers to convert unstructured emails and PDFs into structured IPO deal entries with 97% accuracy.",
  },
  {
    title: "M&A League Table Sync Pipeline",
    description:
      "Engineered a data pipeline to validate and sync 1.25M M&A deals, enabling recognition for 2M+ advisors and improving League Table accuracy.",
    image: "/images/league-table.jpg",
    details:
      "Built using PySpark and Delta Lake. Leveraged validation layers across MariaDB and SharePoint sources with CI/CD via GitHub Actions.",
  },
  {
    title: "Automated PEP & Sanctions Pipeline",
    description:
      "Scraped 50+ sources to automate KYC updates, saving over 400 manual hours weekly and improving compliance monitoring.",
    image: "/images/pep-sanctions.jpg",
    details:
      "A FastAPI-based scraper engine, orchestrated via Azure Data Factory, storing data in MongoDB Atlas with alert rules for PEP hits.",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <motion.section
      id="projects"
      className="section py-16 px-6 md:px-24 bg-blue-50 dark:bg-gray-900 text-gray-800 dark:text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-12 text-blue-600 dark:text-cyan-400">
        📂 Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((proj, index) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            onClick={() => setActiveProject(proj)}
            className="cursor-pointer bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {proj.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {proj.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Overlay */}
      {activeProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full shadow-xl relative">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-red-500 text-2xl"
            >
              &times;
            </button>
            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-blue-600 dark:text-cyan-400">
                {activeProject.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                {activeProject.description}
              </p>
              <p className="text-gray-800 dark:text-gray-100 text-sm">
                {activeProject.details}
              </p>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
}
