import React, { useEffect, useState } from "react";
import { handlelogin } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';
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
      dispatch
    ).then(() => {
      navigate("/");
    });
  };

  const togglepasswordvesibility = ()=>{
    console.log("run");
    
    setpasswordvesibility((prev)=>!prev)
  }

  return (
    <div className="flex items-center justify-center min-w-screen min-h-screen md:bg-gray-100 select-none ">
      <div className="w-full max-w-md md:bg-white rounded-lg md:shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
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
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-800"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <div className="flex relative">
              <input
              type={passwordvesibility?"text":"password"}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-800"
              />
              <div onClick={togglepasswordvesibility} className="w-8 h-8 text-center rounded-full absolute right-3 top-4 cursor-pointer">
             {passwordvesibility? <FontAwesomeIcon icon={faEye} />:<FontAwesomeIcon icon={faEyeSlash} />
}
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
            className="w-full px-4 py-2 text-white bg-purple-800 rounded-lg hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-800 hover:cursor-pointer"
            onClick={() => {
              handleloginfunc();
            }}
          >
            {loading ? "Login..." : "Login"}
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
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
