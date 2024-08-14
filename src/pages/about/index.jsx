import { AnimateTextByWord } from "@/Components/Animate";
import { aboutIntro, education, skills } from "@/data";
import React from "react";

function About() {
  const phrase = "Greetings! __ I am Ahmar, Motion and Product designer.";
  const phrase2 =
    "I believe thoughtful design can transform ordinary experiences into extraordinary ones.";

  return (
    <div className="w-[95%] mx-auto my-40 2xl:my-[10vw]">
      <h1 className="mb-52 2xl:mb-[17.5vw] flex flex-wrap gap-x-3 2xl:gap-x-[0.5vw] w-full lg:w-[80%] text-5xl md:text-[8vw] lg:text-[5vw] font-medium tracking-tight leading-[130%]">
        <AnimateTextByWord pharse={phrase} />
      </h1>
      <div className="w-full lg:w-[70%]">
        <p className="flex flex-wrap gap-x-2 2xl:gap-x-[0.35vw] font-semibold text-2xl md:text-3xl 2xl:text-[2.25vw]">
          <AnimateTextByWord pharse={phrase2} />
        </p>
        <div className="flex flex-col my-20 2xl:my-[5vw] gap-6 2xl:gap-[1.5vw]">
          {aboutIntro.map((item, i) => (
            <p
              className="font-medium text-lg 2xl:text-[1.35vw] leading-[130%]"
              key={i}
            >
              {item}
            </p>
          ))}
        </div>
        <h1 className="font-bold text-3xl w-fit 2xl:text-[2vw]">SKILLS</h1>
        <div className="flex flex-col my-20 2xl:my-[5vw] gap-6 2xl:gap-[2.5vw]">
          {skills.map((item, i) => (
            <div className="flex flex-col gap-2 2xl:gap-[1.5vw]" key={i}>
              <h2 className="font-bold text-xl 2xl:text-[1.5vw]">
                {item.title}
              </h2>
              <p className="font-medium text-lg 2xl:text-[1.35vw] leading-[130%]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <h1 className="font-bold text-3xl w-fit 2xl:text-[2vw]">
          ACADEMIC PURSUITS
        </h1>
        <div className="flex flex-col my-20 2xl:my-[5vw] gap-6 2xl:gap-[2.5vw]">
          {education.map((item, i) => (
            <div className="flex flex-col gap-2 2xl:gap-[1.5vw]" key={i}>
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-xl 2xl:text-[1.5vw]">
                  {item.title}
                </h2>
                <span className="text-base font-medium 2xl:text-[1.25vw]">
                  {item.date}
                </span>
              </div>
              <p className="font-medium text-lg 2xl:text-[1.35vw] leading-[130%]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
