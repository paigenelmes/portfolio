import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase tracking-widest text-[#5C6CFF]">
            Allow me to introduce myself
          </p>
          <h2 className="py-4">About Me</h2>
          <p className="py-2 text-[#5C5A5E]">
            CHANGE THIS LATER. I am a Lighthouse Labs graduate with a background
            in Graphic Design. A detail-oriented problem solver who specializes
            in visual aesthetics. Passionate about creating projects that run
            smoothly and look beautiful.
          </p>
          <p className="py-2 text-[#5C5A5E]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vulputate felis eu felis accumsan, sed finibus metus dictum.
            Suspendisse eget ornare eros. In fringilla, dui eget efficitur
            luctus, erat lacus pharetra nunc, vitae mattis nisi magna vel quam.
            Integer eu turpis elit. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Mauris sed eros at sapien
            venenatis lobortis a eget risus. Vivamus porttitor ipsum ut sapien
            consectetur tincidunt. Donec ultrices, ligula eget commodo luctus,
            ante leo tempus nunc, eget suscipit diam diam non eros. Curabitur et
            neque eros.
          </p>
          <p className="py-2 text-[#5C6CFF] underline cursor-pointer">
            Check out some of my recent projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-md shadow-gray-300 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/../public/about/paige-profile-600x600.jpg"
            width="600"
            height="600"
            alt="Paige Profile Pic"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default About;
