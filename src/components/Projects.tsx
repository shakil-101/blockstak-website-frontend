import { Raleway } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import ArrowButton from "./buttons/ArrowButton";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const Projects = () => {
  type projectsType = {
    id: string;
    title: string;
    shortDescription: string;
    image: string;
  };
  const [allProjects, setAllProjects] = useState<projectsType[]>([
    {
      id: "1234567",
      title: "Good Days",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur. Ac nec sem et lacus parturient viverra fermentum. Id purus adipiscing sed enim euismod ultrices odio ornare.",
      image: "/project1.png",
    },
  ]);
  return (
    <div className="py-20">
      <div className="container mx-auto">
        <div className="">
          <h1 className={`text-[32px] font-medium ${raleway.className}`}>
            Projects
          </h1>

          {allProjects.map((item, index) => (
            <div key={index} className="grid grid-cols-12 gap-10 ">
              <div className="col-span-6 ">
                <p className={`text-[32px] font-medium pb-9`}>
                  {index < 10 && 0}
                  {index + 1}.
                </p>
                <h1 className={`text-[42px] font-semibold pb-6`}>
                  {item.title}
                </h1>
                <p className={`text-2xl font-medium pb-9`}>
                  {item.shortDescription}
                </p>
                <div className="">
                  <ArrowButton buttonText="Learn more" />
                </div>
              </div>
              <div className="col-span-1 "></div>
              <div
                className="col-span-5 "
                style={{ width: "100%", height: "500px", position: "relative" }}
              >
                <Image
                  src={`${item.image}`}
                  layout="fill"
                  alt={item.title}
                  className=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
