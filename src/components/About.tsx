import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="section-title">👨‍💼 About Me</h2>
      <p className="text-gray-400">
        I’m a Data Engineer with 7+ years of experience building scalable, cloud-native data pipelines, integrating LLM workflows, and automating solutions with modern frameworks like FastAPI, PySpark, and Azure Databricks.
      </p>
    </motion.section>
  );
}
