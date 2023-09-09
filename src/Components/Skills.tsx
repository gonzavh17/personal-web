import React from "react";
import "../assets/Css/skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextReveal from "../AnimationComponents/TextReveal";
import { BlackReveal } from "../AnimationComponents/BlackReveal";
import {
  faHtml5,
  faCss3,
  faReact,
  faBootstrap,
  faJs,
  faNodeJs,
  faGit,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import carImages from "../carImages";
import {
  faLaptopCode,
  faServer,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

function Skills() {
  return (
    <div className="skills">
     
     <div className="skills-title_container">
     <BlackReveal>
        <p className="skills-title">Skills & Certification</p>
      </BlackReveal>
     </div>

      <div className="skills-parent">
        <TextReveal customDelay={0.5}>
          <div className="skills-div1">
            <div className="skills-div-title_container">
              <p className="skill-div_title">Front-end</p>
            </div>

            <div className="skill-card">
              <div className="tech-container">
                <img
                  className="skills-tech-logo_html"
                  src={carImages.html}
                  alt=""
                />
                <p className="skill-technologie">Html</p>
              </div>
              <div className="tech-container">
                <img
                  className="skills-tech-logo_html"
                  src={carImages.css}
                  alt=""
                />
                <p className="skill-technologie">Css</p>
              </div>
              <div className="tech-container">
                <FontAwesomeIcon icon={faReact} className="skill-tech-icon" />
                <p className="skill-technologie">React</p>
              </div>
              <div className="tech-container">
                <FontAwesomeIcon
                  icon={faBootstrap}
                  className="skill-tech-icon"
                />
                <p className="skill-technologie">Bootstrap</p>
              </div>
              <div className="tech-container">
                <img
                  className="skills-tech-logo"
                  src={carImages.framerMotion}
                  alt=""
                />
                <p className="skill-technologie">Framer Motion</p>
              </div>
            </div>
          </div>
        </TextReveal>

        <TextReveal customDelay={0.5}>
          <div className="skills-div2">
            <div className="skills-div-title_container">
              <p className="skill-div_title">Back-end</p>
            </div>

            <div className="skill-card">
              <div className="tech-container">
                <img
                  className="skills-tech-logo_js"
                  src={carImages.js}
                  alt=""
                />
                <p className="skill-technologie">JavaScript</p>
              </div>
              <div className="tech-container">
                <FontAwesomeIcon icon={faNodeJs} className="skill-tech-icon" />
                <p className="skill-technologie">Node Js</p>
              </div>
              <div className="tech-container">
                <img
                  className="skills-tech-logo"
                  src={carImages.mongoDB}
                  alt=""
                />
                <p className="skill-technologie">MongoDB</p>
              </div>
              <div className="tech-container">
                <img
                  className="skills-tech-logo_express"
                  src={carImages.express}
                  alt=""
                />
                <p className="skill-technologie">Express JS</p>
              </div>
              <div className="tech-container">
                <img
                  className="skills-tech-logo_sql"
                  src={carImages.mysql}
                  alt=""
                />
                <p className="skill-technologie">MySQL</p>
              </div>
            </div>
          </div>
        </TextReveal>

        <TextReveal customDelay={0.5}>
          <div className="skills-div3">
            <div className="skills-div-title_container">
              <p className="skill-div_title">Aditional</p>
            </div>

            <div className="skill-card">
              <div className="tech-container">
                <img
                  className="skills-tech-logo_sql"
                  src={carImages.linux}
                  alt=""
                />
                <p className="skill-technologie">Linux</p>
              </div>
              <div className="tech-container">
                <img
                  className="skills-tech-logo_sql"
                  src={carImages.git}
                  alt=""
                />
                <p className="skill-technologie">Git</p>
              </div>
            </div>
          </div>
        </TextReveal>
      </div>
    </div>
  );
}

export default Skills;
