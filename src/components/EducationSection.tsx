"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
}

const education: Education[] = [
  {
    id: "eindhoven",
    institution: "Eindhoven University of Technology — Researcher",
    degree: "Support Design-based learning for teacher",
    period: "Nov 2018 - Nov 2024"
  },
  {
    id: "denmark",
    institution: "Technical University of Denmark — Exchange student",
    degree: "Design and Innovation",
    period: "Sep 2017 - Jan 2018"
  },
  {
    id: "jiangnan",
    institution: "Jiangnan University — MA",
    degree: "UX Design and Experience",
    period: "Sep 2015 - Jun 2018"
  },
  {
    id: "sichuan",
    institution: "Sichuan Normal University — BA",
    degree: "Industrial Design",
    period: "Sep 2011 - Jun 2015"
  },
];

export default function EducationSection() {
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

  // 显示前2个教育经历作为预览
  const previewEducation = education.slice(0, 2);
  
  return (
    <section id="education" className="py-0 pt-24 relative overflow-hidden">
      <div className="container mx-auto px-4 mb-0 pb-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="mb-0 pb-0"
        >
          <h2 className="heading-lg gradient-text mb-6">Education / Research</h2>
          <div className="space-y-6">
            {/* 始终显示预览内容 */}
            {(isExpanded ? education : previewEducation).map((item, index) => (
              <div key={item.id} className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-white">{item.institution}</h3>
                <p className="text-accent mb-2">{item.degree}</p>
                <p className="text-sm text-accent-light">{item.period}</p>
                {item.id === "sichuan" && (
                  <p className="mt-4 text-accent">Transferred from Fine-Art</p>
                )}
              </div>
            ))}
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