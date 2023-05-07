import React from "react";
import servicesitems from "../constants/servicesitems";

// import "./style.css"

const Glowingcard = () => {
  return (
    <div className="bd flex m-0 p-0 min-h-screen flex-col  justify-evenly items-center  relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-service-background bg-cover bg-center blur-sm z-0 overflow-hidden" >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 bg-cover bg-center z-10" />
      </div>

      <h1 className=" text-4xl z-20">services</h1>

      <div className="containe flex justify-between items-center p-8 flex-wrap flex-1 gap-2 relative w-4/5 ">

        <div className="card relative group">
          <div className=" face1 relative h-52 w-72 items-center content-center z-10 transition ease-in-out delay-150 duration-500 group-hover:translate-y-0 translate-y-24  ">
            <img src={servicesitems.card1} alt="" className=" h-full" />
            <div className=" flex justify-center items-center bg-slate-200">
              <img
                src={servicesitems.haircolor}
                alt=""
                className="h-8 w-8 mx-2"
              />
              <h3 className="text-4xl text-center font-Tangerine text-black">
                Color
              </h3>
            </div>
          </div>

          <div className=" face2 h-52 w-72 relative flex z-0 justify-center items-center box-border p-4  transition ease-in-out delay-150 duration-500 -translate-y-24 group-hover:translate-y-0 ">
            <div className="content text-xs pt-8">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
                corrupti iusto delectus dicta recusandae assumenda vel cumque
                illum, impedit earum, veritati
              </p>
              <a
                href="#"
                type="button"
                className=" decoration-0 box-border text-gray-900 outline-dashed outline-1 inline-block p-2 mt-2  uppercase "
              >
                read more
              </a>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Glowingcard;
