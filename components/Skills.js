import React from "react";
import Progress from "react-progressbar";
import Frontend from "../public/icons8-title-64.png";
import Backend from "../public/icons8-backend-96.png";

const Skills = () => {
  return (
    <div className="w-full py-16 px-4" id="skills">
      <div className="text-center mb-10">
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py-6">
          Skills
        </h1>
      </div>
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-2 items-center">
          <div className="flex justify-end mr-10">
            <img src={Frontend} alt="" className="w-[100px]  my-4 " />
          </div>
          <div className="flex flex-col">
            <h1 className="md:text-5xl text-3xl font-bold py-2">Front-end</h1>
            <p className="text-lg md:text-2xl">
              Html, Css, Javascript, ReactJs, React Native, Nextjs
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center">
          <div className="flex justify-end mr-10">
            <img src={Backend} alt="" className="w-[100px]  my-4" />
          </div>
          <div className="flex flex-col">
            <h1 className="md:text-5xl text-3xl font-bold py-2">Back-end</h1>
            <p className="text-lg md:text-2xl">
              Express, NodeJS, Database: MongoDb, Firebase
            </p>
          </div>
        </div>
      </div>

      <hr className="border h-0 mx-20 mt-20" />
    </div>
  );
};

export default Skills;
