import React from "react";
import ProjectItem from "./ProjectItem";
import sifterImage from "../public/projects/sifter-project.png";
import schedulerImage from "../public/projects/scheduler-project.png";
import myVaultImage from "../public/projects/myvault-project.png";
import tweeterImage from "../public/projects/tweeter-project.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full p-10 pt-30">
      <div className="max-w-[1240px] mx-auto">
        <p className="uppercase tracking-widest text-[#5C6CFF]">
          What I&apos;ve been Building Lately
        </p>
        <h2 className="pt-4 pb-8">Projects</h2>
        {/* GRID SETTINGS FOR PROJECTS */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* SIFTER PROJECT */}
          <ProjectItem
            title="Sifter"
            backgroundImage={sifterImage}
            projectURL="https://github.com/paigenelmes/Sifter"
            description="A recipe parser app. Created by Cassandra Keddis, Chelsea Dwarika, Liam Naylor and Paige Nelmes."
            stack="Tech stack: React, NextJS, MUI, Supabase, Vercel"
          ></ProjectItem>
              {/* SCHEDULER PROJECT */}
              <ProjectItem
              title="Scheduler"
              backgroundImage={schedulerImage}
              projectURL="https://github.com/paigenelmes/scheduler"
              description="A single-page app that allows users to book interviews."
              stack="Tech stack: React, Axios, Storybook, Jest, Cypress"
            ></ProjectItem>
          {/* MYVAULT PROJECT */}
          <ProjectItem
            title="MyVault"
            backgroundImage={myVaultImage}
            projectURL="https://github.com/paigenelmes/myvault"
            description="A simple password manager. Created by Alric Fernandes, Sarah Campbell, John Ross and Paige Nelmes."
            stack="Tech Stack: JS, HTML, CSS, Sass, JSON, Bootstrap, PostgreSQL, Express, jQuery"
          ></ProjectItem>
          {/* TWEETER PROJECT */}
          <ProjectItem
            title="Tweeter"
            backgroundImage={tweeterImage}
            projectURL="https://github.com/paigenelmes/tweeter"
            description="A simple, single-page Twitter clone with a responsive layout."
            stack="Tech Stack: HTML, CSS, JS, jQuery, Ajax"
          ></ProjectItem>
        </div>
      </div>
    </div>
  );
};

export default Projects;
