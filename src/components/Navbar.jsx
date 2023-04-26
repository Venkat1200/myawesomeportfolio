import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-3 bg-slate-950 text-red-300">
      <div>
        <h1 className="text-2xl">VENKAT REDDY KATKOOR</h1>
      </div>
      {/* ITS FOR WEBSITE VERSION */}

      <ul className=" hidden md:flex ">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>SKILLS</li>
        <li>EDUCATION</li>
        <li>CERTIFICATIONS</li>
        <li>CONTACT</li>
      </ul>

      {/* The Famous Three Bars */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* ITS For the MOBILE Version */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-slate-950 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">HOME</li>
        <li className="py-6 text-4xl">ABOUT</li>
        <li className="py-6 text-4xl">SKILLS</li>
        <li className="py-6 text-4xl">EDUCATION</li>
        <li className="py-6 text-4xl">CERTIFICATIONS</li>
        <li className="py-6 text-4xl">CONTACT</li>
      </ul>

      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
