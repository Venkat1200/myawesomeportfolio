import React from "react";

const Education = () => {
  return (
    <div
      name="Education"
      className="w-full lg:h-screen md:fit-screen text-zinc-950"
    >
      <div className="max-w-[1000px]  mx-auto p-4 flex flex-col border-orange-500  justify-center w-full h-full">
        <div>
          <p className="text-4xl font-headfont  font-bold inline border-b-2 border-black">
            Education
          </p>
          <p className="py-6 text-2xl">Please have a look at my Education</p>
        </div>
        <div className=" lg:h-12 sm:h-24 w-full grid sm:grid-cols-1 lg:grid-cols-2 border-4 border-neutral-700 gap-8 px-8 ">
          <div className=" lg:text-center text-2xl  font-bold ">
            <p>Year</p>
          </div>
          <div className="sm:text-center  font-bold">
            <p className="text-2xl  lg:text-center">Course</p>
          </div>
        </div>
        <div className=" lg:h-40 sm:h-60 w-full grid lg:grid-cols-2 sm:grid-cols-1 border-2 border-violet-700  gap-8 px-4 bg-amber-300">
          <div className="sm:text-center content-between text-2xl max-h-3 self-center ">
            <p>10/2022 – 02/2023</p>
          </div>
          <div className="sm:text-center self-center p-2 bg-amber-300 ">
            <p className="text-2xl  text-left  font-bold">
              Full-Stack Web-Entwicklung
            </p>
            <p className="text-xl text-left">WBS Coding School</p>
            <p className="text-left">
              Focus : : HTML, CSS, ReactJS, JavaScript, Git, GitHub, UX/UI
              Design, Node.js, Express, PostgreSQL, Figma/AWS Amplify, Google
              Maps, Leaflet
            </p>
          </div>
        </div>
        <div className="lg:h-40 sm:h-60   w-full grid sm:grid-cols-2 bg-teal-600 border-neutral-500 border-2 gap-8 px-4">
          <div className="sm:text-center text-2xl self-center ">
            <p>03/2017 – 03/2022</p>
          </div>
          <div className="sm:text-center self-center p-2 bg-teal-600 ">
            <p className="text-2xl text-left font-bold">
              Masterstudium Digital Engineering
            </p>
            <p className="text-xl text-left">
              Otto von Guericke University, Magdeburg
            </p>
            <p className="text-left">
              Focus: Databases, Blockchain, Software testing and validation,
              Data Management
            </p>
          </div>
        </div>
        <div className="lg:h-40 sm:h-60 w-full grid sm:grid-cols-2 bg-lime-200 border-2  border-orange-500 gap-8 px-4">
          <div className="sm:text-center text-2xl self-center ">
            <p>08/2010 – 03/2014</p>
          </div>
          <div className="sm:text-center self-center p-2 bg-lime-200">
            <p className="text-2xl text-left  font-bold">
              Bachelorstudium Maschinenbau
            </p>
            <p className="text-xl text-left">
              Icfai Foundation for Higher Education
            </p>
            <p className="text-left">Focus: CAD, Production Techniques</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
