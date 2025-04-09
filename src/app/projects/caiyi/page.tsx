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

export default function CaiyiProject() {
  const [loading, setLoading] = useState(true);
  
  const projectImages = [
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/0814b548-30be-44c7-a2fb-9f58c1c9d49a/1/w=1920,quality=90,fit=scale-down",
      alt: "Caiyi Project Cover",
      caption: "Caiyi Project Cover Image"
    },
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/c14dad65-42c2-4781-aa6c-47404bae782f/2/w=1080,quality=90,fit=scale-down",
      alt: "Caiyi Design Process",
      caption: "Design Process Overview"
    },
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/874f6e90-63c2-4e40-8649-e30b3b48a081/3/w=1920,quality=90,fit=scale-down",
      alt: "User Research",
      caption: "User Research Phase"
    },
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/cd746230-3ffc-4bb8-9b68-42a49f79c719/4/w=1920,quality=90,fit=scale-down",
      alt: "Information Architecture",
      caption: "Information Architecture"
    },
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/1b0d431c-289b-490c-908a-124a34f8e80c/5/w=1920,quality=90,fit=scale-down", 
      alt: "UX Wireframes",
      caption: "UX Wireframes"
    },
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/a9640410-323c-485e-a1ba-2771e30a5604/6_(1)/w=1920,quality=90,fit=scale-down",
      alt: "High-fidelity Mockups",
      caption: "High-fidelity Mockups"
    },
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/0f2c85c6-20fb-4927-967a-a2fd90416714/7/w=1920,quality=90,fit=scale-down",
      alt: "Offline Shop & Photography",
      caption: "Offline Shop & Photography"
    },
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/d222729c-657d-4015-bff4-c51fc9e3b3fb/8/w=1920,quality=90,fit=scale-down",
      alt: "Caiyi Design Details",
      caption: "Design Details"
    },
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/7708b068-98e6-4baf-bf2e-4180eeb18768/9/w=1920,quality=90,fit=scale-down",
      alt: "Caiyi App Screens",
      caption: "App Screen Showcase"
    },
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/4eb7c8b2-b147-426b-8085-bcd68d0fee01/10/w=1920,quality=90,fit=scale-down",
      alt: "Caiyi Design System",
      caption: "Design System"
    },
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/b69843fc-7e8f-40ac-b250-72ecdabcd16f/11/w=1920,quality=90,fit=scale-down",
      alt: "Final Presentation",
      caption: "Final Presentation"
    }
  ];

  return (
    <main className="pb-16 text-gray-800">
      {/* Project header */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 mb-12 pt-10"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Cai Yi — 「采衣」</h1>
          <p className="text-xl text-gray-700 mb-8">
            An integrated social and e-commerce platform based on HanFu (Chinese traditional clothing) culture
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="skill-tag bg-gray-200 text-gray-800">UX/UI</span>
            <span className="skill-tag bg-gray-200 text-gray-800">APP Design</span>
            <span className="skill-tag bg-gray-200 text-gray-800">Social Platform</span>
            <span className="skill-tag bg-gray-200 text-gray-800">E-commerce</span>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700">
              "Cai Yi" is a custom app designed for HanFu enthusiasts, integrating social and e-commerce functionalities to address various challenges users face in styling, purchasing, and community engagement around traditional Chinese clothing. This project showcases a complete design thinking process from user research and needs analysis to high-fidelity prototypes and design system construction.
            </p>
          </div>
        </div>
      </motion.div>
      
      {/* Project overview image */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container mx-auto px-4 mb-16"
      >
        <div className="rounded-xl overflow-hidden">
          <img 
            src={projectImages[0].url} 
            alt={projectImages[0].alt}
            className="w-full h-auto object-contain"
          />
        </div>
      </motion.div>

      {/* Design process */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container mx-auto px-4 mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Design Process</h2>
          <div className="rounded-xl overflow-hidden mb-8">
            <img 
              src={projectImages[1].url} 
              alt={projectImages[1].alt}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="prose max-w-none">
            <p className="text-gray-700">
              This project follows a comprehensive design thinking process, starting with user research, moving through information architecture and wireframing, to high-fidelity prototypes, and culminating in the construction of a design system. Each stage emphasized collecting and analyzing user feedback to ensure the product effectively addresses the pain points of the target user group.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Project detailed image showcase */}
      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectImages.slice(2).map((image, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * (index + 1) }}
                className="mb-8"
              >
                <div className="rounded-xl overflow-hidden mb-4 h-full">
                  <img 
                    src={image.url} 
                    alt={image.alt}
                    className="w-full h-auto object-contain"
                    style={{ width: "100%" }}
                  />
                </div>
                <p className="text-center text-gray-700 font-medium">{image.caption}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="container mx-auto px-4 mt-8 mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Project Conclusion</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700">
              The "Cai Yi" project creates a comprehensive platform for HanFu enthusiasts by integrating social and e-commerce functionalities. From user research to high-fidelity design, each step was centered on the user, resulting in a product that is both aesthetically pleasing and functional. This project not only demonstrates design capability but also reflects a deep understanding of a specific cultural domain and the application of design thinking.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Other Projects Section */}
      <OtherProjects currentProjectId="caiyi" isDarkMode={false} />
    </main>
  );
} 