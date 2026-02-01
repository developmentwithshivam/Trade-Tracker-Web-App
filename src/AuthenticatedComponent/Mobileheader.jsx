import React from "react";
import { Heart, Plus, Search } from "lucide-react";
import Logo from "@/component/Logo/Logo";
import { NavLink } from "react-router";

function Mobileheader() {
  return (
    <>
      <header className="flex items-center justify-between bg-white px-4 py-5">
        {/* Add Post button (Right) */}
        <NavLink to="/creat-post">
          <Plus className="h-7 w-7" />
        </NavLink>
        {/* Logo (Center) */}
        <Logo textsize={"text-2xl"} />
        {/* Like button (Left) */}
        <button>
          <Heart className="h-6 w-6" />
        </button>
      </header>
    </>
  );
}

export default Mobileheader;
