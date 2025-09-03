import { motion } from "framer-motion"

const experiences = [
	{
		title: "Teaching Assistant",
		company: "Linköping University - Linköping, Sweden",
		period: "January 2025 - July 2025",
		details: [
			"Supervised a team of 8 students during their bachelor project in Software Engineering (TDDD96).",
			"Provided guidance on project planning, technical challenges, and software development best practices."
		]
	},
	{
		title: "Warehouse Worker / Food Industry Worker",
		company: "HKScan - Linköping, Sweden",
		period: "Summers 2024 & 2025",
		details: [
			"Handled pallet picking, goods reception, and dispatch at the national distribution center.",
			"Operated forklifts and managed logistics."
		]
	},
	{
		title: "Forklift Operator",
		company: "Scania Sverige - Oskarshamn, Sweden",
		period: "Summers 2021 & 2023",
		details: [
			"Stored incoming pallets and unloaded trailers efficiently.",
			"Utilized forklifts for inventory placement in racks."
		]
	},
	{
		title: "Receptionist & Supervisor",
		company: "Oskarshamns kommun - Oskarshamn, Sweden",
		period: "June 2022 - August 2022",
		details: [
			"Managed a camping facility, including customer reception, landscaping, and cleaning.",
			"Supervised summer workers aged 15."
		]
	}
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-gray-900 text-gray-200 px-6 md:px-20 overflow-hidden">
      {/* Soft floating background circles */}
      <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-blue-500 opacity-10 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-pink-500 opacity-10 rounded-full filter blur-3xl"></div>
      <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-purple-500 opacity-10 rounded-full filter blur-3xl"></div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-16 relative z-10"
      >
        Experience
      </motion.h2>

      <div className="relative border-l-2 border-gray-600 ml-6 pl-8 z-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-12 relative bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <span className="absolute -left-6 top-6 w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-900"></span>
            <h3 className="text-2xl font-semibold">{exp.title}</h3>
            <p className="text-gray-300 italic mb-1">{exp.company}</p>
            <p className="text-gray-400 mb-4">{exp.period}</p>
            <ul className="list-disc list-inside text-gray-200 space-y-1">
              {exp.details.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}