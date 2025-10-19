import React, { useEffect, useState } from "react";
import { handlelogin } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { replace } from "react-router";
import { toast } from "sonner";
function login() {
  const [email, setemail] = useState("");
  const [errormessage, seterrormessage] = useState("");
  const [successmessage, setsuccessmessage] = useState("");
  const [loading, setloading] = useState(false);
  const [password, setpassword] = useState("");
  const [passwordvesibility, setpasswordvesibility] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log(islogin);
  const handleloginfunc = () => {
    handlelogin(
      setloading,
      seterrormessage,
      setsuccessmessage,
      email,
      password,
      dispatch,
    ).then(() => {
      toast.success("Successfully logged in!", {
        duration: Infinity,
        dismissible: true,
        action: {
          label: "Close",
          onClick: () => toast.dismiss(),
        },
      });
      navigate("/home-feed", { replace: true });
    });
  };

  const togglepasswordvesibility = () => {
    setpasswordvesibility((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center select-none md:bg-gray-100">
      <div className="w-full max-w-md rounded-lg p-8 md:bg-white md:shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Welcome Back
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              className="mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-purple-800 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <div className="relative flex">
              <input
                type={passwordvesibility ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                className="mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-purple-800 focus:outline-none"
              />
              <div
                onClick={togglepasswordvesibility}
                className="absolute top-4 right-3 h-8 w-8 cursor-pointer rounded-full text-center"
              >
                {passwordvesibility ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </div>
            </div>
          </div>
          {errormessage && (
            <div className="mb-2 text-sm text-red-400">{errormessage}</div>
          )}
          {successmessage && (
            <div className="mb-2 text-sm text-green-200">{successmessage}</div>
          )}
          <button
            type="submit"
            className={`w-full rounded-lg ${loading ? "cursor-not-allowed bg-purple-500" : "bg-purple-800"} px-4 py-2 text-white hover:cursor-pointer focus:outline-none`}
            onClick={() => {
              handleloginfunc();
            }}
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/Signup" className="text-purple-800 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default login;
