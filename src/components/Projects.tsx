import { motion } from "framer-motion";

const projects = [
  {
    title: "LLM PDF Vector Search",
    description:
      "Built a scalable pipeline for vector search on PDF docs using LangChain, FastAPI, and Pinecone.",
    image: "/images/llm-workflow.png",
  },
  {
    title: "ETL Automation System",
    description:
      "Designed robust PySpark-based ETL pipelines in Azure Databricks with full CI/CD integration.",
    image: "/images/data-pipeline.svg",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-gray-800">📂 Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <motion.div
            key={proj.title}
            whileHover={{ scale: 1.03 }}
            className="rounded-xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-52 object-cover rounded-t-xl"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-600 text-sm">{proj.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
