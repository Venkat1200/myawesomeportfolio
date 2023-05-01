import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen ">
      // photo for the Introduction // Make a container for Introduction
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-red-600 text-2xl">Hi my Name is </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black">
          Venkat Reddy Katkoor
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-fuchsia-950">
          I am a full stack web developer
        </h2>
        <p className="text-2xl py-2 max-w-[700px]">
          Im a full-stack developer specializing in building MERN stack
          projects. This is my Portfolio pease go through my all of the projects
          aandf contact me as soon as possible
        </p>
        <div>
          <button className="bg-gray-500 hover:bg-blue-700  border-width-2 flex items-center space-x-2  text-white px-5 py-2 my-2 border border-blue-700 rounded">
            View My Work
            <span className="hover:rotate-90 duration-100">
              <HiArrowNarrowRight className="ml-2" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
