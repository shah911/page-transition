import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <section className="flex flex-col h-[500px] 2xl:h-[90vh]">
      <div className="h-[70%] md:h-[50%] flex items-center justify-center bg-[#F0F2F2]">
        <div className="h-full w-[95%] mx-auto">
          <div className="flex flex-col gap-6 md:flex-row items-center justify-between mt-[15%] md:mt-[4%] 2xl:mt-[6%]">
            <span className="text-3xl font-semibold 2xl:text-[2vw]">
              {"But it doesn’t end here!"}
            </span>
            <Link
              className="text-2xl font-medium 2xl:text-[2vw]"
              href="mailto:Hello@mianahmar.com"
            >
              Hello@mianahmar.com
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center md:items-start md:justify-start gap-6 md:gap-3 2xl:gap-[2vw] mt-[10%] md:mt-[2%] 2xl:mt-[3%] w-full md:w-fit">
            <span className="text-2xl font-semibold 2xl:text-[2vw] uppercase">
              Logo
            </span>
            <p className="text-sm font-medium 2xl:text-[1.15vw]">
              Discover, Design, Deliver.
            </p>
          </div>
        </div>
      </div>
      <div className="relative h-[30%] md:h-[50%] w-[95%] mx-auto">
        <div className="h-full md:h-auto flex flex-col gap-4 md:flex-row items-center justify-center md:justify-between md:mt-[27.5%] lg:mt-[17%] 2xl:mt-[18.5%]">
          <span className="text-base font-medium 2xl:text-[1.25vw]">
            © 2024 Mian Ahmar. All Rights Reserved
          </span>
          <div className="flex items-center justify-center gap-2 2xl:gap-[1vw]">
            <Link target="_blank" href="https://www.linkedin.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-6 w-6 2xl:h-[2vw] 2xl:w-[2vw]"
              >
                <g id="linkedin_line" fill="none" fillRule="nonzero">
                  <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
                  <path
                    fill="#09244BFF"
                    d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12Zm0 2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM8 10a1 1 0 0 1 .993.883L9 11v5a1 1 0 0 1-1.993.117L7 16v-5a1 1 0 0 1 1-1Zm3-1a1 1 0 0 1 .984.821 5.82 5.82 0 0 1 .623-.313c.667-.285 1.666-.442 2.568-.159.473.15.948.43 1.3.907.315.425.485.942.519 1.523L17 12v4a1 1 0 0 1-1.993.117L15 16v-4c0-.33-.08-.484-.132-.555a.548.548 0 0 0-.293-.188c-.348-.11-.849-.052-1.182.09-.5.214-.958.55-1.27.861L12 12.34V16a1 1 0 0 1-1.993.117L10 16v-6a1 1 0 0 1 1-1ZM8 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
                  />
                </g>
              </svg>
            </Link>
            <Link target="_blank" href="https://www.instagram.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-6 w-6 2xl:h-[2vw] 2xl:w-[2vw]"
              >
                <g id="ins_line" fill="none" fillRule="evenodd">
                  <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
                  <path
                    fill="#09244BFF"
                    d="M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8Zm0 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3Zm-4 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm4.5-3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
                  />
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
