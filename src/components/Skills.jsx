import React from "react";
import HTML from "../assests/html.png";
import CSS from "../assests/css.png";
import TAILWIND from "../assests/tailwind.png";
import JAVASCRIPT from "../assests/javascript.png";
import NODE from "../assests/node.png";
import REACT from "../assests/react.png";
import GITHUB from "../assests/github.png";
import BLOCKCHAIN from "../assests/blockchain.png";
import AWS from "../assests/aws.png";
import C from "../assests/C PLUS.png";

const Skills = () => {
  return (
    <div name="Skills" classname=" w-full h-screen text-zinc-950">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-fill h-full text-zinc-950">
        <div>
          <p className="text-4xl font-bold inline border-b-2 border-black   ">
            {" "}
            Experience
          </p>
          <p className="py-4 text-2xl">
            These are the some of the technologies I have worked with during my
            Education and Bootcamp
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8 ">
          <div className="shadow-md shadow-[#0a0a0a] hover:scale-110 duration-500">
            <img className="w-25 mx-auto" src={HTML} alt="HTML Icon" />
            <p className="py-2">HTML </p>
          </div>
          <div className="shadow-md shadow-[#0a0a0a] hover:scale-110 duration-500">
            <img className="w-25 mx-auto" src={CSS} alt="HTML Icon" />
            <p className="py-2">CSS </p>
          </div>
          <div className="shadow-md shadow-[#0a0a0a] hover:scale-110 duration-500">
            <img className="w-25 mx-auto" src={TAILWIND} alt="HTML Icon" />
            <p className="py-2">TAILWIND </p>
          </div>
          <div className="shadow-md shadow-[#0a0a0a] hover:scale-110 duration-500">
            <img className="w-25 mx-auto" src={JAVASCRIPT} alt="HTML Icon" />
            <p className="py-2">JAVASCRIPT </p>
          </div>
          <div className="shadow-md shadow-[#0a0a0a] hover:scale-110 duration-500">
            <img className="w-25 mx-auto" src={NODE} alt="HTML Icon" />
            <p className="py-2">NODE </p>
          </div>
          <div className="shadow-md shadow-[#0a0a0a] hover:scale-110 duration-500">
            <img className="w-25 mx-auto" src={REACT} alt="HTML Icon" />
            <p className="py-2">REACT </p>
          </div>
          <div className="shadow-md shadow-[#0a0a0a] hover:scale-110 duration-500">
            <img className="w-25 mx-auto" src={GITHUB} alt="HTML Icon" />
            <p className="py-2">GITHUB </p>
          </div>
          <div className="shadow-md shadow-[#0a0a0a] hover:scale-110 duration-500 ">
            <img className="w-25 mx-auto" src={BLOCKCHAIN} alt="HTML Icon" />
            <p className="py-2">BLOCKCHAIN </p>
          </div>
          <div className="shadow-md shadow-[#0a0a0a] hover:scale-110 duration-500 ">
            <img className="w-25 mx-auto" src={AWS} alt="HTML Icon" />
            <p className="py-2">AWS </p>
          </div>
          <div className="shadow-md shadow-[#0a0a0a] hover:scale-110 duration-500 ">
            <img className="w-25 mx-auto" src={C} alt="HTML Icon" />
            <p className="py-2">C </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
