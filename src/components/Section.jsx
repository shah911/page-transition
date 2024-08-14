import Image from "next/image";
import React from "react";
import { AnimateTextByWord, img, para, tags } from "./Animate";
import { motion } from "framer-motion";
import Link from "next/link";

function Section({ data, index }) {
  return (
    <section className="w-[95%] mx-auto my-14 md:my-40 2xl:my-[12.5vw]">
      <Link href={data.link}>
        <div
          className={`flex flex-col ${
            index % 2 === 0 ? "items-start" : "items-end"
          }`}
        >
          <div className="h-[300px] md:h-[525px] 2xl:h-[90vh] w-full lg:w-[70%] overflow-hidden">
            <motion.div
              variants={img}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="relative h-full w-full"
            >
              <Image
                src={data.img}
                alt=""
                fill
                priority={true}
                className="object-cover transition-all ease-in-out duration-500 hover:scale-110"
              />
            </motion.div>
          </div>

          <div
            className={`py-10 2xl:py-[3vw] flex flex-col lg:w-[70%] ${
              index % 2 === 0 ? "items-start" : "items-end"
            }`}
          >
            <span className="text-sm font-normal uppercase w-full mb-2 2xl:mb-[0.75vw] 2xl:text-[1vw]">
              {data.title}
            </span>
            <h1 className="text-2xl md:text-3xl 2xl:text-[2.5vw] flex flex-wrap gap-x-1 2xl:gap-x-[0.5vw] 2xl:leading-[125%]">
              <AnimateTextByWord pharse={data.mainTitle} />
            </h1>
            <div className="flex flex-wrap items-center gap-2 2xl:gap-[0.5vw] mt-6 2xl:mt-[2vw] w-full">
              {data.tags.map((item, i) => (
                <motion.span
                  key={i}
                  variants={tags}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="border border-black rounded-full text-sm 2xl:text-[1vw] px-3 py-1 2xl:px-[1vw] 2xl:py-[0.75vw] uppercase"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default Section;
