import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="relative py-20 bg-gradient-to-bl from-white via-blue-50 to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
    >
      {/* Background Glow */}
      <div className="absolute -top-20 left-10 w-96 h-96 bg-cyan-400 opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-16 right-10 w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl z-0" />

      <div className="max-w-xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-center text-4xl font-serif mb-16 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          📬 Let’s Connect
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Open to freelance & full-time opportunities.
        </p>

        <a
          href="mailto:varmavijay2021@gmail.com"
          className="inline-flex items-center justify-center gap-3 px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-cyan-400 rounded-xl font-medium hover:bg-blue-600 dark:hover:bg-cyan-600 hover:text-white transition-colors duration-300 shadow-md hover:shadow-xl"
        >
          <FaEnvelope />
          Send Email
        </a>

        <div className="mt-10 flex justify-center gap-8 text-3xl text-gray-500 dark:text-gray-400">
          <a
            href="https://linkedin.com/in/vijayvarma-de"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/VijayVarma26"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
