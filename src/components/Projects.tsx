import type { ProjectItem } from '../types';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects: ProjectItem[] = [
    {
      id: 1,
      title: 'Power Genius Engineering website',
      description: 'A fully responsive website with dynamic display of the company\'s services and projects with a professional dashboard for managing the site content',
      image: './public/assets/2.png',
      technologies: ['JavaScript', 'React','TypeScript','Nestjs','API','Postgres','CSS'],
      liveDemo: 'https://powergeniusengineering.vercel.app/',
      github: 'https://github.com/Emmanuel0017/power_genius',
    },
    {
      id: 2,
      title: 'HealthLink App',
      description: 'A mobile app for health monitoring and disease prediction using ML model trained on real data',
      image: 'https://via.placeholder.com/400x200',
      technologies: ['Kotlin', 'Python', 'firebase', 'ML model'],
      liveDemo: '#',
      github: 'https://github.com/Emmanuel0017/HealthLink',
    },
    {
      id: 3,
      title: 'Techtronics Power Pro Solutions website',
      description: 'A modern website displaying static services and projects ',
      image: './public/assets/1.png',
      technologies: ['HTML', 'CSS', 'TypeScript','React'],
      liveDemo: 'https://techtronicsmw.netlify.app/',
      github: 'https://github.com/Emmanuel1730/techtronics.git',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveDemo}
                    className="flex items-center gap-2 text-sm transition-colors hover:text-primary"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm transition-colors hover:text-primary"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;