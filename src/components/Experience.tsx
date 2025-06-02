import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Data Engineer",
    company: "ION Analytics",
    dates: "Jan 2022 – Present",
    responsibilities: [
      "Designed and maintained scalable ETL pipelines using PySpark and Azure Databricks.",
      "Led LLM-powered automation for IPO deal extraction, reducing processing time by 97%.",
      "Collaborated with cross-functional teams to optimize data flow and infrastructure.",
      "Built validation frameworks syncing 1.25M+ M&A records to boost data accuracy."
    ],
  },
  {
    role: "Data Engineer",
    company: "Previous Company",
    dates: "Aug 2017 – Dec 2021",
    responsibilities: [
      "Built data pipelines for real-time analytics and reporting.",
      "Contributed to building internal tools that enhanced team productivity.",
      "Managed deployment workflows using Azure Data Factory and CI/CD via GitHub."
    ],
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="relative py-20 bg-gradient-to-br from-white via-blue-50 to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
    >
      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-400 opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl z-0" />

      <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
          💼 Experience
        </h2>

        <div className="relative border-l-4 border-cyan-400 dark:border-cyan-500 pl-6 space-y-10">
          {experiences.map(({ role, company, dates, responsibilities }, index) => (
            <motion.div
              key={`${company}-${role}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white/60 dark:bg-white/10 backdrop-blur-md border border-gray-200/30 dark:border-white/10 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-3 top-6 w-4 h-4 bg-cyan-400 dark:bg-cyan-500 rounded-full border-4 border-white dark:border-gray-900 shadow-md" />

              <div className="flex flex-col sm:flex-row sm:justify-between mb-3">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                  {role} @{" "}
                  <span className="text-blue-600 dark:text-cyan-400">{company}</span>
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                  {dates}
                </span>
              </div>

              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                {responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
