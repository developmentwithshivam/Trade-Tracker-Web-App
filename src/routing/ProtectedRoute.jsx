import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router";
function ProtectedRoute() {
  const islogin = useSelector((state) => state.login.islogin);
  return islogin === true ? <Outlet /> : <Navigate to="/" />;
  // return <Outlet />;
}

export default ProtectedRoute;
