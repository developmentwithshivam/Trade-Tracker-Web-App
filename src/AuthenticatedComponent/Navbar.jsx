// import React, { useState } from "react";
// import Logo from "../component/Logo/Logo";
// import { Link, NavLink } from "react-router";
// import { useSelector } from "react-redux";
// import AddPostButton from "../component/Button/Addpostbtn";
// import { motion } from "motion/react";
// import Dropdownprofile from "../component/Drapdownbox/Dropdownprofile";
// import Loginbutton from "../component/Header/Loginbutton";
// import {
//   faRightToBracket,
//   faUserPlus,
// } from "@fortawesome/free-solid-svg-icons";

// function Navbar() {
//   const [toggle, settoggle] = useState(false);
//   const islogin = useSelector((state) => state.login.islogin);
//   const user = useSelector((state) => state.login.user);

//   const changetogglebtn = () => {
//     // console.log("This is working");

//     settoggle((prev) => !prev);
//   };
//   return (
//     <nav className="absolute z-10 bg-white shadow">
//       <div className="flex w-screen items-center justify-between py-4 pr-10 pl-5">
//         {/* Left */}
//         <Logo textsize={"text-xl md:text-2xl"} />
//         {/* Middle */}
//         <div className=""></div>
//         {/* Right */}
//         {islogin && (
//           <div className="flex items-center justify-center gap-5">
//             <div className="hidden md:block">
//               <AddPostButton />
//             </div>
//             <div
//               className="flex items-center justify-center gap-3 hover:cursor-pointer"
//               onClick={() => {
//                 changetogglebtn();
//               }}
//             >
//               <div>{user?.name}</div>
//               <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-800 text-white">
//                 {user?.name?.[0]}
//               </div>
//             </div>
//           </div>
//         )}
//         {toggle && <Dropdownprofile />}
//         {/* Right 2 */}
//         {!islogin && (
//           <>
//             <Link to="/login" className="md:hidden">
//               <button className="cursor-pointer rounded-xl border bg-purple-800 px-6 py-2 font-semibold text-white shadow hover:bg-purple-50">
//                 Login
//               </button>
//             </Link>
//             <div className="hidden items-center justify-evenly gap-5 md:flex">
//               <Link to="/login" className="w-auto md:w-24">
//                 <Loginbutton word={"Login"} iconname={faRightToBracket} />
//               </Link>

//               <Link to={"Signup"} className="w-auto md:w-28">
//                 <Loginbutton word={"SignUp"} iconname={faUserPlus} />
//               </Link>
//             </div>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
