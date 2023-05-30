// import React from "react";
// import INDISH from "../assests/INDISH WEBSITE.png";
// import MYPORTFOLIO from "../assests/myportfolio Screenshot.png";
// import MEMEGENERATOR from "../assests/MemeApp.png";
// import BLOCKCHIN from "../assests/Blocchain.png";
// import JULEA from "../assests/jule.png";
// import HACKER from "../assests/Hack-news.png";

// const Projects = () => {
//   return (
//     <div
//       name="projects"
//       className=" w-full lg:h-screen md:h-screen text-zinc-950"
//     >
//       <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
//         <div className="py">
//           <p className="text-4xl font-headfont font-bold inline border-b-2 border-black">
//             Projects
//           </p>
//           <p className="py-2 text-2xl">
//             Checkout some of my Projects I have Worked on
//           </p>
//         </div>
//         <div className="w-full    grid grid-cols-1 sm:grid-cols-3 gap-4 text-center py-8 rounded-t-lg">
//           <div className="bg-white border-2 border-red-700 rounded-lg shadow-md p-4 max-w-xs mx-auto">
//             <img
//               src={INDISH}
//               alt="Nature"
//               className="w-full h-36 mb-4 rounded-lg"
//             />
//             <h2 className="text-xl font-bold mb-4">Indish E-commerce </h2>
//             <div className="flex justify-between">
//               <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
//                 DEMO
//               </button>
//               <button className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
//                 CODE
//               </button>
//             </div>
//           </div>

//           <div className="bg-white  border-2 border-red-700 rounded-lg shadow-md p-4 max-w-xs mx-auto">
//             <img
//               src={MEMEGENERATOR}
//               alt="Nature"
//               className="w-full h-36 mb-4 rounded-lg"
//             />
//             <h2 className="text-xl font-bold mb-4">Meme Generator</h2>
//             <div className="flex justify-between">
//               <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
//                 DEMO
//               </button>
//               <button className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
//                 CODE
//               </button>
//             </div>
//           </div>

//           <div className="bg-white border-2 border-red-700 rounded-lg shadow-md p-4 max-w-xs mx-auto">
//             <img
//               src={MYPORTFOLIO}
//               alt="Nature"
//               className="w-full h-36 mb-4 rounded-lg"
//             />
//             <h2 className="text-xl font-bold mb-4">My Portfolio</h2>
//             <div className="flex justify-between">
//               <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
//                 DEMO
//               </button>
//               <button className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
//                 CODE
//               </button>
//             </div>
//           </div>

//           <div className="bg-white border-2 border-red-700 rounded-lg shadow-md p-4 max-w-xs mx-auto">
//             <img
//               src={HACKER}
//               alt="Nature"
//               className="w-full h-36 mb-4 rounded-lg"
//             />
//             <h2 className="text-xl font-bold mb-4">Hacker News</h2>
//             <div className="flex justify-between">
//               <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
//                 DEMO
//               </button>
//               <button className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
//                 CODE
//               </button>
//             </div>
//           </div>
//           <div className="bg-white border-2 border-red-700 rounded-lg shadow-md p-4 max-w-xs mx-auto">
//             <img
//               src={BLOCKCHIN}
//               alt="Nature"
//               className="w-96 h-36 mb-4 rounded-lg"
//             />
//             <h2 className="text-xl font-bold mb-4">D-App Blockchain</h2>
//             <div className="flex justify-between">
//               <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
//                 DEMO
//               </button>
//               <button className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
//                 CODE
//               </button>
//             </div>
//           </div>
//           <div className="bg-white border-2 border-red-700 rounded-lg shadow-md p-4 max-w-xs mx-auto">
//             <img
//               src={JULEA}
//               alt="Nature"
//               className="w-full h-36 mb-4 rounded-lg"
//             />
//             <h2 className="text-xl font-bold mb-4">JULEA Framework</h2>
//             <div className="flex justify-between">
//               <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
//                 DEMO
//               </button>
//               <button className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
//                 CODE
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React from "react";
import INDISH from "../assests/INDISH WEBSITE.png";
import MYPORTFOLIO from "../assests/myportfolio Screenshot.png";
import MEMEGENERATOR from "../assests/MemeApp.png";
import BLOCKCHIN from "../assests/Blocchain.png";
import JULEA from "../assests/jule.png";
import HACKER from "../assests/Hack-news.png";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full lg:h-screen md:h-screen text-zinc-950"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="py">
          <p className="text-4xl font-headfont font-bold inline border-b-2 border-black">
            Projects
          </p>
          <p className="py-2 text-2xl">
            Checkout some of my Projects I have Worked on
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-center py-8 rounded-t-lg">
          <div className="bg-white border-2 border-red-700 rounded-lg shadow-md p-4 max-w-xs mx-auto">
            <img
              src={INDISH}
              alt="Nature"
              className="w-full h-36 mb-4 rounded-lg"
            />
            <h2 className="text-xl font-bold mb-4">Indish E-commerce</h2>
            <div className="flex justify-between">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
                DEMO
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
                CODE
              </button>
            </div>
          </div>

          <div className="bg-white border-2 border-red-700 rounded-lg shadow-md p-4 max-w-xs mx-auto">
            <img
              src={MEMEGENERATOR}
              alt="Nature"
              className="w-full h-36 mb-4 rounded-lg"
            />
            <h2 className="text-xl font-bold mb-4">Meme Generator</h2>
            <div className="flex justify-between">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
                DEMO
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
                CODE
              </button>
            </div>
          </div>

          <div className="bg-white border-2 border-red-700 rounded-lg shadow-md p-4 max-w-xs mx-auto">
            <img
              src={MYPORTFOLIO}
              alt="Nature"
              className="w-full h-36 mb-4 rounded-lg"
            />
            <h2 className="text-xl font-bold mb-4">My Portfolio</h2>
            <div className="flex justify-between">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
                DEMO
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
                CODE
              </button>
            </div>
          </div>

          <div className="bg-white border-2 border-red-700 rounded-lg shadow-md p-4 max-w-xs mx-auto">
            <img
              src={HACKER}
              alt="Nature"
              className="w-full h-36 mb-4 rounded-lg"
            />
            <h2 className="text-xl font-bold mb-4">Hacker News</h2>
            <div className="flex justify-between">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
                DEMO
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
                CODE
              </button>
            </div>
          </div>
          <div className="bg-white border-2 border-red-700 rounded-lg shadow-md p-4 max-w-xs mx-auto">
            <img
              src={BLOCKCHIN}
              alt="Nature"
              className="w-full h-36 mb-4 rounded-lg"
            />
            <h2 className="text-xl font-bold mb-4">D-App Blockchain</h2>
            <div className="flex justify-between">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
                DEMO
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
                CODE
              </button>
            </div>
          </div>
          <div className="bg-white border-2 border-red-700 rounded-lg shadow-md p-4 max-w-xs mx-auto">
            <img
              src={JULEA}
              alt="Nature"
              className="w-full h-36 mb-4 rounded-lg"
            />
            <h2 className="text-xl font-bold mb-4">JULEA Framework</h2>
            <div className="flex justify-between">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
                DEMO
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
                CODE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
