import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub, FaLinkedin, FaReact, FaNodeJs, FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript, SiFirebase, SiExpress,
  SiTailwindcss, SiSwift,
} from "react-icons/si";
import profileVector from "../assets/myimage.png";

const techStack = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "React Native", icon: <FaReact className="text-blue-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "SwiftUI", icon: <SiSwift className="text-orange-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
  { name: "Express", icon: <SiExpress className="text-gray-300" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-300" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
];

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1], delay }
  }
});

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4,
      ease: "easeInOut"
    }
  }
};

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gray-950 text-white relative overflow-hidden"
    >
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn(0)}
        className="text-4xl font-bold text-center mb-12 relative z-10 select-none"
      >
        About Me
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn(0.2)}
        className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10 bg-gray-800 p-8 rounded-lg shadow-xl relative z-10"
      >
        <motion.div
          variants={fadeIn(0.3)}
          className="flex justify-center lg:justify-start relative"
          style={{ minWidth: 256 }}
        >
          <img
            src={profileVector}
            alt="Bhavesh Solanki profile image"
            className="relative w-64 h-64 object-contain rounded-lg"
            draggable={false}
          />
        </motion.div>

        <motion.div
          variants={fadeIn(0.4)}
          className="text-gray-300 space-y-6 text-lg select-text"
        >
          <p>
            Hi! I’m <span className="text-blue-400 font-semibold">Bhavesh Solanki</span>, a React Native & full-stack developer from Gujarat, India. I’ve built fast, scalable mobile and web apps for over 2 years.
          </p>
          <p>
            I specialize in JavaScript, SwiftUI, Node.js, Firebase, and UI/UX design. I enjoy turning ideas into interactive, user-friendly experiences.
          </p>
          <p>
            Outside of coding, you’ll find me exploring new tech, contributing to open source, or fine-tuning animations and interfaces.
          </p>

          <div className="flex space-x-6 text-2xl pt-4">
            <a
              href="https://github.com/developer-bhavesh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/bhavesh-solanki-165b632b3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="max-w-4xl mx-auto mt-16 select-none relative z-10"
      >
        <motion.h3
          variants={fadeIn(0.3)}
          className="text-2xl font-semibold text-center text-blue-400 mb-6"
        >
          Tech Stack
        </motion.h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {techStack.map(({ name, icon }, i) => (
            <motion.div
              key={i}
              variants={fadeIn(i * 0.1)}
              className="bg-gray-700 text-gray-300 rounded-xl hover:bg-blue-600 hover:text-white transition-colors duration-300 
                         flex flex-col items-center justify-center gap-2 p-4 cursor-default select-none min-h-[100px]"
            >
              <div className="text-3xl md:text-4xl">{icon}</div>
              <span className="text-sm md:text-base font-medium text-center">{name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
