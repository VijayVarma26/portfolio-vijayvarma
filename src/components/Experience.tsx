import { motion } from "framer-motion";
import IONLogo from "../assets/ION_Group.svg";
import InfosysLogo from "../assets/InfosysLogo.png";

const experiences = [
  {
    logo: IONLogo,
    company: "ION Analytics",
    role: "Senior Data Engineer",
    dates: "Jan 2022 – Present",
    responsibilities: [
      "Built and managed 15+ robust ETL pipelines using Databricks and PySpark, processing over 120M records monthly.",
      "Automated ECM IPO deal entries via GPT-4 and Promptflow, reducing processing time by 98%.",
      "Led LLM-based web crawler project yielding 110K+ leads with 12% revenue uplift.",
      "Collaborated with cross-functional teams to deliver AI-integrated data products for M&A and capital markets.",
    ],
  },
  {
    logo: InfosysLogo,
    company: "Infosys",
    role: "Technology Analyst",
    dates: "Jul 2016 – Dec 2021",
    responsibilities: [
      "Developed scalable data warehousing solutions for finance clients using SQL Server and Informatica.",
      "Optimized report automation processes, saving 350+ hours monthly.",
      "Managed a team of 4 developers in agile delivery of analytics dashboards.",
      "Delivered business intelligence solutions for US-based banking clients.",
    ],
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="section py-20 px-6 md:px-24 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-14 text-blue-600 dark:text-cyan-400">
        💼 Experience
      </h2>

      <div className="relative border-l-4 border-cyan-400 dark:border-cyan-500 pl-8 space-y-16">
        {experiences.map(({ logo, company, role, dates, responsibilities }, index) => (
          <motion.div
            key={company}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative flex gap-6"
          >
            {/* Timeline Dot with Logo */}
            <div className="absolute -left-14 top-6 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center ring-2 ring-gray-200 dark:ring-gray-700">
              <img
                src={logo}
                alt={`${company} Logo`}
                className="w-10 h-10 object-contain"
              />
            </div>






            {/* Experience Card */}
            <div className="flex-1 bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {role}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                  {dates}
                </span>
              </div>
              <h4 className="text-lg text-blue-600 dark:text-cyan-400 font-semibold mb-4">
                {company}
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-base">
                {responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
