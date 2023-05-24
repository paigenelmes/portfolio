import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

function Contact() {
  return (
    <div id="contact" className="w-full lg:h-screen p-10">
      <div className="max-w-[1240px] m-auto w-full">
        <p className="uppercase tracking-widest text-[#5C6CFF]">
          Let&apos;s Connect
        </p>
        <h2 className="py-4">Contact</h2>
        {/* CONTACT SECTION GRID */}
        <div className="grid lg:grid-cols-5 gap-10">
          {/* LEFT SIDE, CARTOON IMAGE */}
          <div className="border-2 border-gray-300 col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-gray-300 rounded-xl p-2 bg-white">
            <div className="lg:p-2 h-full">
              <div>
                <Image
                  className="rounded-xl"
                  src="/../public/about/me-noborder.png"
                  width="600"
                  height="600"
                  alt="Paige Cartoon Pic"
                ></Image>
              </div>
            </div>
          </div>
          {/* RIGHT SIDE, EMAIL BUTTON AND SOCIAL LINKS */}
          <div className="col-span-3 border-2 border-gray-300 w-full h-auto shadow-md shadow-gray-300 rounded-xl p-10">
            <div>
              <div className="flex items-center justify-evenly m-auto pb-10">
                <Link
                  href="https://www.linkedin.com/in/pnelmes/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer bg-gradient-to-t from-[#84FFC9] via-[#AAB2FF] to-[#ECA0FF] hover:scale-150 ease-in duration-300">
                    <FaLinkedinIn className="fill-white scale-125"></FaLinkedinIn>
                  </div>
                </Link>
                <Link
                  href="https://github.com/paigenelmes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer bg-gradient-to-t from-[#84FFC9] via-[#AAB2FF] to-[#ECA0FF] hover:scale-150 ease-in duration-300">
                    <FaGithub className="fill-white scale-125"></FaGithub>
                  </div>
                </Link>
                <Link
                  href="https://www.facebook.com/pnelmes.webdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer bg-gradient-to-t from-[#84FFC9] via-[#AAB2FF] to-[#ECA0FF] hover:scale-150 ease-in duration-300">
                    <FaFacebookF className="fill-white scale-125"></FaFacebookF>
                  </div>
                </Link>
                <a
                  href="mailto:pnelmes.webdev@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer bg-gradient-to-t from-[#84FFC9] via-[#AAB2FF] to-[#ECA0FF] hover:scale-150 ease-in duration-300">
                    <AiOutlineMail className="fill-white scale-125"></AiOutlineMail>
                  </div>
                </a>
              </div>
              <h2 className="text-[#5C6CFF] uppercase tracking-wider text-center">
                Paige Nelmes
              </h2>
              <h2 className="text-[#363537] text-center py-4">
                Full Stack Developer
              </h2>
              <p className="text-[#363537] text-center text-lg py-2">
                Open to freelance or full-time opportunities. <br /> Contact me
                and let&apos;s chat!
              </p>
              <div className="flex justify-center py-4">
                <a
                  href="mailto:pnelmes.webdev@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-xl cursor-pointer p-4 text-white text-xl text-center shadow-md shadow-gray-300 rounded-xl uppercase bg-gradient-to-r from-[#84FFC9] via-[#AAB2FF] to-[#ECA0FF] hover:scale-125 ease-in duration-300"
                >
                  <strong>Send Me an Email</strong>
                </a>
              </div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer bg-gradient-to-t from-[#84FFC9] via-[#AAB2FF] to-[#ECA0FF] hover:scale-125 ease-in duration-300">
              <HiOutlineChevronDoubleUp
                size={30}
                className="text-white"
              ></HiOutlineChevronDoubleUp>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
