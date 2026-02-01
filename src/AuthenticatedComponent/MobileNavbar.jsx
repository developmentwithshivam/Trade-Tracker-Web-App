// import React from "react";

// function MobileNavbar() {
//   return <div className="h-20 w-full bg-blue-400">MobileNavbar</div>;
// }

// export default MobileNavbar;
import React, { useState } from "react";
import { Home, Search, Bell, User, PlusCircle } from "lucide-react";
import { NavLink } from "react-router";
function MobileBottomNavbar() {
  const [active, setActive] = useState("Home");

  const menuItems = [
    { name: "Home", icon: <Home size={20} />, path: "/home-feed" },
    { name: "Search", icon: <Search size={20} />, path: "" },
    { name: "Profile", icon: <User size={20} />, path: "" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full border-t border-gray-200 bg-white md:hidden dark:border-gray-700 dark:bg-neutral-900">
      <ul className="flex items-center justify-around py-2">
        {menuItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.name}
            className={({ isActive }) =>
              `flex cursor-pointer flex-col items-center justify-center ${
                isActive ? "text-blue-500" : "text-gray-500"
              }`
            }
          >
            <span>{item.icon}</span>
            <span className="mt-1 text-xs">{item.name}</span>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}

export default MobileBottomNavbar;
