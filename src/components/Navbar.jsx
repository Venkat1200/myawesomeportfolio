import React from "react";
import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-3 bg-slate-950 text-red-300">
      <div className="cursor-pointer">
        <h1 className="text-2xl">
          <Link to="home" smooth={true} duration={500}>
            VENKAT KATKOOR
          </Link>
        </h1>
      </div>
      {/* ITS FOR WEBSITE VERSION */}

      <ul className=" hidden md:flex ">
        <li>
          <Link to="home" smooth={true} duration={500}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            SKILLS
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            PROJECTS
          </Link>
        </li>
        <li>
          <Link to="Education" smooth={true} duration={500}>
            EDUCATION
          </Link>
        </li>

        <li>
          <Link to="contact" smooth={true} duration={500}>
            CONTACT
          </Link>
        </li>
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
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            HOME
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            ABOUT
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            SKILLS
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            PROJECTS
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="Education"
            smooth={true}
            duration={500}
          >
            EDUCATION
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            CONTACT
          </Link>
        </li>
      </ul>

      <div className=" hidden text-black text-2xl  lg:flex fixed flex-col top-[40%] left-0">
        <ul className="flex flex-col ">
          <li className="w-[160px] h-[50px]  flex justify-between items-center text-white  ml-[-110px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-r-lg ">
            <a
              className=" flex justify-between items-center w-full  "
              href="https://www.linkedin.com/in/venkat-rk/"
            >
              Linkedin <FaLinkedin />
            </a>
          </li>{" "}
          <li className="w-[160px] h-[50px]  flex justify-between items-center text-white ml-[-110px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-r-lg">
            <a
              className=" flex justify-between items-center w-full  "
              href="https://github.com/Venkat1200"
            >
              Github <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
