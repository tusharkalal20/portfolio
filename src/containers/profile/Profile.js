import React, {useContext} from "react";
// import "./Profile.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting, illustration} from "../../portfolio";
// import FeelingProud from "./FeelingProud";
import StyleContext from "../../contexts/StyleContext";

// Safe fallback if openSource is not defined
const openSource = null;

export default function Profile() {
  const {isDark} = useContext(StyleContext);

  return (
    <div className="main" id="about">
      <div className="greeting-div">
        <div className="greeting-text-div">
          <div>
            <h1
              className={isDark ? "dark-mode greeting-text" : "greeting-text"}
            >
              {greeting.title}
            </h1>
            <p
              className={
                isDark ? "dark-mode greeting-text-p" : "greeting-text-p"
              }
            >
              {greeting.subTitle}
            </p>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contact Me" href="#contact" />
              {greeting.resumeLink && (
                <Button
                  text="See My Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Optional open source section */}
      {/* {openSource && (
        <div>
          // Your Open Source JSX here
        </div>
      )} */}
    </div>
  );
}
