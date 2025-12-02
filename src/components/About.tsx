import type { SkillItem } from '../types';
import { useEffect, useRef } from 'react';

const About = () => {
  const skillBarsRef = useRef<HTMLDivElement[]>([]);

  const skills: SkillItem[] = [
    { name: 'HTML/CSS', level: 95, category: 'Frontend' },
    { name: 'JavaScript/TypeScript', level: 90, category: 'Frontend' },
    { name: 'React/NestJS', level: 80, category: 'Full-Stack' },
    { name: 'UI/UX Design', level: 80, category: 'Design' },
    { name: 'Kotlin', level: 80, category: 'Mobile' },
    { name: 'C++', level: 80, category: 'Systems' },
  ];

  // Category colors mapping
  const categoryColors: Record<string, { bg: string, text: string, darkBg: string, darkText: string }> = {
    'Frontend': {
      bg: 'bg-orange-100',
      text: 'text-orange-800',
      darkBg: 'dark:bg-orange-900',
      darkText: 'dark:text-orange-200'
    },
    'Full-Stack': {
      bg: 'bg-blue-100',
      text: 'text-blue-800',
      darkBg: 'dark:bg-blue-900',
      darkText: 'dark:text-blue-200'
    },
    'Design': {
      bg: 'bg-green-100',
      text: 'text-green-800',
      darkBg: 'dark:bg-green-900',
      darkText: 'dark:text-green-200'
    },
    'Mobile': {
      bg: 'bg-purple-100',
      text: 'text-purple-800',
      darkBg: 'dark:bg-purple-900',
      darkText: 'dark:text-purple-200'
    },
    'Systems': {
      bg: 'bg-red-100',
      text: 'text-red-800',
      darkBg: 'dark:bg-red-900',
      darkText: 'dark:text-red-200'
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBar = entry.target as HTMLDivElement;
            const width = skillBar.getAttribute('data-width');
            const index = parseInt(skillBar.getAttribute('data-index') || '0');
            // Staggered animation with delay based on index
            setTimeout(() => {
              skillBar.style.width = `${width}%`;
            }, 150 * index);
          }
        });
      },
      { threshold: 0.5 }
    );

    skillBarsRef.current.forEach((bar) => {
      if (bar) observer.observe(bar);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src="https://via.placeholder.com/300"
              alt="Emmanuel Mbewe"
              className="rounded-2xl shadow-xl w-full max-w-xs"
            />
          </div>
          
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Hello! I'm Emmanuel, a passionate full-stack developer with expertise in frontend and backend technologies. 
              I specialize in building modern, responsive web applications using cutting-edge frameworks and tools.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              With experience across multiple programming languages and frameworks, I enjoy solving complex problems 
              and creating seamless user experiences. When I'm not coding, I'm exploring new technologies, contributing 
              to open-source projects, or mentoring aspiring developers.
            </p>
            
            {/* Category legend - Moved to top */}
            <div className="mb-8 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                Skill Categories
              </h4>
              <div className="flex flex-wrap gap-4">
                {Object.entries(categoryColors).map(([category, colors]) => (
                  <div key={category} className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full ${colors.bg} ${colors.darkBg}`}></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{category}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => {
                const category = skill.category || 'Other';
                const colors = categoryColors[category] || {
                  bg: 'bg-gray-100',
                  text: 'text-gray-800',
                  darkBg: 'dark:bg-gray-900',
                  darkText: 'dark:text-gray-200'
                };
                
                return (
                  <div key={skill.name} className="skill-item">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </span>
                        {/* Category badge */}
                        <span className={`text-xs px-2 py-1 rounded ${colors.bg} ${colors.text} ${colors.darkBg} ${colors.darkText}`}>
                          {category}
                        </span>
                      </div>
                      <span className="font-bold text-primary text-lg">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        ref={(el) => {
                          if (el) skillBarsRef.current[index] = el;
                        }}
                        className="skill-progress"
                        data-width={skill.level}
                        data-index={index}
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                    {/* Skill level indicator */}
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <span>Beginner</span>
                      <span>Intermediate</span>
                      <span>Advanced</span>
                      <span>Expert</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional skills section */}
            <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Additional Skills & Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Project Management','System Administration','Git', 'Docker', 'AWS', 'PostgreSQL', 'Firebase', 'Figma'].map((tool) => (
                  <span 
                    key={tool}
                    className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;