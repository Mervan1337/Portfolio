import { motion } from "framer-motion";
import BackgroundCircles from "./helperComponents/BackgroundCircles.jsx";

export default function Hero() {
	return (
		<section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200 overflow-hidden">
			
			{/* Circles only in Hero */}
			<BackgroundCircles />

			{/* Hero Content */}
			<motion.h1
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="relative z-10 text-5xl md:text-6xl font-extrabold text-gray-100"
			>
				Hi, I'm Mervan Palmér
			</motion.h1>

			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 1 }}
				className="relative z-10 mt-4 text-lg md:text-xl text-gray-300 max-w-xl"
			>
				I’m a Software Engineer passionate about building interactive, fast and beautiful applications.
			</motion.p>
		</section>
	);
}
