import Link from "next/link";
import React from "react";

const links = [
  { title: "work", url: "/work" },
  { title: "about", url: "/about" },
];

function Header() {
  return (
    <div className="w-[95%] mx-auto py-4 2xl:py-[2vw] flex items-center justify-center">
      <div className="flex-[1]">
        <Link className="font-semibold 2xl:text-[1.25vw]" href="/">
          LOGO
        </Link>
      </div>
      <div className="flex-[1] flex items-center justify-end gap-10 2xl:gap-[3vw]">
        {links.map((item, i) => (
          <Link
            className="capitalize text-base font-normal 2xl:text-[1.25vw]"
            href={item.url}
            key={i}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
