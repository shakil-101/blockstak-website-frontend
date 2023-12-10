"use client";
import React, { useState } from "react";
import MainLogo from "./SVG/MainLogoSVG";
import Image from "next/image";
import Link from "next/link";
import BubbleButton from "./buttons/BubbleButton";
import { usePathname } from "next/navigation";
import HamburgerButton from "./buttons/HamburgerButton";

import { useDetectClickOutside } from "react-detect-click-outside";

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
    <div className="fixed top-0 left-0 w-full bg-primaryDark z-[100] py-5">
      <div className="container mx-auto">
        {/* <div className="flex items-center justify-between ">
          <div>
            <Link href="/">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/MainLogo.svg"
                alt="Next.js Logo"
                width={100}
                height={91}
                priority
              />
            </Link>
          </div>

          <div className="flex items-center gap-10">
            <Link href={`/`}>
              <button className="text-white hover:text-primaryLight text-xl font-medium duration-200">
                About
              </button>
            </Link>
            <Link href={`/jobs`}>
              <button
                className={` hover:text-primaryLight text-xl font-medium duration-200 ${
                  pathname.includes("jobs") ? "text-primaryLight" : "text-white"
                }`}
              >
                Jobs
              </button>
            </Link>
            <Link href={`/`}>
              <button className="text-white hover:text-primaryLight text-xl font-medium duration-200">
                Products
              </button>
            </Link>

            <Link href={`#contact-us`}>
              <BubbleButton />
            </Link>
          </div>
        </div> */}
        <div className="flex items-center justify-between ">
          <div>
            <Link href="/">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/MainLogo.svg"
                alt="Next.js Logo"
                width={100}
                height={91}
                priority
              />
            </Link>
          </div>

          <HamburgerButton
            isOpened={isOpened}
            handleButtonClick={handleButtonClick}
          />
        </div>

        <div
          ref={ref}
          className={`${
            isOpened ? "w-[350px]" : "w-0"
          } bg-gray-500/90 h-screen  absolute top-0 left-0 duration-200 overflow-hidden`}
        >
          <h1>Sidebar</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
