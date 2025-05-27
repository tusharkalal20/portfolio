import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  blogSection,
  achievementSection,
  resumeSection,
  bigProjects
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewResume = resumeSection.display;
  const viewProjects = bigProjects.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="logo-image" style={{ display: 'flex', alignItems: 'center', height: '44px' }}>
            {/* Modern data chart SVG logo */}
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="20" fill="#b983ff" fillOpacity="0.15" />
              <rect x="12" y="24" width="4" height="8" rx="2" fill="#b983ff" />
              <rect x="20" y="16" width="4" height="16" rx="2" fill="#7f5af0" />
              <rect x="28" y="10" width="4" height="22" rx="2" fill="#2cb67d" />
              <circle cx="14" cy="24" r="2" fill="#fff" />
              <circle cx="22" cy="16" r="2" fill="#fff" />
              <circle cx="30" cy="10" r="2" fill="#fff" />
            </svg>
          </span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experience</a>
            </li>
          )}
          {viewProjects && (
            <li>
              <a href="#bigprojects">Projects</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Certifications</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#resume">Resume</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
