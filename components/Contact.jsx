import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full overflow-hidden bg-inherit pb-16 md:px-10" id="contact">
      <hr className="border h-0  mb-20" />
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold py-2 px-3">Contact</h1>
        <div className="mt-5">
          <Link className="p-5 font-bold" href="https://github.com/R0HITLUDBE">
              Github
          </Link>
          <Link className="p-5 font-bold" href="https://www.linkedin.com/in/rohit-ludbe-1075561a2/">
              LinkedIn
          </Link>
          <Link className="p-5 font-bold" href="mailto:rohit.ludbe01@gmail.com"> 
              Email
          </Link>
          
          <a className="p-5 font-bold" href="RohitLudbe_Resume1.pdf" download >
              Resume
          </a>
  
        </div>
      </div>
    </div>
  );
};

export default Contact;
