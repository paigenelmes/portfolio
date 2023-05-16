import React from "react";
import Image from "next/image";

export const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase tracking-widest text-[#5C6CFF]">
          Here&apos;s what I can do
        </p>
        <h2 className="py-4">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* JAVASCRIPT SKILL */}
          <div className="p-6 shadow-md rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/javascript-logo.png"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">JavaScript</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
