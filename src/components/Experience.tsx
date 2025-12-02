import type { ExperienceItem } from '../types';
import { useEffect, useRef } from 'react';

const Experience = () => {
  const timelineItemsRef = useRef<HTMLDivElement[]>([]);

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      date: '2025',
      title: 'IT officer and Dveloper',
      company: 'Techtronics Power Pro Solutions',
      description: 'Currently working part-time as Techtronic Power Pro Solutions Developer and IT Officer',
    },
    {
      id: 2,
      date: '2021 - Present',
      title: 'Bachelor of Education in Computer Science',
      company: 'University of Malawi',
      description: 'Final Year Student in the University of Malawi persuing Bachelor of Education in Computer Science',
    },
    {
      id: 3,
      date: '2020 - 2022',
      title: 'A/C Technician',
      company: 'S.A.M Engineering',
      description: 'Worked as Air Conditioner Technician in S.A.M Engineering',
    },
    {
      id: 4,
      date: '2015 - 2019',
      title: 'MSCE',
      company: 'Ndirande Hill Secondary School',
      description: 'Completed Malawi School Certificate of Education',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    timelineItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20">
      <div className="container">
        <div className="section-title">
          <h2>Experience & Education</h2>
        </div>
        
        {/* Timeline Container */}
        <div className="timeline relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary hidden lg:block"></div>
          
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              ref={(el) => {
                if (el) timelineItemsRef.current[index] = el;
              }}
              className={`timeline-item relative px-4 sm:px-10 py-4 sm:py-10 w-full lg:w-1/2 ${
                index % 2 === 0 ? 'lg:pr-8 lg:left-0' : 'lg:pl-8 lg:left-1/2'
              }`}
            >
              {/* Timeline Content */}
              <div className="timeline-content bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg relative">
                {/* Timeline Arrow */}
                <div className={`absolute top-6 w-4 h-4 bg-white dark:bg-gray-800 transform rotate-45 hidden lg:block ${
                  index % 2 === 0 ? '-right-2' : '-left-2'
                }`}></div>
                
                <div className="timeline-date text-primary font-semibold mb-2">{exp.date}</div>
                <h3 className="timeline-title text-xl font-semibold mb-2">{exp.title}</h3>
                <p className="timeline-company text-gray-600 dark:text-gray-300 font-medium mb-3">{exp.company}</p>
                <p className="timeline-description text-gray-600 dark:text-gray-400">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;