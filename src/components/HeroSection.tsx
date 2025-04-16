"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (!containerRef.current || !titleRef.current) return;
    
    const title = titleRef.current;
    const container = containerRef.current;
    
    // Create a floating parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20; // Adjust the multiplier for more/less movement
      const y = (clientY / window.innerHeight - 0.5) * 20;
      
      gsap.to(title, {
        x: x,
        y: y,
        duration: 1.5,
        ease: "power3.out"
      });
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden pb-0 mb-0">
      <div className="container mx-auto px-4 py-20 mt-20 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mb-4"
        >
          <p className="text-accent">UX Designer | Researcher | Songwriter | Lifelong Learner</p>
        </motion.div>
        
        <div className="overflow-hidden">
          <motion.h1 
            ref={titleRef}
            className="heading-xl gradient-text text-center mb-4 py-4"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.6
            }}
          >
            DI XIAO <br />PORTFOLIO
          </motion.h1>
        </div>
        
        <motion.div
          className="max-w-lg mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="text-accent text-lg mb-7 italic">
            A collection of my design work and creative endeavors.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#about" className="glyph-button hover-effect">
              Explore My Work
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* 设计更优雅的滚动指示器 */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-accent/30 rounded-full flex justify-center"
          initial={{ y: 0 }}
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        >
          <motion.div 
            className="w-1.5 h-1.5 bg-accent/70 rounded-full mt-2"
            animate={{ opacity: [0.4, 1, 0.4], y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
} 