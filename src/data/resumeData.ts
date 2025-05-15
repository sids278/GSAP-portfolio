import { ResumeData } from '../types';

export const resumeData: ResumeData = {
  name: "Siddharth Sharma",
  title: "Software Developer",
  summary: "Detail-oriented and performance-driven developer with hands-on experience in building scalable, efficient, and robust applications using modern web technologies. Passionate about DevOps, backend systems, and cloud-native development.",
  experience: [
    {
      company: "Pathlock",
      position: "Software Developer",
      duration: "June 2024 – Present",
      description: [
        "Developed and maintained microservices related to reporting, role management, and SoD (Segregation of Duties)",
        "Modernized platform components by migrating to ASP.NET Core architecture",
        "Enhanced infrastructure for improved scalability and reliability",
        "Performed performance tuning to handle large datasets across application pages",
        "Improved accuracy and performance of violation checks for the Risks and Violations Assessment team"
      ]
    },
    {
      company: "1K Networks",
      position: "Software Development Intern",
      duration: "January 2023 – May 2023",
      description: [
        "Built a MERN admin dashboard delivering real-time insights on engagement, orders, and inventory",
        "Implemented React components and integrated Redux for efficient state management",
        "Collaborated with product and design teams to build a user-friendly interface"
      ]
    }
  ],
  education: [
    {
      institution: "Punjab Engineering College",
      degree: "Bachelor of Technology in Computer Science",
      duration: "Dec. 2020 – May 2024",
      description: "CGPA: 7.85 | Relevant coursework: DSA, OS, OOPS, DBMS, CN"
    }
  ],
  skills: [
    {
      category: "Languages",
      items: ["C#", "C++", "JavaScript", "Java", "TypeScript", "HTML/CSS", "Golang", "Python", "SQL", "Shell"]
    },
    {
      category: "Technologies & Frameworks",
      items: ["React", "Node.js", "Express.js", "Spring", "ASP.NET", "Material-UI", "Ant Design", "Redux"]
    },
    {
      category: "DevOps & Tools",
      items: ["Git", "Docker", "Kubernetes", "Redis", "AWS", "Azure", "CI/CD", "SSMS"]
    },
    {
      category: "Soft Skills",
      items: ["Problem Solving", "Team Collaboration", "Technical Writing", "Time Management"]
    }
  ],
  projects: [
    {
      company: "Personal Project",
      position: "Go URL Shortener",
      duration: "2024",
      description: [
        "Developed a URL shortening service using Golang",
        "Used Redis for fast key-value storage",
        "Dockerized the app for scalability"
      ]
    },
    {
      company: "Personal Project",
      position: "Blogster",
      duration: "2024",
      description: [
        "Full-stack MERN blog application with Dockerized backend",
        "Handled state with Redux and built reusable React components"
      ]
    },
    {
      company: "Personal Project",
      position: "Swagger API",
      duration: "2023",
      description: [
        "Built a RESTful API with Node and Express",
        "Documented endpoints using Swagger for easy client integration"
      ]
    },
    {
      company: "Personal Project",
      position: "Container Deployment",
      duration: "2023",
      description: [
        "Dockerized a Node.js app and deployed it using Docker Compose",
        "Built CI/CD pipeline using GitHub Actions and deployed on AWS EC2 with Jenkins"
      ]
    }
  ],
  contact: {
    email: "udays2002@gmail.com",
    phone: "6283977373",
    location: "India",
    website: "",
    github: "https://github.com/sids278",
    linkedin: "https://www.linkedin.com/in/siddharth-sharma-48ba80215/",
    twitter: "",
    leetcode: "https://leetcode.com/u/sid_812/"
  }
};
