import React from "react";
import aboutpic from "../assets/aboutpic.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex sm:flex-row flex-col justify-center items-center  h-screen w-screen bg-gradient-to-r  from-[#f3ae8b]/25 to-purple-50 relative select-none">

      
        <h1 className="absolute top-6 font-bold text-4xl sm:text-8xl font-serif text-rose-400  ">
        <span className=" sm:text-9xl text-gray-600">ABOUT</span> ME
      </h1>


        <div className=" bg-[#f3ae8b]/25 flex flex-col justify-center items-center m-4 sm:w-full sm:h-4/5 shadow-md shadow-black rounded-md font-serif">
          <h1 className="text-2xl sm:text-4xl">Name</h1>
          <p className=" text-center p-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reiciendis, eum consequuntur. Incidunt sequi nemo reprehenderit
            facere sit iste, eius officia repellendus nam nihil assumenda eaque
            libero reiciendis cumque! Porro accusantium, magni quidem animi unde
            fugiat ipsa aperiam maiores illum dolorum.
          </p>
        </div>  

        
        <div className="flex flex-col justify-center rounded-lg overflow-hidden  items-center sm:w-full mx-4 shadow-md shadow-black">
          <img
            src={aboutpic}
            alt="aboutpic"
            className="sm:object-cover border-[30px] border-[#f3ae8b]/25 "
          />
        </div>


    </div>
  );
};

export default About;
