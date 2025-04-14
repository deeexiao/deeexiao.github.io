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

export default function MemoryProject() {
  const [loading, setLoading] = useState(true);
  
  const projectImages = [
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/2841dd66-3e08-45e9-b6d5-2c726486a535/1/w=1920,quality=90,fit=scale-down",
      alt: "Memory Project Cover",
      caption: "Memory Project Cover Image"
    },
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/5d024a38-78d6-444a-b336-8f2b4e34600e/2/w=1920,quality=90,fit=scale-down",
      alt: "Memory Design Process",
      caption: "Design Process Overview"
    },
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/cb378cfe-d039-44da-98e4-1a9df132d664/3/w=1920,quality=90,fit=scale-down",
      alt: "User Research",
      caption: "User Research Phase"
    },
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/97510a88-adb6-488d-8eae-e0e06ed72bc4/4/w=1920,quality=90,fit=scale-down",
      alt: "Information Architecture",
      caption: "Information Architecture"
    },
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/a321fe88-e17e-4d69-bb9a-784690a464ad/5/w=1920,quality=90,fit=scale-down", 
      alt: "UX Wireframes",
      caption: "UX Wireframes"
    },
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/f58b9e9c-058a-4e7c-ae00-7c280322c856/6/w=1920,quality=90,fit=scale-down",
      alt: "High-fidelity Mockups",
      caption: "High-fidelity Mockups"
    },
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/4752c3cc-8d3d-408a-bc98-5089bacc5ebe/IMG_0294/w=1920,quality=90,fit=scale-down",
      alt: "Final Design Screens",
      caption: "Final Design Screens"
    }
  ];

  return (
    <main className="pb-16 text-white bg-black">
      {/* Project header */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 mb-8 pt-10"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Memory — 「记艺」</h1>
          <p className="text-xl text-gray-300 mb-8">
            A supporting app for art students in both high school and university
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="skill-tag bg-gray-800 text-gray-200">UX Research</span>
            <span className="skill-tag bg-gray-800 text-gray-200">UX/UI Design</span>
            <span className="skill-tag bg-gray-800 text-gray-200">APP Design</span>
            <span className="skill-tag bg-gray-800 text-gray-200">Educational</span>
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
          <div className="prose max-w-none prose-invert">
            <p className="text-lg text-gray-300">
              "Memory" is an app designed specifically for art students, providing tools and resources to support their artistic journey throughout their education. The app addresses challenges faced by art students, from organizing references and tracking progress to learning new techniques and connecting with peers.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Design process - Full width image */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full mb-12"
      >
        <div className="overflow-hidden">
          <img 
            src={projectImages[1].url} 
            alt={projectImages[1].alt}
            className="w-full h-auto object-contain"
          />
        </div>
      </motion.div>

      {/* Design process description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="container mx-auto px-4 mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white">Design Process</h2>
          <div className="prose max-w-none prose-invert">
            <p className="text-gray-300 mb-12">
              This project began with extensive user research involving art students and educators to identify key pain points. The design process incorporated information architecture planning, wireframing, and iterative prototyping based on user feedback. The final design focuses on creating an intuitive interface that supports students' creative workflow.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Project detailed images - Full width images with spacing between */}
      {projectImages.slice(2).map((image, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 * (index + 1) }}
          className="w-full mb-16"
        >
          <div className="overflow-hidden">
            <img 
              src={image.url} 
              alt={image.alt}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="container mx-auto px-4 mt-4">
            <p className="text-center text-gray-300 font-medium">{image.caption}</p>
          </div>
        </motion.div>
      ))}

      {/* Conclusion */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="container mx-auto px-4 mt-8 mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white">Project Conclusion</h2>
          <div className="prose max-w-none prose-invert">
            <p className="text-lg text-gray-300">
              The "Memory" app provides art students with a dedicated platform to enhance their artistic development. Through focused features like reference collection, progress tracking, technique tutorials, and peer connection, the app creates a supportive environment that helps students excel in their artistic education. The user-centered design approach ensures the app meets the specific needs of its target audience.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Other Projects Section */}
      <OtherProjects currentProjectId="memory" isDarkMode={true} />
    </main>
  );
} 