import { motion } from "framer-motion";

const projects = [
  {
    title: "LLM PDF Vector Search",
    description: "Built a scalable pipeline for vector search on PDF docs using LangChain, FastAPI, and Pinecone.",
    image: "/images/llm-workflow.png",
  },
  {
    title: "ETL Automation System",
    description: "Designed robust PySpark-based ETL pipelines in Azure Databricks with full CI/CD integration.",
    image: "/images/data-pipeline.svg",
  },
];

export default function Projects() {
  return (
    <motion.section className="section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
      <h2 className="section-title">📂 Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <div key={proj.title} className="bg-[#202024] p-4 rounded-xl shadow-lg">
            <img src={proj.image} alt={proj.title} className="rounded-lg mb-3" />
            <h3 className="text-white text-lg font-semibold">{proj.title}</h3>
            <p className="text-sm text-gray-400">{proj.description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
