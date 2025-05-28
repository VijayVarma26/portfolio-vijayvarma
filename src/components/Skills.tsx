import {
  FaPython,
  FaJava,
  FaDocker,
  FaCloud,
  FaDatabase,
  FaPowerOff,
  FaChartBar,
} from "react-icons/fa";
import {
  SiJavascript,
  SiApachehadoop,
  SiApachespark,
  SiFastapi,
  SiDatabricks,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiHive,
  SiGithub,
} from "react-icons/si";

import { motion } from "framer-motion";
import React from "react";

const categorizedSkills = {
  "Programming Languages": [
    { name: "Python", icon: <FaPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "SQL", icon: <SiMysql /> },
  ],
  "Data Engineering & Tools": [
    { name: "PySpark", icon: <SiApachespark /> },
    { name: "SparkSQL", icon: <SiApachespark /> },
    { name: "Hive", icon: <SiHive /> },
    { name: "Hadoop", icon: <SiApachehadoop /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "Docker", icon: <FaDocker /> },
  ],
  "Cloud & Big Data": [
    { name: "Azure", icon: <FaCloud /> },
    { name: "Databricks", icon: <SiDatabricks /> },
    { name: "Azure Data Factory", icon: <FaCloud /> },
  ],
  "Databases": [
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MariaDB", icon: <FaDatabase /> },
    { name: "MongoDB", icon: <SiMongodb /> },
  ],
  "AI/ML & LLMs": [
    { name: "Promptflow", icon: <FaPowerOff /> }, // Placeholder icon
    { name: "LLM & NLP", icon: <FaPowerOff /> },
  ],
  "Reporting & DevOps": [
  { name: "Power BI", icon: <FaChartBar /> }, // Replaces SiPowerbi
  { name: "CI/CD (GitHub)", icon: <SiGithub /> },
],
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="section py-16 px-6 md:px-24 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-8 text-blue-600 dark:text-cyan-400">
        🛠️ Technical Skills
      </h2>

      <div className="space-y-10">
        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              {category}
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <motion.li
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-3 rounded-xl font-medium shadow hover:shadow-lg transition"
                >
                  <span className="text-xl">{skill.icon}</span>
                  {skill.name}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
