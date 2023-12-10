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
        <div className="px-[120px]">
          <h1 className={`text-[35px] font-medium pb-6`}>
            Let’s Start a Conversation
          </h1>

          <form onSubmit={handleForm}>
            <div className="grid grid-cols-2 gap-10 pb-10">
              <div>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  type="text"
                  placeholder="Your Name"
                  className="bg-primaryDark border border-borderWhite w-full p-5 rounded-md outline-primaryLight placeholder-primaryWhite font-medium text-xl"
                />
              </div>
              <div>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  type="email"
                  placeholder="Your Email"
                  className="bg-primaryDark border border-borderWhite w-full p-5 rounded-md outline-primaryLight placeholder-primaryWhite font-medium text-xl"
                />
              </div>
            </div>

            <div className="pb-10">
              <textarea
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Your Message"
                rows={4}
                className="bg-primaryDark border border-borderWhite w-full p-5 rounded-md outline-primaryLight placeholder-primaryWhite font-medium text-xl"
              />
            </div>
            <div className="flex justify-center">
              <SubmitButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
