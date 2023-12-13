import React from "react";
import WhiteShadow from "./SVG/WhiteShadowSVG";
import HtmlSVG from "./SVG/HtmlSVG";
import FireshipSVG from "./SVG/FireshipSVG";
import NetlifySVG from "./SVG/NetlifySVG";
import FigmaSVG from "./SVG/FigmaSVG";
import NpmSVG from "./SVG/NpmSVG";
import AwsSVG from "./SVG/AwsSVG";
import PythonSVG from "./SVG/PythonSVG";
import NodeSVG from "./SVG/NodeSVG";
import JiraSVG from "./SVG/JiraSVG";
import Html3SVG from "./SVG/Html3SVG";

import { Poppins, Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const TechStack = () => {
  return (
    <div className="lg:py-20">
      <div className="container mx-auto">
        <div className="border-t border-[#9CA3AF] relative techstack-white-bg ">
          <h1
            className={` max-w-[500px] mx-auto sm:text-2xl text-sm text-[#F4F4F4] text-center sm:py-[50px] py-5 ${raleway.className}`}
          >
            We produce state of the art technology with our unique technology
            stack
          </h1>

          <div className="grid grid-cols-6 sm:gap-4 gap-2 ">
            <div className="bg-secondaryDark shadow-lg hover:shadow-primaryLight hover:-translate-y-2 duration-200 sm:rounded-3xl rounded-xl sm:w-[80px] w-[40px] sm:h-[80px] h-[40px] flex items-center justify-center mx-auto">
              <HtmlSVG />
            </div>
            <div className="bg-secondaryDark shadow-lg hover:shadow-primaryLight hover:-translate-y-2 duration-200 sm:w-[80px] w-[40px] sm:h-[80px] h-[40px] sm:rounded-3xl rounded-xl flex items-center justify-center mx-auto">
              <FireshipSVG />
            </div>
            <div className="bg-secondaryDark shadow-lg hover:shadow-primaryLight hover:-translate-y-2 duration-200 sm:w-[80px] w-[40px] sm:h-[80px] h-[40px] sm:rounded-3xl rounded-xl flex items-center justify-center mx-auto">
              <NetlifySVG />
            </div>
            <div className="bg-secondaryDark shadow-lg hover:shadow-primaryLight hover:-translate-y-2 duration-200 sm:w-[80px] w-[40px] sm:h-[80px] h-[40px] sm:rounded-3xl rounded-xl flex items-center justify-center mx-auto">
              <FigmaSVG />
            </div>
            <div className="bg-secondaryDark shadow-lg hover:shadow-primaryLight hover:-translate-y-2 duration-200 sm:w-[80px] w-[40px] sm:h-[80px] h-[40px] sm:rounded-3xl rounded-xl flex items-center justify-center mx-auto">
              <Html3SVG />
            </div>
            <div className="bg-secondaryDark shadow-lg hover:shadow-primaryLight hover:-translate-y-2 duration-200 sm:w-[80px] w-[40px] sm:h-[80px] h-[40px] sm:rounded-3xl rounded-xl flex items-center justify-center mx-auto">
              <NpmSVG />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4 sm:mt-20 mt-5">
            <div></div>
            <div className="bg-secondaryDark shadow-lg hover:shadow-primaryLight hover:-translate-y-2 duration-200 sm:w-[80px] w-[40px] sm:h-[80px] h-[40px] sm:rounded-3xl rounded-xl flex items-center justify-center mx-auto">
              <AwsSVG />
            </div>
            <div className="bg-secondaryDark shadow-lg hover:shadow-primaryLight hover:-translate-y-2 duration-200 sm:w-[80px] w-[40px] sm:h-[80px] h-[40px] sm:rounded-3xl rounded-xl flex items-center justify-center mx-auto">
              <PythonSVG />
            </div>
            <div className="bg-secondaryDark shadow-lg hover:shadow-primaryLight hover:-translate-y-2 duration-200 sm:w-[80px] w-[40px] sm:h-[80px] h-[40px] sm:rounded-3xl rounded-xl flex items-center justify-center mx-auto">
              <NodeSVG />
            </div>
            <div className="bg-secondaryDark shadow-lg hover:shadow-primaryLight hover:-translate-y-2 duration-200 sm:w-[80px] w-[40px] sm:h-[80px] h-[40px] sm:rounded-3xl rounded-xl flex items-center justify-center mx-auto">
              <JiraSVG />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
