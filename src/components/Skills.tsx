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
      className="section py-20 px-6 md:px-24 bg-gradient-to-br from-gray-100 via-blue-50 to-cyan-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-800 dark:text-white relative z-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
        🛠️ Technical Skills
      </h2>

      <div className="space-y-12">
        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              {category}
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-8">

              {skills.map((skill) => (
                <motion.li
                key={skill.name}
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative overflow-hidden flex items-center gap-2 px-3 py-2 rounded-xl bg-white/60 dark:bg-white/10 backdrop-blur-md border border-gray-200/50 dark:border-white/10 shadow-md hover:shadow-xl hover:border-cyan-400 dark:hover:border-cyan-500 transition duration-300"
              >
                {/* Glowing Icon Background */}
                <div className="absolute -left-4 -top-4 w-20 h-20 bg-cyan-300/10 dark:bg-cyan-400/10 blur-2xl rounded-full group-hover:animate-pulse z-0"></div>

                {/* Icon */}
                <span className="text-2xl text-cyan-600 dark:text-cyan-400 relative z-10">
                  {skill.icon}
                </span>

                {/* Label */}
                <span className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white relative z-10">
                  {skill.name}
                </span>
              </motion.li>

              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
