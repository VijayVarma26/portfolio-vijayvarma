import { motion } from "framer-motion";

const skills = [
  "Python", "SQL", "Java & JavaScript",
  "Azure", "Databricks", "PySpark",
  "SparkSQL", "FastAPI", "Docker"
];

export default function Skills() {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="section-title">🛠️ Technical Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-300">
        {skills.map(skill => (
          <li key={skill} className="bg-[#1e1e20] px-4 py-2 rounded-lg text-center shadow-md">{skill}</li>
        ))}
      </ul>
    </motion.section>
  );
}
