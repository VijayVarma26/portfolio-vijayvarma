import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section className="section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
      <h2 className="section-title">💼 Experience</h2>
      <div className="bg-[#202024] p-6 rounded-xl shadow-lg">
        <h3 className="text-white text-lg font-semibold mb-2">ION Analytics – Data Engineer</h3>
        <ul className="list-disc text-gray-400 space-y-2 pl-5 text-sm">
          <li>Built scalable ETL pipelines using Azure and PySpark.</li>
          <li>Developed FastAPI microservices integrated with LLM agents.</li>
          <li>Engineered multi-tenant Databricks orchestration across environments.</li>
        </ul>
      </div>
    </motion.section>
  );
}
