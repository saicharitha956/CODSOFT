import React from "react";

function Projects() {

  return (

    <section id="projects" className="projects">

      <h2 className="section-title">
        My <span>Projects</span>
      </h2>


      <div className="projects-container">


        {/* Project 1 */}
        <div className="project-card">

          <img
            src="/images/traveldiaries.png"
            alt="Travel Diaries"
          />

          <div className="project-content">

            <h3>Travel Diaries</h3>

            <p>
              A MERN stack application to securely create, manage, and share
              personalized travel experiences in form of stories.
            </p>


            <div className="tech-stack">

              <span>MongoDB</span>
              <span>Express js</span>
              <span>React js</span>
              <span>Node js</span>
              <span>JWT/Auth</span>

            </div>


            <div className="project-buttons">

              <a
                href="https://github.com/saicharitha956/traveldiaries"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>



        {/* Project 2 */}
        <div className="project-card">

          <img
            src="/images/smartbuilding.png"
            alt="Inspection System"
          />

          <div className="project-content">

            <h3>Smart Building Inspection</h3>

            <p>
              AI-based system that analyzes building images and detects
              structural damage with severity prediction.
            </p>


            <div className="tech-stack">

              <span>Python</span>
              <span>YOLOv8</span>
              <span>Flask</span>
              <span>Rest APIs</span>
              <span>Mongo DB</span>

            </div>


            <div className="project-buttons">

              <a
                href="https://github.com/saicharitha956/smart-building-inspection-system"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>



        {/* Project 3 */}
        <div className="project-card">

          <img
            src="/images/savefoodneedfood.png"
            alt="Save Food"
          />

          <div className="project-content">

            <h3>Save Food & Need Food</h3>

            <p>
              A mobile application developed using MIT app inventor the aim is to connect food providers with
              people in need using real-time location services.
            </p>


            <div className="tech-stack">

              <span>MIT App</span>
              <span>Firebase</span>
              <span>Location API</span>

            </div>


            <div className="project-buttons">

              <a
                href="https://drive.google.com/file/d/18BTG3wBgqTizFcRmdOHOhhWlvMtxXl7G/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Drive
              </a>

            </div>

          </div>

        </div>


      </div>

    </section>

  );

}

export default Projects;