import { motion } from "framer-motion";

export function Card({ title, description, link, image, tags, index, onClick }) {
  // If there's a link, render as external link
  // If there's onClick, render as clickable div for modal
  // Otherwise, render as regular div
  
  const cardContent = (
    <>
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}

      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>

      <p className="text-gray-300 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tags?.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-sm bg-gray-700 rounded-full text-gray-200 border border-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  // If external link is provided
  if (link) {
    return (
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:bg-gray-750"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ scale: 1.02 }}
      >
        {cardContent}
      </motion.a>
    );
  }

  // If onClick is provided (for modal)
  if (onClick) {
    return (
      <motion.div
        onClick={onClick}
        className="block bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:bg-gray-750"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ scale: 1.02 }}
      >
        {cardContent}
      </motion.div>
    );
  }

  // Default: non-clickable card
  return (
    <motion.div
      className="block bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {cardContent}
    </motion.div>
  );
}