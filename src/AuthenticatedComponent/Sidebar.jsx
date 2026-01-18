import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart3,
  FileText,
  Settings,
  PlusCircle,
} from "lucide-react"; // icons
import Logout from "../logout/Logout";
import Logo from "../component/Logo/Logo";

const navItems = [
  { path: "/home-feed", label: "Home", icon: LayoutDashboard },
  { path: "/trades", label: "My Trades", icon: BarChart3 },
  { path: "/journal", label: "Journal", icon: FileText },
  { path: "/creat-post", label: "Creat Post", icon: PlusCircle },
  { path: "/settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <div className="hidden h-screen w-94 flex-col border-r p-4 md:flex">
      {/* Logo / App Name */}
      <Logo textsize={"text-lg md:text-2xl"} classname={"mb-8"} />
      {/* Nav Links */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map(({ path, label, icon: Icon }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                    isActive
                      ? "bg-black text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <Icon size={20} />
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer Section (Optional) */}
      <div className="text-md mb-1 cursor-pointer px-4 text-gray-500">
        <Logout />
      </div>
    </div>
  );
}
