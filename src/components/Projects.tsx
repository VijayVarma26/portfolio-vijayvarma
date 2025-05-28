import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Powered Web Crawler",
    description:
      "Built an LLM-based web scraper that generated over 110K high-quality leads, increasing customer reach by 12% in one quarter.",
    image: "/images/web-crawler.jpg", // Replace with your actual image or placeholder
  },
  {
    title: "LLM-Powered IPO Deal Automation",
    description:
      "Automated ECM IPO deal creation using GPT-4 Turbo, reducing processing time from 2.5 hours to under 3 minutes.",
    image: "/images/ipo-automation.jpg",
  },
  {
    title: "M&A League Table Sync Pipeline",
    description:
      "Engineered a data pipeline to validate and sync 1.25M M&A deals, enabling recognition for 2M+ advisors and improving League Table accuracy.",
    image: "/images/league-table.jpg",
  },
  {
    title: "Automated PEP & Sanctions Pipeline",
    description:
      "Scraped 50+ sources to automate KYC updates, saving over 400 manual hours weekly and improving compliance monitoring.",
    image: "/images/pep-sanctions.jpg",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="section py-16 px-6 md:px-24 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-8 text-blue-600 dark:text-cyan-400">
        📂 Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <motion.div
            key={proj.title}
            whileHover={{ scale: 1.03 }}
            className="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-52 object-cover rounded-t-xl"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {proj.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
