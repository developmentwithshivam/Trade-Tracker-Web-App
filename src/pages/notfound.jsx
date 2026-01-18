import React, { useEffect } from "react";

function Notfound() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
        <h1 className="pb-5 text-5xl font-bold">404</h1>
        <h6 className="text-3xl font-bold">Oops...page not found.</h6>
      </div>
    </>
  );
}

export default Notfound;
