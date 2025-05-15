export interface Command {
  name: string;
  description: string;
  usage?: string;
  execute: (args?: string[]) => React.ReactNode;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  description?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  contact: {
    email: string;
    phone?: string;
    location: string;
    website?: string;
    github: string;
    linkedin: string;
    twitter?: string;
    leetcode?: string;
    projects?: Project[];
  };
}

export interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
  id: string;
}