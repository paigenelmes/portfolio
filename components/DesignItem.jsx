import React from "react";
import Image from "next/image";

const DesignItem = ({ backgroundImage }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-md shadow-gray-400 rounded-xl hover:scale-105">
      {/* GRAPHIC DESIGN */}
      <Image
        src={backgroundImage}
        alt="Logos"
        width="600"
        height="600"
      />
    </div>
  );
};

export default DesignItem;
