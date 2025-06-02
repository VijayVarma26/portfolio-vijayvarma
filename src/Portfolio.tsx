"use client";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Portfolio() {
  return (
    <main className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-gray-900 text-gray-800 dark:text-white font-light min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 space-y-24">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
