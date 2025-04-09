"use client";

import { motion } from 'framer-motion';

export default function AboutSection() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  };

  const skills = [
    "UX/UI Design",
    "UX Tools Methods",
    "Prototyping",
    "Sketching",
    "Service design"
  ];

  const tools = [
    "Procreate",
    "Figma",
    "AIGC tools",
    "Sketch",
    "Photoshop",
    "Illustrator",
    "SAI"
  ];

  const languages = [
    "Chinese (Native)",
    "English (Fluent)",
    "Japanese (JLPT N2)"
  ];
  
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
          variants={fadeInUpVariants}
          custom={0}
        >
          <h2 className="heading-lg gradient-text mb-3">
            <svg className="inline-block w-7 h-7 mr-2 align-text-bottom" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM21.75 12a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.06 1.06l1.06 1.06ZM12 18a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061 1.06l1.06 1.061a.75.75 0 1 0 1.06-1.06l-1.06-1.06ZM6 12a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1 0-1.5H5.25A.75.75 0 0 1 6 12ZM6.166 5.106a.75.75 0 0 1 1.06 1.06l-1.06 1.06a.75.75 0 0 1-1.06-1.06l1.06-1.06Z" />
            </svg>
            About Me
          </h2>
          <div className="h-0.5 w-24 bg-primary/30 mb-10"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <motion.div 
            className="md:col-span-5 lg:col-span-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            custom={1}
          >
            <div className="relative aspect-square rounded-full overflow-hidden bg-secondary mb-8">
              <img 
                src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/9a63a9a3-8f1b-4c4b-a7a2-4bb191860904/IMG_0254/w=1080,quality=90,fit=scale-down" 
                alt="Di Xiao"
                className="w-full h-full object-cover filter invert"
              />
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row md:flex-col gap-4 justify-center"
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={2}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="mailto:deee.xiao@gmail.com" className="glyph-button w-full text-center hover-effect">
                  Contact Me
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="https://linkedin.com/in/dixiao" className="glyph-button w-full text-center hover-effect">
                  LinkedIn
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <div className="md:col-span-7 lg:col-span-8">
            <motion.div 
              className="glyph-card mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={1}
            >
              <blockquote className="bio-text">
                <p className="mb-4">Hi, I&apos;m <span className="text-primary font-semibold">Di</span>, a passionate <span className="highlight italic">designer</span> and <span className="highlight italic">researcher</span>, with a deep commitment to understanding and improving <span className="highlight">user experiences</span>. My expertise lies in employing a diverse range of research methods to uncover user needs and insights, which I then translate into thoughtful designs.</p>
                <p>I thrive on learning and immersing myself in diverse projects, where I can explore various fields and apply <span className="highlight">design thinking</span> to tackle <span className="highlight">complex societal challenges</span>. I firmly believe that innovative solutions emerge when design methodologies are thoughtfully applied to address the unique needs of different contexts.</p>
              </blockquote>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                className="glyph-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUpVariants}
                custom={2}
              >
                <h3 className="text-xl font-medium mb-4 text-primary">✨ Skills</h3>
                <ul className="space-y-2">
                  {skills.map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-accent mr-2">◈</span> {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                className="glyph-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUpVariants}
                custom={3}
              >
                <h3 className="text-xl font-medium mb-4 text-primary">💫 Tools</h3>
                <ul className="space-y-2">
                  {tools.map((tool, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-accent mr-2">◈</span> {tool}
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                className="glyph-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUpVariants}
                custom={4}
              >
                <h3 className="text-xl font-medium mb-4 text-primary">🌟 Languages</h3>
                <ul className="space-y-2">
                  {languages.map((language, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-accent mr-2">◈</span> {language}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 