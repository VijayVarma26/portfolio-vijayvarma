import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="section text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <h2 className="section-title mb-2">📬 Let’s Connect</h2>
      <p className="text-gray-400 mb-6">Open to freelance & full-time opportunities.</p>

      <a
        href="mailto:varmavijay2021@gmail.com"
        className="btn-outline inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-300"
      >
        <FaEnvelope /> Send Email
      </a>

      <div className="mt-8 flex justify-center gap-8 text-gray-500 dark:text-gray-400 text-2xl">
        <a
          href="https://linkedin.com/in/vijayvarma-de"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-600 transition-colors duration-300"
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
    </motion.section>
  );
}
