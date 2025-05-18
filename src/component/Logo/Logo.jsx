import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
function Logo({textcolor,textsize}) {
  return (
    <>
    <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faChartLine}
                className={`text-purple-600 ${textsize}`}
              />
              <h1 className={`${textsize} font-bold ${textcolor} tracking-wide`}>
                TradeTracker 
              </h1>
            </div>
    </>
  )
}

export default Logo