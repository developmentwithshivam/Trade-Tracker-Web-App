import React from "react";
// divheight={"12"}
// thickness={"border-4"}
// size={"h-6 w-6"}
// colour={"border-white"}
function LoadingSpinner({ divheight, size, colour, thickness }) {
  return (
    <div className={`flex items-center justify-center ${divheight}`}>
      <div
        className={`${size} ${thickness} ${colour} animate-spin rounded-full border-t-transparent`}
      ></div>
    </div>
  );
}

export default LoadingSpinner;
// ""
