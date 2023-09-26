import React from "react";
import "../assets/Css/NavBar.css";
import { motion } from "framer-motion";

function NavBar() {
  return (
    <div className="nav-bar-container">
      <div className="motion-div__container">
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
        delay:2.25,
        damping: 100,
      }}>
        <p className="nav-bar_name">Gonzalo</p>
        <div className="surname-container">
        <p className="nav-bar_surname">Asis</p>
        </div>
      </motion.div>
    </div>
  );
}

export default NavBar;
