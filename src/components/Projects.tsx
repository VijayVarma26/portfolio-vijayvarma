import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Powered Web Crawler",
    description:
      "Built an LLM-based web scraper that generated over 110K high-quality leads, increasing customer reach by 12% in one quarter.",
    image: "/images/web-crawler.jpg",
    details:
      "This project combined Python scraping tools like Selenium with GPT-4 Turbo via Promptflow to identify, extract, and filter high-potential leads from global company websites and databases. Results were stored in Azure CosmosDB and vectorized using OpenAI embeddings for semantic deduplication. It also featured a React dashboard for QA teams to validate and download lead segments. Hosted on AKS with periodic updates via CRON-based jobs.",
  },
  {
    title: "LLM-Powered IPO Deal Automation",
    description:
      "Automated ECM IPO deal creation using GPT-4 Turbo, reducing processing time from 2.5 hours to under 3 minutes.",
    image: "/images/ipo-automation.jpg",
    details:
      "Developed an AI-driven automation pipeline that parsed IPO documents (PDFs, emails) using Promptflow and GPT-4. Extracted fields were normalized using Pydantic schemas, validated against internal taxonomies, and directly published to Dealogic via RESTful microservices hosted on Azure Kubernetes Service (AKS). Implemented a PostgreSQL + RAG-based fallback system for handling edge cases and token overflows. This eliminated manual input across 4 departments.",
  },
  {
    title: "M&A League Table Sync Pipeline",
    description:
      "Engineered a data pipeline to validate and sync 1.25M M&A deals, enabling recognition for 2M+ advisors and improving League Table accuracy.",
    image: "/images/league-table.jpg",
    details:
      "Built using PySpark on Databricks and Delta Lake, this pipeline reconciled deal data between Mergermarket and Dealogic. Cross-validated 15+ fields including financial metrics, timestamps, and advisor roles. Added schema drift monitoring, hash-based change detection, and version control for rollback. Final insights powered downstream Tableau dashboards and auto-generated league position summaries for each region and sector.",
  },
  {
    title: "Automated PEP & Sanctions Pipeline",
    description:
      "Scraped 50+ sources to automate KYC updates, saving over 400 manual hours weekly and improving compliance monitoring.",
    image: "/images/pep-sanctions.jpg",
    details:
      "Designed a robust crawler system with 50+ connectors to public data sources (Interpol, SEC, OFAC, EU Parliament, etc.). Used Selenium and BeautifulSoup for scraping, combined with FastAPI to expose results over internal dashboards. Azure Blob Storage housed the raw data, with processed entities stored in MySQL. Alerting system built with App Insights and Logic Apps notified analysts of risky entities in near real-time. This reduced manual intervention by over 90%.",
  },
];


export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <motion.section
      id="projects"
      className="relative py-20 bg-gradient-to-br from-white via-blue-50 to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
    >
      {/* Background Glow Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-400 opacity-20 rounded-full blur-3xl z-0"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl z-0"></div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12 z-10 relative">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
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
              className="cursor-pointer group relative overflow-hidden bg-white/60 dark:bg-white/10 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl border border-gray-200/40 dark:border-white/10 transition"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {proj.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
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
                <p className="text-gray-800 dark:text-gray-100 text-sm leading-relaxed">
                  {activeProject.details}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
}
