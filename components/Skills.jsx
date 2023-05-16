import React from "react";
import Image from "next/image";

export const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="py-4">Skills</h2>
        {/* SKILL SUBHEADER: LANGUAGES */}
        <p className="uppercase tracking-widest text-[#5C6CFF] py-4">
          Languages
        </p>
        {/* GRID SETTINGS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* JAVASCRIPT SKILL */}
          <div className="p-6 shadow-md rounded-xl border-2 border-[#84FFC9] hover:scale-110 ease-in duration-300">
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

          {/* HTML SKILL */}
          <div className="p-6 shadow-md rounded-xl border-2 border-[#AAB2FF] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/html-logo.png"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">HTML</h3>
              </div>
            </div>
          </div>

          {/* CSS SKILL */}
          <div className="p-6 shadow-md rounded-xl border-2 border-[#ECA0FF] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/css-logo.png"
                  alt="/"
                  width="45"
                  height="45"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">CSS</h3>
              </div>
            </div>
          </div>

          {/* RUBY SKILL */}
          <div className="p-6 shadow-md rounded-xl border-2 border-[#84FFC9] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/ruby-logo.png"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">RUBY</h3>
              </div>
            </div>
          </div>
          
          {/* SQL SKILL */}
          <div className="p-10 shadow-md rounded-xl border-2 border-[#AAB2FF] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/sql-logo.png"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">SQL</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
