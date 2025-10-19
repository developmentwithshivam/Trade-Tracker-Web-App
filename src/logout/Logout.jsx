import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
// import { handleLogout } from "../index";
import { handlelogout } from "../index";
import { setloding } from "../redux/slice/logout/logoutSlice";
function Logout() {
  const dispatch = useDispatch();

  const islogin = useSelector((state) => state.login.islogin);

  return (
    <>
      <button
        className="cursor-pointer"
        onClick={() => {
          dispatch(setloding(true));
          handlelogout(islogin, dispatch);
        }}
      >
        <div className="flex items-center gap-3">
          <LogoutIcon className="text-black" sx={{ fontSize: 20 }} />
          <p className="text-black">Logout</p>
        </div>
      </button>
    </>
  );
}

export default Logout;
