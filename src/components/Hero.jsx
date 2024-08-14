import React from "react";
import { AnimatedText, AnimateTextByWord, para } from "./Animate";
import { motion } from "framer-motion";

function Hero() {
  const phrase =
    "Hi, I'm Ahmar, a skilled designer focused on excellence and innovation.";

  return (
    <div className="relative w-[95%] mx-auto h-[820px] md:h-[900px] lg:h-[768px] 2xl:h-[120vh]">
      <h1 className="flex flex-wrap gap-x-3 2xl:gap-x-[0.5vw] w-full lg:w-[80%] text-5xl md:text-[8vw] lg:text-[5vw] font-medium tracking-tight leading-[130%] absolute top-[12.5%] md:top-[20%]">
        <AnimateTextByWord pharse={phrase} />
      </h1>
      {/* <h1 className="flex flex-wrap w-full lg:w-[80%] text-6xl md:text-[8vw] lg:text-[5vw] tracking-tight leading-[130%] absolute top-[12.5%] md:top-[20%]">
        <AnimatedText text={phrase} once={true} />
      </h1> */}
      <div className="absolute overflow-hidden bottom-[15%] lg:bottom-[15%] lg:right-0 text-base md:text-[20px] 2xl:text-[1.55vw] 2xl:leading-[140%] w-full lg:w-[60%]">
        <motion.p
          variants={para}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          Mian Ahmar designs intuitive interfaces and pathways that guide users
          seamlessly towards their goals. Reflecting on how technology has
          evolved to benefit humanity, he believes that designers play a crucial
          role in fostering this connection.
        </motion.p>
      </div>
    </div>
  );
}

export default Hero;
