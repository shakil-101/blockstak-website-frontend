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
            className={`relative w-fit mx-auto text-primaryWhite lg:text-[74px] md:text-5xl sm:text-4xl xs:text-3xl text-2xl font-semibold ${raleway.className}`}
          >
            <Image
              src="spiral.svg"
              width={110}
              height={110}
              alt="spiral image"
              className="absolute -left-28 -top-1.5 md:block hidden"
            />
            <Image
              src="spiral.svg"
              width={60}
              height={600}
              alt="spiral image"
              className="absolute -left-16 -top-3 md:hidden"
            />
            Building in <span className="text-primary">stealth.</span>
            <Image
              src="box.svg"
              width={100}
              height={100}
              alt="box image"
              className="absolute -right-28 top-0 md:block hidden"
            />
            <Image
              src="box.svg"
              width={60}
              height={60}
              alt="box image"
              className="absolute -right-16 top-1.5 md:hidden "
            />
          </h1>
          <div
            className={`pt-3 flex items-center justify-center flex-wrap md:gap-4 sm:gap-3 gap-2 lg:text-[74px] md:text-5xl sm:text-4xl xs:text-3xl text-2xl font-semibold ${raleway.className}`}
          >
            <h1 className="py-3  w-fit ">Empowered to</h1>
            <h1 className="md:py-3 py-1 w-fit  float-bg">disrupt.</h1>
          </div>

          <div className="">
            <Image
              src="pie.svg"
              width={120}
              height={100}
              alt="pie image"
              className="mx-auto md:block hidden"
            />
            <Image
              src="pie.svg"
              width={70}
              height={70}
              alt="pie image"
              className="mx-auto md:hidden "
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
