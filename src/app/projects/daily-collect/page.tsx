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
  
  const projectImages = [
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/5010fd78-d49c-497a-8653-d5445869c10c/Group_1000000941/w=1920,quality=90,fit=scale-down",
      alt: "Daily Collect Cover",
      caption: "Daily Collect Gallery Cover"
    },
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/c58415bf-0a72-4b03-af23-209dbcc58cc0/IMG_6148/w=1920,quality=90,fit=scale-down",
      alt: "Photography Collection",
      caption: "Urban Landscape Series"
    },
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/b50a5531-4e2c-4b37-8cd2-45f9b6281e1f/IMG_0451/w=1920,quality=90,fit=scale-down",
      alt: "Photography Series",
      caption: "City Life Moments"
    },
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/a6042999-fbc6-4b5d-800e-117e55f758c9/IMG_0450/w=1920,quality=90,fit=scale-down",
      alt: "Nature Photography",
      caption: "Natural Beauty Series"
    },
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/9d0171e6-b0fa-470c-90b5-bced36a5f765/IMG_0242/w=1080,quality=90,fit=scale-down",
      alt: "Travel Photography",
      caption: "Travel Moments"
    },
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/65f9708e-2b85-493f-89fa-13799b6461c9/IMG_0584/w=1920,quality=90,fit=scale-down",
      alt: "Street Photography",
      caption: "Street Scenes Collection"
    }
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
            People may forget, but photos remember
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="skill-tag bg-gray-200 text-gray-800">Photography</span>
            <span className="skill-tag bg-gray-200 text-gray-800">Visual Art</span>
            <span className="skill-tag bg-gray-200 text-gray-800">Documentary</span>
          </div>
        </div>
      </motion.div>
      
      {/* Project overview image - Full width */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full mb-12"
      >
        <div className="overflow-hidden">
          <img 
            src={projectImages[0].url} 
            alt={projectImages[0].alt}
            className="w-full h-auto object-contain"
          />
        </div>
      </motion.div>

      {/* Project description */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container mx-auto px-4 mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700">
              "Daily Collect" is a personal photography project that captures moments, scenes, and emotions from everyday life. This collection represents my perspective on the world around me, focusing on both the extraordinary beauty in ordinary places and special moments during travels and experiences.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Photography philosophy */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container mx-auto px-4 mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Photography Philosophy</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-12">
              My approach to photography is centered on authentic representation and emotional connection. I believe that photography is not just about capturing visual beauty, but also about preserving feelings, memories, and stories. Each photograph in this collection represents a moment frozen in time that can transport the viewer to that specific experience.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Project detailed images - Full width images with spacing between */}
      {projectImages.slice(1).map((image, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 * (index + 1) }}
          className="w-full mb-16"
        >
          <div className={`overflow-hidden ${index === 3 ? 'max-w-4xl mx-auto' : ''}`}>
            <img 
              src={image.url} 
              alt={image.alt}
              className={`w-full h-auto object-contain ${index === 4 ? 'aspect-[21/9] object-cover' : ''}`}
            />
          </div>
          <div className="container mx-auto px-4 mt-4">
            <p className="text-center text-gray-700 font-medium">{image.caption}</p>
          </div>
        </motion.div>
      ))}

      {/* Project Reflection */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="container mx-auto px-4 mt-8 mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Project Reflection</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700">
              "Daily Collect" is an ongoing project that continues to grow as I experience and observe more of the world. Through this collection, I hope to share my perspective with viewers and perhaps inspire them to see beauty in their own surroundings. Photography has taught me to be more observant, patient, and appreciative of the fleeting moments that make life memorable.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Other Projects Section */}
      <OtherProjects currentProjectId="daily-collect" isDarkMode={false} />
    </main>
  );
} 