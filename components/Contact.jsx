import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Contact() {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="uppercase tracking-widest text-[#5C6CFF]">
          Let&apos;s Connect
        </p>
        <h2 className="py-4">Contact</h2>
        {/* CONTACT SECTION GRID */}
        <div className="grid lg:grid-cols-5 gap-10">
          {/* LEFT SIDE */}
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
              <div>
                <h2 className="pt-4 pb-2 text-[#363537] text-center">
                  Paige Nelmes
                </h2>
                <h4 className="text-[#5C6CFF] uppercase tracking-wider text-center">
                  Full Stack Developer
                </h4>
                <p className="text-[#363537] text-center py-4">
                  Open to freelance or full-time opportunities. <br /> Contact
                  me and let&apos;s chat!
                </p>
              </div>
              <div>
                <div>
                  <div className="flex items-center justify-evenly m-auto py-4">
                    <div className="rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer bg-gradient-to-t from-[#84FFC9] via-[#AAB2FF] to-[#ECA0FF] hover:scale-150 ease-in duration-300">
                      <FaLinkedinIn className="fill-white scale-125"></FaLinkedinIn>
                    </div>
                    <div className="rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer bg-gradient-to-t from-[#84FFC9] via-[#AAB2FF] to-[#ECA0FF] hover:scale-150 ease-in duration-300">
                      <FaGithub className="fill-white scale-125"></FaGithub>
                    </div>
                    <div className="rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer bg-gradient-to-t from-[#84FFC9] via-[#AAB2FF] to-[#ECA0FF] hover:scale-150 ease-in duration-300">
                      <AiOutlineMail className="fill-white scale-125"></AiOutlineMail>
                    </div>
                    <div className="rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer bg-gradient-to-t from-[#84FFC9] via-[#AAB2FF] to-[#ECA0FF] hover:scale-150 ease-in duration-300">
                      <BsFillPersonLinesFill className="fill-white scale-125"></BsFillPersonLinesFill>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div className="col-span-3 border-2 border-gray-300 w-full h-auto shadow-md shadow-gray-300 rounded-xl lg:p-4">
              <div className="p-4">
              {/* CONTACT FORM */}
                <form>
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label className="text-sm uppercase py-2">Name</label>
                      <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text"></input>
                    </div>
                  </div>
                </form>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
