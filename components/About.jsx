import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-10 pt-64 md:pt-32 flex items-center">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase tracking-widest text-[#5C6CFF]">
            Nice to meet you
          </p>
          <h2 className="py-4">About Me</h2>
          <p className="py-2 text-[#5C5A5E]">
            I have always been interested in technology and creative pursuits. I
            earned a Graphic Design diploma from UFV in 2016 and have been
            working in the industry ever since. While working as a Graphic
            Designer, I dipped my toe into the world of web design. I learned
            some CSS and front-end development on the job. It was fun, but I
            wanted to dive deeper!
          </p>
          <p className="py-2 text-[#5C5A5E]">
            In 2022, I decided to expand my skillset and learn how to code. So I
            signed up for the Lighthouse Labs Web Development program and got to
            work! I learned so much and met a lot of amazing people. After
            graduation, I wanted to keep learning new technology, so I built
            this website with NextJS and Tailwind. I&apos;m so excited for this
            new chapter in my career. I plan to keep on learning and creating,
            every day!
          </p>
          <Link href="/#projects">
            <p className="py-2 text-[#5C6CFF] underline cursor-pointer">
              Check out some of my recent projects.
            </p>
          </Link>
        </div>
        <div className="w-full py-4 h-auto m-auto flex items-center justify-center hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://raw.githubusercontent.com/paigenelmes/portfolio/main/public/about/paige-profile-600x600.jpg"
            width="600"
            height="600"
            alt="Paige Profile Pic"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
