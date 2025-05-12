import { useLayoutEffect, useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./App.css";

const Section = ({ title, color, children }) => (
  <section
    className="section gsap-fade section-hover-glow"
    style={{
      borderLeft: `4px solid ${color}`
    }}
  >
    <h2 className="section-title" style={{ borderColor: color }}>{title}</h2>
    <div className="section-content">{children}</div>
  </section>
);

const Card = ({ title, desc, tech, url }) => (
  <div className="card">
    <h3 className="card-title">
      <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
    </h3>
    <p className="card-desc">{desc}</p>
    <p className="card-tech">Tech: {tech}</p>
  </div>
);

export default function App() {
  const heroRef = useRef(null);
  const [repos, setRepos] = useState([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: -100,
        scale: 0.9,
        duration: 1.5,
        ease: "power4.out"
      });
      gsap.from(".gsap-fade", {
        duration: 1.2,
        opacity: 0,
        y: 30,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.3
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/users/sids278/repos?per_page=100")
      .then(res => res.json())
      .then(data => {
        const projects = data.map(repo => ({
          title: repo.name,
          desc: repo.description || "Check for yourself by opening it in my Github :)",
          tech: repo.language || "N/A",
          url: repo.html_url
        }));
        setRepos(projects);
      })
      .catch(err => console.error("Failed to fetch repos:", err));
  }, []);

  const skills = [
    ["C++, C#, Java, Python, Go", "JavaScript, TypeScript", "Shell, SQL"],
    ["React, Node.js, Express, Spring", "Docker, Kubernetes, Redis", "MongoDB, SQL Server"],
    ["AWS, Azure", "CI/CD, Jenkins, GitHub Actions", "Material UI, Ant Design"]
  ];

  return (
    <div className="cyberpunk-bg">
      <div className="app-container dark-theme">
        <section className="hero gsap-hero" ref={heroRef}>
          <h1 className="hero-title glow-text">Siddharth Sharma</h1>
          <p className="hero-subtitle">Software Developer | Full Stack Engineer | Problem Solver</p>
          <div className="hero-links">
            <a href="https://github.com/sids278" target="_blank">GitHub</a>
            <a href="https://leetcode.com/u/sid_812/" target="_blank">LeetCode</a>
            <a href="https://www.linkedin.com/in/siddharth-sharma-48ba80215/" target="_blank">LinkedIn</a>
          </div>
        </section>

        <Section title="Projects" color="#06b6d4">
          <div className="grid-container">
            {repos.length > 0 ? (
              repos.map((proj, i) => <Card key={i} {...proj} />)
            ) : (
              <p>Loading repositories...</p>
            )}
          </div>
        </Section>

        <Section title="Skills" color="#eab308">
          <div className="grid-container">
            {skills.map((col, i) => (
              <ul key={i} className="skill-list">
                {col.map((item, j) => <li key={j}>• {item}</li>)}
              </ul>
            ))}
          </div>
        </Section>

        <Section title="Experience" color="#10b981">
          <div className="experience-list">
            <div>
              <h3>Pathlock (2024–Present)</h3>
              <p>ASP.NET Core, microservices, performance tuning, risk violation analysis</p>
            </div>
            <div>
              <h3>1K Networks (Jan–May 2023)</h3>
              <p>MERN dashboard, analytics, Redux state management</p>
            </div>
          </div>
        </Section>

        <Section title="Education" color="#a855f7">
          <p>B.Tech in Computer Science, Punjab Engineering College (2020–2024) — CGPA: 7.85</p>
        </Section>

        <Section title="Achievements" color="#ec4899">
          <ul className="achievement-list">
            <li>Flipkart GRID 5.0 Hackathon Finalist</li>
            <li>Executive Member — ACM Coding Society</li>
            <li>Runner-up — Inter Branch Football Tournament</li>
          </ul>
        </Section>

        <footer className="footer gsap-fade">
          © 2025 Siddharth Sharma. Built with ❤️ using React and GSAP.
        </footer>
      </div>
    </div>
  );
}
