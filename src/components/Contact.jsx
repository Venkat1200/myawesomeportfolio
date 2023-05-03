import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen  flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/bdd41285-14cd-4605-8e8b-c8877c0e9683"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black text-zinc-950">
            Contact
          </p>
          <p className="text-2xl text-zinc-950 py-4">
            Submit the form below or shoot me an email - katkoorv@gmail.com
          </p>
        </div>
        <input
          className="bg-[#868383] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#868383]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#868383] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-zinc-950 border-2 hover:bg-gray-500 hover:border-black px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
