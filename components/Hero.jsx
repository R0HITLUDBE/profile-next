import React, { useEffect, useRef } from "react";
import HeroImage from "../public/hero-image.json"
import { HiDownload } from "react-icons/hi";
import Link from "next/link";

const Hero = () => {
  const ref = useRef(null);
  useEffect(() => {
    import('@lottiefiles/lottie-player');
  });
  return (
    <div className="px-4">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div className=" grid md:grid-cols-2">
          {/* <img
            className="w-[250px] md:w-[350px] mx-auto my-4"
            src={HeroImage}
            alt=""
          /> */}
          <div className="flex flex-col justify-center items-center">
          <lottie-player
            autoplay
            loop
            ref={ref}
            mode="normal"
            src="https://assets9.lottiefiles.com/packages/lf20_pghdouhq.json"
            style={{ width: "300px", height: "300px" }}
          >
          </lottie-player>
          </div>
          <div className="flex flex-col justify-end">
            <h1 className="text-[#00df9a] md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
              Hello!
            </h1>
            <p className="md:text-4xl text-2xl font-bold ">
              I&apos;m Rohit, a Web and Android developer.
            </p>
            <a href="RohitLudbe_Resume1.pdf" download>
              <button className="bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto py-3 flex justify-center align-center ">
                <HiDownload size={25} color="white" />
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
