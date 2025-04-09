"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function GlyphNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1
      }
    })
  };

  const handleNavClick = (id: string) => {
    if (isOpen) {
      toggleMenu();
    }

    if (isHomePage) {
      // 如果在主页，直接滚动到对应部分
      const element = document.getElementById(id);
      if (element) {
        const headerHeight = 96; // 导航栏高度
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // 如果在其他页面，先记录目标section，等页面跳转完成后再滚动
      sessionStorage.setItem('scrollTarget', id);
    }
  };

  useEffect(() => {
    // 检查是否需要滚动到指定section
    const scrollTarget = sessionStorage.getItem('scrollTarget');
    if (scrollTarget && isHomePage) {
      // 给页面一点时间完成渲染
      setTimeout(() => {
        const element = document.getElementById(scrollTarget);
        if (element) {
          const headerHeight = 96; // 导航栏高度
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
        sessionStorage.removeItem('scrollTarget');
      }, 100);
    }
  }, [isHomePage]);

  const navLinks = [
    { id: "about", label: "About", href: isHomePage ? "#about" : "/#about" },
    { id: "projects", label: "Projects", href: isHomePage ? "#projects" : "/#projects" },
    { id: "experience", label: "Experience", href: isHomePage ? "#experience" : "/#experience" },
    { id: "education", label: "Education", href: isHomePage ? "#education" : "/#education" },
    { id: "interests", label: "Interests", href: isHomePage ? "#interests" : "/#interests" }
  ];

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 w-full z-40 backdrop-blur-md"
        initial={{ height: 96 }} // 96px = py-12 equivalent (equiv to py-8 = 64px with extra space)
        animate={{ 
          height: scrolled ? 72 : 96, // 72px is equiv to py-5
          backgroundColor: scrolled ? 'rgba(17, 17, 17, 0.8)' : 'rgba(17, 17, 17, 0)'
        }}
        transition={{ 
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for smooth transition
        }}
      >
        <div className="container mx-auto h-full px-4 flex justify-between items-center">
          <Link href="/" className="hover-effect">
            <motion.div 
              className="text-xl md:text-2xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              DI<span className="text-accent">.</span>
            </motion.div>
          </Link>

          <div className="flex items-center gap-6">
            <nav className="hidden md:block">
              <ul className="flex gap-8">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link 
                      href={link.href}
                      className="text-foreground hover:text-primary transition-colors duration-300 relative group hover-effect"
                      onClick={() => handleNavClick(link.id)}
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <button 
              className="hover-effect z-50 flex flex-col justify-center items-center w-10 h-10 relative"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className={`bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-background"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="container mx-auto px-4 py-20 h-full flex flex-col">
              <div className="flex-grow flex flex-col justify-center">
                <nav>
                  <ul className="space-y-6 md:space-y-8">
                    {navLinks.map((link, i) => (
                      <motion.li 
                        custom={i}
                        variants={linkVariants}
                        key={link.id}
                      >
                        <Link 
                          href={link.href}
                          className="text-4xl md:text-7xl font-bold gradient-text hover-effect"
                          onClick={() => handleNavClick(link.id)}
                        >
                          {link.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </div>
              
              <div className="py-6">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex gap-5"
                >
                  <a href="mailto:deee.xiao@gmail.com" className="text-accent hover:text-primary transition-colors hover-effect">
                    Email
                  </a>
                  <a href="https://www.linkedin.com/in/di-xiao-916629256/" className="text-accent hover:text-primary transition-colors hover-effect">
                    LinkedIn
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 