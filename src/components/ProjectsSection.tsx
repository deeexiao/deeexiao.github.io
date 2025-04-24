"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from 'react';
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  imagePlaceholder: string;
  imageUrl: string;
  link: string;
}

const uxProjects: Project[] = [
  {
    id: 'caiyi',
    title: 'Cai Yi —「采衣」',
    subtitle: 'Cai Yi —「采衣」',
    description: '"Cai Yi" is an integrated social platform and online shop based on HanFu (Chinese traditional clothes).',
    tags: ['UX/UI', 'APP Design', 'Social Platform', 'E-commerce'],
    imagePlaceholder: 'Cai Yi Project Image',
    imageUrl: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/0814b548-30be-44c7-a2fb-9f58c1c9d49a/1/w=1920,quality=90,fit=scale-down',
    link: '/projects/caiyi',
  },
  {
    id: 'memory',
    title: 'Memory —「记艺」',
    subtitle: 'Memory —「记艺」',
    description: 'An supporting app for art students in both high school and university.',
    tags: ['UX Research', 'UX/UI', 'APP Design', 'Educational'],
    imagePlaceholder: 'Memory Project Image',
    imageUrl: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/2841dd66-3e08-45e9-b6d5-2c726486a535/1/w=1920,quality=90,fit=scale-down',
    link: '/projects/memory',
  },
];

const visualProjects: Project[] = [
  {
    id: 'daily-collect',
    title: 'Daily Collect — Di\'s Photo Gallery',
    subtitle: 'Daily Collect — Di\'s Photo Gallery',
    description: 'People may forget, but photos remember.',
    tags: ['Photography', 'Visual Art', 'Documentary'],
    imagePlaceholder: 'Photo Gallery Image',
    imageUrl: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/5010fd78-d49c-497a-8653-d5445869c10c/Group_1000000941/w=1920,quality=90,fit=scale-down',
    link: '/projects/daily-collect',
  },
  {
    id: 'twins-reborn',
    title: 'Sketch— Twins & Reborn「双生」',
    subtitle: 'Sketch— Twins & Reborn「双生」',
    description: 'After many years, I picked it up again and recreated it in a new way. It is the "Reborn".',
    tags: ['Illustration', 'Graphic Design'],
    imagePlaceholder: 'Twins & Reborn Image',
    imageUrl: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/7afe5bb9-d7b8-4c29-b0fd-583f8bc7f962/IMG_0251/w=1920,quality=90,fit=scale-down',
    link: '/projects/twins-reborn',
  },
];

// 创建一个GitHubPagesLink组件作为Link的封装
const GitHubPagesLink = ({ href, className, style, children }: { 
  href: string; 
  className?: string; 
  style?: React.CSSProperties; 
  children: React.ReactNode 
}) => (
  <Link href={href} className={className} style={style}>
    {children}
  </Link>
);

export default function ProjectsSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  // 工作经历数据
  const workExperiences = [
    {
      id: "memoon",
      title: "Freelancer at MEMOON",
      role: "Founder & Part-time Teacher (Problem-based learning)",
      period: "Nov 2023 - Now"
    },
    {
      id: "hanfu",
      title: "UX Design — Hanfu project (APP)",
      role: "UX Design (Part-time project)",
      period: "Sep 2019 - Jan 2021"
    },
    {
      id: "weplanet",
      title: "VI Internship —— WePlanet （童行）",
      role: "VI Design & Photograph",
      period: "Mar 2017 - Aug 2017"
    },
    {
      id: "pfizer",
      title: "Service design project —— Leruimei/Pfizer（乐瑞美/辉瑞）",
      role: "UX Research & Service Design & Event Planning",
      period: "Sep 2016 - Oct 2017"
    },
    {
      id: "aurora",
      title: "Co-working space project —— Aurora（震旦）",
      role: "UX Research & Strategy",
      period: "Jun 2016 - Sep 2016"
    },
    {
      id: "duwei",
      title: "UI internship —— Duwei Tech. （度维科技）",
      role: "Visual Design",
      period: "Jan 2016 - Jun 2016"
    },
  ];

  // 显示前2个工作经历作为预览
  const previewWorkExperiences = workExperiences.slice(0, 2);

  const otherProjects = [
    "UI Design — Web3 Gamefi project (APP)",
    "Volunteer VI designer — Sweet Potato Chinese Music (Logo/Posters)",
    "Course Researcher — Online PBL APP for Children"
  ];

  return (
    <section id="projects" className="py-0 pt-24 relative overflow-hidden">
      <div className="container mx-auto px-4 overflow-visible">
        {/* UX/UI Projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="pb-0 mb-0"
        >
          <h2 className="heading-lg gradient-text mb-6">UX/UI Design</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {uxProjects.map((project) => (
              <GitHubPagesLink href={project.link} key={project.id} className="relative z-30" style={{ pointerEvents: 'auto', height: '100%', display: 'block' }}>
                <ProjectCard project={project} />
              </GitHubPagesLink>
            ))}
          </div>
        </motion.div>

        {/* 分割线 */}
        <div className="w-screen h-px bg-white/10 relative left-1/2 transform -translate-x-1/2 mt-32 mb-8"></div>

        {/* Visual Projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="pt-24 pb-0 mb-0"
        >
          <h2 className="heading-lg gradient-text mb-6">Visual Art</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {visualProjects.map((project) => (
              <GitHubPagesLink href={project.link} key={project.id} className="relative z-30" style={{ pointerEvents: 'auto', height: '100%', display: 'block' }}>
                <ProjectCard project={project} />
              </GitHubPagesLink>
            ))}
          </div>
        </motion.div>

        {/* 分割线 */}
        <div className="w-screen h-px bg-white/10 relative left-1/2 transform -translate-x-1/2 mt-32 mb-8"></div>

        {/* Working/Projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="pt-24 pb-0 mb-0"
        >
          <h2 className="heading-lg gradient-text mb-6">Working / Projects</h2>
          <div className="space-y-6">
            {/* 始终显示预览内容 */}
            {(isExpanded ? workExperiences : previewWorkExperiences).map((work) => (
              <div key={work.id} className="bg-card p-6 pb-10 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-white leading-loose line-clamp-none">{work.title}</h3>
                <p className="text-accent mb-3 leading-loose">{work.role}</p>
                <p className="text-sm text-accent-light leading-loose">{work.period}</p>
              </div>
            ))}
            
            {/* Other part-time projects 仅在展开时显示 */}
            {isExpanded && (
              <div className="bg-card p-6 pb-10 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-white leading-loose line-clamp-none">Other part-time projects</h3>
                <div className="space-y-4">
                  {otherProjects.map((project, index) => (
                    <p key={index} className="text-accent leading-loose pb-2 line-clamp-none">{project}</p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 展开/收起按钮 */}
          <motion.div 
            className="mt-6 mb-0 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="glyph-button hover-effect"
              style={{ position: 'relative', zIndex: 20, pointerEvents: 'auto' }}
            >
              {isExpanded ? 'Show Less' : 'Show More'}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.005, boxShadow: '0 0 30px rgba(0,0,0,0.2)' }}
      whileTap={{ scale: 0.995 }}
      className="relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl h-[460px]"
    >
      {/* 图片区域 */}
      <div className="absolute top-0 left-0 right-0 h-[281px] overflow-hidden rounded-t-2xl">
        <img
          src={project.imageUrl}
          alt={project.title}
          className={`w-full h-full object-cover ${
            project.id === 'caiyi' ? 'object-[center_10%]' : 
            project.id === 'memory' ? 'object-[center_60%]' : 
            project.id === 'daily-collect' ? 'object-[20%_center]' :
            'object-center'
          }`}
        />
        <div className={`absolute inset-0 bg-black ${
          project.id === 'caiyi' ? 'opacity-35' : 'opacity-20'
        }`}></div>
      </div>
      
      {/* 文字区域 */}
      <div className="absolute bottom-0 left-0 right-0 h-[180px] bg-secondary p-5 py-6 rounded-b-2xl">
        <h3 className="text-xl font-bold mb-2 text-white leading-relaxed">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm rounded-full bg-black/70 text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-400 line-clamp-2">{project.description}</p>
      </div>
    </motion.div>
  );
}