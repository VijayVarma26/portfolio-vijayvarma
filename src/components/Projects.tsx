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
        className="bg-gradient-to-br from-blue-100 via-white to-cyan-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 p-[2px] rounded-2xl shadow-lg hover:shadow-xl transition"
      >
        <div className="bg-white dark:bg-gray-900 rounded-2xl h-full overflow-hidden">
          <img
            src={proj.image}
            alt={proj.title}
            className="w-full h-48 object-cover rounded-t-2xl"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {proj.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {proj.description}
            </p>
            <div className="mt-4">
              <button className="text-sm text-blue-600 dark:text-cyan-400 font-medium hover:underline">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</motion.section>


  );
}
