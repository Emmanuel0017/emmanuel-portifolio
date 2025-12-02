import type { ProjectItem } from '../types';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects: ProjectItem[] = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout.',
      image: 'https://via.placeholder.com/400x200',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      liveDemo: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A drag-and-drop task management application with user authentication and real-time updates.',
      image: 'https://via.placeholder.com/400x200',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      liveDemo: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application that displays current conditions and forecasts for multiple cities.',
      image: 'https://via.placeholder.com/400x200',
      technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
      liveDemo: '#',
      github: '#',
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