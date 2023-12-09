import { Raleway } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";

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
    <div>
      <div className="container mx-auto">
        <div className="">
          <h1 className={`text-[32px] font-medium ${raleway.className}`}>
            Projects
          </h1>

          {allProjects.map((item, index) => (
            <div key={index} className="grid grid-cols-12 gap-10 items-center">
              <div className="col-span-6 ">
                <p className={`text-[32px] font-medium`}>{index}</p>
                <h1 className={`text-[42px] font-semibold`}>{item.title}</h1>
                <p className={`text-2xl font-medium`}>
                  {item.shortDescription}
                </p>
              </div>
              <div
                className="col-span-6 "
                style={{ width: "100%", height: "100%", position: "relative" }}
              >
                <Image src={`${item.image}`} layout="fill" alt={item.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
