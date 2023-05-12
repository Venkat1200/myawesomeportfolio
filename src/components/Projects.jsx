import React from "react";
import INDISH from "../assests/INDISH WEBSITE.png";
import MYPORTFOLIO from "../assests/myportfolio Screenshot.png";
import MEMEGENERATOR from "../assests/MemeApp.png";
import JULEA from "../assests/jule.png";
import HACKER from "../assests/Hack-news.png";

const Projects = () => {
  return (
    <div name="projects" className=" w-full md:h-screen text-zinc-950">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-2 border-black">
            Projects
          </p>
          <p className="py-6 text-2xl">
            Checkout some of my Projects I have Worked on
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-center py-8 ">
          <div className="shadow-md shadow-[#0a0a0a] hover:scale-110 duration-500 ">
            <img className="w-50 mx-auto" src={INDISH} alt="INDISH-Icon" />
            <p className="py-2 bg-white">INDISH e-commerce Website </p>
            <div className="flex flex-row justify-around items-center bg-black">
              <button className="button-1">DEMO</button>
              <button className="button-1">CODE</button>
            </div>
          </div>
          <div className="shadow-md shadow-[#0a0a0a] hover:scale-110 duration-500 ">
            <img
              className="w-50 mx-auto"
              src={MEMEGENERATOR}
              alt="INDISH WEBSITE IMAGE  Icon"
            />
            <p className="py-2 bg-white">Meme-Generator </p>
            <div className="flex flex-row justify-around items-center bg-black">
              <button className="button-1 ">DEMO</button>
              <button className="button-1">CODE</button>
            </div>
          </div>
          <div className="shadow-md shadow-[#0a0a0a] hover:scale-110 duration-500 ">
            <img
              className="w-50 mx-auto"
              src={INDISH}
              alt="INDISH WEBSITE IMAGE  Icon"
            />
            <p className="py-2 bg-white">Decentralized Blockchain App </p>
            <div className="flex flex-row justify-around items-center bg-black">
              <button className=" bg-black text-white m-4 py-2 px-3 rounded-lg">
                CODE
              </button>
            </div>
          </div>

          <div className="shadow-md shadow-[#0a0a0a] hover:scale-110 duration-500 ">
            <img
              className="w-50 mx-auto"
              src={MYPORTFOLIO}
              alt="INDISH WEBSITE IMAGE  Icon"
            />
            <p className="py-2 bg-white">My Portfolio </p>
            <div className="flex flex-row justify-around items-center bg-black">
              <button className="button-1">DEMO</button>
              <button className="button-1">CODE</button>
            </div>
          </div>

          <div className="shadow-md shadow-[#0a0a0a] hover:scale-110 duration-500 ">
            <img
              className="w-50 mx-auto"
              src={HACKER}
              alt="INDISH WEBSITE IMAGE  Icon"
            />
            <p className="py-2 bg-white">Hacker-news App</p>
            <div className="flex flex-row justify-around items-center bg-black">
              <button className="button-1">DEMO</button>
              <button className="button-1">CODE</button>
            </div>
          </div>
          <div className="shadow-md shadow-[#0a0a0a] hover:scale-110 duration-500 ">
            <img
              className="w-50 object-cover  mx-auto"
              src={JULEA}
              alt="INDISH WEBSITE IMAGE  Icon"
            />
            <p className="py-2 bg-white">JULEA framework</p>
            <div className="flex flex-row justify-around items-center bg-black">
              <button className="button-1">CODE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
