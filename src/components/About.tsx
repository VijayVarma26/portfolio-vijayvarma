import React from "react";

export default function About() {
  return (
    <section id="about" className="section bg-white text-gray-800">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Profile / Illustration */}
        <div className="w-full flex justify-center">
          <img
            src="/profile.jpg" // Replace with your actual image path or placeholder
            alt="Your Name"
            className="w-52 h-52 rounded-full object-cover shadow-md"
          />
        </div>

        {/* Bio */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Hi, I'm [Your Name]</h2>
          <p className="text-lg mb-4 leading-relaxed">
            I'm a <span className="font-semibold text-blue-600">Data Engineer</span> with 7+ years of experience building scalable data solutions in the finance research domain.
          </p>
          <p className="text-gray-600">
            Passionate about turning complex data into valuable insights through automation, LLMs, and modern cloud tools. I thrive on solving real-world problems with clean code and collaborative teamwork.
          </p>

          {/* Highlights (optional) */}
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <span className="font-medium">Experience:</span> 7+ years
            </div>
            <div>
              <span className="font-medium">Specialties:</span> Python, Databricks
            </div>
            <div>
              <span className="font-medium">Cloud:</span> Azure
            </div>
            <div>
              <span className="font-medium">Focus:</span> AI-Driven Data Solutions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
