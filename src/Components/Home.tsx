import React, { useState, useEffect } from "react";
import "../assets/Css/home.css";
import { motion, AnimatePresence } from "framer-motion";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const Home = () => {
  return (
    <div className="home">

      <div className="motion-container">
       <motion.div
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
            delay:1.25,
            damping: 100,
          }}
        >
          <span className="icon">
            <a className="icon-link" href="" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            
          </span>
        </motion.div>
        <motion.div
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
            delay:1.5,
            damping: 100,
          }}
        >
          <span className="icon">
            <a className="icon-link" href="https://github.com/gonzavh17" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
          </span>
        </motion.div>
        <motion.div
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
          delay:1.75,
          damping: 100,
        }}
        >
          <span className="icon">
            <a href=""></a>
            <a className="icon-link" href="#contact"><FontAwesomeIcon icon={faEnvelope} /></a>
          </span>
        </motion.div>
        <motion.div
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
          delay:2,
          damping: 100,
        }}>
          <span className="icon">
          <a className="icon-link" href="https://drive.google.com/file/d/1PbuFlY6dln2zGiJsidXfZtHUtDDmYF30/view?usp=sharing"><FontAwesomeIcon icon={faDownload} /></a>
          </span>
        </motion.div>
      </div>


      <div className="div2">
        <motion.p className="home-title"
        animate={{
          y: 0,
          opacity: 1,
        }}
        initial={{
          y: 50,
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
          delay:1,
          damping: 100,
        }}>Fullstack Developer</motion.p>
      </div>


      {/* <div className="div2">
        <p className="home-title">Fullstack Developer</p>
      </div> */}

      <div >

     

      </div>
    </div>
  );
};
