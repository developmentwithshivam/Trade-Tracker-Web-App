import React from 'react'
import Logout from "../../logout/Logout"
import { useSelector } from 'react-redux';

function Dropdownprofile() {
    const obj = [{
        optname : "Profile"},
        {
            optname : "Settings"}
       
    ]

    const islogin = useSelector((state) => {
      return state.login.islogin;
    });
  return (
    <>
      {islogin && (
        <div className='absolute right-10 top-16 px-3 py-2 min-w-52 borde bg-white shadow hover:cursor-pointer'>
        {obj.map((item)=>{
            return <p key={item.optname} className='hover:text-purple-800  pt-1 text-md border-b border-slate-200'>{item.optname}</p>
        })}
        <div className='hover:text-purple-800 cursor-pointer pt-1 text-md'><Logout/></div>
      </div>
      )}
     
    </>
  )
}

export default Dropdownprofile