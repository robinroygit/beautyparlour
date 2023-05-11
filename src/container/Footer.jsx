import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="contact" className=" min-h-screen w-full pt-1 bg-gradient-to-r from-[#f3ae8b]/25 to-purple-50">

      {/* form start  */}
      <div className="container  mx-auto my-20 md:w-1/3 w-11/12 border border-rose-400 bg-white">
        <div className="p-5 space-y-5 shadow-xl">
          <h4 className=" text-center text-3xl">contact us</h4>
          <form>
            <div className="grid grid-cols-2 gap-5">
              <input
                type="text"
                className=" px-4 py-2 focus:outline-none border border-gray-500 focus:border-rose-400"
                placeholder="First Name"
              />
              <input
                type="text"
                className=" px-4 py-2 focus:outline-none border border-gray-500 focus:border-rose-400"
                placeholder="Last Name"
              />
              <input
                type="email"
                className=" px-4 py-2 focus:outline-none border border-gray-500 focus:border-rose-400 col-span-2"
                placeholder="Email"
              />
              <input
                type="text"
                className=" px-4 py-2 focus:outline-none border border-gray-500 focus:border-rose-400 col-span-2"
                placeholder="Phone no."
              />
              <textarea 
               cols="10"
               rows="5"
               className=" px-4 py-2 focus:outline-none border border-gray-500 focus:border-rose-400 col-span-2"
                placeholder="Write Your Message"
               ></textarea>
            </div>
               <input type="submit" value="Send Message "
               className=" focus:outline-none mt-5 bg-rose-400 px-4 py-2 w-full text-white font-bold"
               />
          </form>
        </div>
      </div>
      {/* form end  */}


      {/* footer part start */}
      <div className="footer-list w-full max-w-[1200px] my-0 mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-5 items-center py-28 px-0 border-b border-gray-700 text-gray-600 font-Montserrat ">
        <div className="footer-data text-center mb-4 mx-auto">
          <h1>
            <a href="#">
           <h1 className="text-2xl text-gray-800 font-bold font-serif mx-4">BEAUTY & CO</h1>

            </a>
          </h1>
          <div className="footer-data-social mt-4 flex gap-4">
            <a href="">
              <BsInstagram className=" text-2xl text-rose-400" />
            </a>
            <a href="">
              <BsLinkedin className=" text-2xl text-rose-400" />
            </a>
            <a href="">
              <BsFacebook className=" text-2xl text-rose-400" />
            </a>
          </div>
        </div>

        <div className="footer-data text-center mb-4">
          <h2 className=" font-bold text-2xl capitalize mb-4 text-gray-900 leading-5 ">
            address
          </h2>
          <p className=" text-center text-xl capitalize leading-6">
            hauz kaz st -26 <br /> new delhi - india
          </p>
        </div>
        <div className="footer-data text-center mb-4">
          <h2 className=" font-bold text-2xl capitalize mb-4 text-gray-900 leading-5 ">
            {" "}
            we opened
          </h2>
          <p>
            monday to friday <br />
            from 9:00 to 18:00
          </p>
        </div>
        <div className="footer-data text-center mb-4">
          <h2 className=" font-bold text-2xl capitalize mb-4 text-gray-900 leading-5 ">
            contact
          </h2>
          <p>+91-989-989-8989</p>
          <p>+91-444-555-666</p>
        </div>
      </div>
      <div className="copy text-center py-4 px-0">
        <p className=" font-bold leading-6">&copy; All Rights Reserved </p>
        <span className=" text-xs leading-4">created by Robin Roy</span>
      </div>

      {/* footer part end    */}

    </div>
  );
};

export default Footer;
