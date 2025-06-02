export default function Footer() {
  return (
    <footer className="text-center py-8 px-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        © 2025{" "}
        <span className="font-semibold text-blue-600 dark:text-cyan-400">
          Vijay Varma
        </span>{" "}
        — Built with{" "}
        <span className="font-medium">React</span>,{" "}
        <span className="font-medium">Tailwind CSS</span> &{" "}
        <span className="font-medium">Framer Motion</span>
      </p>
    </footer>
  );
}
