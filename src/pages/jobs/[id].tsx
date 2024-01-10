"use client";
import ContactForm from "@/components/ContactForm";
import DisplayRichText from "@/components/DisplayRichText";
import Locations from "@/components/Locations";
import CalendarSVG from "@/components/SVG/CalendarSVG";
import ClockSVG from "@/components/SVG/ClockSVG";
import LocationSVG from "@/components/SVG/LocationSVG";
import RightArrowSVG from "@/components/SVG/RightArrowSVG";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

// import escapeHTML from "escape-html";
import { Text } from "slate";
import { formatDeadline } from "../../../utils/momentFormatter";

const JobDetails = () => {
  type jobDetailsType = {
    title: string;
    deadline: string;
    address: string;
    heading: string;
    lookingFor: string;

    responsibility: any;
    qualifications: string[];
    salaryBenefit: string[];
    aboutUs: string;
    officeLocation: string;
    workingHours: string;
    workingDays: string;
  };

  const [JobDetails, setJobDetails] = useState<jobDetailsType>({
    title: "Backend Developer (PYTHON)",
    deadline: "16 November, 2023",
    address: "Dhaka, Bangladesh",
    heading:
      "BLOCKSTAK IS LOOKING FOR ONE BACKEND DEVELOPER TO JOIN THEIR TEAM.",
    lookingFor:
      "We are seeking a skilled backend developer to join our team. The ideal candidate will design, implement, and maintain scalable and reliable backend systems. They will work closely with the frontend team to develop API endpoints, integrate with databases, and create efficient data processing workflows. You will be building products and solutions for emerging startups in Silicon Valley.",

    responsibility: [
      "Design and develop scalable and reliable backend systems ",
      "Collaborate with the frontend team to define API endpoints and ensure seamless integration with frontend applications",
      "Work with NoSQL databases such as DynamoDB, MongoDB, and Redis to manage and process data efficiently",
      "Develop and implement testing strategies to ensure the quality of backend systems",
      "Monitor and troubleshoot performance issues, identify bottlenecks, and optimize system performance",
      "Write clean, maintainable, and efficient code that adheres to coding standards and best practices",
      "Keep up-to-date with new technologies and programming languages to ensure the latest trends are being implemented in our systems",
    ],
    qualifications: [
      "Design and develop scalable and reliable backend systems",
      "Collaborate with the frontend team to define API endpoints and ensure seamless integration with frontend applications",
      "Work with NoSQL databases such as DynamoDB, MongoDB, and Redis to manage and process data efficiently",
      "Develop and implement testing strategies to ensure the quality of backend systems",
      "Monitor and troubleshoot performance issues, identify bottlenecks, and optimize system performance",
      "Write clean, maintainable, and efficient code that adheres to coding standards and best practices",
      "Keep up-to-date with new technologies and programming languages to ensure the latest trends are being implemented in our systems",
    ],
    salaryBenefit: [
      "BDT 60,000 – BDT 75,000 (based on your experience)",
      "Free lunch and snacks",
      "Two festival bonuses",
      "Industry-standard leave policy",
    ],
    aboutUs:
      "Blockstak is a stealth blockchain startup based in San Jose, California. We are building a team here in Dhaka of which you will be a part. We build Product MVPs for Silicon Valley-based emerging startups.",
    officeLocation: "Dhaka, Bangladesh",
    workingHours: "10 AM - 6 PM",
    workingDays: "Sunday - Thursday",
  });

  const router = useRouter();

  type detailsType = {
    url?: string;
    title: string;
    shortDescription: string;
    deadline: string;
    address?: string;
    location: string;
    category: string;
    designation?: string;
    lookingFor?: string;
    responsibility: any;
    qualification: any;
    salaryBenefit: any;
    createdAt?: string;
    updatedAt?: string;
    id?: string;
  };

  const [details, setDetails] = useState<detailsType>();

  const fetchData = async (jobId: any) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs/${jobId}`
      );
      // if (!response.ok) {
      //   toast.error("Network response was not ok");
      // }
      const data = await response.json();
      console.log("fetch: ", data);
      setDetails(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (router.query.id) {
      fetchData(router.query.id);
    }
  }, [router]);

  return (
    <div className="">
      <div className="bg-tertiaryDark py-20">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="lg:col-span-9 col-span-12">
              <h1 className="lg:text-[32px] text-2xl font-medium pb-3">
                Title: {details?.designation}
              </h1>

              <div className="flex items-center lg:gap-5 gap-3 flex-wrap ">
                <div className="flex items-center gap-3">
                  <CalendarSVG />
                  <p className="lg:text-lg font-normal">
                    Deadline:
                    {formatDeadline(details?.deadline)}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <LocationSVG />
                  <p className="lg:text-lg font-normal">{details?.address}</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 col-span-12 lg:mt-0 mt-10">
              <Link href={`/application/${router.query.id}`}>
                <div className="lg:flex justify-end">
                  <button className="group sm:w-[210px]  w-full bg-primaryLight  sm:py-3.5 py-2 flex items-center justify-center gap-4 rounded border duration-300  border-primaryLight hover:bg-primaryDark hover:border-primaryWhite">
                    <span className="sm:text-xl text-lg sm:font-medium">
                      Submit
                    </span>
                    <div className="group-hover:translate-x-3  duration-300">
                      <RightArrowSVG
                        width="22px"
                        height="22px"
                        fillColor="#F4F4F4"
                      />
                    </div>
                  </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="border-t mt-6">
            <h1 className="lg:text-[28px] text-lg font-bold my-12">
              {JobDetails.heading}
            </h1>

            <div className="max-w-[945px]">
              {/* ======== looking for ======== */}
              <div className="mb-12">
                <h1 className="lg:text-[28px] text-lg font-bold pb-4">
                  What we are looking for
                </h1>
                <p className="lg:text-2xl font-normal lg:leading-[35px]">
                  {details?.lookingFor}
                </p>
              </div>

              {/* ====== Responsibilities ====== */}
              <div className="mb-12">
                <h1 className="lg:text-[28px] text-lg font-bold pb-4">
                  Key Responsibilities
                </h1>

                <div className="lg:text-2xl pl-6 leading-[35px]">
                  {details?.responsibility && (
                    <DisplayRichText richText={details.responsibility} />
                  )}
                </div>
                {/* <ul className="list-disc lg:text-2xl pl-6 leading-[35px]">
                  {JobDetails.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul> */}
              </div>

              {/* ====== Qualifications ====== */}
              <div className="mb-12">
                <h1 className="lg:text-[28px] text-lg font-bold pb-4">
                  Qualifications
                </h1>

                <div className=" lg:text-2xl pl-6 leading-[35px]">
                  {details?.qualification && (
                    <DisplayRichText richText={details.qualification} />
                  )}
                </div>
                {/* <ul className="list-disc lg:text-2xl pl-6 leading-[35px]">
                  {JobDetails.qualifications.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul> */}
              </div>

              {/* ====== Salary and Benefit ====== */}
              <div className="mb-12">
                <h1 className="lg:text-[28px] text-lg font-bold pb-4">
                  Salary and Benefit
                </h1>

                <div className=" lg:text-2xl pl-6 leading-[35px]">
                  {details?.salaryBenefit && (
                    <DisplayRichText richText={details.salaryBenefit} />
                  )}
                </div>
                {/* <ul className="list-disc lg:text-2xl pl-6 leading-[35px]">
                  {JobDetails.salaryBenefit.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul> */}
              </div>

              {/* ====== Salary and Benefit ====== */}
              <div className="mb-12">
                <h1 className="lg:text-[28px] text-lg font-bold pb-4">
                  About Us
                </h1>
                <p className="lg:text-2xl font-normal leading-[35px]">
                  {JobDetails.aboutUs}
                </p>
              </div>

              {/* ====== Salary and Benefit ====== */}
              <div className="">
                <div className="flex items-center gap-3 mb-4">
                  <LocationSVG />
                  <p className="lg:text-2xl font-semibold">
                    Office Location: {JobDetails.address}
                  </p>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <ClockSVG />
                  <p className="lg:text-2xl font-semibold">
                    Working Hours: {JobDetails.workingHours}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <CalendarSVG />
                  <p className="lg:text-2xl font-semibold">
                    Working Days: {JobDetails.workingDays}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Locations />
      {/* <ContactForm /> */}
    </div>
  );
};

export default JobDetails;
