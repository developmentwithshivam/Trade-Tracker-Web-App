// src/pages/Signup.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form"
import { createuser } from "../appwrite/auth";
import { Navigate } from "react-router";
import { checkerrormessage } from "../login/checkerrormessage";
import PasswordHider from "../component/Password/PasswordHider";

export default function Signup() {
  const [errormessage, seterrormessage] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate();

  const onsubmit = (data)=>{
    console.log(data);
    createuser(data.Email,data.Password,data.Name).then((user)=>{
      console.log("it works");
      
     navigate('/login')
    }).catch((error)=>{
     seterrormessage(checkerrormessage(error)); 
    })
  }


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Create Your Account
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(onsubmit)}>
          <div>
            <label className="block text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              {...register("Name",{required:true})}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-800"
            />
            {errors.Name && <div className="text-sm text-red-600">This field is required</div>}
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              {...register("Email",{required:true})}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-800"
            />
            {errors.Email && <div className="text-sm text-red-600">This field is required</div>}
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            {/* <input
              type="password"
              placeholder="••••••••"
              {...register("Password",{required:true})}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-800"
            />
            {errors.Name && <div className="text-sm text-red-600">This field is required</div>} */}
            <PasswordHider register={register} errors={ errors || false }/>
          </div>
          <div className="text-red-400">{errormessage}</div>
          <button
            type="submit"
            className="w-full bg-purple-800 text-white py-2 rounded-lg hover:bg-purple-800 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-800 hover:underline">
            Log in
          </Link>
        </p>
        
      </div>
    </div>
  );
}

// import { useState } from "react";

// const SignupPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.password) {
//       setError("All fields are required");
//       return;
//     }
//     console.log("Form Submitted", formData);
//     setError("");
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
//         {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//           >
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignupPage; 
