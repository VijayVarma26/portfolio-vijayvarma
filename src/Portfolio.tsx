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
    <main className="bg-gradient-to-b from-[#1c1c1e] to-[#121214] text-gray-200 font-light min-h-screen px-6 md:px-24 py-16">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
