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
            delay:3.25,
            damping: 100,
          }}
        >
          <span className="icon">
            <FontAwesomeIcon icon={faLinkedin} />
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
            delay:3.5,
            damping: 100,
          }}
        >
          <span className="icon">
            <FontAwesomeIcon icon={faGithub} />
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
          delay:3.75,
          damping: 100,
        }}
        >
          <span className="icon">
            <FontAwesomeIcon icon={faEnvelope} />
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
          delay:4,
          damping: 100,
        }}>
          <span className="icon">
            <FontAwesomeIcon icon={faDownload} />
          </span>
        </motion.div>
      </div>

      <div className="div2">
        <p className="home-title">Fullstack Developer</p>
      </div>

      <div >

     

      </div>
    </div>
  );
};
