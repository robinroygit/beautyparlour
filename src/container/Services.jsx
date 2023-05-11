import React from "react";
import { motion } from "framer-motion";
import servicesitems from "../constants/servicesitems";
import AppWrap from "../wrapper/AppWrap";
import MotionWrap from "../wrapper/MotionWrap";
import SocialMedia from "../components/Socialmedia";

const scaleVariants = {
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Services = () => {
  return (
    <div className=" flex min-h-screen flex-col  justify-center items-center w-screen bg-gradient-to-r from-purple-50 to-[#f3ae8b]/50 overflow-hidden ">
      <div className=" m-10 flex z-10 text-gray-700 font-Montserrat flex-col gap-4 justify-center items-center w-4/5 select-none ">
        <h1 className=" text-4xl">services</h1>
        <p className=" text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          quidem necessitatibus quasi ipsum repellendus? Aspernatur mollitia eos
          blanditiis eius itaque.
        </p>
      </div>
    {/* <SocialMedia/> */}


      <motion.div
        // variants={scaleVariants}
        // whileInView={scaleVariants.whileInView}
        className="app__header-circle containe flex justify-between items-center p-8 flex-wrap flex-1 gap-2 relativ w-4/5 "
      >
        {servicesitems.map((item, index) => (

          <div className="card relative group " key={index}>

            <div className=" face1 relative h-52 w-72 items-center content-center z-10 transition ease-in-out delay-150 duration-500 group-hover:translate-y-0 translate-y-24 shadow-lg shadow-black ">
              <img src={item.item} alt={item.item} className=" h-full w-full object-cover" />

              <div className=" flex justify-center items-center bg-slate-200 shadow-sm shadow-black">
                    <img
                    src={item.icon}
                    alt={item.icon}
                    className="h-8 w-8 mx-2"
                  />

              
                <h3 className="text-4xl text-center font-Tangerine text-black">
                  {item.title}
                </h3>
              </div>
            </div>


            <div className=" face2 h-52 w-72 relative flex z-0 justify-center items-center box-border p-4  transition ease-in-out delay-150 duration-500 -translate-y-24 group-hover:translate-y-0 ">
              <div className="content text-xs pt-8 text-gray-800">
                <p className=" select-none">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Optio corrupti iusto delectus dicta recusandae assumenda vel
                  cumque illum, impedit earum, veritati
                </p>
                <a
                  href="#"
                  type="button"
                  className=" decoration-0 box-border text-gray-800 font-bold outline-dashed outline-1 inline-block p-2 mt-2  uppercase "
                >
                  read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Services),
   "services",
   );
