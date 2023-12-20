"use client";
import React, { useEffect, useState } from "react";
import LocationSVG from "./SVG/LocationSVG";
import RightArrowSVG from "./SVG/RightArrowSVG";
import Image from "next/image";
import Link from "next/link";

import { useDetectClickOutside } from "react-detect-click-outside";
import DownArrowSVG from "./SVG/DownArrowSVG";

const AllJobs = () => {
  const [activeCategory, setActiveCategory] = useState<String>("");
  const [selectedLocation, setSelectedLocation] = useState<String>("");

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
      title: "Frontend Developer",
      shortDescription:
        "We are looking for a Senior Backend Developer to join our team. You will be responsible for building the next generation of our applications. You will be working closely with our product team to build the best possible user experience ",
      address: "San Jose, USA",
      location: "San Jose",
      category: "Dev",
    },
    {
      image: "/job1.png",
      title: "UI/UX Designer",
      shortDescription:
        "We are looking for a UI/UX Designer to join our team. You will be responsible for building the next generation of our applications. You will be working closely with our product team to build the best possible user experience ",
      address: "San Jose, USA",
      location: "San Jose",
      category: "Design",
    },
    {
      image: "/job1.png",
      title: "UI/UX Designer Intern",
      shortDescription:
        "We are looking for a UI/UX Designer Intern to join our team. You will be responsible for building the next generation of our applications. You will be working closely with our product team to build the best possible user experience ",
      address: "San Jose, USA",
      location: "Dhaka",
      category: "Design",
    },
    {
      image: "/job1.png",
      title: "Project Manager",
      shortDescription:
        "We are looking for a Project Manager Designer to join our team. You will be responsible for building the next generation of our applications. You will be working closely with our product team to build the best possible user experience ",
      address: "San Jose, USA",
      location: "San Jose",
      category: "Managerial",
    },
  ]);

  const [displayJobs, setDisplayJobs] = useState<jobListType[]>([]);

  const [isOpened, setIsOpened] = useState(false);
  const closeSideBar = () => {
    setIsOpened(false);
  };

  const ref = useDetectClickOutside({ onTriggered: closeSideBar });

  useEffect(() => {
    console.log({ activeCategory });
    console.log({ selectedLocation });

    if (activeCategory && !selectedLocation) {
      const newArray = jobList.filter((job) => {
        return job.category === activeCategory;
      });
      console.log("newArray", newArray);

      setDisplayJobs(newArray);
    } else if (!activeCategory && selectedLocation) {
      const newArray = jobList.filter((job) => {
        return job.location === selectedLocation;
      });
      console.log("newArray", newArray);

      setDisplayJobs(newArray);
    } else if (activeCategory && selectedLocation) {
      const newArray = jobList.filter((job) => {
        return (
          job.category === activeCategory && job.location === selectedLocation
        );
      });
      console.log("newArray", newArray);

      setDisplayJobs(newArray);
    } else {
      setDisplayJobs(jobList);
    }
  }, [activeCategory, selectedLocation]);

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

        <div className="my-16">
          <div className="flex items-center justify-center gap-5 h-[59px]">
            <div className="max-w-[525px] rounded-full border border-primaryBorder flex items-center justify-between gap-3 px-3 py-2">
              <button
                onClick={() => handleCategory("")}
                className={`${
                  activeCategory === ""
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
            <div className="relative">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpened(!isOpened);
                }}
                className="w-[165px] h-[59px] px-6 cursor-pointer select-none flex items-center justify-between rounded-full border bg-primaryDark hover:bg-tertiaryDark border-primaryBorder "
              >
                <p className="select-none">
                  {selectedLocation ? selectedLocation : "Location"}
                </p>
                <div className="">
                  <DownArrowSVG />
                </div>
              </div>
              <div
                ref={ref}
                className={`${
                  isOpened ? "block " : "hidden"
                } w-[165px] absolute top-16 left-0 border rounded-lg duration-200 bg-tertiaryDark z-[100] border-primaryBorder  overflow-hidden`}
              >
                <div
                  onClick={() => {
                    setSelectedLocation("");
                    setIsOpened(!isOpened);
                  }}
                  className="cursor-pointer py-2 hover:bg-primaryDark  px-5"
                >
                  Location
                </div>
                <div
                  onClick={() => {
                    setSelectedLocation("Dhaka");
                    setIsOpened(!isOpened);
                  }}
                  className="cursor-pointer py-2 hover:bg-primaryDark px-5"
                >
                  Dhaka
                </div>
                <div
                  onClick={() => {
                    setSelectedLocation("San Jose");
                    setIsOpened(!isOpened);
                  }}
                  className="cursor-pointer py-2 hover:bg-primaryDark px-5"
                >
                  San Jose
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          {displayJobs.map((item, index) => (
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
