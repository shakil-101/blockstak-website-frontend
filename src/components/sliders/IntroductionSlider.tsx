"use client";

import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import userImage from "../../../public/user.png";
import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
const IntroductionSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    prevArrow: <></>,
    nextArrow: <></>,
    afterChange: (currentSlide: number) => {
      setActiveTab(currentSlide);
    },
  };

  type feedBackType = {
    title: string;
    shortDescription: string;
    category: string;
    image: string;
  };
  const sliderRef = useRef<Slider>(null);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [feedbacks, setFeedbacks] = useState<feedBackType[]>([
    {
      title: "We build MVPs for Silicon Valley startups.",
      shortDescription:
        "We're a team of experts who help Silicon Valley startups create Minimum Viable Products (MVPs) that allow them to test their ideas quickly and inexpensively. Our developers and designers work closely with founders to build functional, visually appealing, and user-friendly MVPs using the latest technologies and agile methodologies. ",
      category: "Product Development",
      image: "/introSlider.svg",
    },
    {
      title: "We build MVPs for Silicon Valley startups.",
      shortDescription:
        "We're a team of experts who help Silicon Valley startups create Minimum Viable Products (MVPs) that allow them to test their ideas quickly and inexpensively. Our developers and designers work closely with founders to build functional, visually appealing, and user-friendly MVPs using the latest technologies and agile methodologies. ",
      category: "Product Development",
      image: "/introSlider.svg",
    },
  ]);

  const goToSlide = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <div className="py-20">
      <div className="mx-auto container">
        <div className="">
          <div className="flex items-center justify-center gap-10">
            {feedbacks.map((item, index) => (
              <div key={index}>
                <div
                  onClick={() => {
                    setActiveTab(index);
                    goToSlide(index);
                  }}
                  className="flex items-center gap-4 cursor-pointer select-none"
                >
                  <div className="w-[56px] h-[56px] border border-primaryLight flex items-center justify-center">
                    <div
                      className={`${
                        activeTab === index ? "scale-100" : "scale-0"
                      } w-5 h-5 bg-primaryLight duration-200`}
                    ></div>
                  </div>
                  <h1 className={`text-2xl font-semibold`}>{item.category}</h1>
                </div>
              </div>
            ))}
          </div>

          <div className="">
            <Slider ref={sliderRef} {...settings}>
              {feedbacks.map((item, index) => (
                <div key={index} className="">
                  <div className="grid grid-cols-12 gap-6 items-center  ">
                    <div className="col-span-6 ">
                      <h1 className={`text-[30px] font-bold pb-7 `}>
                        {item.title}
                      </h1>
                      <p className={`text-2xl font-medium`}>
                        {item.shortDescription}
                      </p>
                    </div>
                    <div className="col-span-6 flex justify-end">
                      <div
                        style={{
                          width: "100%",
                          height: "500px",
                          position: "relative",
                        }}
                        className=""
                      >
                        <Image
                          src={`${item.image}`}
                          alt={`${item.title}`}
                          fill
                          layout="fill"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSlider;
