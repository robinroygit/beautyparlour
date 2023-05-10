import React from 'react'
import {BsInstagram,BsLinkedin } from "react-icons/bs"
import {FaFacebook } from "react-icons/fa"

const SocialMedia = () => {
  return (
    <div className='app__social sm:flex justify-end items-center flex-col absolute z-50 top-3/4 left-10 hidden '>
        <div className=' h-10 w-10 rounded-full m-1 border border-gray-600 bg-white flex group justify-center items-center hover:bg-gray-600 hover:border-gray-600'>
          <a 
          href="https://www.linkedin.com/in/robin-roy-849b73263" target="_blank"
           rel="noreferrer">
            <BsLinkedin className=' h-4 w-4 text-gray-700 group-hover:text-white'/>
          </a>
        </div>
        <div className=' h-10 w-10 rounded-full m-1 border border-gray-600 bg-white flex group justify-center items-center hover:bg-gray-600 hover:border-gray-600'>

          <a 
          href="https://www.instagram.com/robart.codes/"
          target="_blank"
           rel="noreferrer"
          >

            <BsInstagram className=' h-4 w-4 text-gray-700 group-hover:text-white'/>
          </a>
        </div>
        <div className=' h-10 w-10 rounded-full m-1 border border-gray-600 bg-white flex group justify-center items-center hover:bg-gray-600 hover:border-gray-600'>

            <FaFacebook className=' h-4 w-4 text-gray-700 group-hover:text-white'/>
        </div>


    </div>
  )
}

export default SocialMedia