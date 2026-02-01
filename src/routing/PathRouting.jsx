import React from "react";
import { Routes, Route } from "react-router";
import NotProtectedRoute from "./NotProtectedRoute";
import ProtectedRoute from "./ProtectedRoute";
import { Home, Notfound, Signup, Trive, PrivacyPolicy } from "../pages/index";
// import { Notfound, PrivacyPolicy, Signup, Trive } from "@/pages";
import HomeFeed from "../AuthenticatedComponent/AuthenticatedPages/HomeFeed";
import Trades from "../AuthenticatedComponent/AuthenticatedPages/Trades";
import Layout from "../component/Layout/Layout";
import Settings from "../AuthenticatedComponent/AuthenticatedPages/Settings";
import Login from "../login/login.jsx";
import CreatePost from "@/AuthenticatedComponent/AuthenticatedPages/CreatePost";
import Nointernet from "../pages/Nointernet";

function PathRouting() {
  return (
    <>
      <Routes>
        {/* Header, Page, Footer */}
        <Route path="/" element={<Layout />}>
          <Route element={<NotProtectedRoute />}>
            <Route path="" element={<Home />} />
            <Route path="trive" element={<Trive />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="" element={<HomeFeed />} />
            <Route path="home-feed" element={<HomeFeed />} />
            <Route path="settings" element={<Settings />} />
            <Route path="trades" element={<Trades />} />
            <Route path="creat-post" element={<CreatePost />} />
          </Route>
        </Route>

        {/* single page Route */}
        <Route element={<NotProtectedRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
        {/* <Route path="/" element={<Render />}> */}
        {!navigator.onLine && (
          <Route path="nointernet" element={<Nointernet />} />
        )}
        {/* </Route> */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default PathRouting;
