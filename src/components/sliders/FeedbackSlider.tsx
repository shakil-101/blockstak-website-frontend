"use client";

import React, { useState } from "react";
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
const FeedbackSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
  };

  type feedBackType = {
    message: string;
    name: string;
    designation: string;
    image: string;
  };
  const [feedbacks, setFeedbacks] = useState<feedBackType[]>([
    {
      message:
        "Blockstak has really made my life easy by taking on a complex project like Drio and transforming my dream project into a beautiful product. They were very helpful throughout the entire process.",
      name: "Alak Deb",
      designation: "Founder of Stealth Start-up",
      image: "/user.png",
    },
    {
      message:
        "Blockstak has really made my life easy by taking on a complex project like Drio and transforming my dream project into a beautiful product. They were very helpful throughout the entire process.",
      name: "Nayem Deb",
      designation: "Founder of Stealth Start-up",
      image: "/user.png",
    },
    {
      message:
        "Blockstak has really made my life easy by taking on a complex project like Drio and transforming my dream project into a beautiful product. They were very helpful throughout the entire process.",
      name: "Asif Deb",
      designation: "Founder of Stealth Start-up",
      image: "/user.png",
    },
    {
      message:
        "Blockstak has really made my life easy by taking on a complex project like Drio and transforming my dream project into a beautiful product. They were very helpful throughout the entire process.",
      name: "Zahid Deb",
      designation: "Founder of Stealth Start-up",
      image: "/user.png",
    },
  ]);

  return (
    <div>
      <div className="mx-auto container shadow ">
        <div className="bg-[#292828] p-20">
          <h2 className="text-[32px] text-center font-bold text-primaryWhite">
            Let’s hear it from Our Clients
          </h2>
          <Slider {...settings}>
            {feedbacks.map((item, index) => (
              <div key={index} className="p-20 text-primaryWhite">
                <p
                  className={`text-2xl font-medium text-center ${raleway.className}`}
                >
                  {item.message}
                </p>

                <div className="mx-auto w-fit flex items-center gap-8 pt-16">
                  <div>
                    <Image
                      src={`${item.image}`}
                      width={90}
                      height={90}
                      alt={`${item.name}`}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h1 className={`text-2xl font-semibold pb-2`}>
                      {item.name}{" "}
                    </h1>
                    <h2 className={`text-xl font-medium`}>
                      {item.designation}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSlider;
