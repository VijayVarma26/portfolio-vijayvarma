import { useState } from "react";
import { motion } from "framer-motion";
import IONLogo from "../assets/ION_Group.svg";
import InfosysLogo from "../assets/InfosysLogo.png";

export default function Experience() {
  const experiences = [
    {
      logo: IONLogo,
      company: "ION Analytics",
      role: "Data Engineer",
      dates: "Jan 2022 – Present",
      responsibilities: [
        "Designed and deployed 15+ scalable, production-grade data pipelines using Azure Databricks, PySpark, and ADF, processing over 120M records monthly.",
        "Built AI-driven microservices using FastAPI and GPT-4 for IPO deal creation, cutting manual effort by 95% and reducing processing time from 2.5 hours to 3 minutes.",
        "Led the development of a web crawler powered by LLM and Promptflow, generating 110K+ high-value leads and boosting client engagement by 12%.",
        "Engineered an M&A sync pipeline reconciling 1.25M+ deal records across Mergermarket and Dealogic, impacting 2M+ advisors and 4.3M+ individuals.",
        "Automated real-time KYC compliance using a FastAPI + Selenium scraping engine for 50+ PEP/sanctions sources, saving 400+ hours/week.",
        "Developed RAG-based solutions in PostgreSQL to overcome LLM token limitations in regulatory data ingestion pipelines.",
        "Orchestrated cloud migrations from legacy on-prem systems to Azure Delta Lake, integrating AWS S3, MariaDB, and SharePoint.",
        "Implemented CI/CD workflows using GitHub Actions for data microservices and monitored them via Azure App Insights.",
        "Built full stack internal dashboards using React and Node.js to visualize pipeline status, error tracking, and metadata lineage.",
        "Collaborated with product managers, data scientists, and DevOps to deliver robust APIs, reduce tech debt, and scale AI-driven workflows.",
      ],
    },
    {
      logo: InfosysLogo,
      company: "Infosys",
      role: "Technology Analyst",
      dates: "June 2018 – Jan 2022",
      responsibilities: [
        "Designed and maintained enterprise ETL workflows using Python, SQL, HiveQL, and Apache Sqoop to support multi-country financial operations.",
        "Developed REST APIs and dashboards using Flask and JavaScript (NVD3.js), enabling real-time monitoring of telecom order processing.",
        "Implemented batch data pipelines using Hadoop, Hive, and Oozie for millions of daily records across structured and semi-structured formats.",
        "Migrated datasets from on-prem SQL servers to Azure for a U.S. banking client, improving query times and report delivery SLAs.",
        "Led a team of 4 developers to deliver agile analytics projects under tight deadlines, using JIRA and Toyota Kata methodology.",
        "Collaborated on the Tails Dashboard for British Telecom to visualize root causes of order delays, reducing escalations by 35%.",
        "Designed SQL logic and backend workflows to support fraud analytics, churn prediction, and customer segmentation pipelines.",
        "Wrote Linux shell scripts for scheduled data jobs, log cleanups, and batch file integrations across distributed data systems.",
      ],
    },
  ];

  return (
    <motion.section
      id="experience"
      className="relative py-24 px-6 md:px-16 bg-gradient-to-br from-white via-blue-50 to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
    >
      {/* Background Glow Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-400 opacity-20 rounded-full blur-3xl z-0"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl z-0"></div>

      <div className="max-w-5xl mx-auto z-10 relative">
        <h2 className="text-4xl font-extrabold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
          💼 Experience
        </h2>

        <div className="relative border-l-[3px] border-cyan-300 dark:border-cyan-500 pl-8 space-y-20">
          {experiences.map(
            ({ logo, company, role, dates, responsibilities }, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div
                  className="absolute -left-14 top-4 w-20 h-20 rounded-full z-10 
                bg-white dark:bg-gray-10 
                border-[3px] border-cyan-400 dark:border-cyan-500 
                shadow-md flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt={`${company} logo`}
                    className="w-10 h-10 object-contain"
                  />
                </div>

                {/* Experience Card with hover animation */}
                <div className="flex-1 bg-white dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md pl-14 pr-6 py-6 md:pl-20 transform transition-transform duration-300 group-hover:scale-[1.015]">
                  <div className="flex flex-col md:flex-row md:justify-between mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                      {role}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                      {dates}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-blue-600 dark:text-cyan-400 mb-4">
                    {company}
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 text-base">
                    {responsibilities.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </motion.section>
  );
}
