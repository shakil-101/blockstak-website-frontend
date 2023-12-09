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
    <div className="relative ">
      <div className="border-t-2 container mx-auto relative ">
        <div className="absolute top-0  horizontal-absolute-center z-0">
          <WhiteShadow />
        </div>

        <h1
          className={`max-w-[500px] mx-auto text-2xl text-[#F4F4F4] text-center pt-[50px] pb-[80px] ${raleway.className}`}
        >
          We produce state of the art technology with our unique technology
          stack
        </h1>

        <div className="grid grid-cols-6  gap-4">
          <div className="bg-[#1e2235] rounded-3xl w-[80px] h-[80px] flex items-center justify-center mx-auto">
            <HtmlSVG />
          </div>
          <div className="bg-[#1e2235] w-[80px] h-[80px] rounded-3xl flex items-center justify-center mx-auto">
            <FireshipSVG />
          </div>
          <div className="bg-[#1e2235] w-[80px] h-[80px] rounded-3xl flex items-center justify-center mx-auto">
            <NetlifySVG />
          </div>
          <div className="bg-[#1e2235] w-[80px] h-[80px] rounded-3xl flex items-center justify-center mx-auto">
            <FigmaSVG />
          </div>
          <div className="bg-[#1e2235] w-[80px] h-[80px] rounded-3xl flex items-center justify-center mx-auto">
            <Html3SVG />
          </div>
          <div className="bg-[#1e2235] w-[80px] h-[80px] rounded-3xl flex items-center justify-center mx-auto">
            <NpmSVG />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4 mt-20">
          <div></div>
          <div className="bg-[#1e2235] w-[80px] h-[80px] rounded-3xl flex items-center justify-center mx-auto">
            <AwsSVG />
          </div>
          <div className="bg-[#1e2235] w-[80px] h-[80px] rounded-3xl flex items-center justify-center mx-auto">
            <PythonSVG />
          </div>
          <div className="bg-[#1e2235] w-[80px] h-[80px] rounded-3xl flex items-center justify-center mx-auto">
            <NodeSVG />
          </div>
          <div className="bg-[#1e2235] w-[80px] h-[80px] rounded-3xl flex items-center justify-center mx-auto">
            <JiraSVG />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
