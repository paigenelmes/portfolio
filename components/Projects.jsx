import React from "react";
import ProjectItem from "./ProjectItem";
import sifterImage from "../public/projects/sifter-project.png";
import schedulerImage from "../public/projects/scheduler-project.png";
import myVaultImage from "../public/projects/myvault-project.png";
import tweeterImage from "../public/projects/tweeter-project.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase tracking-widest text-[#5C6CFF]">
          What I&apos;ve been Building Lately
        </p>
        <h2 className="pt-4 pb-8">Projects</h2>
        {/* GRID SETTINGS FOR PROJECTS */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* SIFTER PROJECT...NOTE: FORK & LINK TO GITHUB, TRIAL IS OVER */}
          <ProjectItem
            title="Sifter"
            backgroundImage={sifterImage}
            projectURL="https://lighthouse-sifter.vercel.app/login"
            description="Sifter is a recipe HTML parser that returns a formatted recipe
            card from a user-provided URL."
            stack="Tech stack: React, NextJS, MUI, Supabase, Vercel"
          ></ProjectItem>
              {/* SCHEDULER PROJECT */}
              <ProjectItem
              title="Scheduler"
              backgroundImage={schedulerImage}
              projectURL="https://github.com/paigenelmes/scheduler"
              description="Scheduler is a single-page app that allows users to book interviews."
              stack="Tech stack: React, Axios, Storybook, Jest, Cypress"
            ></ProjectItem>
          {/* MYVAULT PROJECT...NOTE: FORK & UPDATE GITHUB URL LATER */}
          <ProjectItem
            title="MyVault"
            backgroundImage={myVaultImage}
            projectURL="https://github.com/alricf/node-skeleton"
            description="MyVault is a password manager that organizes all your passwords and keeps your sensitive info safe."
            stack="Tech Stack: JS, HTML, CSS, Sass, JSON, Bootstrap, PostgreSQL, Express, jQuery"
          ></ProjectItem>
          {/* TWEETER PROJECT */}
          <ProjectItem
            title="Tweeter"
            backgroundImage={tweeterImage}
            projectURL="https://github.com/paigenelmes/tweeter"
            description="Tweeter is a simple, single-page Twitter clone with a responsive layout."
            stack="Tech Stack: HTML, CSS, JS, jQuery, Ajax"
          ></ProjectItem>
        </div>
      </div>
    </div>
  );
};

export default Projects;
