import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faRightToBracket,faUserPlus } from '@fortawesome/free-solid-svg-icons'

function Loginbutton({word,iconname}) {
  return (
    <>
        <div className={"flex w-full md:ml-0 justify-end md:justify-between items-center group"}>
        <button className="hidden md:ml-4 md:block text-lg font-normal text-black cursor-pointer">{word}</button>
        <FontAwesomeIcon icon={iconname}  className="text-xl text-purple-800 group-hover:text-purple-700 cursor-pointer "/>
        </div>
    </>
  )
}

export default Loginbutton