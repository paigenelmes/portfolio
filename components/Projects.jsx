import React from "react";
import ProjectItem from "./ProjectItem";
import sifterImage from "../public/projects/sifter-project.png";
import schedulerImage from "../public/projects/scheduler-project.png";
import myVaultImage from "../public/projects/myvault-project.png";
import tweeterImage from "../public/projects/tweeter-project.png";

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
          {/* SIFTER PROJECT...NOTE: MAY WANT TO FORK & LINK TO GITHUB INSTEAD? */}
          <ProjectItem
            title="Sifter"
            backgroundImage={sifterImage}
            projectURL="https://lighthouse-sifter.vercel.app/login"
          ></ProjectItem>
              {/* SCHEDULER PROJECT */}
              <ProjectItem
              title="Scheduler"
              backgroundImage={schedulerImage}
              projectURL="https://github.com/paigenelmes/scheduler"
            ></ProjectItem>
          {/* MYVAULT PROJECT...NOTE: FORK & UPDATE GITHUB URL LATER */}
          <ProjectItem
            title="MyVault"
            backgroundImage={myVaultImage}
            projectURL="https://github.com/alricf/node-skeleton"
          ></ProjectItem>
          {/* TWEETER PROJECT */}
          <ProjectItem
            title="Tweeter"
            backgroundImage={tweeterImage}
            projectURL="https://github.com/paigenelmes/tweeter"
          ></ProjectItem>
        </div>
      </div>
    </div>
  );
};

export default Projects;
