import Image from "next/image";
import React from "react";

const SkillIndividual = ({ image, title }) => {
  return (
    <div className="p-3 w-[160px] sm:w-auto sm:h-auto  h-[80px] grid grid-flow-col items-center border shadow-md rounded-lg hover:-tracking-tight cursor-pointer">
      <Image
        className="h-14 aspect-square w-auto text-center object-contain"
        src={image}
        alt=""
      />
      <p>{title}</p>
    </div>
  );
};

export default SkillIndividual;
