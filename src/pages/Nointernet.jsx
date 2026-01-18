import React from "react";

function Nointernet() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center bg-gray-100 px-4 text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
          alt="No Internet"
          className="mb-6 w-40 animate-bounce"
        />
        <h1 className="mb-2 text-3xl font-semibold text-gray-800">
          No Internet Connection
        </h1>
        <p className="mb-6 text-gray-500">
          Oops! Looks like you’re offline. Check your network connection and try
          again.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="rounded-md bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
        >
          Retry
        </button>
      </div>
    </>
  );
}

export default Nointernet;
