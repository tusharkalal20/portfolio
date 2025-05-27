import React, {useState, createRef} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({cardInfo, isDark, isGrouped = false}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      {/* Only show logo for non-grouped companies */}
      {!isGrouped && (
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            marginBottom: "1rem"
          }}
        >
          <div style={{marginRight: "1rem"}}>
            <img
              src={cardInfo.companylogo}
              alt={cardInfo.company}
              className="experience-roundedimg"
              style={{
                position: "static",
                width: "60px",
                height: "60px",
                objectFit: "contain",
                borderRadius: "10px",
                background: "white",
                boxShadow: "0 0.5rem 1rem #b0b0b0",
                padding: "1.5rem"
              }}
            />
          </div>
          <div style={{flex: 1}}>
            <div className="company-header" style={{marginBottom: "0.5rem"}}>
              <div>
                <h2
                  style={{margin: 0, fontSize: "2rem", marginBottom: "0.5rem"}}
                >
                  {cardInfo.company}
                </h2>
                {cardInfo.location && (
                  <p style={{margin: 0, color: "#888"}}>{cardInfo.location}</p>
                )}
              </div>
            </div>
            <div className="experience-text-details">
              <h5
                className={
                  isDark
                    ? "experience-text-role dark-mode-text"
                    : "experience-text-role"
                }
              >
                {cardInfo.role}
              </h5>
              <h5
                className={
                  isDark
                    ? "experience-text-date dark-mode-text"
                    : "experience-text-date"
                }
              >
                {cardInfo.date}
              </h5>
              <p
                className={
                  isDark
                    ? "subTitle experience-text-desc dark-mode-text"
                    : "subTitle experience-text-desc"
                }
              >
                {cardInfo.desc}
              </p>
              <ul>
                <GetDescBullets
                  descBullets={cardInfo.descBullets}
                  isDark={isDark}
                />
              </ul>
            </div>
          </div>
        </div>
      )}
      {/* For grouped positions, just show the details (no logo) */}
      {isGrouped && (
        <div className="experience-text-details">
          <h5
            className={
              isDark
                ? "experience-text-role dark-mode-text"
                : "experience-text-role"
            }
          >
            {cardInfo.role}
          </h5>
          <h5
            className={
              isDark
                ? "experience-text-date dark-mode-text"
                : "experience-text-date"
            }
          >
            {cardInfo.date}
          </h5>
          <p
            className={
              isDark
                ? "subTitle experience-text-desc dark-mode-text"
                : "subTitle experience-text-desc"
            }
          >
            {cardInfo.desc}
          </p>
          <ul>
            <GetDescBullets
              descBullets={cardInfo.descBullets}
              isDark={isDark}
            />
          </ul>
        </div>
      )}
    </div>
  );
}
