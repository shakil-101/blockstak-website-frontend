"use client";
import React, { useState } from "react";
import LocationSVG from "./SVG/LocationSVG";
import RightArrowSVG from "./SVG/RightArrowSVG";
import Image from "next/image";
import Link from "next/link";

const AllJobs = () => {
  const [activeCategory, setActiveCategory] = useState<String>("All");

  const handleCategory = (category: string) => {
    setActiveCategory(category);
  };

  type jobListType = {
    image: string;
    title: string;
    shortDescription: string;
    address: string;
    location: string;
    category: string;
  };

  const [jobList, setJobList] = useState<jobListType[]>([
    {
      image: "/job1.png",
      title: "Backend Developer",
      shortDescription:
        "We are looking for a Senior Backend Developer to join our team. You will be responsible for building the next generation of our applications. You will be working closely with our product team to build the best possible user experience ",
      address: "Dhaka, Bangladesh",
      location: "Dhaka",
      category: "Dev",
    },
    {
      image: "/job1.png",
      title: "Backend Developer",
      shortDescription:
        "We are looking for a Senior Backend Developer to join our team. You will be responsible for building the next generation of our applications. You will be working closely with our product team to build the best possible user experience ",
      address: "Dhaka, Bangladesh",
      location: "Dhaka",
      category: "Dev",
    },
  ]);
  return (
    <div>
      <div className="">
        <h1 className="text-[32px] font-bold text-center">
          Build Yourself with BlockStak
        </h1>
        <p className="text-neutralBase text-lg font-medium max-w-[575px] mx-auto text-center">
          Your gateway to opportunities: Discover a world of possibilities with
          our diverse job listings. Connect, apply, and embark on your next
          professional adventure.
        </p>

        <div className="py-10">
          <div className="flex items-center justify-center gap-5 h-[59px]">
            <div className="max-w-[525px] rounded-full border border-primaryBorder flex items-center justify-between gap-3 px-3 py-2">
              <button
                onClick={() => handleCategory("All")}
                className={`${
                  activeCategory === "All"
                    ? "bg-tertiaryDark"
                    : "bg-primaryDark hover:bg-tertiaryDark "
                }  rounded-full text-lg font-medium  px-5 h-[43px] duration-300`}
              >
                All
              </button>
              <button
                onClick={() => handleCategory("Managerial")}
                className={`${
                  activeCategory === "Managerial"
                    ? "bg-tertiaryDark"
                    : "bg-primaryDark hover:bg-tertiaryDark"
                }  rounded-full text-lg font-medium px-5 h-[43px] duration-300`}
              >
                Managerial
              </button>
              <button
                onClick={() => handleCategory("Dev")}
                className={`${
                  activeCategory === "Dev"
                    ? "bg-tertiaryDark"
                    : "bg-primaryDark hover:bg-tertiaryDark"
                }  rounded-full text-lg font-medium px-5 h-[43px] duration-300`}
              >
                Dev
              </button>
              <button
                onClick={() => handleCategory("Design")}
                className={`${
                  activeCategory === "Design"
                    ? "bg-tertiaryDark"
                    : "bg-primaryDark hover:bg-tertiaryDark"
                }  rounded-full text-lg font-medium px-5 h-[43px] duration-300 `}
              >
                Design
              </button>
            </div>
            <div className="">
              <select className=" rounded-full border bg-primaryDark border-primaryBorder px-5  h-[59px]">
                <option value="">Location</option>
                <option value="Dhaka">Dhaka</option>
                <option value="San Jose">San Jose</option>
              </select>
            </div>
          </div>
        </div>

        <div className="py-10">
          {jobList.map((item, index) => (
            <Link key={index} href={`jobs/${index}`}>
              <div
                className={`${
                  index === 0 ? "border-y" : "border-b"
                }  relative border-secondaryBorder group py-16`}
              >
                <div className="container grid grid-cols-12 gap-16 ">
                  <div className="col-span-3 flex justify-end">
                    <div className="relative overflow-hidden rounded ">
                      <Image
                        src={`${item.image}`}
                        width={300}
                        height={300}
                        alt={`${item.title}`}
                        className="rounded "
                      />

                      <div className="absolute top-0 right-0 h-full w-full opacity-0 group-hover:opacity-100 duration-300 bg-gradient-to-tr from-transparent via-transparent to-[#6b45e67c]"></div>
                    </div>
                  </div>
                  <div className="col-span-9 ">
                    <div className="max-w-[625px] flex flex-col justify-between  h-full">
                      <div className="">
                        <h1 className="text-[32px] font-bold pb-6 ">
                          {item.title}
                        </h1>
                        <p className="text-xl font-medium text-neutralBase ">
                          {item.shortDescription}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 ">
                        <LocationSVG />
                        <p className="text-lg font-normal">{item.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 right-0 h-full w-[105px] duration-300 flex items-center justify-center overflow-hidden">
                  <div className="z-[100]">
                    <RightArrowSVG
                      width="28px"
                      height="28px"
                      fillColor="#F4F4F4"
                    />
                  </div>
                  <div className="absolute top-0 right-0 h-full w-0 group-hover:w-full duration-300  bg-[#6b45e6] z-0"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
