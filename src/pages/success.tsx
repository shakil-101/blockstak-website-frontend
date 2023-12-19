import Link from "next/link";
import React from "react";

const Success = () => {
  return (
    <div>
      <div className="container flex items-center justify-center">
        <div className="max-w-[755px] min-h-[350px] bg-[#2E2E2E] p-[60px] rounded-lg">
          <h1 className="text-[32px] font-medium mb-6 ">
            Thank you for applying to this position!
          </h1>
          <p className="text-2xl mb-6 ">
            We have successfully received your application. <br /> We will get
            back to you as soon as possible!
          </p>

          <div>
            <Link href={`/`}>
              <button
                className={`bg-primaryLight border-primaryLight  w-full h-[60px] border   rounded-lg text-lg font-medium `}
              >
                Go Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
