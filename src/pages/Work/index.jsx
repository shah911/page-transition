import Navbar from "@/components/Navbar";
import Transition from "@/components/Transition";
import React from "react";

function Work() {
  return (
    <Transition>
      <div className="fixed top-0 w-full">
        <Navbar />
      </div>
      <main className="h-screen w-full flex items-center justify-center">
        <span className="font-[500] uppercase text-[8vw] md:text-[5vw] leading-[100%] tracking-[0.5em]">
          work
        </span>
      </main>
    </Transition>
  );
}

export default Work;
