// import React from "react";

// const About = () => {
//   return (
//     <div
//       name="about"
//       className="w-full lg:h-screen md:fit-screen md:py-16 text-black"
//     >
//       <div className="flex flex-col justify-center items-center w-full h-full">
//         <div className="max-w-[1300px] w-full grid grid-cols-2 gap-8">
//           <div className="sm:text-right pb-8 pl-4">
//             <p className="text-4xl font-bold inline border-b-4 border-black font-headfont">
//               About
//             </p>
//           </div>
//           <div></div>
//         </div>
//         <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
//           <div className=" lg:text-left sm:text-right text-4xl font-bold">
//             <p>Hi. I'm Venkat Reddy Katkoor, nice to meet you.</p>
//           </div>
//           <div>
//             <p className="text-2xl">
//               I am a dedicated software professional driven by a passion for
//               crafting exceptional solutions that positively impact lives. With
//               my expertise, I specialize in delivering tailored software
//               solutions for diverse clientele, spanning from individuals and
//               small businesses to large enterprise corporations. Imagine having
//               an expert software partner readily accessible, empowering you to
//               unlock the full potential of your ideas.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full lg:h-screen px-32 md:fit-screen md:py-16 text-black"
    >
      {/* Increase the padding top to create more space */}
      <div className="pt-16 flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1300px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-black font-headfont">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="lg:text-left sm:text-right text-4xl font-bold">
            <p>Hi. I'm Venkat Reddy Katkoor, nice to meet you.</p>
          </div>
          <div>
            <p className="text-2xl">
              I am a dedicated software professional driven by a passion for
              crafting exceptional solutions that positively impact lives. With
              my expertise, I specialize in delivering tailored software
              solutions for diverse clientele, spanning from individuals and
              small businesses to large enterprise corporations. Imagine having
              an expert software partner readily accessible, empowering you to
              unlock the full potential of your ideas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
