import { FaPython, FaJava, FaDocker } from "react-icons/fa";
import { SiJavascript, SiAzuredevops, SiApachespark, SiFastapi, SiDatabricks } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const categorizedSkills = {
  Languages: [
    { name: "Python", icon: <FaPython /> },
    { name: "Java & JavaScript", icon: <SiJavascript /> },
    { name: "SQL", icon: <GrMysql /> },
  ],
  "Frameworks & Tools": [
    { name: "PySpark", icon: <SiApachespark /> },
    { name: "SparkSQL", icon: <SiApachespark /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "Docker", icon: <FaDocker /> },
  ],
  "Cloud & Big Data": [
    { name: "Azure", icon: <SiAzuredevops /> },
    { name: "Databricks", icon: <SiDatabricks /> },
  ],
};

export default function Skills() {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-gray-800">🛠️ Technical Skills</h2>

      <div className="space-y-8">
        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">{category}</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <motion.li
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 bg-white text-gray-800 px-4 py-3 rounded-xl font-medium shadow hover:shadow-lg transition"
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
