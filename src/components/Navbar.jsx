import React, { useState } from "react";
// import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className="app__navbar w-full text-gray-600 flex justify-between items-center fixed backdrop-blur-sm py-4 px-8 bg-pink-50/25 z-50"
      id="header"
    >
      <div className="app__navbar-logo flex justify-start items-center">
        {/* <img src="" alt="logo" /> */}
        <h1 className="text-4xl font-light font-serif mx-4">BEAUTY & CO</h1>
      </div>
      
      <ul className="app__navbar-links flex-1 list-none justify-center items-center hidden md:flex ">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li
            className="app__flex capitalize flex-col cursor-pointer text-xl mx-6 "
            key={`link-${item}`}
          >
            <a className=" font-light font-Montserrat group flex flex-col items-center justify-center " href={`#${item}`}>
            <div className=" group-hover:bg-red-300 w-2 h-2 mb-1 bg-transparent rounded-full " />
                {item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu w-8 h-8 flex relative rounded-full bg-gray-100 text-gray-700 items-center justify-center z-50  ">
        <HiMenuAlt4 onClick={() => setToggle(true)}  />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="bg-rose-100  w-4/5 inset-y-0 right-0 h-screen fixed flex justify-end items-end flex-col"
          >
            <HiX onClick={() => setToggle(false)} className=" w-8 h-8 m-6 text-gray-600" />

            <ul className="w-full h-full flex justify-start items-start flex-col m-0 p-0 list-none z-50 ">
              {["home", "about", "contact", "work", "skills"].map(
                (item, index) => (
                  <li className=" p-4" key={index}>
                    <a className=" text-4xl capitalize font-bold font-Tangerine decoration-0 text-gray-600 hover:text-cyan-400 " href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
