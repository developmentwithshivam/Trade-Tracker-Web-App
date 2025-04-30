import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import Loginbutton from "../Header/Loginbutton";
import { Link, NavLink } from "react-router";
import { useSelector } from "react-redux";
import Logout from "../../Logout/Logout";
import Dropdownprofile from "../Drapdownbox/Dropdownprofile";
import AddPostButton from "../Button/Addpostbtn";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
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
          <div className="flex px-10 py-4 bg-amber-200 justify-between items-center">
            {/* Left */}
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faChartLine}
                className="text-purple-600 text-2xl"
              />
              <h1 className="text-2xl font-bold text-gray-900 tracking-wide">
                TradeTracker 
              </h1>
            </div>
            {/* Middle */}
            <div className="lg:flex gap-10 hidden ">
              <ul className="flex gap-5 ">
                {navitems.map((items) => {
                  return (
                    <NavLink
                      to={items.path}
                      key={items.label}
                      className={({ isActive }) => {
                        return isActive
                          ? "border-b-2 border-black py-2  cursor-pointer"
                          : "border-b-2 border-transparent py-2 hover:border-black cursor-pointer";
                      }}
                    >
                      {items.label}
                    </NavLink>
                  );
                })}
              </ul>
              {!user && (
                <NavLink
                  to="Signup"
                  className="shadow-xl cursor-pointer bg-purple-900 text-white p-1 pl-7 pr-7 h-9 hover:text-black hover:bg-white rounded-md hidden lg:block"
                >
                  Get Started
                </NavLink>
              )}
            </div>
            {/* Right */}
            {islogin && (
              <div className="flex justify-center items-center gap-5">
                <div>
                  <AddPostButton />
                </div>
                <div
                  className="flex justify-center items-center gap-3 hover:cursor-pointer"
                  onClick={() => {
                    changetogglebtn();
                  }}
                >
                  <div>{user?.name}</div>
                  <div className=" rounded-full bg-purple-900 w-8 h-8 flex justify-center items-center text-white">
                    {user?.name?.[0]}
                  </div>
                </div>
              </div>
            )}
            {toggle && <Dropdownprofile />}
            {/* Right 2 */}
            {!islogin && (
              <div className=" w-44 md:w-80 lg:w-64 flex justify-evenly items-center ">
                <Link to="/login" className="w-auto md:w-24 ">
                  <Loginbutton word={"Login"} iconname={faRightToBracket} />
                </Link>

                <NavLink to={"Signup"} className="w-auto md:w-28  ">
                  <Loginbutton word={"SignUp"} iconname={faUserPlus} />
                </NavLink>

                <div className="lg:hidden flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faBars}
                    className=" h-6 w-6 text-black hover:text-slate-300  cursor-pointer "
                  />
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
