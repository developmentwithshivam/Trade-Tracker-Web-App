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
import Logo from "../Logo/Logo";
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
          <div className="flex px-10 py-4  justify-between items-center">
            {/* Left */}
            <Logo textsize={"text-xl md:text-2xl"} />
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
                  className=" cursor-pointer bg-purple-800 text-white p-1 pl-7 pr-7 h-9 hover:bg-purple-900 rounded-md hidden lg:block"
                >
                  Get Started
                </NavLink>
              )}
            </div>
            {/* Right */}
            {islogin && (
              <div className="flex justify-center items-center gap-5">
                <div className="hidden md:block">
                  <AddPostButton />
                </div>
                <div
                  className="flex justify-center items-center gap-3 hover:cursor-pointer"
                  onClick={() => {
                    changetogglebtn();
                  }}
                >
                  <div>{user?.name}</div>
                  <div className=" rounded-full bg-purple-800 w-8 h-8 flex justify-center items-center text-white">
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
                  <button className="px-6 py-2 border bg-purple-800 text-white hover:bg-purple-50 font-semibold rounded-xl shadow cursor-pointer">
                    Login
                  </button>
                </Link>
                <div className="  md:flex gap-5 justify-evenly items-center  hidden">
                  <Link to="/login" className="w-auto md:w-24 ">
                    <Loginbutton word={"Login"} iconname={faRightToBracket} />
                  </Link>

                  <Link to={"Signup"} className="w-auto md:w-28 ">
                    <Loginbutton word={"SignUp"} iconname={faUserPlus} />
                  </Link>

                  {/* <div className="lg:hidden flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faBars}
                    className=" h-6 w-6 text-black hover:text-slate-300  cursor-pointer "
                  />
                </div> */}
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
