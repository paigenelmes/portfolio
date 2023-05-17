import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  //State for nav, default false
  const [nav, setNav] = useState(false);

  //Function to toggle nav
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-35 shadow-md z-[100] bg-white">
      <div className="flex justify-between items-center w-full h-full px-12 2xl:px-16 mt-3 mb-3">
        <Image
          src="/../public/pn-logo-500x338.png"
          alt="/"
          width="125"
          height="85"
        ></Image>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-med uppercase hover:text-[#5C6CFF]">
                Home
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-med uppercase hover:text-[#5C6CFF]">
                About
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-med uppercase hover:text-[#5C6CFF]">
                Skills
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-med uppercase hover:text-[#5C6CFF]">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-med uppercase hover:text-[#5C6CFF]">
                Graphic Design
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-med uppercase hover:text-[#5C6CFF]">
                Contact
              </li>
            </Link>
          </ul>
          {/* Toggle nav when clicking mobile menu button */}
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25}></AiOutlineMenu>
          </div>
        </div>
      </div>

      {/* MOBILE NAV */}
      {/* If nav is true, set background overlay. Otherwise add no styling. */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Show sidebar if nav is true */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500"
              : "fixed left-[-200%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/pn-logo-500x338.png"
                width="83"
                height="46"
                alt="/"
              />
              {/* Toggle nav when clicking close button */}
              <div
                onClick={handleNav}
                className="rounded-full shadow-md shadow-gray-300 p-3 cursor-pointer"
              >
                <AiOutlineClose></AiOutlineClose>
              </div>
            </div>
            <div className="border-b border-[#AAB2FF] my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Paige Nelmes | Full Stack Developer
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-med">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-med">About</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-med">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-med">Projects</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-med">Graphic Design</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-med">Contact</li>
              </Link>
            </ul>
            <div className="pt-20">
              <p className="uppercase tracking-widest text-[#5C6CFF]">
                Get in Touch
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer bg-gradient-to-t from-[#84FFC9] via-[#AAB2FF] to-[#ECA0FF] hover:scale-110 ease-in duration-300">
                  <FaLinkedinIn className="fill-white"></FaLinkedinIn>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer bg-gradient-to-t from-[#84FFC9] via-[#AAB2FF] to-[#ECA0FF] hover:scale-110 ease-in duration-300">
                  <FaGithub className="fill-white"></FaGithub>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer bg-gradient-to-t from-[#84FFC9] via-[#AAB2FF] to-[#ECA0FF] hover:scale-110 ease-in duration-300">
                  <AiOutlineMail className="fill-white"></AiOutlineMail>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer bg-gradient-to-t from-[#84FFC9] via-[#AAB2FF] to-[#ECA0FF] hover:scale-110 ease-in duration-300">
                  <BsFillPersonLinesFill className="fill-white"></BsFillPersonLinesFill>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
