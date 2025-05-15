import { Project } from '../types';

export const projects: Project[] = [
  {
    id: "p1",
    name: "Go URL Shortener",
    description: "A URL shortening service built with Golang, utilizing Redis for fast key-value storage. The application is Dockerized for scalability and ease of deployment.",
    technologies: ["Golang", "Redis", "Docker"],
    github: "https://github.com/sids278/go-url-shortener",
    demo: ""
  },
  {
    id: "p2",
    name: "Blogster",
    description: "A full-stack MERN blog application featuring a Dockerized backend. Implements Redux for state management and reusable React components for a seamless user experience.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "Docker"],
    github: "https://github.com/sids278/blogster",
    demo: ""
  },
  {
    id: "p3",
    name: "Swagger API",
    description: "Developed a RESTful API using Node.js and Express, with comprehensive documentation provided through Swagger for easy client integration.",
    technologies: ["Node.js", "Express.js", "Swagger"],
    github: "https://github.com/sids278/swagger-api",
    demo: ""
  },
  {
    id: "p4",
    name: "Container Deployment",
    description: "Dockerized a Node.js application and deployed it using Docker Compose. Established a CI/CD pipeline with GitHub Actions and deployed on AWS EC2 using Jenkins.",
    technologies: ["Node.js", "Docker", "Docker Compose", "GitHub Actions", "AWS EC2", "Jenkins"],
    github: "https://github.com/sids278/container-deployment",
    demo: ""
  },
  {
    id: "p5",
    name: "Admin Dashboard",
    description: "An admin dashboard developed during an internship at 1K Networks, providing real-time insights on engagement, orders, and inventory. Built using the MERN stack.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Redux"],
    github: "https://github.com/sids278/admin-dashboard",
    demo: ""
  }
];
