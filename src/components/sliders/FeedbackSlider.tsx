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

// import { FontAwesomeIcon } from "fortawesome/react-fontawesome";

const FeedbackSlider = () => {
  type feedBackType = {
    message: string;
    name: string;
    designation: string;
    image: string;
  };
  const [feedbacks, setFeedbacks] = useState<feedBackType[]>([
    {
      message:
        "Blockstak has really made my life easy by taking on a complex project like Drio and transforming my dream project into a beautiful product. They were very helpful throughout the entire process. Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
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
        "Blockstak has really made my life easy by taking on a complex project like Drio and transforming my dream project into a beautiful product. They were very helpful throughout the entire process. Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
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

  // const CustomArrowPrev = ({ onClick }: any) => (
  //   <button className={`custom-prev-btn`} onClick={onClick}>
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="35"
  //       height="35"
  //       viewBox="0 0 18 19"
  //       fill="none"
  //     >
  //       <path
  //         d="M8.121 9.92189L11.8335 13.6344L10.773 14.6949L6 9.92189L10.773 5.14888L11.8335 6.20938L8.121 9.92189Z"
  //         fill="#565C61"
  //       />
  //     </svg>
  //   </button>
  // );
  // const CustomArrowNext = ({ onClick }: any) => (
  //   <button className={`custom-next-btn`} onClick={onClick}>
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="35"
  //       height="35"
  //       viewBox="0 0 18 19"
  //       fill="none"
  //     >
  //       <path
  //         d="M9.879 9.92189L6.1665 13.6344L7.227 14.6949L12 9.92189L7.227 5.14888L6.1665 6.20938L9.879 9.92189Z"
  //         fill="#565C61"
  //       />
  //     </svg>
  //   </button>
  // );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    // prevArrow: <CustomArrowPrev />,
    // nextArrow: <CustomArrowNext />,
  };

  return (
    <div className="lg:py-20 py-10">
      <div className="container">
        <div className="bg-tertiaryDark lg:px-20 px-10  py-10 rounded-lg relative">
          <h2 className="md:text-[32px] px-5 text-lg lg:text-center md:font-bold font-medium ">
            Let’s hear it from Our Clients
          </h2>
          <Slider {...settings}>
            {feedbacks.map((item, index) => (
              <div
                key={index}
                className="lg:px-20 sm:px-5 px-3  lg:pt-20 pt-10  "
              >
                <p
                  className={`min-h-[100px]  md:text-2xl text-sm font-medium lg:text-center ${raleway.className}`}
                >
                  {item.message}
                </p>

                <div className="mx-auto lg:w-fit flex items-center gap-8 lg:pt-16 pt-8">
                  <div className="lg:block hidden">
                    <Image
                      src={`${item.image}`}
                      width={90}
                      height={90}
                      alt={`${item.name}`}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h1 className={`md:text-2xl text-base font-semibold pb-2`}>
                      {item.name}
                    </h1>
                    <h2 className={`md:text-xl text-sm md:font-medium`}>
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
