// import React from "react";

// function MobileNavbar() {
//   return <div className="h-20 w-full bg-blue-400">MobileNavbar</div>;
// }

// export default MobileNavbar;
import React, { useState } from "react";
import { Home, Search, Bell, User, PlusCircle } from "lucide-react";

function MobileBottomNavbar() {
  const [active, setActive] = useState("Home");

  const menuItems = [
    { name: "Home", icon: <Home size={20} /> },
    { name: "Search", icon: <Search size={20} /> },
    { name: "Add", icon: <PlusCircle size={20} /> },
    { name: "Notifications", icon: <Bell size={20} /> },
    { name: "Profile", icon: <User size={20} /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full border-t border-gray-200 bg-white md:hidden dark:border-gray-700 dark:bg-neutral-900">
      <ul className="flex items-center justify-around py-2">
        {menuItems.map((item) => (
          <li
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`flex cursor-pointer flex-col items-center justify-center ${
              active === item.name ? "text-blue-500" : "text-gray-500"
            }`}
          >
            {React.cloneElement(item.icon, {
              stroke: active === item.name ? "#3B82F6" : "#6B7280", // Tailwind blue-500 / gray-500
            })}
            <span className="mt-1 text-xs">{item.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MobileBottomNavbar;
