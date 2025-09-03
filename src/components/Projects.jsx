import { motion } from "framer-motion";
import { Card } from "./helperComponents/Card.jsx";

const voluntaryWork = [
  {
    title: "Project Manager",
    description: "Promoted the organization's brand and supported marketing goals",
    link: "https://karservice.se/"
  },
  {
    title: "Beverage Operations Manager",
    description: "Managed beverage sales at a large-scale student event (5,500 attendees, turnover >2M sek). Expanded product range and ensured regulatory compliance.",
    link: "https://www.munchenhoben.lintek.liu.se/"
  },
  {
    title: "Corporate Relations and Web Developer",
    description: "Designed and maintained the organization's website. Managed corporate relations",
    link: "#"
  },
  {
    title: "Developer & Project Manager",
    description: "Developed and maintained the Computer Science student section's website. Managed annual hackathon together with Webmaster",
    link: "https://www.webbu.se/"
  },
  {
    title: "Section Leader for Industry Relations",
    description: "Managed communication with corporate partners and facilitated collaborations",
    link: "https://d-sektionen.se/naringsliv/"
  }
];

export default function Projects() {
  return (
    <section id="voluntary-work" className="relative py-24 bg-gray-900 text-gray-200 px-6 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Voluntary Work
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-3">
        {voluntaryWork.map((item, index) => (
          <Card key={index} {...item} index={index} />
        ))}
      </div>
    </section>
  );
}
