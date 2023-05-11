import React from "react";
import bpmodel from "../assets/bpmodel.png";
import circle from "../assets/circle3.svg";
import { motion } from "framer-motion";
import AppWrap from "../wrapper/Appwrap";
import MotionWrap from "../wrapper/MotionWrap";



const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header pt-20 px-10 flex flex-col lg:flex-row w-screen lg:h-screen min-h-screen justify-end items-center bg-gradient-to-r from-purple-50 to-[#f3ae8b] overflow-hidden ">
      
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        className="app__header-info w-full flex flex-col gap-4 justify-center items-center "
      >

          <span className="px-60">💕</span>
          <h1 className="sm:text-4xl md:text-9xl text-4xl font-Tangerine font-bold px-40 text-slate-700">
            Welcome
          </h1>
          <p className=" text-slate-600 text-4xl font-Montserrat font-bold px-40">
            Beautiful
          </p>
          <p className=" text-slate-600 text-4xl font-Montserrat font-bold px-40">
            glamorous
          </p>
          <p className=" text-slate-600 text-4xl font-Montserrat font-bold px-40">
            confident
          </p>
          <div className=" mx-20 ">
            <button className=" bg-rose-400 text-white font-bold px-8 w-full py-2 hover:ring-2 hover:ring-rose-500 duration-100">
              <a href="#contact">
              Contact Us
              </a>
            </button>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img flex justify-center items-end w-full h-full relative"
      >
        <img src={bpmodel} className="z-[1] object-cover " width={580} alt="profile_bg" />

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={circle}
          alt="profile_circle"
          className="overlay_circle absolute  object-contain left-0 right-0 bottom-0 h-full w-full pt-16  z-0"
        ></motion.img>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circle hidden"
      >
        {/* {[images.figma, images.react, images.redux,images.html5,images.javascript,images.css].map((circle,index)=>(
          <div key={`circle-${index}`} className="circle-cmp app__flex">
            <img src={circle} alt="circle" />

          </div>
        ))} */}
      </motion.div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Header,),
  "home"
   );

