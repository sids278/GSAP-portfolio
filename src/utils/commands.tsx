import React from 'react';
import { Command } from '../types';
import { resumeData } from '../data/resumeData';
import { projects } from '../data/projectsData';

export const helpCommand: Command = {
  name: 'help',
  description: 'Display available commands',
  execute: () => {
    const commands = [
      { cmd: 'about', desc: 'Display information about me' },
      { cmd: 'projects', desc: 'View my projects' },
      { cmd: 'projects [id]', desc: 'View details of a specific project' },
      { cmd: 'skills', desc: 'List my technical skills' },
      { cmd: 'experience', desc: 'Show my work experience' },
      { cmd: 'education', desc: 'Show my educational background' },
      { cmd: 'contact', desc: 'Display contact information' },
      { cmd: 'resume', desc: 'View my complete resume' },
      { cmd: 'social', desc: 'View social media links' },
      { cmd: 'clear', desc: 'Clear the terminal' },
      { cmd: 'help', desc: 'Display this help message' },
    ];

    return (
      <div className="text-gray-300">
        <p className="text-green-400 mb-2">Available Commands:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-1">
          {commands.map((cmd) => (
            <div key={cmd.cmd} className="flex">
              <span className="text-yellow-300 w-32">{cmd.cmd}</span>
              <span>{cmd.desc}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-gray-400">
          <span className="text-blue-400">Tip:</span> Use Tab for auto-completion and Arrow keys to navigate command history
        </p>
      </div>
    );
  },
};

export const aboutCommand: Command = {
  name: 'about',
  description: 'Display information about me',
  execute: () => {
    return (
      <div className="text-gray-300">
        <p className="text-green-400 mb-2">{resumeData.name} - {resumeData.title}</p>
        <p className="mb-4">{resumeData.summary}</p>
        <p className="text-blue-400">
          Type <span className="text-yellow-300">projects</span> to see my work or{' '}
          <span className="text-yellow-300">skills</span> to see my technical skills.
        </p>
      </div>
    );
  },
};

export const projectsCommand: Command = {
  name: 'projects',
  description: 'View my projects',
  usage: 'projects [id]',
  execute: (args?: string[]) => {
    // If an ID is provided, show specific project
    if (args && args.length > 0) {
      const projectId = args[0];
      const project = projects.find(p => p.id === projectId);
      
      if (!project) {
        return (
          <div className="text-red-400">
            Project not found. Type <span className="text-yellow-300">projects</span> to see all projects.
          </div>
        );
      }
      
      return (
        <div className="text-gray-300">
          <div className="mb-2">
            <span className="text-green-400 text-lg">{project.name}</span>
          </div>
          <p className="mb-3">{project.description}</p>
          <div className="mb-3">
            <span className="text-blue-400">Technologies: </span>
            <span>{project.technologies.join(', ')}</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-300 hover:underline"
              >
                GitHub Repository
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-300 hover:underline"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      );
    }
    
    // Otherwise, list all projects
    return (
      <div className="text-gray-300">
        <p className="text-green-400 mb-2">My Projects:</p>
        {projects.map((project) => (
          <div key={project.id} className="mb-3">
            <p>
              <span className="text-yellow-300">[{project.id}]</span>{' '}
              <span className="text-blue-400">{project.name}</span>
            </p>
            <p className="ml-6">{project.description.substring(0, 100)}...</p>
            <p className="ml-6 text-gray-400 text-sm">
              Type <span className="text-yellow-300">projects {project.id}</span> for details
            </p>
          </div>
        ))}
      </div>
    );
  },
};

export const skillsCommand: Command = {
  name: 'skills',
  description: 'List my technical skills',
  execute: () => {
    return (
      <div className="text-gray-300">
        <p className="text-green-400 mb-2">Technical Skills:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resumeData.skills.map((skillCategory) => (
            <div key={skillCategory.category} className="mb-2">
              <p className="text-blue-400 mb-1">{skillCategory.category}:</p>
              <div className="ml-4">
                {skillCategory.items.map((skill, index) => (
                  <span key={index} className="mr-2">
                    <span className="text-yellow-300">•</span> {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const experienceCommand: Command = {
  name: 'experience',
  description: 'Show my work experience',
  execute: () => {
    return (
      <div className="text-gray-300">
        <p className="text-green-400 mb-2">Work Experience:</p>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
              <p className="text-blue-400">{exp.position} @ {exp.company}</p>
              <p className="text-yellow-300">{exp.duration}</p>
            </div>
            <ul className="list-disc pl-5">
              {exp.description.map((item, i) => (
                <li key={i} className="mb-1">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  },
};

export const educationCommand: Command = {
  name: 'education',
  description: 'Show my educational background',
  execute: () => {
    return (
      <div className="text-gray-300">
        <p className="text-green-400 mb-2">Education:</p>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="mb-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
              <p className="text-blue-400">{edu.degree}</p>
              <p className="text-yellow-300">{edu.duration}</p>
            </div>
            <p>{edu.institution}</p>
            {edu.description && <p className="text-gray-400 mt-1">{edu.description}</p>}
          </div>
        ))}
      </div>
    );
  },
};

export const contactCommand: Command = {
  name: 'contact',
  description: 'Display contact information',
  execute: () => {
    return (
      <div className="text-gray-300">
        <p className="text-green-400 mb-2">Contact Information:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <span className="text-blue-400">Email: </span>
            <a 
              href={`mailto:${resumeData.contact.email}`}
              className="text-yellow-300 hover:underline"
            >
              {resumeData.contact.email}
            </a>
          </div>
          {resumeData.contact.phone && (
            <div>
              <span className="text-blue-400">Phone: </span>
              <a 
                href={`tel:${resumeData.contact.phone}`}
                className="text-yellow-300 hover:underline"
              >
                {resumeData.contact.phone}
              </a>
            </div>
          )}
          <div>
            <span className="text-blue-400">Location: </span>
            <span>{resumeData.contact.location}</span>
          </div>
          {resumeData.contact.website && (
            <div>
              <span className="text-blue-400">Website: </span>
              <a 
                href={resumeData.contact.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-300 hover:underline"
              >
                {resumeData.contact.website}
              </a>
            </div>
          )}
        </div>
        <p className="mt-3 text-gray-400">
          Type <span className="text-yellow-300">social</span> to view my social media profiles.
        </p>
      </div>
    );
  },
};

export const resumeCommand: Command = {
  name: 'resume',
  description: 'View my complete resume',
  execute: () => {
    return (
      <div className="text-gray-300">
        <p className="text-green-400 mb-2">Resume Overview:</p>
        <p className="mb-3">{resumeData.summary}</p>
        
        <p className="text-blue-400 mb-1">Quick Links:</p>
        <ul className="list-disc pl-5 mb-3">
          <li className="mb-1">
            Type <span className="text-yellow-300">experience</span> to view work history
          </li>
          <li className="mb-1">
            Type <span className="text-yellow-300">education</span> to view education
          </li>
          <li className="mb-1">
            Type <span className="text-yellow-300">skills</span> to view technical skills
          </li>
          <li className="mb-1">
            Type <span className="text-yellow-300">projects</span> to view portfolio projects
          </li>
          <li>
            Type <span className="text-yellow-300">contact</span> to view contact information
          </li>
        </ul>
        
        <p className="text-gray-400">
          Download full PDF resume: <a href="#" className="text-yellow-300 hover:underline">resume.pdf</a>
        </p>
      </div>
    );
  },
};

export const socialCommand: Command = {
  name: 'social',
  description: 'View social media links',
  execute: () => {
    return (
      <div className="text-gray-300">
        <p className="text-green-400 mb-2">Social Media Links:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <span className="text-blue-400">GitHub: </span>
            <a 
              href={resumeData.contact.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-yellow-300 hover:underline"
            >
              github
            </a>
          </div>
          <div>
            <span className="text-blue-400">LinkedIn: </span>
            <a 
              href={resumeData.contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-yellow-300 hover:underline"
            >
              linkedin
            </a>
          </div>
          {resumeData.contact.twitter && (
            <div>
              <span className="text-blue-400">Twitter: </span>
              <a 
                href={resumeData.contact.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-300 hover:underline"
              >
                twitter
              </a>
            </div>
          )}
        </div>
      </div>
    );
  },
};