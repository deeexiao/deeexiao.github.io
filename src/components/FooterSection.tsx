"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FooterSection() {
  const currentYear = new Date().getFullYear();
  
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
  
  const navigateToSection = (id: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = `/#${id}`;
    }
  };
  
  return (
    <footer className="py-16 md:py-20 relative overflow-hidden z-20">
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 relative z-20">
          <motion.div 
            className="md:col-span-6 relative z-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            style={{ position: 'relative', zIndex: 20, pointerEvents: 'auto' }}
          >
            <h2 className="heading-lg gradient-text mb-6">Let&apos;s Connect</h2>
            <p className="text-accent max-w-lg mb-8">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
                style={{ position: 'relative', zIndex: 20 }}
              >
                <a 
                  href="mailto:deee.xiao@gmail.com" 
                  className="glyph-button w-full text-center hover-effect"
                  style={{ pointerEvents: 'auto' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = "mailto:deee.xiao@gmail.com";
                  }}
                >
                  Contact Me
                </a>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
                style={{ position: 'relative', zIndex: 20 }}
              >
                <a 
                  href="https://www.linkedin.com/in/di-xiao-916629256/" 
                  className="glyph-button w-full text-center hover-effect"
                  style={{ pointerEvents: 'auto' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open("https://www.linkedin.com/in/di-xiao-916629256/", "_blank");
                  }}
                >
                  LinkedIn
                </a>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:col-span-6 md:flex md:justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <div className="max-w-sm" style={{ position: 'relative', zIndex: 20 }}>
              <h3 className="heading-sm mb-6">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-3">
                    <li style={{ position: 'relative', zIndex: 20 }}>
                      <button 
                        onClick={() => navigateToSection('about')} 
                        className="text-accent hover:text-primary transition-colors hover-effect cursor-pointer bg-transparent border-0 p-0"
                        style={{ pointerEvents: 'auto' }}
                      >
                        About
                      </button>
                    </li>
                    <li style={{ position: 'relative', zIndex: 20 }}>
                      <button 
                        onClick={() => navigateToSection('projects')} 
                        className="text-accent hover:text-primary transition-colors hover-effect cursor-pointer bg-transparent border-0 p-0"
                        style={{ pointerEvents: 'auto' }}
                      >
                        Projects
                      </button>
                    </li>
                    <li style={{ position: 'relative', zIndex: 20 }}>
                      <button 
                        onClick={() => navigateToSection('education')} 
                        className="text-accent hover:text-primary transition-colors hover-effect cursor-pointer bg-transparent border-0 p-0"
                        style={{ pointerEvents: 'auto' }}
                      >
                        Education
                      </button>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li style={{ position: 'relative', zIndex: 20 }}>
                      <button 
                        onClick={() => navigateToSection('interests')} 
                        className="text-accent hover:text-primary transition-colors hover-effect cursor-pointer bg-transparent border-0 p-0"
                        style={{ pointerEvents: 'auto' }}
                      >
                        Interests
                      </button>
                    </li>
                    <li style={{ position: 'relative', zIndex: 20 }}>
                      <button 
                        onClick={() => {
                          window.location.href = "mailto:deee.xiao@gmail.com";
                        }}
                        className="text-accent hover:text-primary transition-colors hover-effect cursor-pointer bg-transparent border-0 p-0"
                        style={{ pointerEvents: 'auto' }}
                      >
                        Contact
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-14 pt-8 flex flex-col md:flex-row justify-between items-center"
          style={{ borderTop: '1px solid rgba(var(--secondary-rgb), 0.2)' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
        >
          <p className="text-accent text-sm mb-4 md:mb-0">
            © {currentYear} Di Xiao. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
} 