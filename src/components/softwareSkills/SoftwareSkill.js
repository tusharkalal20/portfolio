import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => (
            <li
              key={i}
              className="software-skill-inline"
              name={skills.skillName}
            >
              {skills.iconSrc ? (
                <img
                  src={skills.iconSrc}
                  alt={skills.skillName}
                  style={{width: 40, height: 40}}
                />
              ) : (
                <i className={skills.fontAwesomeClassname}></i>
              )}
              <p>{skills.skillName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
