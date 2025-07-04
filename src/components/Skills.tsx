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
      className="relative overflow-hidden py-20 px-6 md:px-20 bg-gradient-to-br from-white via-blue-50 to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Background Blobs */}
      <div className="absolute top-[-6rem] left-[-6rem] w-96 h-96 bg-cyan-400 opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[-6rem] right-[-6rem] w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-center text-4xl font-serif mb-16 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          🛠️ Technical Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.entries(categorizedSkills).map(([category, skills]) => (
            <div
              key={category}
              className="rounded-2xl bg-white/50 dark:bg-white/10 border border-white/30 dark:border-white/10 backdrop-blur-md shadow-md dark:shadow-inner p-6 transition-all"
            >
              <h3 className="text-lg font-medium text-center text-cyan-700 dark:text-cyan-300 mb-4">
                {category}
              </h3>
              <ul className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <motion.li
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center gap-3 py-2 px-3 rounded-lg bg-white/60 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 transition"
                  >
                    <span className="text-cyan-600 dark:text-cyan-400 text-xl">
                      {skill.icon}
                    </span>
                    <span className="text-sm text-gray-900 dark:text-gray-200 font-light tracking-wide">
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
