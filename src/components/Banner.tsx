import React from "react";

import { Poppins, Raleway } from "next/font/google";
import Image from "next/image";
import ArrowButton from "./buttons/ArrowButton";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const Banner = () => {
  return (
    <div className="py-10 min-h-[90vh]  flex items-center justify-center">
      <div className="container mx-auto ">
        <div className="">
          <h1
            className={`relative w-fit mx-auto text-[#F4F4F4] text-[74px] font-semibold ${raleway.className}`}
          >
            <Image
              src="spiral.svg"
              width={110}
              height={110}
              alt="spiral image"
              className="absolute -left-28 top-1"
            />
            Building in <span className="text-[#C98BEF]">stealth.</span>
            <Image
              src="box.svg"
              width={100}
              height={100}
              alt="box image"
              className="absolute -right-28 top-8"
            />
          </h1>

          <h1
            className={`w-fit mx-auto float-bg text-center text-[#F4F4F4] text-[74px]  font-semibold relative z-10`}
          >
            Empowered to disrupt.
          </h1>
          <div>
            <Image
              src="pie.svg"
              width={120}
              height={120}
              alt="pie image"
              className="mx-auto"
            />
          </div>

          <div className="flex justify-center pt-5">
            <ArrowButton buttonText="Get in touch" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
