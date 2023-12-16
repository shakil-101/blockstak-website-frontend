"use client";
import React, { useState } from "react";
import MainLogo from "./SVG/MainLogoSVG";
import Image from "next/image";
import Link from "next/link";
import BubbleButton from "./buttons/BubbleButton";
import { usePathname } from "next/navigation";
import HamburgerButton from "./buttons/HamburgerButton";

import { useDetectClickOutside } from "react-detect-click-outside";
import RightArrowSVG from "./SVG/RightArrowSVG";
import DownArrowSVG from "./SVG/DownArrowSVG";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isOpened, setIsOpened] = useState(false);

  const handleButtonClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpened((prevState) => !prevState);
  };

  const closeSideBar = () => {
    setIsOpened(false);
  };

  const ref = useDetectClickOutside({ onTriggered: closeSideBar });

  return (
    <div
      ref={ref}
      className={`fixed top-0 left-0 w-full z-[100] py-5 duration-300 overflow-hidden ${
        isOpened
          ? "h-[280px] bg-tertiaryDark"
          : "md:h-[180px] h-[85px] bg-primaryDark"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between ">
          <div>
            <Link href="/">
              <Image
                className="relative md:block hidden"
                src="/MainLogo.svg"
                alt="Next.js Logo"
                width={100}
                height={91}
                priority
              />
              <Image
                className="relative md:hidden  "
                src="/MainLogo.svg"
                alt="Next.js Logo"
                width={50}
                height={91}
                priority
              />
            </Link>
          </div>

          <div className="flex items-center">
            <div className="md:block hidden">
              <div className="flex items-center gap-10">
                <div>
                  <Link href={`/`}>
                    <button className="text-white hover:text-primaryLight text-xl font-medium duration-200">
                      About
                    </button>
                  </Link>
                </div>

                <div>
                  <Link href={`/jobs`}>
                    <button
                      className={` hover:text-primaryLight text-xl font-medium duration-200 ${
                        pathname.includes("jobs")
                          ? "text-primaryLight"
                          : "text-white"
                      }`}
                    >
                      Jobs
                    </button>
                  </Link>
                </div>

                <div>
                  <Link href={`/`}>
                    <button className="text-white hover:text-primaryLight text-xl font-medium duration-200">
                      Products
                    </button>
                  </Link>
                </div>

                <div>
                  <Link href={`#contact-us`}>
                    <BubbleButton />
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <HamburgerButton
                isOpened={isOpened}
                handleButtonClick={handleButtonClick}
              />
            </div>
          </div>
        </div>

        <div className="md:hidden border-t border-[#9CA3AF] mt-3 p-3">
          <Link href={`/`}>
            <div
              onClick={() => setIsOpened(false)}
              className="group flex items-center justify-between py-3"
            >
              <button className=" text-primaryWhite group-hover:text-primary  duration-200 text-left">
                About
              </button>
            </div>
          </Link>

          <Link href={`/`}>
            <div
              onClick={() => setIsOpened(false)}
              className="flex items-center justify-between py-3 group"
            >
              <button className=" text-primaryWhite group-hover:text-primary  duration-200 text-left">
                Products
              </button>
              <div className="">
                <DownArrowSVG />
              </div>
            </div>
          </Link>

          <Link href={`/jobs`}>
            <div
              onClick={() => setIsOpened(false)}
              className="flex items-center justify-between py-3 group"
            >
              <button className=" text-primaryWhite group-hover:text-primary  duration-200 text-left">
                Jobs
              </button>
              <div className="">
                <DownArrowSVG />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
