import { motion } from "framer-motion";

const experiences = [
  {
    role: "Data Engineer",
    company: "ION Analytics",
    dates: "Jan 2022 – Present",
    responsibilities: [
      "Led design of scalable data pipelines using Azure Databricks, PySpark, and Data Factory.",
      "Integrated LLMs and AI automation for IPO, KYC, and reporting workflows.",
      "Built FastAPI microservices for data ingestion, transformation, and validation.",
      "Migrated legacy systems to Azure Delta Lake; unified reporting across AWS, MariaDB, and SharePoint.",
      "Collaborated with DevOps to implement CI/CD pipelines and system monitoring.",
    ],
  },
  {
    role: "Technology Analyst",
    company: "Infosys",
    dates: "June 2018 – Jan 2022",
    responsibilities: [
      "Developed ETL workflows using Python, SQL, HiveQL, and Apache Sqoop.",
      "Implemented batch data pipelines using Hadoop, Hive, and Oozie.",
      "Built RESTful APIs and dashboards with Flask and JavaScript for real-time insights.",
      "Migrated structured and unstructured data to cloud platforms to enhance accessibility and compliance.",
    ],
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="section py-16 px-6 md:px-24 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-12 text-blue-600 dark:text-cyan-400">
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
            className="relative bg-white/70 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-3 top-5 w-4 h-4 bg-cyan-400 dark:bg-cyan-500 rounded-full border-4 border-white dark:border-gray-900 shadow-md" />

            <div className="flex flex-col sm:flex-row sm:justify-between mb-3">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                {role} @ <span className="text-blue-600 dark:text-cyan-400">{company}</span>
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
    </motion.section>

  );
}
