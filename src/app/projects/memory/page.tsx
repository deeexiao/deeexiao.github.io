"use client";

import { useState, useEffect } from 'react';
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
  const [activeTab, setActiveTab] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const projectImages = [
    {
      url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/cd27f2cd-d966-4c30-922c-2469f075209c/1/w=3840,quality=90,fit=scale-down",
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
    }
  ];
  
  const tabs = [
    { name: "Background", index: 0 },
    { name: "User Research", index: 1 },
    { name: "Business Canvas", index: 2 },
    { name: "Information Architecture", index: 3 },
    { name: "Low-fidelity", index: 4 },
    { name: "High-fidelity", index: 5 }
  ];

  // Reset imageLoaded when tab changes
  useEffect(() => {
    setImageLoaded(false);
    
    // 给浏览器一点时间来渲染新内容
    setTimeout(() => {
      // 定位到顶部导航按钮区域
      const topTabNav = document.querySelector('.flex.justify-center.gap-3.mt-6.mb-4.overflow-x-auto');
      if (topTabNav) {
        // 滚动到顶部标签上方位置，预留空间确保完全可见
        window.scrollTo({
          top: topTabNav.getBoundingClientRect().top + window.pageYOffset - 120,
          behavior: 'smooth'
        });
      }
    }, 100);
  }, [activeTab]);

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
          
          <div className="mb-8">
            <p className="text-xl text-gray-300">
              An app designed specifically for art students, providing tools and resources to support their artistic journey throughout their education, from organizing references and tracking progress to learning new techniques.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="skill-tag bg-gray-800 text-gray-200">UX Research</span>
            <span className="skill-tag bg-gray-800 text-gray-200">UX/UI Design</span>
            <span className="skill-tag bg-gray-800 text-gray-200">APP Design</span>
            <span className="skill-tag bg-gray-800 text-gray-200">Educational</span>
          </div>
        </div>
      </motion.div>
      
      {/* Tabbed interface for project sections */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="container mx-auto px-4 mb-16 mt-20"
      >
        <div className="max-w-6xl mx-auto">
          {/* Navigation buttons */}
          <div className="flex justify-center gap-3 mt-6 mb-4 overflow-x-auto whitespace-nowrap">
            {tabs.map((tab) => (
              <button 
                key={tab.index}
                onClick={() => setActiveTab(tab.index)}
                className={`px-7 py-2.5 rounded-full whitespace-nowrap transition-all text-base font-medium ${
                  activeTab === tab.index
                    ? "bg-white text-black"
                    : "bg-transparent text-white border border-white hover:bg-white/10"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-xl relative"
          >
            <div className="max-w-6xl mx-auto overflow-hidden rounded-xl">
              <img
                src={projectImages[activeTab].url}
                alt={projectImages[activeTab].alt}
                className="w-full h-auto object-contain"
                style={{ clipPath: 'inset(130px 0 0 0)' }}
                onLoad={() => setImageLoaded(true)}
              />
              {/* First page tooltip */}
              {activeTab === 0 && imageLoaded && (
                <div className="absolute top-[10px] left-[190px] z-50 pointer-events-none">
                  <div className="relative w-48 px-4 py-2.5 rounded-lg shadow-xl animate-pulse" 
                       style={{ background: 'linear-gradient(to right, #8b5cf6, #6366f1, #3b82f6)' }}>
                    <div className="absolute w-4 h-4 -top-2 left-6 transform rotate-45" 
                         style={{ backgroundColor: '#8b5cf6' }}></div>
                    <span className="text-sm font-medium text-white">
                      Discover the process
                    </span>
                  </div>
                </div>
              )}
              
              {/* Last page tooltip */}
              {activeTab === 5 && imageLoaded && (
                <div className="absolute bottom-[70px] right-[10%] z-50 pointer-events-none">
                  <div className="relative w-64 px-4 py-2.5 rounded-lg shadow-xl animate-pulse" 
                       style={{ background: 'linear-gradient(to right, #8b5cf6, #6366f1, #3b82f6)' }}>
                    <div className="absolute w-4 h-4 bottom-[-8px] right-6 transform rotate-45" 
                         style={{ backgroundColor: '#3b82f6' }}></div>
                    <span className="text-sm font-medium text-white">
                      Ending~ thank you for watching!
                    </span>
                  </div>
                </div>
              )}
              
              {/* Bottom navigation buttons */}
              <div className="flex justify-center gap-4 mt-6 mb-4">
                {tabs.map((tab) => (
                  <button 
                    key={tab.index}
                    onClick={() => setActiveTab(tab.index)}
                    className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all ${
                      activeTab === tab.index
                        ? "bg-indigo-800 text-white shadow-sm"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Other Projects Section */}
      <OtherProjects currentProjectId="memory" isDarkMode={true} />
    </main>
  );
} 