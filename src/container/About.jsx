import React from "react";
import aboutpic from "../assets/aboutpic.jpg";
import AppWrap from "../wrapper/Appwrap";
import MotionWrap from "../wrapper/MotionWrap";

const About = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center min-h-screen h-screen w-screen bg-gradient-to-r from-[#f3ae8b]/25 to-purple-50 select-none ">

      
        <h1 className="absolute top-6 font-bold text-3xl lg:text-8xl font-serif text-rose-400  ">
        <span className=" lg:text-9xl text-3xl text-gray-600">ABOUT</span> US
      </h1>


        <div className="  bg-[#f3ae8b]/10 flex flex-col justify-center items-center sm:w-full sm:h-4/5 shadow-md shadow-black rounded-md font-serif m-8 ">
          {/* <h1 className="text-2xl sm:text-4xl">Beauty & Co</h1> */}
          <p className=" text-center p-8 sm:text-xl text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reiciendis, eum consequuntur. Incidunt sequi nemo reprehenderit
            facere sit iste, eius officia repellendus nam nihil assumenda eaque
            libero reiciendis cumque! Porro accusantium, magni quidem animi unde
            fugiaadipisicing elit. Quo laudantium placeat dolorem mollitia autem? Nesciunt perspiciatis dolor deleniti tenetur minima porro quae et quasi, excepturi illum accusantium ea deserunt ipsum dolore cupiditate laudantium, vel dolores sint minus expedita praesentium fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>  

        
        <div className="flex flex-col justify-center rounded-lg  items-center sm:w-full mx-4 shadow-md shadow-black h-4/5 m-4 bg-[#f3ae8b]/10 overflow-hidden">
          <img
            src={aboutpic}
            alt="aboutpic"
            className="sm:object-cover border-[30px] border-transparent "
          />
        </div>


    </div>
  );
};

export default AppWrap(
  MotionWrap(About),
  "about"
   );

