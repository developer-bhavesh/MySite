// HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import profilePhoto from '../assets/myimage.png';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6 py-16">
      <div className="flex flex-col-reverse sm:flex-row items-center max-w-6xl w-full gap-12">

        {/* Text content */}
        <motion.div
          className="text-center sm:text-left flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
            Hey, I'm <span className="text-blue-500">Bhavesh Solanki</span>
          </h1>
          <h2 className="text-2xl text-blue-200 mb-4">React Native & SwiftUI Developer</h2>
          <p className="text-gray-300 mb-6 text-lg">
            I build high-quality mobile apps for iOS and Android using SwiftUI & React Native.
            Passionate about smooth UI and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <a
              href="/resume.pdf"
              download
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-md transition-all duration-300"
            >
              📄 Download Resume
            </a>
            <a
              href="/project"
              className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 font-semibold rounded-2xl transition-all duration-300"
            >
              🚀 View Projects
            </a>
          </div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          className="flex-shrink-0 relative"
        >
          <div className="absolute inset-0 rounded-full bg-blue-500 blur-2xl opacity-20 scale-110"></div>
          <img
            src="https://gravatar.com/userimage/261252365/9536522ec79b0326becf3a689ce3a40b.jpeg?size=256&cache=1749303230078"
            alt="Bhavesh Solanki"
            className="relative rounded-full w-40 h-40 sm:w-52 sm:h-52 object-cover border-4 border-blue-600 shadow-xl"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
