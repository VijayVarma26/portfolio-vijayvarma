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
      <h2 className="text-3xl font-bold mb-8 text-blue-600 dark:text-cyan-400">
        💼 Experience
      </h2>

      <div className="space-y-10">
  {experiences.map(({ role, company, dates, responsibilities }, index) => (
    <motion.div
      key={`${company}-${role}`}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.3 }}
      whileHover={{ scale: 1.01 }}
      className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex justify-between items-start mb-3 flex-col md:flex-row">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {company} — {role}
        </h3>
        <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
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
