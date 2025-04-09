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
  
  return (
    <footer className="py-16 md:py-24 border-t relative overflow-hidden" style={{ borderColor: 'rgba(var(--secondary-rgb), 0.2)' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <motion.div 
            className="md:col-span-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
          >
            <h2 className="heading-lg gradient-text mb-6">Let&apos;s Connect</h2>
            <p className="text-accent max-w-lg mb-8">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a href="mailto:deee.xiao@gmail.com" className="glyph-button hover-effect">
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:col-span-6 md:flex md:justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
          >
            <div className="max-w-sm">
              <h3 className="heading-sm mb-6">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-3">
                    <li>
                      <Link href="#about" className="text-accent hover:text-primary transition-colors hover-effect">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="#projects" className="text-accent hover:text-primary transition-colors hover-effect">
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link href="#experience" className="text-accent hover:text-primary transition-colors hover-effect">
                        Experience
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li>
                      <Link href="#education" className="text-accent hover:text-primary transition-colors hover-effect">
                        Education
                      </Link>
                    </li>
                    <li>
                      <Link href="#interests" className="text-accent hover:text-primary transition-colors hover-effect">
                        Interests
                      </Link>
                    </li>
                    <li>
                      <a href="mailto:deee.xiao@gmail.com" className="text-accent hover:text-primary transition-colors hover-effect">
                        Contact
                      </a>
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
          
          <div className="flex gap-6">
            <a href="mailto:deee.xiao@gmail.com" className="text-accent hover:text-primary transition-colors hover-effect text-sm">
              deee.xiao@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/di-xiao-916629256/" className="text-accent hover:text-primary transition-colors hover-effect text-sm">
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 