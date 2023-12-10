import React from "react";
import RightArrowSVG from "../SVG/RightArrowSVG";
import styles from "../../styles/buttons.module.css";

const SubmitButton = () => {
  return (
    <div>
      <button className="group w-[210px] bg-primaryLight  py-4 flex items-center justify-center gap-4 rounded border duration-300  border-primaryLight hover:bg-primaryDark hover:border-primaryWhite">
        <span className="text-xl font-medium">Submit</span>
        <div className="group-hover:translate-x-3  duration-300">
          <RightArrowSVG />
        </div>
      </button>
    </div>
  );
};

export default SubmitButton;
