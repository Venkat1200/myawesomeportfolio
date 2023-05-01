import React from "react";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

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

      <div className=" hidden text-black text-2xl  lg:flex fixed flex-col top-[40%] left-0">
        <ul className="flex flex-col ">
          <li className="w-[160px] h-[50px]  flex justify-between items-center text-white  ml-[-110px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-r-lg ">
            <a className=" flex justify-between items-center w-full  " href="/">
              Linkedin <FaLinkedin />
            </a>
          </li>{" "}
          <li className="w-[160px] h-[50px]  flex justify-between items-center text-white ml-[-110px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-r-lg">
            <a className=" flex justify-between items-center w-full  " href="/">
              Github <FaGithub />
            </a>
          </li>
          <li className="w-[160px] h-[50px] flex justify-between items-center text-white  ml-[-110px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] rounded-r-lg">
            <a className=" flex justify-between items-center w-full  " href="/">
              Gmail <HiOutlineMail />
            </a>
          </li>
          <li className="w-[160px] h-[50px] flex justify-between items-center text-white ml-[-110px] hover:ml-[-10px] duration-300 bg-[#565f69] rounded-r-lg">
            <a className=" flex justify-between items-center w-full " href="/">
              Resume <BsFillPersonLinesFill />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
