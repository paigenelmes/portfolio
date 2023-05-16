import React from "react";
import Image from "next/image";

function Contact() {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="uppercase tracking-widest text-[#5C6CFF]">
          Let&apos;s Connect
        </p>
        <h2 className="py-4">Contact</h2>
        {/* CONTACT SECTION GRID */}
        <div className="grid lg:grid-cols-5 gap-10">
          {/* LEFT SIDE */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-gray-400 rounded-xl p-2 bg-gradient-to-t from-[#84FFC9] via-[#AAB2FF] to-[#ECA0FF]">
            <div className="lg:p-2 h-full">
              <div>
                <Image
                  className="rounded-xl"
                  src="/../public/about/me-noborder.png"
                  width="600"
                  height="600"
                  alt="Paige Cartoon Pic"
                ></Image>
              </div>
            </div>
          </div>
          {/* RIGHT SIDE */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
