"use client";

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
    tags: ['UX/UI', 'APP'],
    imagePlaceholder: 'Cai Yi Project Image',
    imageUrl: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/0814b548-30be-44c7-a2fb-9f58c1c9d49a/1/w=1920,quality=90,fit=scale-down',
    link: '/projects/caiyi',
  },
  {
    id: 'memory',
    title: 'Memory —「记艺」',
    subtitle: 'Memory —「记艺」',
    description: 'An supporting app for art students in both high school and university.',
    tags: ['UX Research', 'UX/UI', 'APP'],
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
    tags: ['Photography'],
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

export default function ProjectsSection() {
  return (
    <div>
      <section id="projects" className="section pt-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-8">🌓 UX/UI Design</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {uxProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-8">🌔 Visual Art</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visualProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  // 根据项目ID确定不同的图片定位
  const getImagePosition = (id: string) => {
    switch(id) {
      case 'caiyi':
        return 'center 15%'; // 将第一张图片更往下移动，显示上面的粉色部分
      case 'memory':
        return 'center 70%'; // 将第二张图片向上移动
      default:
        return 'center center';
    }
  };

  return (
    <a 
      href={project.link}
      className="project-card project-link overflow-hidden rounded-lg flex flex-col h-full transition-all duration-300 hover:opacity-95"
    >
      <div className="relative w-full aspect-video mb-4 bg-secondary rounded overflow-hidden">
        {project.imageUrl ? (
          <div className="relative w-full h-full">
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
              style={{ objectPosition: getImagePosition(project.id) }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.parentElement?.parentElement?.querySelector('.fallback-image');
                if (fallback) {
                  fallback.classList.remove('hidden');
                }
              }}
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>
        ) : (
          <div className="fallback-image absolute inset-0 flex flex-col items-center justify-center text-accent p-4">
            <svg className="w-12 h-12 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <p className="text-center">{project.imagePlaceholder}</p>
          </div>
        )}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-accent mb-3 text-sm">{project.description}</p>
        <div className="flex flex-wrap mt-2">
          {project.tags.map((tag) => (
            <span key={tag} className="skill-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
} 