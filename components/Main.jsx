import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import Link from "next/link";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center p-10 pt-64 md:pt-44">
        <div>
          <p className="uppercase tracking-widest text-[#5C6CFF]">
            Hello there
          </p>
          <h1 className="py-4 text-[#363537]">
            My name is{" "}
            <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-t from-[#84FFC9] via-[#AAB2FF] to-[#ECA0FF]">
              Paige
            </span>
          </h1>
          <h1 className="py-4 text-[#363537]">
            I&apos;m a Full Stack Developer
          </h1>
          <p className="py-2 text-[#5C5A5E] max-w-[70%] m-auto">
            I am a Lighthouse Labs graduate with a background in Graphic Design.
            A detail-oriented problem solver who specializes in visual
            aesthetics. Passionate about creating projects that run smoothly and
            look beautiful.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-6">
            <Link
              href="https://www.linkedin.com/in/pnelmes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer bg-gradient-to-t from-[#84FFC9] via-[#AAB2FF] to-[#ECA0FF] hover:scale-150 ease-in duration-300">
                <FaLinkedinIn className="fill-white scale-125"></FaLinkedinIn>
              </div>
            </Link>
            <Link
              href="https://github.com/paigenelmes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer bg-gradient-to-t from-[#84FFC9] via-[#AAB2FF] to-[#ECA0FF] hover:scale-150 ease-in duration-300">
                <FaGithub className="fill-white scale-125"></FaGithub>
              </div>
            </Link>
            <Link
              href="https://www.facebook.com/pnelmes.webdev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer bg-gradient-to-t from-[#84FFC9] via-[#AAB2FF] to-[#ECA0FF] hover:scale-150 ease-in duration-300">
                <FaFacebookF className="fill-white scale-125"></FaFacebookF>
              </div>
            </Link>
            <a
              href="mailto:pnelmes.webdev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer bg-gradient-to-t from-[#84FFC9] via-[#AAB2FF] to-[#ECA0FF] hover:scale-150 ease-in duration-300">
                <AiOutlineMail className="fill-white scale-125"></AiOutlineMail>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
