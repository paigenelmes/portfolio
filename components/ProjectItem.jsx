import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectItem = ({title, backgroundImage, projectURL}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-md shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-t from-[#84FFC9] via-[#AAB2FF] to-[#ECA0FF]">
    {/* PROJECT */}
    <Image
      className="rounded-xl group-hover:opacity-5"
      src={backgroundImage}
      alt="Sifter Project"
      width="800"
      height="600"
    />
    {/* TEXT & LINK ON HOVER */}
    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <h3 className="uppercase text-2xl text-white tracking-wider text-center">
        {title}
      </h3>
      <p className="pb-4 pt-2 text-white text-center">
        Sifter is a recipe HTML parser that returns a formatted recipe
        card from a user-provided URL.
      </p>
      <p className="pb-4 pt-2 text-white text-center">
      <strong>Tech stack:</strong> React, NextJS, MUI, Supabase, Vercel
      </p>
      <Link href={projectURL}>
        <p className="text-center py-3 rounded-lg bg-white text-[#363537] font-bold text-lg cursor-pointer">
          View Project
        </p>
      </Link>
    </div>
  </div>
  )
}

export default ProjectItem;