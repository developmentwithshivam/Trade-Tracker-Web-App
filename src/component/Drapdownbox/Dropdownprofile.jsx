import React from "react";
import Logout from "../../logout/Logout";
import { useSelector } from "react-redux";

function Dropdownprofile() {
  const obj = [
    {
      optname: "Profile",
    },
    {
      optname: "Settings",
    },
  ];

  const islogin = useSelector((state) => {
    return state.login.islogin;
  });
  return (
    <>
      {islogin && (
        <div className="borde absolute top-16 right-10 z-10 min-w-52 bg-white px-3 py-2 shadow hover:cursor-pointer">
          {obj.map((item) => {
            return (
              <p
                key={item.optname}
                className="text-md border-b border-slate-200 pt-1 hover:text-purple-800"
              >
                {item.optname}
              </p>
            );
          })}
          <div className="text-md cursor-pointer pt-1 hover:text-purple-800">
            <Logout />
          </div>
        </div>
      )}
    </>
  );
}

export default Dropdownprofile;
