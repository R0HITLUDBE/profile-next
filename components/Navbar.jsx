import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="text-3xl w-full text-[#00df9a] cursor-pointer">
        ROHIT LUDBE.
      </h1>
      <ul className="hidden md:flex">     
          <li className="p-4 cursor-pointer">Home</li>
          <li className="p-4 cursor-pointer">Projects</li>
          <li className="p-4 cursor-pointer">Skills</li>  
          <li className="p-4 cursor-pointer">Contact</li>
      </ul>
      <div
        onClick={handleNav}
        className="block md:hidden cursor-pointer p-3 z-10 "
      >
        {nav === false ? null : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav === false
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 md:hidden"
            : "fixed left-[-100%]"
        }
      >
        <div className="flex items-center">
          <h1 className="text-3xl w-full text-[#00df9a] m-4 cursor-pointer">
            ROHIT LUDBE.
          </h1>
          <div
            onClick={handleNav}
            className="block md:hidden cursor-pointer p-5 z-10 "
          >
            {nav === false ? <AiOutlineClose size={20} /> : null}
          </div>
        </div>
        <ul className="p-4 uppercase ">
            <li className="p-4 border-b border-gray-600 cursor-pointer">
              Home
            </li>
            <li className="p-4 border-b border-gray-600 cursor-pointer">
              Projects
            </li>
            <li className="p-4 border-b border-gray-600 cursor-pointer">
              Skills
            </li>
            <li className="p-4 border-b border-gray-600 cursor-pointer">
              Contact
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
