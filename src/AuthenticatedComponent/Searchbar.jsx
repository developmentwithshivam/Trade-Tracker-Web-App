import React from "react";
import { Search } from "lucide-react";

function Searchbar() {
  return (
    <div className="absolute flex w-full items-center justify-between bg-white px-4 py-3 shadow-sm">
      {/* Middle: Search Bar */}
      <div className="mx-4 flex w-full max-w-md items-center rounded-full bg-gray-100 px-4 py-2">
        <Search className="h-5 w-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="ml-2 w-full bg-transparent text-gray-700 placeholder-gray-500 outline-none"
        />
      </div>

      {/* Right: Profile Avatar */}
      <div className="flex cursor-pointer items-center gap-3">
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="h-10 w-10 rounded-full border border-gray-300"
        />
      </div>
    </div>
  );
}

export default Searchbar;
