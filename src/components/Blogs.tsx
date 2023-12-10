import React, { useState } from "react";
import ArrowButton from "./buttons/ArrowButton";
import RoundArrowSVG from "./SVG/RoundArrowSVG";

const Blogs = () => {
  type blogsType = {
    title: string;
    description: string;
    id?: string;
  };
  const [blogsData, setBlogsData] = useState<blogsType[]>([
    {
      title: "Drio- A Decentralized Data Exchange software",
      description:
        "A state-of-the-art disruptive technology that simplifies B2B Data Exchange",
      id: "234",
    },
    {
      title: "Drio- A Decentralized Data Exchange software",
      description:
        "A state-of-the-art disruptive technology that simplifies B2B Data Exchange",
      id: "234",
    },
    {
      title: "Drio- A Decentralized Data Exchange software",
      description:
        "A state-of-the-art disruptive technology that simplifies B2B Data Exchange",
      id: "234",
    },
    {
      title: "Drio- A Decentralized Data Exchange software",
      description:
        "A state-of-the-art disruptive technology that simplifies B2B Data Exchange",
      id: "234",
    },
  ]);
  return (
    <div className="py-20">
      <div className="container mx-auto">
        <div className="flex items-center justify-between pb-10">
          <h1 className="text-[32px] text-primaryWhite font-medium">Blog</h1>
          <div className="">
            <ArrowButton buttonText="Learn more" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 ">
          {blogsData.map((item, index) => (
            <div
              key={index}
              className="bg-[#292828] p-10 rounded-lg group shadow-lg hover:shadow-[#C98BEF]/30 duration-300"
            >
              <div className="grid grid-cols-12">
                <h1 className="col-span-11 text-primaryWhite text-[28px] font-semibold">
                  {item.title}
                </h1>

                <div className="col-span-1 flex justify-end ">
                  <div className=" group-hover:translate-x-2 duration-300">
                    <RoundArrowSVG />
                  </div>
                </div>
              </div>

              <p className="text-primaryWhite text-lg font-medium pt-8">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
