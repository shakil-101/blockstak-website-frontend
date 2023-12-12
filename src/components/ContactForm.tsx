import React, { useState } from "react";
import RightArrowSVG from "./SVG/RightArrowSVG";
import SubmitButton from "./buttons/SubmitButton";
import { toast } from "react-toastify";

const ContactForm = () => {
  type formDataType = {
    name: string;
    email: string;
    message: string;
  };
  const [formData, setFormData] = useState<formDataType>({
    name: "",
    email: "",
    message: "",
  });

  const handleForm = (e: any) => {
    e.preventDefault();
    toast.success("Submission successful");
  };
  return (
    <div id="contact-us" className="py-20 ">
      <div className="container mx-auto">
        <div className="xl:px-[120px]">
          <h1 className={`sm:text-[35px] text-lg font-medium pb-6`}>
            Let’s Start a Conversation
          </h1>

          <form onSubmit={handleForm}>
            <div className="grid lg:grid-cols-2 grid-cols-1 sm:gap-10 gap-6 sm:pb-10 pb-6">
              <div>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  type="text"
                  placeholder="Your Name"
                  className="bg-primaryDark border border-borderWhite w-full sm:p-5 p-3 rounded-md outline-primaryLight placeholder-primaryWhite sm:font-medium sm:text-xl text-sm"
                />
              </div>
              <div>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  type="email"
                  placeholder="Your Email"
                  className="bg-primaryDark border border-borderWhite w-full sm:p-5 p-3 rounded-md outline-primaryLight placeholder-primaryWhite sm:font-medium sm:text-xl text-sm"
                />
              </div>
            </div>

            <div className="sm:pb-10 pb-6">
              <textarea
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Your Message"
                rows={4}
                className="bg-primaryDark border border-borderWhite w-full sm:p-5 p-3 rounded-md outline-primaryLight placeholder-primaryWhite sm:font-medium sm:text-xl text-sm"
              />
            </div>
            <div className="sm:flex justify-center">
              <button className="group sm:w-[210px] w-full bg-primaryLight  sm:py-4 py-2 flex items-center justify-center gap-4 rounded border duration-300  border-primaryLight hover:bg-primaryDark hover:border-primaryWhite">
                <span className="sm:text-xl text-lg sm:font-medium">
                  Submit
                </span>
                <div className="group-hover:translate-x-3  duration-300">
                  <RightArrowSVG
                    width="28px"
                    height="28px"
                    fillColor="#F4F4F4"
                  />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
