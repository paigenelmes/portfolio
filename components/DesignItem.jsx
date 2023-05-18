import React from "react";
import Image from "next/image";

const DesignItem = ({ backgroundImage }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-md shadow-gray-300 rounded-xl hover:scale-110">
      {/* GRAPHIC DESIGN */}
      <Image
        className="border-2 border-gray-300 rounded-xl"
        src={backgroundImage}
        alt="Logos"
        width="600"
        height="600"
      />
    </div>
  );
};

export default DesignItem;
