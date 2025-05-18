import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Loginbutton({word,iconname}) {
  return (
    <>
        <div className={"flex items-center gap-2  group"}>
        <button className="text-lg font-normal text-black cursor-pointer">{word}</button>
        <FontAwesomeIcon icon={iconname}  className="text-xl text-purple-800 group-hover:text-purple-900 cursor-pointer"/>
        </div>
    </>
  )
}

export default Loginbutton