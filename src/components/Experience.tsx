import { motion } from "framer-motion";

const experiences = [
  {
    role: "Data Engineer",
    company: "ION Analytics",
    dates: "Jan 2022 - Present",
    responsibilities: [
      "Built scalable ETL pipelines using Azure and PySpark.",
      "Developed FastAPI microservices integrated with LLM agents.",
      "Engineered multi-tenant Databricks orchestration across environments.",
    ],
  },
  // Add more experiences here if needed
];

export default function Experience() {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <h2 className="section-title">💼 Experience</h2>
      <div className="space-y-8">
        {experiences.map(({ role, company, dates, responsibilities }) => (
          <div
            key={company + role}
            className="bg-[#202024] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-white text-lg font-semibold">{company} – {role}</h3>
              <span className="text-gray-500 text-sm">{dates}</span>
            </div>
            <ul className="list-disc text-gray-400 space-y-2 pl-5 text-sm">
              {responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
