import React from "react";
import "./About.scss";
import profileImg from "../../assets/images/profile.jpg"; // Replace with your image path

export default function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h1>
            Let me <span className="about-highlight">introduce</span> myself
          </h1>
          <p>
            I'm a data-driven storyteller with a passion for turning raw numbers
            into smart strategies. With hands-on experience in marketing
            analytics, BI tools, and customer behavior modeling, I specialize in
            uncovering insights that drive business growth.
          </p>
          <p>
            Currently pursuing my Master's in Business Analytics & AI at UT
            Dallas, I'm on a mission to help companies make smarter, faster, and
            more human decisions through data.
          </p>
          <p>
            I bring experience in{" "}
            <span className="about-purple">
              marketing, analytics, and customer insights.
            </span>
          </p>
          <p>
            I thrive in collaborative settings and am always excited to work on
            innovative projects that blend strategy with creativity. I'm looking
            forward to new opportunities to put my skills to work in{" "}
            <span className="about-purple">marketing analytics</span> and{" "}
            <span className="about-purple">make a real difference!</span>
          </p>
        </div>
        <div className="about-image">
          <img src={profileImg} alt="Profile" />
        </div>
      </div>
    </section>
  );
}
