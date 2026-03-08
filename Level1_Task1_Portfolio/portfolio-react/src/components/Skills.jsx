import React from "react";
import {
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaTools
} from "react-icons/fa";

function Skills() {

  return (

    <section id="skills" className="skills">

      <h2 className="section-title">
        My <span>Skills</span>
      </h2>

      <div className="skills-container">


        {/* Web */}
        <div className="skill-card">

          <div className="skill-icon-wrapper">
            <FaCode className="skill-icon"/>
          </div>

          <h3>Web Technologies</h3>

          <div className="skill-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>MERN</span>
          </div>

        </div>


        {/* Database */}
        <div className="skill-card">

          <div className="skill-icon-wrapper">
            <FaDatabase className="skill-icon"/>
          </div>

          <h3>Databases</h3>

          <div className="skill-tags">
            <span>MongoDB</span>
            <span>SQL</span>
          </div>

        </div>


        {/* Programming */}
        <div className="skill-card">

          <div className="skill-icon-wrapper">
            <FaLaptopCode className="skill-icon"/>
          </div>

          <h3>Programming Languages</h3>

          <div className="skill-tags">
            <span>C</span>
            <span>Python</span>
          </div>

        </div>


        {/* Tools */}
        <div className="skill-card">

          <div className="skill-icon-wrapper">
            <FaTools className="skill-icon"/>
          </div>

          <h3>Tools</h3>

          <div className="skill-tags">
            <span>VS Code</span>
            <span>GitHub</span>
            <span>MS Word</span>
            <span>PowerPoint</span>
          </div>

        </div>


      </div>

    </section>

  );
}

export default Skills;