// import React from "react";
// import { HiArrowNarrowRight } from "react-icons/hi";
// import { Link } from "react-scroll";
// import RESUME from "../assests/Resume.jpg";
// const Home = () => {
//   return (
//     <div name="home" className="w-full h-screen ">
//       <div className="max-w-[1300px] mx-auto px-8 flex flex-row  justify-center h-full">
//         <div className="flex flex-col justify-center h-full">
//           <p className="text-red-600 text-2xl">Hi my Name is </p>
//           <h1 className="text-4xl sm:text-5xl font-extrabold text-black">
//             Venkat Reddy Katkoor
//           </h1>
//           <h2 className="text-4xl sm:text-6xl font-bold text-fuchsia-950">
//             I am a full stack web developer
//           </h2>
//           <p className="text-2xl py-2 max-w-[700px]">
//             I'm an experienced Full Stack Web Developer skilled in both
//             object-oriented and functional programming. From front-end to
//             back-end development, database management, and API integration, I
//             create dynamic and user-friendly web applications. My focus is on
//             delivering high-quality code, exceeding client expectations, and
//             staying updated with the latest technologies. I aim to provide
//             effective solutions, staying current with industry trends and best
//             practices. My goal is to consistently deliver top-notch results and
//             a seamless user experience.
//           </p>
//           <div>
//             <Link to="projects">
//               <button className="bg-gray-500 hover:bg-blue-700  border-width-2 flex items-center space-x-2  text-white px-5 py-2 my-2 border border-blue-700 rounded">
//                 View My Work
//                 <span className="hover:rotate-90 duration-100">
//                   <HiArrowNarrowRight className="ml-2" />
//                 </span>
//               </button>
//             </Link>
//           </div>
//         </div>
//         <div className="mx-auto py-64 lg:w-64 lg:h-auto ">
//           <img
//             className="border-2 border-rose-600"
//             src={RESUME}
//             alt="Description of the image"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import RESUME from "../assests/Resume.jpg";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      <div className="max-w-[1300px] mx-auto px-32 py-32">
        <div className=" flex flex-col sm:flex-row justify-center h-full">
          <div className="flex flex-col justify-center sm:w-1/2">
            <p className="text-red-600 text-2xl">Hi my Name is </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-black">
              Venkat Reddy Katkoor
            </h1>
            <h2 className="text-4xl sm:text-6xl font-bold text-fuchsia-950">
              I am a full stack web developer
            </h2>
            <p className="text-2xl py-2 max-w-1100px]">
              I'm an experienced Full Stack Web Developer skilled in both
              object-oriented and functional programming. From front-end to
              back-end development, database management, and API integration, I
              create dynamic and user-friendly web applications. My focus is on
              delivering high-quality code, exceeding client expectations, and
              staying updated with the latest technologies. I aim to provide
              effective solutions, staying current with industry trends and best
              practices. My goal is to consistently deliver top-notch results
              and a seamless user experience.
            </p>
            <div>
              <Link to="projects">
                <button className="bg-gray-500 hover:bg-blue-700 border-width-2 flex items-center space-x-2 text-white px-5 py-2 my-2 border border-blue-700 rounded">
                  View My Work
                  <span className="hover:rotate-90 duration-100">
                    <HiArrowNarrowRight className="ml-2" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex flex-grow justify-end items-center">
            <img
              className="border-2 border-rose-400 max-h-64"
              src={RESUME}
              alt="Description of the image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
