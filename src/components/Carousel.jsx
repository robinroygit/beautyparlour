import React from 'react'
import carousel from "../constants/carouselmodel.jsx"

const Carousel = () => {

  return (

          <div className="flex gap-8 p-8 w-screen overflow-x-scroll bg-pink-100 snap-x">

            {
                carousel.map((item,index)=>(
                    <div key={index} className="flex-shrink-0 w-80 h-80 rounded-2xl snap-center bg-cyan-300">
                            <img src={item}  className=' object-cover rounded-2xl w-full h-full'  alt={item} />
                    </div>
            
                ))
            }
        <div className="flex-shrink-0 w-80 h-80 bh-cyan-300 rounded-2xl snap-center bg-cyan-300">
        
        </div>


        <div className="flex-shrink-0 w-80 h-80 bh-cyan-300 rounded-2xl snap-center bg-violet-300"></div>
        <div className="flex-shrink-0 w-80 h-80 bh-cyan-300 rounded-2xl snap-center bg-fuchsia-300"></div>
        <div className="flex-shrink-0 w-80 h-80 bh-cyan-300 rounded-2xl snap-center bg-cyan-300"></div>
        <div className="flex-shrink-0 w-80 h-80 bh-cyan-300 rounded-2xl snap-center bg-violet-300"></div>
        <div className="flex-shrink-0 w-80 h-80 bh-cyan-300 rounded-2xl snap-center bg-fuchsia-300"></div>
        <div className="flex-shrink-0 w-80 h-80 bh-cyan-300 rounded-2xl snap-center bg-cyan-300"></div> 
        <div className="flex-shrink-0 w-80 h-80 bh-cyan-300 rounded-2xl snap-center bg-violet-300"></div>
        <div className="flex-shrink-0 w-80 h-80 bh-cyan-300 rounded-2xl snap-center bg-fuchsia-300"></div>
        <div className="flex-shrink-0 w-80 h-80 bh-cyan-300 rounded-2xl snap-center bg-cyan-300"></div>
        <div className="flex-shrink-0 w-80 h-80 bh-cyan-300 rounded-2xl snap-center bg-violet-300"></div>
        <div className="flex-shrink-0 w-80 h-80 bh-cyan-300 rounded-2xl snap-center bg-fuchsia-300"></div>

      </div>

  )
}

export default Carousel