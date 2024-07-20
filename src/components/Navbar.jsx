import Link from "next/link";
import React from "react";

const links = [
  {
    title: "about",
    url: "/about",
  },
  {
    title: "contact",
    url: "/contact",
  },
];

function Navbar() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-[95%] mx-auto py-6 2xl:py-[2vw] gap-4 md:gap-0">
      <div className="flex-[1]">
        <Link href="/" className="capitalize font-bold text-2xl lg:text-[2vw]">
          shah.
        </Link>
      </div>
      <div className="flex-[1] flex items-center justify-end gap-8 md:gap-16 2xl:gap-[5vw]">
        {links.map((link, i) => (
          <Link
            href={link.url}
            key={i}
            className="uppercase font-[500] 2xl:text-[1.25vw] underline-effect"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
