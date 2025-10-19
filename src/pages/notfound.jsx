import React, { useEffect } from "react";

function Notfound() {
  const arr = [1, 2, 3, 4];

  useEffect(() => {
    window.addEventListener("keydown", (e) => console.log(e));
  }, []);

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
