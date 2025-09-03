import { motion } from "framer-motion";

export default function CTA() {
	return (
		<section id="contact" className="relative py-24 bg-gray-900 text-gray-200 px-6 md:px-20 text-center">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="text-4xl font-bold mb-6"
			>
				Let’s Work Together
			</motion.h2>

			<motion.p
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
				className="text-gray-300 text-lg max-w-xl mx-auto mb-8"
			>
				I'm always open to interesting projects, collaborations or other opportunities. 
				Feel free to reach out and connect!
			</motion.p>

			<motion.a
				href="mailto:mervanpalmer@hotmail.com"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.4 }}
				className="inline-block bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition"
			>
				Say Hello
			</motion.a>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.6 }}
				className="flex justify-center gap-6 mt-8"
			>
				<a
					href="https://github.com/Mervan1337"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-white transition"
				>
					GitHub
				</a>
				<a
					href="https://www.linkedin.com/in/palm%C3%A9r/"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-white transition"
				>
					LinkedIn
				</a>
			</motion.div>
		</section>
	);
}
