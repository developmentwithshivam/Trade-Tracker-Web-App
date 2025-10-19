import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Loginbutton({ word, iconname }) {
  return (
    <>
      <div className={"group flex items-center gap-2"}>
        <button className="cursor-pointer text-lg font-normal text-black">
          {word}
        </button>
        <FontAwesomeIcon
          icon={iconname}
          className="cursor-pointer text-xl text-purple-800 group-hover:text-purple-900"
        />
      </div>
    </>
  );
}

export default Loginbutton;
