import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full">
      <div
        name="contact"
        className="w-full h-screen  flex justify-center items-center p-4 "
      >
        <form
          method="POST"
          action="https://getform.io/f/bdd41285-14cd-4605-8e8b-c8877c0e9683"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-headfont   font-bold inline border-b-4 border-black text-zinc-950">
              Contact
            </p>
            <p className="text-2xl text-zinc-950 py-4">
              Submit the form below or shoot me an email - katkoorv@gmail.com
            </p>
          </div>
          <input
            className="bg-[#868383] p-2 hover:bg-white"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#868383] hover:bg-white"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#868383] hover:bg-white p-2"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="text-zinc-950 border-2 hover:bg-gray-500 hover:border-black hover:text-white px-4 py-3 my-8 mx-auto flex items-center">
            Let's Collaborate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
