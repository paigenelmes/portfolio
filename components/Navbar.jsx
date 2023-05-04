import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed w-full h-35 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 mt-3 mb-3">
        <Image
          src="/../public/pn-logo-500x338.png"
          alt="/"
          width="125"
          height="85"
        ></Image>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-med uppercase hover:text-[#AAB2FF]">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-med uppercase hover:text-[#AAB2FF]">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-med uppercase hover:text-[#AAB2FF]">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-med uppercase hover:text-[#AAB2FF]">Projects</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-med uppercase hover:text-[#AAB2FF]">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
