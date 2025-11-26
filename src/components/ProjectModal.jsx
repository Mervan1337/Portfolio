import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

export default function ProjectModal({ project, isOpen, onClose }) {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="relative">

                {/* Making picture optional */}
                {project.image && (
                  <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                )}
                
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 bg-gray-800/90 hover:bg-gray-700 rounded-full p-2 transition-colors shadow-lg text-gray-300 hover:text-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Extended Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-white">Project Details</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {project.detailedDescription || "This is where you can add more detailed information about the project. You can describe the challenges faced, solutions implemented, features developed, and any other relevant details that showcase your work."}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features (if available) */}
                {project.features && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4 text-white">Key Features</h3>
                    <ul className="text-gray-400 space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}