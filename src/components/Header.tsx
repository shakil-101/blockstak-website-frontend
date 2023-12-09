import React from "react";
import MainLogo from "./SVG/MainLogoSVG";
import Image from "next/image";
import Link from "next/link";
import BubbleButton from "./buttons/BubbleButton";

const Header = () => {
  return (
    <div>
      <div className="container flex items-center justify-between mx-auto">
        {/* <MainLogo /> */}
        <div>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/MainLogo.svg"
            alt="Next.js Logo"
            width={100}
            height={91}
            priority
          />
        </div>

        <div className="flex items-center gap-10">
          <Link href={`/`}>
            <button className="text-white text-xl font-medium">About</button>
          </Link>
          <Link href={`/`}>
            <button className="text-white text-xl font-medium">Jobs</button>
          </Link>
          <Link href={`/`}>
            <button className="text-white text-xl font-medium">Products</button>
          </Link>

          <Link href={`/`}>
            {/* <button className="text-white text-lg font-medium border px-5 py-2">
              Contact us
            </button> */}
            <BubbleButton />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
