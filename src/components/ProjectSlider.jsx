import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { para } from "./Animate";
import { data } from "@/data";

const variants = {
  initial: {
    clipPath: "inset(0 0 0 100%)",
  },
  animate: {
    clipPath: "inset(0 0 0 0)",
    transition: {
      duration: 1,
      ease: [0.645, 0.075, 0.275, 0.995],
    },
  },
  exit: {
    clipPath: "inset(0 100% 0 0)",
    transition: {
      delay: 1,
      duration: 2,
      ease: [0.645, 0.075, 0.275, 0.995],
    },
  },
};

function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [play, setPlay] = useState(true);

  useEffect(() => {
    if (!play) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [play]);

  return (
    <>
      <div className="relative h-[300px] md:h-[600px] 2xl:h-screen overflow-hidden bg-black">
        <AnimatePresence initial={false}>
          {data.map(
            (item, i) =>
              i === currentIndex && (
                <Link href={item.link} key={i}>
                  <motion.div
                    className="absolute top-0 left-0 h-full w-full bg-black"
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    onMouseOver={() => setPlay(false)}
                    onMouseLeave={() => setPlay(true)}
                  >
                    <Image
                      src={item.url}
                      alt={item.title}
                      placeholder="blur"
                      priority={true}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </Link>
              )
          )}
        </AnimatePresence>
      </div>
      <div className="overflow-hidden w-[95%] mx-auto my-20 2xl:my-[5vw]">
        <motion.div
          variants={para}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <p className="text-base md:text-[20px] leading-[140%] 2xl:text-[1.55vw] lg:w-[60%]">
            With a year and a half of professional experience in product design,
            I specialize in creating intuitive and engaging user experiences
            that improve daily life. I am convinced that exceptional user
            experiences stem from a deep understanding of user needs and
            desires.
          </p>
          <p className="text-base md:text-[20px] leading-[140%] 2xl:text-[1.55vw] lg:w-[60%] mt-10 2xl:mt-[2.5vw]">
            I am keen to contribute my skills and passion to a forward-thinking
            team.
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default ProjectSlider;
