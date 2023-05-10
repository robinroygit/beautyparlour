import React from "react";
import data from "../constants/testimonial.json"
import AppWrap from "../wrapper/Appwrap";
import MotionWrap from "../wrapper/MotionWrap";


const Testimonial = () => {
  console.log(data)
  return (
    <div className=" min-h-screen flex justify-center items-center p-8  w-screen overflow-hidden bg-rose-200 relative">

      <div className=" TestimonialArea relative z-[2] py-12  ">
        <div className="containe  w-screen m-8">
          <div className="sec-title relative mb-12 mx-8 pb-4 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-20 after:h-2 after:bg-slate-100 ">
            <h2 className=" text-4xl sm:text-6xl text-white font-extrabold uppercase tracking-wide">
              our Testimonials
            </h2>
            <p className=" text-white">what client says about us?</p>
          </div>
          <div className="testimonial-content px-5 pr-10 flex gap-8 p-8 w-screen overflow-x-scroll  snap-x">
            {data.map((data,index) => (
              <div
                className="single-testimonial bg-rose-200 flex-shrink-0 w-96 h-auto rounded-2xl snap-center  border-8 border-white relative z-[2] after:content-['❞'] after:absolute after:-right-9 after:-bottom-9 after:bg-rose-200 after:w-32 after:h-24 after:text-center after:text-9xl  before:content-['❝'] before:absolute before:-left-9 before:-top-9 before:bg-rose-200 before:w-32 before:h-24 before:text-center before:text-9xl text-white "
                key={index}
              >
                <div className="object-cover flex flex-col justify-between items-center rounded-2xl w-full h-full">
                  <p className="text-[16px] text-gray-600 p-12 pb-7 relative z-[3] ">
                  {data.comment}
                  </p>

                  <div className="client-info flex justify-center items-center text-left pb-12">
                    <div className="client-pic pr-4">
                      <a href="#">
                        <img className=" w-full rounded-full" src={data.image} alt="" />
                      </a>
                    </div>

                    <div className="client-detail  ">
                      <h6 className="text-xl text-gray-600">{data.name}</h6>
                      <span className=" inline-block text-lg text-gray-800">{data.info}</span>
                    </div>
                  </div>
                  
                </div>
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__skil"),
   "testimonial",
   "app__white"
   );

