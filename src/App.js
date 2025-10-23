import React from "react";
import "./App.css";

const projects = [
  {
    title: "Login Permissions Audit Script",
    description:
      "A T-SQL script that automates checking login roles and permissions across databases.",
    link: "https://github.com/ishanka0111/your-repo-name/blob/main/permission-audit.sql",
  },
  {
    title: "Database Backup Automation",
    description: "PowerShell scripts to schedule and verify automated backups.",
    link: "#",
  },
];

const articles = [
  { title: "A Day in the Life of a DBA Intern", link: "#" },
  { title: "Understanding SQL Server Roles and Permissions", link: "#" },
  { title: "How I Optimized Query Performance", link: "#" },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ishanka Senadeera</h1>
        <p>Database Administrator (DBA) Intern</p>
      </header>

      <section className="App-section">
        <h2>About Me</h2>
        <p>
          I'm a passionate DBA intern focused on SQL Server, database automation,
          and security. I enjoy writing scripts to simplify tasks and sharing
          knowledge through articles and projects.
        </p>
      </section>

      <section className="App-section">
        <h2>Projects</h2>
        <ul>
          {projects.map(({ title, description, link }) => (
            <li key={title}>
              <strong>{title}</strong>
              <p>{description}</p>
              <a href={link} target="_blank" rel="noopener noreferrer">
                View Script on GitHub
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="App-section">
        <h2>Articles</h2>
        <ul>
          {articles.map(({ title, link }) => (
            <li key={title}>
              <a href={link}>{title}</a>
            </li>
          ))}
        </ul>
      </section>

      <section className="App-section">
        <h2>Contact</h2>
        <p>
          <a
            href="https://linkedin.com/in/ishanka0111"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/ishanka0111"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          | <a href="mailto:your.email@example.com">Email</a>
        </p>
      </section>

      <footer className="App-footer">
        &copy; 2025 Ishanka Senadeera. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
