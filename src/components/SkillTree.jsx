import { motion } from "framer-motion";
import ParticleBackground from "../components/helperComponents/ParticleBackground";

const skills = [
  { name: "Python, Javascript, Typescript, Java", level: 95 },
  { name: "PHP, SQL, SEO", level: 75 },
  { name: "HTML & CSS", level: 97 },
  { name: "Next.js/React & Tailwind", level: 92 },
  { name: "AstroJS", level: 90 },
  { name: "Vue.js, Julia, C, C#, C++", level: 45 },
  { name: "Git", level: 95 },
];

export default function SkillTree() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 md:px-20 bg-gray-900 text-gray-200 overflow-hidden"
    >
      <ParticleBackground count={40} />

      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>

        <div className="space-y-6 max-w-2xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-gray-300 font-medium">{skill.name}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-4 bg-blue-500 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
