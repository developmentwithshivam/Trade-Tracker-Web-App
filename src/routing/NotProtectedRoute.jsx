import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router";
function NotProtectedRoute() {
  const islogin = useSelector((state) => state.login.islogin);
  return islogin === false ? <Outlet /> : <Navigate to="/home-feed" replace />;
}

export default NotProtectedRoute;
