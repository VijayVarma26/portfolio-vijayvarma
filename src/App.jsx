import { Card, CardContent } from "@/components/ui/card";

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800 p-4 md:p-8">
      <header className="text-center mb-12 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-12 rounded-2xl shadow-lg">
        <h1 className="text-5xl font-extrabold">Vijay Varma</h1>
        <p className="text-xl mt-2">
          Data Engineer | LLM Workflow Automation | Cloud-Native Pipelines
        </p>
        <div className="flex justify-center gap-6 mt-4 text-white">
          <a
            href="mailto:varmavijay2021@gmail.com"
            className="bg-white text-blue-600 font-medium py-2 px-4 rounded-full hover:bg-gray-100 transition"
          >
            Contact
          </a>
          <a
            href="https://linkedin.com/in/vijayvarma-de"
            target="_blank"
            className="border border-white py-2 px-4 rounded-full hover:bg-white hover:text-blue-600 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/VijayVarma26"
            target="_blank"
            className="border border-white py-2 px-4 rounded-full hover:bg-white hover:text-blue-600 transition"
          >
            GitHub
          </a>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">👨‍💼 Professional Summary</h2>
        <p>
          Data Engineer with 7 years of experience designing scalable,
          high-performance data pipelines and AI-integrated workflows.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🛠️ Technical Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 list-disc list-inside">
          <li>Python, SQL, Java, JavaScript</li>
          <li>Azure, PySpark, Hadoop</li>
          <li>Databricks, SparkSQL, Docker</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">💼 Experience</h2>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-bold text-lg">ION Analytics – Data Engineer</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Built data pipelines using Azure & PySpark.</li>
              <li>Automated workflows with FastAPI & LLMs.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center mt-16 text-sm text-gray-500">
        © 2025 Vijay Varma. Built with ❤️ and React.
      </footer>
    </div>
  );
}
