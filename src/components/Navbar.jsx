import React, { useState } from "react";
// import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className="app__navbar w-full text-gray-600 flex justify-between items-center fixed backdrop-blur-sm py-4 px-8  bg-pink-50/25  z-50"
      id="header"
    >
      <div className="app__navbar-logo flex justify-start items-center">
        {/* <img src="" alt="logo" /> */}
        <h1 className="text-4xl  font-light font-serif mx-4">BEAUTY & CO</h1>
      </div>
      
      <ul className="app__navbar-links flex-1 list-none justify-center items-center hidden lg:flex ">
        {["home","services", "about", "testimonial", "contact"].map((item) => (
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

      <div className="app__navbar-menu w-9 h-9 flex relative rounded-full bg-gray-100 text-gray-700 items-center justify-center z-50 lg:hidden  ">
        <HiMenuAlt4 onClick={() => setToggle(true)} className="h-3/4 w-3/4"  />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-navmenu-background bg-rose-200 z-[5] bg-fixed bg-center sm:bg-cover bg-contain w-4/5 top-0 bottom-0 right-0 h-screen fixed flex justify-end items-end flex-col"
          >
            <HiX onClick={() => setToggle(false)} className=" w-8 h-8 m-6 text-gray-600" />
            <ul className="w-full h-full flex justify-start items-start flex-col m-0 p-0 list-none ">
              {["home","services", "about" ,"testimonial","contact", ].map(
                (item, index) => (
                  <li className=" p-4" key={index}>
                    <a className=" text-6xl capitalize font-bold font-Tangerine decoration-0 text-gray-600 hover:text-rose-400 " href={`#${item}`} onClick={() => setToggle(false)}>
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
