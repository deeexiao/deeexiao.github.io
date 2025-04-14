"use client";

import { motion } from 'framer-motion';

export default function ConnectSection() {
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
  
  return (
    <section id="connect" className="py-0 pt-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
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
      </div>
    </section>
  );
} 