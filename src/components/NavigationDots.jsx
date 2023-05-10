import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation sm:flex justify-center items-center flex-col p-2 absolute top-1/2 right-2 hidden z-50 ">
      {[
        "home",
        "services",
        "about",
        "testimonials",
        "contact",
      ].map((item, index) => (
        <a
          key={item + index}
          href={`#${item}`}
          className="app__navigation-dot w-2 h-2 rounded-full bg-black m-2 ease-in-out hover:bg-purple-500"
          style={active === item ? { backgroundColor:"#313BAC" } : {}} 
          dangerouslySetInnerHTML={{ __html: '' }} 
        />
      ))}
    </div>
  );
};

export default NavigationDots;
