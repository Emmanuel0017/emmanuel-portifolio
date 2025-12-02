export interface SkillItem {
  name: string;
  level: number;
  category?: string; // Optional: add category if needed
}

export interface ExperienceItem {
  id: number;
  date: string;
  title: string;
  company: string;
  description: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveDemo: string;
  github: string;
}