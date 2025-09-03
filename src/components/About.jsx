import { motion } from "framer-motion"
import ParticleBackground from "../components/helperComponents/ParticleBackground";

export default function About() {
	return (
		<section id="about" className="relative py-24 bg-gray-900 text-gray-200 px-6 md:px-20">
			<ParticleBackground count={20} />
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="text-4xl font-bold text-center mb-12"
			>
				About Me
			</motion.h2>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="max-w-3xl mx-auto text-lg space-y-4"
			>
				<p>
					I am a passionate software engineering student at <strong>Linköpings Universitet</strong>, currently pursuing a 
					<strong> B.Sc. in Computer Science and Software Engineering</strong> and a <strong>M.Sc. in Industrial Engineering and Management</strong>.
				</p>

				<p>
					The program has provided me with a solid foundation in software development, algorithms, databases and 
					collaborative project management. Through both coursework and voluntary projects, I have acquired hands-on experience in a variety of areas, from software development and project management to sales and organizational tasks.
				</p>

				<p>
					Beyond academics, I enjoy taking part in student organizations, managing projects, and continuously 
					improving my skills in both front-end and back-end development.
				</p>
			</motion.div>
		</section>
	)
}
