import React from "react";
import { useEffect, useState } from 'react'
import Login from "./login/login.jsx";
import { useDispatch, useSelector } from 'react-redux'
import { removeloginsession, setloginsession } from "./redux/slice/login/loginSlice.js";
import { getuser } from "./appwrite/auth.js";
  import LoadingSpinner from "./component/loading/loadingspinner.jsx"
  import { Routes, Route } from "react-router"; 
import Notfound from "./pages/notfound.jsx";
import Home from "./pages/Home.jsx";
import Layout from "./component/Layout/Layout.jsx";
import Trive from "./pages/Trive.jsx"
import Signup from "./pages/Signup.jsx";
function App() {
  
  const [loding, setloding] = useState(true);
  const user = useSelector((state)=>{return state.login.user})  
  // const user = null;
  // console.log(user);
  
  const dispatch = useDispatch()
  
//   useEffect(() => {
//     console.log(user);  
    
//     if(user==null){
//       console.log("logout is running");
//       dispatch(removeloginsession())
//       console.log("Please login first");
      
//     }
//     else{
//       console.log("login is running");
      
//       getuser().then((res)=>{
        
//         console.log(res);  
//         dispatch(setloginsession(res))
    
//     }).catch((error)=>{
//       console.log(error);
//     })
//     } 
//     setloding(false)
   
// }, [])
// useEffect(() => {
//   getuser().then((user)=>{
//     if(user){
//       console.log(user);  
//       dispatch(setloginsession(user))
//     } else{
//       dispatch(removeloginsession())
//       console.log("Please login first");
//     }
// }).finally(()=>{
//   setloding(false)
// })
// }, [])
  useEffect(() => {
    getuser().then((user)=>{
      dispatch(setloginsession(user))
  
  }).catch(()=>{
    dispatch(removeloginsession())
    console.log("Please login first");
    
  })
  .finally(()=>{
    setloding(false)
  })
}, [])
 
if(loding){
  return <LoadingSpinner divheight={'h-screen'} size={"w-12 h-12"} colour={"border-purple-800"} thickness={"border-4"}/>
}
  return (
    <>
     <Routes>
      <Route path="/" element={<Layout/>}>
          <Route path="" element={<Home/>}/>
          <Route path="trive" element={<Trive/>}/>
      </Route>    
      <Route path="login" element={<Login/>}/>
      {/* <Route path="/" element={user?  <Home/> :  <Login/>} />  */}
      <Route path="/signup" element={<Signup/>} /> 
      {/* <Route path="/login" element={loding?  <LoadingSpinner/> :  <Login/>} />  */}
      <Route path="*" element={<Notfound />} />
    </Routes>
    {/* {
      loding?  <LoadingSpinner/> :  <Login/>
    } */}
    </>
  )
}

export default App
