import React from "react";
import { Outlet } from "react-router";
import Header from "../Header/Headermain";
import Pageloding from "../loading/Pageloding";
import PostForm from "../PostForm/PostForm";
import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import Sidebar from "@/AuthenticatedComponent/Sidebar";
import Searchbar from "@/AuthenticatedComponent/Searchbar";
import MobileNavbar from "@/AuthenticatedComponent/MobileNavbar";
function Layout() {
  const islogin = useSelector((state) => state.login.islogin);
  const loding = useSelector((state) => state.logout.loding);
  const FormIsOpen = useSelector((state) => state.postform.isopen);
  return (
    <>
      {loding && <Pageloding />}
      {islogin && (
        <div className="flex">
          {FormIsOpen && <PostForm />}
          <div className="flex h-screen w-screen overflow-hidden">
            <Sidebar />
            <div className="relative h-full w-full">
              <Searchbar />
              <Outlet />
              <MobileNavbar />
            </div>
          </div>
        </div>
      )}

      {!islogin && (
        <div className="max-w-screen overflow-hidden">
          <Header />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
}

export default Layout;
