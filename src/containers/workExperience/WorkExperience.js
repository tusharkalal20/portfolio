import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Work Experience</h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => (
                  <div className="company-experience-card" key={i}>
                    <div className="company-header">
                      <img src={card.companylogo} alt={card.company} className="experience-roundedimg" />
                      <div>
                        <h2>{card.company}</h2>
                        {card.location && <p>{card.location}</p>}
                      </div>
                    </div>
                    <div className="positions-list">
                      {card.positions.map((pos, j) => (
                        <ExperienceCard
                          key={j}
                          isDark={isDark}
                          isGrouped={true}
                          cardInfo={{
                            company: card.company,
                            companylogo: undefined,
                            role: pos.role,
                            date: pos.date,
                            desc: pos.desc,
                            descBullets: pos.descBullets
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
