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
          
          {/* Brief Summary section */}
          <div className="mb-8">
            <p className="text-xl text-gray-700">
              A design case showcasing the process from user research and needs analysis to high-fidelity prototypes and design system for a HanFu (traditional Chinese clothing) enthusiasts platform.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="skill-tag bg-gray-200 text-gray-800">UX/UI Design</span>
            <span className="skill-tag bg-gray-200 text-gray-800">APP Design</span>
            <span className="skill-tag bg-gray-200 text-gray-800">Social Platform</span>
            <span className="skill-tag bg-gray-200 text-gray-800">E-commerce</span>
          </div>
          
        </div>
      </motion.div>
      
      {/* 主封面图片 - 全宽显示 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container mx-auto px-4 mb-12"
      >
        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden">
          <img 
            src={projectImages[0].url} 
            alt={projectImages[0].alt}
            className="w-full h-auto object-contain"
          />
        </div>
      </motion.div>

      {/* 项目介绍和我的角色 - 两列布局 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container mx-auto px-4 mb-12"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* 左列 - 项目介绍文本和我的角色 */}
            <div className="md:col-span-5">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Project Introduction——Cai Yi【采衣】</h2>
              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-700">
                  Hanfu is symbolic of the Han ethnicity. Due to complex historical reasons, there was a discontinuity in the tradition of Hanfu through the ages. Now, with a resurgence and a quest to reconnect with our origins, the Hanfu industry is experiencing a revival.
                </p>
                <p className="text-lg text-gray-700 mt-4">
                  From 2015 to 2021, the annual turnover of the Hanfu industry saw a rapid increase from 190 million yuan to more than 10 billion yuan.
                </p>
              </div>
              
              {/* 我的角色 - 现在放在左侧列项目介绍下方 */}
              <h3 className="text-xl font-bold mb-4 flex items-center text-gray-900">
                <span className="mr-2">👩🏻‍💻</span>
                My Role
              </h3>
              <div className="prose max-w-none">
                <p className="text-lg font-semibold text-gray-800 mb-2">UX Lead of a remote team</p>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li>Consumer-side UX design</li>
                  <li>UX research</li>
                  <li>Architectural design for merchants regarding the Inventory Management System (IMS).</li>
                </ol>
              </div>
            </div>

            {/* 右列 - 我做了什么 + 设计过程图 */}
            <div className="md:col-span-7">
              <div className="prose max-w-none mb-6">
                <p className="text-lg font-semibold text-gray-800 mb-2">What did I do?</p>
                <p className="text-lg text-gray-700">
                  As the UX Lead of a remote team, I was responsible for the UX design, focusing on consumer-side UX design and the architectural design of tools for merchants regarding the Inventory Management System (IMS). My duties also included user research, discussing the feasibility.
                </p>
              </div>
              
              {/* 设计过程图 - 放在右列 */}
              <div className="rounded-xl overflow-hidden">
                <img 
                  src={projectImages[1].url} 
                  alt={projectImages[1].alt}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 项目图片展示 - Notion风格的布局 */}
      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          {/* 用户研究 - 全宽 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <div className="rounded-xl overflow-hidden">
              <img 
                src={projectImages[2].url} 
                alt={projectImages[2].alt}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* 信息架构 - 全宽 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-12"
          >
            <div className="rounded-xl overflow-hidden">
              <img 
                src={projectImages[3].url} 
                alt={projectImages[3].alt}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* 线框图 - 全宽 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-12"
          >
            <div className="rounded-xl overflow-hidden">
              <img 
                src={projectImages[4].url} 
                alt={projectImages[4].alt}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* 高保真原型 - 全宽 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-12"
          >
            <div className="rounded-xl overflow-hidden">
              <img 
                src={projectImages[5].url} 
                alt={projectImages[5].alt}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* 线下商店 - 全宽 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-12"
          >
            <div className="rounded-xl overflow-hidden">
              <img 
                src={projectImages[6].url} 
                alt={projectImages[6].alt}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* 设计细节和应用截图 - 全宽 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mb-12"
          >
            <div className="rounded-xl overflow-hidden">
              <img 
                src={projectImages[7].url} 
                alt={projectImages[7].alt}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-12"
          >
            <div className="rounded-xl overflow-hidden">
              <img 
                src={projectImages[8].url} 
                alt={projectImages[8].alt}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* 设计系统 - 全宽 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mb-12"
          >
            <div className="rounded-xl overflow-hidden">
              <img 
                src={projectImages[9].url} 
                alt={projectImages[9].alt}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* 最终呈现 - 全宽 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mb-12"
          >
            <div className="rounded-xl overflow-hidden">
              <img 
                src={projectImages[10].url} 
                alt={projectImages[10].alt}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* 结论 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="container mx-auto px-4 mt-8 mb-16"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Thanks for watching</h2>
          <p className="text-lg text-gray-700 mb-12">
            Here are some other projects.
          </p>
          
          {/* Other Projects Section - 内联替换 */}
          <OtherProjects currentProjectId="caiyi" isDarkMode={false} />
        </div>
      </motion.div>
    </main>
  );
} 