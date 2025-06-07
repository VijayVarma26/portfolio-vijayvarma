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
  Databases: [
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MariaDB", icon: <FaDatabase /> },
    { name: "MongoDB", icon: <SiMongodb /> },
  ],
  "AI/ML & LLMs": [
    { name: "Promptflow", icon: <FaPowerOff /> },
    { name: "LLM & NLP", icon: <FaPowerOff /> },
  ],
  "Reporting & DevOps": [
    { name: "Power BI", icon: <FaChartBar /> },
    { name: "CI/CD (GitHub)", icon: <SiGithub /> },
  ],
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="relative overflow-hidden py-20 bg-gradient-to-br from-white via-blue-50 to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
    >
      {/* Floating Background Elements */}
      <div className="absolute top-[-5rem] left-[-5rem] w-96 h-96 bg-cyan-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-5rem] right-[-5rem] w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl"></div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12 z-10 relative">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
          🛠️ Technical Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.entries(categorizedSkills).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-center text-gray-700 dark:text-gray-300 mb-4">
                {category}
              </h3>
              <ul className="flex flex-wrap justify-center gap-2">
                {skills.map((skill) => (
                  <motion.li
                    key={skill.name}
                    whileHover={{ y: -2, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group relative flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/50 dark:bg-white/10 border border-gray-200/40 dark:border-white/10 shadow-sm hover:shadow-md hover:border-cyan-400 dark:hover:border-cyan-500 transition text-sm min-w-[100px]"
                  >
                    <span className="text-cyan-600 dark:text-cyan-400">
                      {skill.icon}
                    </span>
                    <span className="text-gray-900 dark:text-white">
                      {skill.name}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
