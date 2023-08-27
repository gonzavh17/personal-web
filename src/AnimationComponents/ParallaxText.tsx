import React from "react";
import "../assets/Css/parallax.css";
import { motion } from "framer-motion";

export const ParallaxText = () => {
  return (
    <div>
      {/* <div>
        <motion.p
        animate={{
          x: 10,
          opacity: 1
        }}
        initial={{
          x: -100,
          opacity: 0
        }}
        transition={{
          duration:1 ,
          damping: 10
        }}
        >
          Hello World
        </motion.p>
      </div> */}

      <motion.div
        className="box-animation"
        whileHover={{
          scale: [1, 1.4, 1.4, 1, 1],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          rotate: [0, 0, 270, 270, 0],
        }}
        /*  animate={{
            scale: [1, 1.4, 1.4, 1,1 ],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            rotate: [0,0, 270, 270, 0]
          }} */
        transition={{
          duration: 2,
          repeat: 2,
        }}
      >
        <p></p>
      </motion.div>
      <br />
      <br />
      <br />
      <br />

      <div className="container">
        <motion.p
          animate={{
            y: 0,
          }}
          initial={{
            y: 30,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          9
        </motion.p>

        <motion.p
          animate={{
            y: 0,
            opacity:1
          }}
          initial={{
            y: 30,
            opacity:0
          }}
          transition={{
            duration: 0.5,
            delay: 0.12,
          }}
        >
          9
        </motion.p>
      </div>
    </div>
  );
};
