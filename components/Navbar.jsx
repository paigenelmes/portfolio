import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

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
        <Link href="/">
          <img
            src="https://raw.githubusercontent.com/paigenelmes/portfolio/main/public/pn-logo-500x338.png"
            alt="/"
            width="125"
            height="85"
          ></img>
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-med uppercase hover:text-[#5C6CFF]">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-med uppercase hover:text-[#5C6CFF]">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-med uppercase hover:text-[#5C6CFF]">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-med uppercase hover:text-[#5C6CFF]">
                Projects
              </li>
            </Link>
            <Link href="/#design">
              <li className="ml-10 text-med uppercase hover:text-[#5C6CFF]">
                Graphic Design
              </li>
            </Link>
            <Link href="/#contact">
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
              <Link href="/">
                <img
                  src="https://raw.githubusercontent.com/paigenelmes/portfolio/main/public/pn-logo-500x338.png"
                  alt="/"
                  width="125"
                  height="85"
                ></img>
              </Link>
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
                <li onClick={() => setNav(false)} className="py-4 text-med">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-med">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-med">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-med">
                  Projects
                </li>
              </Link>
              <Link href="/#design">
                <li onClick={() => setNav(false)} className="py-4 text-med">
                  Graphic Design
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-med">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
