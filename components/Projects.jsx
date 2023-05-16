import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase tracking-widest text-[#5C6CFF]">
          What I&apos;ve been Building Lately
        </p>
        <h2 className="py-4">Projects</h2>
        {/* GRID SETTINGS FOR PROJECTS */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* CONTAINER FOR PROJECT ITEMS */}
          <div className="relative flex items-center justify-center h-auto w-full shadow-md shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-t from-[#84FFC9] via-[#AAB2FF] to-[#ECA0FF]">
            {/* SIFTER PROJECT */}
            <Image
              className="rounded-xl group-hover:opacity-5"
              src="/../public/projects/sifter-project.png"
              alt="Sifter Project"
              width="800"
              height="600"
            />
            {/* TEXT & LINK ON HOVER */}
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Sifter
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                Sifter is a recipe HTML parser that returns a formatted recipe
                card from a user-provided URL.
              </p>
              <Link href="/">
                <p className="text-center py-3 rounded-lg bg-white text-[#363537] font-bold text-lg cursor-pointer">
                  View Project
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
