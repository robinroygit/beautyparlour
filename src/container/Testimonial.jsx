import React from "react";
import data from "../constants/testimonial.json"
import AppWrap from "../wrapper/AppWrap";
import MotionWrap from "../wrapper/MotionWrap";


const Testimonial = () => {

  return (
    <div className=" min-h-screen md:h-screen flex justify-center items-center p-8  w-screen overflow-hidden bg-white relative">

      <div className=" TestimonialArea relative z-[2] py-12  ">
        <div className="containe  w-screen m-8">
          <div className="sec-title relative mb-12 mx-8 pb-4 font-serif  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-20 after:h-2 after:bg-slate-700 ">
            <h2 className=" text-4xl sm:text-6xl text-gray-800 font-extrabold font-serif uppercase tracking-wide">
              our Testimonials
            </h2>
            <p className=" text-gray-800">what client says about us?</p>
          </div>
          <div className="testimonial-content px-5 pr-10 flex gap-8 p-8 w-screen overflow-x-scroll  snap-x">
            {data.map((data,index) => (
              <div
                className="single-testimonial bg-transparent flex-shrink-0 w-96 h-auto rounded-2xl snap-center  border-8 border-gray-600 relative z-[2] after:content-['❞'] after:absolute after:-right-9 after:-bottom-9 after:bg-white after:w-32 after:h-24 after:text-center after:text-8xl after:text-gray-600  before:content-['❝'] before:absolute before:-left-9 before:-top-9 before:bg-white before:w-32 before:h-24 before:text-center before:text-8xl before:text-gray-600  "
                key={index}
              >
                <div className="object-cover flex flex-col justify-between items-center rounded-2xl w-full h-full">
                  <p className="text-[16px] text-gray-600 p-12 pb-7 relative z-[3] ">
                  {data.comment}
                  </p>

                  <div className="client-info flex justify-center items-center text-left pb-12">
                    <div className="client-pic pr-4">
                      <a href="#">
                        <img className=" w-24 h-24 aspect-square rounded-full" src={data.image}  alt={`profile ${data.image}`} />
                      </a>
                    </div>

                    <div className="client-detail  ">
                      <h6 className="text-xl text-gray-600 cursor-pointer">{data.name}</h6>
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
  MotionWrap(Testimonial),
   "testimonial"
   );

