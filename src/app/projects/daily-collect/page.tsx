"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import OtherProjects from '@/components/OtherProjects';

// Animation configuration
const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6 }
};

export default function DailyCollectProject() {
  const [loading, setLoading] = useState(true);
  const [showOriginalPhotos, setShowOriginalPhotos] = useState(false);
  
  const projectImages = [
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/5010fd78-d49c-497a-8653-d5445869c10c/Group_1000000941/w=1920,quality=90,fit=scale-down",
      alt: "Daily Collect Cover",
      title: "Everyday Sunrise☀️",
      description: "Self-entertainment during work-from-home. Sunrise is the best start of the day."
    },
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/c58415bf-0a72-4b03-af23-209dbcc58cc0/IMG_6148/w=1920,quality=90,fit=scale-down",
      alt: "The change of Moon",
      title: "The change of Moon🌛",
      description: "As time cycles day after day, the natural changes foreshadow the differences."
    },
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/b50a5531-4e2c-4b37-8cd2-45f9b6281e1f/IMG_0451/w=1920,quality=90,fit=scale-down",
      alt: "Journey of Rocks",
      title: "Journey of Rocks",
      description: "🌟Guess how's the original photos look like？"
    },
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/a6042999-fbc6-4b5d-800e-117e55f758c9/IMG_0450/w=1920,quality=90,fit=scale-down",
      alt: "Flight View Across Taklamakan Desert",
      title: "Flight View Across Taklamakan Desert",
      description: "The Taklamakan Desert is the second largest desert in the world. From Kashgar, the westernmost city in China, to Lanzhou, the capital of Gansu Province, the landscape undergoes fascinating changes due to wind and water."
    },
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/9d0171e6-b0fa-470c-90b5-bced36a5f765/IMG_0242/w=1080,quality=90,fit=scale-down",
      alt: "Mountains in Xinjiang",
      title: "Mountains in Xinjiang —— from a drone's perspective",
      subtitle: "(Co-shot with photographer Lijuan W.)",
      description: "Viewing the world from an angle that humans might not be able to reach."
    },
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/65f9708e-2b85-493f-89fa-13799b6461c9/IMG_0584/w=1920,quality=90,fit=scale-down",
      alt: "Animals in the desert",
      title: "Animals in the desert",
      description: "Desolation and vitality the power of life."
    }
  ];
  
  const originalPhotos = [
    "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/9bc4f51d-5e3c-450b-8607-73744f449390/Group_1000000940/w=1920,quality=90,fit=scale-down",
    "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/d0fdc4e2-2eaf-41f5-8870-d68bf2ebe49d/0d539046-56dd-4562-895e-45e72a31d422/w=750,quality=90,fit=scale-down"
  ];

  return (
    <main className="pb-16 text-gray-800">
      {/* Project header */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 mb-8 pt-10"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Daily Collect — Di's Photo Gallery</h1>
          <p className="text-xl text-gray-700 mb-8">
            People may forget, but photos remember.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="skill-tag bg-gray-200 text-gray-800">Photography</span>
            <span className="skill-tag bg-gray-200 text-gray-800">Visual Art</span>
            <span className="skill-tag bg-gray-200 text-gray-800">Documentary</span>
          </div>
        </div>
      </motion.div>
      
      {/* All project images with proper captions */}
      {projectImages.map((image, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 * (index + 1) }}
          className="w-full mb-12"
        >
          <div className={`overflow-hidden ${
            index === 5 ? 'w-full h-[470px]' : 
            index === 4 ? 'max-w-6xl mx-auto' : 
            index === 3 ? 'w-full' : ''}`}>
            <img 
              src={image.url} 
              alt={image.alt}
              className={`w-full h-full ${
                index === 5 ? 'object-cover object-center' : 
                index === 4 ? 'object-scale-down' : 
                index === 3 ? 'object-cover' : 'object-contain'}`}
              style={index === 5 ? { clipPath: 'inset(0 0 0 0)' } : undefined}
            />
          </div>
          <div className="container mx-auto px-4 mt-6">
            <div className="text-left max-w-2xl ml-10 mr-auto pl-0 pr-6 mb-12">
              <h3 className="text-xl font-bold mb-4 italic">
                {image.title}
              </h3>
              
              {image.subtitle && (
                <p className="text-gray-500 mb-3 italic">
                  {image.subtitle}
                </p>
              )}
              
              {index === 2 ? (
                <p className="text-gray-700 mt-6 mb-6 pl-0">
                  <button 
                    onClick={() => setShowOriginalPhotos(true)}
                    className="text-teal-600 hover:text-teal-800 font-medium cursor-pointer focus:outline-none inline-flex items-center"
                  >
                    🌟Guess how's the original photos look like？
                  </button>
                </p>
              ) : index === 0 ? (
                <blockquote className="text-gray-700 italic mt-6 mb-6 border-l-2 border-gray-700 pl-4">
                  Self-entertainment during work-from-home. <br/>
                  Sunrise is the best start of the day.
                </blockquote>
              ) : index === 1 ? (
                <blockquote className="text-gray-700 italic mt-6 mb-6 border-l-2 border-gray-700 pl-4">
                  As time cycles day after day, <br/>
                  the natural changes foreshadow the differences.
                </blockquote>
              ) : index === 3 ? (
                <blockquote className="text-gray-700 italic mt-6 mb-6 border-l-2 border-gray-700 pl-4">
                  The Taklamakan Desert is the second largest desert in the world. <br/>
                  From Kashgar, the westernmost city in China, <br/>
                  to Lanzhou, the capital of Gansu Province, <br/>
                  the landscape undergoes fascinating changes due to wind and water.
                </blockquote>
              ) : index === 4 ? (
                <blockquote className="text-gray-700 italic mt-6 mb-6 border-l-2 border-gray-700 pl-4">
                  Viewing the world from an angle <br/>
                  that humans might not be able to reach.
                </blockquote>
              ) : (
                <blockquote className="text-gray-700 italic mt-6 mb-6 border-l-2 border-gray-700 pl-4">
                  Desolation and vitality <br/>
                  the <strong>power of life</strong>.
                </blockquote>
              )}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Modal for original photos */}
      {showOriginalPhotos && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Original Photos</h3>
              <button 
                onClick={() => setShowOriginalPhotos(false)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div className="space-y-6">
              {originalPhotos.map((photo, idx) => (
                <div key={idx} className="overflow-hidden rounded-lg">
                  <img 
                    src={photo} 
                    alt={`Original photo ${idx + 1}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Thanks for watching section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="container mx-auto px-4 mt-40 mb-6"
      >
        <div className="text-left max-w-2xl mr-auto pl-0 pr-6">
          <h2 className="text-2xl font-bold mb-4">Thanks for watching</h2>
          <blockquote className="text-gray-700 italic mt-4 mb-4 border-l-2 border-gray-700 pl-4">
            Here are some other projects.
          </blockquote>
        </div>
      </motion.div>

      {/* Other Projects Section */}
      <OtherProjects currentProjectId="daily-collect" isDarkMode={false} />
    </main>
  );
} 