import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const SingleProject = ({ title, keySkills, link, img, descr, subH }) => {
  return (
    <div className="max-w-[1240px] mx-auto grid grid-rows-auto ">
      <div className="grid md:grid-cols-2 ">
        <div className="md:w-[500px] md:mx-auto my-2 mx-3">
          <h1 className="md:text-5xl text-3xl font-bold py-2">{title}</h1>
          <p className="md:text-lg font-light">{subH}</p>
        </div>
        <div className="flex flex-col justify-center md:mx-10 mx-3 ">
          <p className="text-lg mb-3">
            <span className="font-bold ">Key Skills:</span>
            {keySkills}
          </p>
          <p className="text-lg">
            <span className="font-bold "> Description:</span>
            {descr}
          </p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex align-center md:text-2xl mt-5">
            <span className="mr-2"> View Project </span>{" "}
            <BsArrowRight size={30} color="#00df9a" />
          </a>
        </div>
      </div>

      <Image className="w-[380px] md:w-[900px] h-auto  mx-auto my-10" src={img} alt="" />
    </div>
  );
};

export default SingleProject;
