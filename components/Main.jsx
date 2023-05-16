import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Main() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase tracking-widest text-[#5C6CFF]">
            NICE TO MEET YOU
          </p>
          <h1 className="py-4 text-[#363537]">
            My name is{" "}
            <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-t from-[#84FFC9] via-[#AAB2FF] to-[#ECA0FF]">
              Paige
            </span>
          </h1>
          <h1 className="py-4 text-[#363537]">I&apos;m a Full Stack Developer</h1>
          <p className="py-2 text-[#5C5A5E] max-w-[70%] m-auto">
            I am a Lighthouse Labs graduate with a background in Graphic Design.
            A detail-oriented problem solver who specializes in visual
            aesthetics. Passionate about creating projects that run smoothly and
            look beautiful.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-6">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer bg-gradient-to-t from-[#84FFC9] via-[#AAB2FF] to-[#ECA0FF] hover:scale-150 ease-in duration-300">
              <FaLinkedinIn className="fill-white scale-125"></FaLinkedinIn>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer bg-gradient-to-t from-[#84FFC9] via-[#AAB2FF] to-[#ECA0FF] hover:scale-150 ease-in duration-300">
              <FaGithub className="fill-white scale-125"></FaGithub>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer bg-gradient-to-t from-[#84FFC9] via-[#AAB2FF] to-[#ECA0FF] hover:scale-150 ease-in duration-300">
              <AiOutlineMail className="fill-white scale-125"></AiOutlineMail>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer bg-gradient-to-t from-[#84FFC9] via-[#AAB2FF] to-[#ECA0FF] hover:scale-150 ease-in duration-300">
              <BsFillPersonLinesFill className="fill-white scale-125"></BsFillPersonLinesFill>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
