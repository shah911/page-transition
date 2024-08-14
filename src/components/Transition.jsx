import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const main = {
  initial: {
    clipPath: "inset(100% 0 0 0)",
  },
  animate: {
    clipPath: "inset(100% 0 0 0)",
    transition: {
      type: "tween",
      duration: 0.75,
      ease: [0.45, 0, 0.55, 1],
    },
  },
  exit: {
    clipPath: "inset(0)",
    transition: {
      type: "tween",
      duration: 0.75,
      ease: [0.45, 0, 0.55, 1],
    },
  },
};

const main2 = {
  initial: {
    clipPath: "inset(0)",
  },
  animate: {
    clipPath: "inset(0 0 100% 0)",
    transition: {
      type: "tween",
      duration: 0.75,
      delay: 0.75,
      ease: [0.45, 0, 0.55, 1],
    },
  },
  exit: {
    clipPath: "inset(0 0 100% 0)",
    transition: {
      type: "tween",
      duration: 0.75,
      delay: 0.75,
      ease: [0.45, 0, 0.55, 1],
    },
  },
};


function Transition({ children }) {
  return (
    <>
      <motion.div
        variants={main}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed top-0 flex items-center justify-center bg-black z-30 h-screen w-[100%] overflow-hidden"
      >
      </motion.div>

      <motion.div
        variants={main2}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed top-0 flex items-center justify-center bg-black z-30 h-screen w-[100%]"
      >
        
      </motion.div>
      {children}
    </>
  );
}

export default Transition;
