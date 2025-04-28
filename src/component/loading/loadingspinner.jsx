import React from 'react'
  
  function LoadingSpinner({divheight,size,colour,thickness}) {
    return (
      <div className={`flex items-center justify-center ${divheight}`}>
      <div className={`${size} ${thickness} ${colour} border-t-transparent rounded-full animate-spin`}></div>
    </div>
    )
  }
  
  export default LoadingSpinner
// ""