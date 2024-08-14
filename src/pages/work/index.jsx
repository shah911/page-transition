import { projects } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { AnimateTextByWord, ProjectCards } from "@/Components/Animate";

const phrase = "Projects I have Worked on __";
function Work() {
  return (
    <div className="w-[95%] mx-auto my-40 2xl:my-[10vw]">
      <h1 className="mb-48 2xl:mb-[15vw] flex flex-wrap gap-x-3 2xl:gap-x-[0.5vw] w-full lg:w-[80%] text-5xl md:text-[8vw] lg:text-[5vw] font-medium tracking-tight leading-[130%]">
        <AnimateTextByWord pharse={phrase} />
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-1 2xl:gap-[0.3vw]">
        {projects.map((item, i) => (
          <Link
            href={item.link}
            className="w-full md:w-[49.735%] h-[300px] lg:h-[450px] 2xl:h-[75vh] overflow-hidden"
            key={i}
          >
            <motion.div
              variants={ProjectCards}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="relative h-full w-full"
            >
              <Image
                src={item.url}
                alt={item.title}
                fill
                className="object-cover transition-all ease-in-out duration-500 hover:scale-110"
              />
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Work;
