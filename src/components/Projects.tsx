import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AiWebCrawlerImage from "../assets/Project_Image_AI_Web_Crawler_New.png";
import EcmIpoImage from "../assets/Projet_Image_ECM_IPO.png";
import SuvFortuneVisionImage from "../assets/suv_fortune_vision.jpg";
import PepAndPoiImage from "../assets/PEP_Data_Pipeline.png";
import PickleballDashboardImage from "../assets/PickleballDashboard.jpg";
import MnaLeagueTableImage from "../assets/MNA_League_Table.png";

const projects = [
  {
    title: "AI-Powered Web Crawler for Lead Generation",
    description:
      "Developed an LLM-based crawler to extract and generate 110K+ verified business leads, increasing outreach efficiency by 12% in a quarter.",
    image: AiWebCrawlerImage,
    details:
      "This solution used Python-based scraping combined with GPT-4 Turbo via Promptflow to extract structured lead data from company websites, business directories, and global databases. Leads were filtered using vector similarity (OpenAI embeddings) and scored for quality. All data was stored in CosmosDB, and QA teams could monitor results via a React-based internal dashboard. The system ran on a CRON schedule, orchestrated via AKS and Azure Functions, supporting periodic refresh and deduplication routines.",
    techStack: [
      "Python",
      "Promptflow",
      "GPT-4 Turbo",
      "Selenium",
      "CosmosDB",
      "OpenAI Embeddings",
      "Azure Kubernetes Service (AKS)",
      "React",
      "Azure Functions",
    ],
  },
  {
    title: "LLM-Powered ECM IPO Deal Automation",
    description:
      "Reduced IPO deal processing time from 2.5 hours to under 3 minutes using LLM automation integrated with Azure infrastructure.",
    image: EcmIpoImage,
    details:
      "Built a Promptflow-based pipeline to extract structured fields from unstructured ECM IPO documents (emails, PDFs). Used GPT-4 Turbo with robust prompt engineering and schema validation (via Pydantic) to ensure data integrity. The solution pushed extracted data to Dealogic through a FastAPI microservice hosted on AKS. Implemented a RAG-enhanced fallback with PostgreSQL to handle edge cases and model limitations, achieving over 97% data accuracy across 500+ real-world IPOs.",
    techStack: [
      "Python",
      "Promptflow",
      "GPT-4 Turbo",
      "Pydantic",
      "PostgreSQL",
      "FastAPI",
      "AKS (Azure Kubernetes Service)",
      "RAG (Retrieval-Augmented Generation)",
    ],
  },
  {
    title: "M&A League Table Sync Pipeline",
    description:
      "Built a high-volume pipeline to reconcile 1.25M+ M&A deals between Mergermarket and Dealogic, improving advisor recognition and report accuracy.",
    image: MnaLeagueTableImage,
    details:
      "This PySpark-based pipeline was developed on Azure Databricks to align fields across large datasets with financial and deal metadata. Data sources included SharePoint dumps and MariaDB tables. The pipeline added multi-level validation logic, schema reconciliation, and delta-based change tracking. League Table positions were updated live, improving visibility for 2M+ advisors and 4.3M+ individuals. The solution integrated CI/CD using GitHub Actions and published data to dashboards and reports consumed company-wide.",
    techStack: [
      "PySpark",
      "Azure Databricks",
      "Delta Lake",
      "MariaDB",
      "SharePoint",
      "SQL",
      "GitHub Actions",
    ],
  },
  {
    title: "Automated PEP & Sanctions Data Pipeline",
    description:
      "Scraped 50+ regulatory and watchlist sources globally to automate KYC updates and improve real-time risk monitoring.",
    image: PepAndPoiImage,
    details:
      "Designed and deployed a distributed web crawler system to aggregate data from sources such as OFAC, Interpol, SEC, and EU Sanctions lists. Used Selenium and Python scripts within Azure Databricks to perform scraping, cleaning, and enrichment. The processed data was stored in MySQL and blob storage, while the front-end alert system used Azure App Insights and Logic Apps to notify compliance analysts of critical matches. Reduced manual KYC review effort by 400+ hours per week and improved compliance latency.",
    techStack: [
      "Python",
      "Selenium",
      "Azure Databricks",
      "MySQL",
      "Azure Blob Storage",
      "Azure App Insights",
      "Azure Logic Apps",
    ],
  },
  {
    title: "SUV Fortune Vision Website",
    description:
      "Developed a dynamic and visually engaging company website to showcase the journey, services, clients, and team of SUV Fortune Vision, a leading digital media firm.",
    image: SuvFortuneVisionImage,
    details:
      "Built a fully responsive and animated website using React and Tailwind CSS for SUV Fortune Vision. Incorporated framer-motion for smooth entrance animations and interactive transitions across sections. Designed reusable React components to highlight the company’s journey, core leadership team, and success stories. Used recharts to visualize follower growth, and Swiper.js for showcasing partners and campaigns. The site emphasizes storytelling, brand personality, and user engagement, making it a modern digital portfolio for the company. Optimized for accessibility and mobile responsiveness. Deployed seamlessly using Vercel for fast global delivery and CI/CD.",
    techStack: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React Icons",
      "Recharts",
      "Swiper.js",
      "Vercel",
    ],
    liveDemo: "https://suvfortunevision.com",
  },
  {
    title: "Mumbai Pickleball Trend Analysis",
    description:
      "Analyzed the growth and revenue trends of Pickleball venues across Mumbai by scraping and visualizing booking data over a two-year period.",
    image: PickleballDashboardImage,
    details:
      "Built a comprehensive data pipeline to track Pickleball activity trends in Mumbai. Web scraped venue and booking data from Hudle over the last two years using Python and Selenium. Designed a daily scraping scheduler and modeled the data into a structured format for long-term analysis. Created an interactive Power BI dashboard that visualized venue popularity by region, time of day, and weekday patterns. Special focus was placed on revenue estimation and location-wise performance. The insights empowered stakeholders to make informed decisions on pricing, identifying high-performing zones, and selecting optimal locations for opening new venues.",
    techStack: [
      "Python",
      "Selenium",
      "Web Scraping",
      "Data Modelling",
      "Power BI",
    ],
    liveDemo: null,
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "auto";
  }, [activeProject]);
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
        <h2 className="text-center text-4xl font-serif mb-16 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          📂 Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onClick={() => setActiveProject(proj)}
              className="cursor-pointer group bg-white/60 dark:bg-white/10 backdrop-blur-md rounded-2xl shadow-md hover:shadow-2xl border border-gray-200/40 dark:border-white/10 transition overflow-hidden"
            >
              <div className="relative">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full aspect-video object-cover rounded-t-2xl"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {proj.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                  {proj.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Overlay */}
        {activeProject && (
          <div className="fixed inset-0 z-[9999] bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-red-500 text-3xl z-10"
              >
                &times;
              </button>

              {/* Image */}
              <div className="w-full aspect-[16/9]">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover rounded-t-3xl"
                />
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(90vh-16rem)]">
                {/* Title */}
                <h3 className="text-2xl font-bold text-blue-600 dark:text-cyan-400">
                  {activeProject.title}
                </h3>

                {/* Description */}
                <section>
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    📌 Description
                  </h4>
                  <p className="text-sm text-gray-800 dark:text-gray-100 leading-relaxed">
                    {activeProject.description}
                  </p>
                </section>

                {/* Highlights */}
                <section>
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    🧩 Project Highlights
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed whitespace-pre-line">
                    {activeProject.details}
                  </p>
                </section>

                {/* Tech Stack */}
                <section>
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    ⚙️ Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {activeProject.techStack?.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 dark:bg-cyan-800 text-blue-800 dark:text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </motion.section>
  );
}
