import React from "react";
import "./BigProjectCard.scss";

export default function BigProjectCard({ project, isDark }) {
  const isFinanceProject = project.projectName === "Personal Finance Analysis";
  
  return (
    <div className={`${isDark ? "dark-mode " : ""}project-card ${isFinanceProject ? "finance-project" : ""}`}>
      <div className="project-image">
        <img src={project.image} alt={project.projectName} />
      </div>
      <div className="project-details">
        <h3>{project.projectName}</h3>
        <p>{project.projectDesc}</p>
        {project.tools && project.tools.length > 0 && (
          <div className="project-tools">
            <span className="project-tools-title">Tools Used:</span>
            <div className="project-tools-list">
              {project.tools.map((tool, idx) => (
                <img src={tool.logo} alt={tool.name} className="project-tool-logo" key={idx} title={tool.name} />
              ))}
            </div>
          </div>
        )}
        <div className="project-links">
          {project.footerLink &&
            project.footerLink.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
} 