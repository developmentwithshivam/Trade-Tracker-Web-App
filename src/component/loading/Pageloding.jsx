import React from "react";

function Pageloding() {
  return (
    <>
          <div className="flex justify-center items-center bg-white opacity-60 absolute min-w-screen">
            <div className="flex items-center justify-center h-screen">
              <div className="w-12 h-12 border-4 border-purple-800 border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
    </>
  );
}

export default Pageloding;
