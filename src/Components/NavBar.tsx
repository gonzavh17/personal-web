import React from "react";
import "../assets/Css/NavBar.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <div className="nav-bar-container">
      <div className="motion-div__container">
        {/* <motion.div
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
            delay:.75,
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
            delay:1.5,
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
          delay:2.25,
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
          delay:3,
          damping: 100,
        }}>
          <span className="icon">
            <FontAwesomeIcon icon={faDownload} />
          </span>
        </motion.div> */}
      </div>
      <motion.div className="brand-container"
      animate={{
        y: 0,
        opacity: 1,
      }}
      initial={{
        y: -50,
        opacity: 0,
      }}
      transition={{
        duration: 0.5,
        delay:4,
        damping: 100,
      }}>
        <p className="nav-bar_name">Gonzalo Asis</p>
      </motion.div>
    </div>
  );
}

export default NavBar;
