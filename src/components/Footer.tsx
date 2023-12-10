import React from "react";
import FacebookSVG from "./SVG/FacebookSVG";
import LinkedinSVG from "./SVG/LinkedinSVG";
import MessengerSVG from "./SVG/MessengerSVG";
import GithubSVG from "./SVG/GithubSVG";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="border-t border-[#575959] py-[75px]">
      <div className="container mx-auto">
        <div className="px-[120px]">
          <div className="grid grid-cols-2 items-center  ">
            <div className="">
              <div className="pb-2">
                <h1 className="text-2xl font-medium">
                  Ready to book a meeting?
                </h1>
              </div>
              <div className="">
                <a
                  href={`mailto: support@blockstak.ai`}
                  className="text-2xl font-medium"
                >
                  support@blockstak.ai
                </a>
              </div>
            </div>

            <div className="flex items-center justify-end gap-5">
              <div className=" hover:scale-125 duration-200">
                <Link href={`/`}>
                  <FacebookSVG />
                </Link>
              </div>

              <div className=" hover:scale-125 duration-200">
                <Link href={`/`}>
                  <LinkedinSVG />
                </Link>
              </div>

              <div className=" hover:scale-125 duration-200">
                <Link href={`/`}>
                  <MessengerSVG />
                </Link>
              </div>

              <div className=" hover:scale-125 duration-200">
                <Link href={`/`}>
                  <GithubSVG />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
