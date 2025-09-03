import { motion } from "framer-motion";

export function Card({ title, description, link, index }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gray-700 rounded-xl p-6 shadow-md transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-600"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.a>
  );
}
