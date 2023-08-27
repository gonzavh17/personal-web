import React, { useEffect, useRef } from "react";
import "../assets/Css/aboutMe.css";
import { motion, useAnimate, useAnimation, useInView } from "framer-motion";
import { BlackReveal } from "../AnimationComponents/BlackReveal";
import carImages from "../carImages";
import AnimatedInView from "../AnimationComponents/ImgReveal";

export const AboutMe = () => {
  return (
    <div className="about-me">
      {/* <div className="about-me-title_container">
        <BlackReveal>
          <p className="about-me-title">About Me</p>
        </BlackReveal>
      </div>
      <div className="about-me-parent">
        <div className="about-me-div1">
          <BlackReveal>
            <p className="about-me-description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, repellendus numquam fuga ducimus quasi id. Possimus
              ducimus dolorem facilis expedita quod saepe sunt atque iusto
              dolorum, error, doloremque quo eos? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Asperiores exercitationem quasi
              repudiandae consequatur, itaque deserunt quae vero. Placeat nulla
              omnis cum? Possimus reiciendis voluptate laboriosam debitis illum
              voluptatum et aliquam!
            </p>
          </BlackReveal>
        </div>
        <motion.div className="about-me-div2"
        animate={{
          x: 0,
          opacity: 1,
        }}
        initial={{
          x: -50,
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
          delay:3.5,
          damping: 100,
        }}
        >
          <img className="about-me-img" src={carImages.f1} alt="" />
        </motion.div>
      </div> */}

      <div className="about-me">
        <div className="about-me-title__container">
          <BlackReveal>
            <p className="about-me-title">About Me</p>
          </BlackReveal>
        </div>
        <div className="about-me-description_container">
          <BlackReveal>
            <p className="about-me-description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, repellendus numquam fuga ducimus quasi id. Possimus
              ducimus dolorem facilis expedita quod saepe sunt atque iusto
              dolorum, error, doloremque quo eos? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Asperiores exercitationem quasi
              repudiandae consequatur, itaque deserunt quae vero. Placeat nulla
              omnis cum? Possimus reiciendis voluptate laboriosam debitis illum
              voluptatum et aliquam!
            </p>
          </BlackReveal>
        </div>

        <div className="about-me-img_container">
        <AnimatedInView>
          <img className="about-me-img" src={carImages.f1} alt="" />
          </AnimatedInView>
        </div>

      </div>
    </div>
  );
};
