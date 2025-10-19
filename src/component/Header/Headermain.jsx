import React, { useEffect, useState } from "react";
import {
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import Loginbutton from "../Header/Loginbutton";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Dropdownprofile from "../Drapdownbox/Dropdownprofile";
import AddPostButton from "../Button/Addpostbtn";
import Logo from "../Logo/Logo";
import { motion } from "motion/react";
import Sidebar from "../../AuthenticatedComponent/Sidebar";
// import LogoutIcon from '@mui/icons-material/Logout';
// import Signup from "../OtherPages/Signup";
// hello
const navitems = [
  { label: "Home", path: "" },
  { label: "Features", path: "features" },
  { label: "Pricing", path: "pricing" },
  { label: "Tutorials", path: "tutorials" },
  { label: "Resource", path: "resource" },
  { label: "trive", path: "trive" },
];

function Header() {
  const [toggle, settoggle] = useState(false);
  const islogin = useSelector((state) => state.login.islogin);
  const user = useSelector((state) => state.login.user);

  const changetogglebtn = () => {
    // console.log("This is working");

    settoggle((prev) => !prev);
  };

  return (
    <>
      <header className="select-none">
        <nav className="shadow">
          <div className="flex w-screen items-center justify-between px-10 py-4">
            {/* Left */}
            <Logo textsize={"text-xl md:text-2xl"} />
            {/* Middle */}
            <div className="hidden w-[35rem] justify-around lg:flex">
              <ul className="flex items-center justify-center gap-5">
                {navitems.map((items) => {
                  return (
                    <li className="relative" key={items.label}>
                      <NavLink
                        to={items.path}
                        className={({ isActive }) => {
                          return `w-full cursor-pointer py-2 ${isActive ? "text-black" : "text-black"}`;
                        }}
                      >
                        {({ isActive }) => (
                          <>
                            {items.label}
                            {isActive && (
                              <motion.div
                                layoutId="underline"
                                transition={
                                  {
                                    // type: "spring",
                                    // stiffness: 500,
                                    // damping: 30,
                                  }
                                }
                                className="absolute h-[2px] w-full bg-black px-4"
                              ></motion.div>
                            )}
                          </>
                        )}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
              {!user && (
                <NavLink
                  to="Signup"
                  className="hidden cursor-pointer rounded-md bg-purple-800 p-2 text-white hover:bg-purple-900 lg:block"
                >
                  Get Started
                </NavLink>
              )}
            </div>
            {/* Right */}
            {islogin && (
              <div className="flex items-center justify-center gap-5">
                <div className="hidden md:block">
                  <AddPostButton />
                </div>
                <div
                  className="flex items-center justify-center gap-3 hover:cursor-pointer"
                  onClick={() => {
                    changetogglebtn();
                  }}
                >
                  <div>{user?.name}</div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-800 text-white">
                    {user?.name?.[0]}
                  </div>
                </div>
              </div>
            )}
            {toggle && <Dropdownprofile />}
            {/* Right 2 */}
            {!islogin && (
              <>
                <Link to="/login" className="md:hidden">
                  <button className="cursor-pointer rounded-xl border bg-purple-800 px-6 py-2 font-semibold text-white shadow hover:bg-purple-50">
                    Login
                  </button>
                </Link>
                <div className="hidden items-center justify-evenly gap-5 md:flex">
                  <Link to="/login" className="w-auto md:w-24">
                    <Loginbutton word={"Login"} iconname={faRightToBracket} />
                  </Link>

                  <Link to={"Signup"} className="w-auto md:w-28">
                    <Loginbutton word={"SignUp"} iconname={faUserPlus} />
                  </Link>
                </div>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
