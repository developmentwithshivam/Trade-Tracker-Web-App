import React from "react";
const CardSkeleton = () => {
  return (<>
  {/* <div className="grid grid-cols-4 "> */}
    <div className="my-5 max-w-80 rounded-3xl shadow-sm overflow-hidden h-80">
      {/* Skeleton Card */}
      <div className="h-full bg-gray-200 animate-pulse rounded-lg shadow-lg p-4">
        {/* Skeleton Image */}
        <div className="bg-gray-300 h-44 rounded-md mb-4"></div>

        {/* Skeleton Text */}
        <div className="h-5 bg-gray-300 rounded-md mb-2 w-3/4"></div>
        <div className="h-5 bg-gray-300 rounded-md mb-2"></div>

        {/* Skeleton Footer */}
        <div className="flex items-center justify-between mt-4">
          <div className="h-4 bg-gray-300 rounded-md w-1/3"></div>
          <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
        </div>
      </div>
    </div>
  {/* </div> */}

  </>
  );
};

export default CardSkeleton;


