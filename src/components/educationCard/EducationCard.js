import React, {createRef, useContext} from "react";
import {Fade, Slide} from "react-reveal";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({school}) {
  const imgRef = createRef();

  const GetDescTable = ({descBullets}) => {
    return descBullets && descBullets.length > 0 ? (
      <table className="education-courses-table">
        <tbody>
          {descBullets.map((item, i) => {
            let course = item;
            let desc = "";
            const dashIdx = item.indexOf(" - ");
            if (dashIdx !== -1) {
              course = item.slice(0, dashIdx);
              desc = item.slice(dashIdx + 3);
            }
            return (
              <tr key={i}>
                <td className="education-course-name-table">{course}</td>
                <td className="education-course-desc-table">{desc}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    ) : null;
  };
  const {isDark} = useContext(StyleContext);

  if (!school.logo)
    console.error(`Image of ${school.name} is missing in education section`);
  return (
    <div>
      <Fade left duration={1000}>
        <div className="education-card">
          {school.logo && (
            <div className="education-card-left">
              <img
                crossOrigin={"anonymous"}
                ref={imgRef}
                className="education-roundedimg"
                src={school.logo}
                alt={school.schoolName}
              />
            </div>
          )}
          <div className="education-card-right">
            <h5 className="education-text-school">{school.schoolName}</h5>

            <div className="education-text-details">
              <h5
                className={
                  isDark
                    ? "dark-mode education-text-subHeader"
                    : "education-text-subHeader"
                }
              >
                {school.subHeader}
              </h5>
              <p
                className={`${
                  isDark ? "dark-mode" : ""
                } education-text-duration`}
              >
                {school.duration}
              </p>
              <p className="education-text-desc">{school.desc}</p>
              <div className="education-text-bullets">
                <GetDescTable descBullets={school.descBullets} />
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="education-card-border"></div>
      </Slide>
    </div>
  );
}
