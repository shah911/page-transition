import React from "react";
import { motion } from "framer-motion";
import img1 from "../../public/building.jpg";
import img2 from "../../public/city-view.jpg";
import img3 from "../../public/elephant.jpg";
import img4 from "../../public/faceless-girl.jpg";
import img5 from "../../public/man-on-rock.jpg";
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

const image = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: (i) => ({
    opacity: 0,
    scale: 0,
    transition: {
      delay: 0.5 + 0.05 * i,
      duration: 0.5,
    },
  }),
  exit: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5 + 0.05 * i,
      duration: 0.5,
    },
  }),
};

const image2 = {
  initial: {
    opacity: 1,
    scale: 1,
  },
  animate: (i) => ({
    opacity: 0,
    scale: 0,
    transition: {
      delay: 0.2 + 0.05 * i,
      duration: 0.5,
    },
  }),
  exit: (i) => ({
    opacity: 0,
    scale: 0,
    transition: {
      delay: 0.2 + 0.05 * i,
      duration: 0.5,
    },
  }),
};

const images = [img1, img2, img3, img4, img5];

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
        {images.map((img, i) => (
          <motion.div
            variants={image}
            className="relative w-[20vw] md:w-[17.5vw] h-[150px] md:h-[250px] lg:h-[300px] 2xl:h-[50vh]"
            key={i}
            custom={i}
          >
            <Image
              src={img}
              alt="img"
              fill
              placeholder="blur"
              className="object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={main2}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed top-0 flex items-center justify-center bg-black z-30 h-screen w-[100%]"
      >
        {images.map((img, i) => (
          <motion.div
            variants={image2}
            className="relative w-[20vw] md:w-[17.5vw] h-[150px] md:h-[250px] lg:h-[300px] 2xl:h-[50vh]"
            key={i}
            custom={i}
          >
            <Image
              src={img}
              alt="img"
              fill
              placeholder="blur"
              className="object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
      {children}
    </>
  );
}

export default Transition;
