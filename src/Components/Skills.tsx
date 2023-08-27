import React from "react";
import "../assets/Css/skills.css";
import { BlackReveal } from "../AnimationComponents/BlackReveal";
import TextReveal from "../AnimationComponents/TextReveal";

export const Skills = () => {
  return (
    <div className="skills">
      <p className="skills-principal-title">Skills</p>

      <div className="skills-parent">
        <div className="skills-div1">
          <BlackReveal>
            <p className="skills-title">Front-end</p>
          </BlackReveal>
        </div>
        <div className="skills-div2">
          <div className="skills-lenguages__container">
            <BlackReveal>
              <p className="skills-lenguages">Html5</p>
            </BlackReveal>
            <TextReveal customDelay={.1}>
              <p className="skills-progress">Advanced</p>
            </TextReveal>
          </div>
          <div className="skills-lenguages__container">
            <BlackReveal>
              <p className="skills-lenguages">Css3</p>
            </BlackReveal>
            <TextReveal customDelay={.2}>
              <p className="skills-progress">Advanced</p>
            </TextReveal>
          </div>
          <div className="skills-lenguages__container">
            <BlackReveal>
              <p className="skills-lenguages">Sass</p>
            </BlackReveal>
            <TextReveal customDelay={.3}>
              <p className="skills-progress">Advanced</p>
            </TextReveal>
          </div>
          <div className="skills-lenguages__container">
            <BlackReveal>
              <p className="skills-lenguages">React</p>
            </BlackReveal>
            <TextReveal customDelay={.4}>
              <p className="skills-progress">Advanced</p>
            </TextReveal>
          </div>
          <div className="skills-lenguages__container">
            <BlackReveal>
              <p className="skills-lenguages">Framer Motion</p>
            </BlackReveal>
            <TextReveal customDelay={.5}>
              <p className="skills-progress">Advanced</p>
            </TextReveal>
          </div>
          <div className="skills-lenguages__container">
            <BlackReveal>
              <p className="skills-lenguages">Bootstrap</p>
            </BlackReveal>
            <TextReveal customDelay={.6}>
              <p className="skills-progress">Advanced</p>
            </TextReveal>
          </div>
        </div>
      </div>

      <div className="skills-parent">
        <div className="skills-div1">
          <BlackReveal>
            <p className="skills-title">Back-end</p>
          </BlackReveal>
        </div>
        <div className="skills-div2">
          <div className="skills-lenguages__container">
            <BlackReveal>
              <p className="skills-lenguages">Node.js</p>
            </BlackReveal>
            <TextReveal customDelay={.1}>
              <p className="skills-progress">Advanced</p>
            </TextReveal>
          </div>
          <div className="skills-lenguages__container">
            <BlackReveal>
              <p className="skills-lenguages">MongoDB</p>
            </BlackReveal>
            <TextReveal customDelay={.2}>
              <p className="skills-progress">Advanced</p>
            </TextReveal>
          </div>
          <div className="skills-lenguages__container">
            <BlackReveal>
              <p className="skills-lenguages">MySQL</p>
            </BlackReveal>
            <TextReveal customDelay={.3}>
              <p className="skills-progress">Advanced</p>
            </TextReveal>
          </div>
          <div className="skills-lenguages__container">
            <BlackReveal>
              <p className="skills-lenguages">Express.js</p>
            </BlackReveal>
            <TextReveal customDelay={.4}>
              <p className="skills-progress">Advanced</p>
            </TextReveal>
          </div>
          <div className="skills-lenguages__container">
            <BlackReveal>
              <p className="skills-lenguages">Firebase</p>
            </BlackReveal>
            <TextReveal customDelay={.5}>
              <p className="skills-progress">Advanced</p>
            </TextReveal>
          </div>
        </div>
      </div>
      <div className="skills-parent">
        <div className="skills-div1">
          <BlackReveal>
            <p className="skills-title">Aditional</p>
          </BlackReveal>
        </div>
        <div className="skills-div2">
          <div className="skills-lenguages__container">
            <BlackReveal>
              <p className="skills-lenguages">Linux</p>
            </BlackReveal>
            <TextReveal customDelay={.6}>
              <p className="skills-progress">Advanced</p>
            </TextReveal>
          </div>
          <div className="skills-lenguages__container">
            <BlackReveal>
              <p className="skills-lenguages">English</p>
            </BlackReveal>
            <TextReveal customDelay={.7}>
              <p className="skills-progress">Advanced</p>
            </TextReveal>
          </div>
        </div>
      </div>
    </div>
  );
};
