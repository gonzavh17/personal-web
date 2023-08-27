import React, { useEffect, useState } from "react";
import '../assets/Css/loadingScreen.css'
import { motion } from "framer-motion";
import { Reveal } from "../AnimationComponents/Reveal";
import WhiteCursor from "./WhiteCursor";

const LoadingScreen = () => {
  const [loadingNumber, setLoadingNumber] = useState(0);

  useEffect(() => {
    const duration = 4; // Duración de la animación en segundos
    const steps = 5; // Número de pasos para llegar a 100
    const interval = duration * 1000 / steps; // Intervalo entre cada paso

    let step = 0;
    let prevNumber = 0;
    const randomInterval = setInterval(() => {
      if (step < steps - 1) {
        let nextNumber = prevNumber;
        while (nextNumber <= prevNumber) {
          nextNumber = Math.floor(Math.random() * 101);
        }
        setLoadingNumber(nextNumber);
        prevNumber = nextNumber;
        step++;
      } else {
        setLoadingNumber(100);
        clearInterval(randomInterval);
      }
    }, interval);

    return () => clearInterval(randomInterval);
  }, []);

  // Función para formatear el número a dos dígitos
  const formatNumber = (number: number) => {
    return number < 10 ? `0${number}` : `${number}`;
  };

  return (
    <div className="loading-screen">

      <WhiteCursor/>
      <div className="loadingScreen">
      <div className="loadingScreen-title__container">
        <Reveal>
        <p className="loadingScreen-title">Welcome to My portfolio</p>
        </Reveal>
        
      </div>
      
      {/* <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="loadingScreen-number"
      >
        {formatNumber(loadingNumber)} <p className="loadingScreen-perc">%</p>
      </motion.h1> */}
      
    </div>
     
    </div>
  );
};

export default LoadingScreen;