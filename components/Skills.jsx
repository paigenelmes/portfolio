import React from "react";
import Image from "next/image";

export const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="py-4">Skills</h2>
        {/* SKILL SUBHEADER: LANGUAGES */}
        <p className="uppercase tracking-widest text-[#5C6CFF] py-6">
          Languages
        </p>
        {/* GRID SETTINGS FOR LANGUAGES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* JAVASCRIPT SKILL */}
          <div className="p-8 shadow-md rounded-xl border-2 border-[#84FFC9] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/javascript-logo.png"
                  alt="/"
                  width="48"
                  height="48"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">JavaScript</h3>
              </div>
            </div>
          </div>

          {/* HTML SKILL */}
          <div className="p-8 shadow-md rounded-xl border-2 border-[#AAB2FF] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/html-logo.png"
                  alt="/"
                  width="48"
                  height="48"
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
                  width="40"
                  height="40"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">CSS</h3>
              </div>
            </div>
          </div>

          {/* RUBY SKILL */}
          <div className="p-8 shadow-md rounded-xl border-2 border-[#84FFC9] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/ruby-logo.png"
                  alt="/"
                  width="48"
                  height="48"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">Ruby</h3>
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
        {/* SKILL SUBHEADER: LIBRARIES/FRAMEWORKS */}
        <p className="uppercase tracking-widest text-[#5C6CFF] py-6">
          Libraries &amp; Frameworks
        </p>
        {/* GRID SETTINGS FOR LIBRARIES/FRAMEWORKS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* REACT SKILL */}
          <div className="p-8 shadow-md rounded-xl border-2 border-[#84FFC9] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/react-logo.png"
                  alt="/"
                  width="48"
                  height="48"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">React</h3>
              </div>
            </div>
          </div>
          {/* NEXTJS SKILL */}
          <div className="p-10 shadow-md rounded-xl border-2 border-[#AAB2FF] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/nextjs-logo.png"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">NextJS</h3>
              </div>
            </div>
          </div>
          {/* NODEJS SKILL */}
          <div className="p-8 shadow-md rounded-xl border-2 border-[#ECA0FF] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/node-js-logo.png"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">NodeJS</h3>
              </div>
            </div>
          </div>
          {/* TAILWIND SKILL */}
          <div className="p-7 shadow-md rounded-xl border-2 border-[#84FFC9] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/tailwind-logo.png"
                  alt="/"
                  width="48"
                  height="48"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">Tailwind CSS</h3>
              </div>
            </div>
          </div>
          {/* MUI SKILL */}
          <div className="p-7 shadow-md rounded-xl border-2 border-[#AAB2FF] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/mui-logo.png"
                  alt="/"
                  width="48"
                  height="48"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">MUI</h3>
              </div>
            </div>
          </div>
          {/* RAILS SKILL */}
          <div className="p-9 shadow-md rounded-xl border-2 border-[#ECA0FF] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/rails-logo.png"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">Rails</h3>
              </div>
            </div>
          </div>
          {/* EXPRESS SKILL */}
          <div className="p-8 shadow-md rounded-xl border-2 border-[#84FFC9] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/express-logo.png"
                  alt="/"
                  width="100"
                  height="100"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">Express</h3>
              </div>
            </div>
          </div>
          {/* AJAX SKILL */}
          <div className="p-8 shadow-md rounded-xl border-2 border-[#AAB2FF] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/ajax-logo.png"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">Ajax</h3>
              </div>
            </div>
          </div>
          {/* EJS SKILL */}
          <div className="p-8 shadow-md rounded-xl border-2 border-[#ECA0FF] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/ejs-logo.png"
                  alt="/"
                  width="34"
                  height="34"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">EJS</h3>
              </div>
            </div>
          </div>
          {/* AXIOS SKILL */}
          <div className="p-10 shadow-md rounded-xl border-2 border-[#84FFC9] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/axios-logo.png"
                  alt="/"
                  width="100"
                  height="100"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">Axios</h3>
              </div>
            </div>
          </div>
          {/* JQUERY SKILL */}
          <div className="p-10 shadow-md rounded-xl border-2 border-[#AAB2FF] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/jquery-logo.png"
                  alt="/"
                  width="90"
                  height="90"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">JQuery</h3>
              </div>
            </div>
          </div>
        </div>
        {/* SKILL SUBHEADER: SYSTEMS/DATABASES */}
        <p className="uppercase tracking-widest text-[#5C6CFF] py-6">
          Systems &amp; Databases
        </p>
        {/* GRID SETTINGS FOR SYSTEMS/DATABASES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* GIT SKILL */}
          <div className="p-10 shadow-md rounded-xl border-2 border-[#84FFC9] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/git-logo.png"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">Git</h3>
              </div>
            </div>
          </div>
            {/* POSTGRESQL SKILL */}
            <div className="p-8 shadow-md rounded-xl border-2 border-[#AAB2FF] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/postgresql-logo.png"
                  alt="/"
                  width="48"
                  height="48"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">PostgreSQL</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
