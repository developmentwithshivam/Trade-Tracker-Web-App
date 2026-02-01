// // AddPostButton.jsx
// import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { useDispatch } from "react-redux";
// import { setisopen } from "../../redux/slice/Form/PostFromSlice";

// function AddPostButton() {
//   const dispatch = useDispatch();
//   const openform = () => {
//     dispatch(setisopen(true));
//   };

//   return (
//     <button
//       onClick={openform}
//       className="group flex cursor-pointer items-center gap-2 rounded-full bg-purple-800 px-5 py-2 text-sm font-semibold text-white shadow"
//     >
//       <FontAwesomeIcon icon={faPlus} />
//       Add Post
//     </button>
//   );
// }

// export default AddPostButton;
