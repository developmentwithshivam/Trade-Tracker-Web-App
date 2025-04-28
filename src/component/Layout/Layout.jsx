import React from "react";
import { Outlet } from "react-router";
import Header from "../Header/Headermain";
import Pageloding from "../loading/Pageloding";
import PostForm from "../PostForm/PostForm";
import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
function Layout() {
  const loding = useSelector((state) => state.logout.loding);
  const FormIsOpen = useSelector((state)=> state.postform.isopen)
  return (
    <>
      {loding && <Pageloding />}

      <div className="flex">
      {FormIsOpen && <PostForm />}
      <div className="w-screen">
      <Header />
      <Outlet />
      <Footer/>
      </div>
      </div>
    </>
  );
}

export default Layout;
