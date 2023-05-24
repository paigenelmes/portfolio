import React from "react";
import Image from "next/image";

export const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-auto p-10 pt-30">
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
                <img
                  src="https://raw.githubusercontent.com/paigenelmes/portfolio/main/public/skills/javascript-logo.png"
                  alt="JavaScript"
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
                <img
                  src="https://raw.githubusercontent.com/paigenelmes/portfolio/main/public/skills/html-logo.png"
                  alt="HTML"
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
                <img
                  src="https://raw.githubusercontent.com/paigenelmes/portfolio/main/public/skills/css-logo.png"
                  alt="CSS"
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
                <img
                  src="https://raw.githubusercontent.com/paigenelmes/portfolio/main/public/skills/ruby-logo.png"
                  alt="Ruby"
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
                <img
                  src="https://raw.githubusercontent.com/paigenelmes/portfolio/main/public/skills/sql-logo.png"
                  alt="SQL"
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
          <div className="p-9 shadow-md rounded-xl border-2 border-[#84FFC9] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="https://raw.githubusercontent.com/paigenelmes/portfolio/main/public/skills/react-logo.png"
                  alt="React"
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
          <div className="p-11 shadow-md rounded-xl border-2 border-[#AAB2FF] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="https://raw.githubusercontent.com/paigenelmes/portfolio/main/public/skills/nextjs-logo.png"
                  alt="NextJS"
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
          <div className="p-9 shadow-md rounded-xl border-2 border-[#ECA0FF] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="https://raw.githubusercontent.com/paigenelmes/portfolio/main/public/skills/node-js-logo.png"
                  alt="NodeJS"
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
          <div className="p-8 shadow-md rounded-xl border-2 border-[#84FFC9] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="https://raw.githubusercontent.com/paigenelmes/portfolio/main/public/skills/tailwind-logo.png"
                  alt="Tailwind CSS"
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
          <div className="p-8 shadow-md rounded-xl border-2 border-[#AAB2FF] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="https://raw.githubusercontent.com/paigenelmes/portfolio/main/public/skills/mui-logo.png"
                  alt="MUI"
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
          <div className="p-10 shadow-md rounded-xl border-2 border-[#ECA0FF] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="https://raw.githubusercontent.com/paigenelmes/portfolio/main/public/skills/rails-logo.png"
                  alt="Rails"
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
          <div className="p-9 shadow-md rounded-xl border-2 border-[#84FFC9] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="https://raw.githubusercontent.com/paigenelmes/portfolio/main/public/skills/express-logo.png"
                  alt="Express"
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
          <div className="p-9 shadow-md rounded-xl border-2 border-[#AAB2FF] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="https://raw.githubusercontent.com/paigenelmes/portfolio/main/public/skills/ajax-logo.png"
                  alt="Ajax"
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
          <div className="p-9 shadow-md rounded-xl border-2 border-[#ECA0FF] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="https://raw.githubusercontent.com/paigenelmes/portfolio/main/public/skills/ejs-logo.png"
                  alt="EJS"
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
                <img
                  src="https://raw.githubusercontent.com/paigenelmes/portfolio/main/public/skills/axios-logo.png"
                  alt="Axios"
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
          <div className="p-11 shadow-md rounded-xl border-2 border-[#AAB2FF] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="https://raw.githubusercontent.com/paigenelmes/portfolio/main/public/skills/jquery-logo.png"
                  alt="JQuery"
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
                <img
                  src="https://raw.githubusercontent.com/paigenelmes/portfolio/main/public/skills/git-logo.png"
                  alt="Git"
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
                <img
                  src="https://raw.githubusercontent.com/paigenelmes/portfolio/main/public/skills/postgresql-logo.png"
                  alt="PostgreSQL"
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
        {/* SKILL SUBHEADER: TESTING */}
        <p className="uppercase tracking-widest text-[#5C6CFF] py-6">Testing</p>
        {/* GRID SETTINGS FOR TESTING */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* JEST SKILL */}
          <div className="p-8 shadow-md rounded-xl border-2 border-[#84FFC9] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="https://raw.githubusercontent.com/paigenelmes/portfolio/main/public/skills/jest-logo.png"
                  alt="Jest"
                  width="55"
                  height="55"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">Jest</h3>
              </div>
            </div>
          </div>

          {/* CYPRESS SKILL */}
          <div className="p-8 shadow-md rounded-xl border-2 border-[#AAB2FF] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="https://raw.githubusercontent.com/paigenelmes/portfolio/main/public/skills/cypress-logo.png"
                  alt="Cypress"
                  width="90"
                  height="90"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">Cypress</h3>
              </div>
            </div>
          </div>
          {/* STORYBOOK SKILL */}
          <div className="p-11 shadow-md rounded-xl border-2 border-[#ECA0FF] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="https://raw.githubusercontent.com/paigenelmes/portfolio/main/public/skills/storybook-logo.png"
                  alt="Storybook"
                  width="100"
                  height="100"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">Storybook</h3>
              </div>
            </div>
          </div>
        </div>
        {/* SKILL SUBHEADER: GRAPHIC DESIGN */}
        <p className="uppercase tracking-widest text-[#5C6CFF] py-6">
          Graphic Design
        </p>
        {/* GRID SETTINGS FOR GRAPHIC DESIGN */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* PHOTOSHOP SKILL */}
          <div className="p-8 shadow-md rounded-xl border-2 border-[#84FFC9] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="https://raw.githubusercontent.com/paigenelmes/portfolio/main/public/skills/photoshop-logo.png"
                  alt="Photoshop"
                  width="48"
                  height="48"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">Photoshop</h3>
              </div>
            </div>
          </div>
          {/* ILLUSTRATOR SKILL */}
          <div className="p-8 shadow-md rounded-xl border-2 border-[#AAB2FF] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="https://raw.githubusercontent.com/paigenelmes/portfolio/main/public/skills/illustator-logo.png"
                  alt="Illustrator"
                  width="48"
                  height="48"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">Illustrator</h3>
              </div>
            </div>
          </div>
          {/* INDESIGN SKILL */}
          <div className="p-8 shadow-md rounded-xl border-2 border-[#ECA0FF] hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="https://raw.githubusercontent.com/paigenelmes/portfolio/main/public/skills/indesign-logo.png"
                  alt="InDesign"
                  width="48"
                  height="48"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">InDesign</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
