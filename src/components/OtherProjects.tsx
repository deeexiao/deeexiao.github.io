import Link from 'next/link';
import { motion } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const allProjects: Project[] = [
  {
    id: 'caiyi',
    title: 'Cai Yi —「采衣」',
    description: '"Cai Yi" is an integrated social platform and online shop based on HanFu.',
    imageUrl: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/0814b548-30be-44c7-a2fb-9f58c1c9d49a/1/w=1920,quality=90,fit=scale-down',
    link: '/projects/caiyi',
  },
  {
    id: 'memory',
    title: 'Memory —「记艺」',
    description: 'An supporting app for art students in both high school and university.',
    imageUrl: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/2841dd66-3e08-45e9-b6d5-2c726486a535/1/w=1920,quality=90,fit=scale-down',
    link: '/projects/memory',
  },
  {
    id: 'daily-collect',
    title: 'Daily Collect — Di\'s Photo Gallery',
    description: 'People may forget, but photos remember.',
    imageUrl: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/5010fd78-d49c-497a-8653-d5445869c10c/Group_1000000941/w=1920,quality=90,fit=scale-down',
    link: '/projects/daily-collect',
  },
  {
    id: 'twins-reborn',
    title: 'Sketch— Twins & Reborn「双生」',
    description: 'After many years, I picked it up again and recreated it in a new way.',
    imageUrl: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/7afe5bb9-d7b8-4c29-b0fd-583f8bc7f962/IMG_0251/w=1920,quality=90,fit=scale-down',
    link: '/projects/twins-reborn',
  },
];

export default function OtherProjects({ currentProjectId, isDarkMode = false }: { currentProjectId: string, isDarkMode?: boolean }) {
  const otherProjects = allProjects.filter(project => project.id !== currentProjectId);

  return (
    <section className={`py-16 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Other Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link 
                href={project.link}
                className="block group"
              >
                <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            href="/#projects"
            className={`inline-flex items-center gap-2 text-sm font-medium ${
              isDarkMode 
                ? 'text-gray-300 hover:text-white' 
                : 'text-gray-600 hover:text-gray-900'
            } transition-colors`}
          >
            <span>Back to Main Page</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 