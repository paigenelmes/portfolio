import React from "react";
import DesignItem from "./DesignItem";
import simmerImage from "../public/design/simmer-co-main-logo-square.jpg";
import crowImage from "../public/design/scruffy-crow-square.jpg";
import simplicityImage from "../public/design/simplicity-virtual-circle-final.jpg";

const Design = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16 ">
        <p className="uppercase tracking-widest text-[#5C6CFF]">
          Logos I&apos;ve made lately
        </p>
        <h2 className="pt-4 pb-8">Graphic Design</h2>
        {/* GRID SETTINGS FOR GRAPHIC DESIGN */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {/* SIMMER & CO LOGO */}
          <DesignItem backgroundImage={simmerImage}></DesignItem>
          {/* SCRUFFY CROW LOGO */}
          <DesignItem backgroundImage={crowImage}></DesignItem>
          {/* SIMPLICITY LOGO */}
          <DesignItem backgroundImage={simplicityImage}></DesignItem>
        </div>
      </div>
    </div>
  );
};

export default Design;
