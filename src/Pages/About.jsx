import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h1>About Me</h1>
        <p className="about-text">
          I am a passionate Backend Developer who loves building secure,
          scalable and high-performance web applications. I enjoy solving
          real-world problems using modern technologies and clean code
          practices.
        </p>

        <div className="about-cards">
          <div className="card">
            <h3>🚀 Skills</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>REST API</li>
            </ul>
          </div>

          <div className="card">
            <h3>💼 Experience</h3>
            <p>
              Developed portfolio websites, e-commerce systems,
              authentication systems and REST APIs using MERN stack.
            </p>
          </div>

          <div className="card">
            <h3>🎯 Goal</h3>
            <p>
              To become a professional full-stack developer and work
              on impactful real-world projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;