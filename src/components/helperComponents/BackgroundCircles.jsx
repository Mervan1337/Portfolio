import { motion } from "framer-motion";

export default function BackgroundCircles() {
	return (
		<div className="absolute inset-0 pointer-events-none z-0">
			<motion.div
				className="absolute w-96 h-96 bg-white/20 rounded-full top-10 left-[-5%] filter blur-3xl mix-blend-screen"
				animate={{ rotate: 360 }}
				transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
			/>
			<motion.div
				className="absolute w-72 h-72 bg-white/15 rounded-full top-[20%] right-0 filter blur-3xl mix-blend-screen"
				animate={{ rotate: -360 }}
				transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
			/>
			<motion.div
				className="absolute w-56 h-56 bg-white/10 rounded-full bottom-10 left-[5%] filter blur-3xl mix-blend-screen"
				animate={{ rotate: 180 }}
				transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
			/>
			<motion.div
				className="absolute w-40 h-40 bg-white/10 rounded-full bottom-[15%] right-[10%] filter blur-3xl mix-blend-screen"
				animate={{ rotate: -180 }}
				transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
			/>
		</div>
	);
}
