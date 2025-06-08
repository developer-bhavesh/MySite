import React from 'react';
import { motion } from 'framer-motion';

import pokemon from '../assets/pokeball.png';
import weather from '../assets/cloudy.png';
import food from '../assets/delivery-bike.png';

import swiftLogo from '../assets/swift.png';
import reactLogo from '../assets/react.png';

const projects = [
  {
    id: 1,
    title: 'Catch‑Em Dex',
    description: 'A SwiftUI Pokédex app for iOS that fetches real-time Pokémon data from the PokéAPI.',
    imageUrl: pokemon,
    demoUrl: 'https://github.com/developer-bhavesh/Catch-Em-Dex',
    frameworkLogo: swiftLogo,
  },
  {
    id: 2,
    title: 'Weather App',
    description: 'A cross-platform weather app built using React Native and Expo.',
    imageUrl: weather,
    demoUrl: 'https://github.com/developer-bhavesh/weather-app',
    frameworkLogo: reactLogo,
  },
  {
    id: 3,
    title: 'Food Delivery App',
    description: 'A beautifully designed food delivery app built using SwiftUI.',
    imageUrl: food,
    demoUrl: 'https://github.com/developer-bhavesh/FoodDelivery',
    frameworkLogo: swiftLogo,
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-950 text-white py-20 px-6 sm:px-12 mt-10"
    >
      <motion.h2
        className="text-4xl font-extrabold text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map(({ id, title, description, imageUrl, demoUrl, frameworkLogo }, index) => (
          <motion.div
            key={id}
            className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-blue-500/40 transition duration-300 flex flex-col h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-48 object-contain p-4"
                loading="lazy"
                decoding="async"
              />
              {frameworkLogo && (
                <img
                  src={frameworkLogo}
                  alt="framework"
                  className="absolute top-2 right-2 w-7 h-7 bg-gray-900 rounded-full p-1"
                />
              )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-300 mb-4 flex-grow">{description}</p>
              <div className="mt-auto">
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-500 hover:text-blue-400 font-semibold transition"
                >
                  View Code →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
