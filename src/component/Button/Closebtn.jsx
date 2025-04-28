import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setisopen } from "../../redux/slice/Form/PostFromSlice";

function Closebtn() {
  const dispatch = useDispatch();

  const closeform = () => {
    dispatch(setisopen(false));
  };

  return (
    <button
      onClick={closeform}
      type="button"
      className="cursor-pointer absolute top-2 right-4 text-gray-500 hover:text-purple-800 text-2xl transition-colors"
    >
      <FontAwesomeIcon icon={faXmark} />
    </button>
  );
}

export default Closebtn;
