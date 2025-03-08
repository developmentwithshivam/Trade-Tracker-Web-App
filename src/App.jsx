// import conf from './conf/conf'
import React from "react";
import { useEffect, useState } from 'react'
import Login from "./login/login.jsx";
// import {getinputvalue} from './commonfunctions/getinputvalue.js'

// import createuser from './appwrite/createuser'
// import login from './appwrite/login'
// import logout from './appwrite/logout'
// import {useDispatch } from 'react-redux'
// import {createuser,login,logout} from './appwrite/auth.js'
import { useDispatch } from 'react-redux'
import { removeloginsession, setloginsession } from "./redux/slice/login/loginSlice.js";
import { getuser } from "./appwrite/auth.js";
  import LoadingSpinner from "./component/loading/loadingspinner.jsx"
// import islogin from './appwrite/islogin'
function App() {
  
  const [loding, setloding] = useState(true);
  // const [sessionId, setsessionId] = useState('')
  // const [loginstatus, setloginstatus] = useState('')



  // const session = {
  //   sessionId : "",
  // };

  // useEffect(() => {

  //   console.log(session.sessionId);
  // }, [session.sessionId])
  
  
// const [isLogin, setisisLogin] = useState(false);
//  const  setislogindetails = async ()=>{
//   try{

//     const isLogin =await islogin();
//     setisisLogin(isLogin)
//   }
//   catch(error){
//     console.log("By the setislogindetails",error);
    
//   }
// }
  // useEffect(() => {

  //   setislogindetails()
    
  // }, [])
// const usedispatch = ()=>{
//    useDispatch()
// }
const dispatch = useDispatch()
useEffect(() => {
  getuser().then((user)=>{
    if(user){
      dispatch(setloginsession(user))
    } else {
      dispatch(removeloginsession())
    }
  }).finally(()=>{
    setloding(false)
  })
}, [])
 
  return (
    <>
    {
      loding?  <LoadingSpinner/> :  <Login/>
    }
  
    {/* <button onClick={()=>{createuser()}} className="bg-blue-700 text-orange-400" >create account</button>
    <div className='bg-blue-700 text-orange-400 w-8 h-10 p-8'>helo</div>
    <button onClick={()=>{setloading(true); session.sessionId=login(setloading)}} disabled={loading}>{loading?'Loging in....':'Login'}</button>
    <button onClick={()=>{login()}}>Login</button>
    <button onClick={()=>{logout()}} >Logout</button>
    {isLogin.status?"Logout":"Login"} */}
    </>
  )
}

export default App
