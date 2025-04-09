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

export default function TwinsRebornProject() {
  const [loading, setLoading] = useState(true);
  
  const projectImages = [
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/7afe5bb9-d7b8-4c29-b0fd-583f8bc7f962/IMG_0251/w=1920,quality=90,fit=scale-down",
      alt: "Twins & Reborn Cover",
      caption: "Twins & Reborn Cover Image"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Sketch — Twins & Reborn「双生」</h1>
          
          {/* Service tags */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Type</h2>
            <div className="flex flex-wrap gap-4">
              <span className="skill-tag bg-gray-200 text-gray-800">Illustration</span>
              <span className="skill-tag bg-gray-200 text-gray-800">Graphic Design</span>
            </div>
          </div>

          {/* Brief Summary */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Brief Summary</h2>
            <p className="text-lg text-gray-700">
              After many years, I picked it up again and recreated it in a new way. It is the "Reborn".
            </p>
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
        <img 
          src={projectImages[0].url} 
          alt={projectImages[0].alt}
          className="w-full h-auto object-cover"
          style={{ maxHeight: "80vh" }}
        />
      </motion.div>

      {/* Project content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container mx-auto px-4 mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            Sketch — Twins & Reborn「双生」
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              This painting was originally created ten years ago, the computer was broken when it was not finished and the source files were lost. After many years, I picked it up again and recreated it in a new way.
            </p>
            <p className="text-lg text-gray-700">
              It is the "Reborn".
            </p>
            <p className="text-lg text-gray-700 italic">
              It reminds me —— Always be positive. :)
            </p>
          </div>
        </div>
      </motion.div>

      {/* Thanks section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="container mx-auto px-4 mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Thanks.</h2>
        </div>
      </motion.div>

      {/* Other Projects Section */}
      <OtherProjects currentProjectId="twins-reborn" isDarkMode={false} />
    </main>
  );
} 