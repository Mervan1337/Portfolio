import { motion } from "framer-motion";

export default function ParticleBackground({ count = 30 }) {
  const particles = Array.from({ length: count });

  return (
    <>
      {particles.map((_, i) => {
        const size = Math.random() * 4 + 2; // 2px–6px
        const xMotion = Math.random() * 40 - 20;
        const yMotion = Math.random() * 40 - 20;
        const delay = Math.random() * 5;
        const duration = 10 + Math.random() * 10;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(1px)",
              opacity: 0.1 + Math.random() * 0.2,
            }}
            animate={{
              x: [0, xMotion, 0],
              y: [0, yMotion, 0],
              opacity: [
                0.1 + Math.random() * 0.2,
                0.3 + Math.random() * 0.3,
                0.1 + Math.random() * 0.2,
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: duration,
              delay: delay,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </>
  );
}
