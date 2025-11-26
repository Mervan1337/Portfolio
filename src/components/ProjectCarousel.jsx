import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Card } from "./helperComponents/Card";
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: "CykelKväll (BikeNight)",
    description: "A cycling dinner party app to help the host organize the party.",
    image: "./Cykelkvall.jpg",
    tags: ["Astro", "React", "Tailwind", "Auth0", "FastApi", "Recharts", "OpenStreetMap"],
    detailedDescription: "A “cycling dinner party” refer to a dinner event where guests ride their bikes between different homes to eat one course at each stop (starter, main course, dessert). This project optimized and used openstreetmap to plan the most effective route for each pair. It could handle up to 50 pairs and had some fun features such as: Chat for the guests, statistics, closed/open events, leaderboard and more!"
  },
  {
    title: "Bachelor Thesis Project",
    description: "An app for helping construction workers digitalize their blueprints",
    image: "./kandidat.png",
    tags: ["Next.js", "Typescript", "Tailwind", "Framer-motion", "Cypress", "Lighthouse", "SPA"],
    detailedDescription: "I was teamlead for our bachelor project where we were supposed to help construction workers to digitalize their blueprints. You login with the ID06 API which is common in construction companies to use for allowing people into the construction zone. Then you could handle issues, ask questions to the leaders on sight, check blueprints (for both your own profession and for others). The goal was to make it extremly userfriendly. Everything in a Single Page Application."
  },
  {
    title: "Codr",
    description: "The new way to find coding mates?",
    image: "./codr.png",
    tags: ["Java", "Android"],
    detailedDescription: "A gameficated variant of finding new lab partners. It is similar to Tinder but instead of uploading picturs, you upload pictures of your code and what course you are taking. You can then swipe on others code, if both swipes \"yes\" - it is a match - time to chat! The app used sensors as: geofencing, camera & more! It was made for android telephones"
  },
  {
    title: "BekiCal",
    description: "A semi-offline calendar for tracking your life",
    image: "./bekical.png",
    tags: ["Java", "OOP", "SMHI API"],
    detailedDescription: "Calendar that used ics files to track your appointments. It had features such as: load in ics files, export your calendar and integration with the SMHI API to get todays weather"
  },
  {
    title: "Quiz App",
    description: "Interactive quiz platform for students",
    image: "./studentapp.png",
    tags: ["Next.js", "Tailwind", "Auth0", "Wildcard Routing"],
    detailedDescription: "An educational platform that allows teachers to create quizzes and students to test their knowledge in real-time. Our part of the group was to make the students quiz platform, send them to grading and then retrieve the results"
  },
  {
    title: "Website for the party comittee",
    description: "Informative page for the party comittee F-cellen.",
    image: "./f-cellen.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Github Pages"],
    detailedDescription: "It is a basic HTML & CSS website for keeping things easy for the newer generation incase the person is not familiar with web development. It has some minor JavaScript, it is currently deployed on github pages on my page so that I can easily access and help if needed."
  },
   {
    title: "Portfolio App",
    description: "This website you are on right now.",
    tags: ["Astro","React" ,"Tailwind", "Framer-motion", "Vercel"],
    detailedDescription: "This website is made in Astro, it is used to display who I am. It is deployed on Vercel and uses Cloudflare, for better security and a faster experience"
  },
  {
    title: "P2P Chat App",
    description: "An app for chatting in Peer to Peer",
    tags: ["C#", ".NET", "P2P", "WPF"],
    detailedDescription: "Made a P2P chat app for a project. It connects directly to the other chatter. You could send a buzz if the other is away from the keyboard and more!"
  },
  {
    title: "Reddit Profanity Scraper",
    description: "A scraper we did for a project in a course.",
    tags: ["Python", "Matplotlib", "Reddit API"],
    detailedDescription: "The project scrapes different reddit communities and ranks which is the most toxic based on a dictionary. It is later plot:ed in a graph using Matplotlib."
  },
  {
    title: "Sittning Entertainment App",
    description: "An app for sending in pictures to the hosts during a sittning. It has also a chat for all the participants.",
    tags: ["Next.js", "Tailwind", "Firebase", "Firestore", "Serverless", "Cloudinary"],
    detailedDescription: "This is a undergoing project, a sittning is when you are sitting down together and having a two or three course dinner. Usually there are activities during these parties, this app makes everyone join a lobby where you can send in pictures which is displayed on a big screen. There is also a chat for everyone to send something funny or what someone should do."
  },
];

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-12"
      >
        My Projects
      </motion.h2>

      <section className="w-full py-10">
        <div className="relative max-w-6xl mx-auto px-4">
          {/* Carousel Container */}
          <div className="overflow-hidden flex items-center justify-center min-h-[400px]">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full cursor-pointer"
              onClick={() => openModal(projects[currentIndex])}
            >
              <Card {...projects[currentIndex]} index={currentIndex} />
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-gray-600 hover:border-gray-400 hover:bg-gray-800 transition-colors shadow-sm text-gray-300 hover:text-white"
              aria-label="Previous project"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2 mx-4">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-blue-500 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full border border-gray-600 hover:border-gray-400 hover:bg-gray-800 transition-colors shadow-sm text-gray-300 hover:text-white"
              aria-label="Next project"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Project Counter */}
          <div className="text-center mt-4 text-sm text-gray-400">
            {currentIndex + 1} / {projects.length}
          </div>

          {/* Hint text */}
          <div className="text-center mt-2 text-sm text-gray-500">
            Click on the project card to view more details. More projects will be released.
          </div>
        </div>
      </section>

      {/* Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </>
  );
}