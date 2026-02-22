import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeloginsession,
  setloginsession,
} from "./redux/slice/login/loginSlice.js";
import { getuser } from "./appwrite/auth.js";
import LoadingSpinner from "./component/loading/Loadingspinner.jsx";
import { useQuery } from "@tanstack/react-query";
import PathRouting from "./routing/PathRouting.jsx";
import { Toaster } from "@/components/ui/sonner";
import { useNavigate } from "react-router";

function App() {
  // let isOnline = navigator.onLine;
  const [isOnline, setisOnline] = useState(navigator.onLine);
  const islogin = useSelector((state) => state.login.islogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    isPending: loding,
    isError,
    data,
  } = useQuery({
    queryKey: ["getuserinfo"],
    queryFn: getuser,
    retry: 0,
    refetchOnWindowFocus: false,
  });

  // saperate these useeffect and fix the no-internet;
  // Internet checking
  useEffect(() => {
    const setonline = () => {
      setisOnline(navigator.onLine);
    };
    window.addEventListener("online", setonline);
    window.addEventListener("offline", setonline);

    return () => {
      window.addEventListener("online", setonline);
      window.addEventListener("offline", setonline);
    };
  }, []);

  // Routing for No internet
  useEffect(() => {
    if (!isOnline) {
      navigate("/nointernet", { replace: true });
      console.log("no internet connected");
      return;
    } else {
      navigate(islogin ? "home-feed" : "/", { replace: true });
    }
  }, [isOnline]);

  // Authentication of user
  useEffect(() => {
    if (isOnline) {
      if (data) {
        dispatch(setloginsession(data));
      } else if (isError) {
        dispatch(removeloginsession());
      }
    }
  }, [data, isError]);

  if (loding) {
    return (
      <LoadingSpinner
        divheight={"h-screen"}
        size={"w-12 h-12"}
        colour={"border-purple-800"}
        thickness={"border-4"}
      />
    );
  }
  return (
    <>
      <PathRouting />
      <Toaster />
    </>
  );
}

export default App;
