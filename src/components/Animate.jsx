import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export const img = {
  initial: {
    clipPath: "inset(0 0 100% 0)",
  },
  whileInView: {
    clipPath: "inset(0 0 0 0)",
    transition: {
      delay: 0.1,
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const para = {
  initial: { y: "100%" },
  whileInView: {
    y: 0,
    transition: {
      type: "tween",
      duration: 0.75,
      delay: 0.25,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

export const tags = {
  initial: { opacity: 0, y: "100%" },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.75,
      delay: 0.25,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

export const ProjectCards = {
  initial: { opacity: 0, y: "20%" },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.75,
      ease: [0.5, 1, 0.89, 1],
    },
  },
};

const defaultAnimations = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: {
      type: "tween",
      duration: 0.75,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const text = {
  initial: { y: "100%" },
  whileInView: (i) => ({
    y: 0,
    transition: {
      type: "tween",
      duration: 0.75,
      delay: 0.3 + i * 0.05,
      ease: [0, 0.55, 0.45, 1],
    },
  }),
};
export const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
  once,
  repeatDelay,
  animation = defaultAnimations,
}) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  useEffect(() => {
    let timeout;
    const show = () => {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView, controls, repeatDelay]);

  return (
    <Wrapper className={className}>
      <span className="sr-only">{textArray.join(" ")}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.05 } },
          hidden: {},
        }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span className="block" key={`${line}-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => (
              <span
                className="inline-flex overflow-hidden"
                key={`${word}-${wordIndex}`}
              >
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className="inline-flex"
                    variants={animation}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-flex">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export const AnimateTextByWord = ({ pharse }) => {
  return (
    <>
      {pharse.split(" ").map((item, i) => (
        <span className="overflow-hidden" key={i}>
          <motion.span
            variants={text}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="inline-flex whitespace-nowrap leading-[130%]"
            custom={i}
          >
            {item}
          </motion.span>
        </span>
      ))}
    </>
  );
};
