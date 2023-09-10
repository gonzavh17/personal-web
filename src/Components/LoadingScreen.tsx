import React, { useEffect, useState } from "react";
import "../assets/Css/loadingScreen.css";
import { motion } from "framer-motion";
import { Reveal } from "../AnimationComponents/Reveal";
import WhiteCursor from "./WhiteCursor";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <WhiteCursor />
      <div className="loadingScreen">
        <div className="loadingScreen-title__container">
          <Reveal>
            <p className="loadingScreen-title">Welcome to My portfolio</p>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
