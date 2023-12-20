import CalendarSVG from "@/components/SVG/CalendarSVG";
import CheckboxSVG from "@/components/SVG/CheckboxSVG";
import DeleteSVG from "@/components/SVG/DeleteSVG";
import FileSVG from "@/components/SVG/FileSVG";
import LocationSVG from "@/components/SVG/LocationSVG";
import TikSVG from "@/components/SVG/TikSVG";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Application = () => {
  const router = useRouter();
  console.log(router);

  type jobDetailsType = {
    title: string;
    deadline: string;
    address: string;
  };
  type formDataType = {
    firstName: string;
    lastName: string;
    email: string;
    number: string;
    cv: any;
  };

  const [JobDetails, setJobDetails] = useState<jobDetailsType>({
    title: "Title: Backend Developer (PYTHON)",
    deadline: "16 November, 2023",
    address: "Dhaka, Bangladesh",
  });

  const [formData, setFormData] = useState<formDataType>({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    cv: null,
  });

  const [acceptTerms, setAcceptTerms] = useState<boolean>(false);

  const importImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/pdf";
    input.onchange = () => {
      const fileInput = input.files;

      if (fileInput && fileInput.length > 0) {
        const file = fileInput[0];
        console.log(file);

        setFormData({ ...formData, cv: file });
      }

      // if (file) {
      //   const reader = new FileReader();
      //   reader.onload = (e) => {
      //     // setSelectedImage(e.target.result);
      //     // setUserInfo((prevInfo) => ({
      //     //   ...prevInfo,
      //     //   image: e.target.result,
      //     // }));
      //   };
      //   reader.readAsDataURL(file);
      // }
    };
    input.click();
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    console.log("form submitted");
    router.push("/success");
  };

  return (
    <div className="bg-tertiaryDark py-[70px]">
      <div className="container">
        <h1 className="text-[32px] font-medium mb-2 ">
          Title: {JobDetails.title}
        </h1>

        <div className="flex items-center gap-5 mb-9">
          <div className="flex items-center gap-3">
            <CalendarSVG />
            <p className="text-lg font-normal">
              Deadline: {JobDetails.deadline}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <LocationSVG />
            <p className="text-lg font-normal">{JobDetails.address}</p>
          </div>
        </div>

        <div>
          <p className="text-2xl font-semibold mb-8">Personal Information</p>

          <form onSubmit={submitForm}>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="font-medium mb-2">First Name</p>
                <input
                  required
                  type="text"
                  className="w-full h-[55px] px-3 bg-transparent border border-borderWhite rounded-lg outline-primaryLight"
                />
              </div>
              <div>
                <p className="font-medium mb-2">Last Name</p>
                <input
                  required
                  type="text"
                  className="w-full h-[55px] px-3 bg-transparent border border-borderWhite rounded-lg outline-primaryLight"
                />
              </div>
              <div>
                <p className="font-medium mb-2">Email Address</p>
                <input
                  required
                  type="email"
                  className="w-full h-[55px] px-3 bg-transparent border border-borderWhite rounded-lg outline-primaryLight"
                />
              </div>
              <div>
                <p className="font-medium mb-2">Contact Number</p>
                <input
                  required
                  type="text"
                  className="w-full h-[55px] px-3 bg-transparent border border-borderWhite rounded-lg outline-primaryLight"
                />
              </div>

              <div className="col-span-2">
                <div
                  onClick={importImage}
                  className="bg-[#2B2B2B] border-dashed border border-borderWhite p-6 rounded-lg cursor-pointer select-none"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <FileSVG />
                    <h1 className="text-2xl font-semibold">Upload your CV</h1>
                  </div>
                  <p className="text-sm font-light text-secondaryWhite">
                    Only PDF files are allowed. File size should less than 5 MB.
                  </p>
                </div>

                {formData.cv && (
                  <div className="px-5 py-3 bg-primaryDark flex gap-4 mt-4 rounded-lg items-center w-fit ">
                    <p className="text-sm font-extralight">
                      {formData.cv.name}
                    </p>
                    <div className="">
                      <button
                        onClick={() => setFormData({ ...formData, cv: "" })}
                        className="bg-red-500 hover:scale-110 duration-200 p-2 rounded-lg text-sm font-light"
                      >
                        <DeleteSVG />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="col-span-2 flex gap-2 items-center ">
                <div className="h-[25px] w-[25px]">
                  <div
                    onClick={() => setAcceptTerms(!acceptTerms)}
                    id="acceptTerms"
                    className={`${
                      acceptTerms
                        ? "bg-primaryLight border-primaryLight"
                        : "border-white"
                    } border-2 duration-300  rounded h-[25px] w-[25px] flex items-center justify-center cursor-pointer`}
                  >
                    {acceptTerms && <TikSVG />}
                  </div>
                </div>
                <p className="font-medium text-[22px]">
                  I accept that my contact information is handled according to
                  the{" "}
                  <Link href={`/`} className="text-primaryLight">
                    privacy policy
                  </Link>
                </p>
              </div>

              <div>
                <button
                  type="button"
                  className="w-full h-[60px] border border-primaryLight hover:border-primaryGray rounded-lg text-lg font-medium "
                >
                  Save as Draft
                </button>
              </div>
              <div>
                <button
                  className={`${
                    acceptTerms
                      ? "bg-primaryLight border-primaryLight"
                      : "bg-primaryGray border-primaryGray cursor-not-allowed"
                  } w-full h-[60px] border   rounded-lg text-lg font-medium `}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Application;
